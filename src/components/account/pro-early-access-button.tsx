"use client";

import { useState } from "react";

export function ProEarlyAccessButton({ active = false }: { active?: boolean }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function changePlan() {
    if (pending) return;
    setPending(true);
    setError(null);

    try {
      const response = await fetch("/api/account/plan", { method: active ? "DELETE" : "POST" });
      if (response.ok) {
        window.location.reload();
        return;
      }

      setError(response.status === 401 ? "Sua sessão expirou. Entre novamente." : "Não foi possível alterar o plano agora.");
    } catch {
      setError("Não foi possível alterar o plano agora.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={changePlan}
        disabled={pending}
        className={
          active
            ? "inline-flex min-h-11 items-center justify-center border border-line-strong bg-white px-5 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700 disabled:cursor-wait disabled:opacity-60"
            : "inline-flex min-h-11 items-center justify-center bg-brand-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:cursor-wait disabled:opacity-60"
        }
      >
        {pending ? "Atualizando..." : active ? "Voltar ao Grátis" : "Ativar Pro em acesso antecipado"}
      </button>
      {error ? <p role="alert" className="mt-2 text-xs font-medium text-rose-700">{error}</p> : null}
    </div>
  );
}
