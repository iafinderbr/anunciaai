"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

type QuickIcon = "spark" | "history" | "account" | "guide";

function QuickActionIcon({ icon }: { icon: QuickIcon }) {
  if (icon === "spark") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="m10 3 .9 3.1L14 7l-3.1.9L10 11l-.9-3.1L6 7l3.1-.9L10 3Z" strokeLinejoin="round" />
        <path d="m15.3 11 .55 1.9 1.9.55-1.9.55-.55 1.9-.55-1.9-1.9-.55 1.9-.55.55-1.9Z" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "history") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 10a6 6 0 1 0 1.7-4.2" strokeLinecap="round" />
        <path d="M4 4.5v3h3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 6.8v3.5l2.3 1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "account") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="7" r="2.7" />
        <path d="M4.8 16c.6-2.7 2.4-4 5.2-4s4.6 1.3 5.2 4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
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
      eyebrow: "Criar",
      title: "Anúncio completo",
      description: "Comece pelo fluxo principal.",
      icon: "spark" as const,
      featured: true,
    },
    {
      href: session ? "/conta/historico" : "/entrar",
      eyebrow: "Retomar",
      title: "Histórico salvo",
      description: session ? "Acesse resultados guardados." : "Entre para ver seus resultados.",
      icon: "history" as const,
      featured: false,
    },
    {
      href: session ? "/conta" : "/entrar",
      eyebrow: "Organizar",
      title: session ? "Minha conta" : "Entrar na conta",
      description: session ? "Preferências, produtos e plano." : "Use sua conta Google para acessar.",
      icon: "account" as const,
      featured: false,
    },
    {
      href: "/guias",
      eyebrow: "Aprender",
      title: "Guias práticos",
      description: "Consulte exemplos e checklists.",
      icon: "guide" as const,
      featured: false,
    },
  ] as const;

  return (
    <div className="grid overflow-hidden rounded-xl border border-line bg-white sm:grid-cols-2 lg:grid-cols-4">
      {quickActions.map((item, index) => (
        <Link
          key={`${item.title}-${item.href}`}
          href={item.href}
          className={`group relative flex min-h-[124px] flex-col justify-between gap-5 p-4 transition-colors hover:bg-canvas/70 sm:p-5 ${
            index < quickActions.length - 1 ? "border-b border-line sm:border-b-0 lg:border-r" : ""
          } ${index === 1 ? "sm:border-r" : ""} ${item.featured ? "bg-brand-50/45" : "bg-white"}`}
        >
          <div className="flex items-center justify-between gap-4">
            <span className={`grid size-8 place-items-center rounded-lg ${item.featured ? "bg-ink text-white" : "border border-line-strong bg-white text-ink-soft"}`} aria-hidden="true">
              <QuickActionIcon icon={item.icon} />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">{item.eyebrow}</span>
          </div>

          <div>
            <span className="block text-sm font-semibold text-ink transition-colors group-hover:text-brand-700">{item.title}</span>
            <span className="mt-1 block text-xs leading-5 text-muted">{item.description}</span>
          </div>

          <span aria-hidden="true" className="absolute bottom-4 right-4 text-sm text-line-strong transition-all group-hover:translate-x-0.5 group-hover:text-brand-700">→</span>
        </Link>
      ))}
    </div>
  );
}
