"use client";

import Link from "next/link";

export default function GlobalErrorState({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-screen bg-[#0d0e11] text-white">
      <div className="container-page grid min-h-screen place-items-center py-16">
        <section className="w-full max-w-3xl border-y border-white/[0.09] py-12 sm:py-16">
          <div className="border-l-2 border-brand-500 pl-5 sm:pl-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">Falha temporária</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-[3rem]">
              Não foi possível concluir esta tela agora.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/42">
              Seus dados não foram enviados novamente automaticamente. Tente recarregar esta etapa ou volte para a página inicial.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 pl-[22px] sm:pl-[26px]">
            <button
              type="button"
              onClick={reset}
              className="bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Tentar novamente
            </button>
            <Link href="/" className="border border-white/[0.12] px-5 py-3 text-sm font-semibold text-white/68 transition-colors hover:border-brand-400/40 hover:text-white">
              Voltar ao início
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
