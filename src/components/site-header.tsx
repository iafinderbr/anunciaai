"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";

type DesktopMenu = "tools" | "guides" | null;
type MobileSection = "tools" | "guides" | null;

const guideShortcuts = [
  {
    href: "/guias",
    eyebrow: "Central",
    title: "Todos os guias",
    description: "Conteúdo prático para vender melhor online.",
  },
  {
    href: "/como-criar-anuncio-no-mercado-livre",
    eyebrow: "Marketplace",
    title: "Mercado Livre",
    description: "Estrutura, título e descrição para anúncios.",
  },
  {
    href: "/como-criar-anuncio-na-shopee",
    eyebrow: "Marketplace",
    title: "Shopee",
    description: "Boas práticas para montar páginas de produto.",
  },
  {
    href: "/seo-para-pagina-de-produto",
    eyebrow: "Conteúdo",
    title: "SEO para produtos",
    description: "Organize páginas para busca e conversão.",
  },
] as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteHeader({ ctaHref = "#ferramenta" }: { ctaHref?: string }) {
  const [open, setOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null);
  const [mobileSection, setMobileSection] = useState<MobileSection>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const { data: session } = authClient.useSession();

  const accountHref = session ? "/conta" : "/entrar";
  const accountLabel = session ? "Minha conta" : "Entrar";
  const mobileAccountLabel = session ? "Minha conta" : "Entrar na conta";
  const historyHref = session ? "/conta/historico" : "/entrar";
  const productsHref = session ? "/conta/produtos" : "/entrar";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (desktopMenu) setDesktopMenu(null);
      if (open) {
        setOpen(false);
        setMobileSection(null);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!desktopMenu) return;
      if (desktopNavRef.current?.contains(event.target as Node)) return;
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
  const closeMobileMenu = () => {
    setOpen(false);
    setMobileSection(null);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-white/92 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5" aria-label="AnunciaAI, página inicial">
            <span className="grid size-8 place-items-center rounded-lg bg-ink text-sm font-bold text-white">
              A
              <span className="sr-only">AnunciaAI</span>
            </span>
            <span className="text-[17px] font-semibold tracking-tight">
              Anuncia<span className="text-brand-600">AI</span>
            </span>
          </Link>

          <div ref={desktopNavRef} className="relative hidden md:block">
            <nav aria-label="Navegação principal" className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setDesktopMenu((current) => (current === "tools" ? null : "tools"))}
                aria-expanded={desktopMenu === "tools"}
                aria-controls="ferramentas-menu"
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-canvas hover:text-ink"
              >
                Ferramentas
                <Chevron open={desktopMenu === "tools"} />
              </button>

              <button
                type="button"
                onClick={() => setDesktopMenu((current) => (current === "guides" ? null : "guides"))}
                aria-expanded={desktopMenu === "guides"}
                aria-controls="guias-menu"
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-canvas hover:text-ink"
              >
                Guias
                <Chevron open={desktopMenu === "guides"} />
              </button>

              <Link
                href="/#precos"
                onClick={closeDesktopMenu}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-canvas hover:text-ink"
              >
                Preços
              </Link>
              <Link
                href="/sobre"
                onClick={closeDesktopMenu}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-canvas hover:text-ink"
              >
                Sobre
              </Link>
            </nav>

            {desktopMenu === "tools" ? (
              <div
                id="ferramentas-menu"
                className="absolute left-1/2 top-[calc(100%+0.7rem)] z-50 w-[620px] -translate-x-1/2 overflow-hidden rounded-2xl border border-line bg-white shadow-lift"
              >
                <div className="flex items-center justify-between border-b border-line bg-canvas/70 px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">Ferramentas</p>
                    <p className="mt-0.5 text-xs text-muted">Tudo que você usa, sem poluir o menu.</p>
                  </div>
                  <Link
                    href="/ferramentas"
                    onClick={closeDesktopMenu}
                    className="rounded-lg border border-line-strong bg-white px-3 py-2 text-xs font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
                  >
                    Ver central →
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2 p-3">
                  <Link
                    href="/#ferramenta"
                    onClick={closeDesktopMenu}
                    className="group rounded-xl border border-brand-200 bg-brand-50/55 p-4 transition-colors hover:border-brand-400"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-600">Principal</span>
                    <span className="mt-1 block text-sm font-semibold text-ink group-hover:text-brand-700">Criar anúncio completo</span>
                    <span className="mt-1 block text-xs leading-5 text-muted">Título, descrição, benefícios e SEO.</span>
                  </Link>

                  <Link
                    href="/ferramentas#geradores"
                    onClick={closeDesktopMenu}
                    className="group rounded-xl border border-line bg-white p-4 transition-colors hover:border-brand-300"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">Geradores</span>
                    <span className="mt-1 block text-sm font-semibold text-ink group-hover:text-brand-700">Escolher ferramenta</span>
                    <span className="mt-1 block text-xs leading-5 text-muted">Mercado Livre, Shopee, OLX e mais.</span>
                  </Link>

                  <Link
                    href={productsHref}
                    onClick={closeDesktopMenu}
                    className="group rounded-xl border border-line bg-white p-4 transition-colors hover:border-brand-300"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">Biblioteca</span>
                    <span className="mt-1 block text-sm font-semibold text-ink group-hover:text-brand-700">Produtos salvos</span>
                    <span className="mt-1 block text-xs leading-5 text-muted">{session ? "Reutilize dados sem preencher tudo de novo." : "Entre para criar sua biblioteca privada."}</span>
                  </Link>

                  <Link
                    href={historyHref}
                    onClick={closeDesktopMenu}
                    className="group rounded-xl border border-line bg-white p-4 transition-colors hover:border-brand-300"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">Conta</span>
                    <span className="mt-1 block text-sm font-semibold text-ink group-hover:text-brand-700">Histórico salvo</span>
                    <span className="mt-1 block text-xs leading-5 text-muted">{session ? "Volte aos resultados que você guardou." : "Entre para acessar seus resultados."}</span>
                  </Link>
                </div>
              </div>
            ) : null}

            {desktopMenu === "guides" ? (
              <div
                id="guias-menu"
                className="absolute left-1/2 top-[calc(100%+0.7rem)] z-50 w-[620px] -translate-x-1/2 overflow-hidden rounded-2xl border border-line bg-white shadow-lift"
              >
                <div className="flex items-center justify-between border-b border-line bg-canvas/70 px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">Guias práticos</p>
                    <p className="mt-0.5 text-xs text-muted">Aprenda sem transformar o rodapé em uma lista gigante.</p>
                  </div>
                  <Link
                    href="/guias"
                    onClick={closeDesktopMenu}
                    className="rounded-lg border border-line-strong bg-white px-3 py-2 text-xs font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
                  >
                    Ver todos →
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2 p-3">
                  {guideShortcuts.map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      onClick={closeDesktopMenu}
                      className="group rounded-xl border border-line bg-white p-4 transition-colors hover:border-brand-300 hover:bg-canvas/60"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">{guide.eyebrow}</span>
                      <span className="mt-1 block text-sm font-semibold text-ink group-hover:text-brand-700">{guide.title}</span>
                      <span className="mt-1 block text-xs leading-5 text-muted">{guide.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={accountHref}
              className="hidden items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-soft transition-colors hover:bg-canvas hover:text-brand-700 sm:inline-flex"
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
                setDesktopMenu(null);
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
          <nav aria-label="Navegação mobile" className="container-page py-2">
            <button
              type="button"
              onClick={() => setMobileSection((current) => (current === "tools" ? null : "tools"))}
              className="flex w-full items-center justify-between rounded-xl px-1 py-3 text-left text-sm font-semibold text-ink"
              aria-expanded={mobileSection === "tools"}
            >
              Ferramentas
              <Chevron open={mobileSection === "tools"} />
            </button>
            {mobileSection === "tools" ? (
              <div className="mb-2 grid gap-1 rounded-xl border border-line bg-canvas p-2">
                <Link href="/#ferramenta" onClick={closeMobileMenu} className="rounded-lg bg-white px-3 py-2.5 text-sm font-medium text-ink">Criar anúncio</Link>
                <Link href="/ferramentas" onClick={closeMobileMenu} className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft">Todos os geradores</Link>
                <Link href={productsHref} onClick={closeMobileMenu} className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft">Produtos salvos</Link>
                <Link href={historyHref} onClick={closeMobileMenu} className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft">Histórico</Link>
              </div>
            ) : null}

            <button
              type="button"
              onClick={() => setMobileSection((current) => (current === "guides" ? null : "guides"))}
              className="flex w-full items-center justify-between rounded-xl px-1 py-3 text-left text-sm font-semibold text-ink"
              aria-expanded={mobileSection === "guides"}
            >
              Guias
              <Chevron open={mobileSection === "guides"} />
            </button>
            {mobileSection === "guides" ? (
              <div className="mb-2 grid gap-1 rounded-xl border border-line bg-canvas p-2">
                <Link href="/guias" onClick={closeMobileMenu} className="rounded-lg bg-white px-3 py-2.5 text-sm font-medium text-ink">Todos os guias</Link>
                {guideShortcuts.slice(1).map((guide) => (
                  <Link key={guide.href} href={guide.href} onClick={closeMobileMenu} className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft">
                    {guide.title}
                  </Link>
                ))}
              </div>
            ) : null}

            <Link href="/#precos" onClick={closeMobileMenu} className="block rounded-xl px-1 py-3 text-sm font-medium text-ink-soft">Preços</Link>
            <Link href="/sobre" onClick={closeMobileMenu} className="block rounded-xl px-1 py-3 text-sm font-medium text-ink-soft">Sobre</Link>
            <Link href={accountHref} onClick={closeMobileMenu} className="block rounded-xl px-1 py-3 text-sm font-semibold text-ink">{mobileAccountLabel}</Link>
            <Link href={ctaHref} onClick={closeMobileMenu} className="my-2 block rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white">Começar grátis</Link>
          </nav>
        </div>
      </header>
      <span id="inicio-conteudo" tabIndex={-1} className="block h-0 scroll-mt-20" />
    </>
  );
}
