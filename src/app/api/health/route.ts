import { db } from "@/db";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

const HEALTH_HEADERS = {
  "Cache-Control": "no-store",
  // Um health check público não precisa consultar o banco a cada acesso.
  // A borda reutiliza uma resposta saudável por poucos segundos.
  "Vercel-CDN-Cache-Control": "public, s-maxage=15",
};

export async function GET() {
  try {
    await ensureDatabaseSchema();
    await db.execute(sql`select 1`);
    return Response.json({ ok: true }, { headers: HEALTH_HEADERS });
  } catch {
    return Response.json(
      { ok: false },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    );
  }
}
