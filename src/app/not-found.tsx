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
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="min-h-[68vh] bg-[#0d0e11] text-white">
        <section className="container-page py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-5xl border-y border-white/[0.09] py-12 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
              <div>
                <p className="text-[5rem] font-semibold leading-none tracking-[-0.08em] text-white/12 sm:text-[7rem]">404</p>
                <div className="mt-5 h-[2px] w-12 bg-brand-500" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">Página não encontrada</p>
                <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[3.2rem]">
                  Este endereço não faz parte do workspace atual.
                </h1>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/42">
                  O link pode ter mudado ou sido digitado incorretamente. Volte para a página inicial ou abra a biblioteca de ferramentas.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/" className="bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                    Voltar ao início
                  </Link>
                  <Link href="/ferramentas" className="border border-white/[0.12] px-5 py-3 text-sm font-semibold text-white/68 transition-colors hover:border-brand-400/40 hover:text-white">
                    Ver ferramentas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
