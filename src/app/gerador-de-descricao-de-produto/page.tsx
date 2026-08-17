import type { Metadata } from "next";
import Link from "next/link";
import { GeneratorTool } from "@/components/generator/generator-tool";
import { SiteHeader } from "@/components/site-header";
import {
  DescAnatomy,
  DescChannels,
  DescFaq,
  DescFeatures,
  DescHowItWorks,
  DescMistakes,
} from "@/components/sections/desc-sections";
import { PricingSection, SiteFooter } from "@/components/sections/pricing";
import { DESC_EXAMPLE_INPUT } from "@/lib/desc-content";
import { SITE_URL } from "@/lib/site";

const PATH = "/gerador-de-descricao-de-produto";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;

const TITLE = "Gerador de Descrição de Produto | Grátis";
const DESCRIPTION =
  "Crie uma primeira versão de descrição de produto com características, benefícios e ficha técnica para revisar antes de usar em lojas e marketplaces.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "gerador de descrição de produto",
    "criar descrição de produto",
    "descrição para e-commerce",
    "modelo de descrição de produto",
    "como descrever um produto",
    "texto para produto",
    "descrição para loja virtual",
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
    { "@type": "ListItem", position: 2, name: "Gerador de descrição de produto", item: ABSOLUTE_URL },
  ],
};

const highlights = [
  "Primeira versão organizada",
  "Benefícios a partir das características",
  "Texto para revisar",
  "Sugestões de SEO",
  "100% grátis",
];

export default function DescricaoDeProdutoPage() {
  return (
    <>
      <SiteHeader />
      <main id="topo">
        <section aria-labelledby="desc-hero-titulo" className="relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.10),transparent_70%)]" />
          <div className="container-page relative pb-4 pt-8 sm:pt-12">
            <nav aria-label="Trilha de navegação" className="mx-auto max-w-3xl"><ol className="flex flex-wrap items-center gap-2 text-xs text-muted"><li><Link href="/" className="transition-colors hover:text-ink">Início</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="font-medium text-ink-soft">Gerador de descrição</li></ol></nav>
            <div className="mx-auto mt-8 max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-3 py-1.5 text-xs font-medium text-ink-soft shadow-card"><span className="size-1.5 rounded-full bg-brand-500" />Ferramenta gratuita para lojistas e vendedores online</p>
              <h1 id="desc-hero-titulo" className="mt-6 text-[2.15rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">Gerador de descrição de produto</h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">Informe as características reais do produto e receba uma primeira versão de descrição organizada para conferir, editar e adaptar à sua loja virtual ou marketplace.</p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"><a href="#ferramenta" className="w-full rounded-2xl bg-ink px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-brand-600 sm:w-auto">Gerar descrição grátis</a><a href="#como-funciona" className="w-full rounded-2xl border border-line-strong bg-white px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600 sm:w-auto">Ver como funciona</a></div>
              <p className="mt-3 text-sm text-muted">Sem cartão de crédito.</p>
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">{highlights.map((item) => <li key={item} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink-soft">{item}</li>)}</ul>
            </div>
          </div>

          <div id="ferramenta" className="container-page scroll-mt-20 pb-16 pt-10 sm:pb-20"><div className="mx-auto max-w-3xl"><GeneratorTool lockedChannel="loja-virtual" exampleInput={DESC_EXAMPLE_INPUT} title="Crie sua descrição de produto" subtitle="Preencha os campos abaixo e receba uma primeira versão organizada para revisar e adaptar à sua loja." /></div></div>
        </section>

        <DescHowItWorks />
        <DescAnatomy />
        <DescFeatures />
        <DescMistakes />
        <DescChannels />

        <section aria-labelledby="guia-descricao-titulo" className="border-y border-line bg-white">
          <div className="container-page py-14 sm:py-20">
            <div className="grid items-center gap-8 rounded-3xl border border-line bg-canvas p-6 shadow-card sm:p-9 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Guia completo</p><h2 id="guia-descricao-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Aprenda a revisar sua descrição como um lojista</h2><p className="mt-3 text-[15px] leading-7 text-muted">Veja a estrutura em seis partes, use o modelo editável e compare exemplos para eletrônicos, roupas, casa e acessórios antes de publicar.</p></div>
              <Link href="/como-fazer-descricao-de-produto" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">Ler o guia gratuito</Link>
            </div>
          </div>
        </section>

        <PricingSection />
        <DescFaq />

        <section aria-labelledby="desc-cta-final" className="border-t border-line bg-canvas">
          <div className="container-page py-14 sm:py-20">
            <div className="rounded-3xl bg-ink px-6 py-12 text-center sm:px-12"><h2 id="desc-cta-final" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Prepare a primeira versão da sua próxima descrição</h2><p className="mx-auto mt-3 max-w-xl text-[15px] text-white/70">Cole as informações do produto e organize descrição, benefícios, ficha técnica e chamada para ação para revisar.</p><a href="#ferramenta" className="mt-7 inline-flex rounded-2xl bg-white px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-brand-500 hover:text-white">Gerar descrição grátis</a><p className="mt-3 text-sm text-white/60">Sem cartão de crédito.</p></div>
            <p className="mt-8 text-center text-sm text-muted">Precisa de um anúncio completo?{" "}<Link href="/gerador-de-anuncios-mercado-livre" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">Gerador para Mercado Livre</Link>{" · "}<Link href="/gerador-de-anuncios-shopee" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">Gerador para Shopee</Link>{" · "}<Link href="/" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">Veja todos os geradores</Link>.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
