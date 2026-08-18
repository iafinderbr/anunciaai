"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";
import { authClient } from "@/lib/auth-client";

export function GeneratorAccessGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="surface-premium overflow-hidden rounded-2xl" role="status" aria-live="polite">
        <div className="border-b border-line bg-canvas/65 px-5 py-5 sm:px-7 sm:py-6">
          <div className="h-3 w-28 animate-pulse rounded-full bg-line" />
          <div className="mt-3 h-7 w-64 max-w-full animate-pulse rounded-lg bg-line" />
        </div>
        <div className="grid gap-4 px-5 py-6 sm:px-7 lg:grid-cols-[1fr_220px]">
          <div className="space-y-3">
            <div className="h-12 animate-pulse rounded-xl bg-canvas" />
            <div className="h-12 animate-pulse rounded-xl bg-canvas" />
          </div>
          <div className="h-27 animate-pulse rounded-xl bg-canvas" />
        </div>
      </div>
    );
  }

  if (!session) {
    const callbackURL = pathname === "/" ? "/#ferramenta" : pathname;

    return (
      <div className="surface-premium overflow-hidden rounded-[1.4rem]">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_250px]">
          <div className="p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-brand-200 bg-brand-50 text-brand-700" aria-hidden="true">
                <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="4.5" y="8.5" width="11" height="8" rx="2" />
                  <path d="M7 8.5V6.7a3 3 0 0 1 6 0v1.8" strokeLinecap="round" />
                </svg>
              </span>
              <div className="max-w-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-600">Acesso ao plano Grátis</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">Entre uma vez para liberar o gerador</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  O login com Google identifica sua conta e libera as ferramentas gratuitas. Sem formulário longo, senha nova ou cartão de crédito.
                </p>
              </div>
            </div>

            <div className="mt-6 max-w-md">
              <GoogleSignInButton callbackURL={callbackURL} />
            </div>

            <p className="mt-3 text-xs leading-5 text-muted">
              Entrar não inicia assinatura nem cobrança. O AnunciaAI não recebe sua senha do Google.
            </p>
          </div>

          <aside className="border-t border-line bg-[#111318] p-5 text-white sm:p-6 lg:border-l lg:border-t-0" aria-label="O que o login libera">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-200">Incluído no Grátis</p>
            <div className="mt-4 space-y-3.5 text-xs leading-5 text-white/65">
              <p className="flex items-start gap-2.5"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />10 geradores grátis</p>
              <p className="flex items-start gap-2.5"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />Histórico salvo por você</p>
              <p className="flex items-start gap-2.5"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />Até 20 produtos salvos</p>
              <p className="flex items-start gap-2.5"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />Sem cartão de crédito</p>
            </div>
            <div className="mt-5 border-t border-white/10 pt-4">
              <p className="text-[11px] leading-5 text-white/42">Seus dados de produto só entram no histórico ou na biblioteca quando você usa os botões de salvar.</p>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
