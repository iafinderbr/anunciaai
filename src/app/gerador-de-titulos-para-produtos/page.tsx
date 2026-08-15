import type { Metadata } from "next";
import Link from "next/link";
import { GeneratorTool } from "@/components/generator/generator-tool";
import { SiteHeader } from "@/components/site-header";
import {
  TitlesAnatomy,
  TitlesChannels,
  TitlesFaq,
  TitlesFeatures,
  TitlesHowItWorks,
  TitlesMistakes,
} from "@/components/sections/titles-sections";
import { PricingSection, SiteFooter } from "@/components/sections/pricing";
import { SITE_URL } from "@/lib/site";
import { TITLES_EXAMPLE_INPUT } from "@/lib/titles-content";

const PATH = "/gerador-de-titulos-para-produtos";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;

const TITLE = "Gerador de Títulos para Produtos com IA | Grátis";
const DESCRIPTION =
  "Crie títulos de produtos com palavras-chave e o limite certo de cada canal. Informe as características e receba opções prontas em segundos. Grátis.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "gerador de títulos para produtos",
    "título de produto com IA",
    "criar título de produto",
    "título para e-commerce",
    "título para marketplace",
    "título de produto pronto",
    "título persuasivo para produto",
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Gerador de títulos para produtos",
      item: ABSOLUTE_URL,
    },
  ],
};

const highlights = [
  "Título pronto em segundos",
  "No limite de cada canal",
  "Variações para testar",
  "Palavras-chave de busca",
  "100% grátis",
];

export default function TitulosParaProdutosPage() {
  return (
    <>
      <SiteHeader />

      <main id="topo">
        {/* HERO + FERRAMENTA */}
        <section aria-labelledby="titles-hero-titulo" className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.10),transparent_70%)]"
          />

          <div className="container-page relative pb-4 pt-8 sm:pt-12">
            <nav aria-label="Trilha de navegação" className="mx-auto max-w-3xl">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
                <li>
                  <Link href="/" className="transition-colors hover:text-ink">
                    Início
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-ink-soft">
                  Gerador de títulos
                </li>
              </ol>
            </nav>

            <div className="mx-auto mt-8 max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-3 py-1.5 text-xs font-medium text-ink-soft shadow-card">
                <span className="size-1.5 rounded-full bg-brand-500" />
                Ferramenta gratuita para lojistas e vendedores online
              </p>

              <h1
                id="titles-hero-titulo"
                className="mt-6 text-[2.15rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]"
              >
                Gerador de títulos para produtos com IA
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Informe o nome e as características do seu produto e receba títulos prontos, no limite de cada canal e
                com as palavras que o comprador busca — em segundos.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="#ferramenta"
                  className="w-full rounded-2xl bg-ink px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-brand-600 sm:w-auto"
                >
                  Gerar título grátis
                </a>
                <a
                  href="#como-funciona"
                  className="w-full rounded-2xl border border-line-strong bg-white px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600 sm:w-auto"
                >
                  Ver como funciona
                </a>
              </div>

              <p className="mt-3 text-sm text-muted">Sem cartão de crédito.</p>

              <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="ferramenta" className="container-page scroll-mt-20 pb-16 pt-10 sm:pb-20">
            <div className="mx-auto max-w-3xl">
              <GeneratorTool
                exampleInput={TITLES_EXAMPLE_INPUT}
                title="Crie seus títulos de produto"
                subtitle="Preencha os campos abaixo e receba o título principal e variações, no limite do canal escolhido."
              />
            </div>
          </div>
        </section>

        <TitlesHowItWorks />
        <TitlesAnatomy />
        <TitlesFeatures />
        <TitlesMistakes />
        <TitlesChannels />
        <section aria-labelledby="guia-titulos-titulo" className="border-y border-line bg-white">
          <div className="container-page py-14 sm:py-20">
            <div className="grid items-center gap-8 rounded-3xl border border-line bg-canvas p-6 shadow-card sm:p-9 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Guia completo</p>
                <h2 id="guia-titulos-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Entenda a fórmula antes de publicar
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-muted">
                  Veja modelos por categoria, oito exemplos, regras por canal e um checklist para confirmar se o título
                  identifica exatamente o produto anunciado.
                </p>
              </div>
              <Link
                href="/como-criar-titulo-de-produto"
                className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Ler o guia gratuito
              </Link>
            </div>
          </div>
        </section>
        <PricingSection />
        <TitlesFaq />

        {/* CTA FINAL + LINKS INTERNOS */}
        <section aria-labelledby="titles-cta-final" className="border-t border-line bg-canvas">
          <div className="container-page py-14 sm:py-20">
            <div className="rounded-3xl bg-ink px-6 py-12 text-center sm:px-12">
              <h2 id="titles-cta-final" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Seu próximo título pode estar pronto em 30 segundos
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/70">
                Cole as informações do produto e receba o título principal e variações, no formato de cada canal.
              </p>
              <a
                href="#ferramenta"
                className="mt-7 inline-flex rounded-2xl bg-white px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-brand-500 hover:text-white"
              >
                Gerar título grátis
              </a>
              <p className="mt-3 text-sm text-white/60">Sem cartão de crédito.</p>
            </div>

            <p className="mt-8 text-center text-sm text-muted">
              Precisa do anúncio completo?{" "}
              <a
                href="/gerador-de-anuncios-mercado-livre"
                className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
              >
                Use o gerador de anúncios para Mercado Livre
              </a>
              {" · "}
              <a
                href="/gerador-de-descricao-de-produto"
                className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
              >
                Crie a descrição do seu produto
              </a>
              {" · "}
              <Link href="/" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">
                Veja todos os geradores
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
