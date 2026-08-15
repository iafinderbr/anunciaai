import type { Metadata } from "next";
import Link from "next/link";
import { ProductKeywordsTool } from "@/components/generator/product-keywords-tool";
import {
  KeywordsFaq,
  KeywordsFeatures,
  KeywordsHowItWorks,
  KeywordsMistakes,
  KeywordsPlacement,
  KeywordsTypes,
} from "@/components/sections/keywords-sections";
import { PricingSection, SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/gerador-de-palavras-chave-para-produtos";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const TITLE = "Gerador de Palavras-Chave para Produtos | Grátis";
const DESCRIPTION =
  "Gere palavras-chave para produtos com IA. Receba termos principais, secundários e de cauda longa para Google, loja virtual e marketplaces. Grátis.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "gerador de palavras-chave para produtos",
    "palavras-chave para produtos",
    "palavras-chave para e-commerce",
    "palavras-chave para marketplace",
    "SEO para produtos",
    "palavras-chave de cauda longa",
    "gerador de palavras-chave grátis",
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
      name: "Gerador de palavras-chave para produtos",
      item: ABSOLUTE_URL,
    },
  ],
};

const highlights = [
  "Termos principais",
  "Cauda longa",
  "Intenção de busca",
  "Google e marketplaces",
  "100% grátis",
];

export default function PalavrasChaveParaProdutosPage() {
  return (
    <>
      <SiteHeader />

      <main id="topo">
        <section aria-labelledby="keywords-hero" className="relative overflow-hidden">
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
                  Gerador de palavras-chave
                </li>
              </ol>
            </nav>

            <div className="mx-auto mt-8 max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-3 py-1.5 text-xs font-medium text-ink-soft shadow-card">
                <span className="size-1.5 rounded-full bg-brand-500" />
                Ferramenta gratuita para vendedores e lojas online
              </p>

              <h1
                id="keywords-hero"
                className="mt-6 text-[2.15rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]"
              >
                Gerador de palavras-chave para produtos
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Descubra palavras principais, variações e buscas de cauda longa para apresentar seu produto no Google,
                na loja virtual e nos marketplaces.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="#ferramenta"
                  className="w-full rounded-2xl bg-ink px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-brand-600 sm:w-auto"
                >
                  Gerar palavras-chave grátis
                </a>
                <a
                  href="#como-funciona"
                  className="w-full rounded-2xl border border-line-strong bg-white px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600 sm:w-auto"
                >
                  Ver como funciona
                </a>
              </div>

              <p className="mt-3 text-sm text-muted">Sem cadastro e sem cartão de crédito.</p>

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
              <ProductKeywordsTool />
            </div>
          </div>
        </section>

        <KeywordsHowItWorks />
        <KeywordsTypes />
        <KeywordsFeatures />
        <KeywordsPlacement />
        <KeywordsMistakes />
        <PricingSection />
        <KeywordsFaq />

        <section aria-labelledby="keywords-cta-final" className="border-t border-line bg-canvas">
          <div className="container-page py-14 sm:py-20">
            <div className="rounded-3xl bg-ink px-6 py-12 text-center sm:px-12">
              <h2 id="keywords-cta-final" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Encontre novas formas de o comprador chegar ao produto
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/70">
                Informe os diferenciais e receba uma estratégia de palavras-chave organizada em segundos.
              </p>
              <a
                href="#ferramenta"
                className="mt-7 inline-flex rounded-2xl bg-white px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-brand-500 hover:text-white"
              >
                Gerar palavras-chave grátis
              </a>
              <p className="mt-3 text-sm text-white/60">Sem cadastro e sem cartão de crédito.</p>
            </div>

            <p className="mt-8 text-center text-sm text-muted">
              Agora use os termos para{" "}
              <a
                href="/gerador-de-titulos-para-produtos"
                className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
              >
                criar o título do produto
              </a>
              {" · "}
              <a
                href="/gerador-de-descricao-de-produto"
                className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
              >
                gerar uma descrição completa
              </a>
              {" · "}
              <Link href="/" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">
                ver todos os geradores
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
