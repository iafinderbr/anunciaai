"use client";

import Link from "next/link";
import { useState } from "react";
import { CopyButton } from "@/components/copy-button";
import { CHANNEL_LABEL } from "@/lib/generator-data";
import type { Channel } from "@/lib/types";

export interface SavedHistoryItem {
  id: string;
  productName: string;
  channel: string;
  title: string;
  content: string;
  createdAt: string;
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Data indisponível";

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }).format(date);
}

function channelLabel(value: string) {
  return CHANNEL_LABEL[value as Channel] ?? value;
}

export function SavedHistoryList({ initialItems }: { initialItems: SavedHistoryItem[] }) {
  const [items, setItems] = useState(initialItems);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function removeItem(item: SavedHistoryItem) {
    if (deletingId) return;
    if (!window.confirm(`Excluir do histórico: ${item.title}?`)) return;

    setDeletingId(item.id);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/account/history", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: item.id }),
      });

      if (!response.ok) {
        setErrorMessage(
          response.status === 401
            ? "Sua sessão expirou. Entre novamente para alterar o histórico."
            : "Não foi possível excluir esse item agora.",
        );
        return;
      }

      setItems((current) => current.filter((entry) => entry.id !== item.id));
    } catch {
      setErrorMessage("Não foi possível excluir esse item agora.");
    } finally {
      setDeletingId(null);
    }
  }

  if (items.length === 0) {
    return (
      <div className="border border-dashed border-white/[0.12] bg-[#121316] p-8 text-center sm:p-12">
        <div className="mx-auto grid size-11 place-items-center border border-white/[0.10] bg-[#18191d] text-lg text-brand-300" aria-hidden="true">
          ☆
        </div>
        <h2 className="mt-4 text-xl font-semibold tracking-[-0.035em] text-white">Seu histórico está vazio</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-white/42">
          Gere um anúncio enquanto estiver conectado e clique em “Salvar no histórico”. Nada é salvo automaticamente.
        </p>
        <Link
          href="/#ferramenta"
          className="mt-6 inline-flex bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Criar um anúncio
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
        <p className="text-sm text-white/38">
          {items.length} item{items.length === 1 ? "" : "s"} salvo{items.length === 1 ? "" : "s"} · limite de 100 por conta
        </p>
        <Link
          href="/#ferramenta"
          className="bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Criar novo anúncio
        </Link>
      </div>

      {errorMessage ? (
        <p role="alert" className="mb-4 border border-rose-300/20 bg-rose-400/[0.06] px-4 py-3 text-sm font-medium text-rose-200">
          {errorMessage}
        </p>
      ) : null}

      <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
        {items.map((item) => (
          <article key={item.id} className="bg-[#121316] px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3 text-xs text-white/35">
                  <span className="border-l-2 border-brand-500 pl-2 font-semibold text-brand-300">
                    {channelLabel(item.channel)}
                  </span>
                  <span>{formatDate(item.createdAt)}</span>
                </div>
                <h2 className="mt-3 break-words text-lg font-semibold leading-snug text-white">{item.title}</h2>
                <p className="mt-1 text-sm text-white/38">Produto: {item.productName}</p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-2 [&_button]:rounded-none">
                <CopyButton value={item.content} label="Copiar" />
                <button
                  type="button"
                  onClick={() => void removeItem(item)}
                  disabled={deletingId === item.id}
                  className="border border-rose-300/20 bg-transparent px-3 py-2 text-xs font-semibold text-rose-200 transition-colors hover:bg-rose-400/[0.06] disabled:cursor-wait disabled:opacity-60"
                >
                  {deletingId === item.id ? "Excluindo..." : "Excluir"}
                </button>
              </div>
            </div>

            <details className="mt-5 border border-white/[0.08] bg-[#0f1013]">
              <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-white/62">
                Ver conteúdo salvo
              </summary>
              <div className="border-t border-white/[0.08] px-4 py-4">
                <pre className="max-h-[32rem] overflow-auto whitespace-pre-wrap break-words font-sans text-sm leading-6 text-white/58">
                  {item.content}
                </pre>
              </div>
            </details>
          </article>
        ))}
      </div>
    </div>
  );
}
