import Link from "next/link";

export type ChannelId = "mercado-livre" | "shopee" | "instagram" | "olx" | "facebook" | "loja-virtual";

export type ChannelItem = {
  id: ChannelId;
  label: string;
  action: string;
  href: string;
  category: string;
  description: string;
};

export const featuredChannels: readonly ChannelItem[] = [
  {
    id: "mercado-livre",
    label: "Mercado Livre",
    action: "Criar para Mercado Livre",
    href: "/gerador-de-anuncios-mercado-livre",
    category: "Marketplace",
    description: "Estruture título, descrição, benefícios e ficha para revisar antes de publicar no marketplace.",
  },
  {
    id: "shopee",
    label: "Shopee",
    action: "Criar para Shopee",
    href: "/gerador-de-anuncios-shopee",
    category: "Marketplace",
    description: "Organize uma primeira versão de anúncio com foco em leitura rápida, atributos e revisão do produto.",
  },
  {
    id: "instagram",
    label: "Instagram",
    action: "Criar para Instagram",
    href: "/gerador-de-legendas-para-instagram",
    category: "Rede social",
    description: "Monte uma legenda de produto com estrutura clara e espaço para adaptar tom, chamada e contexto visual.",
  },
  {
    id: "olx",
    label: "OLX",
    action: "Criar para OLX",
    href: "/gerador-de-anuncios-olx",
    category: "Classificados",
    description: "Prepare um anúncio direto para classificados, destacando informações confirmadas e pontos de decisão.",
  },
  {
    id: "facebook",
    label: "Facebook Marketplace",
    action: "Criar para Facebook Marketplace",
    href: "/gerador-de-anuncios-facebook-marketplace",
    category: "Classificados",
    description: "Organize uma versão objetiva para Marketplace com contexto suficiente para facilitar a revisão do anúncio.",
  },
  {
    id: "loja-virtual",
    label: "Loja virtual",
    action: "Criar para loja virtual",
    href: "/gerador-de-anuncios-para-loja-virtual",
    category: "E-commerce",
    description: "Estruture conteúdo de produto para uma página própria, com descrição, benefícios e informações reutilizáveis.",
  },
] as const;

export function ChannelIcon({ id, className = "size-5" }: { id: ChannelId; className?: string }) {
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
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M13.3 20v-7h2.6l.4-3h-3V8.2c0-.9.3-1.6 1.6-1.6h1.8V4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V10H7v3h2.8v7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === "olx") {
    return (
      <svg aria-hidden="true" viewBox="0 0 28 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.65">
        <circle cx="6" cy="12" r="4" />
        <path d="M12 7.5v9h5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m20 8 5 8M25 8l-5 8" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "shopee") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.65">
        <path d="M5.5 8.5h13l1 11h-15l1-11Z" strokeLinejoin="round" />
        <path d="M8.5 9V7a3.5 3.5 0 0 1 7 0v2" strokeLinecap="round" />
        <path d="M14.7 12.2c-.6-.6-1.4-.9-2.4-.9-1.3 0-2.2.6-2.2 1.5 0 2.2 4.6 1.2 4.6 3.6 0 1-.9 1.7-2.3 1.7-1.1 0-2-.4-2.7-1.1" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "loja-virtual") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 9.2 5.4 4h13.2L20 9.2" strokeLinejoin="round" />
        <path d="M5 10v10h14V10" strokeLinejoin="round" />
        <path d="M9 20v-5h6v5" />
        <path d="M3.5 9.2c0 1.4 1 2.5 2.3 2.5s2.2-1.1 2.2-2.5c0 1.4 1 2.5 2.3 2.5s2.2-1.1 2.2-2.5c0 1.4 1 2.5 2.3 2.5s2.2-1.1 2.2-2.5c0 1.4 1 2.5 2.3 2.5s2.2-1.1 2.2-2.5" strokeLinecap="round" />
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

export function ChannelCompactBar({ dark = false }: { dark?: boolean }) {
  return (
    <nav data-channel-compact aria-label="Canais de publicação" className="min-[1380px]:hidden">
      <div className={`flex items-center gap-3 border-y py-3 ${dark ? "border-white/[0.08]" : "border-line"}`}>
        <p className={`hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.15em] sm:block ${dark ? "text-white/28" : "text-muted"}`}>Canais</p>
        <div className={`grid flex-1 grid-cols-6 divide-x ${dark ? "divide-white/[0.08]" : "divide-line"}`}>
          {featuredChannels.map((channel) => (
            <Link
              key={channel.id}
              href={channel.href}
              aria-label={channel.action}
              title={channel.label}
              className={`grid min-h-11 place-items-center transition-colors ${
                dark
                  ? "text-white/42 hover:bg-white/[0.045] hover:text-brand-300"
                  : "text-ink-soft hover:bg-[#f2f2ef] hover:text-brand-700"
              }`}
            >
              <ChannelIcon id={channel.id} className="size-[20px]" />
            </Link>
          ))}
        </div>
        <Link href="/ferramentas" className={`hidden shrink-0 text-xs font-semibold sm:inline-flex ${dark ? "text-white/42 hover:text-white" : "text-brand-700 hover:text-brand-800"}`}>
          Biblioteca →
        </Link>
      </div>
    </nav>
  );
}

export function ChannelStrip({ dark = false }: { dark?: boolean }) {
  return <ChannelCompactBar dark={dark} />;
}
