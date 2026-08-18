"use client";

import { useState } from "react";

export function ProBillingActions({
  active,
  hasStripeSubscription,
  billingReady,
}: {
  active: boolean;
  hasStripeSubscription: boolean;
  billingReady: boolean;
}) {
  const [pending, setPending] = useState<"checkout" | "portal" | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function openStripe(path: "/api/stripe/checkout" | "/api/stripe/portal", kind: "checkout" | "portal") {
    if (pending || !billingReady) return;
    setPending(kind);
    setError(null);

    try {
      const response = await fetch(path, { method: "POST" });
      const payload = (await response.json()) as { url?: string; error?: string };

      if (response.ok && payload.url) {
        window.location.assign(payload.url);
        return;
      }

      if (payload.error === "billing_not_configured") {
        setError("A cobrança ainda não está configurada neste ambiente.");
      } else if (payload.error === "already_active") {
        window.location.reload();
      } else if (payload.error === "manage_existing_subscription") {
        setError("Sua assinatura já existe. Use o botão de gerenciar cobrança.");
      } else if (response.status === 401) {
        setError("Sua sessão expirou. Entre novamente.");
      } else {
        setError("Não foi possível abrir a Stripe agora. Tente novamente em instantes.");
      }
    } catch {
      setError("Não foi possível conectar à Stripe agora.");
    } finally {
      setPending(null);
    }
  }

  const shouldManage = active || hasStripeSubscription;

  if (!billingReady) {
    return (
      <div>
        <button
          type="button"
          disabled
          className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center bg-white/10 px-5 text-sm font-semibold text-white/45"
        >
          Pagamento em configuração
        </button>
        <p className="mt-3 text-xs leading-5 text-white/36">O modo Pro só abre cobrança quando a integração segura com a Stripe estiver pronta neste ambiente.</p>
      </div>
    );
  }

  return (
    <div>
      {shouldManage ? (
        <button
          type="button"
          onClick={() => openStripe("/api/stripe/portal", "portal")}
          disabled={Boolean(pending)}
          className="inline-flex min-h-12 w-full items-center justify-center bg-white px-5 text-sm font-semibold text-[#111216] transition-colors hover:bg-brand-500 hover:text-white disabled:cursor-wait disabled:opacity-60"
        >
          {pending === "portal" ? "Abrindo cobrança..." : active ? "Gerenciar assinatura" : "Resolver cobrança"}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => openStripe("/api/stripe/checkout", "checkout")}
          disabled={Boolean(pending)}
          className="inline-flex min-h-12 w-full items-center justify-center bg-brand-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:cursor-wait disabled:opacity-60"
        >
          {pending === "checkout" ? "Abrindo checkout..." : "Assinar Pro — R$ 19,90/mês"}
        </button>
      )}
      {error ? <p role="alert" className="mt-3 text-xs font-medium leading-5 text-rose-300">{error}</p> : null}
    </div>
  );
}
