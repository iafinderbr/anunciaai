import Link from "next/link";

interface ToolCard {
  href: string;
  short: string;
  eyebrow: string;
  title: string;
  description: string;
  featured?: boolean;
}

const tools: ToolCard[] = [
  {
    href: "/gerador-de-anuncios-mercado-livre",
    short: "ML",
    eyebrow: "Marketplace",
    title: "Anúncios para Mercado Livre",
    description: "Título no limite, descrição, benefícios e SEO no formato certo para publicar.",
    featured: true,
  },
  {
    href: "/gerador-de-anuncios-shopee",
    short: "SH",
    eyebrow: "Marketplace",
    title: "Anúncios para Shopee",
    description: "Crie títulos com palavras-chave e descrições pensadas para vender na Shopee.",
    featured: true,
  },
  {
    href: "/gerador-de-anuncios-olx",
    short: "OLX",
    eyebrow: "Classificados",
    title: "Anúncios para OLX",
    description: "Transforme as informações do item em um classificado claro, direto e convincente.",
  },
  {
    href: "/gerador-de-anuncios-facebook-marketplace",
    short: "FB",
    eyebrow: "Classificados",
    title: "Facebook Marketplace",
    description: "Monte um anúncio natural, com estado do produto, destaques e chamada para conversa.",
  },
  {
    href: "/gerador-de-anuncios-para-loja-virtual",
    short: "LV",
    eyebrow: "E-commerce",
    title: "Anúncios para loja virtual",
    description: "Receba uma página de produto completa, persuasiva e preparada para buscas no Google.",
  },
  {
    href: "/gerador-de-descricao-de-produto",
    short: "DE",
    eyebrow: "Conteúdo",
    title: "Descrições de produtos",
    description: "Converta características soltas em uma descrição organizada, útil e persuasiva.",
  },
  {
    href: "/gerador-de-titulos-para-produtos",
    short: "TI",
    eyebrow: "Conteúdo",
    title: "Títulos para produtos",
    description: "Gere títulos fáceis de entender, com os termos que o comprador realmente procura.",
  },
  {
    href: "/gerador-de-legendas-para-instagram",
    short: "IG",
    eyebrow: "Redes sociais",
    title: "Legendas para Instagram",
    description: "Crie legendas com gancho, benefícios, chamada para ação e hashtags relevantes.",
  },
  {
    href: "/gerador-de-nomes-para-produtos",
    short: "NM",
    eyebrow: "Marca",
    title: "Nomes para produtos",
    description: "Explore nomes curtos e memoráveis em estilos diferentes, com explicação de cada ideia.",
    featured: true,
  },
  {
    href: "/gerador-de-palavras-chave-para-produtos",
    short: "SEO",
    eyebrow: "Busca",
    title: "Palavras-chave para produtos",
    description: "Encontre termos principais, secundários e de cauda longa para Google e marketplaces.",
    featured: true,
  },
];

export const toolLinks = tools.map(({ href, title }) => ({ href, label: title }));

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
              Use um gerador específico para cada canal ou etapa do anúncio. Todas as ferramentas funcionam sem
              cadastro e sem cartão de crédito.
            </p>
          </div>

          <a
            href="#ferramenta"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-line-strong bg-canvas px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600"
          >
            Gerar anúncio completo
            <span aria-hidden="true">↑</span>
          </a>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <li key={tool.href} className={tool.featured ? "lg:first:col-span-1" : undefined}>
              <Link
                href={tool.href}
                className={`group flex h-full min-h-52 flex-col rounded-2xl border p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lift sm:p-6 ${
                  tool.featured ? "border-brand-200 bg-brand-50/45" : "border-line bg-canvas"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    aria-hidden="true"
                    className={`grid h-10 min-w-10 place-items-center rounded-xl px-2 text-xs font-bold tracking-tight ${
                      tool.featured ? "bg-brand-500 text-white" : "border border-line-strong bg-white text-ink-soft"
                    }`}
                  >
                    {tool.short}
                  </span>
                  <span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">
                    {tool.eyebrow}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-brand-700">
                  {tool.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{tool.description}</p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Abrir ferramenta
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="size-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
