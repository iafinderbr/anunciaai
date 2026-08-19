import { auth } from "@/lib/auth";
import { effectivePlan } from "@/lib/plans";

export const dynamic = "force-dynamic";

const NO_STORE_HEADERS = { "Cache-Control": "no-store" };

async function getSession(request: Request) {
  return auth.api.getSession({ headers: request.headers });
}

export async function GET(request: Request) {
  const session = await getSession(request);
  if (!session) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NO_STORE_HEADERS });
  }

  return Response.json(
    {
      ok: true,
      plan: effectivePlan(
        session.user.plan,
        session.user.subscriptionStatus,
        session.user.proAccessUntil,
      ),
      subscriptionStatus: session.user.subscriptionStatus,
      subscriptionProvider: session.user.subscriptionProvider,
      hasSubscription: Boolean(session.user.externalSubscriptionId),
    },
    { headers: NO_STORE_HEADERS },
  );
}

function billingManagedByStripe() {
  return Response.json(
    { ok: false, error: "billing_managed_by_stripe" },
    { status: 405, headers: { ...NO_STORE_HEADERS, Allow: "GET" } },
  );
}

export async function POST() {
  return billingManagedByStripe();
}

export async function DELETE() {
  return billingManagedByStripe();
}
