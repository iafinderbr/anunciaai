"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#ferramentas", label: "Ferramentas" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#recursos", label: "Recursos" },
  { href: "/como-criar-anuncio-no-mercado-livre", label: "Guias" },
  { href: "/#precos", label: "Preços" },
];

export function SiteHeader({ ctaHref = "#ferramenta" }: { ctaHref?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label="AnunciaAI, página inicial">
          <span className="grid size-8 place-items-center rounded-lg bg-ink text-sm font-bold text-white">
            A
            <span className="sr-only">AnunciaAI</span>
          </span>
          <span className="text-[17px] font-semibold tracking-tight">
            Anuncia<span className="text-brand-600">AI</span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-white hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={ctaHref}
            className="hidden rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 sm:inline-flex"
          >
            Começar grátis
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="grid size-10 place-items-center rounded-xl border border-line-strong bg-white text-ink md:hidden"
          >
            <span className="sr-only">Abrir menu</span>
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
              ) : (
                <path d="M3.5 6h13M3.5 10h13M3.5 14h13" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div id="menu-mobile" className="border-t border-line bg-white md:hidden">
          <nav aria-label="Navegação mobile" className="container-page flex flex-col py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-1 py-3 text-sm font-medium text-ink-soft"
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="my-2 rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Começar grátis
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
