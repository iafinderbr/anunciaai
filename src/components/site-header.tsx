"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChannelSideDock } from "@/components/channel-side-dock";
import { authClient } from "@/lib/auth-client";

function BrandMark() {
  return (
    <span className="relative grid size-9 place-items-center overflow-hidden border border-white/[0.14] bg-[#17181c] text-[14px] font-extrabold text-white">
      A
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-500" />
    </span>
  );
}

export function SiteHeader({ ctaHref = "#ferramenta" }: { ctaHref?: string }) {
  const [open, setOpen] = useState(false);
  const { data: session, isPending: sessionPending } = authClient.useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (sessionPending || !session) return;

    if (pathname === "/" && window.location.hash !== "#ferramenta") {
      router.replace("/conta");
      return;
    }

    if (pathname === "/ferramentas") {
      router.replace("/conta/ferramentas");
    }
  }, [pathname, router, session, sessionPending]);

  const accountHref = session ? "/conta" : "/entrar";
  const accountLabel = session ? "Minha conta" : "Entrar";
  const historyHref = session ? "/conta/historico" : "/entrar?voltar=/conta/historico";
  const productsHref = session ? "/conta/produtos" : "/entrar?voltar=/conta/produtos";
  const modesHref = session ? "/conta/plano" : "/entrar?voltar=/conta/plano";
  const toolsHref = session ? "/conta/ferramentas" : "/ferramentas";
  const homeHref = session ? "/conta" : "/";
  const showChannelDock = pathname === "/" || pathname === "/ferramentas" || pathname.startsWith("/gerador-");
  const navItem = "group relative inline-flex min-h-11 items-center px-1 text-[13px] font-medium text-white/58 transition-colors hover:text-white";

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#0c0d0f]/95 text-white shadow-[0_16px_46px_-38px_rgba(0,0,0,.95)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#0c0d0f]/90">
        <div className="container-page flex h-[72px] items-center justify-between gap-7">
          <Link href={homeHref} className="group flex shrink-0 items-center gap-3" aria-label="AnunciaAI, página inicial">
            <BrandMark />
            <span className="text-[19px] font-semibold tracking-[-0.05em] text-white">
              Anuncia<span className="text-brand-300">AI</span>
            </span>
          </Link>

          <nav aria-label="Navegação principal" className="hidden flex-1 items-center justify-center gap-9 md:flex">
            <Link href={toolsHref} className={navItem}>
              Ferramentas
              <span aria-hidden="true" className="absolute inset-x-1 bottom-1 h-px origin-left scale-x-0 bg-brand-500 transition-transform group-hover:scale-x-100" />
            </Link>
            <Link href="/guias" className={navItem}>
              Guias
              <span aria-hidden="true" className="absolute inset-x-1 bottom-1 h-px origin-left scale-x-0 bg-brand-500 transition-transform group-hover:scale-x-100" />
            </Link>
            <Link href="/sobre" className={navItem}>
              Sobre
              <span aria-hidden="true" className="absolute inset-x-1 bottom-1 h-px origin-left scale-x-0 bg-brand-500 transition-transform group-hover:scale-x-100" />
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link href={accountHref} className="hidden min-h-11 items-center gap-2 px-3 text-[13px] font-medium text-white/58 transition-colors hover:text-white sm:inline-flex">
              {session ? (
                <span aria-hidden="true" className="grid size-8 place-items-center border border-white/[0.12] bg-white/[0.05] text-[11px] font-bold text-white">
                  {session.user.name.trim().charAt(0).toUpperCase() || "A"}
                </span>
              ) : null}
              {accountLabel}
            </Link>
            {!session ? (
              <Link href={ctaHref} className="interactive-lift hidden min-h-11 items-center bg-brand-500 px-5 text-[13px] font-semibold text-white shadow-[0_14px_32px_-22px_rgba(241,102,42,.82)] transition-colors hover:bg-brand-600 sm:inline-flex">
                Começar grátis <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            ) : null}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="grid size-11 place-items-center border border-white/[0.12] bg-white/[0.035] text-white md:hidden"
            >
              <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                {open ? <path d="M5 5l10 10M15 5 5 15" strokeLinecap="round" /> : <path d="M4 6h12M4 10h12M4 14h12" strokeLinecap="round" />}
              </svg>
            </button>
          </div>
        </div>

        <div id="menu-mobile" hidden={!open} className="border-t border-white/[0.08] bg-[#0f1013] md:hidden">
          <nav aria-label="Navegação mobile" className="container-page max-h-[calc(100vh-72px)] overflow-y-auto py-5">
            {!session ? (
              <Link href={ctaHref} onClick={() => setOpen(false)} className="mb-5 flex min-h-14 items-center justify-between border border-brand-500/35 bg-brand-500 px-5 text-sm font-semibold text-white">
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-white/72">Começar</span>
                  <span className="mt-1 block">Criar anúncio grátis</span>
                </span>
                <span aria-hidden="true" className="text-white/70">→</span>
              </Link>
            ) : null}

            <div className="grid divide-y divide-white/[0.08] border-y border-white/[0.08]">
              <Link href={toolsHref} onClick={() => setOpen(false)} className="px-1 py-4 text-sm font-semibold text-white">Ferramentas</Link>
              <Link href="/guias" onClick={() => setOpen(false)} className="px-1 py-4 text-sm font-semibold text-white">Guias</Link>
              <Link href="/sobre" onClick={() => setOpen(false)} className="px-1 py-4 text-sm font-semibold text-white">Sobre</Link>
            </div>

            <div className="mt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/30">Conta</p>
              <div className="mt-2 grid divide-y divide-white/[0.08] border-y border-white/[0.08]">
                <Link href={productsHref} onClick={() => setOpen(false)} className="py-4 text-sm text-white/58">Produtos salvos</Link>
                <Link href={historyHref} onClick={() => setOpen(false)} className="py-4 text-sm text-white/58">Histórico</Link>
                {session ? <Link href={modesHref} onClick={() => setOpen(false)} className="py-4 text-sm text-white/58">Outros modos</Link> : null}
                <Link href={accountHref} onClick={() => setOpen(false)} className="py-4 text-sm text-white/58">{accountLabel}</Link>
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
