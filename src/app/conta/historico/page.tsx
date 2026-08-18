import type { Metadata } from "next";
import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AccountNav } from "@/components/account/account-nav";
import { AccountShellHeader } from "@/components/account/account-shell-header";
import { SavedHistoryList } from "@/components/account/saved-history-list";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { db } from "@/db";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { savedGeneration } from "@/db/schema";
import { auth } from "@/lib/auth";
import { effectivePlan } from "@/lib/plans";
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
  const currentPlan = effectivePlan(session.user.plan, session.user.subscriptionStatus, session.user.proAccessUntil);

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="min-h-[70vh] bg-[#0d0e11] text-white">
        <section className="container-page py-7 sm:py-9 lg:py-10">
          <div className="mx-auto max-w-6xl">
            <AccountShellHeader name={session.user.name} email={session.user.email} plan={currentPlan} />
            <div className="mt-3"><AccountNav active="history" /></div>

            <div className="mt-7 flex flex-col gap-5 border-b border-white/[0.09] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h1 className="text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">Biblioteca</h1>
                <p className="mt-1.5 text-xs leading-5 text-white/34">Resultados que você decidiu guardar.</p>
              </div>
              <div className="flex shrink-0 gap-4 text-xs font-semibold">
                <Link href="/conta/produtos" className="text-white/46 transition-colors hover:text-white">Produtos</Link>
                <Link href="/#ferramenta" className="text-brand-300 transition-colors hover:text-white">Criar novo →</Link>
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
