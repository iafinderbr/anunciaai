"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

type QuickIcon = "spark" | "history" | "account" | "guide";

function QuickActionIcon({ icon }: { icon: QuickIcon }) {
  if (icon === "spark") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="m10 3 .9 3.1L14 7l-3.1.9L10 11l-.9-3.1L6 7l3.1-.9L10 3Z" strokeLinejoin="round" />
        <path d="m15.3 11 .55 1.9 1.9.55-1.9.55-.55 1.9-.55-1.9-1.9-.55 1.9-.55.55-1.9Z" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "history") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 10a6 6 0 1 0 1.7-4.2" strokeLinecap="round" />
        <path d="M4 4.5v3h3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 6.8v3.5l2.3 1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "account") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="10" cy="7" r="2.7" />
        <path d="M4.8 16c.6-2.7 2.4-4 5.2-4s4.6 1.3 5.2 4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4.5 4.5h7a2 2 0 0 1 2 2v9h-7a2 2 0 0 0-2 2v-13Z" strokeLinejoin="round" />
      <path d="M13.5 6.5h2v9h-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ToolsQuickActions() {
  const { data: session } = authClient.useSession();

  const quickActions = [
    {
      href: "/#ferramenta",
      eyebrow: "Gerador principal",
      title: "Criar anúncio completo",
      action: "Começar",
      icon: "spark" as const,
      featured: true,
    },
    {
      href: session ? "/conta/historico" : "/entrar",
      eyebrow: "Sua área",
      title: "Histórico salvo",
      action: session ? "Abrir" : "Entrar",
      icon: "history" as const,
      featured: false,
    },
    {
      href: session ? "/conta" : "/entrar",
      eyebrow: "Conta",
      title: session ? "Minha conta" : "Entrar na conta",
      action: "Acessar",
      icon: "account" as const,
      featured: false,
    },
    {
      href: "/guias",
      eyebrow: "Aprender",
      title: "Guias práticos",
      action: "Ver guias",
      icon: "guide" as const,
      featured: false,
    },
  ] as const;

  return (
    <div className="surface-premium mt-7 overflow-hidden rounded-2xl sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line">
      {quickActions.map((item) => (
        <Link
          key={`${item.title}-${item.href}`}
          href={item.href}
          className={`group flex min-h-[96px] items-center gap-3 border-b border-line p-4 transition-colors duration-200 last:border-b-0 hover:bg-canvas/70 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 ${
            item.featured ? "bg-brand-50/35" : "bg-white"
          }`}
        >
          <span
            aria-hidden="true"
            className={`grid size-10 shrink-0 place-items-center rounded-xl transition-all duration-200 group-hover:-translate-y-px ${
              item.featured
                ? "bg-ink text-white shadow-card"
                : "border border-line-strong bg-canvas/70 text-ink-soft group-hover:border-brand-200 group-hover:bg-white group-hover:text-brand-700"
            }`}
          >
            <QuickActionIcon icon={item.icon} />
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
