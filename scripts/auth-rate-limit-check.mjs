import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const failures = [];

function read(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function requireText(source, text, message) {
  if (!source.includes(text)) failures.push(message);
}

const auth = read("src/lib/auth.ts");
const schema = read("src/db/schema.ts");
const ensureSchema = read("src/db/ensure-schema.ts");

for (const required of [
  "rateLimit, session, user, verification",
  "schema: { user, session, account, verification, rateLimit }",
  "rateLimit: {",
  'enabled: true',
  'storage: "database"',
  'modelName: "rateLimit"',
  'window: 60',
  'max: 100',
  'ipAddressHeaders: ["x-vercel-forwarded-for"]',
]) {
  requireText(auth, required, `Better Auth perdeu hardening de rate limit: ${required}.`);
}

for (const required of [
  "export const rateLimit = pgTable(",
  '"rate_limit"',
  'key: text("key").notNull()',
  'count: integer("count").notNull()',
  'lastRequest: bigint("last_request", { mode: "number" }).notNull()',
  'index("rate_limit_key_idx").on(table.key)',
]) {
  requireText(schema, required, `Schema do rate limit incompleto: ${required}.`);
}

for (const required of [
  "create table if not exists rate_limit",
  "id text primary key",
  "key text not null",
  "count integer not null",
  "last_request bigint not null",
  "create index if not exists rate_limit_key_idx on rate_limit (key)",
]) {
  requireText(ensureSchema, required, `Migração idempotente do rate limit incompleta: ${required}.`);
}

if (failures.length) {
  console.error("\nFalhas na auditoria de rate limit da autenticação:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Rate limit OK: Better Auth usa PostgreSQL compartilhado e IP explícito da Vercel.");
