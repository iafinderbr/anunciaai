import type { Metadata } from "next";
import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
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
      <main className="bg-canvas">
        <section className="container-page py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-5xl">
            <nav aria-label="Trilha da conta" className="flex flex-wrap items-center gap-2 text-xs text-muted">
              <Link href="/conta" className="font-medium transition-colors hover:text-brand-700">
                Minha conta
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="font-semibold text-ink-soft">Histórico</span>
            </nav>

            <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Histórico salvo</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Seus resultados, quando você decidir guardar
                </h1>
                <p className="mt-3 text-sm leading-6 text-muted sm:text-[15px]">
                  Esta área mostra apenas anúncios que você salvou manualmente estando conectado. As gerações comuns continuam sem guardar o conteúdo do produto.
                </p>
              </div>
              <Link
                href="/conta"
                className="w-fit rounded-xl border border-line-strong bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-700"
              >
                Voltar para Minha conta
              </Link>
            </div>

            <div className="mt-8">
              <SavedHistoryList initialItems={items} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
