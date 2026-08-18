"use client";

import { useState } from "react";

export function ProBillingActions({
  active,
  hasStripeSubscription,
  billingReady,
  pixReady,
  pixAccessUntil,
}: {
  active: boolean;
  hasStripeSubscription: boolean;
  billingReady: boolean;
  pixReady: boolean;
  pixAccessUntil: string | null;
}) {
  const [pending, setPending] = useState<"checkout" | "pix" | "portal" | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function openStripe(kind: "checkout" | "pix" | "portal") {
    if (pending) return;
    if (kind === "checkout" && !billingReady) return;
    if (kind === "pix" && !pixReady) return;

    setPending(kind);
    setError(null);

    try {
      const endpoint = kind === "checkout"
        ? "/api/stripe/checkout"
        : kind === "pix"
          ? "/api/stripe/pix"
          : "/api/stripe/portal";
      const response = await fetch(endpoint, { method: "POST" });
      const payload = (await response.json()) as { url?: string; error?: string };

      if (response.ok && payload.url) {
        window.location.assign(payload.url);
        return;
      }

      if (payload.error === "billing_not_configured" || payload.error === "pix_not_configured") {
        setError("A cobrança ainda não está configurada neste ambiente.");
      } else if (payload.error === "already_active") {
        window.location.reload();
      } else if (payload.error === "manage_existing_subscription") {
        setError("Sua assinatura já existe. Use o gerenciamento de cobrança.");
      } else if (response.status === 401) {
        setError("Sua sessão expirou. Entre novamente.");
      } else if (kind === "pix") {
        setError("Não foi possível abrir o Pix agora. Confira a disponibilidade do método na Stripe e tente novamente.");
      } else {
        setError("Não foi possível abrir a Stripe agora. Tente novamente em instantes.");
      }
    } catch {
      setError("Não foi possível conectar à Stripe agora.");
    } finally {
      setPending(null);
    }
  }

  if (hasStripeSubscription) {
    return (
      <div>
        <button
          type="button"
          onClick={() => openStripe("portal")}
          disabled={Boolean(pending)}
          className="inline-flex min-h-12 w-full items-center justify-center bg-white px-5 text-sm font-semibold text-[#111216] transition-colors hover:bg-brand-500 hover:text-white disabled:cursor-wait disabled:opacity-60"
        >
          {pending === "portal" ? "Abrindo cobrança..." : active ? "Gerenciar assinatura" : "Resolver cobrança"}
        </button>
        {error ? <p role="alert" className="mt-3 text-xs font-medium leading-5 text-rose-300">{error}</p> : null}
      </div>
    );
  }

  if (active && pixAccessUntil) {
    const expiresAt = new Date(pixAccessUntil);
    const expiryLabel = Number.isFinite(expiresAt.getTime())
      ? new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" }).format(expiresAt)
      : null;

    return (
      <div className="border border-emerald-400/20 bg-emerald-400/[0.055] px-4 py-4">
        <p className="text-sm font-semibold text-emerald-200">Pro ativo via Pix</p>
        <p className="mt-1 text-xs leading-5 text-white/44">
          {expiryLabel ? `Acesso disponível até ${expiryLabel}.` : "Acesso por período vigente."} Não há renovação automática.
        </p>
      </div>
    );
  }

  if (!billingReady && !pixReady) {
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
      <div className="grid gap-2">
        <button
          type="button"
          onClick={() => openStripe("checkout")}
          disabled={Boolean(pending) || !billingReady}
          className="inline-flex min-h-12 w-full items-center justify-between bg-brand-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/38"
        >
          <span>{pending === "checkout" ? "Abrindo checkout..." : "Assinar com cartão"}</span>
          <span className="text-xs font-medium text-white/72">R$ 19,90/mês</span>
        </button>

        <button
          type="button"
          onClick={() => openStripe("pix")}
          disabled={Boolean(pending) || !pixReady}
          className="inline-flex min-h-12 w-full items-center justify-between border border-white/14 bg-white/[0.035] px-5 text-sm font-semibold text-white transition-colors hover:border-brand-300/50 hover:bg-white/[0.065] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span>{pending === "pix" ? "Abrindo Pix..." : "Pagar com Pix"}</span>
          <span className="text-xs font-medium text-white/50">R$ 19,90 · 30 dias</span>
        </button>
      </div>

      <p className="mt-3 text-[11px] leading-5 text-white/34">Cartão renova mensalmente. Pix é pagamento único por 30 dias e precisa ser renovado manualmente.</p>
      {error ? <p role="alert" className="mt-3 text-xs font-medium leading-5 text-rose-300">{error}</p> : null}
    </div>
  );
}
