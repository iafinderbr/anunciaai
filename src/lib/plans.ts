export const PLAN_IDS = ["free", "pro", "premium"] as const;
export type PlanId = (typeof PLAN_IDS)[number];

export const SUBSCRIPTION_STATUSES = ["inactive", "active", "past_due", "canceled"] as const;
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
 * Um plano pago só produz acesso pago se a assinatura estiver ativa. Isso evita
 * liberar recursos apenas porque algum campo de plano ficou desatualizado.
 */
export function effectivePlan(plan: unknown, subscriptionStatus: unknown): PlanId {
  const normalized = normalizePlan(plan);
  if (normalized === "free") return "free";
  return subscriptionStatus === "active" ? normalized : "free";
}

export function planAllows(plan: PlanId, feature: FeatureKey): boolean {
  return PLAN_FEATURES[plan].has(feature);
}
