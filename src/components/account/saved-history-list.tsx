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
      <div className="rounded-3xl border border-dashed border-line-strong bg-white p-8 text-center shadow-card sm:p-12">
        <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-brand-50 text-xl" aria-hidden="true">
          ☆
        </div>
        <h2 className="mt-4 text-xl font-semibold tracking-tight text-ink">Seu histórico está vazio</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-muted">
          Gere um anúncio enquanto estiver conectado e clique em “Salvar no histórico”. Nada é salvo automaticamente.
        </p>
        <Link
          href="/#ferramenta"
          className="mt-6 inline-flex rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Criar um anúncio
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">
          {items.length} item{items.length === 1 ? "" : "s"} salvo{items.length === 1 ? "" : "s"} · limite de 100 por conta
        </p>
        <Link
          href="/#ferramenta"
          className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Criar novo anúncio
        </Link>
      </div>

      {errorMessage ? (
        <p role="alert" className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {errorMessage}
        </p>
      ) : null}

      <div className="space-y-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
                    {channelLabel(item.channel)}
                  </span>
                  <span>{formatDate(item.createdAt)}</span>
                </div>
                <h2 className="mt-3 break-words text-lg font-semibold leading-snug text-ink">{item.title}</h2>
                <p className="mt-1 text-sm text-muted">Produto: {item.productName}</p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-2">
                <CopyButton value={item.content} label="Copiar" />
                <button
                  type="button"
                  onClick={() => void removeItem(item)}
                  disabled={deletingId === item.id}
                  className="rounded-lg border border-rose-200 bg-white px-3 py-2 text-xs font-semibold text-rose-700 transition-colors hover:bg-rose-50 disabled:cursor-wait disabled:opacity-60"
                >
                  {deletingId === item.id ? "Excluindo..." : "Excluir"}
                </button>
              </div>
            </div>

            <details className="mt-5 rounded-xl border border-line bg-canvas">
              <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-ink-soft">
                Ver conteúdo salvo
              </summary>
              <div className="border-t border-line px-4 py-4">
                <pre className="max-h-[32rem] overflow-auto whitespace-pre-wrap break-words font-sans text-sm leading-6 text-ink-soft">
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
