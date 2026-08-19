import Link from "next/link";
import { ChannelBrandMark, type ChannelId } from "@/components/channel-showcase";

type UtilityIconId = "description" | "title" | "name" | "search";
export type ToolIconId = ChannelId | UtilityIconId;

interface ToolCard {
  href: string;
  short: string;
  icon: ToolIconId;
  eyebrow: string;
  title: string;
  description: string;
  featured?: boolean;
}

export const tools: ToolCard[] = [
  {
    href: "/gerador-de-anuncios-mercado-livre",
    short: "ML",
    icon: "mercado-livre",
    eyebrow: "Marketplace",
    title: "Anúncios para Mercado Livre",
    description: "Organize título, descrição, benefícios, ficha técnica e termos para revisar antes de publicar.",
    featured: true,
  },
  {
    href: "/gerador-de-anuncios-shopee",
    short: "SH",
    icon: "shopee",
    eyebrow: "Marketplace",
    title: "Anúncios para Shopee",
    description: "Crie uma primeira versão de título, descrição e benefícios para adaptar à sua listagem.",
    featured: true,
  },
  {
    href: "/gerador-de-anuncios-olx",
    short: "OLX",
    icon: "olx",
    eyebrow: "Classificados",
    title: "Anúncios para OLX",
    description: "Transforme as informações do item em uma primeira versão de classificado claro e direto.",
  },
  {
    href: "/gerador-de-anuncios-facebook-marketplace",
    short: "FB",
    icon: "facebook",
    eyebrow: "Classificados",
    title: "Facebook Marketplace",
    description: "Organize título, estado informado, destaques e chamada para conversa sem inventar condições.",
  },
  {
    href: "/gerador-de-anuncios-para-loja-virtual",
    short: "LV",
    icon: "loja-virtual",
    eyebrow: "E-commerce",
    title: "Anúncios para loja virtual",
    description: "Organize página de produto, descrição, benefícios, ficha técnica e sugestões de SEO para revisar.",
  },
  {
    href: "/gerador-de-descricao-de-produto",
    short: "DE",
    icon: "description",
    eyebrow: "Conteúdo",
    title: "Descrições de produtos",
    description: "Converta características informadas em uma descrição organizada e fácil de revisar.",
  },
  {
    href: "/gerador-de-titulos-para-produtos",
    short: "TI",
    icon: "title",
    eyebrow: "Conteúdo",
    title: "Títulos para produtos",
    description: "Gere variações claras usando o nome, a categoria e as características informadas.",
  },
  {
    href: "/gerador-de-legendas-para-instagram",
    short: "IG",
    icon: "instagram",
    eyebrow: "Redes sociais",
    title: "Legendas para Instagram",
    description: "Crie uma primeira versão com gancho, benefícios, chamada para ação e hashtags relacionadas ao produto.",
  },
  {
    href: "/gerador-de-nomes-para-produtos",
    short: "NM",
    icon: "name",
    eyebrow: "Marca",
    title: "Nomes para produtos",
    description: "Explore ideias de nomes em estilos diferentes e revise disponibilidade e uso antes de escolher.",
    featured: true,
  },
  {
    href: "/gerador-de-palavras-chave-para-produtos",
    short: "SEO",
    icon: "search",
    eyebrow: "Busca",
    title: "Palavras-chave para produtos",
    description: "Receba sugestões de termos ligados ao produto, à categoria e às características informadas.",
    featured: true,
  },
];

export const toolLinks = tools.map(({ href, title }) => ({ href, label: title }));

const channelIcons = new Set<ToolIconId>(["mercado-livre", "shopee", "instagram", "olx", "facebook", "loja-virtual"]);

function UtilityIcon({ id, className = "size-6" }: { id: UtilityIconId; className?: string }) {
  if (id === "description") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.65">
        <path d="M6 3.5h8l4 4V20.5H6z" strokeLinejoin="round" />
        <path d="M14 3.5v4h4M9 12h6M9 15.5h6" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "title") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M5 6h14M12 6v12M8.5 18h7" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "name") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.65">
        <path d="m4.5 12 7.2-7.2h6.1l1.7 1.7v6.1l-7.2 7.2z" strokeLinejoin="round" />
        <circle cx="15.8" cy="8.4" r="1.15" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="10.7" cy="10.7" r="5.7" />
      <path d="m15 15 4 4" strokeLinecap="round" />
      <path d="M8.4 10.7h4.6M10.7 8.4V13" strokeLinecap="round" opacity=".72" />
    </svg>
  );
}

export function ToolVisual({ icon, compact = false }: { icon: ToolIconId; compact?: boolean }) {
  if (channelIcons.has(icon)) {
    return <ChannelBrandMark id={icon as ChannelId} compact={compact} />;
  }

  return (
    <span
      data-tool-utility-mark={icon}
      aria-hidden="true"
      className={`relative grid shrink-0 place-items-center overflow-hidden border border-white/[0.10] bg-[#17181c] text-white/64 transition-all duration-200 group-hover:border-brand-400/40 group-hover:bg-[#1b1c20] group-hover:text-brand-200 ${compact ? "size-10" : "size-12"}`}
    >
      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-500/70 opacity-0 transition-opacity group-hover:opacity-100" />
      <UtilityIcon id={icon as UtilityIconId} className={compact ? "size-[20px]" : "size-[23px]"} />
    </span>
  );
}

export function ToolsSection() {
  return (
    <section id="ferramentas" aria-labelledby="ferramentas-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Ferramentas gratuitas</p>
            <h2 id="ferramentas-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Escolha o que você precisa criar
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Use um gerador específico para cada canal ou etapa do anúncio. O plano Grátis libera as ferramentas atuais após um login simples com Google e não exige cartão de crédito.
            </p>
          </div>

          <a href="#ferramenta" className="inline-flex w-fit items-center gap-2 rounded-xl border border-line-strong bg-canvas px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600">
            Gerar anúncio completo <span aria-hidden="true">↑</span>
          </a>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <li key={tool.href} className={tool.featured ? "lg:first:col-span-1" : undefined}>
              <Link href={tool.href} className={`group flex h-full min-h-52 flex-col rounded-2xl border p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lift sm:p-6 ${tool.featured ? "border-brand-200 bg-brand-50/45" : "border-line bg-canvas"}`}>
                <div className="flex items-start justify-between gap-3">
                  <ToolVisual icon={tool.icon} />
                  <span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">{tool.eyebrow}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-brand-700">{tool.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{tool.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Abrir ferramenta
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
