"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import type { Channel, GeneratorInput, Tone } from "@/lib/types";

interface SavedProductOption {
  id: string;
  productName: string;
  category: string;
  price: string;
  audience: string;
  features: string;
  channel: Channel;
  tone: Tone;
}

interface ProductsPayload {
  ok?: boolean;
  items?: SavedProductOption[];
  item?: SavedProductOption;
  error?: string;
}

export function SavedProductControls({
  input,
  lockedChannel,
  onApply,
}: {
  input: GeneratorInput;
  lockedChannel?: Channel;
  onApply: (input: GeneratorInput) => void;
}) {
  const { data: session, isPending } = authClient.useSession();
  const [items, setItems] = useState<SavedProductOption[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const loadProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/account/products", { cache: "no-store" });
      const payload = (await response.json().catch(() => null)) as ProductsPayload | null;
      if (response.ok && payload?.ok && Array.isArray(payload.items)) setItems(payload.items);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!session) return;

    let cancelled = false;
    void fetch("/api/account/products", { cache: "no-store" })
      .then(async (response) => {
        const payload = (await response.json().catch(() => null)) as ProductsPayload | null;
        if (!cancelled && response.ok && payload?.ok && Array.isArray(payload.items)) {
          setItems(payload.items);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [session]);

  function applySelected() {
    const product = items.find((item) => item.id === selectedId);
    if (!product) return;
    onApply({
      productName: product.productName,
      category: product.category,
      price: product.price,
      audience: product.audience,
      features: product.features,
      channel: lockedChannel ?? product.channel,
      tone: product.tone,
    });
    setMessage(`“${product.productName}” carregado no formulário.`);
  }

  async function saveCurrent() {
    setMessage(null);
    if (input.productName.trim().length < 2 || input.category.trim().length < 2 || input.features.trim().length < 10) {
      setMessage("Preencha nome, categoria e características antes de salvar o produto.");
      return;
    }

    setSaving(true);
    try {
      const response = await fetch("/api/account/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      const payload = (await response.json().catch(() => null)) as ProductsPayload | null;
      if (response.ok && payload?.ok) {
        setMessage("Produto salvo na sua conta.");
        await loadProducts();
        return;
      }
      if (payload?.error === "product_limit") {
        setMessage("Sua biblioteca chegou ao limite atual de 20 produtos.");
        return;
      }
      setMessage("Não foi possível salvar este produto agora.");
    } catch {
      setMessage("Não foi possível salvar este produto agora.");
    } finally {
      setSaving(false);
    }
  }

  if (isPending) return null;

  if (!session) {
    return (
      <div className="mt-5 flex flex-col gap-3 rounded-xl border border-line bg-canvas/55 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-lg border border-line-strong bg-white text-muted">
            <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M4.5 6.5h11v9h-11z" strokeLinejoin="round" />
              <path d="M7 6.5V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 13 5v1.5" strokeLinecap="round" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">Reutilize produtos que você usa sempre</p>
            <p className="mt-0.5 text-xs leading-5 text-muted">Entre com Google para criar sua biblioteca privada.</p>
          </div>
        </div>
        <Link href="/entrar" className="shrink-0 text-sm font-semibold text-brand-700 hover:text-brand-800">Entrar →</Link>
      </div>
    );
  }

  const buttonClass =
    "interactive-lift inline-flex min-h-10 items-center justify-center rounded-xl border border-line-strong bg-white px-3.5 py-2 text-sm font-semibold text-ink-soft hover:border-brand-300 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-line bg-canvas/50">
      <div className="flex flex-col gap-3 border-b border-line px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-lg border border-line-strong bg-white text-ink-soft shadow-card">
            <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M4.5 6.5h11v9h-11z" strokeLinejoin="round" />
              <path d="M7 6.5V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 13 5v1.5" strokeLinecap="round" />
            </svg>
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-600">Biblioteca</p>
            <p className="mt-0.5 text-sm font-semibold text-ink">Produtos salvos</p>
          </div>
        </div>
        <Link href="/conta/produtos" className="text-xs font-semibold text-brand-700 hover:text-brand-800">Gerenciar biblioteca →</Link>
      </div>

      <div className="p-4">
        <div className="grid gap-2 lg:grid-cols-[minmax(0,1fr)_auto_auto]">
          <select
            id="saved-product"
            aria-label="Produto salvo"
            value={selectedId}
            onChange={(event) => setSelectedId(event.target.value)}
            disabled={loading || items.length === 0}
            className="field min-w-0 py-2.5 text-sm"
          >
            <option value="">{loading ? "Carregando…" : items.length ? "Escolha um produto salvo" : "Nenhum produto salvo"}</option>
            {items.map((item) => <option key={item.id} value={item.id}>{item.productName}</option>)}
          </select>
          <button type="button" onClick={applySelected} disabled={!selectedId} className={buttonClass}>
            Usar produto
          </button>
          <button type="button" onClick={() => void saveCurrent()} disabled={saving} className={buttonClass + " disabled:cursor-wait"}>
            {saving ? "Salvando…" : "Salvar produto atual"}
          </button>
        </div>

        {message ? (
          <p className="mt-3 rounded-lg border border-line bg-white px-3 py-2 text-xs font-medium text-ink-soft" role="status">{message}</p>
        ) : null}

        <p className="mt-3 text-[11px] leading-5 text-muted">Nada é salvo automaticamente. A biblioteca só recebe dados quando você escolhe salvar.</p>
      </div>
    </div>
  );
}
