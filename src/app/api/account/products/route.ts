import { and, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { savedProduct } from "@/db/schema";
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
const TONES = new Set(["profissional", "persuasivo", "simples", "premium"]);
const NO_STORE_HEADERS = { "Cache-Control": "no-store" };
const MAX_BODY_BYTES = 8_192;
const MAX_PRODUCTS = 20;
const MUTATION_WINDOW_MS = 60_000;
const MUTATION_MAX = 30;
const MUTATION_RATE_PRUNE_AT = 5_000;
const MUTATION_RATE_HARD_CAP = 10_000;

type MutationEntry = { count: number; resetAt: number };
const globalForProductRate = globalThis as typeof globalThis & {
  __anunciaAiProductMutationRate?: Map<string, MutationEntry>;
};
const mutationRate = globalForProductRate.__anunciaAiProductMutationRate ?? new Map<string, MutationEntry>();
globalForProductRate.__anunciaAiProductMutationRate = mutationRate;

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

function boundedText(value: unknown, min: number, max: number, allowEmpty = false): string | null {
  if (typeof value !== "string") return null;
  const normalized = value.trim();
  if (allowEmpty && normalized.length === 0) return "";
  if (normalized.length < min || normalized.length > max) return null;
  return normalized;
}

function isMutationRateLimited(userId: string): boolean {
  const now = Date.now();

  if (mutationRate.size >= MUTATION_RATE_PRUNE_AT) {
    for (const [key, entry] of mutationRate) {
      if (entry.resetAt <= now) mutationRate.delete(key);
    }
    if (mutationRate.size > MUTATION_RATE_HARD_CAP) mutationRate.clear();
  }

  const current = mutationRate.get(userId);
  if (!current || current.resetAt <= now) {
    mutationRate.set(userId, { count: 1, resetAt: now + MUTATION_WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > MUTATION_MAX;
}

async function getAuthenticatedUserId(request: Request): Promise<string | null> {
  const session = await auth.api.getSession({ headers: request.headers });
  return session?.user.id ?? null;
}

async function readJsonObject(request: Request): Promise<
  | { ok: true; value: Record<string, unknown> }
  | { ok: false; response: Response }
> {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return { ok: false, response: Response.json({ ok: false, error: "unsupported_media_type" }, { status: 415, headers: NO_STORE_HEADERS }) };
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return { ok: false, response: Response.json({ ok: false, error: "payload_too_large" }, { status: 413, headers: NO_STORE_HEADERS }) };
  }

  const raw = await request.text();
  if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) {
    return { ok: false, response: Response.json({ ok: false, error: "payload_too_large" }, { status: 413, headers: NO_STORE_HEADERS }) };
  }

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("invalid");
    return { ok: true, value: parsed as Record<string, unknown> };
  } catch {
    return { ok: false, response: Response.json({ ok: false, error: "invalid_json" }, { status: 400, headers: NO_STORE_HEADERS }) };
  }
}

export async function GET(request: Request) {
  if (hasUnexpectedQuery(request)) {
    return Response.json({ ok: false, error: "unexpected_query" }, { status: 400, headers: NO_STORE_HEADERS });
  }

  const userId = await getAuthenticatedUserId(request);
  if (!userId) return Response.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NO_STORE_HEADERS });

  await ensureDatabaseSchema();
  const items = await db
    .select({
      id: savedProduct.id,
      productName: savedProduct.productName,
      category: savedProduct.category,
      price: savedProduct.price,
      audience: savedProduct.audience,
      features: savedProduct.features,
      channel: savedProduct.channel,
      tone: savedProduct.tone,
      createdAt: savedProduct.createdAt,
      updatedAt: savedProduct.updatedAt,
    })
    .from(savedProduct)
    .where(eq(savedProduct.userId, userId))
    .orderBy(desc(savedProduct.updatedAt))
    .limit(MAX_PRODUCTS);

  return Response.json({ ok: true, items, limit: MAX_PRODUCTS }, { headers: NO_STORE_HEADERS });
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) return Response.json({ ok: false, error: "forbidden_origin" }, { status: 403, headers: NO_STORE_HEADERS });

  const userId = await getAuthenticatedUserId(request);
  if (!userId) return Response.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NO_STORE_HEADERS });
  if (isMutationRateLimited(userId)) return Response.json({ ok: false, error: "rate_limited" }, { status: 429, headers: { ...NO_STORE_HEADERS, "Retry-After": "60" } });

  const parsed = await readJsonObject(request);
  if (!parsed.ok) return parsed.response;

  const keys = Object.keys(parsed.value).sort();
  const expected = ["audience", "category", "channel", "features", "price", "productName", "tone"];
  if (keys.length !== expected.length || keys.some((key, index) => key !== expected[index])) {
    return Response.json({ ok: false, error: "unexpected_fields" }, { status: 400, headers: NO_STORE_HEADERS });
  }

  const productName = boundedText(parsed.value.productName, 2, 120);
  const category = boundedText(parsed.value.category, 2, 80);
  const price = boundedText(parsed.value.price, 0, 30, true);
  const audience = boundedText(parsed.value.audience, 0, 120, true);
  const features = boundedText(parsed.value.features, 10, 1200);
  const channel = boundedText(parsed.value.channel, 2, 40);
  const tone = boundedText(parsed.value.tone, 2, 30);

  if (!productName || !category || price === null || audience === null || !features || !channel || !CHANNELS.has(channel) || !tone || !TONES.has(tone)) {
    return Response.json({ ok: false, error: "invalid_payload" }, { status: 400, headers: NO_STORE_HEADERS });
  }

  await ensureDatabaseSchema();
  const [countRow] = await db.select({ total: sql<number>`count(*)::int` }).from(savedProduct).where(eq(savedProduct.userId, userId));
  if ((countRow?.total ?? 0) >= MAX_PRODUCTS) {
    return Response.json({ ok: false, error: "product_limit" }, { status: 409, headers: NO_STORE_HEADERS });
  }

  const id = crypto.randomUUID();
  const [created] = await db
    .insert(savedProduct)
    .values({ id, userId, productName, category, price, audience, features, channel, tone })
    .returning({
      id: savedProduct.id,
      productName: savedProduct.productName,
      category: savedProduct.category,
      price: savedProduct.price,
      audience: savedProduct.audience,
      features: savedProduct.features,
      channel: savedProduct.channel,
      tone: savedProduct.tone,
      createdAt: savedProduct.createdAt,
      updatedAt: savedProduct.updatedAt,
    });

  return Response.json({ ok: true, item: created ?? { id } }, { status: 201, headers: NO_STORE_HEADERS });
}

export async function DELETE(request: Request) {
  if (!isAllowedOrigin(request)) return Response.json({ ok: false, error: "forbidden_origin" }, { status: 403, headers: NO_STORE_HEADERS });

  const userId = await getAuthenticatedUserId(request);
  if (!userId) return Response.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NO_STORE_HEADERS });
  if (isMutationRateLimited(userId)) return Response.json({ ok: false, error: "rate_limited" }, { status: 429, headers: { ...NO_STORE_HEADERS, "Retry-After": "60" } });

  const parsed = await readJsonObject(request);
  if (!parsed.ok) return parsed.response;
  const keys = Object.keys(parsed.value);
  if (keys.length !== 1 || keys[0] !== "id") return Response.json({ ok: false, error: "unexpected_fields" }, { status: 400, headers: NO_STORE_HEADERS });

  const id = boundedText(parsed.value.id, 36, 36);
  if (!id || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) {
    return Response.json({ ok: false, error: "invalid_id" }, { status: 400, headers: NO_STORE_HEADERS });
  }

  await ensureDatabaseSchema();
  await db.delete(savedProduct).where(and(eq(savedProduct.id, id), eq(savedProduct.userId, userId)));
  return Response.json({ ok: true }, { headers: NO_STORE_HEADERS });
}
