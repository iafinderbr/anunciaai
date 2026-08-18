import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AccountNav } from "@/components/account/account-nav";
import { ProBillingActions } from "@/components/account/pro-billing-actions";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { auth } from "@/lib/auth";
import { effectivePlan, PREMIUM_PLANNED_FEATURES, PRO_FEATURES, PRO_PRICE_LABEL } from "@/lib/plans";
import { stripeBillingConfigured } from "@/lib/stripe";
import { SITE_URL } from "@/lib/site";

const PATH = "/conta/plano";

export const metadata: Metadata = {
  title: "Outros modos da conta",
  description: "Compare os modos da sua conta AnunciaAI e gerencie o Pro com cobrança segura pela Stripe.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

const modeNames = {
  free: "Grátis",
  pro: "Pro",
  premium: "Premium",
} as const;

export default async function AccountPlanPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout?: string }>;
}) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/entrar");

  const query = await searchParams;
  const currentPlan = effectivePlan(session.user.plan, session.user.subscriptionStatus);
  const proActive = currentPlan === "pro";
  const hasStripeSubscription =
    session.user.subscriptionProvider === "stripe" && Boolean(session.user.externalSubscriptionId);
  const billingReady = stripeBillingConfigured();

  const modes = [
    {
      name: "Grátis",
      status: "Disponível",
      price: "R$ 0/mês",
      description: "Para usar os geradores atuais e manter histórico e produtos organizados.",
      features: ["10 geradores", "Login Google", "Histórico salvo", "Até 20 produtos salvos"],
    },
    {
      name: "Pro",
      status: proActive ? "Ativo" : "Disponível",
      price: `${PRO_PRICE_LABEL}/mês`,
      description: "Para comparar mais versões do mesmo produto e acessar os recursos exclusivos Pro.",
      features: PRO_FEATURES,
    },
    {
      name: "Premium",
      status: "Planejado",
      price: "Ainda não disponível",
      description: "Camada futura para operações maiores, catálogo e padronização de marca.",
      features: PREMIUM_PLANNED_FEATURES,
    },
  ] as const;

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="min-h-[70vh] bg-[#f4f4f1]">
        <section className="container-page py-8 sm:py-10 lg:py-12">
          <div className="mx-auto max-w-6xl">
            <AccountNav active="plan" />

            {query.checkout === "success" ? (
              <div className="mt-6 border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm leading-6 text-emerald-800">
                Pagamento concluído na Stripe. O Pro é liberado somente após a confirmação assinada do webhook; isso normalmente acontece em instantes.
              </div>
            ) : null}
            {query.checkout === "canceled" ? (
              <div className="mt-6 border border-line bg-white px-5 py-4 text-sm leading-6 text-muted">
                Checkout cancelado. Nenhuma alteração foi feita no seu modo.
              </div>
            ) : null}

            <div className="mt-6 border border-line bg-white p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">Outros modos</p>
                  <h1 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-[2.5rem]">
                    Sua conta está no modo {modeNames[currentPlan]}
                  </h1>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                    O modo Grátis continua disponível. O Pro custa {PRO_PRICE_LABEL}/mês e a cobrança acontece no Checkout hospedado pela Stripe. O Premium continua planejado.
                  </p>
                </div>
                <span className={`w-fit border px-3 py-2 text-xs font-semibold ${proActive ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-line-strong bg-[#f7f7f4] text-muted"}`}>
                  {proActive ? "Pro ativo" : "Conta ativa"}
                </span>
              </div>
            </div>

            <div className="mt-5 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-3">
              {modes.map((mode) => {
                const isCurrent = mode.name === modeNames[currentPlan];
                const isPro = mode.name === "Pro";
                const isPremium = mode.name === "Premium";

                return (
                  <article key={mode.name} className={`${isPro ? "bg-[#111216] text-white" : "bg-white text-ink"} p-6 sm:p-7`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${isPro ? "text-brand-300" : "text-muted"}`}>{mode.status}</p>
                        <h2 className={`mt-2 text-2xl font-semibold tracking-[-0.035em] ${isPro ? "text-white" : "text-ink"}`}>{mode.name}</h2>
                      </div>
                      {isCurrent ? (
                        <span className={`border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${isPro ? "border-white/15 text-white/72" : "border-brand-200 bg-brand-50 text-brand-700"}`}>Seu modo</span>
                      ) : isPremium ? (
                        <span className="border border-line-strong px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">Planejado</span>
                      ) : null}
                    </div>

                    <p className={`mt-6 text-xl font-semibold tracking-[-0.03em] ${isPro ? "text-white" : "text-ink"}`}>{mode.price}</p>
                    <p className={`mt-4 min-h-16 text-sm leading-6 ${isPro ? "text-white/55" : "text-muted"}`}>{mode.description}</p>

                    <ul className={`mt-6 space-y-3 border-t pt-5 ${isPro ? "border-white/10" : "border-line"}`}>
                      {mode.features.map((feature) => (
                        <li key={feature} className={`flex items-start gap-2.5 text-sm leading-6 ${isPro ? "text-white/72" : "text-ink-soft"}`}>
                          <span aria-hidden="true" className={isPro ? "text-brand-300" : "text-brand-600"}>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {isPro ? (
                      <div className="mt-7 border-t border-white/10 pt-6">
                        {proActive ? (
                          <Link href="/conta/pro" className="mb-3 inline-flex min-h-11 w-full items-center justify-center border border-white/15 px-5 text-sm font-semibold text-white transition-colors hover:border-brand-400 hover:text-brand-300">
                            Abrir recursos Pro →
                          </Link>
                        ) : null}
                        <ProBillingActions
                          active={proActive}
                          hasStripeSubscription={hasStripeSubscription}
                          billingReady={billingReady}
                        />
                        <p className="mt-3 text-xs leading-5 text-white/36">Cartão e dados de pagamento ficam na Stripe. O AnunciaAI não recebe os dados do cartão.</p>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>

            <div className="mt-5 flex flex-col gap-4 border border-line bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-sm font-semibold text-ink">Cobrança gerenciada pela Stripe.</p>
                <p className="mt-1 text-xs leading-5 text-muted">Assinatura, atualização do pagamento e cancelamento ficam no ambiente seguro da Stripe. O Premium permanece apenas como planejamento.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {proActive ? <Link href="/conta/pro" className="bg-ink px-4 py-3 text-sm font-semibold text-white hover:bg-brand-600">Abrir Pro</Link> : null}
                <Link href="/ferramentas" className="border border-line-strong bg-white px-4 py-3 text-sm font-semibold text-ink hover:border-brand-300 hover:text-brand-700">Ferramentas</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
