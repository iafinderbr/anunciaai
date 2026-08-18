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
  const proSourceLabel = session.user.subscriptionProvider === "stripe-pix"
    ? "Pix · acesso por 30 dias"
    : "assinatura ativa";

  const metrics = [
    {
      href: "/conta/historico",
      eyebrow: "Resultados",
      value: String(savedCount),
      label: "salvos no histórico",
    },
    {
      href: "/conta/produtos",
      eyebrow: "Produtos",
      value: String(productsCount),
      label: "salvos na biblioteca",
    },
    {
      href: "/conta/plano",
      eyebrow: "Plano",
      value: planNames[currentPlan],
      label: currentPlan === "free" ? "R$ 0 por mês" : proSourceLabel,
    },
  ] as const;

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="relative min-h-[72vh] overflow-hidden bg-[#0d0e11] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(52%_90%_at_50%_0%,rgba(241,102,42,0.04),transparent_74%)]" />

        <section className="container-page relative py-7 sm:py-9 lg:py-10">
          <div className="mx-auto max-w-6xl">
            <header className="flex flex-col gap-5 border-b border-white/[0.09] pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300">Conta</p>
                <h1 className="mt-2 truncate text-2xl font-semibold tracking-[-0.045em] text-white sm:text-[1.7rem]">{session.user.name}</h1>
                <p className="mt-1 truncate text-sm text-white/34">{session.user.email}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:justify-end">
                <Link href="/conta/plano" className="inline-flex items-center gap-2 text-xs font-semibold text-white/52 transition-colors hover:text-white">
                  <span className="size-1.5 bg-emerald-400" aria-hidden="true" />
                  Plano {planNames[currentPlan]}
                </Link>
                <div className="[&_button]:rounded-none [&_button]:border-white/[0.10] [&_button]:bg-transparent [&_button]:px-3.5 [&_button]:py-2.5 [&_button]:text-xs [&_button]:text-white/58 hover:[&_button]:text-white">
                  <SignOutButton />
                </div>
              </div>
            </header>

            <div className="mt-3">
              <AccountNav active="overview" />
            </div>

            <section aria-labelledby="resumo-conta" className="mt-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 id="resumo-conta" className="text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">Visão geral</h2>
                  <p className="mt-1.5 text-xs leading-5 text-white/34">Seus salvos e o acesso atual, sem informação sobrando.</p>
                </div>
                <Link href="/#ferramenta" className="hidden text-sm font-semibold text-brand-300 transition-colors hover:text-white sm:inline-flex">Criar anúncio →</Link>
              </div>

              <div className="mt-4 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
                {metrics.map((metric) => (
                  <Link
                    key={metric.eyebrow}
                    href={metric.href}
                    className="group flex min-h-32 flex-col bg-[#121316] p-5 transition-colors hover:bg-[#17181c]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/28">{metric.eyebrow}</p>
                      <span aria-hidden="true" className="text-sm text-white/20 transition-colors group-hover:text-brand-300">→</span>
                    </div>
                    <p className="mt-auto pt-6 text-3xl font-semibold tracking-[-0.05em] text-white">{metric.value}</p>
                    <p className="mt-1 text-xs leading-5 text-white/34">{metric.label}</p>
                  </Link>
                ))}
              </div>
            </section>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10">
              <section aria-labelledby="recentes-titulo" className="border-t border-white/[0.09] pt-5">
                <div className="flex items-center justify-between gap-4">
                  <h2 id="recentes-titulo" className="text-base font-semibold tracking-[-0.03em] text-white">Recentes</h2>
                  {savedCount > 0 ? (
                    <Link href="/conta/historico" className="shrink-0 text-xs font-semibold text-brand-300 transition-colors hover:text-white">Ver histórico →</Link>
                  ) : null}
                </div>

                {recentItems.length > 0 ? (
                  <div className="mt-3 divide-y divide-white/[0.08] border-b border-white/[0.08]">
                    {recentItems.map((item) => (
                      <Link
                        key={item.id}
                        href="/conta/historico"
                        className="group grid gap-2 py-4 transition-colors sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.07em] text-brand-300">{formatChannel(item.channel)}</span>
                            <span className="text-[11px] text-white/25">{new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short" }).format(item.createdAt)}</span>
                          </div>
                          <p className="mt-1.5 truncate text-sm font-semibold text-white transition-colors group-hover:text-brand-300">{item.productName}</p>
                          <p className="mt-1 truncate text-xs text-white/32">{item.title}</p>
                        </div>
                        <span aria-hidden="true" className="hidden text-sm text-white/22 transition-colors group-hover:text-brand-300 sm:block">→</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="mt-3 flex flex-col gap-4 border-y border-white/[0.08] py-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">Nada salvo ainda.</p>
                      <p className="mt-1 text-xs leading-5 text-white/32">Quando você salvar um resultado, ele aparece aqui.</p>
                    </div>
                    <Link href="/#ferramenta" className="shrink-0 text-xs font-semibold text-brand-300 transition-colors hover:text-white">Criar primeiro anúncio →</Link>
                  </div>
                )}
              </section>

              <aside className="border-t border-white/[0.09] pt-5">
                <h2 className="text-base font-semibold tracking-[-0.03em] text-white">Atalhos</h2>
                <div className="mt-3 grid divide-y divide-white/[0.08] border-y border-white/[0.08]">
                  <Link href="/#ferramenta" className="flex items-center justify-between py-3 text-sm font-semibold text-white transition-colors hover:text-brand-300">Criar anúncio <span aria-hidden="true">→</span></Link>
                  <Link href="/ferramentas" className="flex items-center justify-between py-3 text-sm font-semibold text-white/55 transition-colors hover:text-white">Ferramentas <span aria-hidden="true">→</span></Link>
                  <Link href="/guias" className="flex items-center justify-between py-3 text-sm font-semibold text-white/55 transition-colors hover:text-white">Guias <span aria-hidden="true">→</span></Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
