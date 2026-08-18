import { createHmac, timingSafeEqual } from "node:crypto";
import { PRO_MONTHLY_PRICE_CENTS, PRO_PIX_ACCESS_DAYS } from "@/lib/plans";
import { SITE_URL } from "@/lib/site";

const STRIPE_API_BASE = "https://api.stripe.com/v1";
const TEST_PRO_PRICE_ID = "price_1U5ofhBw7MQYFAhHe43J3ERq";
const WEBHOOK_TOLERANCE_SECONDS = 300;

export type StripeSubscriptionStatus =
  | "inactive"
  | "trialing"
  | "active"
  | "past_due"
  | "canceled";

type StripeErrorResponse = {
  error?: {
    message?: string;
    type?: string;
  };
};

export type StripeCheckoutSession = {
  id: string;
  url: string | null;
  mode?: string | null;
  payment_status?: string | null;
  client_reference_id?: string | null;
  subscription?: string | { id: string } | null;
  metadata?: Record<string, string> | null;
};

export type StripeSubscription = {
  id: string;
  status: string;
  customer: string | { id: string };
  metadata?: Record<string, string>;
  items?: {
    data?: Array<{
      price?: { id?: string };
    }>;
  };
};

export type StripeWebhookEvent = {
  id: string;
  type: string;
  livemode: boolean;
  data: { object: Record<string, unknown> };
};

function stripeSecretKey(): string {
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured");
  return key;
}

export function stripeWebhookSecret(): string {
  const secret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  if (!secret) throw new Error("STRIPE_WEBHOOK_SECRET is not configured");
  return secret;
}

export function stripeProPriceId(): string {
  const configured = process.env.STRIPE_PRO_PRICE_ID?.trim();
  if (configured) return configured;

  const key = stripeSecretKey();
  if (key.includes("_test_")) return TEST_PRO_PRICE_ID;

  throw new Error("STRIPE_PRO_PRICE_ID is required when using a live Stripe key");
}

export function stripeBillingConfigured(): boolean {
  try {
    stripeSecretKey();
    stripeProPriceId();
    return true;
  } catch {
    return false;
  }
}

export function stripePixConfigured(): boolean {
  if (process.env.STRIPE_PIX_ENABLED !== "true") return false;

  try {
    stripeSecretKey();
    return true;
  } catch {
    return false;
  }
}

async function stripeRequest<T>(path: string, options: { method?: "GET" | "POST"; body?: URLSearchParams } = {}): Promise<T> {
  const method = options.method ?? "GET";
  const response = await fetch(`${STRIPE_API_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${stripeSecretKey()}`,
      ...(options.body ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
    },
    body: options.body,
    cache: "no-store",
  });

  const payload = (await response.json()) as T & StripeErrorResponse;
  if (!response.ok) {
    throw new Error(payload.error?.message || `Stripe request failed with status ${response.status}`);
  }

  return payload;
}

export async function createProCheckoutSession(input: {
  userId: string;
  email: string;
}): Promise<StripeCheckoutSession> {
  const body = new URLSearchParams();
  body.set("mode", "subscription");
  body.set("success_url", `${SITE_URL}/conta/plano?checkout=success`);
  body.set("cancel_url", `${SITE_URL}/conta/plano?checkout=canceled`);
  body.set("line_items[0][price]", stripeProPriceId());
  body.set("line_items[0][quantity]", "1");
  body.set("client_reference_id", input.userId);
  body.set("customer_email", input.email);
  body.set("metadata[userId]", input.userId);
  body.set("metadata[plan]", "pro");
  body.set("metadata[purchaseType]", "subscription");
  body.set("subscription_data[metadata][userId]", input.userId);
  body.set("subscription_data[metadata][plan]", "pro");
  body.set("locale", "auto");
  body.set("billing_address_collection", "auto");

  return stripeRequest<StripeCheckoutSession>("/checkout/sessions", { method: "POST", body });
}

/**
 * Pix não é recorrente na Stripe. Este Checkout vende exatamente 30 dias de
 * acesso Pro como pagamento único, com preço fixado no servidor.
 */
export async function createProPixCheckoutSession(input: {
  userId: string;
  email: string;
}): Promise<StripeCheckoutSession> {
  const body = new URLSearchParams();
  body.set("mode", "payment");
  body.set("success_url", `${SITE_URL}/conta/plano?checkout=pix-pending`);
  body.set("cancel_url", `${SITE_URL}/conta/plano?checkout=canceled`);
  body.set("payment_method_types[0]", "pix");
  body.set("line_items[0][price_data][currency]", "brl");
  body.set("line_items[0][price_data][unit_amount]", String(PRO_MONTHLY_PRICE_CENTS));
  body.set("line_items[0][price_data][product_data][name]", `AnunciaAI Pro — ${PRO_PIX_ACCESS_DAYS} dias`);
  body.set("line_items[0][price_data][product_data][description]", "Acesso Pro avulso, sem renovação automática.");
  body.set("line_items[0][quantity]", "1");
  body.set("client_reference_id", input.userId);
  body.set("customer_email", input.email);
  body.set("metadata[userId]", input.userId);
  body.set("metadata[plan]", "pro");
  body.set("metadata[purchaseType]", "pix_30d");
  body.set("metadata[accessDays]", String(PRO_PIX_ACCESS_DAYS));
  body.set("payment_intent_data[metadata][userId]", input.userId);
  body.set("payment_intent_data[metadata][purchaseType]", "pix_30d");
  body.set("locale", "pt-BR");

  return stripeRequest<StripeCheckoutSession>("/checkout/sessions", { method: "POST", body });
}

export async function retrieveSubscription(subscriptionId: string): Promise<StripeSubscription> {
  return stripeRequest<StripeSubscription>(`/subscriptions/${encodeURIComponent(subscriptionId)}`);
}

export async function createCustomerPortalSession(customerId: string): Promise<{ id: string; url: string }> {
  const body = new URLSearchParams();
  body.set("customer", customerId);
  body.set("return_url", `${SITE_URL}/conta/plano`);

  const configuration = process.env.STRIPE_PORTAL_CONFIGURATION_ID?.trim();
  if (configuration) body.set("configuration", configuration);

  return stripeRequest<{ id: string; url: string }>("/billing_portal/sessions", { method: "POST", body });
}

export function subscriptionHasProPrice(subscription: StripeSubscription): boolean {
  const expectedPrice = stripeProPriceId();
  return Boolean(subscription.items?.data?.some((item) => item.price?.id === expectedPrice));
}

export function localSubscriptionStatus(status: string): StripeSubscriptionStatus {
  switch (status) {
    case "active":
      return "active";
    case "trialing":
      return "trialing";
    case "past_due":
    case "unpaid":
      return "past_due";
    case "canceled":
      return "canceled";
    default:
      return "inactive";
  }
}

function safeHexEqual(left: string, right: string): boolean {
  try {
    const leftBuffer = Buffer.from(left, "hex");
    const rightBuffer = Buffer.from(right, "hex");
    return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
  } catch {
    return false;
  }
}

export function verifyStripeWebhook(rawBody: string, signatureHeader: string | null): StripeWebhookEvent {
  if (!signatureHeader) throw new Error("Missing Stripe-Signature header");

  const parts = signatureHeader.split(",").map((part) => part.trim());
  const timestampValue = parts.find((part) => part.startsWith("t="))?.slice(2);
  const signatures = parts.filter((part) => part.startsWith("v1=")).map((part) => part.slice(3));
  const timestamp = Number(timestampValue);

  if (!Number.isFinite(timestamp) || signatures.length === 0) {
    throw new Error("Invalid Stripe-Signature header");
  }

  const age = Math.abs(Math.floor(Date.now() / 1000) - timestamp);
  if (age > WEBHOOK_TOLERANCE_SECONDS) throw new Error("Webhook timestamp outside tolerance");

  const expected = createHmac("sha256", stripeWebhookSecret())
    .update(`${timestamp}.${rawBody}`, "utf8")
    .digest("hex");

  if (!signatures.some((signature) => safeHexEqual(signature, expected))) {
    throw new Error("Invalid webhook signature");
  }

  return JSON.parse(rawBody) as StripeWebhookEvent;
}
