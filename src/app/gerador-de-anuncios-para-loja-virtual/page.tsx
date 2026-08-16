import type { Metadata } from "next";
import Link from "next/link";
import { GeneratorTool } from "@/components/generator/generator-tool";
import { SiteHeader } from "@/components/site-header";
import {
  StoreAnatomy,
  StoreFaq,
  StoreFeatures,
  StoreHowItWorks,
  StoreMistakes,
} from "@/components/sections/store-sections";
import { PricingSection, SiteFooter } from "@/components/sections/pricing";
import { SITE_URL } from "@/lib/site";
import { STORE_EXAMPLE_INPUT } from "@/lib/store-content";

const PATH = "/gerador-de-anuncios-para-loja-virtual";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;

const TITLE = "Gerador de Anúncios para Loja Virtual com IA | Grátis";
const DESCRIPTION =
  "Crie uma primeira versão do conteúdo da página de produto: título, descrição, benefícios, ficha técnica, anúncio e termos de SEO. Grátis e sem cadastro.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "gerador de anúncios para loja virtual",
    "conteúdo para loja virtual",
    "criar página de produto",
    "descrição para e-commerce",
    "benefícios de produto",
    "anúncio de produto para e-commerce",
    "conteúdo de produto com IA",
    "página de produto completa",
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
    { "@type": "ListItem", position: 2, name: "Gerador de anúncios para loja virtual", item: ABSOLUTE_URL },
  ],
};

const highlights = ["Título para revisar", "Descrição completa", "Benefícios organizados", "Ficha técnica", "Termos de SEO", "100% grátis"];

export default function LojaVirtualPage() {
  return (
    <>
      <SiteHeader />
      <main id="topo">
        <section aria-labelledby="store-hero-titulo" className="relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.10),transparent_70%)]" />
          <div className="container-page relative pb-4 pt-8 sm:pt-12">
            <nav aria-label="Trilha de navegação" className="mx-auto max-w-3xl"><ol className="flex flex-wrap items-center gap-2 text-xs text-muted"><li><Link href="/" className="transition-colors hover:text-ink">Início</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="font-medium text-ink-soft">Gerador para loja virtual</li></ol></nav>
            <div className="mx-auto mt-8 max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-3 py-1.5 text-xs font-medium text-ink-soft shadow-card"><span className="size-1.5 rounded-full bg-brand-500" />Ferramenta gratuita para lojas virtuais e e-commerce</p>
              <h1 id="store-hero-titulo" className="mt-6 text-[2.15rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">Gerador de anúncios para loja virtual com IA</h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">Transforme as informações do produto em uma primeira versão de título, descrição, benefícios, ficha técnica, anúncio e termos de SEO para revisar antes de publicar.</p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"><a href="#ferramenta" className="w-full rounded-2xl bg-ink px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-brand-600 sm:w-auto">Gerar conteúdo grátis</a><a href="#como-funciona" className="w-full rounded-2xl border border-line-strong bg-white px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600 sm:w-auto">Ver como funciona</a></div>
              <p className="mt-3 text-sm text-muted">Sem cartão de crédito.</p>
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">{highlights.map((item) => <li key={item} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink-soft">{item}</li>)}</ul>
            </div>
          </div>
          <div id="ferramenta" className="container-page scroll-mt-20 pb-16 pt-10 sm:pb-20"><div className="mx-auto max-w-3xl"><GeneratorTool lockedChannel="loja-virtual" exampleInput={STORE_EXAMPLE_INPUT} title="Crie o conteúdo da sua página de produto" subtitle="Preencha os campos abaixo e receba uma primeira versão dos blocos para revisar e adaptar à sua loja." /></div></div>
        </section>

        <StoreHowItWorks />
        <StoreAnatomy />
        <StoreFeatures />
        <StoreMistakes />

        <section aria-labelledby="store-guias-titulo" className="border-y border-line bg-white">
          <div className="container-page py-12 sm:py-16">
            <div className="rounded-3xl border border-line bg-canvas p-6 shadow-card sm:p-9">
              <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
                <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Guias para loja virtual</p><h2 id="store-guias-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Monte uma página de produto mais completa</h2><p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">Veja o passo a passo completo ou aprofunde descrição, benefícios, SEO e ficha técnica antes de usar a ferramenta.</p></div>
                <Link href="/como-criar-pagina-de-produto-para-loja-virtual" className="rounded-xl bg-ink px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">Guia completo da página</Link>
              </div>
              <div className="mt-7 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
                <Link href="/como-fazer-descricao-para-loja-virtual" className="rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand-400"><span className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">Descrição</span><span className="mt-2 block font-semibold text-ink">Como fazer descrição para loja virtual</span><span className="mt-1.5 block text-sm leading-6 text-muted">Estrutura em cinco blocos, modelo editável, erros e checklist.</span></Link>
                <Link href="/como-escrever-beneficios-de-produto" className="rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand-400"><span className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">Benefícios</span><span className="mt-2 block font-semibold text-ink">Como escrever benefícios de produto</span><span className="mt-1.5 block text-sm leading-6 text-muted">Transforme características em utilidade sem inventar promessas.</span></Link>
                <Link href="/seo-para-pagina-de-produto" className="rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand-400"><span className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">SEO</span><span className="mt-2 block font-semibold text-ink">SEO para página de produto</span><span className="mt-1.5 block text-sm leading-6 text-muted">Conteúdo, Product/Offer, preço, disponibilidade e checklist técnico.</span></Link>
                <Link href="/como-fazer-ficha-tecnica-de-produto" className="rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand-400"><span className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">Ficha técnica</span><span className="mt-2 block font-semibold text-ink">Como fazer ficha técnica de produto</span><span className="mt-1.5 block text-sm leading-6 text-muted">Modelo, campos por categoria, exemplo e checklist.</span></Link>
              </div>
            </div>
          </div>
        </section>

        <PricingSection />
        <StoreFaq />

        <section aria-labelledby="store-cta-final" className="border-t border-line bg-canvas">
          <div className="container-page py-14 sm:py-20">
            <div className="rounded-3xl bg-ink px-6 py-12 text-center sm:px-12"><h2 id="store-cta-final" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Prepare a primeira versão da sua próxima página de produto</h2><p className="mx-auto mt-3 max-w-xl text-[15px] text-white/70">Cole as informações reais do produto e organize título, descrição, benefícios, ficha técnica e termos de SEO para revisar.</p><a href="#ferramenta" className="mt-7 inline-flex rounded-2xl bg-white px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-brand-500 hover:text-white">Gerar conteúdo grátis</a><p className="mt-3 text-sm text-white/60">Sem cartão de crédito.</p></div>
            <p className="mt-8 text-center text-sm text-muted">Precisa de mais conteúdo para o seu produto?{" "}<Link href="/gerador-de-descricao-de-produto" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">Crie apenas a descrição</Link>{" · "}<Link href="/gerador-de-titulos-para-produtos" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">Gere títulos</Link>{" · "}<Link href="/" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">Veja todos os geradores</Link>.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
