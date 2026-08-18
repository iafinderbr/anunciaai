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
const authServer = read("src/lib/auth.ts");
const authRoute = read("src/app/api/auth/[...all]/route.ts");
const plans = read("src/lib/plans.ts");
const stripe = read("src/lib/stripe.ts");
const checkoutApi = read("src/app/api/stripe/checkout/route.ts");
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

for (const field of ["plan", "subscriptionStatus", "subscriptionProvider", "externalSubscriptionId"]) {
  requireText(schema, field, `Campo de assinatura ausente no usuário: ${field}.`);
}

for (const required of [
  'from "better-auth/minimal"',
  'drizzleAdapter(db,',
  'provider: "pg"',
  'baseURL: process.env.BETTER_AUTH_URL || SITE_URL',
  'encryptOAuthTokens: true',
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
requireText(planPage, "auth.api.getSession", "Outros modos não valida sessão no servidor.");
requireText(planPage, 'redirect("/entrar")', "Outros modos não bloqueia visitantes.");
requireText(proPage, "effectivePlan", "Área Pro não valida plano efetivo.");
requireText(proPage, 'redirect("/conta/plano")', "Área Pro precisa bloquear conta sem Pro ativo.");
requireText(accountNav, 'label: "Outros modos"', "Navegação da conta deve chamar a área comercial de Outros modos.");

for (const required of [
  'PRO_MONTHLY_PRICE_CENTS = 1990',
  'PRO_PRICE_LABEL = "R$ 19,90"',
  'subscriptionStatus === "active"',
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
]) {
  requireText(stripe, required, `Cliente Stripe perdeu proteção/configuração: ${required}.`);
}

for (const required of [
  "isAllowedOrigin(request)",
  "auth.api.getSession",
  "stripeBillingConfigured()",
  "effectivePlan(session.user.plan, session.user.subscriptionStatus)",
  'session.user.subscriptionProvider === "stripe"',
  "createProCheckoutSession",
]) {
  requireText(checkoutApi, required, `Checkout Pro perdeu proteção: ${required}.`);
}
if (/request\.json\(\)|priceId|price_id/.test(checkoutApi)) {
  failures.push("Checkout não pode aceitar Price ID vindo do navegador.");
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
  'event.type === "customer.subscription.created"',
  'event.type === "customer.subscription.updated"',
  'event.type === "customer.subscription.deleted"',
  'subscriptionProvider: "stripe"',
  'status === "active"',
]) {
  requireText(webhookApi, required, `Webhook Stripe perdeu proteção/sincronização: ${required}.`);
}
if (webhookApi.includes("isAllowedOrigin(request)")) {
  failures.push("Webhook Stripe não deve depender de Origin; autenticidade vem da assinatura Stripe-Signature.");
}

requireText(planApi, 'error: "billing_managed_by_stripe"', "API antiga de plano deve bloquear mutação local.");
requireText(planApi, 'status: 405', "API antiga de plano deve retornar 405 para mutações.");
if (/\.update\(user\)|plan:\s*"pro"/.test(planApi)) {
  failures.push("API /api/account/plan não pode mais promover usuário para Pro.");
}

for (const required of [
  "ProBillingActions",
  "stripeBillingConfigured",
  'status: "Planejado"',
  "PRO_PRICE_LABEL",
  "Cartão e dados de pagamento ficam na Stripe",
]) {
  requireText(planPage, required, `Página Outros modos incompleta: ${required}.`);
}
requireText(billingActions, 'fetch("/api/stripe/checkout"', "CTA Pro precisa chamar checkout protegido.");
requireText(billingActions, 'fetch("/api/stripe/portal"', "CTA Pro precisa abrir Customer Portal.");

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

if (failures.length) {
  console.error("\nFalhas na auditoria de autenticação/billing:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Contas OK: login obrigatório, Outros modos privado, Pro R$ 19,90/mês via Stripe Checkout, webhook assinado, preço server-side, Customer Portal e Premium planejado validados.");
