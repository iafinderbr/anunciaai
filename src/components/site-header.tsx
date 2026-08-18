"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChannelSideDock } from "@/components/channel-side-dock";
import { authClient } from "@/lib/auth-client";

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
  const { data: session } = authClient.useSession();
  const pathname = usePathname();

  const accountHref = session ? "/conta" : "/entrar";
  const accountLabel = session ? "Minha conta" : "Entrar";
  const historyHref = session ? "/conta/historico" : "/entrar";
  const productsHref = session ? "/conta/produtos" : "/entrar";
  const modesHref = session ? "/conta/plano" : "/entrar?callbackURL=/conta/plano";
  const showChannelDock = pathname === "/" || pathname === "/ferramentas" || pathname.startsWith("/gerador-");
  const navItem = "group relative inline-flex min-h-11 items-center px-1 text-sm font-medium text-ink-soft transition-colors hover:text-ink";

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

          <nav aria-label="Navegação principal" className="hidden flex-1 items-center justify-center gap-8 md:flex">
            <Link href="/ferramentas" className={navItem}>
              Ferramentas
              <span aria-hidden="true" className="absolute inset-x-1 bottom-1.5 h-px origin-left scale-x-0 bg-brand-500 transition-transform group-hover:scale-x-100" />
            </Link>
            <Link href="/guias" className={navItem}>
              Guias
              <span aria-hidden="true" className="absolute inset-x-1 bottom-1.5 h-px origin-left scale-x-0 bg-brand-500 transition-transform group-hover:scale-x-100" />
            </Link>
            <Link href="/sobre" className={navItem}>
              Sobre
              <span aria-hidden="true" className="absolute inset-x-1 bottom-1.5 h-px origin-left scale-x-0 bg-brand-500 transition-transform group-hover:scale-x-100" />
            </Link>
          </nav>

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
              type="button"
              onClick={() => setOpen((value) => !value)}
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

        <div id="menu-mobile" hidden={!open} className="border-t border-line bg-white md:hidden">
          <nav aria-label="Navegação mobile" className="container-page max-h-[calc(100vh-76px)] overflow-y-auto py-5">
            <Link href={ctaHref} onClick={() => setOpen(false)} className="mb-5 flex min-h-14 items-center justify-between rounded-[9px] bg-[#111216] px-5 text-sm font-semibold text-white">
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-300">Começar</span>
                <span className="mt-1 block">Criar anúncio grátis</span>
              </span>
              <span aria-hidden="true" className="text-white/60">→</span>
            </Link>

            <div className="grid divide-y divide-line border-y border-line">
              <Link href="/ferramentas" onClick={() => setOpen(false)} className="px-1 py-4 text-sm font-semibold text-ink">Ferramentas</Link>
              <Link href="/guias" onClick={() => setOpen(false)} className="px-1 py-4 text-sm font-semibold text-ink">Guias</Link>
              <Link href="/sobre" onClick={() => setOpen(false)} className="px-1 py-4 text-sm font-semibold text-ink">Sobre</Link>
            </div>

            <div className="mt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Conta</p>
              <div className="mt-2 grid divide-y divide-line border-y border-line">
                <Link href={productsHref} onClick={() => setOpen(false)} className="py-4 text-sm text-ink-soft">Produtos salvos</Link>
                <Link href={historyHref} onClick={() => setOpen(false)} className="py-4 text-sm text-ink-soft">Histórico</Link>
                {session ? <Link href={modesHref} onClick={() => setOpen(false)} className="py-4 text-sm text-ink-soft">Outros modos</Link> : null}
                <Link href={accountHref} onClick={() => setOpen(false)} className="py-4 text-sm text-ink-soft">{accountLabel}</Link>
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
