import type { Metadata } from "next";
import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AccountNav } from "@/components/account/account-nav";
import { AccountShellHeader } from "@/components/account/account-shell-header";
import { SavedProductsList } from "@/components/account/saved-products-list";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { db } from "@/db";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { savedProduct } from "@/db/schema";
import { auth } from "@/lib/auth";
import { effectivePlan } from "@/lib/plans";
import { SITE_URL } from "@/lib/site";

const PATH = "/conta/produtos";

export const metadata: Metadata = {
  title: "Produtos salvos",
  description: "Biblioteca privada de produtos salvos na conta AnunciaAI para reutilização nos geradores.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

export default async function SavedProductsPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/entrar");

  await ensureDatabaseSchema();
  const rows = await db
    .select({
      id: savedProduct.id,
      productName: savedProduct.productName,
      category: savedProduct.category,
      price: savedProduct.price,
      audience: savedProduct.audience,
      features: savedProduct.features,
      channel: savedProduct.channel,
      tone: savedProduct.tone,
      createdAt: savedProduct.createdAt,
      updatedAt: savedProduct.updatedAt,
    })
    .from(savedProduct)
    .where(eq(savedProduct.userId, session.user.id))
    .orderBy(desc(savedProduct.updatedAt))
    .limit(20);

  const items = rows.map((row) => ({
    ...row,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  }));
  const currentPlan = effectivePlan(session.user.plan, session.user.subscriptionStatus, session.user.proAccessUntil);

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="min-h-[70vh] bg-[#0d0e11] text-white">
        <section className="container-page py-7 sm:py-9 lg:py-10">
          <div className="mx-auto max-w-6xl">
            <AccountShellHeader name={session.user.name} email={session.user.email} plan={currentPlan} />
            <div className="mt-3"><AccountNav active="products" /></div>

            <div className="mt-7 flex flex-col gap-5 border-b border-white/[0.09] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">Produtos</h1>
                <p className="mt-1.5 text-xs leading-5 text-white/34">Dados que você quer reutilizar nos próximos anúncios.</p>
              </div>
              <div className="flex shrink-0 items-center gap-4 text-xs font-semibold">
                <Link href="/conta/historico" className="text-white/46 transition-colors hover:text-white">Resultados</Link>
                <span className="text-white/30">{items.length} de 20 salvos</span>
              </div>
            </div>

            <div className="mt-5">
              <SavedProductsList initialItems={items} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
