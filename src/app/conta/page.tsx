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
import { savedGeneration } from "@/db/schema";
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

  const [historyCount] = await db
    .select({ total: sql<number>`count(*)::int` })
    .from(savedGeneration)
    .where(eq(savedGeneration.userId, session.user.id));

  const recentItems = await db
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
    .limit(3);

  const savedCount = historyCount?.total ?? 0;
  const currentPlan = effectivePlan(session.user.plan, session.user.subscriptionStatus);
  const initial = session.user.name.trim().charAt(0).toUpperCase() || "A";

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="min-h-[70vh] bg-canvas">
        <section className="container-page py-8 sm:py-10 lg:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-5 rounded-3xl border border-line bg-white p-5 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex min-w-0 items-center gap-4">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-lg font-semibold text-white"
                >
                  {initial}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Minha conta</p>
                  <h1 className="mt-1 truncate text-2xl font-semibold tracking-tight text-ink">
                    Olá, {session.user.name}
                  </h1>
                  <p className="mt-1 truncate text-sm text-muted">{session.user.email}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
                  Plano {planNames[currentPlan]}
                </span>
                <SignOutButton />
              </div>
            </div>

            <div className="mt-4">
              <AccountNav active="overview" />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Link
                href="/conta/historico"
                className="group rounded-2xl border border-brand-200 bg-brand-50/55 p-5 shadow-card transition-colors hover:border-brand-400"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">Histórico</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <span className="text-3xl font-semibold tracking-tight text-ink">{savedCount}</span>
                  <span className="text-sm font-semibold text-brand-700">Abrir →</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-muted">Resultados salvos manualmente na sua conta.</p>
              </Link>

              <Link
                href="/conta/plano"
                className="group rounded-2xl border border-line bg-white p-5 shadow-card transition-colors hover:border-brand-300"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Plano atual</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <span className="text-2xl font-semibold tracking-tight text-ink">{planNames[currentPlan]}</span>
                  <span className="text-sm font-semibold text-brand-700">Detalhes →</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-muted">Sem cobrança ativa enquanto Pro e Premium estão em preparação.</p>
              </Link>

              <Link
                href="/ferramentas"
                className="group rounded-2xl border border-line bg-white p-5 shadow-card transition-colors hover:border-brand-300"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Ferramentas</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <span className="text-2xl font-semibold tracking-tight text-ink">10 geradores</span>
                  <span className="text-sm font-semibold text-brand-700">Ver todas →</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-muted">Acesse rapidamente cada gerador do AnunciaAI.</p>
              </Link>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
              <section aria-labelledby="recentes-titulo" className="rounded-3xl border border-line bg-white p-5 shadow-card sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">Atividade</p>
                    <h2 id="recentes-titulo" className="mt-1 text-xl font-semibold tracking-tight text-ink">Salvos recentemente</h2>
                  </div>
                  {savedCount > 0 ? (
                    <Link href="/conta/historico" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
                      Ver histórico →
                    </Link>
                  ) : null}
                </div>

                {recentItems.length > 0 ? (
                  <div className="mt-5 divide-y divide-line overflow-hidden rounded-2xl border border-line">
                    {recentItems.map((item) => (
                      <Link
                        key={item.id}
                        href="/conta/historico"
                        className="group flex items-center justify-between gap-4 bg-white px-4 py-4 transition-colors hover:bg-canvas"
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-brand-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-brand-700">
                              {formatChannel(item.channel)}
                            </span>
                            <span className="text-[11px] text-muted">
                              {new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short" }).format(item.createdAt)}
                            </span>
                          </div>
                          <p className="mt-2 truncate text-sm font-semibold text-ink group-hover:text-brand-700">{item.productName}</p>
                          <p className="mt-1 truncate text-xs text-muted">{item.title}</p>
                        </div>
                        <span aria-hidden="true" className="shrink-0 text-brand-600">→</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 rounded-2xl border border-dashed border-line-strong bg-canvas px-5 py-8 text-center">
                    <p className="text-sm font-semibold text-ink">Seu histórico ainda está vazio.</p>
                    <p className="mt-1 text-xs leading-5 text-muted">Gere um anúncio e clique em “Salvar no histórico” quando quiser guardar o resultado.</p>
                    <Link href="/#ferramenta" className="mt-4 inline-flex rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">
                      Criar anúncio
                    </Link>
                  </div>
                )}
              </section>

              <aside className="space-y-4">
                <div className="rounded-3xl border border-line bg-white p-5 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">Ações rápidas</p>
                  <div className="mt-4 grid gap-2">
                    <Link href="/#ferramenta" className="flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white hover:bg-brand-600">
                      Criar anúncio <span aria-hidden="true">→</span>
                    </Link>
                    <Link href="/ferramentas" className="flex items-center justify-between rounded-xl border border-line-strong bg-canvas px-4 py-3 text-sm font-semibold text-ink hover:border-brand-300 hover:text-brand-700">
                      Escolher gerador <span aria-hidden="true">→</span>
                    </Link>
                    <Link href="/guias" className="flex items-center justify-between rounded-xl border border-line-strong bg-canvas px-4 py-3 text-sm font-semibold text-ink hover:border-brand-300 hover:text-brand-700">
                      Abrir guias <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl border border-line bg-white p-5 shadow-card">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-ink">Produtos salvos</p>
                    <span className="rounded-full border border-line-strong bg-canvas px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-muted">Em breve</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted">Vamos usar esta área para reutilizar dados de produtos sem precisar preencher tudo novamente.</p>
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
