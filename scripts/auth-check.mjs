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
const authRoute = read("src/app/api/auth/[...all]/route.ts");
const plans = read("src/lib/plans.ts");
const stripe = read("src/lib/stripe.ts");
const checkoutApi = read("src/app/api/stripe/checkout/route.ts");
const pixApi = read("src/app/api/stripe/pix/route.ts");
const portalApi = read("src/app/api/stripe/portal/route.ts");
const webhookApi = read("src/app/api/stripe/webhook/route.ts");
const planApi = read("src/app/api/account/plan/route.ts");
const signInPage = read("src/app/entrar/page.tsx");
const accountPage = read("src/app/conta/page.tsx");
const planPage = read("src/app/conta/plano/page.tsx");
const proPage = read("src/app/conta/pro/page.tsx");
const billingActions = read("src/components/account/pro-billing-actions.tsx");
const accountNav = read("src/components/account/account-nav.tsx");
const siteHeader = read("src/components/site-header.tsx");
const pricing = read("src/components/sections/pricing.tsx");
const historyApi = read("src/app/api/account/history/route.ts");
const productsApi = read("src/app/api/account/products/route.ts");

for (const dependency of ['"better-auth": "1.6.25"', '"@better-auth/drizzle-adapter": "1.6.25"']) {
  requireText(packageJson, dependency, `Dependência de autenticação ausente: ${dependency}.`);
}

for (const variable of [
  "BETTER_AUTH_SECRET=",
  "BETTER_AUTH_URL=https://anunciaai.vercel.app",
  "GOOGLE_CLIENT_ID=",
  "GOOGLE_CLIENT_SECRET=",
  "STRIPE_SECRET_KEY=",
  "STRIPE_WEBHOOK_SECRET=",
  "STRIPE_PRO_PRICE_ID=",
]) {
  requireText(envExample, variable, `.env.example não documenta ${variable.split("=")[0]}.`);
}

for (const forbidden of [
  "NEXT_PUBLIC_BETTER_AUTH_SECRET",
  "NEXT_PUBLIC_GOOGLE_CLIENT_SECRET",
  "NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET",
  "NEXT_PUBLIC_DATABASE_URL",
  "NEXT_PUBLIC_STRIPE_SECRET_KEY",
  "NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET",
]) {
  if (envExample.includes(forbidden)) failures.push(`Segredo não pode ser exposto ao cliente: ${forbidden}.`);
}

for (const field of ["plan", "subscriptionStatus", "subscriptionProvider", "externalSubscriptionId", "proAccessUntil", "proAccessGrant"]) {
  requireText(schema, field, `Campo/registro de billing ausente no schema: ${field}.`);
}
requireText(ensureSchema, "add column if not exists pro_access_until", "Migração idempotente do acesso temporário Pro está ausente.");
requireText(ensureSchema, "create table if not exists pro_access_grant", "Tabela idempotente de concessões Pix está ausente.");

for (const required of [
  'from "better-auth/minimal"',
  'drizzleAdapter(db,',
  'provider: "pg"',
  'baseURL: process.env.BETTER_AUTH_URL || SITE_URL',
  'encryptOAuthTokens: true',
  'proAccessUntil:',
  'type: "date"',
  'input: false',
]) {
  requireText(authServer, required, `Configuração do Better Auth incompleta: ${required}.`);
}
requireText(authRoute, "await ensureDatabaseSchema()", "Rota de auth precisa garantir o schema antes do banco.");

for (const [name, source] of [
  ["/entrar", signInPage],
  ["/conta", accountPage],
  ["/conta/plano", planPage],
  ["/conta/pro", proPage],
]) {
  if (!/robots\s*:\s*\{[^}]*index\s*:\s*false[^}]*follow\s*:\s*false/s.test(source)) {
    failures.push(`${name} deve continuar noindex/nofollow.`);
  }
}

requireText(accountPage, "auth.api.getSession", "Área da conta não valida sessão no servidor.");
requireText(accountPage, "session.user.proAccessUntil", "Visão geral da conta não considera acesso Pro temporário via Pix.");
requireText(planPage, "auth.api.getSession", "Outros modos não valida sessão no servidor.");
requireText(planPage, 'redirect("/entrar")', "Outros modos não bloqueia visitantes.");
requireText(planPage, "session.user.proAccessUntil", "Outros modos não considera validade do Pix.");
requireText(proPage, "effectivePlan", "Área Pro não valida plano efetivo.");
requireText(proPage, "session.user.proAccessUntil", "Área Pro não valida o prazo do acesso comprado via Pix.");
requireText(proPage, 'redirect("/conta/plano")', "Área Pro precisa bloquear conta sem Pro ativo.");
requireText(accountNav, 'label: "Outros modos"', "Navegação da conta deve chamar a área comercial de Outros modos.");

for (const required of [
  'PRO_MONTHLY_PRICE_CENTS = 1990',
  'PRO_PRICE_LABEL = "R$ 19,90"',
  'PRO_PIX_ACCESS_DAYS = 30',
  'PRO_PIX_LABEL = "R$ 19,90 por 30 dias"',
  'subscriptionStatus === "active"',
  "hasTimedProAccess",
  "PRO_FEATURES",
  "PREMIUM_PLANNED_FEATURES",
]) {
  requireText(plans, required, `Catálogo de modos incompleto: ${required}.`);
}
if (plans.includes('subscriptionStatus === "active" || subscriptionStatus === "trialing"')) {
  failures.push("Acesso antecipado trialing não pode mais liberar o Pro pago.");
}

for (const required of [
  'process.env.STRIPE_SECRET_KEY',
  'process.env.STRIPE_WEBHOOK_SECRET',
  'process.env.STRIPE_PRO_PRICE_ID',
  'TEST_PRO_PRICE_ID = "price_1U5ofhBw7MQYFAhHe43J3ERq"',
  'createHmac("sha256"',
  "timingSafeEqual",
  "WEBHOOK_TOLERANCE_SECONDS = 300",
  "subscriptionHasProPrice",
  'body.set("line_items[0][price]", stripeProPriceId())',
  'body.set("subscription_data[metadata][userId]", input.userId)',
  'body.set("mode", "payment")',
  'body.set("payment_method_types[0]", "pix")',
  'String(PRO_MONTHLY_PRICE_CENTS)',
  'body.set("metadata[purchaseType]", "pix_30d")',
  'body.set("metadata[accessDays]", String(PRO_PIX_ACCESS_DAYS))',
]) {
  requireText(stripe, required, `Cliente Stripe perdeu proteção/configuração: ${required}.`);
}

for (const required of [
  "isAllowedOrigin(request)",
  "auth.api.getSession",
  "stripeBillingConfigured()",
  "effectivePlan(session.user.plan, session.user.subscriptionStatus, session.user.proAccessUntil)",
  'session.user.subscriptionProvider === "stripe"',
  "createProCheckoutSession",
]) {
  requireText(checkoutApi, required, `Checkout recorrente Pro perdeu proteção: ${required}.`);
}
if (/request\.json\(\)|priceId|price_id/.test(checkoutApi)) {
  failures.push("Checkout recorrente não pode aceitar Price ID vindo do navegador.");
}

for (const required of [
  "isAllowedOrigin(request)",
  "auth.api.getSession",
  "stripePixConfigured()",
  "effectivePlan(session.user.plan, session.user.subscriptionStatus, session.user.proAccessUntil)",
  "createProPixCheckoutSession",
  'error: "manage_existing_subscription"',
]) {
  requireText(pixApi, required, `Checkout Pix perdeu proteção: ${required}.`);
}
if (/request\.json\(\)|priceId|price_id|unit_amount|amount\s*[:=]/.test(pixApi)) {
  failures.push("Endpoint Pix não pode aceitar valor, amount ou Price ID vindo do navegador.");
}

for (const required of [
  "isAllowedOrigin(request)",
  "auth.api.getSession",
  "retrieveSubscription",
  "createCustomerPortalSession",
]) {
  requireText(portalApi, required, `Portal Stripe perdeu proteção: ${required}.`);
}

for (const required of [
  'request.headers.get("stripe-signature")',
  "request.text()",
  "verifyStripeWebhook",
  "subscriptionHasProPrice",
  'event.type === "checkout.session.completed"',
  'event.type === "checkout.session.async_payment_succeeded"',
  'event.type === "customer.subscription.created"',
  'event.type === "customer.subscription.updated"',
  'event.type === "customer.subscription.deleted"',
  'paymentStatus !== "paid"',
  'purchaseType !== "pix_30d"',
  "proAccessGrant",
  ".onConflictDoNothing()",
  "proAccessUntil",
  'subscriptionProvider: "stripe-pix"',
  'subscriptionProvider: "stripe"',
  'status === "active"',
]) {
  requireText(webhookApi, required, `Webhook Stripe perdeu proteção/sincronização: ${required}.`);
}
if (webhookApi.includes("isAllowedOrigin(request)")) {
  failures.push("Webhook Stripe não deve depender de Origin; autenticidade vem da assinatura Stripe-Signature.");
}

const attachStart = webhookApi.indexOf("async function attachCheckoutToUser");
const attachEnd = webhookApi.indexOf("async function grantPaidPixAccess");
if (attachStart < 0 || attachEnd <= attachStart) {
  failures.push("Webhook perdeu a etapa explícita de vínculo seguro do Checkout recorrente.");
} else {
  const attachBlock = webhookApi.slice(attachStart, attachEnd);
  requireText(attachBlock, 'mode !== "subscription"', "Checkout concluído precisa validar mode=subscription antes de vincular a assinatura.");
  requireText(attachBlock, 'purchaseType !== "subscription"', "Checkout concluído precisa validar metadata purchaseType=subscription.");
  requireText(attachBlock, 'plan !== "pro"', "Checkout concluído precisa validar metadata plan=pro.");
  if (/plan\s*:\s*"pro"/.test(attachBlock)) {
    failures.push("checkout.session.completed não pode conceder Pro; somente subscription active + Price esperado libera acesso.");
  }
}

requireText(planApi, 'error: "billing_managed_by_stripe"', "API antiga de plano deve bloquear mutação local.");
requireText(planApi, 'status: 405', "API antiga de plano deve retornar 405 para mutações.");
requireText(planApi, "session.user.proAccessUntil", "API de plano precisa considerar acesso temporário Pro comprado por Pix.");
if (/\.update\(user\)|plan:\s*"pro"/.test(planApi)) {
  failures.push("API /api/account/plan não pode mais promover usuário para Pro.");
}

for (const required of [
  "ProBillingActions",
  "stripeBillingConfigured",
  "stripePixConfigured",
  'status: "Planejado"',
  "PRO_PRICE_LABEL",
  "30 dias",
  "não renova automaticamente",
]) {
  requireText(planPage, required, `Página Outros modos incompleta: ${required}.`);
}
requireText(billingActions, '"/api/stripe/checkout"', "CTA Pro precisa chamar checkout protegido.");
requireText(billingActions, '"/api/stripe/pix"', "CTA Pix precisa chamar checkout protegido.");
requireText(billingActions, '"/api/stripe/portal"', "CTA Pro precisa abrir Customer Portal.");
requireText(billingActions, "Pix é pagamento único por 30 dias", "UI precisa explicar que Pix não é recorrente.");

requireText(pricing, "export function PricingSection() {\n  return null;", "Preços devem sair da página pública.");
if (pricing.includes("R$ 19,90")) failures.push("Preço do Pro não deve aparecer na Home pública.");
if (siteHeader.includes(">Preços<") || siteHeader.includes('href="/#precos"')) {
  failures.push("Cabeçalho público não deve exibir Preços.");
}
requireText(siteHeader, "authClient.useSession()", "Cabeçalho precisa acompanhar sessão autenticada.");
requireText(siteHeader, 'id="inicio-conteudo"', "Cabeçalho perdeu o alvo acessível do skip link.");

for (const [name, source] of [["histórico", historyApi], ["produtos", productsApi]]) {
  requireText(source, "auth.api.getSession", `API de ${name} perdeu autenticação.`);
  requireText(source, "isAllowedOrigin(request)", `API de ${name} perdeu proteção de origem.`);
}
requireText(productsApi, 'request.headers.get("content-length")', "API de produtos precisa rejeitar payload declarado grande antes de ler o corpo.");
requireText(productsApi, "MUTATION_RATE_HARD_CAP", "API de produtos precisa limitar crescimento do mapa de rate limit em memória.");

if (failures.length) {
  console.error("\nFalhas na auditoria de autenticação/billing:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Contas OK: login obrigatório, Pro R$ 19,90/mês no cartão, Pix avulso de 30 dias, webhook assinado e idempotente, ativação Pro só por assinatura ativa validada, preço server-side, Customer Portal e Premium planejado validados.");
