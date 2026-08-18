import { eq } from "drizzle-orm";
import { db } from "@/db";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { user } from "@/db/schema";
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

function stringId(value: unknown): string | null {
  if (typeof value === "string" && value) return value;
  if (value && typeof value === "object" && "id" in value && typeof value.id === "string") return value.id;
  return null;
}

async function attachCheckoutToUser(object: Record<string, unknown>) {
  const userId = typeof object.client_reference_id === "string" ? object.client_reference_id : null;
  const subscriptionId = stringId(object.subscription);
  if (!userId || !subscriptionId) return;

  await db
    .update(user)
    .set({
      plan: "pro",
      subscriptionProvider: "stripe",
      externalSubscriptionId: subscriptionId,
      updatedAt: new Date(),
    })
    .where(eq(user.id, userId));
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
