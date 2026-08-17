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

  // Estrutura compatível com o núcleo do Better Auth e campos próprios de plano.
  // Criar as tabelas agora é seguro: nenhuma conta é criada até o OAuth ser ativado.
  await db.execute(sql`
    create table if not exists "user" (
      id text primary key,
      name text not null,
      email text not null,
      email_verified boolean not null default false,
      image text,
      plan text not null default 'free',
      subscription_status text not null default 'inactive',
      subscription_provider text,
      external_subscription_id text,
      created_at timestamp with time zone not null default now(),
      updated_at timestamp with time zone not null default now()
    )
  `);

  await db.execute(sql`
    create unique index if not exists user_email_unique on "user" (email)
  `);
  await db.execute(sql`
    create index if not exists user_plan_idx on "user" (plan)
  `);
  await db.execute(sql`
    create unique index if not exists user_external_subscription_unique
      on "user" (external_subscription_id)
  `);

  await db.execute(sql`
    create table if not exists "session" (
      id text primary key,
      user_id text not null references "user"(id) on delete cascade,
      token text not null,
      expires_at timestamp with time zone not null,
      ip_address text,
      user_agent text,
      created_at timestamp with time zone not null default now(),
      updated_at timestamp with time zone not null default now()
    )
  `);

  await db.execute(sql`
    create unique index if not exists session_token_unique on "session" (token)
  `);
  await db.execute(sql`
    create index if not exists session_user_id_idx on "session" (user_id)
  `);
  await db.execute(sql`
    create index if not exists session_expires_at_idx on "session" (expires_at)
  `);

  await db.execute(sql`
    create table if not exists "account" (
      id text primary key,
      user_id text not null references "user"(id) on delete cascade,
      account_id text not null,
      provider_id text not null,
      access_token text,
      refresh_token text,
      id_token text,
      access_token_expires_at timestamp with time zone,
      refresh_token_expires_at timestamp with time zone,
      scope text,
      password text,
      created_at timestamp with time zone not null default now(),
      updated_at timestamp with time zone not null default now()
    )
  `);

  await db.execute(sql`
    create index if not exists account_user_id_idx on "account" (user_id)
  `);
  await db.execute(sql`
    create unique index if not exists account_provider_account_unique
      on "account" (provider_id, account_id)
  `);

  await db.execute(sql`
    create table if not exists verification (
      id text primary key,
      identifier text not null,
      value text not null,
      expires_at timestamp with time zone not null,
      created_at timestamp with time zone not null default now(),
      updated_at timestamp with time zone not null default now()
    )
  `);

  await db.execute(sql`
    create index if not exists verification_identifier_idx on verification (identifier)
  `);
}

/**
 * Garante a estrutura mínima usada pelo contador e deixa a base de autenticação
 * pronta para a próxima fase. A criação é idempotente e a anonimização de
 * registros antigos é marcada como migração para não varrer toda a tabela a
 * cada nova instância do servidor.
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
