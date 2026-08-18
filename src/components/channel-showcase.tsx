import Link from "next/link";

export type ChannelId = "mercado-livre" | "shopee" | "instagram" | "olx" | "facebook" | "loja-virtual";

export type ChannelItem = {
  id: ChannelId;
  label: string;
  shortLabel: string;
  action: string;
  href: string;
  category: string;
  description: string;
};

export const featuredChannels: readonly ChannelItem[] = [
  {
    id: "mercado-livre",
    label: "Mercado Livre",
    shortLabel: "Mercado Livre",
    action: "Criar para Mercado Livre",
    href: "/gerador-de-anuncios-mercado-livre",
    category: "Marketplace",
    description: "Estruture título, descrição, benefícios e ficha para revisar antes de publicar no marketplace.",
  },
  {
    id: "shopee",
    label: "Shopee",
    shortLabel: "Shopee",
    action: "Criar para Shopee",
    href: "/gerador-de-anuncios-shopee",
    category: "Marketplace",
    description: "Organize uma primeira versão de anúncio com foco em leitura rápida, atributos e revisão do produto.",
  },
  {
    id: "instagram",
    label: "Instagram",
    shortLabel: "Instagram",
    action: "Criar para Instagram",
    href: "/gerador-de-legendas-para-instagram",
    category: "Rede social",
    description: "Monte uma legenda de produto com estrutura clara e espaço para adaptar tom, chamada e contexto visual.",
  },
  {
    id: "olx",
    label: "OLX",
    shortLabel: "OLX",
    action: "Criar para OLX",
    href: "/gerador-de-anuncios-olx",
    category: "Classificados",
    description: "Prepare um anúncio direto para classificados, destacando informações confirmadas e pontos de decisão.",
  },
  {
    id: "facebook",
    label: "Facebook Marketplace",
    shortLabel: "Facebook",
    action: "Criar para Facebook Marketplace",
    href: "/gerador-de-anuncios-facebook-marketplace",
    category: "Classificados",
    description: "Organize uma versão objetiva para Marketplace com contexto suficiente para facilitar a revisão do anúncio.",
  },
  {
    id: "loja-virtual",
    label: "Loja virtual",
    shortLabel: "Loja virtual",
    action: "Criar para loja virtual",
    href: "/gerador-de-anuncios-para-loja-virtual",
    category: "E-commerce",
    description: "Estruture conteúdo de produto para uma página própria, com descrição, benefícios e informações reutilizáveis.",
  },
] as const;

export function ChannelIcon({ id, className = "size-5" }: { id: ChannelId; className?: string }) {
  if (id === "mercado-livre") {
    return (
      <svg aria-hidden="true" viewBox="0 0 32 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.55">
        <ellipse cx="16" cy="12" rx="13" ry="7.2" />
        <path d="m9.2 11.4 3.1-2.4c1-.8 2.4-.7 3.3.2l.7.7.8-.7c.9-.8 2.3-.9 3.3-.2l2.4 1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m10.6 13 2.1 1.8c.7.6 1.8.6 2.5 0l.8-.7.8.7c.7.6 1.8.6 2.5 0l2.1-1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m13.6 11.1 2.4 2.1 2.4-2.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.65">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.2" />
        <circle cx="12" cy="12" r="3.7" />
        <circle cx="17.35" cy="6.75" r=".9" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (id === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M13.7 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5H17V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.5V13h2.8v8h3.4Z" />
      </svg>
    );
  }

  if (id === "olx") {
    return (
      <svg aria-hidden="true" viewBox="0 0 30 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="5.8" cy="12" r="3.8" />
        <path d="M12 7.7v8.6h4.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m20.1 8 5.2 8M25.3 8l-5.2 8" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "shopee") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 8.3h14l1 11.2H4L5 8.3Z" strokeLinejoin="round" />
        <path d="M8.5 8.6V6.8a3.5 3.5 0 0 1 7 0v1.8" strokeLinecap="round" />
        <path d="M14.7 12.2c-.6-.6-1.4-.9-2.4-.9-1.3 0-2.2.6-2.2 1.5 0 2.2 4.6 1.2 4.6 3.6 0 1-.9 1.7-2.3 1.7-1.1 0-2-.4-2.7-1.1" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 9.2 5.4 4h13.2L20 9.2" strokeLinejoin="round" />
      <path d="M5 10v10h14V10" strokeLinejoin="round" />
      <path d="M9 20v-5h6v5" />
      <path d="M3.5 9.2c0 1.4 1 2.5 2.3 2.5S8 10.6 8 9.2c0 1.4 1 2.5 2.3 2.5s2.2-1.1 2.2-2.5c0 1.4 1 2.5 2.3 2.5S17 10.6 17 9.2c0 1.4 1 2.5 2.3 2.5s2.2-1.1 2.2-2.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChannelCompactBar({ dark = false }: { dark?: boolean }) {
  return (
    <nav data-channel-compact aria-label="Canais de publicação">
      <div className={`flex items-center gap-3 border-y py-2 ${dark ? "border-white/[0.08]" : "border-line"}`}>
        <p className={`hidden shrink-0 text-[9px] font-semibold uppercase tracking-[0.16em] md:block ${dark ? "text-white/24" : "text-muted"}`}>Canais</p>
        <div className={`grid flex-1 grid-cols-6 divide-x ${dark ? "divide-white/[0.08]" : "divide-line"}`}>
          {featuredChannels.map((channel) => (
            <Link
              key={channel.id}
              href={channel.href}
              aria-label={channel.action}
              title={channel.label}
              className={`group flex min-h-12 items-center justify-center gap-2 px-1 transition-colors ${
                dark
                  ? "text-white/40 hover:bg-white/[0.035] hover:text-white"
                  : "text-ink-soft hover:bg-[#f2f2ef] hover:text-brand-700"
              }`}
            >
              <ChannelIcon id={channel.id} className="size-[20px] shrink-0 transition-transform duration-200 group-hover:scale-[1.04]" />
              <span className={`hidden truncate text-[10px] font-medium xl:block ${dark ? "text-white/32 group-hover:text-white/64" : "text-muted"}`}>
                {channel.shortLabel}
              </span>
            </Link>
          ))}
        </div>
        <Link href="/ferramentas" className={`hidden shrink-0 text-[11px] font-semibold md:inline-flex ${dark ? "text-white/36 hover:text-brand-300" : "text-brand-700 hover:text-brand-800"}`}>
          Ver todas →
        </Link>
      </div>
    </nav>
  );
}

export function ChannelStrip({ dark = false }: { dark?: boolean }) {
  return <ChannelCompactBar dark={dark} />;
}
