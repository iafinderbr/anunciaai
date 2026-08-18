import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AccountNav } from "@/components/account/account-nav";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { auth } from "@/lib/auth";
import { effectivePlan, PRO_PLANNED_FEATURES, PRO_PLANNED_PRICE_LABEL } from "@/lib/plans";
import { SITE_URL } from "@/lib/site";

const PATH = "/conta/plano";

export const metadata: Metadata = {
  title: "Plano da conta",
  description: "Veja o plano atual da sua conta AnunciaAI e os recursos planejados para Pro e Premium.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

const planNames = {
  free: "Grátis",
  pro: "Pro",
  premium: "Premium",
} as const;

const plannedPlans = [
  {
    name: "Grátis",
    status: "Disponível agora",
    price: "R$ 0/mês",
    description: "Para usar os geradores atuais com uma conta simples e manter histórico e produtos organizados.",
    features: ["10 geradores", "Login Google", "Histórico salvo", "Até 20 produtos salvos"],
  },
  {
    name: "Pro",
    status: "Pacote preparado",
    price: `${PRO_PLANNED_PRICE_LABEL}/mês`,
    description: "Para quem usa o AnunciaAI com frequência e quer mais velocidade, reutilização e espaço para trabalhar.",
    features: PRO_PLANNED_FEATURES,
  },
  {
    name: "Premium",
    status: "Em estudo",
    price: "Preço ainda não definido",
    description: "Uma camada futura para catálogos maiores e fluxos que precisem de escala e padronização.",
    features: ["Tudo do Pro", "Fluxos em lote", "Voz da marca", "Recursos avançados de catálogo"],
  },
] as const;

export default async function AccountPlanPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/entrar");

  const currentPlan = effectivePlan(session.user.plan, session.user.subscriptionStatus);

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="min-h-[70vh] bg-canvas">
        <section className="container-page py-8 sm:py-10 lg:py-12">
          <div className="mx-auto max-w-6xl">
            <AccountNav active="plan" />

            <div className="mt-6 rounded-3xl border border-line bg-white p-5 shadow-card sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Plano e assinatura</p>
                  <h1 className="mt-1 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    Seu plano atual é {planNames[currentPlan]}
                  </h1>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                    O Grátis já está ativo. O Pro foi preparado com preço planejado de {PRO_PLANNED_PRICE_LABEL} por mês, mas checkout, cobrança e ativação paga continuam desligados.
                  </p>
                </div>
                <span className="w-fit rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
                  Sem cobrança ativa
                </span>
              </div>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              {plannedPlans.map((plan) => {
                const isCurrent = plan.name === planNames[currentPlan];
                const isPro = plan.name === "Pro";
                return (
                  <article
                    key={plan.name}
                    className={`rounded-3xl border p-5 shadow-card sm:p-6 ${
                      isCurrent
                        ? "border-brand-300 bg-brand-50/55"
                        : isPro
                          ? "border-brand-200 bg-white"
                          : "border-line bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">{plan.status}</p>
                        <h2 className="mt-1 text-xl font-semibold text-ink">{plan.name}</h2>
                        <p className="mt-1 text-sm font-semibold text-brand-700">{plan.price}</p>
                      </div>
                      {isCurrent ? (
                        <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-white">Seu plano</span>
                      ) : isPro ? (
                        <span className="rounded-full border border-brand-200 bg-brand-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-brand-700">Planejado</span>
                      ) : null}
                    </div>
                    <p className="mt-4 min-h-12 text-sm leading-6 text-muted">{plan.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
                          <span aria-hidden="true" className="mt-1 text-brand-600">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {isPro ? (
                      <p className="mt-5 border-t border-line pt-4 text-xs leading-5 text-muted">
                        Ainda não é possível contratar. Este pacote serve como base para a abertura futura do Pro.
                      </p>
                    ) : null}
                  </article>
                );
              })}
            </div>

            <div className="mt-5 flex flex-col gap-3 rounded-3xl border border-line bg-white p-5 shadow-card sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-ink">Quer continuar usando agora?</p>
                <p className="mt-1 text-xs leading-5 text-muted">O plano Grátis fica liberado após o login e não exige cartão.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href="/conta/produtos" className="rounded-xl border border-line-strong bg-canvas px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand-300 hover:text-brand-700">
                  Produtos salvos
                </Link>
                <Link href="/ferramentas" className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">
                  Abrir ferramentas
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
