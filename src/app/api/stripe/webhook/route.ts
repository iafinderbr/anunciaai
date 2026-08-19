import { eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { proAccessGrant, user } from "@/db/schema";
import { PRO_MONTHLY_PRICE_CENTS, PRO_PIX_ACCESS_DAYS } from "@/lib/plans";
import {
  localSubscriptionStatus,
  retrieveSubscription,
  stripeExpectedLivemode,
  stripeWebhookConfigured,
  stripeWebhookSecret,
  subscriptionHasProPrice,
  verifyStripeWebhook,
  type StripeSubscription,
} from "@/lib/stripe";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_WEBHOOK_BYTES = 1024 * 1024;
const NO_STORE_HEADERS = { "Cache-Control": "no-store" };

function stringId(value: unknown): string | null {
  if (typeof value === "string" && value) return value;
  if (value && typeof value === "object" && "id" in value && typeof value.id === "string") return value.id;
  return null;
}

function metadataValue(object: Record<string, unknown>, key: string): string | null {
  const metadata = object.metadata;
  if (!metadata || typeof metadata !== "object") return null;
  const value = (metadata as Record<string, unknown>)[key];
  return typeof value === "string" ? value : null;
}

/**
 * checkout.session.completed apenas vincula a assinatura criada pela nossa
 * sessão de Checkout ao usuário. O acesso Pro só é concedido por
 * syncSubscription depois que a Stripe confirma status `active` e o Price
 * esperado do Pro.
 */
async function attachCheckoutToUser(object: Record<string, unknown>): Promise<string | null> {
  const userId = typeof object.client_reference_id === "string" ? object.client_reference_id : null;
  const subscriptionId = stringId(object.subscription);
  const mode = typeof object.mode === "string" ? object.mode : null;
  const purchaseType = metadataValue(object, "purchaseType");
  const plan = metadataValue(object, "plan");

  if (
    !userId ||
    !subscriptionId ||
    mode !== "subscription" ||
    purchaseType !== "subscription" ||
    plan !== "pro"
  ) {
    return null;
  }

  await db
    .update(user)
    .set({
      subscriptionProvider: "stripe",
      externalSubscriptionId: subscriptionId,
      updatedAt: new Date(),
    })
    .where(eq(user.id, userId));

  return subscriptionId;
}

async function grantPaidPixAccess(object: Record<string, unknown>) {
  const checkoutSessionId = typeof object.id === "string" ? object.id : null;
  const userId = typeof object.client_reference_id === "string" ? object.client_reference_id : null;
  const paymentStatus = typeof object.payment_status === "string" ? object.payment_status : null;
  const mode = typeof object.mode === "string" ? object.mode : null;
  const amountTotal = typeof object.amount_total === "number" ? object.amount_total : null;
  const currency = typeof object.currency === "string" ? object.currency.toLowerCase() : null;
  const purchaseType = metadataValue(object, "purchaseType");
  const plan = metadataValue(object, "plan");
  const accessDays = metadataValue(object, "accessDays");

  if (
    !checkoutSessionId ||
    !userId ||
    paymentStatus !== "paid" ||
    mode !== "payment" ||
    amountTotal !== PRO_MONTHLY_PRICE_CENTS ||
    currency !== "brl" ||
    purchaseType !== "pix_30d" ||
    plan !== "pro" ||
    accessDays !== String(PRO_PIX_ACCESS_DAYS)
  ) {
    return;
  }

  await db.transaction(async (tx) => {
    const inserted = await tx
      .insert(proAccessGrant)
      .values({
        checkoutSessionId,
        userId,
        provider: "stripe-pix",
        accessDays: PRO_PIX_ACCESS_DAYS,
      })
      .onConflictDoNothing()
      .returning({ checkoutSessionId: proAccessGrant.checkoutSessionId });

    // A mesma sessão pode aparecer em checkout.session.completed e depois em
    // async_payment_succeeded. Apenas a primeira confirmação paga concede dias.
    if (inserted.length === 0) return;

    const [updated] = await tx
      .update(user)
      .set({
        plan: "pro",
        subscriptionStatus: "inactive",
        subscriptionProvider: "stripe-pix",
        externalSubscriptionId: null,
        // A atualização é atômica no PostgreSQL: duas compras Pix diferentes
        // confirmadas ao mesmo tempo somam 30 dias cada, sem perder crédito.
        proAccessUntil: sql`greatest(coalesce(${user.proAccessUntil}, now()), now()) + (${PRO_PIX_ACCESS_DAYS} * interval '1 day')`,
        updatedAt: new Date(),
      })
      .where(eq(user.id, userId))
      .returning({ id: user.id });

    if (!updated) throw new Error("Pix checkout references an unknown user");
  });
}

async function syncSubscription(subscription: StripeSubscription) {
  const metadataUserId = subscription.metadata?.userId?.trim() || null;
  const status = localSubscriptionStatus(subscription.status);
  const validProPrice = subscriptionHasProPrice(subscription);
  const active = validProPrice && status === "active";
  const canceled = status === "canceled";

  const values = {
    plan: active ? "pro" : "free",
    subscriptionStatus: validProPrice ? status : "inactive",
    subscriptionProvider: "stripe",
    externalSubscriptionId: canceled ? null : subscription.id,
    proAccessUntil: null,
    updatedAt: new Date(),
  };

  if (metadataUserId) {
    await db.update(user).set(values).where(eq(user.id, metadataUserId));
    return;
  }

  await db.update(user).set(values).where(eq(user.externalSubscriptionId, subscription.id));
}

async function syncCurrentSubscription(object: Record<string, unknown>) {
  const subscriptionId = typeof object.id === "string" ? object.id : null;
  if (!subscriptionId) throw new Error("Stripe subscription event is missing an id");

  // A Stripe não garante ordem de entrega de webhooks. Recuperar o objeto atual
  // evita que um evento antigo entregue atrasado reative ou cancele um plano com
  // base em um snapshot obsoleto.
  const currentSubscription = await retrieveSubscription(subscriptionId);
  await syncSubscription(currentSubscription);
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || "0");
  if (Number.isFinite(contentLength) && contentLength > MAX_WEBHOOK_BYTES) {
    return Response.json({ ok: false, error: "payload_too_large" }, { status: 413, headers: NO_STORE_HEADERS });
  }

  if (!stripeWebhookConfigured()) {
    return Response.json({ ok: false, error: "webhook_not_configured" }, { status: 503, headers: NO_STORE_HEADERS });
  }

  try {
    stripeWebhookSecret();
  } catch {
    return Response.json({ ok: false, error: "webhook_not_configured" }, { status: 503, headers: NO_STORE_HEADERS });
  }

  const rawBody = await request.text();
  if (Buffer.byteLength(rawBody, "utf8") > MAX_WEBHOOK_BYTES) {
    return Response.json({ ok: false, error: "payload_too_large" }, { status: 413, headers: NO_STORE_HEADERS });
  }

  let event;
  try {
    event = verifyStripeWebhook(rawBody, request.headers.get("stripe-signature"));
  } catch (error) {
    console.warn("stripe_webhook_rejected", error instanceof Error ? error.message : "invalid_webhook");
    return Response.json({ ok: false, error: "invalid_signature" }, { status: 400, headers: NO_STORE_HEADERS });
  }

  const expectedLivemode = stripeExpectedLivemode();
  if (expectedLivemode !== null && event.livemode !== expectedLivemode) {
    console.warn("stripe_webhook_rejected", "event_mode_mismatch");
    return Response.json({ ok: false, error: "event_mode_mismatch" }, { status: 400, headers: NO_STORE_HEADERS });
  }

  try {
    await ensureDatabaseSchema();

    if (event.type === "checkout.session.completed") {
      const subscriptionId = await attachCheckoutToUser(event.data.object);
      if (subscriptionId) {
        const currentSubscription = await retrieveSubscription(subscriptionId);
        await syncSubscription(currentSubscription);
      }
      await grantPaidPixAccess(event.data.object);
    }

    if (event.type === "checkout.session.async_payment_succeeded") {
      await grantPaidPixAccess(event.data.object);
    }

    if (
      event.type === "customer.subscription.created" ||
      event.type === "customer.subscription.updated" ||
      event.type === "customer.subscription.deleted"
    ) {
      await syncCurrentSubscription(event.data.object);
    }

    return Response.json({ received: true }, { headers: NO_STORE_HEADERS });
  } catch (error) {
    console.error("stripe_webhook_processing_error", event.id, error instanceof Error ? error.message : "unknown_error");
    return Response.json({ ok: false, error: "webhook_processing_failed" }, { status: 500, headers: NO_STORE_HEADERS });
  }
}
