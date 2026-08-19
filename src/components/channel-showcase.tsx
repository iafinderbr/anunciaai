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
      <svg aria-hidden="true" viewBox="0 0 32 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
        <ellipse cx="16" cy="12" rx="13" ry="7.2" />
        <path d="m8.8 11.2 3.4-2.5c1-.75 2.35-.66 3.25.2l.75.72.78-.72c.9-.86 2.25-.95 3.25-.2l2.95 2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m10.2 13 2.35 2.05c.72.63 1.8.63 2.52 0l.93-.8.93.8c.72.63 1.8.63 2.52 0L21.8 13" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m13.45 11.05 2.55 2.2 2.55-2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === "shopee") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M15.9414 17.9633c.229-1.879-.981-3.077-4.1758-4.0969-1.548-.528-2.277-1.22-2.26-2.1719.065-1.056 1.048-1.825 2.352-1.85a5.2898 5.2898 0 0 1 2.8838.89c.116.072.197.06.263-.039.09-.145.315-.494.39-.62.051-.081.061-.187-.068-.281-.185-.1369-.704-.4149-.983-.5319a6.4697 6.4697 0 0 0-2.5118-.514c-1.909.008-3.4129 1.215-3.5389 2.826-.082 1.1629.494 2.1078 1.73 2.8278.262.152 1.6799.716 2.2438.892 1.774.552 2.695 1.5419 2.478 2.6969-.197 1.047-1.299 1.7239-2.818 1.7439-1.2039-.046-2.2878-.537-3.1278-1.19l-.141-.11c-.104-.08-.218-.075-.287.03-.05.077-.376.547-.458.67-.077.108-.035.168.045.234.35.293.817.613 1.134.775a6.7097 6.7097 0 0 0 2.8289.727 4.9048 4.9048 0 0 0 2.0759-.354c1.095-.465 1.8029-1.394 1.9449-2.554zM11.9986 1.4009c-2.068 0-3.7539 1.95-3.8329 4.3899h7.6657c-.08-2.44-1.765-4.3899-3.8328-4.3899zm7.8516 22.5981-.08.001-15.7843-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195L1.298 6.2858a.459.459 0 0 1 .45-.494h4.9748C6.8448 2.568 9.1607 0 11.9996 0c2.8388 0 5.1537 2.5689 5.2757 5.7898h4.9678a.459.459 0 0 1 .458.483l-.773 15.5883-.007.131c-.094 1.094-.979 1.9769-2.0709 2.0059z" />
      </svg>
    );
  }

  if (id === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
      </svg>
    );
  }

  if (id === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
      </svg>
    );
  }

  if (id === "olx") {
    return (
      <svg aria-hidden="true" viewBox="0 0 34 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.25">
        <circle cx="6.1" cy="12" r="4.35" />
        <path d="M13 6.9v10.2h6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m23.3 7.2 7 9.6M30.3 7.2l-7 9.6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 9.2 5.4 4h13.2L20 9.2" strokeLinejoin="round" />
      <path d="M5 10v10h14V10" strokeLinejoin="round" />
      <path d="M9 20v-5h6v5" />
      <path d="M3.5 9.2c0 1.4 1 2.5 2.3 2.5S8 10.6 8 9.2c0 1.4 1 2.5 2.3 2.5s2.2-1.1 2.2-2.5c0 1.4 1 2.5 2.3 2.5S17 10.6 17 9.2c0 1.4 1 2.5 2.3 2.5s2.2-1.1 2.2-2.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChannelBrandMark({ id, compact = false }: { id: ChannelId; compact?: boolean }) {
  return (
    <span
      data-channel-brand-mark={id}
      aria-hidden="true"
      className={`relative grid shrink-0 place-items-center overflow-hidden border border-white/[0.10] bg-[#17181c] text-white/76 transition-all duration-200 group-hover:border-brand-400/40 group-hover:bg-[#1b1c20] group-hover:text-brand-200 ${compact ? "size-10" : "size-12"}`}
    >
      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-500/70 opacity-0 transition-opacity group-hover:opacity-100" />
      <ChannelIcon id={id} className={compact ? "size-[20px]" : "size-[24px]"} />
    </span>
  );
}

export function ChannelCompactBar({ dark = false }: { dark?: boolean }) {
  return (
    <nav data-channel-compact aria-label="Canais de publicação">
      <div className={`flex items-center gap-3 border-y py-2.5 ${dark ? "border-white/[0.08]" : "border-line"}`}>
        <p className={`hidden shrink-0 text-[9px] font-semibold uppercase tracking-[0.16em] md:block ${dark ? "text-white/24" : "text-muted"}`}>Canais</p>
        <div className={`grid flex-1 grid-cols-6 divide-x ${dark ? "divide-white/[0.08]" : "divide-line"}`}>
          {featuredChannels.map((channel) => (
            <Link
              key={channel.id}
              href={channel.href}
              aria-label={channel.action}
              title={channel.label}
              className={`group flex min-h-14 items-center justify-center gap-2 px-1.5 transition-colors ${
                dark
                  ? "text-white/40 hover:bg-white/[0.035] hover:text-white"
                  : "text-ink-soft hover:bg-[#f2f2ef] hover:text-brand-700"
              }`}
            >
              <ChannelIcon id={channel.id} className="size-[22px] shrink-0 transition-transform duration-200 group-hover:scale-[1.06]" />
              <span className={`hidden truncate text-[10px] font-medium xl:block ${dark ? "text-white/34 group-hover:text-white/68" : "text-muted"}`}>
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
