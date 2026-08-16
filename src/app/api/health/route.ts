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

const NO_STORE_HEADERS = { "Cache-Control": "no-store" };

export async function GET(request: Request) {
  // Não existem parâmetros válidos neste endpoint. Isso evita que query strings
  // aleatórias criem variantes de cache e multipliquem consultas ao banco.
  try {
    if (new URL(request.url).search.length > 0) {
      return Response.json(
        { ok: false, error: "unexpected_query" },
        { status: 400, headers: NO_STORE_HEADERS },
      );
    }
  } catch {
    return Response.json(
      { ok: false, error: "invalid_request" },
      { status: 400, headers: NO_STORE_HEADERS },
    );
  }

  try {
    await ensureDatabaseSchema();
    await db.execute(sql`select 1`);
    return Response.json({ ok: true }, { headers: HEALTH_HEADERS });
  } catch {
    return Response.json(
      { ok: false },
      { status: 500, headers: NO_STORE_HEADERS },
    );
  }
}
