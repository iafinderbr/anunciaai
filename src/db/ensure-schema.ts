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

  await db.execute(sql`
    update generations
    set
      product_name = 'Produto',
      category = 'Não armazenada',
      audience = null,
      price = null,
      tone = 'profissional',
      title_preview = null,
      feature_count = 0
    where
      product_name <> 'Produto'
      or category <> 'Não armazenada'
      or audience is not null
      or price is not null
      or tone <> 'profissional'
      or title_preview is not null
      or feature_count <> 0
  `);
}

/**
 * Garante a estrutura mínima usada pelo contador público. O banco conectado
 * pode começar vazio em uma nova implantação; a criação e a anonimização são
 * idempotentes e rodam uma única vez por instância do servidor.
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
