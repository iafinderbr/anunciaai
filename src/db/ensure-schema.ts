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
    create table if not exists app_migrations (
      name text primary key,
      applied_at timestamp with time zone not null default now()
    )
  `);

  await db.execute(sql`
    with migration as (
      insert into app_migrations (name)
      values ('anonymize-generations-v1')
      on conflict (name) do nothing
      returning name
    )
    update generations
    set
      product_name = 'Produto',
      category = 'Não armazenada',
      audience = null,
      price = null,
      tone = 'profissional',
      title_preview = null,
      feature_count = 0
    where exists (select 1 from migration)
      and (
        product_name <> 'Produto'
        or category <> 'Não armazenada'
        or audience is not null
        or price is not null
        or tone <> 'profissional'
        or title_preview is not null
        or feature_count <> 0
      )
  `);
}

/**
 * Garante a estrutura mínima usada pelo contador público. O banco conectado
 * pode começar vazio em uma nova implantação. A criação é idempotente e a
 * anonimização de registros antigos é marcada como migração para não varrer
 * toda a tabela novamente a cada nova instância do servidor.
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
