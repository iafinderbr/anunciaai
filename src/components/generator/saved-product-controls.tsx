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
      <div className="mt-5 flex flex-col gap-3 rounded-xl border border-line bg-canvas/75 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">Já tem produtos que usa sempre?</p>
          <p className="mt-0.5 text-xs leading-5 text-muted">Entre com Google para guardar dados e preencher futuros anúncios mais rápido.</p>
        </div>
        <Link href="/entrar" className="shrink-0 text-sm font-semibold text-brand-700 hover:text-brand-800">Entrar →</Link>
      </div>
    );
  }

  return (
    <div className="mt-5 rounded-xl border border-line bg-canvas/75 p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-600">Biblioteca</p>
            <p className="mt-1 text-sm font-semibold text-ink">Reutilize um produto salvo</p>
          </div>
          <Link href="/conta/produtos" className="text-xs font-semibold text-brand-700 hover:text-brand-800">Ver biblioteca →</Link>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <select
            id="saved-product"
            aria-label="Produto salvo"
            value={selectedId}
            onChange={(event) => setSelectedId(event.target.value)}
            disabled={loading || items.length === 0}
            className="field min-w-0 flex-1 py-2.5 text-sm"
          >
            <option value="">{loading ? "Carregando…" : items.length ? "Escolha um produto salvo" : "Nenhum produto salvo"}</option>
            {items.map((item) => <option key={item.id} value={item.id}>{item.productName}</option>)}
          </select>
          <button
            type="button"
            onClick={applySelected}
            disabled={!selectedId}
            className="rounded-lg border border-line-strong bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Usar produto
          </button>
          <button
            type="button"
            onClick={() => void saveCurrent()}
            disabled={saving}
            className="rounded-lg border border-line-strong bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700 disabled:cursor-wait disabled:opacity-60"
          >
            {saving ? "Salvando…" : "Salvar produto atual"}
          </button>
        </div>
      </div>
      {message ? <p className="mt-3 text-xs font-medium text-ink-soft" role="status">{message}</p> : null}
      <p className="mt-2 text-[11px] leading-5 text-muted">Nada é salvo automaticamente. A biblioteca só recebe dados quando você escolhe salvar.</p>
    </div>
  );
}
