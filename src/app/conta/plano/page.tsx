import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AccountNav } from "@/components/account/account-nav";
import { ProEarlyAccessButton } from "@/components/account/pro-early-access-button";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { auth } from "@/lib/auth";
import {
  effectivePlan,
  PREMIUM_PLANNED_FEATURES,
  PRO_EARLY_ACCESS_LABEL,
  PRO_FEATURES,
  PRO_FUTURE_PRICE_LABEL,
} from "@/lib/plans";
import { SITE_URL } from "@/lib/site";

const PATH = "/conta/plano";

export const metadata: Metadata = {
  title: "Plano da conta",
  description: "Veja o plano atual da sua conta AnunciaAI, ative o Pro em acesso antecipado e acompanhe o Premium planejado.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

const planNames = {
  free: "Grátis",
  pro: "Pro",
  premium: "Premium",
} as const;

export default async function AccountPlanPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/entrar");

  const currentPlan = effectivePlan(session.user.plan, session.user.subscriptionStatus);
  const proActive = currentPlan === "pro" || currentPlan === "premium";

  const plans = [
    {
      name: "Grátis",
      status: "Disponível",
      price: "R$ 0/mês",
      description: "Para usar os geradores atuais e manter histórico e produtos organizados.",
      features: ["10 geradores", "Login Google", "Histórico salvo", "Até 20 produtos salvos"],
    },
    {
      name: "Pro",
      status: "Acesso antecipado",
      price: "R$ 0 durante o acesso antecipado",
      description: "Plano ativo de produto com recursos exclusivos para comparar mais versões antes de publicar.",
      features: PRO_FEATURES,
    },
    {
      name: "Premium",
      status: "Planejado",
      price: "Preço ainda não definido",
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

            <div className="mt-6 border border-line bg-white p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">Plano e acesso</p>
                  <h1 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-[2.5rem]">
                    Seu plano atual é {planNames[currentPlan]}
                  </h1>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                    O Pro saiu do estado de planejamento e está disponível em acesso antecipado sem cobrança. O preço comercial de referência continua sendo {PRO_FUTURE_PRICE_LABEL}/mês para uma fase futura com checkout real.
                  </p>
                </div>
                <span className="w-fit border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                  {PRO_EARLY_ACCESS_LABEL}
                </span>
              </div>
            </div>

            <div className="mt-5 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-3">
              {plans.map((plan) => {
                const isCurrent = plan.name === planNames[currentPlan];
                const isPro = plan.name === "Pro";
                const isPremium = plan.name === "Premium";

                return (
                  <article key={plan.name} className={`${isPro ? "bg-[#111216] text-white" : "bg-white text-ink"} p-6 sm:p-7`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${isPro ? "text-brand-300" : "text-muted"}`}>{plan.status}</p>
                        <h2 className={`mt-2 text-2xl font-semibold tracking-[-0.035em] ${isPro ? "text-white" : "text-ink"}`}>{plan.name}</h2>
                      </div>
                      {isCurrent ? (
                        <span className={`border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${isPro ? "border-white/15 text-white/72" : "border-brand-200 bg-brand-50 text-brand-700"}`}>Seu plano</span>
                      ) : isPremium ? (
                        <span className="border border-line-strong px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">Planejado</span>
                      ) : null}
                    </div>

                    <p className={`mt-6 text-xl font-semibold tracking-[-0.03em] ${isPro ? "text-white" : "text-ink"}`}>{plan.price}</p>
                    <p className={`mt-4 min-h-16 text-sm leading-6 ${isPro ? "text-white/55" : "text-muted"}`}>{plan.description}</p>

                    <ul className={`mt-6 space-y-3 border-t pt-5 ${isPro ? "border-white/10" : "border-line"}`}>
                      {plan.features.map((feature) => (
                        <li key={feature} className={`flex items-start gap-2.5 text-sm leading-6 ${isPro ? "text-white/72" : "text-ink-soft"}`}>
                          <span aria-hidden="true" className={isPro ? "text-brand-300" : "text-brand-600"}>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {isPro ? (
                      <div className="mt-7 border-t border-white/10 pt-6">
                        {proActive ? (
                          <div className="grid gap-3">
                            <Link href="/conta/pro" className="inline-flex min-h-11 items-center justify-center bg-white px-5 text-sm font-semibold text-[#111216] transition-colors hover:bg-brand-500 hover:text-white">
                              Abrir recursos Pro →
                            </Link>
                            <ProEarlyAccessButton active />
                          </div>
                        ) : (
                          <ProEarlyAccessButton />
                        )}
                        <p className="mt-3 text-xs leading-5 text-white/36">Sem cartão e sem assinatura paga durante esta fase.</p>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>

            <div className="mt-5 flex flex-col gap-4 border border-line bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-sm font-semibold text-ink">Pro já tem recurso exclusivo funcionando.</p>
                <p className="mt-1 text-xs leading-5 text-muted">Ative o acesso antecipado e use o laboratório de três versões do mesmo produto.</p>
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
