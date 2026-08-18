"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChannelIcon, featuredChannels, type ChannelId } from "@/components/channel-showcase";

function LibraryIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[20px]" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="4" width="6" height="6" rx="1.2" />
      <rect x="14" y="4" width="6" height="6" rx="1.2" />
      <rect x="4" y="14" width="6" height="6" rx="1.2" />
      <rect x="14" y="14" width="6" height="6" rx="1.2" />
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
      className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 min-[1380px]:block"
    >
      <div className="relative overflow-visible rounded-[12px] border border-white/[0.10] bg-[#111216]/95 p-1.5 shadow-[0_28px_85px_-42px_rgba(0,0,0,.75)] backdrop-blur-xl">
        <span className="sr-only">Escolha um canal</span>

        {featuredChannels.map((channel, index) => {
          const active = activePath === channel.href;
          const expanded = openId === channel.id;
          const panelId = `channel-panel-${channel.id}`;

          return (
            <div key={channel.id} className={index ? "mt-1" : ""}>
              <button
                type="button"
                aria-label={channel.action}
                aria-expanded={expanded}
                aria-controls={expanded ? panelId : undefined}
                onClick={() => setOpenId((current) => (current === channel.id ? null : channel.id))}
                className={`group relative grid size-12 place-items-center rounded-[8px] outline-none transition-all focus-visible:ring-2 focus-visible:ring-brand-500/70 ${
                  active || expanded
                    ? "bg-white text-[#111216] shadow-[0_10px_24px_-18px_rgba(255,255,255,.45)]"
                    : "text-white/48 hover:bg-white/[0.065] hover:text-white"
                }`}
              >
                {active ? <span aria-hidden="true" className="absolute -left-1.5 h-5 w-[2px] rounded-full bg-brand-500" /> : null}
                <ChannelIcon id={channel.id} className="size-[22px]" />
                <span aria-hidden="true" className={`absolute bottom-1.5 size-1 rounded-full transition-opacity ${expanded ? "bg-brand-500 opacity-100" : "opacity-0"}`} />
                {!expanded ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[calc(100%+10px)] top-1/2 z-10 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-[7px] border border-white/[0.09] bg-[#111216] px-3 py-2 text-[11px] font-semibold tracking-[-0.01em] text-white/78 opacity-0 shadow-[0_14px_38px_-22px_rgba(0,0,0,.9)] transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                  >
                    {channel.label}
                  </span>
                ) : null}
              </button>

              {expanded ? (
                <div
                  id={panelId}
                  className="absolute left-[calc(100%+12px)] top-1/2 w-[310px] -translate-y-1/2 overflow-hidden rounded-[12px] border border-white/[0.10] bg-[#111216] text-white shadow-[0_30px_90px_-38px_rgba(0,0,0,.88)]"
                >
                  <div className="border-b border-white/[0.08] px-5 py-5">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300">{channel.category}</p>
                        <p className="mt-2 text-[17px] font-semibold tracking-[-0.035em] text-white">{channel.label}</p>
                      </div>
                      <span className="grid size-10 shrink-0 place-items-center rounded-[8px] border border-white/[0.10] bg-white/[0.04] text-white/72">
                        <ChannelIcon id={channel.id} className="size-[20px]" />
                      </span>
                    </div>
                    <p className="mt-4 text-[12px] leading-6 text-white/42">{channel.description}</p>
                  </div>

                  <div className="p-2">
                    <Link
                      href={channel.href}
                      onClick={() => setOpenId(null)}
                      className="flex min-h-12 items-center justify-between rounded-[8px] bg-white px-4 text-[13px] font-semibold text-[#111216] transition-colors hover:bg-brand-50"
                    >
                      Abrir gerador
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href="/ferramentas"
                      onClick={() => setOpenId(null)}
                      className="mt-1 flex min-h-11 items-center justify-between rounded-[8px] px-4 text-[12px] font-medium text-white/48 transition-colors hover:bg-white/[0.05] hover:text-white"
                    >
                      Ver biblioteca completa
                      <span aria-hidden="true" className="text-white/24">↗</span>
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}

        <div className="my-1.5 h-px bg-white/[0.08]" />
        <Link
          href="/ferramentas"
          aria-label="Ver todas as ferramentas"
          className="group grid size-12 place-items-center rounded-[8px] text-white/34 transition-colors hover:bg-white/[0.065] hover:text-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/70"
        >
          <LibraryIcon />
        </Link>
      </div>
    </nav>
  );
}
