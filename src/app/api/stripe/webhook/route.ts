import { eq } from "drizzle-orm";
import { db } from "@/db";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { proAccessGrant, user } from "@/db/schema";
import { PRO_PIX_ACCESS_DAYS } from "@/lib/plans";
import {
  localSubscriptionStatus,
  stripeBillingConfigured,
  stripeWebhookSecret,
  subscriptionHasProPrice,
  verifyStripeWebhook,
  type StripeSubscription,
} from "@/lib/stripe";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_WEBHOOK_BYTES = 1024 * 1024;
const NO_STORE_HEADERS = { "Cache-Control": "no-store" };
const DAY_MS = 24 * 60 * 60 * 1000;

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
async function attachCheckoutToUser(object: Record<string, unknown>) {
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
    return;
  }

  await db
    .update(user)
    .set({
      subscriptionProvider: "stripe",
      externalSubscriptionId: subscriptionId,
      updatedAt: new Date(),
    })
    .where(eq(user.id, userId));
}

async function grantPaidPixAccess(object: Record<string, unknown>) {
  const checkoutSessionId = typeof object.id === "string" ? object.id : null;
  const userId = typeof object.client_reference_id === "string" ? object.client_reference_id : null;
  const paymentStatus = typeof object.payment_status === "string" ? object.payment_status : null;
  const purchaseType = metadataValue(object, "purchaseType");

  if (!checkoutSessionId || !userId || paymentStatus !== "paid" || purchaseType !== "pix_30d") return;

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

    const [current] = await tx
      .select({ proAccessUntil: user.proAccessUntil })
      .from(user)
      .where(eq(user.id, userId))
      .limit(1);

    if (!current) throw new Error("Pix checkout references an unknown user");

    const now = new Date();
    const base = current.proAccessUntil && current.proAccessUntil.getTime() > now.getTime()
      ? current.proAccessUntil
      : now;
    const proAccessUntil = new Date(base.getTime() + PRO_PIX_ACCESS_DAYS * DAY_MS);

    await tx
      .update(user)
      .set({
        plan: "pro",
        subscriptionStatus: "inactive",
        subscriptionProvider: "stripe-pix",
        externalSubscriptionId: null,
        proAccessUntil,
        updatedAt: now,
      })
      .where(eq(user.id, userId));
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

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || "0");
  if (Number.isFinite(contentLength) && contentLength > MAX_WEBHOOK_BYTES) {
    return Response.json({ ok: false, error: "payload_too_large" }, { status: 413, headers: NO_STORE_HEADERS });
  }

  if (!stripeBillingConfigured()) {
    return Response.json({ ok: false, error: "billing_not_configured" }, { status: 503, headers: NO_STORE_HEADERS });
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

  try {
    await ensureDatabaseSchema();

    if (event.type === "checkout.session.completed") {
      await attachCheckoutToUser(event.data.object);
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
      await syncSubscription(event.data.object as unknown as StripeSubscription);
    }

    return Response.json({ received: true }, { headers: NO_STORE_HEADERS });
  } catch (error) {
    console.error("stripe_webhook_processing_error", event.id, error instanceof Error ? error.message : "unknown_error");
    return Response.json({ ok: false, error: "webhook_processing_failed" }, { status: 500, headers: NO_STORE_HEADERS });
  }
}
