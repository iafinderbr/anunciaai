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
      featured: true,
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
    <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {quickActions.map((item) => (
        <Link
          key={`${item.title}-${item.href}`}
          href={item.href}
          className={`group flex items-center gap-3 rounded-2xl border p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift ${
            item.featured
              ? "border-brand-200 bg-brand-50/55 hover:border-brand-400"
              : "border-line bg-white hover:border-line-strong"
          }`}
        >
          <span
            aria-hidden="true"
            className={`grid size-10 shrink-0 place-items-center rounded-xl text-[11px] font-bold ${
              item.featured ? "bg-brand-500 text-white" : "border border-line-strong bg-canvas text-ink-soft"
            }`}
          >
            {item.short}
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-[9px] font-semibold uppercase tracking-[0.09em] text-muted">{item.eyebrow}</span>
            <span className="mt-1 block truncate text-sm font-semibold text-ink transition-colors group-hover:text-brand-700">
              {item.title}
            </span>
          </span>

          <span aria-hidden="true" className="shrink-0 text-sm font-semibold text-brand-700 transition-transform group-hover:translate-x-0.5">
            →
          </span>
          <span className="sr-only">{item.action}</span>
        </Link>
      ))}
    </div>
  );
}
