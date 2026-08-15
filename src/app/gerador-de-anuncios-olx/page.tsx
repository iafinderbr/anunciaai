import type { Metadata } from "next";
import Link from "next/link";
import { GeneratorTool } from "@/components/generator/generator-tool";
import { SiteHeader } from "@/components/site-header";
import { OlxFaq, OlxFeatures, OlxHowItWorks, OlxMistakes, OlxStructure } from "@/components/sections/olx-sections";
import { PricingSection, SiteFooter } from "@/components/sections/pricing";
import { OLX_EXAMPLE_INPUT } from "@/lib/olx-content";
import { SITE_URL } from "@/lib/site";

const PATH = "/gerador-de-anuncios-olx";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;

const TITLE = "Gerador de Anúncios para OLX com IA | Grátis";
const DESCRIPTION =
  "Crie anúncios claros para a OLX com inteligência artificial: título, descrição, estado de conservação e benefícios prontos para revisar em segundos. Grátis.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "gerador de anúncios para olx",
    "criar anúncio olx",
    "anúncio para olx",
    "descrição para olx",
    "título para anúncio olx",
    "criar anúncio com IA",
    "anúncio de produto usado",
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
      name: "Gerador de anúncios para OLX",
      item: ABSOLUTE_URL,
    },
  ],
};

const highlights = [
  "Título de até 90 caracteres",
  "Estado de conservação destacado",
  "Descrição estilo classificado",
  "Texto pronto para revisar",
  "100% grátis",
];

export default function OlxPage() {
  return (
    <>
      <SiteHeader />

      <main id="topo">
        <section aria-labelledby="olx-hero-titulo" className="relative overflow-hidden">
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
                  Gerador para OLX
                </li>
              </ol>
            </nav>

            <div className="mx-auto mt-8 max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-3 py-1.5 text-xs font-medium text-ink-soft shadow-card">
                <span className="size-1.5 rounded-full bg-brand-500" />
                Ferramenta gratuita para quem anuncia na OLX
              </p>

              <h1
                id="olx-hero-titulo"
                className="mt-6 text-[2.15rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]"
              >
                Gerador de anúncios para OLX com IA
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Transforme as informações do seu produto em uma primeira versão de anúncio para a OLX — com título,
                descrição, benefícios e estado de conservação para revisar antes de publicar.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="#ferramenta"
                  className="w-full rounded-2xl bg-ink px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-brand-600 sm:w-auto"
                >
                  Gerar meu anúncio grátis
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
                lockedChannel="olx"
                exampleInput={OLX_EXAMPLE_INPUT}
                title="Crie seu anúncio para a OLX"
                subtitle="Preencha os campos abaixo. O texto sai no estilo direto de um classificado para você revisar."
              />
            </div>
          </div>
        </section>

        <OlxHowItWorks />
        <OlxStructure />
        <OlxFeatures />
        <OlxMistakes />
        <PricingSection />
        <OlxFaq />

        <section aria-labelledby="olx-guia" className="border-t border-line bg-white">
          <div className="container-page py-12 sm:py-16">
            <div className="rounded-3xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Guia passo a passo</p>
              <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div className="max-w-2xl">
                  <h2 id="olx-guia" className="text-xl font-semibold sm:text-2xl">
                    Aprenda como criar um anúncio na OLX do início ao fim
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-ink-soft">
                    Veja as orientações atuais para título, fotos, categoria, descrição, preço, localização e revisão.
                  </p>
                </div>
                <Link
                  href="/como-criar-anuncio-na-olx"
                  className="shrink-0 rounded-xl bg-ink px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  Ler o guia da OLX
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="olx-cta-final" className="border-t border-line bg-canvas">
          <div className="container-page py-14 sm:py-20">
            <div className="rounded-3xl bg-ink px-6 py-12 text-center sm:px-12">
              <h2 id="olx-cta-final" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Crie uma primeira versão do seu próximo anúncio na OLX
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/70">
                Cole as informações do produto, gere o texto e confira cada detalhe antes de publicar.
              </p>
              <a
                href="#ferramenta"
                className="mt-7 inline-flex rounded-2xl bg-white px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-brand-500 hover:text-white"
              >
                Gerar meu anúncio grátis
              </a>
              <p className="mt-3 text-sm text-white/60">Sem cartão de crédito.</p>
            </div>

            <p className="mt-8 text-center text-sm text-muted">
              Vende em marketplaces também?{" "}
              <Link
                href="/gerador-de-anuncios-mercado-livre"
                className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
              >
                Use o gerador para Mercado Livre
              </Link>
              {" · "}
              <Link
                href="/gerador-de-anuncios-shopee"
                className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
              >
                Use o gerador para Shopee
              </Link>
              {" · "}
              <Link
                href="/gerador-de-descricao-de-produto"
                className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
              >
                Crie a descrição do seu produto
              </Link>
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
