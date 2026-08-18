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
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.7" />
        <circle cx="17.5" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (id === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13.3 20v-7h2.6l.4-3h-3V8.2c0-.9.3-1.6 1.6-1.6h1.8V4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V10H7v3h2.8v7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === "olx") {
    return (
      <svg aria-hidden="true" viewBox="0 0 28 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="6" cy="12" r="4" />
        <path d="M12 7.5v9h5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m20 8 5 8M25 8l-5 8" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "shopee") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5.5 8.5h13l1 11h-15l1-11Z" strokeLinejoin="round" />
        <path d="M8.5 9V7a3.5 3.5 0 0 1 7 0v2" strokeLinecap="round" />
        <path d="M14.7 12.2c-.6-.6-1.4-.9-2.4-.9-1.3 0-2.2.6-2.2 1.5 0 2.2 4.6 1.2 4.6 3.6 0 1-.9 1.7-2.3 1.7-1.1 0-2-.4-2.7-1.1" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4.5 8.7 9 5.2l3 2.3 3-2.3 4.5 3.5-4.6 4.1a4.3 4.3 0 0 1-5.8 0L4.5 8.7Z" strokeLinejoin="round" />
      <path d="m7 11.1 2.4 2.2M17 11.1l-2.4 2.2M9.8 15.3l1.1 1a1.6 1.6 0 0 0 2.2 0l1.1-1" strokeLinecap="round" />
    </svg>
  );
}

export function ChannelRail({ className = "" }: { className?: string }) {
  const visible = featuredChannels.filter((item) => item.id !== "shopee");

  return (
    <div className={`overflow-hidden rounded-2xl border border-white/[0.09] bg-[#15161a]/92 shadow-[0_22px_70px_-38px_rgba(0,0,0,.8)] backdrop-blur-xl ${className}`}>
      <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] px-4 py-3.5">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/28">Canais populares</p>
          <p className="mt-1 text-[11px] font-semibold text-white/72">Escolha onde vai anunciar</p>
        </div>
        <span className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2 py-1 text-[9px] font-semibold text-white/30">4 atalhos</span>
      </div>

      <div className="divide-y divide-white/[0.07]">
        {visible.map((channel) => (
          <Link key={channel.href} href={channel.href} className="group grid grid-cols-[38px_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3.5 transition-colors hover:bg-white/[0.045]">
            <span className="grid size-9 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-white/68 transition-all group-hover:border-brand-500/40 group-hover:bg-brand-500/[0.09] group-hover:text-brand-300">
              <ChannelIcon id={channel.id} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[11px] font-semibold text-white/82 transition-colors group-hover:text-white">{channel.action}</span>
              <span className="mt-0.5 block truncate font-mono text-[9px] text-white/25">{channel.path}</span>
            </span>
            <span aria-hidden="true" className="text-xs text-white/18 transition-all group-hover:translate-x-0.5 group-hover:text-brand-300">→</span>
          </Link>
        ))}
      </div>

      <div className="border-t border-white/[0.08] bg-white/[0.02] px-4 py-3">
        <Link href="/ferramentas" className="inline-flex items-center gap-2 text-[10px] font-semibold text-white/42 transition-colors hover:text-brand-300">
          Ver todos os geradores <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

export function ChannelStrip({ dark = false }: { dark?: boolean }) {
  const visible = featuredChannels.filter((item) => ["mercado-livre", "instagram", "olx", "facebook"].includes(item.id));

  return (
    <div className={`overflow-hidden rounded-2xl border ${dark ? "border-white/[0.08] bg-white/[0.025]" : "border-line bg-white"}`}>
      <div className={`flex items-center justify-between gap-4 border-b px-4 py-3.5 sm:px-5 ${dark ? "border-white/[0.08]" : "border-line"}`}>
        <div>
          <p className={`text-[9px] font-semibold uppercase tracking-[0.13em] ${dark ? "text-white/28" : "text-muted"}`}>Canais em destaque</p>
          <p className={`mt-1 text-xs font-semibold ${dark ? "text-white/78" : "text-ink"}`}>Quatro caminhos rápidos. Sem lista infinita.</p>
        </div>
        <Link href="/ferramentas" className={`hidden text-[10px] font-semibold sm:inline-flex ${dark ? "text-brand-300" : "text-brand-700"}`}>
          Ver todos →
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((channel, index) => (
          <Link
            key={channel.href}
            href={channel.href}
            className={`group relative flex min-h-[134px] flex-col justify-between gap-5 p-4 transition-colors sm:p-5 ${
              dark ? "hover:bg-white/[0.045]" : "hover:bg-[#fafaf8]"
            } ${index < visible.length - 1 ? (dark ? "border-b border-white/[0.08] sm:border-b-0 lg:border-r" : "border-b border-line sm:border-b-0 lg:border-r") : ""}`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className={`grid size-9 place-items-center rounded-xl ${dark ? "border border-white/[0.09] bg-white/[0.035] text-white/62" : "border border-line bg-[#f7f7f4] text-ink-soft"}`}>
                <ChannelIcon id={channel.id} />
              </span>
              <span className={`text-[9px] font-semibold uppercase tracking-[0.12em] ${dark ? "text-white/22" : "text-muted"}`}>{channel.category}</span>
            </div>
            <div>
              <span className={`block text-xs font-semibold transition-colors ${dark ? "text-white/80 group-hover:text-white" : "text-ink group-hover:text-brand-700"}`}>{channel.action}</span>
              <span className={`mt-1.5 block truncate font-mono text-[9px] ${dark ? "text-white/22" : "text-muted"}`}>{channel.path}</span>
            </div>
            <span aria-hidden="true" className={`absolute bottom-4 right-4 text-xs transition-all group-hover:translate-x-0.5 ${dark ? "text-white/16 group-hover:text-brand-300" : "text-line-strong group-hover:text-brand-700"}`}>→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
