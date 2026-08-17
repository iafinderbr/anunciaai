import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/seo-para-pagina-de-produto";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-16";
const TITLE = "SEO para Página de Produto: Checklist para Loja Virtual";
const DESCRIPTION =
  "Aprenda SEO para página de produto com checklist de título, descrição, imagens, dados estruturados Product, preço, disponibilidade e conteúdo útil.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["SEO para página de produto", "SEO e-commerce", "página de produto SEO", "dados estruturados Product", "SEO loja virtual", "produto Google Shopping"],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: { type: "article", locale: "pt_BR", url: ABSOLUTE_URL, siteName: "AnunciaAI", title: TITLE, description: DESCRIPTION, publishedTime: `${PUBLISHED_AT}T12:00:00-03:00`, modifiedTime: `${PUBLISHED_AT}T12:00:00-03:00` },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: TITLE, description: DESCRIPTION, mainEntityOfPage: ABSOLUTE_URL, datePublished: PUBLISHED_AT, dateModified: PUBLISHED_AT, inLanguage: "pt-BR", author: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL }, publisher: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE_URL}/guias` }, { "@type": "ListItem", position: 3, name: "SEO para página de produto", item: ABSOLUTE_URL }] },
  ],
};

const checklist = [
  { title: "Uma URL para cada produto ou variante relevante", text: "A página precisa focar em um produto específico. Evite misturar vários produtos diferentes em uma única URL quando a intenção é uma página de compra." },
  { title: "Título que identifica o produto", text: "Use produto, marca, modelo e característica principal de forma natural. O título da página e o H1 devem ajudar o usuário a reconhecer a versão correta." },
  { title: "Descrição original e útil", text: "Explique uso, benefícios, especificações, compatibilidade e conteúdo da embalagem com informações próprias, sem apenas copiar o fabricante." },
  { title: "Preço e disponibilidade visíveis", text: "Mantenha preço, estoque e condição de compra coerentes entre a página e os dados enviados ao Google." },
  { title: "Imagens reais e descritivas", text: "Use imagens nítidas, nomes de arquivo e textos alternativos úteis quando fizerem sentido, sem transformar alt text em uma lista de palavras-chave." },
  { title: "Dados estruturados Product e Offer", text: "Em páginas onde o cliente pode comprar, a marcação de produto do comerciante pode ajudar o Google a entender preço, disponibilidade, frete e outras informações." },
  { title: "Links internos", text: "Conecte o produto a categorias, guias e produtos relacionados de forma útil para navegação e descoberta." },
  { title: "Revisão técnica", text: "Confira canonical, indexação, status HTTP, conteúdo renderizado e se a página funciona bem no celular antes de promover a URL." },
];

export default function SeoPaginaProdutoPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-para-loja-virtual#ferramenta" />
      <main id="ferramenta">
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação"><ol className="flex flex-wrap items-center gap-2 text-xs text-muted"><li><Link href="/" className="hover:text-ink">Início</Link></li><li aria-hidden="true">/</li><li><Link href="/guias" className="hover:text-ink">Guias</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="font-medium text-ink-soft">SEO para página de produto</li></ol></nav>
              <div className="mt-10 max-w-4xl"><p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Guia prático · Atualizado em agosto de 2026</p><h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">SEO para página de produto: checklist para loja virtual</h1><p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Organize conteúdo, dados do produto e sinais técnicos para ajudar compradores e mecanismos de busca a entenderem exatamente o que está sendo vendido.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/gerador-de-anuncios-para-loja-virtual#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">Gerar conteúdo da página</Link><a href="#checklist" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver checklist</a></div></div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Base</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">SEO de produto começa pela utilidade da página</h2><p className="mt-4 text-[15px] leading-7 text-muted">Uma página de produto precisa responder rápido: o que é, qual versão, quanto custa, se está disponível e por que aquele item atende à necessidade do comprador. O Google recomenda dados estruturados de produto para ajudar a entender essas informações e pode usar esses dados em experiências mais ricas de busca.</p></section>

              <section id="checklist" className="mt-16 scroll-mt-24"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Oito pontos para revisar</h2><div className="mt-8 grid gap-4">{checklist.map((item, index) => <section key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card"><div className="flex items-start gap-4"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-ink text-xs font-semibold text-white">{String(index + 1).padStart(2, "0")}</span><div><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted">{item.text}</p></div></div></section>)}</div></section>

              <section className="mt-16 rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Dados estruturados</p><h2 className="mt-3 text-2xl font-semibold">Product ajuda o Google a entender o produto</h2><p className="mt-3 text-sm leading-7 text-ink-soft">Para páginas onde o cliente compra diretamente, o Google mantém requisitos específicos para marcação Product/Offer. Dados como preço, disponibilidade, frete e devolução podem tornar a página elegível a experiências de produto mais ricas, desde que a marcação corresponda ao conteúdo visível.</p></section>

              <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10"><h2 className="text-2xl font-semibold">Monte a primeira versão da página</h2><p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Use o gerador para organizar título, descrição, benefícios, ficha técnica e termos de SEO. Depois revise preço, estoque e informações técnicas no seu e-commerce.</p><Link href="/gerador-de-anuncios-para-loja-virtual#ferramenta" className="mt-6 inline-flex rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink hover:bg-brand-500 hover:text-white">Abrir gerador para loja virtual</Link></section>
            </div>
            <aside className="hidden lg:block"><div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Continue aprendendo</p><div className="mt-4 grid gap-3 text-sm"><Link href="/como-criar-pagina-de-produto-para-loja-virtual" className="hover:text-brand-600">Página de produto completa</Link><Link href="/como-fazer-ficha-tecnica-de-produto" className="hover:text-brand-600">Como fazer ficha técnica</Link><Link href="/como-fazer-descricao-de-produto" className="hover:text-brand-600">Como fazer descrição</Link></div></div></aside>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
