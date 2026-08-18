"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChannelSideDock } from "@/components/channel-showcase";
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

function BrandMark({ darkBorder = false }: { darkBorder?: boolean }) {
  return (
    <span className="relative grid size-9 place-items-center rounded-[11px] bg-[#151619] text-sm font-extrabold text-white shadow-[0_8px_20px_-12px_rgba(15,15,18,.7)]">
      A
      <span
        aria-hidden="true"
        className={`absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 bg-brand-500 ${darkBorder ? "border-[#151619]" : "border-white"}`}
      />
    </span>
  );
}

export function SiteHeader({ ctaHref = "#ferramenta" }: { ctaHref?: string }) {
  const [open, setOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const { data: session } = authClient.useSession();
  const pathname = usePathname();

  const accountHref = session ? "/conta" : "/entrar";
  const accountLabel = session ? "Minha conta" : "Entrar";
  const historyHref = session ? "/conta/historico" : "/entrar";
  const productsHref = session ? "/conta/produtos" : "/entrar";
  const showChannelDock = pathname.startsWith("/gerador-");

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
  const navItem =
    "inline-flex min-h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-ink-soft transition-all hover:bg-[#f4f4f1] hover:text-ink";

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-black/[0.07] bg-white/95 shadow-[0_8px_24px_-22px_rgba(15,15,18,.24)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/88">
        <div className="container-page flex h-[68px] items-center justify-between gap-5">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5" aria-label="AnunciaAI, página inicial">
            <BrandMark />
            <span className="text-[18px] font-semibold tracking-[-0.045em] text-ink">
              Anuncia<span className="text-brand-600">AI</span>
            </span>
            <span className="hidden rounded-full border border-line bg-[#fafaf8] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-muted lg:inline-flex">
              Beta
            </span>
          </Link>

          <div ref={desktopNavRef} className="relative hidden flex-1 items-center justify-center md:flex">
            <nav aria-label="Navegação principal" className="flex items-center gap-0.5 rounded-xl border border-black/[0.04] bg-[#fafaf8]/80 p-1">
              <button
                type="button"
                onClick={() => setDesktopMenu((current) => (current === "tools" ? null : "tools"))}
                aria-expanded={desktopMenu === "tools"}
                className={`${navItem} ${desktopMenu === "tools" ? "bg-white text-ink shadow-[0_2px_8px_-5px_rgba(15,15,18,.28)]" : ""}`}
              >
                Ferramentas
                <Chevron open={desktopMenu === "tools"} />
              </button>
              <button
                type="button"
                onClick={() => setDesktopMenu((current) => (current === "guides" ? null : "guides"))}
                aria-expanded={desktopMenu === "guides"}
                className={`${navItem} ${desktopMenu === "guides" ? "bg-white text-ink shadow-[0_2px_8px_-5px_rgba(15,15,18,.28)]" : ""}`}
              >
                Guias
                <Chevron open={desktopMenu === "guides"} />
              </button>
              <Link href="/#precos" onClick={closeDesktopMenu} className={navItem}>Preços</Link>
              <Link href="/sobre" onClick={closeDesktopMenu} className={navItem}>Sobre</Link>
            </nav>

            {desktopMenu === "tools" ? (
              <div id="ferramentas-menu" className="animate-menu-in absolute left-1/2 top-[calc(100%+0.85rem)] w-[660px] -translate-x-1/2 overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_28px_80px_-38px_rgba(15,15,18,.42)]">
                <div className="grid grid-cols-[1.08fr_0.92fr]">
                  <div className="p-3">
                    <Link href="/#ferramenta" onClick={closeDesktopMenu} className="group block rounded-xl bg-[#111216] p-5 text-white transition-transform hover:-translate-y-0.5">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-300">Começar agora</span>
                        <span className="grid size-7 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white/60 transition-colors group-hover:border-brand-500/40 group-hover:text-brand-300"><Arrow /></span>
                      </div>
                      <span className="mt-6 block text-lg font-semibold tracking-[-0.03em] text-white">Criar anúncio completo</span>
                      <span className="mt-2 block max-w-sm text-xs leading-5 text-white/48">Organize título, descrição, benefícios, ficha técnica e SEO em um único fluxo.</span>
                      <div className="mt-5 flex flex-wrap gap-2 text-[9px] font-medium text-white/34">
                        <span className="rounded-md border border-white/[0.08] px-2 py-1">R$ 0</span>
                        <span className="rounded-md border border-white/[0.08] px-2 py-1">Sem cartão</span>
                        <span className="rounded-md border border-white/[0.08] px-2 py-1">Revisão antes de publicar</span>
                      </div>
                    </Link>

                    <Link href="/ferramentas" onClick={closeDesktopMenu} className="group mt-2 flex items-start justify-between gap-5 rounded-xl p-4 transition-colors hover:bg-[#f7f7f4]">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">Biblioteca</span>
                        <span className="mt-1.5 block text-sm font-semibold text-ink">Todos os geradores</span>
                        <span className="mt-1 block text-xs leading-5 text-muted">Escolha a ferramenta por canal ou tipo de conteúdo.</span>
                      </div>
                      <span className="mt-1 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-brand-700"><Arrow /></span>
                    </Link>
                  </div>

                  <div className="border-l border-line bg-[#fafaf8] p-3">
                    <p className="px-3 pb-2 pt-2 text-[9px] font-semibold uppercase tracking-[0.13em] text-muted">Seu workspace</p>
                    <Link href={productsHref} onClick={closeDesktopMenu} className="group block rounded-xl p-4 transition-colors hover:bg-white">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-semibold text-ink">Produtos salvos</span>
                        <span className="text-line-strong transition-colors group-hover:text-brand-700">→</span>
                      </div>
                      <span className="mt-1.5 block text-xs leading-5 text-muted">{session ? "Reutilize informações já organizadas." : "Entre para acessar sua biblioteca."}</span>
                    </Link>
                    <Link href={historyHref} onClick={closeDesktopMenu} className="group block rounded-xl p-4 transition-colors hover:bg-white">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-semibold text-ink">Histórico</span>
                        <span className="text-line-strong transition-colors group-hover:text-brand-700">→</span>
                      </div>
                      <span className="mt-1.5 block text-xs leading-5 text-muted">{session ? "Retome resultados que você decidiu guardar." : "Entre para acessar seus resultados."}</span>
                    </Link>
                    <div className="mx-3 mt-3 border-t border-line pt-4">
                      <p className="text-[10px] leading-5 text-muted">Criação e organização ficam separadas para o fluxo continuar simples.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {desktopMenu === "guides" ? (
              <div id="guias-menu" className="animate-menu-in absolute left-1/2 top-[calc(100%+0.85rem)] w-[640px] -translate-x-1/2 overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_28px_80px_-38px_rgba(15,15,18,.42)]">
                <div className="flex items-center justify-between border-b border-line bg-[#fafaf8] px-5 py-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-700">Conteúdo prático</p>
                    <p className="mt-1 text-xs text-muted">Aprenda por canal e vá direto para a ferramenta certa.</p>
                  </div>
                  <Link href="/guias" onClick={closeDesktopMenu} className="inline-flex items-center gap-1.5 rounded-lg border border-line-strong bg-white px-3 py-2 text-xs font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700">
                    Ver todos <Arrow />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-px bg-line p-px">
                  {guideShortcuts.map((guide, index) => (
                    <Link key={guide.href} href={guide.href} onClick={closeDesktopMenu} className="group bg-white p-5 transition-colors hover:bg-[#fafaf8]">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[9px] font-semibold tabular-nums text-muted">0{index + 1}</span>
                        <span className="text-line-strong transition-all group-hover:translate-x-0.5 group-hover:text-brand-700">→</span>
                      </div>
                      <span className="mt-5 block text-sm font-semibold text-ink transition-colors group-hover:text-brand-700">{guide.label}</span>
                      <span className="mt-1.5 block text-xs leading-5 text-muted">{guide.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            <Link href={accountHref} className="hidden min-h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium text-ink-soft transition-colors hover:bg-[#f4f4f1] hover:text-ink sm:inline-flex">
              {session ? (
                <span aria-hidden="true" className="grid size-7 place-items-center rounded-full bg-[#f4f4f1] text-[10px] font-bold text-ink ring-1 ring-inset ring-line-strong">
                  {session.user.name.trim().charAt(0).toUpperCase() || "A"}
                </span>
              ) : null}
              {accountLabel}
            </Link>
            <Link href={ctaHref} className="interactive-lift hidden min-h-10 items-center rounded-lg bg-brand-500 px-4 text-sm font-semibold text-white shadow-[0_10px_24px_-14px_rgba(241,102,42,.9)] transition-colors hover:bg-brand-600 sm:inline-flex">
              Começar grátis <span aria-hidden="true" className="ml-1.5">→</span>
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
              className="grid size-10 place-items-center rounded-lg border border-line-strong bg-white text-ink shadow-[0_6px_18px_-15px_rgba(15,15,18,.5)] md:hidden"
            >
              <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                {open ? <path d="M5 5l10 10M15 5 5 15" strokeLinecap="round" /> : <path d="M4 6h12M4 10h12M4 14h12" strokeLinecap="round" />}
              </svg>
            </button>
          </div>
        </div>

        <div id="menu-mobile" hidden={!open} className="animate-menu-in border-t border-line bg-white md:hidden">
          <nav aria-label="Navegação mobile" className="container-page max-h-[calc(100vh-68px)] overflow-y-auto py-4">
            <Link href={ctaHref} onClick={closeMobileMenu} className="mb-4 flex min-h-12 items-center justify-between rounded-xl bg-[#111216] px-4 text-sm font-semibold text-white">
              <span>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-300">Começar</span>
                <span className="mt-0.5 block">Criar anúncio grátis</span>
              </span>
              <span aria-hidden="true" className="text-white/60">→</span>
            </Link>

            <div className="grid gap-1">
              <Link href="/ferramentas" onClick={closeMobileMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-ink hover:bg-canvas">Ferramentas</Link>
              <Link href="/guias" onClick={closeMobileMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-ink hover:bg-canvas">Guias</Link>
              <Link href="/#precos" onClick={closeMobileMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-ink hover:bg-canvas">Preços</Link>
              <Link href="/sobre" onClick={closeMobileMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-ink hover:bg-canvas">Sobre</Link>
            </div>

            <div className="mt-4 border-t border-line pt-4">
              <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">Seu workspace</p>
              <div className="mt-1 grid gap-1">
                <Link href={productsHref} onClick={closeMobileMenu} className="rounded-lg px-3 py-3 text-sm text-ink-soft hover:bg-canvas">Produtos salvos</Link>
                <Link href={historyHref} onClick={closeMobileMenu} className="rounded-lg px-3 py-3 text-sm text-ink-soft hover:bg-canvas">Histórico</Link>
                <Link href={accountHref} onClick={closeMobileMenu} className="rounded-lg px-3 py-3 text-sm text-ink-soft hover:bg-canvas">{accountLabel}</Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {showChannelDock ? <ChannelSideDock activePath={pathname} /> : null}
      <span id="inicio-conteudo" tabIndex={-1} className="block h-0 scroll-mt-20" />
    </>
  );
}
