import { and, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { savedGeneration } from "@/db/schema";
import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

const CHANNELS = new Set([
  "mercado-livre",
  "shopee",
  "loja-virtual",
  "instagram",
  "olx",
  "facebook-marketplace",
  "outro",
]);

const NO_STORE_HEADERS = { "Cache-Control": "no-store" };
const MAX_BODY_BYTES = 32_768;
const MAX_HISTORY_ITEMS = 100;

function hasUnexpectedQuery(request: Request): boolean {
  try {
    return new URL(request.url).search.length > 0;
  } catch {
    return true;
  }
}

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

async function readJsonObject(request: Request): Promise<
  | { ok: true; value: Record<string, unknown> }
  | { ok: false; response: Response }
> {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return {
      ok: false,
      response: Response.json(
        { ok: false, error: "unsupported_media_type" },
        { status: 415, headers: NO_STORE_HEADERS },
      ),
    };
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return {
      ok: false,
      response: Response.json(
        { ok: false, error: "payload_too_large" },
        { status: 413, headers: NO_STORE_HEADERS },
      ),
    };
  }

  const raw = await request.text();
  if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) {
    return {
      ok: false,
      response: Response.json(
        { ok: false, error: "payload_too_large" },
        { status: 413, headers: NO_STORE_HEADERS },
      ),
    };
  }

  let parsed: unknown;
  try {
    parsed = raw ? JSON.parse(raw) : null;
  } catch {
    return {
      ok: false,
      response: Response.json(
        { ok: false, error: "invalid_json" },
        { status: 400, headers: NO_STORE_HEADERS },
      ),
    };
  }

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return {
      ok: false,
      response: Response.json(
        { ok: false, error: "invalid_payload" },
        { status: 400, headers: NO_STORE_HEADERS },
      ),
    };
  }

  return { ok: true, value: parsed as Record<string, unknown> };
}

async function getAuthenticatedUserId(request: Request): Promise<string | null> {
  const session = await auth.api.getSession({ headers: request.headers });
  return session?.user.id ?? null;
}

export async function GET(request: Request) {
  if (hasUnexpectedQuery(request)) {
    return Response.json(
      { ok: false, error: "unexpected_query" },
      { status: 400, headers: NO_STORE_HEADERS },
    );
  }

  const userId = await getAuthenticatedUserId(request);
  if (!userId) {
    return Response.json(
      { ok: false, error: "unauthorized" },
      { status: 401, headers: NO_STORE_HEADERS },
    );
  }

  await ensureDatabaseSchema();

  const items = await db
    .select({
      id: savedGeneration.id,
      productName: savedGeneration.productName,
      channel: savedGeneration.channel,
      title: savedGeneration.title,
      content: savedGeneration.content,
      createdAt: savedGeneration.createdAt,
    })
    .from(savedGeneration)
    .where(eq(savedGeneration.userId, userId))
    .orderBy(desc(savedGeneration.createdAt))
    .limit(MAX_HISTORY_ITEMS);

  return Response.json({ ok: true, items }, { headers: NO_STORE_HEADERS });
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return Response.json(
      { ok: false, error: "forbidden_origin" },
      { status: 403, headers: NO_STORE_HEADERS },
    );
  }

  const userId = await getAuthenticatedUserId(request);
  if (!userId) {
    return Response.json(
      { ok: false, error: "unauthorized" },
      { status: 401, headers: NO_STORE_HEADERS },
    );
  }

  const parsed = await readJsonObject(request);
  if (!parsed.ok) return parsed.response;

  const keys = Object.keys(parsed.value).sort();
  const expected = ["channel", "content", "productName", "title"];
  if (keys.length !== expected.length || keys.some((key, index) => key !== expected[index])) {
    return Response.json(
      { ok: false, error: "unexpected_fields" },
      { status: 400, headers: NO_STORE_HEADERS },
    );
  }

  const productName = text(parsed.value.productName, 120);
  const channel = text(parsed.value.channel, 40);
  const title = text(parsed.value.title, 220);
  const content = text(parsed.value.content, 24_000);

  if (productName.length < 2 || !CHANNELS.has(channel) || title.length < 2 || content.length < 20) {
    return Response.json(
      { ok: false, error: "invalid_payload" },
      { status: 400, headers: NO_STORE_HEADERS },
    );
  }

  await ensureDatabaseSchema();

  const [countRow] = await db
    .select({ total: sql<number>`count(*)::int` })
    .from(savedGeneration)
    .where(eq(savedGeneration.userId, userId));

  if ((countRow?.total ?? 0) >= MAX_HISTORY_ITEMS) {
    return Response.json(
      { ok: false, error: "history_limit" },
      { status: 409, headers: NO_STORE_HEADERS },
    );
  }

  const id = crypto.randomUUID();
  const [created] = await db
    .insert(savedGeneration)
    .values({ id, userId, productName, channel, title, content })
    .returning({ id: savedGeneration.id, createdAt: savedGeneration.createdAt });

  return Response.json(
    { ok: true, item: created ?? { id } },
    { status: 201, headers: NO_STORE_HEADERS },
  );
}

export async function DELETE(request: Request) {
  if (!isAllowedOrigin(request)) {
    return Response.json(
      { ok: false, error: "forbidden_origin" },
      { status: 403, headers: NO_STORE_HEADERS },
    );
  }

  const userId = await getAuthenticatedUserId(request);
  if (!userId) {
    return Response.json(
      { ok: false, error: "unauthorized" },
      { status: 401, headers: NO_STORE_HEADERS },
    );
  }

  const parsed = await readJsonObject(request);
  if (!parsed.ok) return parsed.response;

  const keys = Object.keys(parsed.value);
  if (keys.length !== 1 || keys[0] !== "id") {
    return Response.json(
      { ok: false, error: "unexpected_fields" },
      { status: 400, headers: NO_STORE_HEADERS },
    );
  }

  const id = text(parsed.value.id, 64);
  if (!/^[0-9a-f-]{36}$/i.test(id)) {
    return Response.json(
      { ok: false, error: "invalid_id" },
      { status: 400, headers: NO_STORE_HEADERS },
    );
  }

  await ensureDatabaseSchema();
  await db
    .delete(savedGeneration)
    .where(and(eq(savedGeneration.id, id), eq(savedGeneration.userId, userId)));

  return Response.json({ ok: true }, { headers: NO_STORE_HEADERS });
}
