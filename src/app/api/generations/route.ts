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

function str(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
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

    return Response.json({
      total: totals?.total ?? 0,
      recent,
    });
  } catch {
    return Response.json({ total: 0, recent: [] }, { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    await ensureDatabaseSchema();
    const body: unknown = await request.json();
    const payload = (body ?? {}) as Record<string, unknown>;
    const channel = str(payload.channel, 40);

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

    return Response.json({ ok: true, id: row?.id ?? null });
  } catch (error) {
    console.error("[generations:post] Falha ao salvar geração", error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
