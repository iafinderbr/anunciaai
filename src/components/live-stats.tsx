"use client";

import { useCallback, useEffect, useState } from "react";

export const GENERATION_EVENT = "anunciaai:generated";

interface StatsResponse {
  total: number;
}

export function LiveStats({ initialTotal = 0 }: { initialTotal?: number }) {
  const [total, setTotal] = useState(initialTotal);

  const load = useCallback(async () => {
    try {
      const response = await fetch("/api/generations", { cache: "no-store" });
      if (!response.ok) return;
      const data = (await response.json()) as StatsResponse;
      if (typeof data.total === "number") setTotal(data.total);
    } catch {
      // silencioso: o contador é apenas informativo
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 0);
    const handler = () => void load();
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
      {total === 1 ? "anúncio já gerado" : "anúncios já gerados"} por lojistas com o AnunciaAI
    </p>
  );
}
