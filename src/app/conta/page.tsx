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
      eyebrow: "Plano atual",
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
      <main className="relative min-h-[72vh] overflow-hidden bg-canvas">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(52%_90%_at_50%_0%,rgba(255,92,26,0.08),transparent_72%)]" />

        <section className="container-page relative py-8 sm:py-10 lg:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="surface-premium overflow-hidden rounded-[1.55rem]">
              <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:p-7">
                <div className="flex min-w-0 items-center gap-4">
                  <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-lg font-semibold text-white shadow-card">
                    {initial}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-600">Workspace da conta</p>
                    <h1 className="mt-1.5 truncate text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">Olá, {session.user.name}</h1>
                    <p className="mt-1 truncate text-sm text-muted">{session.user.email}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Plano {planNames[currentPlan]}
                  </span>
                  <SignOutButton />
                </div>
              </div>
              <div className="border-t border-line bg-canvas/55 px-5 py-3.5 text-xs leading-5 text-muted sm:px-6 lg:px-7">
                Sua conta mantém histórico e biblioteca separados da geração comum. O que você não salvar continua fora dessas áreas pessoais.
              </div>
            </div>

            <div className="mt-4">
              <AccountNav active="overview" />
            </div>

            <section aria-labelledby="resumo-conta" className="mt-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-600">Visão geral</p>
                  <h2 id="resumo-conta" className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">Seu workspace em números</h2>
                </div>
                <Link href="/#ferramenta" className="hidden text-sm font-semibold text-brand-700 hover:text-brand-800 sm:inline-flex">Criar anúncio →</Link>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                  <Link
                    key={metric.eyebrow}
                    href={metric.href}
                    className="surface-premium group flex min-h-40 flex-col rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-brand-200"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.11em] text-muted">{metric.eyebrow}</p>
                      <span aria-hidden="true" className="text-sm text-line-strong transition-colors group-hover:text-brand-600">→</span>
                    </div>
                    <p className="mt-5 text-3xl font-semibold tracking-tight text-ink">{metric.value}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{metric.label}</p>
                    <p className="mt-auto pt-5 text-xs font-semibold text-brand-700">{metric.action}</p>
                  </Link>
                ))}
              </div>
            </section>

            <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
              <section aria-labelledby="recentes-titulo" className="surface-premium rounded-[1.4rem] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-600">Atividade</p>
                    <h2 id="recentes-titulo" className="mt-2 text-xl font-semibold tracking-tight text-ink">Salvos recentemente</h2>
                    <p className="mt-1 text-xs leading-5 text-muted">Os últimos resultados que você escolheu guardar.</p>
                  </div>
                  {savedCount > 0 ? (
                    <Link href="/conta/historico" className="shrink-0 text-sm font-semibold text-brand-700 hover:text-brand-800">Ver todos →</Link>
                  ) : null}
                </div>

                {recentItems.length > 0 ? (
                  <div className="mt-5 overflow-hidden rounded-2xl border border-line bg-white">
                    {recentItems.map((item, index) => (
                      <Link
                        key={item.id}
                        href="/conta/historico"
                        className={`group grid gap-3 px-4 py-4 transition-colors hover:bg-canvas sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center ${index < recentItems.length - 1 ? "border-b border-line" : ""}`}
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-brand-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-brand-700">{formatChannel(item.channel)}</span>
                            <span className="text-[11px] text-muted">{new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short" }).format(item.createdAt)}</span>
                          </div>
                          <p className="mt-2 truncate text-sm font-semibold text-ink group-hover:text-brand-700">{item.productName}</p>
                          <p className="mt-1 truncate text-xs text-muted">{item.title}</p>
                        </div>
                        <span aria-hidden="true" className="hidden size-8 place-items-center rounded-full border border-line bg-white text-sm text-muted transition-colors group-hover:border-brand-200 group-hover:text-brand-600 sm:grid">→</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 rounded-2xl border border-dashed border-line-strong bg-canvas/70 px-5 py-9 text-center">
                    <span aria-hidden="true" className="mx-auto grid size-10 place-items-center rounded-xl border border-line bg-white text-sm font-semibold text-brand-600">A</span>
                    <p className="mt-4 text-sm font-semibold text-ink">Seu histórico ainda está vazio.</p>
                    <p className="mx-auto mt-1 max-w-md text-xs leading-5 text-muted">Gere um anúncio e clique em “Salvar no histórico” quando quiser guardar o resultado na sua conta.</p>
                    <Link href="/#ferramenta" className="interactive-lift mt-4 inline-flex rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">Criar anúncio</Link>
                  </div>
                )}
              </section>

              <aside className="space-y-4">
                <div className="overflow-hidden rounded-[1.4rem] border border-ink bg-[#111318] p-5 text-white shadow-lift">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-200">Ações rápidas</p>
                    <span className="size-2 rounded-full bg-brand-500" aria-hidden="true" />
                  </div>
                  <h2 className="mt-3 text-lg font-semibold tracking-tight text-white">Continue de onde precisar.</h2>
                  <p className="mt-2 text-xs leading-5 text-white/48">Atalhos para as áreas mais usadas do workspace.</p>
                  <div className="mt-5 grid gap-2">
                    <Link href="/#ferramenta" className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-500 hover:text-white">Criar anúncio <span aria-hidden="true">→</span></Link>
                    <Link href="/conta/produtos" className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-white/78 transition-colors hover:bg-white/[0.08]">Produtos salvos <span aria-hidden="true">→</span></Link>
                    <Link href="/ferramentas" className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-white/78 transition-colors hover:bg-white/[0.08]">Escolher gerador <span aria-hidden="true">→</span></Link>
                    <Link href="/guias" className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-white/78 transition-colors hover:bg-white/[0.08]">Abrir guias <span aria-hidden="true">→</span></Link>
                  </div>
                </div>

                <Link href="/conta/plano" className="surface-premium block rounded-[1.4rem] p-5 transition-all hover:-translate-y-0.5 hover:border-brand-200">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-ink">Seu modo</p>
                    <span className="rounded-full border border-brand-200 bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-700">{planNames[currentPlan]}</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted">O Grátis continua em R$ 0. O Pro pode ser contratado por R$ 19,90/mês no cartão ou por 30 dias via Pix.</p>
                  <p className="mt-4 text-xs font-semibold text-brand-700">Ver outros modos →</p>
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
