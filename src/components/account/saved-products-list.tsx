"use client";

import { useState } from "react";

export interface SavedProductItem {
  id: string;
  productName: string;
  category: string;
  price: string;
  audience: string;
  features: string;
  channel: string;
  tone: string;
  createdAt: string;
  updatedAt: string;
}

const channelNames: Record<string, string> = {
  "mercado-livre": "Mercado Livre",
  shopee: "Shopee",
  olx: "OLX",
  "facebook-marketplace": "Facebook Marketplace",
  instagram: "Instagram",
  "loja-virtual": "Loja virtual",
  outro: "Outro",
};

export function SavedProductsList({ initialItems }: { initialItems: SavedProductItem[] }) {
  const [items, setItems] = useState(initialItems);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function remove(id: string) {
    setBusyId(id);
    setMessage(null);
    try {
      const response = await fetch("/api/account/products", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) throw new Error("delete_failed");
      setItems((current) => current.filter((item) => item.id !== id));
      setMessage("Produto removido da sua conta.");
    } catch {
      setMessage("Não foi possível remover agora. Tente novamente.");
    } finally {
      setBusyId(null);
    }
  }

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-line-strong bg-white px-6 py-10 text-center shadow-card">
        <p className="text-base font-semibold text-ink">Nenhum produto salvo ainda.</p>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted">
          A biblioteca já está pronta. O próximo ajuste conecta o botão “Salvar produto” diretamente aos geradores para você reutilizar os dados sem preencher tudo de novo.
        </p>
      </div>
    );
  }

  return (
    <div>
      {message ? <p className="mb-4 text-sm font-medium text-ink-soft" role="status">{message}</p> : null}
      <div className="grid gap-4 lg:grid-cols-2">
        {items.map((item) => (
          <article key={item.id} className="rounded-3xl border border-line bg-white p-5 shadow-card sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-brand-700">
                    {channelNames[item.channel] ?? item.channel}
                  </span>
                  <span className="text-xs text-muted">{item.category}</span>
                </div>
                <h2 className="mt-3 truncate text-lg font-semibold tracking-tight text-ink">{item.productName}</h2>
                {item.price ? <p className="mt-1 text-sm font-medium text-ink-soft">{item.price}</p> : null}
              </div>
              <button
                type="button"
                onClick={() => void remove(item.id)}
                disabled={busyId === item.id}
                className="shrink-0 rounded-xl border border-line-strong bg-white px-3 py-2 text-xs font-semibold text-muted transition-colors hover:border-rose-300 hover:text-rose-700 disabled:cursor-wait disabled:opacity-60"
              >
                {busyId === item.id ? "Removendo…" : "Excluir"}
              </button>
            </div>

            <div className="mt-4 space-y-3 rounded-2xl border border-line bg-canvas p-4">
              {item.audience ? (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">Público</p>
                  <p className="mt-1 text-sm text-ink-soft">{item.audience}</p>
                </div>
              ) : null}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">Características</p>
                <p className="mt-1 line-clamp-3 text-sm leading-6 text-ink-soft">{item.features}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
