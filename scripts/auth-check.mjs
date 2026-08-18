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
const historyApi = read("src/app/api/account/history/route.ts");
const productsApi = read("src/app/api/account/products/route.ts");
const signInPage = read("src/app/entrar/page.tsx");
const accountPage = read("src/app/conta/page.tsx");
const historyPage = read("src/app/conta/historico/page.tsx");
const productsPage = read("src/app/conta/produtos/page.tsx");
const planPage = read("src/app/conta/plano/page.tsx");
const googleButton = read("src/components/auth/google-sign-in-button.tsx");
const generatorAccessGate = read("src/components/auth/generator-access-gate.tsx");
const signOutButton = read("src/components/auth/sign-out-button.tsx");
const siteHeader = read("src/components/site-header.tsx");
const generatorTool = read("src/components/generator/generator-tool.tsx");
const productNameTool = read("src/components/generator/product-name-tool.tsx");
const productKeywordsTool = read("src/components/generator/product-keywords-tool.tsx");
const productControls = read("src/components/generator/saved-product-controls.tsx");
const resultPanel = read("src/components/generator/result-panel.tsx");
const privacyPage = read("src/app/privacidade/page.tsx");
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

for (const table of [
  'pgTable(\n  "user"',
  'pgTable(\n  "session"',
  'pgTable(\n  "account"',
  'pgTable(\n  "verification"',
  'pgTable(\n  "saved_generation"',
  'pgTable(\n  "saved_product"',
]) {
  requireText(schema, table, `Schema de autenticação/conta incompleto: ${table}.`);
}

for (const field of ["plan", "subscriptionStatus", "subscriptionProvider", "externalSubscriptionId"]) {
  requireText(schema, field, `Campo de assinatura ausente no usuário: ${field}.`);
}

for (const table of [
  'create table if not exists "user"',
  'create table if not exists "session"',
  'create table if not exists "account"',
  "create table if not exists verification",
  "create table if not exists saved_generation",
  "create table if not exists saved_product",
]) {
  requireText(ensureSchema, table, `Criação idempotente ausente: ${table}.`);
}

requireText(authServer, 'from "better-auth/minimal"', "Servidor deve continuar usando a entrada minimal do Better Auth.");
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
  ["/conta/historico", historyPage],
  ["/conta/produtos", productsPage],
  ["/conta/plano", planPage],
]) {
  if (!/robots\s*:\s*\{[^}]*index\s*:\s*false[^}]*follow\s*:\s*false/s.test(source)) {
    failures.push(`${name} deve continuar noindex/nofollow.`);
  }
}

requireText(signInPage, "GoogleSignInButton", "Tela de login perdeu o CTA real do Google.");
requireText(signInPage, 'auth.api.getSession', "Tela de login não reconhece sessão existente.");
requireText(signInPage, 'redirect("/conta")', "Usuário autenticado não é redirecionado para /conta.");
requireText(signInPage, "use tudo do Grátis", "Tela de login deve explicar que a conta libera o modo Grátis.");
requireText(accountPage, 'auth.api.getSession', "Área /conta não valida sessão no servidor.");
requireText(accountPage, 'redirect("/entrar")', "Área /conta não bloqueia visitante sem sessão.");
requireText(accountPage, "effectivePlan", "Área /conta não calcula o plano efetivo no servidor.");
requireText(accountPage, 'href="/conta/historico"', "Minha conta não oferece acesso ao histórico.");
requireText(accountPage, 'href="/conta/produtos"', "Minha conta não oferece acesso aos produtos salvos.");
requireText(historyPage, 'auth.api.getSession', "Histórico não valida sessão no servidor.");
requireText(historyPage, 'redirect("/entrar")', "Histórico não bloqueia visitante sem sessão.");
requireText(productsPage, 'auth.api.getSession', "Produtos salvos não validam sessão no servidor.");
requireText(productsPage, 'redirect("/entrar")', "Produtos salvos não bloqueiam visitante sem sessão.");
requireText(googleButton, 'provider: "google"', "Botão de login não usa o provider Google.");
requireText(googleButton, 'callbackURL = "/conta"', "Login Google precisa manter /conta como retorno padrão.");
requireText(googleButton, "callbackURL,", "Botão Google precisa aceitar retorno para a ferramenta de origem.");
requireText(generatorAccessGate, "authClient.useSession()", "Gate dos geradores não valida sessão.");
requireText(generatorAccessGate, "GoogleSignInButton", "Gate dos geradores perdeu o login Google inline.");
requireText(generatorAccessGate, "10 geradores grátis", "Gate deve explicar o acesso gratuito liberado pelo login.");
for (const [name, source] of [
  ["gerador principal", generatorTool],
  ["gerador de nomes", productNameTool],
  ["gerador de palavras-chave", productKeywordsTool],
]) {
  requireText(source, "GeneratorAccessGate", `${name} precisa exigir login antes de liberar a ferramenta.`);
}
requireText(signOutButton, "authClient.signOut", "Logout da conta não está implementado.");
requireText(siteHeader, "authClient.useSession()", "Cabeçalho não acompanha a sessão autenticada.");
requireText(siteHeader, 'session ? "/conta" : "/entrar"', "Cabeçalho não alterna entre login e Minha conta.");
requireText(siteHeader, 'session ? "Minha conta" : "Entrar"', "Cabeçalho não identifica o usuário autenticado.");

for (const required of [
  "auth.api.getSession",
  "isAllowedOrigin(request)",
  "MAX_BODY_BYTES",
  "MAX_HISTORY_ITEMS = 100",
  "eq(savedGeneration.userId, userId)",
]) {
  requireText(historyApi, required, `API do histórico perdeu proteção: ${required}.`);
}
requireText(historyApi, "unexpected_fields", "API do histórico deve rejeitar campos inesperados.");

for (const required of [
  "auth.api.getSession",
  "isAllowedOrigin(request)",
  "MAX_BODY_BYTES",
  "MAX_PRODUCTS = 20",
  "eq(savedProduct.userId, userId)",
  "unexpected_fields",
]) {
  requireText(productsApi, required, `API de produtos salvos perdeu proteção: ${required}.`);
}

requireText(generatorTool, "SavedProductControls", "Geradores perderam o seletor de produtos salvos.");
requireText(productControls, 'fetch("/api/account/products"', "Controles de produto não carregam a biblioteca protegida.");
requireText(productControls, "Usar produto", "Biblioteca não permite reutilizar um produto no formulário.");
requireText(productControls, "Salvar produto atual", "Formulário não permite salvar o produto atual.");
requireText(productControls, "Nada é salvo automaticamente", "Controles de produto devem explicar que o salvamento é opt-in.");
requireText(resultPanel, "Salvar no histórico", "Resultado perdeu o salvamento explícito no histórico.");
requireText(resultPanel, "Salvar produto", "Resultado perdeu o salvamento explícito do produto.");
requireText(resultPanel, "só são enviados ao servidor quando você usa um dos botões de salvar", "Interface deve deixar claro que os salvamentos são opt-in.");
requireText(privacyPage, "Histórico salvo pelo usuário", "Política de privacidade não explica o histórico salvo.");
requireText(privacyPage, "Biblioteca de produtos salvos", "Política de privacidade não explica a biblioteca de produtos.");
requireText(privacyPage, "não é adicionado ao histórico ou à biblioteca de forma automática", "Política deve informar que dados pessoais não são salvos automaticamente.");

requireText(plans, 'subscriptionStatus === "active"', "Plano pago precisa exigir assinatura ativa no servidor.");
requireText(plans, 'return subscriptionStatus === "active" ? normalized : "free"', "Fallback de plano pago para free foi removido.");
requireText(plans, 'free: new Set(["basic_generators", "history", "saved_products"])', "Plano Grátis deve refletir histórico e produtos salvos atualmente disponíveis.");
requireText(plans, 'PRO_PLANNED_PRICE_LABEL = "R$ 19,90"', "Preço planejado do Pro precisa ficar centralizado no catálogo de planos.");
requireText(pricing, "Preço planejado", "Seção de preços deve marcar o valor do Pro como planejado.");
requireText(pricing, "Ainda não é possível contratar", "Seção de preços deve deixar claro que o Pro não está à venda.");

if (/Assinar agora/i.test(pricing)) {
  failures.push("A interface não pode mostrar 'Assinar agora' antes do checkout real estar ativo.");
}

if (failures.length) {
  console.error("\nFalhas na auditoria de autenticação/planos:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Contas OK: Google OAuth, login obrigatório nos geradores, modo Grátis, histórico e produtos opt-in, preço Pro planejado, schema, variáveis e controle de plano validados.");
