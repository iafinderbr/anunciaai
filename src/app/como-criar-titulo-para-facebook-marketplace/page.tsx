import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-criar-titulo-para-facebook-marketplace";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-16";
const TITLE = "Como Criar Título para Facebook Marketplace: Exemplos";
const DESCRIPTION =
  "Aprenda como criar título para Facebook Marketplace com fórmula prática, exemplos, erros comuns e checklist para deixar o classificado claro.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como criar título para Facebook Marketplace",
    "título Facebook Marketplace",
    "modelo de título Marketplace",
    "exemplo de título Facebook Marketplace",
    "título de anúncio Marketplace",
    "como anunciar no Marketplace",
  ],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: ABSOLUTE_URL,
    siteName: "AnunciaAI",
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: `${PUBLISHED_AT}T12:00:00-03:00`,
    modifiedTime: `${PUBLISHED_AT}T12:00:00-03:00`,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      mainEntityOfPage: ABSOLUTE_URL,
      datePublished: PUBLISHED_AT,
      dateModified: PUBLISHED_AT,
      inLanguage: "pt-BR",
      author: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL },
      publisher: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE_URL}/guias` },
        { "@type": "ListItem", position: 3, name: "Título para Facebook Marketplace", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const formula = [
  { title: "Produto", text: "Comece pelo nome que identifica o item sem ambiguidade: bicicleta, notebook, sofá, celular, mesa ou outro produto físico." },
  { title: "Marca e modelo", text: "Inclua quando forem confirmados e realmente ajudarem a reconhecer a versão anunciada." },
  { title: "Característica principal", text: "Acrescente tamanho, capacidade, material, cor ou outra especificação que diferencie a versão." },
  { title: "Condição", text: "Quando for relevante, finalize com uma condição verdadeira, como novo, usado ou recondicionado, coerente com as fotos e a descrição." },
];

const examples = [
  { weak: "Bicicleta top imperdível", strong: "Bicicleta Aro 29 21 Marchas Alumínio Usada" },
  { weak: "Notebook barato ótimo estado", strong: "Notebook Lenovo IdeaPad 3 Ryzen 5 8GB Usado" },
  { weak: "Sofá lindo promoção", strong: "Sofá 3 Lugares Cinza Retrátil Usado" },
  { weak: "Celular excelente oportunidade", strong: "iPhone 13 128GB Azul Usado" },
];

const checklist = [
  "O produto aparece logo no começo.",
  "Marca, modelo e especificações foram conferidos.",
  "A condição do item é compatível com fotos e descrição.",
  "Não há palavras promocionais vagas ocupando espaço.",
  "O título não esconde defeitos ou cria uma impressão diferente do item real.",
  "O produto anunciado é permitido pelas Políticas Comerciais da Meta.",
];

export default function ComoCriarTituloFacebookMarketplacePage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-facebook-marketplace#ferramenta" />
      <main id="ferramenta">
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação">
                <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  <li><Link href="/" className="hover:text-ink">Início</Link></li><li aria-hidden="true">/</li>
                  <li><Link href="/guias" className="hover:text-ink">Guias</Link></li><li aria-hidden="true">/</li>
                  <li aria-current="page" className="font-medium text-ink-soft">Título para Facebook Marketplace</li>
                </ol>
              </nav>
              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Guia prático · Atualizado em agosto de 2026</p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como criar título para Facebook Marketplace</h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Use as primeiras palavras para identificar o produto e complemente apenas com dados que ajudam o comprador a reconhecer a versão correta.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-facebook-marketplace#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">Gerar título e anúncio grátis</Link>
                  <a href="#formula" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver a fórmula</a>
                </div>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section id="formula" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Fórmula prática</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Produto + marca/modelo + característica + condição</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">A Meta não publica, nas orientações oficiais consultadas, um limite universal de caracteres para o título. Por isso, priorize clareza e identificação em vez de tentar preencher um número específico.</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {formula.map((item) => <section key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted">{item.text}</p></section>)}
                </div>
              </section>

              <section className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplos</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Troque frases promocionais por identificação</h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {examples.map((example) => <article key={example.strong} className="rounded-2xl border border-line bg-white p-5 shadow-card"><p className="text-xs font-semibold uppercase text-rose-700">Evite</p><p className="mt-2 text-sm text-muted">{example.weak}</p><p className="mt-5 text-xs font-semibold uppercase text-emerald-700">Prefira</p><p className="mt-2 font-medium">{example.strong}</p></article>)}
                </div>
              </section>

              <section className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Condição do item</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Não use o título para maquiar o estado real</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">O Marketplace permite classificar a condição do item, com opções que podem incluir novo, usado em diferentes estados e recondicionado. Se mencionar a condição no título, ela precisa ser coerente com a opção escolhida, as fotos e a descrição.</p>
              </section>

              <section className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Revise antes de publicar</h2>
                <ul className="mt-7 grid gap-3">{checklist.map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span className="font-bold text-brand-600">✓</span><span className="text-sm leading-7 text-ink-soft">{item}</span></li>)}</ul>
              </section>

              <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10">
                <h2 className="text-2xl font-semibold">Gere o classificado completo</h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Informe os dados reais do produto e receba uma primeira versão de título, descrição e benefícios para revisar.</p>
                <Link href="/gerador-de-anuncios-facebook-marketplace#ferramenta" className="mt-6 inline-flex rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink hover:bg-brand-500 hover:text-white">Abrir gerador para Marketplace</Link>
              </section>
            </div>

            <aside className="hidden lg:block"><div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Continue aprendendo</p><div className="mt-4 grid gap-3 text-sm"><Link href="/como-criar-anuncio-no-facebook-marketplace" className="hover:text-brand-600">Guia completo do anúncio</Link><Link href="/como-fazer-descricao-para-facebook-marketplace" className="hover:text-brand-600">Como fazer a descrição</Link></div></div></aside>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
