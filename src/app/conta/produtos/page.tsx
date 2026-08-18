import type { Metadata } from "next";
import { desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AccountNav } from "@/components/account/account-nav";
import { SavedProductsList } from "@/components/account/saved-products-list";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { db } from "@/db";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { savedProduct } from "@/db/schema";
import { auth } from "@/lib/auth";
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

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="min-h-[70vh] bg-[#0d0e11]">
        <section className="container-page py-8 sm:py-10 lg:py-12">
          <div className="mx-auto max-w-6xl">
            <AccountNav active="products" />

            <div className="mt-7 flex flex-col gap-5 border-b border-white/[0.09] pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl border-l-2 border-brand-500 pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300">Biblioteca da conta</p>
                <h1 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">Produtos salvos</h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/42">
                  Guarde apenas dados que pretende reutilizar. A biblioteca é privada e vinculada à sua conta.
                </p>
              </div>
              <span className="w-fit border-l border-white/[0.12] pl-4 text-xs font-semibold text-white/46">
                {items.length} de 20 salvos
              </span>
            </div>

            <div className="mt-6">
              <SavedProductsList initialItems={items} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
