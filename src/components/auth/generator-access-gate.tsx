"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";
import { authClient } from "@/lib/auth-client";

export function GeneratorAccessGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    function revealFromHash() {
      if (window.location.hash === "#ferramenta") setRevealed(true);
    }

    revealFromHash();
    window.addEventListener("hashchange", revealFromHash);
    return () => window.removeEventListener("hashchange", revealFromHash);
  }, []);

  if (!revealed) {
    return (
      <div data-generator-reveal className="border-y border-white/[0.09] bg-[#0d0e11] px-5 py-5 text-white sm:px-7 sm:py-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300">Ferramenta</p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">Gerador pronto para abrir.</h3>
            <p className="mt-2 text-sm leading-6 text-white/40">
              O formulário aparece somente quando você quiser criar, mantendo a página mais limpa e direta.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setRevealed(true);
              requestAnimationFrame(() => document.getElementById("ferramenta")?.scrollIntoView({ behavior: "smooth", block: "start" }));
            }}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0e11]"
          >
            Gerar anúncio <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="overflow-hidden border border-white/[0.10] bg-[#121316]" role="status" aria-live="polite">
        <div className="border-b border-white/[0.08] px-5 py-5 sm:px-7 sm:py-6">
          <div className="h-2.5 w-28 animate-pulse bg-white/[0.08]" />
          <div className="mt-4 h-7 w-64 max-w-full animate-pulse bg-white/[0.07]" />
        </div>
        <div className="grid gap-4 px-5 py-6 sm:px-7 lg:grid-cols-[1fr_220px]">
          <div className="space-y-3">
            <div className="h-12 animate-pulse bg-white/[0.06]" />
            <div className="h-12 animate-pulse bg-white/[0.06]" />
          </div>
          <div className="h-27 animate-pulse bg-white/[0.05]" />
        </div>
      </div>
    );
  }

  if (!session) {
    const callbackURL = pathname === "/" ? "/#ferramenta" : `${pathname}#ferramenta`;
    const allMethodsHref = `/entrar?voltar=${encodeURIComponent(callbackURL)}`;

    return (
      <div className="overflow-hidden border border-white/[0.10] bg-[#121316] text-white">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <span className="relative grid size-10 shrink-0 place-items-center border border-white/[0.12] bg-[#18191d] text-brand-300" aria-hidden="true">
                <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="4.5" y="8.5" width="11" height="8" rx="1" />
                  <path d="M7 8.5V6.7a3 3 0 0 1 6 0v1.8" strokeLinecap="round" />
                </svg>
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-500" />
              </span>
              <div className="max-w-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-300">Acesso ao modo Grátis</p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">Entre para usar este gerador.</h3>
                <p className="mt-2 text-sm leading-6 text-white/43">
                  Identifique sua conta uma vez e continue usando as ferramentas gratuitas. Sem formulário longo e sem cartão de crédito.
                </p>
              </div>
            </div>

            <div className="mt-6 max-w-md [&_button]:rounded-none">
              <GoogleSignInButton callbackURL={callbackURL} />
              <Link
                href={allMethodsHref}
                className="mt-3 flex min-h-11 w-full items-center justify-center border border-white/[0.12] bg-transparent px-4 py-3 text-sm font-semibold text-white/62 transition-colors hover:border-brand-400/40 hover:text-white"
              >
                Ver outras formas de entrar
              </Link>
            </div>

            <p className="mt-3 text-xs leading-5 text-white/32">
              Entrar não inicia assinatura nem cobrança. O AnunciaAI não recebe a senha da sua conta social.
            </p>
          </div>

          <aside className="border-t border-white/[0.08] bg-[#0a0b0d] p-5 text-white sm:p-6 lg:border-l lg:border-t-0" aria-label="O que o login libera">
            <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-300">Incluído no Grátis</p>
            <div className="mt-4 divide-y divide-white/[0.08] border-y border-white/[0.08] text-xs leading-5 text-white/54">
              <p className="flex items-start gap-3 py-3"><span className="mt-2 size-1.5 shrink-0 bg-brand-500" />10 geradores grátis</p>
              <p className="flex items-start gap-3 py-3"><span className="mt-2 size-1.5 shrink-0 bg-brand-500" />Histórico salvo por você</p>
              <p className="flex items-start gap-3 py-3"><span className="mt-2 size-1.5 shrink-0 bg-brand-500" />Até 20 produtos salvos</p>
              <p className="flex items-start gap-3 py-3"><span className="mt-2 size-1.5 shrink-0 bg-brand-500" />Sem cartão de crédito</p>
            </div>
            <p className="mt-4 text-[11px] leading-5 text-white/32">Dados de produto só entram na sua biblioteca quando você escolhe salvar.</p>
          </aside>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
