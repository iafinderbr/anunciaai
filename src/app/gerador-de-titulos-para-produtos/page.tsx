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

const TITLE = "Gerador de Títulos para Produtos | Grátis";
const DESCRIPTION =
  "Crie variações de títulos a partir do nome, categoria e características do produto. Compare opções e revise o formato antes de usar em lojas e marketplaces.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "gerador de títulos para produtos",
    "criar título de produto",
    "título para e-commerce",
    "título para marketplace",
    "ideias de título de produto",
    "título para anúncio de produto",
  ],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: { type: "website", locale: "pt_BR", url: ABSOLUTE_URL, siteName: "AnunciaAI", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Gerador de títulos para produtos", item: ABSOLUTE_URL },
  ],
};

const highlights = ["Título principal + variações", "Formato adaptado ao canal", "Dados do produto", "Opções para revisar", "100% grátis"];

export default function TitulosParaProdutosPage() {
  return (
    <>
      <SiteHeader />
      <main id="topo">
        <section aria-labelledby="titles-hero-titulo" className="relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.10),transparent_70%)]" />
          <div className="container-page relative pb-4 pt-8 sm:pt-12">
            <nav aria-label="Trilha de navegação" className="mx-auto max-w-3xl"><ol className="flex flex-wrap items-center gap-2 text-xs text-muted"><li><Link href="/" className="transition-colors hover:text-ink">Início</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="font-medium text-ink-soft">Gerador de títulos</li></ol></nav>
            <div className="mx-auto mt-8 max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-3 py-1.5 text-xs font-medium text-ink-soft shadow-card"><span className="size-1.5 rounded-full bg-brand-500" />Ferramenta gratuita para lojistas e vendedores online</p>
              <h1 id="titles-hero-titulo" className="mt-6 text-[2.15rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">Gerador de títulos para produtos</h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">Informe o nome, a categoria e as características do produto e receba um título principal e variações para conferir e adaptar ao canal escolhido.</p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"><a href="#ferramenta" className="w-full rounded-2xl bg-ink px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-brand-600 sm:w-auto">Gerar títulos grátis</a><a href="#como-funciona" className="w-full rounded-2xl border border-line-strong bg-white px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600 sm:w-auto">Ver como funciona</a></div>
              <p className="mt-3 text-sm text-muted">Sem cartão de crédito.</p>
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">{highlights.map((item) => <li key={item} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink-soft">{item}</li>)}</ul>
            </div>
          </div>

          <div id="ferramenta" className="container-page scroll-mt-20 pb-16 pt-10 sm:pb-20"><div className="mx-auto max-w-3xl"><GeneratorTool exampleInput={TITLES_EXAMPLE_INPUT} title="Crie seus títulos de produto" subtitle="Preencha os campos abaixo e compare o título principal com outras variações antes de usar." /></div></div>
        </section>

        <TitlesHowItWorks />
        <TitlesAnatomy />
        <TitlesFeatures />
        <TitlesMistakes />
        <TitlesChannels />

        <section aria-labelledby="guia-titulos-titulo" className="border-y border-line bg-white">
          <div className="container-page py-14 sm:py-20"><div className="grid items-center gap-8 rounded-3xl border border-line bg-canvas p-6 shadow-card sm:p-9 lg:grid-cols-[1fr_auto]"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Guia completo</p><h2 id="guia-titulos-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Entenda a fórmula antes de publicar</h2><p className="mt-3 text-[15px] leading-7 text-muted">Veja modelos por categoria, exemplos e um checklist para confirmar se o título identifica exatamente o produto anunciado.</p></div><Link href="/como-criar-titulo-de-produto" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">Ler o guia gratuito</Link></div></div>
        </section>

        <PricingSection />
        <TitlesFaq />

        <section aria-labelledby="titles-cta-final" className="border-t border-line bg-canvas">
          <div className="container-page py-14 sm:py-20"><div className="rounded-3xl bg-ink px-6 py-12 text-center sm:px-12"><h2 id="titles-cta-final" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Compare variações para o seu próximo título</h2><p className="mx-auto mt-3 max-w-xl text-[15px] text-white/70">Cole as informações reais do produto, gere algumas opções e revise a versão escolhida antes de publicar.</p><a href="#ferramenta" className="mt-7 inline-flex rounded-2xl bg-white px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-brand-500 hover:text-white">Gerar títulos grátis</a><p className="mt-3 text-sm text-white/60">Sem cartão de crédito.</p></div><p className="mt-8 text-center text-sm text-muted">Precisa do anúncio completo? <Link href="/gerador-de-anuncios-mercado-livre" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">Use o gerador para Mercado Livre</Link>{" · "}<Link href="/gerador-de-descricao-de-produto" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">Crie a descrição do produto</Link>{" · "}<Link href="/" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">Veja todos os geradores</Link>.</p></div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
