import { auth } from "@/lib/auth";
import { generateWithGemini, isGeminiEnabled } from "@/lib/gemini-provider";
import { effectivePlan } from "@/lib/plans";
import type { Channel, GeneratorInput, Tone } from "@/lib/types";

export const dynamic = "force-dynamic";

const NO_STORE_HEADERS = { "Cache-Control": "no-store" };
const MAX_BODY_BYTES = 6_144;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 8;
const RATE_LIMIT_HARD_CAP = 5_000;

const CHANNELS = new Set<Channel>([
  "mercado-livre",
  "shopee",
  "loja-virtual",
  "instagram",
  "olx",
  "facebook-marketplace",
  "outro",
]);

const TONES = new Set<Tone>(["profissional", "persuasivo", "simples", "premium"]);

type RateEntry = { count: number; resetAt: number };

const globalForRateLimit = globalThis as typeof globalThis & {
  __anunciaAiAdvancedGenerationRateLimit?: Map<string, RateEntry>;
};

const rateLimit =
  globalForRateLimit.__anunciaAiAdvancedGenerationRateLimit ?? new Map<string, RateEntry>();

globalForRateLimit.__anunciaAiAdvancedGenerationRateLimit = rateLimit;

function isRateLimited(userId: string): boolean {
  const now = Date.now();

  if (rateLimit.size > RATE_LIMIT_HARD_CAP) {
    for (const [key, entry] of rateLimit) {
      if (entry.resetAt <= now) rateLimit.delete(key);
    }
    if (rateLimit.size > RATE_LIMIT_HARD_CAP) rateLimit.clear();
  }

  const current = rateLimit.get(userId);
  if (!current || current.resetAt <= now) {
    rateLimit.set(userId, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX;
}

function sameOrigin(request: Request): boolean {
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

function parseInput(value: unknown): GeneratorInput | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const item = value as Record<string, unknown>;

  const productName = text(item.productName, 160);
  const category = text(item.category, 120);
  const price = text(item.price, 60);
  const audience = text(item.audience, 220);
  const features = text(item.features, 3_000);
  const channel = item.channel;
  const tone = item.tone;

  if (productName.length < 3 || features.length < 3) return null;
  if (typeof channel !== "string" || !CHANNELS.has(channel as Channel)) return null;
  if (typeof tone !== "string" || !TONES.has(tone as Tone)) return null;

  return {
    productName,
    category,
    price,
    audience,
    features,
    channel: channel as Channel,
    tone: tone as Tone,
  };
}

export function GET() {
  return Response.json(
    { enabled: isGeminiEnabled() },
    { headers: NO_STORE_HEADERS },
  );
}

export async function POST(request: Request) {
  // O backend generativo permanece opt-in. Enquanto estiver desligado, mantém
  // o contrato 503 sem processar sessão, payload nem consumir qualquer quota.
  if (!isGeminiEnabled()) {
    return Response.json(
      { ok: false, error: "disabled" },
      { status: 503, headers: NO_STORE_HEADERS },
    );
  }

  if (!sameOrigin(request)) {
    return Response.json(
      { ok: false, error: "forbidden_origin" },
      { status: 403, headers: NO_STORE_HEADERS },
    );
  }

  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) {
    return Response.json(
      { ok: false, error: "unauthorized" },
      { status: 401, headers: NO_STORE_HEADERS },
    );
  }

  if (
    effectivePlan(
      session.user.plan,
      session.user.subscriptionStatus,
      session.user.proAccessUntil,
    ) !== "pro"
  ) {
    return Response.json(
      { ok: false, error: "pro_required" },
      { status: 403, headers: NO_STORE_HEADERS },
    );
  }

  if (isRateLimited(session.user.id)) {
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

  const raw = await request.text();
  if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) {
    return Response.json(
      { ok: false, error: "payload_too_large" },
      { status: 413, headers: NO_STORE_HEADERS },
    );
  }

  let body: unknown;
  try {
    body = raw ? JSON.parse(raw) : null;
  } catch {
    return Response.json(
      { ok: false, error: "invalid_json" },
      { status: 400, headers: NO_STORE_HEADERS },
    );
  }

  const input = parseInput(body);
  if (!input) {
    return Response.json(
      { ok: false, error: "invalid_payload" },
      { status: 400, headers: NO_STORE_HEADERS },
    );
  }

  const result = await generateWithGemini(input);
  if (!result) {
    return Response.json(
      { ok: false, error: "generation_unavailable" },
      { status: 502, headers: NO_STORE_HEADERS },
    );
  }

  return Response.json(
    { ok: true, result },
    { headers: NO_STORE_HEADERS },
  );
}
