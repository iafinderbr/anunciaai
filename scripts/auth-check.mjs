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

const envExample = read(".env.example");
const schema = read("src/db/schema.ts");
const ensureSchema = read("src/db/ensure-schema.ts");
const signInPage = read("src/app/entrar/page.tsx");
const accountPage = read("src/app/conta/page.tsx");
const plans = read("src/lib/plans.ts");
const pricing = read("src/components/sections/pricing.tsx");

for (const variable of [
  "BETTER_AUTH_SECRET=",
  "BETTER_AUTH_URL=https://anunciaai.vercel.app",
  "GOOGLE_CLIENT_ID=",
  "GOOGLE_CLIENT_SECRET=",
]) {
  requireText(envExample, variable, `.env.example não documenta ${variable.split("=")[0]}.`);
}

for (const forbidden of [
  "NEXT_PUBLIC_BETTER_AUTH_SECRET",
  "NEXT_PUBLIC_GOOGLE_CLIENT_SECRET",
  "NEXT_PUBLIC_DATABASE_URL",
]) {
  if (envExample.includes(forbidden)) failures.push(`Segredo não pode ser exposto ao cliente: ${forbidden}.`);
}

for (const table of ['pgTable(\n  "user"', 'pgTable(\n  "session"', 'pgTable(\n  "account"', 'pgTable(\n  "verification"']) {
  requireText(schema, table, `Schema de autenticação incompleto: ${table}.`);
}

for (const field of ["plan", "subscriptionStatus", "subscriptionProvider", "externalSubscriptionId"]) {
  requireText(schema, field, `Campo de assinatura ausente no usuário: ${field}.`);
}

for (const table of ['create table if not exists "user"', 'create table if not exists "session"', 'create table if not exists "account"', "create table if not exists verification"]) {
  requireText(ensureSchema, table, `Criação idempotente ausente: ${table}.`);
}

for (const [name, source] of [
  ["/entrar", signInPage],
  ["/conta", accountPage],
]) {
  if (!/robots\s*:\s*\{[^}]*index\s*:\s*false[^}]*follow\s*:\s*false/s.test(source)) {
    failures.push(`${name} deve continuar noindex/nofollow.`);
  }
}

requireText(signInPage, "Continuar com Google", "Tela de login perdeu o CTA do Google.");
requireText(signInPage, "disabled", "CTA do Google não pode ser ativado antes da integração real.");
requireText(plans, 'subscriptionStatus === "active"', "Plano pago precisa exigir assinatura ativa no servidor.");
requireText(plans, 'return subscriptionStatus === "active" ? normalized : "free"', "Fallback de plano pago para free foi removido.");

if (/Assinar agora/i.test(pricing)) {
  failures.push("A interface não pode mostrar 'Assinar agora' antes do checkout real estar ativo.");
}

if (failures.length) {
  console.error("\nFalhas na auditoria de autenticação/planos:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Contas OK: schema, rotas utilitárias, variáveis, plano efetivo e bloqueio de cobrança prematura validados.");
