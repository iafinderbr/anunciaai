import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-escolher-palavras-chave-para-mercado-livre";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const TITLE = "Como Escolher Palavras-chave para Mercado Livre";
const DESCRIPTION =
  "Aprenda a escolher palavras-chave para Mercado Livre usando termos buscados, título claro, categoria correta e ficha técnica completa sem repetir palavras artificialmente.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "palavras-chave Mercado Livre",
    "SEO Mercado Livre",
    "como escolher palavras-chave Mercado Livre",
    "otimizar anúncio Mercado Livre",
    "busca Mercado Livre",
  ],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: { type: "article", locale: "pt_BR", url: ABSOLUTE_URL, siteName: "AnunciaAI", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const steps = [
  ["Comece pelo produto real", "Liste o tipo do produto, marca, modelo e as características que realmente diferenciam aquela versão."],
  ["Veja como compradores procuram", "Use os termos mais buscados da sua categoria quando eles realmente descrevem o item. O Mercado Livre mostra palavras mais buscadas em Oportunidades de venda para algumas categorias."],
  ["Priorize clareza no título", "Monte o título com produto, marca, modelo e especificações úteis. Evite repetir a mesma palavra, inserir promoções ou encher o título de termos desconectados."],
  ["Escolha a categoria correta", "A categoria influencia onde o produto aparece e quais atributos e filtros ficam disponíveis. Uma categoria errada pode reduzir a descoberta do anúncio."],
  ["Complete a ficha técnica", "Preencha os atributos corretos da categoria. Eles ajudam compradores a encontrar o produto por filtros e complementam o que está no título."],
  ["Use a descrição para complementar", "Explique benefícios, compatibilidade, conteúdo da embalagem e detalhes úteis sem copiar a ficha técnica inteira nem repetir palavras só para tentar ranquear."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: TITLE, description: DESCRIPTION, mainEntityOfPage: ABSOLUTE_URL, inLanguage: "pt-BR", author: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL }, publisher: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE_URL}/guias` },
      { "@type": "ListItem", position: 3, name: "Palavras-chave para Mercado Livre", item: ABSOLUTE_URL },
    ] },
  ],
};

export default function PalavrasChaveMercadoLivrePage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-mercado-livre#ferramenta" />
      <main>
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação"><ol className="flex flex-wrap items-center gap-2 text-xs text-muted"><li><Link href="/">Início</Link></li><li>/</li><li><Link href="/guias">Guias</Link></li><li>/</li><li aria-current="page" className="font-medium text-ink-soft">Palavras-chave Mercado Livre</li></ol></nav>
              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Mercado Livre · SEO do anúncio</p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como escolher palavras-chave para Mercado Livre</h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Palavras-chave ajudam quando representam exatamente o produto. O melhor caminho é combinar busca real do comprador, título claro, categoria correta e ficha técnica completa — sem repetir termos artificialmente.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/gerador-de-anuncios-mercado-livre#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">Gerar anúncio para Mercado Livre</Link><Link href="/gerador-de-palavras-chave-para-produtos#ferramenta" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Gerar palavras-chave</Link></div>
              </div>
            </div>
          </header>

          <div className="container-page py-12 sm:py-16">
            <div className="mx-auto max-w-4xl">
              <section aria-labelledby="metodo-titulo">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Método prático</p>
                <h2 id="metodo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">6 passos para escolher os termos certos</h2>
                <div className="mt-8 grid gap-4">{steps.map(([title, text], index) => <section key={title} className="rounded-2xl border border-line bg-white p-6 shadow-card"><p className="text-xs font-semibold text-brand-600">PASSO {index + 1}</p><h3 className="mt-2 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-7 text-muted">{text}</p></section>)}</div>
              </section>

              <section aria-labelledby="exemplo-titulo" className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplo</p>
                <h2 id="exemplo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Do termo genérico para um anúncio identificável</h2>
                <div className="mt-7 rounded-3xl border border-line bg-canvas p-6 sm:p-8">
                  <p className="text-sm text-muted">Produto: fone de ouvido Bluetooth JBL Tune 510BT preto.</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-line bg-white p-5"><p className="text-xs font-semibold uppercase tracking-wide text-muted">Evite</p><p className="mt-2 font-semibold">fone bluetooth barato promoção oferta som fone</p></div><div className="rounded-2xl border border-line bg-white p-5"><p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Prefira</p><p className="mt-2 font-semibold">Fone Bluetooth JBL Tune 510BT Preto</p></div></div>
                </div>
              </section>

              <section aria-labelledby="checklist-titulo" className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
                <h2 id="checklist-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Antes de publicar</h2>
                <ul className="mt-7 grid gap-3">{["O termo principal descreve exatamente o produto.","Marca e modelo estão corretos e consistentes com a ficha técnica.","Não há repetição artificial de palavras no título.","A categoria corresponde ao item vendido.","Os atributos importantes da categoria foram preenchidos.","A descrição complementa o anúncio em vez de repetir tudo."].map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span className="font-bold text-brand-600">✓</span><span className="text-sm leading-7 text-ink-soft">{item}</span></li>)}</ul>
              </section>

              <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10"><h2 className="text-2xl font-semibold sm:text-3xl">Use os termos no anúncio completo</h2><p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Informe os dados reais do produto e gere uma primeira versão de título, descrição, benefícios e palavras-chave para revisar.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/gerador-de-anuncios-mercado-livre#ferramenta" className="rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink">Abrir gerador do Mercado Livre</Link><Link href="/como-criar-titulo-para-mercado-livre" className="rounded-2xl border border-white/20 px-6 py-3.5 text-center text-sm font-semibold text-white">Ver guia de título</Link></div></section>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
