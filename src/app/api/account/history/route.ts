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
const MUTATION_WINDOW_MS = 60_000;
const MUTATION_MAX = 30;

type MutationEntry = { count: number; resetAt: number };
const globalForHistoryRate = globalThis as typeof globalThis & {
  __anunciaAiHistoryMutationRate?: Map<string, MutationEntry>;
};
const mutationRate = globalForHistoryRate.__anunciaAiHistoryMutationRate ?? new Map<string, MutationEntry>();
globalForHistoryRate.__anunciaAiHistoryMutationRate = mutationRate;

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

function boundedText(value: unknown, min: number, max: number): string | null {
  if (typeof value !== "string") return null;
  const normalized = value.trim();
  if (normalized.length < min || normalized.length > max) return null;
  return normalized;
}

function isMutationRateLimited(userId: string): boolean {
  const now = Date.now();

  if (mutationRate.size > 5_000) {
    for (const [key, entry] of mutationRate) {
      if (entry.resetAt <= now) mutationRate.delete(key);
    }
    if (mutationRate.size > 10_000) mutationRate.clear();
  }

  const current = mutationRate.get(userId);
  if (!current || current.resetAt <= now) {
    mutationRate.set(userId, { count: 1, resetAt: now + MUTATION_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > MUTATION_MAX;
}

function rateLimitedResponse() {
  return Response.json(
    { ok: false, error: "rate_limited" },
    { status: 429, headers: { "Retry-After": "60", ...NO_STORE_HEADERS } },
  );
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
  if (isMutationRateLimited(userId)) return rateLimitedResponse();

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

  const productName = boundedText(parsed.value.productName, 2, 120);
  const channel = boundedText(parsed.value.channel, 2, 40);
  const title = boundedText(parsed.value.title, 2, 220);
  const content = boundedText(parsed.value.content, 20, 24_000);

  if (!productName || !channel || !CHANNELS.has(channel) || !title || !content) {
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
  if (isMutationRateLimited(userId)) return rateLimitedResponse();

  const parsed = await readJsonObject(request);
  if (!parsed.ok) return parsed.response;

  const keys = Object.keys(parsed.value);
  if (keys.length !== 1 || keys[0] !== "id") {
    return Response.json(
      { ok: false, error: "unexpected_fields" },
      { status: 400, headers: NO_STORE_HEADERS },
    );
  }

  const id = boundedText(parsed.value.id, 36, 36);
  if (!id || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) {
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
