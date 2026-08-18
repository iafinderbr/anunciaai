import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AccountNav } from "@/components/account/account-nav";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { auth } from "@/lib/auth";
import { effectivePlan } from "@/lib/plans";
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
    description: "Para criar anúncios e manter uma conta com histórico salvo manualmente.",
    features: ["10 geradores", "Conta Google", "Histórico salvo", "Guias práticos"],
  },
  {
    name: "Pro",
    status: "Em preparação",
    description: "Para quem usa o AnunciaAI com frequência e quer mais produtividade.",
    features: ["Tudo do Grátis", "Produtos salvos", "Mais variações", "Atalhos e preferências"],
  },
  {
    name: "Premium",
    status: "Em preparação",
    description: "Para catálogos maiores e fluxos que precisam de escala e padronização.",
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
                    Hoje não existe cobrança Pro ou Premium ativa. Quando o checkout estiver pronto, preço e condições aparecerão aqui antes de qualquer assinatura.
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
                return (
                  <article
                    key={plan.name}
                    className={`rounded-3xl border p-5 shadow-card sm:p-6 ${
                      isCurrent ? "border-brand-300 bg-brand-50/55" : "border-line bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">{plan.status}</p>
                        <h2 className="mt-1 text-xl font-semibold text-ink">{plan.name}</h2>
                      </div>
                      {isCurrent ? (
                        <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-white">Seu plano</span>
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
                  </article>
                );
              })}
            </div>

            <div className="mt-5 flex flex-col gap-3 rounded-3xl border border-line bg-white p-5 shadow-card sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-ink">Quer continuar usando agora?</p>
                <p className="mt-1 text-xs leading-5 text-muted">A versão Grátis continua disponível enquanto preparamos os recursos pagos.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href="/#precos" className="rounded-xl border border-line-strong bg-canvas px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand-300 hover:text-brand-700">
                  Ver planos na home
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
