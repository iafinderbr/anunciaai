export const PLAN_IDS = ["free", "pro", "premium"] as const;
export type PlanId = (typeof PLAN_IDS)[number];

export const SUBSCRIPTION_STATUSES = ["inactive", "trialing", "active", "past_due", "canceled"] as const;
export type SubscriptionStatus = (typeof SUBSCRIPTION_STATUSES)[number];

export const FEATURE_KEYS = [
  "basic_generators",
  "history",
  "saved_products",
  "extra_variations",
  "batch_workflows",
  "brand_voice",
] as const;
export type FeatureKey = (typeof FEATURE_KEYS)[number];

export const PRO_MONTHLY_PRICE_CENTS = 1990;
export const PRO_PRICE_LABEL = "R$ 19,90";
export const PRO_BILLING_LABEL = "R$ 19,90/mês";

export const PLAN_LIMITS: Record<PlanId, { history: number; savedProducts: number; titleAlternatives: number }> = {
  free: { history: 100, savedProducts: 20, titleAlternatives: 1 },
  pro: { history: 100, savedProducts: 20, titleAlternatives: 2 },
  premium: { history: 100, savedProducts: 20, titleAlternatives: 2 },
};

export const PRO_FEATURES = [
  "Tudo do modo Grátis",
  "Laboratório com 3 versões do mesmo produto",
  "Mais opções de título para comparação",
  "Acesso aos próximos recursos Pro enquanto a assinatura estiver ativa",
] as const;

export const PREMIUM_PLANNED_FEATURES = [
  "Tudo do Pro",
  "Fluxos em lote",
  "Padrões e voz da marca",
  "Recursos avançados para catálogos",
] as const;

const PLAN_FEATURES: Record<PlanId, ReadonlySet<FeatureKey>> = {
  free: new Set(["basic_generators", "history", "saved_products"]),
  pro: new Set(["basic_generators", "history", "saved_products", "extra_variations"]),
  premium: new Set([
    "basic_generators",
    "history",
    "saved_products",
    "extra_variations",
    "batch_workflows",
    "brand_voice",
  ]),
};

export function normalizePlan(value: unknown): PlanId {
  return typeof value === "string" && PLAN_IDS.includes(value as PlanId) ? (value as PlanId) : "free";
}

/**
 * O plano pago só libera recursos quando o Stripe confirma status `active`.
 * Estados locais antigos de acesso antecipado (`trialing`) não concedem mais Pro.
 */
export function effectivePlan(plan: unknown, subscriptionStatus: unknown): PlanId {
  const normalized = normalizePlan(plan);
  if (normalized === "free") return "free";
  return subscriptionStatus === "active" ? normalized : "free";
}

export function planAllows(plan: PlanId, feature: FeatureKey): boolean {
  return PLAN_FEATURES[plan].has(feature);
}

export function historyLimitForPlan(plan: PlanId): number {
  return PLAN_LIMITS[plan].history;
}

export function savedProductsLimitForPlan(plan: PlanId): number {
  return PLAN_LIMITS[plan].savedProducts;
}

export function titleAlternativesLimitForPlan(plan: PlanId): number {
  return PLAN_LIMITS[plan].titleAlternatives;
}
