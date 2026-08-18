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

const packageJson = read("package.json");
const envExample = read(".env.example");
const schema = read("src/db/schema.ts");
const ensureSchema = read("src/db/ensure-schema.ts");
const authServer = read("src/lib/auth.ts");
const authClient = read("src/lib/auth-client.ts");
const authRoute = read("src/app/api/auth/[...all]/route.ts");
const signInPage = read("src/app/entrar/page.tsx");
const accountPage = read("src/app/conta/page.tsx");
const googleButton = read("src/components/auth/google-sign-in-button.tsx");
const signOutButton = read("src/components/auth/sign-out-button.tsx");
const siteHeader = read("src/components/site-header.tsx");
const plans = read("src/lib/plans.ts");
const pricing = read("src/components/sections/pricing.tsx");

for (const dependency of ['"better-auth": "1.6.25"', '"@better-auth/drizzle-adapter": "1.6.25"']) {
  requireText(packageJson, dependency, `Dependência de autenticação ausente: ${dependency}.`);
}

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

for (const required of [
  'drizzleAdapter(db,',
  'provider: "pg"',
  'baseURL: process.env.BETTER_AUTH_URL || SITE_URL',
  'encryptOAuthTokens: true',
  'clientId: googleClientId',
  'clientSecret: googleClientSecret',
  'scope: ["openid", "email", "profile"]',
  'input: false',
]) {
  requireText(authServer, required, `Configuração do Better Auth incompleta: ${required}.`);
}

requireText(authClient, 'createAuthClient()', "Cliente React do Better Auth não está configurado.");
requireText(authRoute, 'toNextJsHandler(auth)', "Handler do Better Auth não está montado no App Router.");
requireText(authRoute, 'await ensureDatabaseSchema()', "Rota de auth precisa garantir o schema antes do acesso ao banco.");

for (const [name, source] of [
  ["/entrar", signInPage],
  ["/conta", accountPage],
]) {
  if (!/robots\s*:\s*\{[^}]*index\s*:\s*false[^}]*follow\s*:\s*false/s.test(source)) {
    failures.push(`${name} deve continuar noindex/nofollow.`);
  }
}

requireText(signInPage, "GoogleSignInButton", "Tela de login perdeu o CTA real do Google.");
requireText(signInPage, 'auth.api.getSession', "Tela de login não reconhece sessão existente.");
requireText(signInPage, 'redirect("/conta")', "Usuário autenticado não é redirecionado para /conta.");
requireText(accountPage, 'auth.api.getSession', "Área /conta não valida sessão no servidor.");
requireText(accountPage, 'redirect("/entrar")', "Área /conta não bloqueia visitante sem sessão.");
requireText(accountPage, "effectivePlan", "Área /conta não calcula o plano efetivo no servidor.");
requireText(googleButton, 'provider: "google"', "Botão de login não usa o provider Google.");
requireText(googleButton, 'callbackURL: "/conta"', "Login Google não retorna para /conta.");
requireText(signOutButton, "authClient.signOut", "Logout da conta não está implementado.");
requireText(siteHeader, "authClient.useSession()", "Cabeçalho não acompanha a sessão autenticada.");
requireText(siteHeader, 'session ? "/conta" : "/entrar"', "Cabeçalho não alterna entre login e Minha conta.");
requireText(siteHeader, 'session ? "Minha conta" : "Entrar"', "Cabeçalho não identifica o usuário autenticado.");
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

console.log("Contas OK: Google OAuth, tokens criptografados, sessão protegida, navegação autenticada, logout, schema, variáveis e controle de plano validados.");
