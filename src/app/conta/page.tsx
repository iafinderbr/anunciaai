import type { Metadata } from "next";
import Link from "next/link";
import { desc, eq, sql } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AccountNav } from "@/components/account/account-nav";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { db } from "@/db";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { savedGeneration, savedProduct } from "@/db/schema";
import { auth } from "@/lib/auth";
import { effectivePlan } from "@/lib/plans";
import { SITE_URL } from "@/lib/site";

const PATH = "/conta";
const TITLE = "Minha conta";
const DESCRIPTION = "Área protegida da conta AnunciaAI para perfil, histórico, plano e recursos vinculados ao usuário.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

const planNames = {
  free: "Grátis",
  pro: "Pro",
  premium: "Premium",
} as const;

const channelNames: Record<string, string> = {
  "mercado-livre": "Mercado Livre",
  shopee: "Shopee",
  olx: "OLX",
  "facebook-marketplace": "Facebook Marketplace",
  instagram: "Instagram",
  "loja-virtual": "Loja virtual",
};

function formatChannel(channel: string) {
  return channelNames[channel] ?? channel.replaceAll("-", " ");
}

export default async function AccountPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/entrar");

  await ensureDatabaseSchema();

  const [[historyCount], [productCount], recentItems] = await Promise.all([
    db
      .select({ total: sql<number>`count(*)::int` })
      .from(savedGeneration)
      .where(eq(savedGeneration.userId, session.user.id)),
    db
      .select({ total: sql<number>`count(*)::int` })
      .from(savedProduct)
      .where(eq(savedProduct.userId, session.user.id)),
    db
      .select({
        id: savedGeneration.id,
        productName: savedGeneration.productName,
        channel: savedGeneration.channel,
        title: savedGeneration.title,
        createdAt: savedGeneration.createdAt,
      })
      .from(savedGeneration)
      .where(eq(savedGeneration.userId, session.user.id))
      .orderBy(desc(savedGeneration.createdAt))
      .limit(3),
  ]);

  const savedCount = historyCount?.total ?? 0;
  const productsCount = productCount?.total ?? 0;
  const currentPlan = effectivePlan(session.user.plan, session.user.subscriptionStatus, session.user.proAccessUntil);
  const initial = session.user.name.trim().charAt(0).toUpperCase() || "A";
  const proSourceLabel = session.user.subscriptionProvider === "stripe-pix"
    ? "Pix · acesso por 30 dias"
    : "assinatura ativa";

  const metrics = [
    {
      href: "/conta/historico",
      eyebrow: "Histórico",
      value: String(savedCount),
      label: "resultados salvos",
      action: "Abrir histórico",
    },
    {
      href: "/conta/produtos",
      eyebrow: "Biblioteca",
      value: String(productsCount),
      label: "produtos salvos",
      action: "Abrir produtos",
    },
    {
      href: "/conta/plano",
      eyebrow: "Modo atual",
      value: planNames[currentPlan],
      label: currentPlan === "free" ? "R$ 0 por mês" : proSourceLabel,
      action: "Ver modo",
    },
    {
      href: "/ferramentas",
      eyebrow: "Workspace",
      value: "10",
      label: "geradores disponíveis",
      action: "Ver ferramentas",
    },
  ] as const;

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="relative min-h-[72vh] overflow-hidden bg-[#0d0e11] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(52%_90%_at_50%_0%,rgba(241,102,42,0.055),transparent_74%)]" />

        <section className="container-page relative py-8 sm:py-10 lg:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="border border-white/[0.09] bg-[#121316]">
              <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:p-7">
                <div className="flex min-w-0 items-center gap-4">
                  <span aria-hidden="true" className="relative grid size-12 shrink-0 place-items-center border border-white/[0.12] bg-[#1a1b1f] text-lg font-semibold text-white">
                    {initial}
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-500" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300">Workspace da conta</p>
                    <h1 className="mt-1.5 truncate text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[1.75rem]">Olá, {session.user.name}</h1>
                    <p className="mt-1 truncate text-sm text-white/35">{session.user.email}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/54">
                    <span className="size-1.5 bg-emerald-400" />
                    Modo {planNames[currentPlan]}
                  </span>
                  <div className="[&_button]:rounded-none">
                    <SignOutButton />
                  </div>
                </div>
              </div>
              <div className="border-t border-white/[0.08] bg-[#0f1013] px-5 py-3.5 text-xs leading-5 text-white/32 sm:px-6 lg:px-7">
                Histórico e biblioteca só recebem o que você escolhe salvar. A geração comum continua separada da sua área pessoal.
              </div>
            </div>

            <div className="mt-4">
              <AccountNav active="overview" />
            </div>

            <section aria-labelledby="resumo-conta" className="mt-8">
              <div className="flex items-end justify-between gap-4">
                <div className="border-l-2 border-brand-500 pl-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-300">Visão geral</p>
                  <h2 id="resumo-conta" className="mt-2 text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">Seu workspace em números</h2>
                </div>
                <Link href="/#ferramenta" className="hidden text-sm font-semibold text-brand-300 transition-colors hover:text-white sm:inline-flex">Criar anúncio →</Link>
              </div>

              <div className="mt-5 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                  <Link
                    key={metric.eyebrow}
                    href={metric.href}
                    className="group flex min-h-40 flex-col bg-[#121316] p-5 transition-colors hover:bg-[#17181c]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/28">{metric.eyebrow}</p>
                      <span aria-hidden="true" className="text-sm text-white/22 transition-colors group-hover:text-brand-300">→</span>
                    </div>
                    <p className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-white">{metric.value}</p>
                    <p className="mt-1 text-xs leading-5 text-white/34">{metric.label}</p>
                    <p className="mt-auto pt-5 text-xs font-semibold text-brand-300">{metric.action}</p>
                  </Link>
                ))}
              </div>
            </section>

            <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
              <section aria-labelledby="recentes-titulo" className="border border-white/[0.08] bg-[#121316] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-300">Atividade</p>
                    <h2 id="recentes-titulo" className="mt-2 text-xl font-semibold tracking-[-0.035em] text-white">Salvos recentemente</h2>
                    <p className="mt-1 text-xs leading-5 text-white/34">Os últimos resultados que você escolheu guardar.</p>
                  </div>
                  {savedCount > 0 ? (
                    <Link href="/conta/historico" className="shrink-0 text-sm font-semibold text-brand-300 transition-colors hover:text-white">Ver todos →</Link>
                  ) : null}
                </div>

                {recentItems.length > 0 ? (
                  <div className="mt-1 divide-y divide-white/[0.08]">
                    {recentItems.map((item) => (
                      <Link
                        key={item.id}
                        href="/conta/historico"
                        className="group grid gap-3 py-4 transition-colors sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="border-l-2 border-brand-500 pl-2 text-[10px] font-semibold uppercase tracking-[0.07em] text-brand-300">{formatChannel(item.channel)}</span>
                            <span className="text-[11px] text-white/28">{new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short" }).format(item.createdAt)}</span>
                          </div>
                          <p className="mt-2 truncate text-sm font-semibold text-white transition-colors group-hover:text-brand-300">{item.productName}</p>
                          <p className="mt-1 truncate text-xs text-white/34">{item.title}</p>
                        </div>
                        <span aria-hidden="true" className="hidden text-sm text-white/25 transition-colors group-hover:text-brand-300 sm:block">→</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 border border-dashed border-white/[0.12] bg-[#0f1013] px-5 py-9 text-center">
                    <span aria-hidden="true" className="mx-auto grid size-10 place-items-center border border-white/[0.10] bg-[#18191d] text-sm font-semibold text-brand-300">A</span>
                    <p className="mt-4 text-sm font-semibold text-white">Seu histórico ainda está vazio.</p>
                    <p className="mx-auto mt-1 max-w-md text-xs leading-5 text-white/34">Gere um anúncio e clique em “Salvar no histórico” quando quiser guardar o resultado na sua conta.</p>
                    <Link href="/#ferramenta" className="mt-4 inline-flex bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600">Criar anúncio</Link>
                  </div>
                )}
              </section>

              <aside className="space-y-4">
                <div className="border border-white/[0.09] bg-[#0a0b0d] p-5 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-300">Ações rápidas</p>
                    <span className="size-1.5 bg-brand-500" aria-hidden="true" />
                  </div>
                  <h2 className="mt-3 text-lg font-semibold tracking-[-0.035em] text-white">Continue de onde precisar.</h2>
                  <p className="mt-2 text-xs leading-5 text-white/35">Atalhos para as áreas mais usadas do workspace.</p>
                  <div className="mt-5 grid divide-y divide-white/[0.08] border-y border-white/[0.08]">
                    <Link href="/#ferramenta" className="flex items-center justify-between py-3 text-sm font-semibold text-white transition-colors hover:text-brand-300">Criar anúncio <span aria-hidden="true">→</span></Link>
                    <Link href="/conta/produtos" className="flex items-center justify-between py-3 text-sm font-semibold text-white/62 transition-colors hover:text-white">Produtos salvos <span aria-hidden="true">→</span></Link>
                    <Link href="/ferramentas" className="flex items-center justify-between py-3 text-sm font-semibold text-white/62 transition-colors hover:text-white">Escolher gerador <span aria-hidden="true">→</span></Link>
                    <Link href="/guias" className="flex items-center justify-between py-3 text-sm font-semibold text-white/62 transition-colors hover:text-white">Abrir guias <span aria-hidden="true">→</span></Link>
                  </div>
                </div>

                <Link href="/conta/plano" className="block border border-white/[0.09] bg-[#15161a] p-5 transition-colors hover:border-brand-400/30">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">Seu modo</p>
                    <span className="text-xs font-bold text-brand-300">{planNames[currentPlan]}</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-white/34">O Grátis continua em R$ 0. O Pro custa R$ 19,90/mês no cartão; o Pix fica preparado para 30 dias quando a Stripe estiver habilitada.</p>
                  <p className="mt-4 text-xs font-semibold text-brand-300">Ver outros modos →</p>
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
