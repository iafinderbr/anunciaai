import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/guias";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;

const TITLE = "Guias para Criar Anúncios e Descrições de Produtos";
const DESCRIPTION =
  "Aprenda a criar anúncios e descrições de produtos com guias práticos, exemplos e modelos para lojas virtuais e marketplaces.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "guias para vender online",
    "como criar anúncio de produto",
    "como fazer descrição de produto",
    "anúncio para marketplace",
    "conteúdo para e-commerce",
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
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const guides = [
  {
    href: "/como-criar-anuncio-no-mercado-livre",
    eyebrow: "Mercado Livre",
    title: "Como criar um anúncio no Mercado Livre",
    description:
      "Passo a passo para organizar categoria, título, fotos, ficha técnica, descrição, preço e revisão antes de publicar.",
    readingTime: "8 min de leitura",
    topics: ["8 etapas", "Checklist", "Modelo de descrição"],
    toolHref: "/gerador-de-anuncios-mercado-livre#ferramenta",
    toolLabel: "Gerador para Mercado Livre",
  },
  {
    href: "/como-fazer-descricao-de-produto",
    eyebrow: "Descrição de produto",
    title: "Como fazer uma descrição de produto",
    description:
      "Estrutura completa, modelo editável e exemplos para transformar informações verdadeiras em um texto claro e persuasivo.",
    readingTime: "9 min de leitura",
    topics: ["Modelo pronto", "4 exemplos", "Erros comuns"],
    toolHref: "/gerador-de-descricao-de-produto#ferramenta",
    toolLabel: "Gerador de descrição",
  },
];

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

      <main id="ferramenta">
        <section aria-labelledby="guias-titulo" className="relative overflow-hidden border-b border-line bg-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]"
          />
          <div className="container-page relative py-10 sm:py-16">
            <nav aria-label="Trilha de navegação">
              <ol className="flex items-center gap-2 text-xs text-muted">
                <li>
                  <Link href="/" className="transition-colors hover:text-ink">
                    Início
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-ink-soft">
                  Guias
                </li>
              </ol>
            </nav>

            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">
                Conteúdo gratuito para quem vende online
              </p>
              <h1 id="guias-titulo" className="mt-6 text-[2.25rem] font-semibold leading-[1.06] sm:text-5xl lg:text-[3.65rem]">
                Guias práticos para criar anúncios melhores
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Aprenda o processo, veja exemplos e use modelos prontos para apresentar seus produtos com clareza em
                lojas virtuais e marketplaces.
              </p>
              <a
                href="#todos-os-guias"
                className="mt-8 inline-flex rounded-2xl bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Ver todos os guias
              </a>
            </div>
          </div>
        </section>

        <section id="todos-os-guias" aria-labelledby="todos-titulo" className="container-page scroll-mt-24 py-14 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Biblioteca</p>
            <h2 id="todos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
              Escolha por onde começar
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Cada conteúdo ensina uma tarefa completa e termina na ferramenta gratuita que ajuda você a executar.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {guides.map((guide, index) => (
              <article key={guide.href} className="flex flex-col rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">{guide.eyebrow}</p>
                  <span className="grid size-9 place-items-center rounded-xl bg-ink text-xs font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold leading-tight">
                  <Link href={guide.href} className="transition-colors hover:text-brand-600">
                    {guide.title}
                  </Link>
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">{guide.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {guide.topics.map((topic) => (
                    <li key={topic} className="rounded-full border border-line bg-canvas px-3 py-1.5 text-xs font-medium text-ink-soft">
                      {topic}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-muted">{guide.readingTime}</p>
                <div className="mt-7 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row">
                  <Link
                    href={guide.href}
                    className="rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                  >
                    Ler o guia
                  </Link>
                  <Link
                    href={guide.toolHref}
                    className="rounded-xl border border-line-strong px-4 py-3 text-center text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600"
                  >
                    {guide.toolLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="metodo-titulo" className="border-y border-line bg-white">
          <div className="container-page py-14 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Método AnunciaAI</p>
                <h2 id="metodo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Aprenda, gere e revise
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-muted">
                  Os guias explicam o raciocínio. As ferramentas aceleram a escrita. A revisão final garante que o texto
                  represente exatamente o produto e as condições informadas por você.
                </p>
              </div>
              <ol className="grid gap-4 sm:grid-cols-3">
                {[
                  { number: "1", title: "Aprenda", text: "Entenda a estrutura e veja exemplos reais de uso." },
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
          </div>
        </section>

        <section aria-labelledby="guias-cta-titulo" className="container-page py-14 sm:py-20">
          <div className="rounded-3xl bg-ink px-6 py-12 text-center sm:px-12">
            <h2 id="guias-cta-titulo" className="text-2xl font-semibold text-white sm:text-3xl">
              Já sabe o que precisa criar?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/70">
              Escolha uma das ferramentas gratuitas e transforme as informações do produto em um texto pronto para revisar.
            </p>
            <Link
              href="/#ferramentas"
              className="mt-7 inline-flex rounded-2xl bg-white px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-brand-500 hover:text-white"
            >
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
