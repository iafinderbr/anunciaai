import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/guias";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;

const TITLE = "Guias para Vender Online: Anúncios, SEO e Produtos";
const DESCRIPTION =
  "Guias práticos por canal e tarefa para criar anúncios, títulos, descrições, páginas de produto, palavras-chave, CTAs e conteúdo para vendas online.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "guias para vender online",
    "como criar anúncio de produto",
    "como criar título de produto",
    "como fazer descrição de produto",
    "como escolher palavras-chave para produtos",
    "como criar nome de produto",
    "conteúdo para e-commerce",
    "legenda para Instagram",
  ],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: ABSOLUTE_URL,
    siteName: "AnunciaAI",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const guides = [
  { category: "Mercado Livre", href: "/como-criar-anuncio-no-mercado-livre", eyebrow: "Mercado Livre", title: "Como criar um anúncio no Mercado Livre", description: "Passo a passo para organizar categoria, título, fotos, ficha técnica, descrição, preço e revisão antes de publicar.", readingTime: "8 min de leitura", topics: ["8 etapas", "Checklist", "Modelo de descrição"], toolHref: "/gerador-de-anuncios-mercado-livre#ferramenta", toolLabel: "Gerador para Mercado Livre" },
  { category: "Mercado Livre", href: "/como-fazer-descricao-para-mercado-livre", eyebrow: "Mercado Livre", title: "Como fazer descrição para Mercado Livre", description: "Estrutura em quatro blocos, modelo editável, exemplo e checklist para complementar a ficha técnica sem repetir informação.", readingTime: "7 min de leitura", topics: ["Modelo pronto", "Exemplo", "Checklist"], toolHref: "/gerador-de-anuncios-mercado-livre#ferramenta", toolLabel: "Gerar descrição para ML" },
  { category: "Mercado Livre", href: "/como-criar-titulo-para-mercado-livre", eyebrow: "Mercado Livre", title: "Como criar título para Mercado Livre", description: "Fórmula prática, exemplos por categoria, erros comuns e checklist para montar títulos claros e objetivos.", readingTime: "7 min de leitura", topics: ["Fórmula", "4 exemplos", "Checklist"], toolHref: "/gerador-de-anuncios-mercado-livre#ferramenta", toolLabel: "Gerar título para ML" },
  { category: "Mercado Livre", href: "/como-preencher-ficha-tecnica-mercado-livre", eyebrow: "Mercado Livre", title: "Como preencher a ficha técnica do Mercado Livre", description: "Passo a passo para organizar marca, modelo, código universal, variações e características corretas do produto.", readingTime: "7 min de leitura", topics: ["Atributos", "Código universal", "Checklist"], toolHref: "/gerador-de-anuncios-mercado-livre#ferramenta", toolLabel: "Montar anúncio para ML" },
  { category: "Mercado Livre", href: "/como-escolher-palavras-chave-para-mercado-livre", eyebrow: "Mercado Livre", title: "Como escolher palavras-chave para Mercado Livre", description: "Método para combinar termos buscados, título claro, categoria correta e ficha técnica sem repetição artificial.", readingTime: "7 min de leitura", topics: ["Busca", "Título", "Ficha técnica"], toolHref: "/gerador-de-anuncios-mercado-livre#ferramenta", toolLabel: "Gerador para Mercado Livre" },

  { category: "Shopee", href: "/como-criar-anuncio-na-shopee", eyebrow: "Shopee", title: "Como criar um anúncio na Shopee", description: "Passo a passo para organizar categoria, título, fotos, atributos, variações, descrição, preço e revisão antes de publicar.", readingTime: "8 min de leitura", topics: ["8 etapas", "Atributos", "Variações"], toolHref: "/gerador-de-anuncios-shopee#ferramenta", toolLabel: "Gerador para Shopee" },
  { category: "Shopee", href: "/como-criar-titulo-para-shopee", eyebrow: "Shopee", title: "Como criar título para Shopee", description: "Fórmula prática, exemplos por categoria, erros comuns e checklist para revisar o título antes de publicar.", readingTime: "7 min de leitura", topics: ["Fórmula", "4 exemplos", "Checklist"], toolHref: "/gerador-de-anuncios-shopee#ferramenta", toolLabel: "Gerar título para Shopee" },
  { category: "Shopee", href: "/como-fazer-descricao-para-shopee", eyebrow: "Shopee", title: "Como fazer descrição para Shopee", description: "Estrutura em quatro blocos, modelo editável, exemplo e checklist para criar uma descrição útil e fácil de ler.", readingTime: "7 min de leitura", topics: ["Modelo pronto", "Exemplo", "Checklist"], toolHref: "/gerador-de-anuncios-shopee#ferramenta", toolLabel: "Gerar descrição para Shopee" },
  { category: "Shopee", href: "/como-preencher-atributos-na-shopee", eyebrow: "Shopee", title: "Como preencher os atributos de produto na Shopee", description: "Organize características obrigatórias e opcionais com dados precisos e coerentes com título, fotos e descrição.", readingTime: "6 min de leitura", topics: ["Atributos", "Consistência", "Checklist"], toolHref: "/gerador-de-anuncios-shopee#ferramenta", toolLabel: "Gerador para Shopee" },

  { category: "OLX", href: "/como-criar-anuncio-na-olx", eyebrow: "OLX", title: "Como criar um anúncio na OLX", description: "Guia para organizar título, fotos, categoria, descrição, preço, localização e revisão antes de publicar.", readingTime: "8 min de leitura", topics: ["8 etapas", "Checklist", "Modelo de descrição"], toolHref: "/gerador-de-anuncios-olx#ferramenta", toolLabel: "Gerador para OLX" },
  { category: "OLX", href: "/como-criar-titulo-para-olx", eyebrow: "OLX", title: "Como criar título para OLX", description: "Fórmula prática, exemplos, erros comuns e checklist para deixar o título direto e fácil de identificar.", readingTime: "7 min de leitura", topics: ["Fórmula", "4 exemplos", "Checklist"], toolHref: "/gerador-de-anuncios-olx#ferramenta", toolLabel: "Gerar título para OLX" },
  { category: "OLX", href: "/como-fazer-descricao-para-olx", eyebrow: "OLX", title: "Como fazer descrição para OLX", description: "Estrutura em quatro blocos, modelo editável, exemplo e checklist para explicar o estado do item e os detalhes da venda.", readingTime: "7 min de leitura", topics: ["Modelo pronto", "Condição", "Checklist"], toolHref: "/gerador-de-anuncios-olx#ferramenta", toolLabel: "Gerar descrição para OLX" },

  { category: "Facebook Marketplace", href: "/como-criar-anuncio-no-facebook-marketplace", eyebrow: "Facebook Marketplace", title: "Como criar um anúncio no Facebook Marketplace", description: "Organize fotos, título, preço, categoria, condição, descrição e revisão para apresentar o item com clareza.", readingTime: "8 min de leitura", topics: ["8 etapas", "Condição", "Checklist"], toolHref: "/gerador-de-anuncios-facebook-marketplace#ferramenta", toolLabel: "Gerador para Marketplace" },
  { category: "Facebook Marketplace", href: "/como-criar-titulo-para-facebook-marketplace", eyebrow: "Facebook Marketplace", title: "Como criar título para Facebook Marketplace", description: "Fórmula prática, exemplos e checklist para identificar o item com clareza e sem exageros.", readingTime: "6 min de leitura", topics: ["Fórmula", "4 exemplos", "Condição"], toolHref: "/gerador-de-anuncios-facebook-marketplace#ferramenta", toolLabel: "Gerar título para Marketplace" },
  { category: "Facebook Marketplace", href: "/como-fazer-descricao-para-facebook-marketplace", eyebrow: "Facebook Marketplace", title: "Como fazer descrição para Facebook Marketplace", description: "Modelo editável e checklist para explicar condição, características, defeitos e itens incluídos no classificado.", readingTime: "6 min de leitura", topics: ["Modelo pronto", "Condição", "Checklist"], toolHref: "/gerador-de-anuncios-facebook-marketplace#ferramenta", toolLabel: "Gerar descrição para Marketplace" },

  { category: "Loja virtual", href: "/como-criar-pagina-de-produto-para-loja-virtual", eyebrow: "Loja virtual", title: "Como criar uma página de produto para loja virtual", description: "Passo a passo para montar título, imagens, benefícios, descrição, ficha técnica, SEO e revisão da página de produto.", readingTime: "9 min de leitura", topics: ["8 etapas", "Modelo pronto", "SEO de produto"], toolHref: "/gerador-de-anuncios-para-loja-virtual#ferramenta", toolLabel: "Gerador para loja virtual" },
  { category: "Loja virtual", href: "/como-fazer-descricao-para-loja-virtual", eyebrow: "Loja virtual", title: "Como fazer descrição para loja virtual", description: "Estrutura em cinco blocos, modelo editável, erros comuns e checklist para apresentar o produto com clareza.", readingTime: "7 min de leitura", topics: ["5 blocos", "Modelo", "Checklist"], toolHref: "/gerador-de-anuncios-para-loja-virtual#ferramenta", toolLabel: "Gerar conteúdo para loja" },
  { category: "Loja virtual", href: "/como-escrever-beneficios-de-produto", eyebrow: "Loja virtual", title: "Como escrever benefícios de produto", description: "Método para transformar características confirmadas em utilidade sem criar promessas que o produto não sustenta.", readingTime: "6 min de leitura", topics: ["Fórmula", "4 exemplos", "Checklist"], toolHref: "/gerador-de-anuncios-para-loja-virtual#ferramenta", toolLabel: "Gerar benefícios" },
  { category: "Loja virtual", href: "/seo-para-pagina-de-produto", eyebrow: "Loja virtual", title: "SEO para página de produto", description: "Checklist de conteúdo e sinais técnicos para ajudar compradores e mecanismos de busca a entender a página.", readingTime: "7 min de leitura", topics: ["8 pontos", "Product/Offer", "SEO técnico"], toolHref: "/gerador-de-anuncios-para-loja-virtual#ferramenta", toolLabel: "Gerar conteúdo para loja" },
  { category: "Loja virtual", href: "/como-fazer-ficha-tecnica-de-produto", eyebrow: "Loja virtual", title: "Como fazer ficha técnica de produto", description: "Modelo por grupos, campos por categoria, exemplo e checklist para organizar especificações sem inventar dados.", readingTime: "7 min de leitura", topics: ["Modelo", "Especificações", "Checklist"], toolHref: "/gerador-de-anuncios-para-loja-virtual#ferramenta", toolLabel: "Gerar ficha técnica" },

  { category: "Instagram", href: "/como-criar-legenda-para-instagram", eyebrow: "Instagram", title: "Como criar legenda para Instagram", description: "Guia para definir objetivo, criar gancho, apresentar o produto, explicar benefícios, escrever CTA, escolher hashtags e revisar.", readingTime: "8 min de leitura", topics: ["8 etapas", "Modelo editável", "CTA e hashtags"], toolHref: "/gerador-de-legendas-para-instagram#ferramenta", toolLabel: "Gerador de legendas" },
  { category: "Instagram", href: "/como-criar-cta-para-instagram", eyebrow: "Instagram", title: "Como criar CTA para Instagram", description: "Fórmula e exemplos para deixar claro o próximo passo sem urgência falsa ou chamadas vagas.", readingTime: "6 min de leitura", topics: ["Fórmula", "4 exemplos", "Checklist"], toolHref: "/gerador-de-legendas-para-instagram#ferramenta", toolLabel: "Gerar legenda com CTA" },
  { category: "Instagram", href: "/como-escolher-hashtags-para-instagram", eyebrow: "Instagram", title: "Como escolher hashtags para Instagram", description: "Método para selecionar termos coerentes com produto, nicho e intenção da publicação sem repetir palavras aleatórias.", readingTime: "6 min de leitura", topics: ["5 passos", "Exemplo", "Checklist"], toolHref: "/gerador-de-legendas-para-instagram#ferramenta", toolLabel: "Gerar legenda com hashtags" },

  { category: "Fundamentos", href: "/como-fazer-descricao-de-produto", eyebrow: "Descrição de produto", title: "Como fazer uma descrição de produto", description: "Estrutura completa, modelo editável e exemplos para transformar informações verdadeiras em um texto claro e persuasivo.", readingTime: "9 min de leitura", topics: ["Modelo pronto", "4 exemplos", "Erros comuns"], toolHref: "/gerador-de-descricao-de-produto#ferramenta", toolLabel: "Gerador de descrição" },
  { category: "Fundamentos", href: "/como-criar-titulo-de-produto", eyebrow: "Título de produto", title: "Como criar título de produto", description: "Fórmula em quatro partes, modelos por categoria e exemplos para deixar cada versão fácil de identificar.", readingTime: "8 min de leitura", topics: ["Fórmula pronta", "8 exemplos", "Checklist"], toolHref: "/gerador-de-titulos-para-produtos#ferramenta", toolLabel: "Gerador de títulos" },
  { category: "Fundamentos", href: "/como-escolher-palavras-chave-para-produtos", eyebrow: "Palavras-chave", title: "Como escolher palavras-chave para produtos", description: "Método em seis etapas para encontrar termos principais, atributos e cauda longa sem repetição artificial.", readingTime: "9 min de leitura", topics: ["Método prático", "5 categorias", "Checklist"], toolHref: "/gerador-de-palavras-chave-para-produtos#ferramenta", toolLabel: "Gerador de palavras-chave" },
  { category: "Fundamentos", href: "/como-criar-nome-de-produto", eyebrow: "Nome de produto", title: "Como criar nome de produto", description: "Briefing, estilos, critérios de avaliação, exemplos fictícios e cuidados antes de lançar um nome no mercado.", readingTime: "9 min de leitura", topics: ["Método prático", "6 exemplos", "Verificação"], toolHref: "/gerador-de-nomes-para-produtos#ferramenta", toolLabel: "Gerador de nomes" },
];

const guideGroups = [
  { id: "mercado-livre", label: "Mercado Livre", description: "Do anúncio completo ao título, descrição, ficha técnica e palavras-chave." },
  { id: "shopee", label: "Shopee", description: "Estruture anúncio, título, descrição e atributos de forma coerente." },
  { id: "olx", label: "OLX", description: "Guias para classificados claros, com condição, preço e informações úteis." },
  { id: "facebook-marketplace", label: "Facebook Marketplace", description: "Organize anúncios locais com título, descrição e condição do item." },
  { id: "loja-virtual", label: "Loja virtual", description: "Página de produto, SEO, benefícios, descrição e ficha técnica para e-commerce." },
  { id: "instagram", label: "Instagram", description: "Legenda, CTA e hashtags alinhados ao objetivo da publicação." },
  { id: "fundamentos", label: "Fundamentos", description: "Princípios que funcionam em vários canais: nome, título, descrição e palavras-chave." },
] as const;

const groupedGuides = guideGroups.map((group) => ({
  ...group,
  guides: guides.filter((guide) => guide.category === group.label),
}));

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: TITLE,
      description: DESCRIPTION,
      url: ABSOLUTE_URL,
      inLanguage: "pt-BR",
      hasPart: guides.map((guide) => ({
        "@type": "Article",
        headline: guide.title,
        url: `${SITE_URL}${guide.href}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guias", item: ABSOLUTE_URL },
      ],
    },
  ],
};

export default function GuiasPage() {
  return (
    <>
      <SiteHeader ctaHref="/#ferramentas" />
      <main>
        <section aria-labelledby="guias-titulo" className="relative overflow-hidden border-b border-line bg-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
          <div className="container-page relative py-10 sm:py-16">
            <nav aria-label="Trilha de navegação">
              <ol className="flex items-center gap-2 text-xs text-muted">
                <li><Link href="/" className="transition-colors hover:text-ink">Início</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-ink-soft">Guias</li>
              </ol>
            </nav>

            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">
                {guides.length} guias gratuitos para quem vende online
              </p>
              <h1 id="guias-titulo" className="mt-6 text-[2.25rem] font-semibold leading-[1.06] sm:text-5xl lg:text-[3.65rem]">
                Guias para vender online por canal e tarefa
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Encontre o conteúdo certo para Mercado Livre, Shopee, OLX, Facebook Marketplace, loja virtual e Instagram — ou comece pelos fundamentos que servem em vários canais.
              </p>
              <a href="#trilhas" className="mt-8 inline-flex rounded-2xl bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                Escolher uma trilha
              </a>
            </div>
          </div>
        </section>

        <section id="trilhas" aria-labelledby="trilhas-titulo" className="container-page scroll-mt-24 py-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Trilhas rápidas</p>
            <h2 id="trilhas-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Escolha o canal que você quer melhorar</h2>
            <p className="mt-3 text-[15px] leading-7 text-muted">
              Cada trilha reúne conteúdos relacionados para você avançar sem precisar procurar página por página.
            </p>
          </div>

          <nav aria-label="Categorias de guias" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {groupedGuides.map((group) => (
              <a key={group.id} href={`#${group.id}`} className="group rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand-500">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-semibold text-ink transition-colors group-hover:text-brand-600">{group.label}</span>
                  <span className="rounded-full bg-canvas px-2.5 py-1 text-xs font-semibold text-muted">{group.guides.length}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">{group.description}</p>
              </a>
            ))}
          </nav>
        </section>

        <div className="border-y border-line bg-white">
          <div className="container-page py-14 sm:py-20">
            <div className="space-y-16 sm:space-y-20">
              {groupedGuides.map((group) => (
                <section key={group.id} id={group.id} aria-labelledby={`${group.id}-titulo`} className="scroll-mt-24">
                  <div className="grid gap-5 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-10">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Trilha</p>
                      <h2 id={`${group.id}-titulo`} className="mt-3 text-2xl font-semibold sm:text-3xl">{group.label}</h2>
                      <p className="mt-3 text-[15px] leading-7 text-muted">{group.description}</p>
                      <p className="mt-4 text-xs font-medium text-muted">{group.guides.length} {group.guides.length === 1 ? "guia" : "guias"}</p>
                    </div>

                    <div className="grid gap-5 xl:grid-cols-2">
                      {group.guides.map((guide) => (
                        <article key={guide.href} className="flex flex-col rounded-3xl border border-line bg-canvas p-6 sm:p-7">
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">{guide.eyebrow}</p>
                          <h3 className="mt-4 text-xl font-semibold leading-tight sm:text-2xl">
                            <Link href={guide.href} className="transition-colors hover:text-brand-600">{guide.title}</Link>
                          </h3>
                          <p className="mt-3 text-[15px] leading-7 text-muted">{guide.description}</p>
                          <ul className="mt-5 flex flex-wrap gap-2">
                            {guide.topics.map((topic) => (
                              <li key={topic} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink-soft">{topic}</li>
                            ))}
                          </ul>
                          <p className="mt-5 text-xs text-muted">{guide.readingTime}</p>
                          <div className="mt-auto flex flex-col gap-3 border-t border-line pt-6 sm:mt-7 sm:flex-row">
                            <Link href={guide.href} className="rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                              Ler o guia
                            </Link>
                            <Link href={guide.toolHref} className="rounded-xl border border-line-strong bg-white px-4 py-3 text-center text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600">
                              {guide.toolLabel}
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>

        <section aria-labelledby="metodo-titulo" className="container-page py-14 sm:py-20">
          <div className="grid gap-10 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Método AnunciaAI</p>
              <h2 id="metodo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Aprenda, gere e revise</h2>
              <p className="mt-3 text-[15px] leading-7 text-muted">
                Os guias explicam o raciocínio. As ferramentas aceleram a escrita. A revisão final ajuda a confirmar que o texto representa o produto e as condições informadas por você.
              </p>
            </div>
            <ol className="grid gap-4 sm:grid-cols-3">
              {[
                { number: "1", title: "Aprenda", text: "Entenda a estrutura e veja exemplos de uso." },
                { number: "2", title: "Gere", text: "Informe os dados do produto e receba uma primeira versão." },
                { number: "3", title: "Revise", text: "Confira cada informação antes de copiar e publicar." },
              ].map((step) => (
                <li key={step.number} className="rounded-2xl border border-line bg-canvas p-5">
                  <span className="grid size-8 place-items-center rounded-lg bg-ink text-xs font-semibold text-white">{step.number}</span>
                  <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="guias-cta-titulo" className="container-page pb-14 sm:pb-20">
          <div className="rounded-3xl bg-ink px-6 py-12 text-center sm:px-12">
            <h2 id="guias-cta-titulo" className="text-2xl font-semibold text-white sm:text-3xl">Já sabe o que precisa criar?</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/70">
              Vá direto para as ferramentas gratuitas e transforme as informações do produto em uma primeira versão pronta para revisar.
            </p>
            <Link href="/#ferramentas" className="mt-7 inline-flex rounded-2xl bg-white px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-brand-500 hover:text-white">
              Ver ferramentas gratuitas
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
