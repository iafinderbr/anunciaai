import type { Metadata } from "next";
import Link from "next/link";
import { ProductNameTool } from "@/components/generator/product-name-tool";
import { NamesDifference, NamesExamples, NamesFaq, NamesFeatures, NamesHowItWorks, NamesMistakes } from "@/components/sections/names-sections";
import { PricingSection, SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/gerador-de-nomes-para-produtos";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const TITLE = "Gerador de Nomes para Produtos | Grátis";
const DESCRIPTION = "Gere ideias de nomes para produtos em estilos diferentes a partir do seu briefing. Compare opções e verifique marca, domínio e redes sociais antes de escolher.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["gerador de nomes para produtos", "ideias de nomes para produtos", "criar nome para produto", "nomes para produtos", "gerador de nomes grátis"],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: { type: "website", locale: "pt_BR", url: ABSOLUTE_URL, siteName: "AnunciaAI", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const structuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Gerador de nomes para produtos", item: ABSOLUTE_URL }] };
const highlights = ["8 ideias por vez", "Vários estilos", "Explicação de cada opção", "Novas variações", "100% grátis"];

export default function NomesParaProdutosPage() {
  return (
    <>
      <SiteHeader />
      <main id="topo">
        <section aria-labelledby="names-hero-titulo" className="relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.10),transparent_70%)]" />
          <div className="container-page relative pb-4 pt-8 sm:pt-12">
            <nav aria-label="Trilha de navegação" className="mx-auto max-w-3xl"><ol className="flex gap-2 text-xs text-muted"><li><Link href="/" className="hover:text-ink">Início</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="font-medium text-ink-soft">Gerador de nomes</li></ol></nav>
            <div className="mx-auto mt-8 max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-3 py-1.5 text-xs font-medium shadow-card"><span className="size-1.5 rounded-full bg-brand-500" />Ferramenta gratuita para marcas e vendedores</p>
              <h1 id="names-hero-titulo" className="mt-6 text-[2.15rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">Gerador de nomes para produtos</h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">Use a ideia, a categoria, o público e os diferenciais informados para explorar nomes em estilos diferentes e comparar direções antes de escolher.</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href="#ferramenta" className="rounded-2xl bg-ink px-7 py-4 font-semibold text-white hover:bg-brand-600">Gerar nomes grátis</a><a href="#como-funciona" className="rounded-2xl border border-line-strong bg-white px-7 py-4 font-semibold hover:border-brand-500 hover:text-brand-600">Ver como funciona</a></div>
              <p className="mt-3 text-sm text-muted">Sem cadastro e sem cartão de crédito.</p>
              <ul className="mt-8 flex flex-wrap justify-center gap-2">{highlights.map((item) => <li key={item} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium">{item}</li>)}</ul>
            </div>
          </div>
          <div id="ferramenta" className="container-page scroll-mt-20 pb-16 pt-10 sm:pb-20"><div className="mx-auto max-w-3xl"><ProductNameTool /></div></div>
        </section>

        <NamesHowItWorks />
        <NamesDifference />
        <NamesFeatures />
        <NamesMistakes />
        <NamesExamples />
        <PricingSection />
        <NamesFaq />

        <section aria-labelledby="names-cta-final" className="border-t border-line bg-canvas">
          <div className="container-page py-14 sm:py-20"><div className="rounded-3xl bg-ink px-6 py-12 text-center sm:px-12"><h2 id="names-cta-final" className="text-2xl font-semibold text-white sm:text-3xl">Compare direções para o nome do seu produto</h2><p className="mx-auto mt-3 max-w-xl text-[15px] text-white/70">Gere novas opções, compare os estilos e pesquise disponibilidade antes de decidir.</p><a href="#ferramenta" className="mt-7 inline-flex rounded-2xl bg-white px-7 py-4 font-semibold text-ink hover:bg-brand-500 hover:text-white">Gerar nomes grátis</a></div><p className="mt-8 text-center text-sm text-muted">Já escolheu o nome? <Link href="/gerador-de-titulos-para-produtos" className="font-medium text-brand-600 underline underline-offset-4">Crie o título do anúncio</Link> · <Link href="/gerador-de-descricao-de-produto" className="font-medium text-brand-600 underline underline-offset-4">Gere a descrição</Link> · <Link href="/" className="font-medium text-brand-600 underline underline-offset-4">Veja todos os geradores</Link>.</p></div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
