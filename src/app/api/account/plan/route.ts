import { eq } from "drizzle-orm";
import { db } from "@/db";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { user } from "@/db/schema";
import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

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

async function getSession(request: Request) {
  return auth.api.getSession({ headers: request.headers });
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return Response.json({ ok: false, error: "forbidden_origin" }, { status: 403, headers: NO_STORE_HEADERS });
  }

  const session = await getSession(request);
  if (!session) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NO_STORE_HEADERS });
  }

  await ensureDatabaseSchema();
  await db
    .update(user)
    .set({
      plan: "pro",
      subscriptionStatus: "trialing",
      subscriptionProvider: "early-access",
      externalSubscriptionId: null,
      updatedAt: new Date(),
    })
    .where(eq(user.id, session.user.id));

  return Response.json(
    { ok: true, plan: "pro", subscriptionStatus: "trialing", billing: false },
    { headers: NO_STORE_HEADERS },
  );
}

export async function DELETE(request: Request) {
  if (!isAllowedOrigin(request)) {
    return Response.json({ ok: false, error: "forbidden_origin" }, { status: 403, headers: NO_STORE_HEADERS });
  }

  const session = await getSession(request);
  if (!session) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NO_STORE_HEADERS });
  }

  await ensureDatabaseSchema();
  await db
    .update(user)
    .set({
      plan: "free",
      subscriptionStatus: "inactive",
      subscriptionProvider: null,
      externalSubscriptionId: null,
      updatedAt: new Date(),
    })
    .where(eq(user.id, session.user.id));

  return Response.json({ ok: true, plan: "free", billing: false }, { headers: NO_STORE_HEADERS });
}
