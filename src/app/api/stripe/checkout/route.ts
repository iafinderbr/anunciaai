import { auth } from "@/lib/auth";
import { createProCheckoutSession, stripeBillingConfigured } from "@/lib/stripe";
import { effectivePlan } from "@/lib/plans";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const NO_STORE_HEADERS = { "Cache-Control": "no-store" };

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return Response.json({ ok: false, error: "forbidden_origin" }, { status: 403, headers: NO_STORE_HEADERS });
  }

  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NO_STORE_HEADERS });
  }

  if (!stripeBillingConfigured()) {
    return Response.json({ ok: false, error: "billing_not_configured" }, { status: 503, headers: NO_STORE_HEADERS });
  }

  if (effectivePlan(session.user.plan, session.user.subscriptionStatus) === "pro") {
    return Response.json({ ok: false, error: "already_active" }, { status: 409, headers: NO_STORE_HEADERS });
  }

  if (session.user.subscriptionProvider === "stripe" && session.user.externalSubscriptionId) {
    return Response.json({ ok: false, error: "manage_existing_subscription" }, { status: 409, headers: NO_STORE_HEADERS });
  }

  try {
    const checkout = await createProCheckoutSession({
      userId: session.user.id,
      email: session.user.email,
    });

    if (!checkout.url) throw new Error("Stripe Checkout did not return a URL");

    return Response.json({ ok: true, url: checkout.url }, { headers: NO_STORE_HEADERS });
  } catch (error) {
    console.error("stripe_checkout_error", error instanceof Error ? error.message : "unknown_error");
    return Response.json({ ok: false, error: "checkout_failed" }, { status: 502, headers: NO_STORE_HEADERS });
  }
}
