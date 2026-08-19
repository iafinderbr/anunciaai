"use client";

import Link from "next/link";
import { useState } from "react";
import { ChannelIcon, featuredChannels, type ChannelItem } from "@/components/channel-showcase";

function PreviewCanvas({ channel }: { channel: ChannelItem }) {
  return (
    <div className="relative flex min-h-[360px] flex-col bg-[#f3f0ea] text-[#161616] sm:min-h-[430px]">
      <div className="flex items-center justify-between border-b border-black/[0.09] px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center border border-black/[0.10] bg-white/55 text-black/70">
            <ChannelIcon id={channel.id} className="size-[20px]" />
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-black/36">{channel.category}</p>
            <p className="mt-0.5 text-sm font-semibold tracking-[-0.02em]">{channel.label}</p>
          </div>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-black/30">Prévia</span>
      </div>

      <div className="flex flex-1 items-center justify-center p-5 sm:p-8">
        <div className="w-full max-w-xl border border-black/[0.10] bg-white/55 p-3 shadow-[0_22px_60px_-45px_rgba(0,0,0,.35)] sm:p-4">
          <div className="grid gap-2 sm:grid-cols-3">
            {["Título", "Descrição", "Benefícios"].map((label, index) => (
              <div key={label} className="min-h-24 border border-black/[0.08] bg-white/62 p-3 sm:min-h-28">
                <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-black/34">{label}</p>
                <div className="mt-4 space-y-2">
                  <span className={`block h-1.5 bg-black/[0.12] ${index === 0 ? "w-4/5" : "w-full"}`} />
                  <span className="block h-1.5 w-3/4 bg-black/[0.08]" />
                  {index > 0 ? <span className="block h-1.5 w-2/3 bg-black/[0.08]" /> : null}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 border-t border-black/[0.09] pt-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <p className="text-xs leading-5 text-black/48">{channel.description}</p>
            <span className="inline-flex min-h-9 items-center justify-center bg-[#161616] px-4 text-[11px] font-semibold text-white">Revisar resultado</span>
          </div>
        </div>
      </div>

      <div className="border-t border-black/[0.08] px-5 py-3 text-center text-[10px] text-black/34 sm:px-6">
        Workspace liberado depois do login
      </div>
    </div>
  );
}

export function EntryPreview() {
  const [activeId, setActiveId] = useState(featuredChannels[0].id);
  const activeChannel = featuredChannels.find((channel) => channel.id === activeId) ?? featuredChannels[0];

  return (
    <div className="grid overflow-hidden border border-white/[0.11] bg-[#121316] lg:grid-cols-[160px_minmax(0,1fr)]">
      <div className="border-b border-white/[0.08] bg-[#0d0e11] p-3 lg:border-b-0 lg:border-r lg:p-4">
        <p className="px-2 pb-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/26">Canais</p>
        <div className="grid grid-cols-3 gap-1 lg:grid-cols-1">
          {featuredChannels.map((channel) => {
            const active = activeChannel.id === channel.id;
            const href = `/entrar?voltar=${encodeURIComponent(channel.href)}`;

            return (
              <Link
                key={channel.id}
                href={href}
                onMouseEnter={() => setActiveId(channel.id)}
                onFocus={() => setActiveId(channel.id)}
                aria-label={`Ver ${channel.label}. Entre para abrir a ferramenta.`}
                className={`group relative flex min-h-16 items-center gap-2.5 px-2.5 py-2 text-left transition-colors lg:min-h-12 ${
                  active ? "bg-white/[0.07] text-white" : "text-white/42 hover:bg-white/[0.04] hover:text-white/78"
                }`}
              >
                <ChannelIcon id={channel.id} className={`size-[20px] shrink-0 ${active ? "text-brand-300" : "text-current"}`} />
                <span className="hidden min-w-0 flex-1 lg:block">
                  <span className="block truncate text-[11px] font-semibold">{channel.shortLabel}</span>
                </span>
                <span className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-20 hidden w-40 -translate-x-1/2 border border-white/[0.10] bg-[#17181c] p-2.5 text-[10px] leading-4 text-white/62 shadow-xl group-hover:block group-focus-visible:block lg:bottom-auto lg:left-[calc(100%+8px)] lg:top-1/2 lg:w-44 lg:-translate-x-0 lg:-translate-y-1/2">
                  Entre para abrir {channel.label}.
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <PreviewCanvas channel={activeChannel} />
    </div>
  );
}
