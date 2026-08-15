import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/sections/pricing";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="ferramenta" className="container-page grid min-h-[62vh] place-items-center py-20 text-center">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Erro 404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Esta página não foi encontrada</h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            O endereço pode ter mudado ou não existir. Volte para a página inicial e escolha uma das ferramentas
            gratuitas do AnunciaAI.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600">
              Voltar para o início
            </Link>
            <Link
              href="/#ferramentas"
              className="rounded-xl border border-line-strong bg-white px-5 py-3 text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600"
            >
              Ver ferramentas
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
