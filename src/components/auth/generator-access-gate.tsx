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
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card" role="status" aria-live="polite">
        <div className="border-b border-line bg-canvas/60 px-5 py-5 sm:px-7">
          <div className="h-3 w-24 animate-pulse rounded-full bg-line" />
          <div className="mt-3 h-6 w-56 animate-pulse rounded-lg bg-line" />
        </div>
        <div className="space-y-3 px-5 py-6 sm:px-7">
          <div className="h-11 animate-pulse rounded-xl bg-canvas" />
          <div className="h-11 animate-pulse rounded-xl bg-canvas" />
        </div>
      </div>
    );
  }

  if (!session) {
    const callbackURL = pathname === "/" ? "/#ferramenta" : pathname;

    return (
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
        <div className="border-b border-line bg-canvas/55 px-5 py-5 sm:px-7 sm:py-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-600">Acesso grátis</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">Entre para usar o AnunciaAI</h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
            O plano Grátis continua sem cobrança. O login com Google só identifica sua conta e libera todos os geradores, histórico e produtos salvos.
          </p>
        </div>

        <div className="px-5 py-6 sm:px-7">
          <div className="max-w-md">
            <GoogleSignInButton callbackURL={callbackURL} />
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4 text-xs font-medium text-muted">
            <span>10 geradores grátis</span>
            <span>Sem cartão</span>
            <span>Login em poucos segundos</span>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
