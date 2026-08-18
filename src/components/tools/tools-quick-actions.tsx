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
      description: "Monte título, descrição, benefícios, características e sugestões de SEO em um só fluxo.",
      action: "Começar agora",
      short: "AI",
      featured: true,
    },
    {
      href: session ? "/conta/historico" : "/entrar",
      eyebrow: "Sua área",
      title: "Histórico salvo",
      description: "Reabra os resultados que você escolheu guardar. Nada é salvo automaticamente.",
      action: session ? "Abrir histórico" : "Entrar para ver",
      short: "HI",
      featured: true,
    },
    {
      href: session ? "/conta" : "/entrar",
      eyebrow: "Conta",
      title: "Minha conta",
      description: "Veja seu perfil, plano atual e os recursos pessoais ligados à sua conta.",
      action: session ? "Acessar conta" : "Entrar na conta",
      short: "EU",
      featured: false,
    },
    {
      href: "/guias",
      eyebrow: "Aprender",
      title: "Guias práticos",
      description: "Consulte conteúdos sobre Mercado Livre, Shopee, OLX, SEO, Instagram e loja virtual.",
      action: "Ver guias",
      short: "GUI",
      featured: false,
    },
  ] as const;

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {quickActions.map((item) => (
        <Link
          key={`${item.title}-${item.href}`}
          href={item.href}
          className={`group flex min-h-56 flex-col rounded-2xl border p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift ${
            item.featured
              ? "border-brand-200 bg-brand-50/55 hover:border-brand-400"
              : "border-line bg-white hover:border-line-strong"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <span
              aria-hidden="true"
              className={`grid h-10 min-w-10 place-items-center rounded-xl px-2 text-[11px] font-bold ${
                item.featured ? "bg-brand-500 text-white" : "border border-line-strong bg-canvas text-ink-soft"
              }`}
            >
              {item.short}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">{item.eyebrow}</span>
          </div>
          <h2 className="mt-5 text-lg font-semibold text-ink transition-colors group-hover:text-brand-700">
            {item.title}
          </h2>
          <p className="mt-2 flex-1 text-sm leading-6 text-muted">{item.description}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
            {item.action}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
