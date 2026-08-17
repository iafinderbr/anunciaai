"use client";

import { useCallback, useEffect, useState } from "react";
import { invalidateStatsCache, loadStats } from "@/lib/stats-client";

export const GENERATION_EVENT = "anunciaai:generated";

export function LiveStats({ initialTotal = 0 }: { initialTotal?: number }) {
  const [total, setTotal] = useState(initialTotal);

  const load = useCallback(async (force = false) => {
    try {
      const data = await loadStats(force);
      setTotal(data.total);
    } catch {
      // silencioso: o contador é apenas informativo
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

  const formatted = new Intl.NumberFormat("pt-BR").format(total);

  return (
    <p className="text-sm text-muted">
      <span className="font-semibold text-ink tabular-nums">{formatted}</span>{" "}
      {total === 1 ? "anúncio já gerado" : "anúncios já gerados"} no AnunciaAI
    </p>
  );
}
