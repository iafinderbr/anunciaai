import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AccountNav } from "@/components/account/account-nav";
import { AccountShellHeader } from "@/components/account/account-shell-header";
import { ProBillingActions } from "@/components/account/pro-billing-actions";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { auth } from "@/lib/auth";
import { effectivePlan, PREMIUM_PLANNED_FEATURES, PRO_FEATURES, PRO_PRICE_LABEL } from "@/lib/plans";
import { stripeBillingConfigured, stripePixConfigured } from "@/lib/stripe";
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
  const currentPlan = effectivePlan(session.user.plan, session.user.subscriptionStatus, session.user.proAccessUntil);
  const proActive = currentPlan === "pro";
  const hasStripeSubscription =
    session.user.subscriptionProvider === "stripe" && Boolean(session.user.externalSubscriptionId);
  const billingReady = stripeBillingConfigured();
  const pixReady = stripePixConfigured();
  const pixAccessUntil = session.user.proAccessUntil ? new Date(session.user.proAccessUntil).toISOString() : null;

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
      price: PRO_PRICE_LABEL,
      description: pixReady
        ? "Assinatura automática no cartão ou 30 dias de acesso por pagamento único via Pix."
        : "Assinatura mensal no cartão. O acesso por Pix já está preparado e será liberado após a ativação da conta Stripe.",
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
      <main className="min-h-[70vh] bg-[#0d0e11] text-white">
        <section className="container-page py-7 sm:py-9 lg:py-10">
          <div className="mx-auto max-w-6xl">
            <AccountShellHeader name={session.user.name} email={session.user.email} plan={currentPlan} />
            <div className="mt-3"><AccountNav active="plan" /></div>

            {query.checkout === "success" ? (
              <div className="mt-6 border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm leading-6 text-emerald-800">
                Checkout concluído na Stripe. O Pro é liberado somente após a confirmação assinada do webhook; isso normalmente acontece em instantes.
              </div>
            ) : null}
            {query.checkout === "pix-pending" ? (
              <div className="mt-6 border border-brand-200 bg-brand-50 px-5 py-4 text-sm leading-6 text-brand-800">
                Pix iniciado. Se você concluiu o pagamento no banco, aguarde a confirmação da Stripe. O acesso de 30 dias só é liberado depois do evento de pagamento confirmado.
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
                    O modo Grátis continua disponível. O Pro custa {PRO_PRICE_LABEL} no cartão, com cobrança mensal automática.
                    {pixReady ? " O Pix libera 30 dias por pagamento único, sem renovação automática." : " O Pix está preparado e permanece em ativação até a liberação da conta Stripe."} O Premium continua planejado.
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
                    {isPro ? <p className="mt-1 text-[11px] text-white/34">{pixReady ? "por mês no cartão · ou por 30 dias no Pix" : "por mês no cartão · Pix em ativação"}</p> : null}
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
                          pixReady={pixReady}
                          pixAccessUntil={pixAccessUntil}
                        />
                        <p className="mt-3 text-xs leading-5 text-white/36">Cartão e dados de pagamento ficam na Stripe. O AnunciaAI não recebe os dados do cartão nem credenciais bancárias do Pix.</p>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-white/[0.08] pt-5 text-xs leading-5 text-white/34 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Cobrança Pro gerenciada pela Stripe. {pixReady ? "O Pix libera 30 dias e não renova automaticamente." : "Pix permanece em ativação até a conta Stripe ser habilitada."}
              </p>
              <Link href="/conta/ferramentas" className="shrink-0 font-semibold text-brand-300 transition-colors hover:text-white">Voltar às ferramentas →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
