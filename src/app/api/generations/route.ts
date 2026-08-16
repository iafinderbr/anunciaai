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

export async function GET() {
  try {
    await ensureDatabaseSchema();

    const [totals] = await db.select({ total: sql<number>`count(*)::int` }).from(generations);
    const recent = await db
      .select({
        id: generations.id,
        channel: generations.channel,
        createdAt: generations.createdAt,
      })
      .from(generations)
      .orderBy(desc(generations.createdAt))
      .limit(6);

    return Response.json(
      { total: totals?.total ?? 0, recent },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return Response.json(
      { total: 0, recent: [] },
      { status: 200, headers: { "Cache-Control": "no-store" } },
    );
  }
}

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return Response.json(
        { ok: false, error: "forbidden_origin" },
        { status: 403, headers: { "Cache-Control": "no-store" } },
      );
    }

    if (isRateLimited(request)) {
      return Response.json(
        { ok: false, error: "rate_limited" },
        { status: 429, headers: { "Retry-After": "60", "Cache-Control": "no-store" } },
      );
    }

    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().startsWith("application/json")) {
      return Response.json(
        { ok: false, error: "unsupported_media_type" },
        { status: 415, headers: { "Cache-Control": "no-store" } },
      );
    }

    const contentLength = Number(request.headers.get("content-length") ?? "0");
    if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
      return Response.json(
        { ok: false, error: "payload_too_large" },
        { status: 413, headers: { "Cache-Control": "no-store" } },
      );
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return Response.json(
        { ok: false, error: "payload_too_large" },
        { status: 413, headers: { "Cache-Control": "no-store" } },
      );
    }

    const body: unknown = rawBody ? JSON.parse(rawBody) : {};
    const payload = (body ?? {}) as Record<string, unknown>;
    const channel = str(payload.channel, 40);

    await ensureDatabaseSchema();

    const [row] = await db
      .insert(generations)
      .values({
        productName: "Produto",
        category: "Não armazenada",
        audience: null,
        price: null,
        channel: CHANNELS.has(channel) ? channel : "outro",
        tone: "profissional",
        titlePreview: null,
        featureCount: 0,
      })
      .returning({ id: generations.id });

    return Response.json(
      { ok: true, id: row?.id ?? null },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("[generations:post] Falha ao salvar geração", error);
    return Response.json(
      { ok: false },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    );
  }
}
