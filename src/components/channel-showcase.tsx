import Link from "next/link";

type ChannelId = "mercado-livre" | "shopee" | "instagram" | "olx" | "facebook";

type ChannelItem = {
  id: ChannelId;
  label: string;
  action: string;
  href: string;
  path: string;
  category: string;
};

export const featuredChannels: readonly ChannelItem[] = [
  {
    id: "mercado-livre",
    label: "Mercado Livre",
    action: "Anunciar no Mercado Livre",
    href: "/gerador-de-anuncios-mercado-livre",
    path: "/mercado-livre",
    category: "Marketplace",
  },
  {
    id: "shopee",
    label: "Shopee",
    action: "Anunciar na Shopee",
    href: "/gerador-de-anuncios-shopee",
    path: "/shopee",
    category: "Marketplace",
  },
  {
    id: "instagram",
    label: "Instagram",
    action: "Criar para Instagram",
    href: "/gerador-de-legendas-para-instagram",
    path: "/instagram",
    category: "Rede social",
  },
  {
    id: "olx",
    label: "OLX",
    action: "Anunciar na OLX",
    href: "/gerador-de-anuncios-olx",
    path: "/olx",
    category: "Classificados",
  },
  {
    id: "facebook",
    label: "Facebook Marketplace",
    action: "Anunciar no Facebook",
    href: "/gerador-de-anuncios-facebook-marketplace",
    path: "/facebook-marketplace",
    category: "Classificados",
  },
] as const;

function ChannelIcon({ id, className = "size-5" }: { id: ChannelId; className?: string }) {
  if (id === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.2" />
        <circle cx="12" cy="12" r="3.7" />
        <circle cx="17.4" cy="6.8" r=".9" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (id === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M13.3 20v-7h2.6l.4-3h-3V8.2c0-.9.3-1.6 1.6-1.6h1.8V4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V10H7v3h2.8v7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === "olx") {
    return (
      <svg aria-hidden="true" viewBox="0 0 28 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="6" cy="12" r="4" />
        <path d="M12 7.5v9h5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m20 8 5 8M25 8l-5 8" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "shopee") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M5.5 8.5h13l1 11h-15l1-11Z" strokeLinejoin="round" />
        <path d="M8.5 9V7a3.5 3.5 0 0 1 7 0v2" strokeLinecap="round" />
        <path d="M14.7 12.2c-.6-.6-1.4-.9-2.4-.9-1.3 0-2.2.6-2.2 1.5 0 2.2 4.6 1.2 4.6 3.6 0 1-.9 1.7-2.3 1.7-1.1 0-2-.4-2.7-1.1" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4.5 8.7 9 5.2l3 2.3 3-2.3 4.5 3.5-4.6 4.1a4.3 4.3 0 0 1-5.8 0L4.5 8.7Z" strokeLinejoin="round" />
      <path d="m7 11.1 2.4 2.2M17 11.1l-2.4 2.2M9.8 15.3l1.1 1a1.6 1.6 0 0 0 2.2 0l1.1-1" strokeLinecap="round" />
    </svg>
  );
}

export function ChannelRail({ className = "" }: { className?: string }) {
  const visible = featuredChannels.filter((item) => ["mercado-livre", "instagram", "olx", "facebook"].includes(item.id));

  return (
    <div className={`overflow-hidden rounded-[10px] border border-white/[0.10] bg-[#15161a] shadow-[0_28px_80px_-46px_rgba(0,0,0,.9)] ${className}`}>
      <div className="border-b border-white/[0.08] px-5 py-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/34">Canais de publicação</p>
        <p className="mt-2 text-sm font-semibold tracking-[-0.02em] text-white">Escolha onde o conteúdo será usado.</p>
      </div>

      <div className="divide-y divide-white/[0.07]">
        {visible.map((channel) => (
          <Link key={channel.href} href={channel.href} className="group grid min-h-[84px] grid-cols-[48px_minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.045]">
            <span className="grid size-11 place-items-center rounded-[8px] border border-white/[0.10] bg-white/[0.025] text-white/72 transition-colors group-hover:border-brand-500/45 group-hover:text-brand-300">
              <ChannelIcon id={channel.id} className="size-[22px]" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[13px] font-semibold tracking-[-0.015em] text-white/86 transition-colors group-hover:text-white">{channel.action}</span>
              <span className="mt-1.5 block truncate font-mono text-[10px] text-white/28">{channel.path}</span>
            </span>
            <span aria-hidden="true" className="text-sm text-white/20 transition-all group-hover:translate-x-0.5 group-hover:text-brand-300">→</span>
          </Link>
        ))}
      </div>

      <div className="border-t border-white/[0.08] px-5 py-4">
        <Link href="/ferramentas" className="inline-flex items-center gap-2 text-xs font-semibold text-white/48 transition-colors hover:text-brand-300">
          Ver biblioteca completa <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

export function ChannelStrip({ dark = false }: { dark?: boolean }) {
  const visible = featuredChannels.filter((item) => ["mercado-livre", "instagram", "olx", "facebook"].includes(item.id));

  return (
    <div className={`overflow-hidden rounded-[10px] border ${dark ? "border-white/[0.09] bg-[#15161a]" : "border-line bg-white"}`}>
      <div className={`flex items-end justify-between gap-6 border-b px-5 py-5 sm:px-6 ${dark ? "border-white/[0.08]" : "border-line"}`}>
        <div>
          <p className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${dark ? "text-white/32" : "text-muted"}`}>Publicar por canal</p>
          <p className={`mt-2 text-base font-semibold tracking-[-0.025em] ${dark ? "text-white" : "text-ink"}`}>Quatro caminhos principais. O restante fica na biblioteca.</p>
        </div>
        <Link href="/ferramentas" className={`hidden text-xs font-semibold sm:inline-flex ${dark ? "text-white/48 hover:text-brand-300" : "text-brand-700 hover:text-brand-800"}`}>
          Ver todos →
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4">
        {visible.map((channel, index) => (
          <Link
            key={channel.href}
            href={channel.href}
            className={`group relative flex min-h-[176px] flex-col justify-between gap-8 px-5 py-6 transition-colors sm:px-6 ${
              dark ? "hover:bg-white/[0.04]" : "hover:bg-[#fafaf8]"
            } ${index < visible.length - 1 ? (dark ? "border-b border-white/[0.08] sm:border-b-0 xl:border-r" : "border-b border-line sm:border-b-0 xl:border-r") : ""}`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className={`grid size-11 place-items-center rounded-[8px] ${dark ? "border border-white/[0.10] bg-white/[0.025] text-white/70" : "border border-line-strong bg-[#f7f7f4] text-ink"}`}>
                <ChannelIcon id={channel.id} className="size-[22px]" />
              </span>
              <span className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${dark ? "text-white/28" : "text-muted"}`}>{channel.category}</span>
            </div>
            <div className="pr-7">
              <span className={`block text-sm font-semibold tracking-[-0.02em] transition-colors ${dark ? "text-white/86 group-hover:text-white" : "text-ink group-hover:text-brand-700"}`}>{channel.action}</span>
              <span className={`mt-2 block truncate font-mono text-[10px] ${dark ? "text-white/26" : "text-muted"}`}>{channel.path}</span>
            </div>
            <span aria-hidden="true" className={`absolute bottom-6 right-5 text-sm transition-all group-hover:translate-x-1 ${dark ? "text-white/18 group-hover:text-brand-300" : "text-line-strong group-hover:text-brand-700"}`}>→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ChannelSideDock({ activePath }: { activePath?: string }) {
  const visible = featuredChannels.filter((item) => ["mercado-livre", "instagram", "olx", "facebook"].includes(item.id));

  return (
    <nav aria-label="Atalhos para outros canais" className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 min-[1440px]:block">
      <div className="overflow-visible rounded-[10px] border border-black/[0.10] bg-white p-1.5 shadow-[0_24px_70px_-42px_rgba(15,15,18,.42)]">
        {visible.map((channel) => {
          const active = activePath === channel.href;
          return (
            <Link
              key={channel.href}
              href={channel.href}
              aria-label={channel.action}
              className={`group relative mt-1 grid size-12 first:mt-0 place-items-center rounded-[8px] transition-colors ${
                active ? "bg-[#111216] text-white" : "text-ink-soft hover:bg-[#f2f2ef] hover:text-brand-700"
              }`}
            >
              <ChannelIcon id={channel.id} className="size-[22px]" />
              <span className="pointer-events-none absolute right-[calc(100%+0.8rem)] top-1/2 w-[230px] -translate-y-1/2 translate-x-1 rounded-[9px] border border-black/[0.10] bg-[#111216] px-4 py-3.5 text-left opacity-0 shadow-[0_20px_55px_-30px_rgba(0,0,0,.85)] transition-all group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                <span className="block text-xs font-semibold text-white">{channel.action}</span>
                <span className="mt-1.5 block font-mono text-[10px] text-white/34">{channel.path}</span>
              </span>
            </Link>
          );
        })}
        <Link href="/ferramentas" aria-label="Ver todos os geradores" className="group relative mt-1 grid size-12 place-items-center rounded-[8px] border-t border-line text-sm font-semibold text-muted transition-colors hover:bg-[#f2f2ef] hover:text-brand-700">
          +
          <span className="pointer-events-none absolute right-[calc(100%+0.8rem)] top-1/2 w-[230px] -translate-y-1/2 translate-x-1 rounded-[9px] border border-black/[0.10] bg-[#111216] px-4 py-3.5 text-left opacity-0 shadow-[0_20px_55px_-30px_rgba(0,0,0,.85)] transition-all group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
            <span className="block text-xs font-semibold text-white">Ver biblioteca completa</span>
            <span className="mt-1.5 block font-mono text-[10px] text-white/34">/ferramentas</span>
          </span>
        </Link>
      </div>
    </nav>
  );
}
