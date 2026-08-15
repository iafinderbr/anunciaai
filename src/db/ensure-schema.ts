import { sql } from "drizzle-orm";
import { db } from "@/db";

let schemaPromise: Promise<void> | null = null;

async function createSchema() {
  await db.execute(sql`
    create table if not exists generations (
      id serial primary key,
      product_name text not null,
      category text not null,
      audience text,
      price text,
      channel text not null,
      tone text not null,
      title_preview text,
      feature_count integer not null default 0,
      created_at timestamp with time zone not null default now()
    )
  `);

  await db.execute(sql`
    create index if not exists generations_created_at_idx
      on generations (created_at)
  `);
}

/**
 * Garante a estrutura mínima usada pelo contador público. O banco conectado
 * pode começar vazio em uma nova implantação; a criação é idempotente e roda
 * uma única vez por instância do servidor.
 */
export function ensureDatabaseSchema(): Promise<void> {
  if (!schemaPromise) {
    schemaPromise = createSchema().catch((error) => {
      schemaPromise = null;
      throw error;
    });
  }

  return schemaPromise;
}
