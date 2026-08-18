"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";

const links = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#recursos", label: "Recursos" },
  { href: "/guias", label: "Guias" },
  { href: "/#precos", label: "Preços" },
];

export function SiteHeader({ ctaHref = "#ferramenta" }: { ctaHref?: string }) {
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const toolsButtonRef = useRef<HTMLButtonElement>(null);
  const toolsMenuRef = useRef<HTMLDivElement>(null);
  const { data: session } = authClient.useSession();

  const accountHref = session ? "/conta" : "/entrar";
  const accountLabel = session ? "Minha conta" : "Entrar";
  const mobileAccountLabel = session ? "Minha conta" : "Entrar na conta";
  const historyHref = session ? "/conta/historico" : "/entrar";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (toolsOpen) {
        setToolsOpen(false);
        requestAnimationFrame(() => toolsButtonRef.current?.focus());
      }

      if (open) {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!toolsOpen) return;
      const target = event.target as Node;
      if (toolsMenuRef.current?.contains(target) || toolsButtonRef.current?.contains(target)) return;
      setToolsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open, toolsOpen]);

  const closeTools = () => setToolsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/85 backdrop-blur-md">
        <div className="container-page relative flex h-16 items-center justify-between gap-4">
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
            <div className="relative">
              <button
                ref={toolsButtonRef}
                type="button"
                onClick={() => setToolsOpen((value) => !value)}
                aria-expanded={toolsOpen}
                aria-controls="ferramentas-menu"
                aria-haspopup="menu"
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-white hover:text-ink"
              >
                Ferramentas
                <svg aria-hidden="true" viewBox="0 0 16 16" className={`size-3.5 transition-transform ${toolsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {toolsOpen ? (
                <div
                  ref={toolsMenuRef}
                  id="ferramentas-menu"
                  role="menu"
                  className="absolute left-1/2 top-[calc(100%+0.65rem)] z-50 w-[590px] -translate-x-1/2 overflow-hidden rounded-2xl border border-line bg-white shadow-lift"
                >
                  <div className="flex items-center justify-between border-b border-line bg-canvas px-4 py-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">Central rápida</p>
                      <p className="mt-0.5 text-xs text-muted">Acesse sem rolar a página.</p>
                    </div>
                    <Link
                      href="/ferramentas"
                      onClick={closeTools}
                      className="rounded-lg border border-line-strong bg-white px-3 py-2 text-xs font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
                    >
                      Ver todas →
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2 p-3">
                    <Link
                      role="menuitem"
                      href="/#ferramenta"
                      onClick={closeTools}
                      className="group rounded-xl border border-brand-200 bg-brand-50/55 p-3.5 transition-colors hover:border-brand-400"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-600">Gerador principal</span>
                      <span className="mt-1 block text-sm font-semibold text-ink group-hover:text-brand-700">Criar anúncio completo</span>
                      <span className="mt-1 block text-xs leading-5 text-muted">Título, descrição, benefícios e SEO.</span>
                    </Link>

                    <Link
                      role="menuitem"
                      href="/ferramentas#geradores"
                      onClick={closeTools}
                      className="group rounded-xl border border-line bg-canvas p-3.5 transition-colors hover:border-brand-300"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">Catálogo</span>
                      <span className="mt-1 block text-sm font-semibold text-ink group-hover:text-brand-700">Todos os geradores</span>
                      <span className="mt-1 block text-xs leading-5 text-muted">Mercado Livre, Shopee, OLX e mais.</span>
                    </Link>

                    <Link
                      role="menuitem"
                      href={historyHref}
                      onClick={closeTools}
                      className="group rounded-xl border border-line bg-white p-3.5 transition-colors hover:border-brand-300"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">Sua área</span>
                      <span className="mt-1 block text-sm font-semibold text-ink group-hover:text-brand-700">Histórico salvo</span>
                      <span className="mt-1 block text-xs leading-5 text-muted">{session ? "Reabra o que você salvou." : "Entre para acessar seus resultados."}</span>
                    </Link>

                    <Link
                      role="menuitem"
                      href={accountHref}
                      onClick={closeTools}
                      className="group rounded-xl border border-line bg-white p-3.5 transition-colors hover:border-brand-300"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">Conta</span>
                      <span className="mt-1 block text-sm font-semibold text-ink group-hover:text-brand-700">{session ? "Minha conta" : "Entrar na conta"}</span>
                      <span className="mt-1 block text-xs leading-5 text-muted">Perfil, plano e recursos pessoais.</span>
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>

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
              onClick={() => {
                setToolsOpen(false);
                setOpen((value) => !value);
              }}
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
            <Link
              href="/ferramentas"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-1 py-3 text-sm font-semibold text-ink"
            >
              Ferramentas
              <span aria-hidden="true" className="text-brand-600">→</span>
            </Link>
            {session ? (
              <Link
                href="/conta/historico"
                onClick={() => setOpen(false)}
                className="rounded-lg border-l-2 border-brand-200 py-2.5 pl-3 text-sm font-medium text-ink-soft"
              >
                Histórico salvo
              </Link>
            ) : null}
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
