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

function BrandMark() {
  return (
    <span className="relative grid size-10 place-items-center overflow-hidden rounded-[8px] bg-[#111216] text-[15px] font-extrabold text-white shadow-[0_10px_24px_-18px_rgba(15,15,18,.72)]">
      A
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] bg-brand-500" />
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
    "inline-flex min-h-11 items-center gap-1.5 border-b-2 border-transparent px-1 text-sm font-medium text-ink-soft transition-colors hover:border-black/10 hover:text-ink";

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-black/[0.08] bg-white/96 shadow-[0_10px_30px_-28px_rgba(15,15,18,.30)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/90">
        <div className="container-page flex h-[76px] items-center justify-between gap-7">
          <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="AnunciaAI, página inicial">
            <BrandMark />
            <span className="text-[20px] font-semibold tracking-[-0.05em] text-ink">
              Anuncia<span className="text-brand-600">AI</span>
            </span>
          </Link>

          <div ref={desktopNavRef} className="relative hidden flex-1 items-center justify-center md:flex">
            <nav aria-label="Navegação principal" className="flex items-center gap-7">
              <button
                type="button"
                onClick={() => setDesktopMenu((current) => (current === "tools" ? null : "tools"))}
                aria-expanded={desktopMenu === "tools"}
                className={`${navItem} ${desktopMenu === "tools" ? "border-brand-500 text-ink" : ""}`}
              >
                Ferramentas
                <Chevron open={desktopMenu === "tools"} />
              </button>
              <button
                type="button"
                onClick={() => setDesktopMenu((current) => (current === "guides" ? null : "guides"))}
                aria-expanded={desktopMenu === "guides"}
                className={`${navItem} ${desktopMenu === "guides" ? "border-brand-500 text-ink" : ""}`}
              >
                Guias
                <Chevron open={desktopMenu === "guides"} />
              </button>
              <Link href="/#precos" onClick={closeDesktopMenu} className={navItem}>Preços</Link>
              <Link href="/sobre" onClick={closeDesktopMenu} className={navItem}>Sobre</Link>
            </nav>

            {desktopMenu === "tools" ? (
              <div id="ferramentas-menu" className="animate-menu-in absolute left-1/2 top-[calc(100%+1rem)] w-[720px] -translate-x-1/2 overflow-hidden rounded-[12px] border border-black/[0.10] bg-white shadow-[0_32px_90px_-42px_rgba(15,15,18,.42)]">
                <div className="grid grid-cols-[1.1fr_0.9fr]">
                  <div className="p-4">
                    <Link href="/#ferramenta" onClick={closeDesktopMenu} className="group block rounded-[9px] bg-[#111216] p-6 text-white transition-colors hover:bg-[#17181c]">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">Fluxo principal</span>
                        <span className="text-white/38 transition-colors group-hover:text-brand-300"><Arrow /></span>
                      </div>
                      <span className="mt-8 block text-xl font-semibold tracking-[-0.035em] text-white">Criar anúncio completo</span>
                      <span className="mt-3 block max-w-sm text-sm leading-6 text-white/50">Título, descrição, benefícios, ficha técnica e SEO organizados em um único fluxo para revisão.</span>
                      <p className="mt-6 border-t border-white/[0.09] pt-4 text-[11px] font-medium text-white/34">R$ 0 para começar · sem cartão · revisão antes de publicar</p>
                    </Link>

                    <Link href="/ferramentas" onClick={closeDesktopMenu} className="group mt-3 flex items-start justify-between gap-6 border-t border-line px-2 py-5 transition-colors hover:text-brand-700">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Biblioteca</span>
                        <span className="mt-2 block text-[15px] font-semibold text-ink group-hover:text-brand-700">Todos os geradores</span>
                        <span className="mt-1.5 block text-xs leading-5 text-muted">Escolha por canal ou por objetivo sem navegar por uma lista extensa.</span>
                      </div>
                      <span className="mt-1 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-brand-700"><Arrow /></span>
                    </Link>
                  </div>

                  <div className="border-l border-line bg-[#f7f7f4] p-5">
                    <p className="pb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">Workspace</p>
                    <Link href={productsHref} onClick={closeDesktopMenu} className="group block border-t border-line py-5">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-semibold text-ink transition-colors group-hover:text-brand-700">Produtos salvos</span>
                        <span className="text-line-strong transition-colors group-hover:text-brand-700">→</span>
                      </div>
                      <span className="mt-2 block text-xs leading-5 text-muted">{session ? "Reutilize informações já organizadas." : "Entre para acessar sua biblioteca."}</span>
                    </Link>
                    <Link href={historyHref} onClick={closeDesktopMenu} className="group block border-t border-line py-5">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-semibold text-ink transition-colors group-hover:text-brand-700">Histórico</span>
                        <span className="text-line-strong transition-colors group-hover:text-brand-700">→</span>
                      </div>
                      <span className="mt-2 block text-xs leading-5 text-muted">{session ? "Retome resultados que você decidiu guardar." : "Entre para acessar seus resultados."}</span>
                    </Link>
                    <p className="border-t border-line pt-5 text-[11px] leading-5 text-muted">Criação e organização ficam separadas para o fluxo continuar objetivo.</p>
                  </div>
                </div>
              </div>
            ) : null}

            {desktopMenu === "guides" ? (
              <div id="guias-menu" className="animate-menu-in absolute left-1/2 top-[calc(100%+1rem)] w-[680px] -translate-x-1/2 overflow-hidden rounded-[12px] border border-black/[0.10] bg-white shadow-[0_32px_90px_-42px_rgba(15,15,18,.42)]">
                <div className="flex items-center justify-between border-b border-line bg-[#f7f7f4] px-6 py-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">Conteúdo prático</p>
                    <p className="mt-2 text-sm text-muted">Aprenda por canal e vá direto para a ferramenta relacionada.</p>
                  </div>
                  <Link href="/guias" onClick={closeDesktopMenu} className="inline-flex items-center gap-2 border-b border-ink pb-1 text-xs font-semibold text-ink transition-colors hover:border-brand-700 hover:text-brand-700">
                    Ver central <Arrow />
                  </Link>
                </div>
                <div className="grid grid-cols-2">
                  {guideShortcuts.map((guide, index) => (
                    <Link key={guide.href} href={guide.href} onClick={closeDesktopMenu} className={`group p-6 transition-colors hover:bg-[#fafaf8] ${index % 2 === 0 ? "border-r border-line" : ""} ${index < 2 ? "border-b border-line" : ""}`}>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[10px] font-semibold tabular-nums text-muted">0{index + 1}</span>
                        <span className="text-line-strong transition-all group-hover:translate-x-0.5 group-hover:text-brand-700">→</span>
                      </div>
                      <span className="mt-7 block text-[15px] font-semibold text-ink transition-colors group-hover:text-brand-700">{guide.label}</span>
                      <span className="mt-2 block text-xs leading-5 text-muted">{guide.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link href={accountHref} className="hidden min-h-11 items-center gap-2 px-3 text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:inline-flex">
              {session ? (
                <span aria-hidden="true" className="grid size-8 place-items-center rounded-[8px] bg-[#f2f2ef] text-[11px] font-bold text-ink ring-1 ring-inset ring-line-strong">
                  {session.user.name.trim().charAt(0).toUpperCase() || "A"}
                </span>
              ) : null}
              {accountLabel}
            </Link>
            <Link href={ctaHref} className="interactive-lift hidden min-h-11 items-center rounded-[8px] bg-brand-500 px-5 text-sm font-semibold text-white shadow-[0_12px_28px_-18px_rgba(241,102,42,.8)] transition-colors hover:bg-brand-600 sm:inline-flex">
              Começar grátis <span aria-hidden="true" className="ml-2">→</span>
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
              className="grid size-11 place-items-center rounded-[8px] border border-line-strong bg-white text-ink md:hidden"
            >
              <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                {open ? <path d="M5 5l10 10M15 5 5 15" strokeLinecap="round" /> : <path d="M4 6h12M4 10h12M4 14h12" strokeLinecap="round" />}
              </svg>
            </button>
          </div>
        </div>

        <div id="menu-mobile" hidden={!open} className="animate-menu-in border-t border-line bg-white md:hidden">
          <nav aria-label="Navegação mobile" className="container-page max-h-[calc(100vh-76px)] overflow-y-auto py-5">
            <Link href={ctaHref} onClick={closeMobileMenu} className="mb-5 flex min-h-14 items-center justify-between rounded-[9px] bg-[#111216] px-5 text-sm font-semibold text-white">
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-300">Começar</span>
                <span className="mt-1 block">Criar anúncio grátis</span>
              </span>
              <span aria-hidden="true" className="text-white/60">→</span>
            </Link>

            <div className="grid divide-y divide-line border-y border-line">
              <Link href="/ferramentas" onClick={closeMobileMenu} className="px-1 py-4 text-sm font-semibold text-ink">Ferramentas</Link>
              <Link href="/guias" onClick={closeMobileMenu} className="px-1 py-4 text-sm font-semibold text-ink">Guias</Link>
              <Link href="/#precos" onClick={closeMobileMenu} className="px-1 py-4 text-sm font-semibold text-ink">Preços</Link>
              <Link href="/sobre" onClick={closeMobileMenu} className="px-1 py-4 text-sm font-semibold text-ink">Sobre</Link>
            </div>

            <div className="mt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Workspace</p>
              <div className="mt-2 grid divide-y divide-line border-y border-line">
                <Link href={productsHref} onClick={closeMobileMenu} className="py-4 text-sm text-ink-soft">Produtos salvos</Link>
                <Link href={historyHref} onClick={closeMobileMenu} className="py-4 text-sm text-ink-soft">Histórico</Link>
                <Link href={accountHref} onClick={closeMobileMenu} className="py-4 text-sm text-ink-soft">{accountLabel}</Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {showChannelDock ? <ChannelSideDock activePath={pathname} /> : null}
      <span id="inicio-conteudo" tabIndex={-1} className="block h-0 scroll-mt-24" />
    </>
  );
}
