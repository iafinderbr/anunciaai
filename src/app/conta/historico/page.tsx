import type { Metadata } from "next";
import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AccountNav } from "@/components/account/account-nav";
import { SavedHistoryList } from "@/components/account/saved-history-list";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { db } from "@/db";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { savedGeneration } from "@/db/schema";
import { auth } from "@/lib/auth";
import { SITE_URL } from "@/lib/site";

const PATH = "/conta/historico";

export const metadata: Metadata = {
  title: "Histórico salvo",
  description: "Resultados que você escolheu salvar na sua conta AnunciaAI.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

export default async function AccountHistoryPage() {
  const currentHeaders = await headers();
  const session = await auth.api.getSession({ headers: currentHeaders });
  if (!session) redirect("/entrar");

  await ensureDatabaseSchema();

  const rows = await db
    .select({
      id: savedGeneration.id,
      productName: savedGeneration.productName,
      channel: savedGeneration.channel,
      title: savedGeneration.title,
      content: savedGeneration.content,
      createdAt: savedGeneration.createdAt,
    })
    .from(savedGeneration)
    .where(eq(savedGeneration.userId, session.user.id))
    .orderBy(desc(savedGeneration.createdAt))
    .limit(100);

  const items = rows.map((row) => ({
    ...row,
    createdAt: row.createdAt.toISOString(),
  }));

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="min-h-[70vh] bg-canvas">
        <section className="container-page py-8 sm:py-10 lg:py-12">
          <div className="mx-auto max-w-6xl">
            <AccountNav active="history" />

            <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-line bg-white p-5 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Histórico</p>
                <h1 className="mt-1 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Seus resultados salvos</h1>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Só aparece aqui o que você escolheu salvar manualmente. Gerar um anúncio não adiciona conteúdo ao histórico automaticamente.
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <Link
                  href="/ferramentas"
                  className="rounded-xl border border-line-strong bg-canvas px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand-300 hover:text-brand-700"
                >
                  Ferramentas
                </Link>
                <Link
                  href="/#ferramenta"
                  className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
                >
                  Criar novo
                </Link>
              </div>
            </div>

            <div className="mt-5">
              <SavedHistoryList initialItems={items} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
