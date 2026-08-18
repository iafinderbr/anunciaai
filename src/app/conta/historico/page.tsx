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
      <main className="min-h-[70vh] bg-[#0d0e11]">
        <section className="container-page py-8 sm:py-10 lg:py-12">
          <div className="mx-auto max-w-6xl">
            <AccountNav active="history" />

            <div className="mt-7 flex flex-col gap-5 border-b border-white/[0.09] pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl border-l-2 border-brand-500 pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300">Histórico</p>
                <h1 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">Seus resultados salvos</h1>
                <p className="mt-2 text-sm leading-6 text-white/42">
                  Só aparece aqui o que você escolheu salvar manualmente. Gerar um anúncio não adiciona conteúdo ao histórico automaticamente.
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <Link
                  href="/ferramentas"
                  className="border border-white/[0.11] bg-transparent px-4 py-2.5 text-sm font-semibold text-white/62 transition-colors hover:border-brand-400/40 hover:text-white"
                >
                  Ferramentas
                </Link>
                <Link
                  href="/#ferramenta"
                  className="bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  Criar novo
                </Link>
              </div>
            </div>

            <div className="mt-6">
              <SavedHistoryList initialItems={items} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
