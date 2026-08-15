import type { Metadata } from "next";
import Link from "next/link";
import { GeneratorTool } from "@/components/generator/generator-tool";
import { SiteHeader } from "@/components/site-header";
import { MlAnatomy, MlFaq, MlFeatures, MlHowItWorks, MlMistakes } from "@/components/sections/ml-sections";
import { PricingSection, SiteFooter } from "@/components/sections/pricing";
import { ML_EXAMPLE_INPUT } from "@/lib/ml-content";
import { SITE_URL } from "@/lib/site";

const PATH = "/gerador-de-anuncios-mercado-livre";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;

const TITLE = "Gerador de Anúncios para Mercado Livre com IA | Grátis";
const DESCRIPTION =
  "Crie títulos de até 60 caracteres, descrições, ficha técnica e palavras-chave para seus anúncios do Mercado Livre com inteligência artificial. Grátis e sem cadastro.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "gerador de anúncios mercado livre",
    "criar anúncio mercado livre",
    "título para mercado livre",
    "descrição de produto mercado livre",
    "anúncio mercado livre com IA",
    "como vender no mercado livre",
    "ficha técnica mercado livre",
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
      name: "Gerador de anúncios para Mercado Livre",
      item: ABSOLUTE_URL,
    },
  ],
};

const highlights = ["Título com até 60 caracteres", "Ficha técnica pronta", "Palavras-chave de busca", "100% grátis"];

export default function MercadoLivrePage() {
  return (
    <>
      <SiteHeader />

      <main id="topo">
        {/* HERO + FERRAMENTA */}
        <section aria-labelledby="ml-hero-titulo" className="relative overflow-hidden">
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
                  Gerador para Mercado Livre
                </li>
              </ol>
            </nav>

            <div className="mx-auto mt-8 max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-3 py-1.5 text-xs font-medium text-ink-soft shadow-card">
                <span className="size-1.5 rounded-full bg-brand-500" />
                Ferramenta gratuita para vendedores do Mercado Livre
              </p>

              <h1
                id="ml-hero-titulo"
                className="mt-6 text-[2.15rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]"
              >
                Gerador de anúncios para Mercado Livre com IA
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Transforme as informações do seu produto em título, descrição, benefícios, ficha técnica e palavras-chave
                prontos para publicar no Mercado Livre — em segundos e dentro das regras da plataforma.
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
                lockedChannel="mercado-livre"
                exampleInput={ML_EXAMPLE_INPUT}
                title="Crie seu anúncio para o Mercado Livre"
                subtitle="Preencha os campos abaixo. O texto sai formatado nas regras do Mercado Livre."
              />
            </div>
          </div>
        </section>

        <MlHowItWorks />
        <MlAnatomy />
        <MlFeatures />
        <MlMistakes />
        <PricingSection />
        <MlFaq />

        {/* CTA FINAL + LINK INTERNO */}
        <section aria-labelledby="ml-cta-final" className="border-t border-line bg-canvas">
          <div className="container-page py-14 sm:py-20">
            <div className="rounded-3xl bg-ink px-6 py-12 text-center sm:px-12">
              <h2 id="ml-cta-final" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Publique seu próximo anúncio hoje mesmo
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/70">
                Cole as informações do produto e receba o anúncio completo, no formato que o Mercado Livre espera.
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
              Vende em outros canais também?{" "}
              <Link href="/" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">
                Use o gerador do AnunciaAI para Shopee, loja virtual e Instagram
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
