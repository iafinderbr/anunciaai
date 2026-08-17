import { desc, sql } from "drizzle-orm";
import { db } from "@/db";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { generations } from "@/db/schema";

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

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 30;
const MAX_BODY_BYTES = 2_048;
const RATE_LIMIT_PRUNE_AT = 5_000;
const RATE_LIMIT_HARD_CAP = 10_000;

const PUBLIC_STATS_HEADERS = {
  // O navegador não persiste os dados. A borda da Vercel pode reutilizar a
  // mesma resposta pública por poucos segundos, reduzindo consultas ao banco.
  "Cache-Control": "no-store",
  "Vercel-CDN-Cache-Control": "public, s-maxage=5, stale-while-revalidate=30, stale-if-error=60",
};

const NO_STORE_HEADERS = { "Cache-Control": "no-store" };

type RateEntry = { count: number; resetAt: number };

const globalForRateLimit = globalThis as typeof globalThis & {
  __anunciaAiGenerationRateLimit?: Map<string, RateEntry>;
};

const rateLimit =
  globalForRateLimit.__anunciaAiGenerationRateLimit ?? new Map<string, RateEntry>();

globalForRateLimit.__anunciaAiGenerationRateLimit = rateLimit;

function str(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function requestKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || "unknown";
}

function pruneRateLimit(now: number) {
  if (rateLimit.size < RATE_LIMIT_PRUNE_AT) return;

  for (const [key, entry] of rateLimit) {
    if (entry.resetAt <= now) rateLimit.delete(key);
  }

  // Evita crescimento ilimitado de memória em uma instância sob tráfego hostil.
  if (rateLimit.size > RATE_LIMIT_HARD_CAP) rateLimit.clear();
}

function isRateLimited(request: Request): boolean {
  const now = Date.now();
  pruneRateLimit(now);

  const key = requestKey(request);
  const current = rateLimit.get(key);

  if (!current || current.resetAt <= now) {
    rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX;
}

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");

  // Requisições server-to-server podem não enviar Origin. Quando o navegador
  // envia o cabeçalho, exigimos que ele seja do próprio host da aplicação.
  if (!origin) return true;

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

function hasUnexpectedQuery(request: Request): boolean {
  try {
    return new URL(request.url).search.length > 0;
  } catch {
    return true;
  }
}

export async function GET(request: Request) {
  // O endpoint não aceita filtros. Rejeitar query strings impede que parâmetros
  // aleatórios criem chaves diferentes no cache da CDN e forcem consultas extras.
  if (hasUnexpectedQuery(request)) {
    return Response.json(
      { ok: false, error: "unexpected_query" },
      { status: 400, headers: NO_STORE_HEADERS },
    );
  }

  try {
    await ensureDatabaseSchema();

    const [totals] = await db.select({ total: sql<number>`count(*)::int` }).from(generations);
    const recent = await db
      .select({
        channel: generations.channel,
        createdAt: generations.createdAt,
      })
      .from(generations)
      .orderBy(desc(generations.createdAt))
      .limit(6);

    return Response.json(
      { total: totals?.total ?? 0, recent },
      { headers: PUBLIC_STATS_HEADERS },
    );
  } catch {
    return Response.json(
      { total: 0, recent: [] },
      { status: 200, headers: NO_STORE_HEADERS },
    );
  }
}

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return Response.json(
        { ok: false, error: "forbidden_origin" },
        { status: 403, headers: NO_STORE_HEADERS },
      );
    }

    if (isRateLimited(request)) {
      return Response.json(
        { ok: false, error: "rate_limited" },
        { status: 429, headers: { "Retry-After": "60", ...NO_STORE_HEADERS } },
      );
    }

    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().startsWith("application/json")) {
      return Response.json(
        { ok: false, error: "unsupported_media_type" },
        { status: 415, headers: NO_STORE_HEADERS },
      );
    }

    const contentLength = Number(request.headers.get("content-length") ?? "0");
    if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
      return Response.json(
        { ok: false, error: "payload_too_large" },
        { status: 413, headers: NO_STORE_HEADERS },
      );
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return Response.json(
        { ok: false, error: "payload_too_large" },
        { status: 413, headers: NO_STORE_HEADERS },
      );
    }

    let body: unknown;
    try {
      body = rawBody ? JSON.parse(rawBody) : null;
    } catch {
      return Response.json(
        { ok: false, error: "invalid_json" },
        { status: 400, headers: NO_STORE_HEADERS },
      );
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return Response.json(
        { ok: false, error: "invalid_payload" },
        { status: 400, headers: NO_STORE_HEADERS },
      );
    }

    const channel = str((body as Record<string, unknown>).channel, 40);
    if (!CHANNELS.has(channel)) {
      return Response.json(
        { ok: false, error: "invalid_channel" },
        { status: 400, headers: NO_STORE_HEADERS },
      );
    }

    await ensureDatabaseSchema();

    await db.insert(generations).values({
      productName: "Produto",
      category: "Não armazenada",
      audience: null,
      price: null,
      channel,
      tone: "profissional",
      titlePreview: null,
      featureCount: 0,
    });

    return Response.json({ ok: true }, { headers: NO_STORE_HEADERS });
  } catch (error) {
    console.error("[generations:post] Falha ao salvar geração", error);
    return Response.json(
      { ok: false },
      { status: 500, headers: NO_STORE_HEADERS },
    );
  }
}
