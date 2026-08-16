import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-fazer-ficha-tecnica-de-produto";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-16";
const TITLE = "Como Fazer Ficha Técnica de Produto: Modelo e Checklist";
const DESCRIPTION =
  "Aprenda como fazer ficha técnica de produto para loja virtual com modelo, exemplos de campos, organização por categoria e checklist para revisar especificações.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["como fazer ficha técnica de produto", "ficha técnica produto", "modelo ficha técnica produto", "especificações de produto", "ficha técnica e-commerce", "características de produto"],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: { type: "article", locale: "pt_BR", url: ABSOLUTE_URL, siteName: "AnunciaAI", title: TITLE, description: DESCRIPTION, publishedTime: `${PUBLISHED_AT}T12:00:00-03:00`, modifiedTime: `${PUBLISHED_AT}T12:00:00-03:00` },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: TITLE, description: DESCRIPTION, mainEntityOfPage: ABSOLUTE_URL, datePublished: PUBLISHED_AT, dateModified: PUBLISHED_AT, inLanguage: "pt-BR", author: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL }, publisher: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE_URL}/guias` }, { "@type": "ListItem", position: 3, name: "Ficha técnica de produto", item: ABSOLUTE_URL }] },
  ],
};

const groups = [
  { category: "Identificação", fields: ["Nome do produto", "Marca", "Linha", "Modelo", "SKU/código interno"] },
  { category: "Dimensões", fields: ["Altura", "Largura", "Profundidade/comprimento", "Peso", "Unidade de medida"] },
  { category: "Materiais e acabamento", fields: ["Material principal", "Cor", "Acabamento", "Composição"] },
  { category: "Desempenho", fields: ["Potência", "Capacidade", "Voltagem", "Velocidade", "Compatibilidade"] },
  { category: "Conteúdo", fields: ["Itens incluídos", "Quantidade", "Acessórios", "Manual/embalagem"] },
  { category: "Uso e cuidado", fields: ["Indicação", "Restrições", "Limpeza/manutenção", "Garantia confirmada"] },
];

const checklist = [
  "Todos os valores foram conferidos no produto, embalagem, manual ou fabricante.",
  "As unidades de medida estão padronizadas.",
  "Campos que não se aplicam foram removidos em vez de preenchidos por suposição.",
  "Variações como cor, tamanho e voltagem não foram misturadas.",
  "Título, descrição, imagens e ficha técnica descrevem a mesma versão.",
  "Informações comerciais que mudam com frequência, como preço e estoque, ficam em campos próprios da loja.",
];

export default function ComoFazerFichaTecnicaProdutoPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-para-loja-virtual#ferramenta" />
      <main id="ferramenta">
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação"><ol className="flex flex-wrap items-center gap-2 text-xs text-muted"><li><Link href="/" className="hover:text-ink">Início</Link></li><li aria-hidden="true">/</li><li><Link href="/guias" className="hover:text-ink">Guias</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="font-medium text-ink-soft">Ficha técnica de produto</li></ol></nav>
              <div className="mt-10 max-w-4xl"><p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Guia prático · Atualizado em agosto de 2026</p><h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como fazer ficha técnica de produto</h1><p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Organize especificações em campos curtos e verificáveis para ajudar o comprador a comparar versões sem depender de uma descrição longa.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/gerador-de-anuncios-para-loja-virtual#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">Gerar ficha técnica grátis</Link><a href="#modelo" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver modelo</a></div></div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Princípio</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Ficha técnica é dado, não texto promocional</h2><p className="mt-4 text-[15px] leading-7 text-muted">Cada linha deve responder a uma pergunta objetiva sobre o produto. Evite adjetivos como “premium”, “incrível” ou “o melhor”; use material, medida, capacidade, compatibilidade e outras especificações que possam ser confirmadas.</p></section>

              <section id="modelo" className="mt-16 scroll-mt-24"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Modelo por grupos</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Separe os campos por tipo de informação</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{groups.map((group) => <section key={group.category} className="rounded-2xl border border-line bg-white p-6 shadow-card"><h3 className="font-semibold">{group.category}</h3><ul className="mt-4 grid gap-2 text-sm text-muted">{group.fields.map((field) => <li key={field}>• {field}</li>)}</ul></section>)}</div><p className="mt-4 text-sm leading-7 text-muted">Use apenas os campos que fazem sentido para a categoria do produto. Eletrônicos, moda, móveis e cosméticos precisam de conjuntos diferentes de especificações.</p></section>

              <section className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplo</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Ficha curta de um liquidificador</h2><div className="mt-7 rounded-3xl bg-ink p-6 text-sm leading-7 text-white/80 sm:p-8"><p>Marca: Mondial</p><p>Modelo: Turbo L-99</p><p>Potência: 900 W</p><p>Capacidade do copo: 3 L</p><p>Voltagem: 127 V</p><p>Material do copo: SAN</p><p>Cor: Preto</p><p>Conteúdo da embalagem: liquidificador, copo, tampa e manual</p></div></section>

              <section className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Revise antes de publicar</h2><ul className="mt-7 grid gap-3">{checklist.map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span className="font-bold text-brand-600">✓</span><span className="text-sm leading-7 text-ink-soft">{item}</span></li>)}</ul></section>

              <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10"><h2 className="text-2xl font-semibold">Transforme especificações em conteúdo completo</h2><p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Depois de conferir os dados, use o gerador para criar título, descrição, benefícios e SEO mantendo a ficha técnica como fonte de verdade.</p><Link href="/gerador-de-anuncios-para-loja-virtual#ferramenta" className="mt-6 inline-flex rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink hover:bg-brand-500 hover:text-white">Abrir gerador para loja virtual</Link></section>
            </div>
            <aside className="hidden lg:block"><div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Continue aprendendo</p><div className="mt-4 grid gap-3 text-sm"><Link href="/como-criar-pagina-de-produto-para-loja-virtual" className="hover:text-brand-600">Página de produto completa</Link><Link href="/seo-para-pagina-de-produto" className="hover:text-brand-600">SEO para página de produto</Link><Link href="/como-fazer-descricao-de-produto" className="hover:text-brand-600">Como fazer descrição</Link></div></div></aside>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
