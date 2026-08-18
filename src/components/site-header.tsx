"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";

type DesktopMenu = "tools" | "guides" | null;

const guideShortcuts = [
  {
    href: "/guias",
    label: "Todos os guias",
    description: "Central organizada por canal e objetivo.",
  },
  {
    href: "/como-criar-anuncio-no-mercado-livre",
    label: "Mercado Livre",
    description: "Anúncio, título, descrição e ficha técnica.",
  },
  {
    href: "/como-criar-anuncio-na-shopee",
    label: "Shopee",
    description: "Estrutura, atributos e revisão da publicação.",
  },
  {
    href: "/seo-para-pagina-de-produto",
    label: "SEO para produtos",
    description: "Conteúdo e sinais técnicos para loja virtual.",
  },
] as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={`size-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 8h10M9.5 4.5 13 8l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteHeader({ ctaHref = "#ferramenta" }: { ctaHref?: string }) {
  const [open, setOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const { data: session } = authClient.useSession();

  const accountHref = session ? "/conta" : "/entrar";
  const accountLabel = session ? "Minha conta" : "Entrar";
  const historyHref = session ? "/conta/historico" : "/entrar";
  const productsHref = session ? "/conta/produtos" : "/entrar";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setDesktopMenu(null);
      if (open) {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!desktopMenu || desktopNavRef.current?.contains(event.target as Node)) return;
      setDesktopMenu(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [desktopMenu, open]);

  const closeDesktopMenu = () => setDesktopMenu(null);
  const closeMobileMenu = () => setOpen(false);
  const navItem = "inline-flex min-h-9 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-canvas hover:text-ink";

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/90">
        <div className="container-page flex h-16 items-center justify-between gap-5">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5" aria-label="AnunciaAI, página inicial">
            <span className="relative grid size-8 place-items-center rounded-[9px] bg-ink text-[13px] font-bold text-white">
              A
              <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 size-2 rounded-full border-2 border-white bg-brand-500" />
            </span>
            <span className="text-[17px] font-semibold tracking-[-0.035em] text-ink">
              Anuncia<span className="text-brand-600">AI</span>
            </span>
          </Link>

          <div ref={desktopNavRef} className="relative hidden flex-1 items-center justify-center md:flex">
            <nav aria-label="Navegação principal" className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setDesktopMenu((current) => (current === "tools" ? null : "tools"))}
                aria-expanded={desktopMenu === "tools"}
                className={`${navItem} ${desktopMenu === "tools" ? "bg-canvas text-ink" : ""}`}
              >
                Ferramentas
                <Chevron open={desktopMenu === "tools"} />
              </button>
              <button
                type="button"
                onClick={() => setDesktopMenu((current) => (current === "guides" ? null : "guides"))}
                aria-expanded={desktopMenu === "guides"}
                className={`${navItem} ${desktopMenu === "guides" ? "bg-canvas text-ink" : ""}`}
              >
                Guias
                <Chevron open={desktopMenu === "guides"} />
              </button>
              <Link href="/#precos" onClick={closeDesktopMenu} className={navItem}>Preços</Link>
              <Link href="/sobre" onClick={closeDesktopMenu} className={navItem}>Sobre</Link>
            </nav>

            {desktopMenu === "tools" ? (
              <div id="ferramentas-menu" className="animate-menu-in absolute left-1/2 top-[calc(100%+0.7rem)] w-[580px] -translate-x-1/2 overflow-hidden rounded-xl border border-line bg-white shadow-lift">
                <div className="grid grid-cols-[1.08fr_0.92fr]">
                  <div className="border-r border-line p-2">
                    <Link href="/#ferramenta" onClick={closeDesktopMenu} className="group block rounded-lg p-4 transition-colors hover:bg-canvas">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-700">Começar</span>
                      <span className="mt-1.5 flex items-center justify-between gap-3 text-sm font-semibold text-ink">
                        Criar anúncio completo <Arrow />
                      </span>
                      <span className="mt-1.5 block text-xs leading-5 text-muted">Organize título, descrição, benefícios e dados do produto.</span>
                    </Link>
                    <Link href="/ferramentas" onClick={closeDesktopMenu} className="group block rounded-lg p-4 transition-colors hover:bg-canvas">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">Biblioteca</span>
                      <span className="mt-1.5 flex items-center justify-between gap-3 text-sm font-semibold text-ink">
                        Todos os geradores <Arrow />
                      </span>
                      <span className="mt-1.5 block text-xs leading-5 text-muted">Escolha uma ferramenta específica para cada canal ou tarefa.</span>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Link href={productsHref} onClick={closeDesktopMenu} className="block rounded-lg p-4 transition-colors hover:bg-canvas">
                      <span className="text-xs font-semibold text-ink">Produtos salvos</span>
                      <span className="mt-1 block text-xs leading-5 text-muted">{session ? "Reutilize informações já organizadas." : "Entre para acessar sua biblioteca."}</span>
                    </Link>
                    <Link href={historyHref} onClick={closeDesktopMenu} className="block rounded-lg p-4 transition-colors hover:bg-canvas">
                      <span className="text-xs font-semibold text-ink">Histórico</span>
                      <span className="mt-1 block text-xs leading-5 text-muted">{session ? "Retome resultados que você decidiu guardar." : "Entre para acessar seus resultados."}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}

            {desktopMenu === "guides" ? (
              <div id="guias-menu" className="animate-menu-in absolute left-1/2 top-[calc(100%+0.7rem)] w-[580px] -translate-x-1/2 overflow-hidden rounded-xl border border-line bg-white shadow-lift">
                <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">Conteúdo prático</p>
                    <p className="mt-1 text-xs text-ink-soft">Aprenda por canal e vá direto para a ferramenta.</p>
                  </div>
                  <Link href="/guias" onClick={closeDesktopMenu} className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-800">
                    Ver todos <Arrow />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-px bg-line p-px">
                  {guideShortcuts.map((guide) => (
                    <Link key={guide.href} href={guide.href} onClick={closeDesktopMenu} className="bg-white p-4 transition-colors hover:bg-canvas">
                      <span className="text-sm font-semibold text-ink">{guide.label}</span>
                      <span className="mt-1 block text-xs leading-5 text-muted">{guide.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            <Link href={accountHref} className="hidden min-h-10 items-center gap-2 rounded-md px-3 text-sm font-medium text-ink-soft transition-colors hover:bg-canvas hover:text-ink sm:inline-flex">
              {session ? (
                <span aria-hidden="true" className="grid size-6 place-items-center rounded-full bg-canvas text-[10px] font-bold text-ink ring-1 ring-inset ring-line-strong">
                  {session.user.name.trim().charAt(0).toUpperCase() || "A"}
                </span>
              ) : null}
              {accountLabel}
            </Link>
            <Link href={ctaHref} className="interactive-lift hidden min-h-10 items-center rounded-md bg-ink px-4 text-sm font-semibold text-white hover:bg-brand-600 sm:inline-flex">
              Começar grátis
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => {
                setDesktopMenu(null);
                setOpen((value) => !value);
              }}
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="grid size-10 place-items-center rounded-md border border-line-strong bg-white text-ink md:hidden"
            >
              <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                {open ? <path d="M5 5l10 10M15 5 5 15" strokeLinecap="round" /> : <path d="M4 6h12M4 10h12M4 14h12" strokeLinecap="round" />}
              </svg>
            </button>
          </div>
        </div>

        <div id="menu-mobile" hidden={!open} className="animate-menu-in border-t border-line bg-white md:hidden">
          <nav aria-label="Navegação mobile" className="container-page max-h-[calc(100vh-64px)] overflow-y-auto py-3">
            <div className="grid gap-1">
              <Link href="/ferramentas" onClick={closeMobileMenu} className="rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-canvas">Ferramentas</Link>
              <Link href="/guias" onClick={closeMobileMenu} className="rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-canvas">Guias</Link>
              <Link href="/#precos" onClick={closeMobileMenu} className="rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-canvas">Preços</Link>
              <Link href="/sobre" onClick={closeMobileMenu} className="rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-canvas">Sobre</Link>
            </div>

            <div className="mt-3 border-t border-line pt-3">
              <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">Sua área</p>
              <div className="mt-1 grid gap-1">
                <Link href={productsHref} onClick={closeMobileMenu} className="rounded-md px-3 py-3 text-sm text-ink-soft hover:bg-canvas">Produtos salvos</Link>
                <Link href={historyHref} onClick={closeMobileMenu} className="rounded-md px-3 py-3 text-sm text-ink-soft hover:bg-canvas">Histórico</Link>
                <Link href={accountHref} onClick={closeMobileMenu} className="rounded-md px-3 py-3 text-sm text-ink-soft hover:bg-canvas">{accountLabel}</Link>
              </div>
            </div>

            <Link href={ctaHref} onClick={closeMobileMenu} className="mt-3 flex min-h-11 items-center justify-center rounded-md bg-ink px-4 text-sm font-semibold text-white">
              Começar grátis
            </Link>
          </nav>
        </div>
      </header>
      <span id="inicio-conteudo" tabIndex={-1} className="block h-0 scroll-mt-20" />
    </>
  );
}
