"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChannelIcon, featuredChannels, type ChannelId } from "@/components/channel-showcase";

function LibraryIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[19px]" fill="none" stroke="currentColor" strokeWidth="1.55">
      <path d="M5 5.5h14M5 12h14M5 18.5h14" strokeLinecap="round" />
      <path d="M3.2 5.5h.1M3.2 12h.1M3.2 18.5h.1" strokeLinecap="round" strokeWidth="2.4" />
    </svg>
  );
}

export function ChannelSideDock({ activePath }: { activePath?: string }) {
  const [openId, setOpenId] = useState<ChannelId | null>(null);
  const dockRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!openId) return;

    function closeFromOutside(event: PointerEvent) {
      if (!dockRef.current?.contains(event.target as Node)) setOpenId(null);
    }

    function closeFromEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenId(null);
    }

    document.addEventListener("pointerdown", closeFromOutside);
    document.addEventListener("keydown", closeFromEscape);
    return () => {
      document.removeEventListener("pointerdown", closeFromOutside);
      document.removeEventListener("keydown", closeFromEscape);
    };
  }, [openId]);

  return (
    <nav
      ref={dockRef}
      aria-label="Canais de publicação"
      data-channel-side-dock
      className="fixed bottom-0 left-0 top-[72px] z-30 hidden w-[58px] border-r border-white/[0.08] bg-[#0b0c0e] min-[1380px]:flex min-[1380px]:flex-col"
    >
      <div className="flex flex-1 flex-col items-center pt-5">
        <span className="mb-4 h-px w-5 bg-brand-500/80" aria-hidden="true" />
        <span className="sr-only">Escolha um canal</span>

        {featuredChannels.map((channel) => {
          const active = activePath === channel.href;
          const expanded = openId === channel.id;
          const panelId = `channel-panel-${channel.id}`;

          return (
            <div key={channel.id} className="relative w-full">
              <button
                type="button"
                aria-label={channel.action}
                aria-expanded={expanded}
                aria-controls={expanded ? panelId : undefined}
                title={channel.label}
                onClick={() => setOpenId((current) => (current === channel.id ? null : channel.id))}
                className={`group relative grid h-[52px] w-full place-items-center border-y border-transparent outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500/70 ${
                  active || expanded
                    ? "bg-white/[0.075] text-white"
                    : "text-white/36 hover:bg-white/[0.045] hover:text-white/82"
                }`}
              >
                {active ? <span aria-hidden="true" className="absolute inset-y-3 left-0 w-[2px] bg-brand-500" /> : null}
                <ChannelIcon id={channel.id} className="size-[20px]" />
                {!expanded ? (
                  <span className="pointer-events-none absolute left-[calc(100%+10px)] top-1/2 z-50 -translate-y-1/2 whitespace-nowrap border border-white/[0.09] bg-[#111216] px-3 py-2 text-[11px] font-medium text-white/72 opacity-0 shadow-[0_18px_50px_-30px_rgba(0,0,0,.9)] transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    {channel.label}
                  </span>
                ) : null}
              </button>

              {expanded ? (
                <div
                  id={panelId}
                  className="absolute left-[calc(100%+1px)] top-0 w-[330px] border border-white/[0.10] bg-[#111216] text-white shadow-[0_28px_90px_-34px_rgba(0,0,0,.95)]"
                >
                  <div className="border-b border-white/[0.08] px-6 py-5">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-brand-300">{channel.category}</p>
                        <p className="mt-2 text-[18px] font-semibold tracking-[-0.035em] text-white">{channel.label}</p>
                      </div>
                      <span className="grid size-9 shrink-0 place-items-center border border-white/[0.10] text-white/56">
                        <ChannelIcon id={channel.id} className="size-[18px]" />
                      </span>
                    </div>
                    <p className="mt-4 text-[12px] leading-6 text-white/42">{channel.description}</p>
                  </div>

                  <div className="grid grid-cols-[1fr_auto] border-t border-white/[0.02]">
                    <Link
                      href={channel.href}
                      onClick={() => setOpenId(null)}
                      className="flex min-h-12 items-center px-5 text-[12px] font-semibold text-white transition-colors hover:bg-white/[0.045] hover:text-brand-300"
                    >
                      Abrir gerador
                    </Link>
                    <span aria-hidden="true" className="grid w-12 place-items-center border-l border-white/[0.08] text-brand-300">→</span>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <Link
        href="/ferramentas"
        aria-label="Ver todas as ferramentas"
        title="Todas as ferramentas"
        className="group relative grid h-[58px] place-items-center border-t border-white/[0.08] text-white/30 transition-colors hover:bg-white/[0.045] hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500/70"
      >
        <LibraryIcon />
        <span className="pointer-events-none absolute bottom-1/2 left-[calc(100%+10px)] z-50 translate-y-1/2 whitespace-nowrap border border-white/[0.09] bg-[#111216] px-3 py-2 text-[11px] font-medium text-white/72 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          Todas as ferramentas
        </span>
      </Link>
    </nav>
  );
}
