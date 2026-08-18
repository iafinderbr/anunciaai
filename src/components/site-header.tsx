"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";

const links = [
  { href: "/#ferramentas", label: "Ferramentas" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#recursos", label: "Recursos" },
  { href: "/guias", label: "Guias" },
  { href: "/#precos", label: "Preços" },
];

export function SiteHeader({ ctaHref = "#ferramenta" }: { ctaHref?: string }) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { data: session } = authClient.useSession();

  const accountHref = session ? "/conta" : "/entrar";
  const accountLabel = session ? "Minha conta" : "Entrar";
  const mobileAccountLabel = session ? "Minha conta" : "Entrar na conta";

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
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
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-white hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={accountHref}
              className="hidden items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-soft transition-colors hover:bg-white hover:text-brand-700 sm:inline-flex"
            >
              {session ? (
                <span aria-hidden="true" className="grid size-6 place-items-center rounded-full bg-ink text-[10px] font-bold text-white">
                  {session.user.name.trim().charAt(0).toUpperCase() || "A"}
                </span>
              ) : null}
              {accountLabel}
            </Link>
            <Link
              href={ctaHref}
              className="hidden rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 sm:inline-flex"
            >
              Começar grátis
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="grid size-10 place-items-center rounded-xl border border-line-strong bg-white text-ink md:hidden"
            >
              <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
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

        <div id="menu-mobile" hidden={!open} className="border-t border-line bg-white md:hidden">
          <nav aria-label="Navegação mobile" className="container-page flex flex-col py-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-1 py-3 text-sm font-medium text-ink-soft"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={accountHref}
              onClick={() => setOpen(false)}
              className="rounded-lg px-1 py-3 text-sm font-semibold text-ink"
            >
              {mobileAccountLabel}
            </Link>
            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="my-2 rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Começar grátis
            </Link>
          </nav>
        </div>
      </header>
      <span id="inicio-conteudo" tabIndex={-1} className="block h-0 scroll-mt-20" />
    </>
  );
}
