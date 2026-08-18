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
      <div className="border border-dashed border-white/[0.12] bg-[#121316] px-6 py-10 text-center">
        <p className="text-base font-semibold text-white">Nenhum produto salvo ainda.</p>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/42">
          A biblioteca fica disponível para os produtos que você decidir guardar e reutilizar nos próximos anúncios.
        </p>
      </div>
    );
  }

  return (
    <div>
      {message ? <p className="mb-4 border-l-2 border-brand-500 pl-3 text-sm font-medium text-white/58" role="status">{message}</p> : null}
      <div className="grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] lg:grid-cols-2">
        {items.map((item) => (
          <article key={item.id} className="bg-[#121316] p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="border-l-2 border-brand-500 pl-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-300">
                    {channelNames[item.channel] ?? item.channel}
                  </span>
                  <span className="text-xs text-white/32">{item.category}</span>
                </div>
                <h2 className="mt-3 truncate text-lg font-semibold tracking-[-0.03em] text-white">{item.productName}</h2>
                {item.price ? <p className="mt-1 text-sm font-medium text-white/54">{item.price}</p> : null}
              </div>
              <button
                type="button"
                onClick={() => void remove(item.id)}
                disabled={busyId === item.id}
                className="shrink-0 border border-white/[0.10] bg-transparent px-3 py-2 text-xs font-semibold text-white/42 transition-colors hover:border-rose-300/30 hover:text-rose-200 disabled:cursor-wait disabled:opacity-60"
              >
                {busyId === item.id ? "Removendo…" : "Excluir"}
              </button>
            </div>

            <div className="mt-5 space-y-4 border-t border-white/[0.08] pt-4">
              {item.audience ? (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.10em] text-white/28">Público</p>
                  <p className="mt-1.5 text-sm text-white/58">{item.audience}</p>
                </div>
              ) : null}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.10em] text-white/28">Características</p>
                <p className="mt-1.5 line-clamp-3 text-sm leading-6 text-white/58">{item.features}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
