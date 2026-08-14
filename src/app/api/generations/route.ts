import { desc, gte, sql } from "drizzle-orm";
import { db } from "@/db";
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
const TONES = new Set(["profissional", "persuasivo", "simples", "premium"]);

function str(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function GET() {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const [totals] = await db.select({ total: sql<number>`count(*)::int` }).from(generations);
    const [todayRow] = await db
      .select({ today: sql<number>`count(*)::int` })
      .from(generations)
      .where(gte(generations.createdAt, startOfDay));

    const recent = await db
      .select({
        id: generations.id,
        productName: generations.productName,
        category: generations.category,
        channel: generations.channel,
        createdAt: generations.createdAt,
      })
      .from(generations)
      .orderBy(desc(generations.createdAt))
      .limit(6);

    return Response.json({
      total: totals?.total ?? 0,
      today: todayRow?.today ?? 0,
      recent,
    });
  } catch {
    return Response.json({ total: 0, today: 0, recent: [] }, { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const payload = (body ?? {}) as Record<string, unknown>;

    const productName = str(payload.productName, 160);
    const category = str(payload.category, 120);

    if (!productName || !category) {
      return Response.json({ ok: false, error: "Dados incompletos." }, { status: 400 });
    }

    const channel = str(payload.channel, 40);
    const tone = str(payload.tone, 40);
    const rawCount = Number(payload.featureCount);

    const [row] = await db
      .insert(generations)
      .values({
        productName,
        category,
        audience: str(payload.audience, 160) || null,
        price: str(payload.price, 40) || null,
        channel: CHANNELS.has(channel) ? channel : "outro",
        tone: TONES.has(tone) ? tone : "profissional",
        titlePreview: str(payload.titlePreview, 200) || null,
        featureCount: Number.isFinite(rawCount) ? Math.max(0, Math.min(50, Math.trunc(rawCount))) : 0,
      })
      .returning({ id: generations.id });

    const [totals] = await db.select({ total: sql<number>`count(*)::int` }).from(generations);

    return Response.json({ ok: true, id: row?.id ?? null, total: totals?.total ?? 0 });
  } catch {
    return Response.json({ ok: false }, { status: 200 });
  }
}
