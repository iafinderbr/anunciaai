import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-preencher-atributos-na-shopee";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-16";
const TITLE = "Como Preencher os Atributos de Produto na Shopee";
const DESCRIPTION =
  "Veja como preencher os atributos de produto na Shopee com informações precisas, completas e coerentes com título, fotos e descrição.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["atributos Shopee", "características produto Shopee", "como preencher atributos Shopee", "anúncio Shopee", "cadastro produto Shopee"],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: { type: "article", locale: "pt_BR", url: ABSOLUTE_URL, siteName: "AnunciaAI", title: TITLE, description: DESCRIPTION, publishedTime: `${PUBLISHED_AT}T12:00:00-03:00`, modifiedTime: `${PUBLISHED_AT}T12:00:00-03:00` },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: TITLE, description: DESCRIPTION, mainEntityOfPage: ABSOLUTE_URL, datePublished: PUBLISHED_AT, dateModified: PUBLISHED_AT, inLanguage: "pt-BR", author: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL }, publisher: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE_URL}/guias` },
      { "@type": "ListItem", position: 3, name: "Atributos na Shopee", item: ABSOLUTE_URL },
    ] },
  ],
};

const examples = [
  ["Fone de ouvido", "Marca, modelo, tipo de conexão, cor e outras características exibidas pela categoria."],
  ["Roupa", "Marca, material, gênero, tamanho, cor e demais características que realmente descrevem a peça."],
  ["Eletrodoméstico", "Marca, modelo, potência, voltagem, capacidade, material e outras especificações aplicáveis."],
] as const;

export default function AtributosShopeePage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-shopee#ferramenta" />
      <main>
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação"><ol className="flex flex-wrap items-center gap-2 text-xs text-muted"><li><Link href="/">Início</Link></li><li>/</li><li><Link href="/guias">Guias</Link></li><li>/</li><li aria-current="page" className="font-medium text-ink-soft">Atributos na Shopee</li></ol></nav>
              <div className="mt-10 max-w-4xl"><p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Shopee · Cadastro do produto</p><h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como preencher os atributos de produto na Shopee</h1><p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">A Shopee recomenda preencher as características obrigatórias e, quando possível, também as opcionais com informações precisas. Isso deixa a página do produto mais completa e pode ajudar na visibilidade da listagem.</p><div className="mt-8"><Link href="/gerador-de-anuncios-shopee#ferramenta" className="inline-flex rounded-2xl bg-ink px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-600">Montar anúncio para Shopee</Link></div></div>
            </div>
          </header>

          <div className="container-page py-12 sm:py-16"><div className="mx-auto max-w-4xl">
            <section aria-labelledby="passos-titulo"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Passo a passo</p><h2 id="passos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Preencha sem adivinhar informações</h2><div className="mt-8 grid gap-4">{[
              ["1. Escolha a categoria correta", "Os campos disponíveis dependem do tipo de produto. Se os atributos não fazem sentido, revise a categoria antes de preencher."],
              ["2. Comece pelos obrigatórios", "Preencha primeiro os campos exigidos pela Shopee e confira cada informação na embalagem, no fabricante ou na documentação do produto."],
              ["3. Complete os opcionais úteis", "Quando a informação existe e é relevante, preencher os campos opcionais deixa o cadastro mais completo e facilita a compreensão do comprador."],
              ["4. Mantenha consistência", "Título, fotos, atributos e descrição devem representar a mesma versão, cor, tamanho, capacidade ou voltagem."],
              ["5. Revise erros de digitação", "A própria Shopee recomenda características precisas, abrangentes e sem erros de digitação."],
            ].map(([title, text]) => <section key={title} className="rounded-2xl border border-line bg-white p-6 shadow-card"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-7 text-muted">{text}</p></section>)}</div></section>

            <section aria-labelledby="exemplos-titulo" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplos</p><h2 id="exemplos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Os campos variam conforme o produto</h2><div className="mt-7 grid gap-4 sm:grid-cols-3">{examples.map(([product, fields]) => <article key={product} className="rounded-2xl border border-line bg-white p-5 shadow-card"><h3 className="font-semibold">{product}</h3><p className="mt-2 text-sm leading-7 text-muted">{fields}</p></article>)}</div><p className="mt-4 text-sm leading-7 text-muted">Use estes exemplos apenas como referência. Os atributos reais são os campos exibidos pela Shopee para a categoria escolhida.</p></section>

            <section aria-labelledby="erros-titulo" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Erros comuns</p><h2 id="erros-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">O que evitar</h2><ul className="mt-7 grid gap-3 sm:grid-cols-2">{["Preencher um atributo só para completar o cadastro, mesmo sem confirmar o dado.","Informar uma cor ou tamanho diferente do que aparece nas fotos.","Misturar especificações de versões diferentes do mesmo produto.","Deixar campos úteis vazios mesmo quando a informação está disponível.","Usar texto promocional no lugar de uma característica objetiva.","Copiar atributos de outro anúncio sem conferir o produto real."].map((item) => <li key={item} className="rounded-2xl border border-line bg-white p-5 text-sm leading-7 text-muted shadow-card">{item}</li>)}</ul></section>

            <section aria-labelledby="checklist-titulo" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p><h2 id="checklist-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Antes de publicar</h2><ul className="mt-7 grid gap-3">{["A categoria corresponde ao produto.","Os atributos obrigatórios foram preenchidos.","Os opcionais úteis foram completados quando a informação existe.","Não há dados inventados ou copiados de outra versão.","Título, fotos, atributos e descrição estão coerentes.","Medidas, tamanho, cor, capacidade e voltagem foram conferidos quando aplicáveis."].map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span className="font-bold text-brand-600">✓</span><span className="text-sm leading-7 text-ink-soft">{item}</span></li>)}</ul></section>

            <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10"><h2 className="text-2xl font-semibold sm:text-3xl">Depois dos atributos, monte o anúncio completo</h2><p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Use os dados confirmados do produto para gerar uma primeira versão de título, descrição e benefícios para revisar antes da publicação.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/gerador-de-anuncios-shopee#ferramenta" className="rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink">Abrir gerador para Shopee</Link><Link href="/como-criar-titulo-para-shopee" className="rounded-2xl border border-white/20 px-6 py-3.5 text-center text-sm font-semibold text-white">Ver guia de título</Link></div></section>
          </div></div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
