"use client";

import { useCallback, useEffect, useState } from "react";
import { GENERATION_EVENT } from "@/components/live-stats";
import { CHANNEL_LABEL } from "@/lib/generator-data";
import { invalidateStatsCache, loadStats, type RecentGeneration } from "@/lib/stats-client";
import type { Channel } from "@/lib/types";

function timeAgo(date: Date): string {
  const diff = Date.now() - date.getTime();
  const minutes = Math.round(diff / 60000);
  if (minutes < 1) return "agora mesmo";
  if (minutes < 60) return `há ${minutes} min`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `há ${hours}h`;
  const days = Math.round(hours / 24);
  return days === 1 ? "ontem" : `há ${days} dias`;
}

export function RecentStrip() {
  const [rows, setRows] = useState<RecentGeneration[]>([]);

  const load = useCallback(async (force = false) => {
    try {
      const data = await loadStats(force);
      setRows(data.recent);
    } catch {
      // silencioso: esta faixa é apenas informativa
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 0);
    const handler = () => {
      invalidateStatsCache();
      void load(true);
    };
    window.addEventListener(GENERATION_EVENT, handler);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(GENERATION_EVENT, handler);
    };
  }, [load]);

  if (rows.length === 0) return null;

  return (
    <section aria-labelledby="recentes-titulo" className="container-page pb-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-white p-5 shadow-card">
        <h2 id="recentes-titulo" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          Gerados recentemente
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {rows.map((row, index) => (
            <li
              key={`${row.channel}-${row.createdAt}-${index}`}
              className="flex items-center gap-2 rounded-full border border-line bg-canvas px-3 py-1.5 text-xs text-ink-soft"
            >
              <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-brand-500" />
              <span className="font-medium text-ink">Anúncio gerado</span>
              <span className="text-muted">
                {CHANNEL_LABEL[row.channel as Channel] ?? "Outros canais"} · {timeAgo(new Date(row.createdAt))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
