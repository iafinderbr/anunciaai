"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export function ToolsQuickActions() {
  const { data: session } = authClient.useSession();

  const quickActions = [
    {
      href: "/#ferramenta",
      eyebrow: "Gerador principal",
      title: "Criar anúncio completo",
      action: "Começar",
      short: "AI",
      featured: true,
    },
    {
      href: session ? "/conta/historico" : "/entrar",
      eyebrow: "Sua área",
      title: "Histórico salvo",
      action: session ? "Abrir" : "Entrar",
      short: "HI",
      featured: false,
    },
    {
      href: session ? "/conta" : "/entrar",
      eyebrow: "Conta",
      title: session ? "Minha conta" : "Entrar na conta",
      action: "Acessar",
      short: "EU",
      featured: false,
    },
    {
      href: "/guias",
      eyebrow: "Aprender",
      title: "Guias práticos",
      action: "Ver guias",
      short: "GUI",
      featured: false,
    },
  ] as const;

  return (
    <div className="product-surface mt-7 overflow-hidden rounded-2xl sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line">
      {quickActions.map((item) => (
        <Link
          key={`${item.title}-${item.href}`}
          href={item.href}
          className={`group flex min-h-[92px] items-center gap-3 border-b border-line p-4 transition-colors duration-200 last:border-b-0 hover:bg-canvas/75 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 ${
            item.featured ? "bg-brand-50/45" : "bg-white"
          }`}
        >
          <span
            aria-hidden="true"
            className={`grid size-9 shrink-0 place-items-center rounded-lg text-[10px] font-bold transition-transform duration-200 group-hover:-translate-y-px ${
              item.featured ? "bg-ink text-white shadow-card" : "border border-line-strong bg-canvas text-ink-soft"
            }`}
          >
            {item.short}
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-[9px] font-semibold uppercase tracking-[0.1em] text-muted">{item.eyebrow}</span>
            <span className="mt-1 block truncate text-sm font-semibold text-ink transition-colors group-hover:text-brand-700">
              {item.title}
            </span>
          </span>

          <span aria-hidden="true" className="shrink-0 text-sm font-semibold text-line-strong transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand-700">
            →
          </span>
          <span className="sr-only">{item.action}</span>
        </Link>
      ))}
    </div>
  );
}
