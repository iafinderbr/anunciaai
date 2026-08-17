import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-escolher-hashtags-para-instagram";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-16";
const UPDATED_AT = "2026-08-17";
const TITLE = "Como Escolher Hashtags para Instagram: Método Prático";
const DESCRIPTION =
  "Aprenda a escolher hashtags para Instagram com relevância para o produto, intenção do conteúdo, nicho e público sem repetir termos aleatórios.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["hashtags para Instagram", "como escolher hashtags", "hashtags para produtos", "hashtags para loja no Instagram", "hashtags para vendas"],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: { type: "article", locale: "pt_BR", url: ABSOLUTE_URL, siteName: "AnunciaAI", title: TITLE, description: DESCRIPTION, publishedTime: `${PUBLISHED_AT}T12:00:00-03:00`, modifiedTime: `${UPDATED_AT}T12:00:00-03:00` },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const steps = [
  ["Comece pelo produto", "Liste o tipo do produto, categoria, material, uso e características que realmente aparecem no conteúdo."],
  ["Inclua o nicho", "Adicione termos que representam o mercado e o contexto em que o produto é usado, sem fugir do assunto da publicação."],
  ["Pense na intenção", "Uma publicação de lançamento, demonstração, presente ou uso cotidiano pode pedir grupos de termos diferentes."],
  ["Misture termos específicos", "Prefira combinações que descrevem melhor o conteúdo em vez de usar apenas palavras muito genéricas ou populares."],
  ["Revise antes de publicar", "Remova hashtags repetidas, desconectadas do post ou que prometem algo que o produto não entrega."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: TITLE, description: DESCRIPTION, mainEntityOfPage: ABSOLUTE_URL, datePublished: PUBLISHED_AT, dateModified: UPDATED_AT, inLanguage: "pt-BR", author: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL }, publisher: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE_URL}/guias` },
      { "@type": "ListItem", position: 3, name: "Hashtags para Instagram", item: ABSOLUTE_URL },
    ] },
  ],
};

export default function HashtagsInstagramPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-legendas-para-instagram#ferramenta" />
      <main>
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação"><ol className="flex flex-wrap items-center gap-2 text-xs text-muted"><li><Link href="/">Início</Link></li><li>/</li><li><Link href="/guias">Guias</Link></li><li>/</li><li aria-current="page" className="font-medium text-ink-soft">Hashtags para Instagram</li></ol></nav>
              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Instagram · Descoberta de conteúdo</p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como escolher hashtags para Instagram</h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Use hashtags como rótulos de contexto: elas devem representar o produto, o nicho e a intenção real da publicação. O objetivo não é preencher espaço, e sim manter os termos coerentes com o conteúdo.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/gerador-de-legendas-para-instagram#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">Gerar legenda com hashtags</Link><Link href="/como-criar-legenda-para-instagram" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver guia de legenda</Link></div>
              </div>
            </div>
          </header>

          <div className="container-page py-12 sm:py-16"><div className="mx-auto max-w-4xl">
            <section aria-labelledby="metodo-hashtags"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Método prático</p><h2 id="metodo-hashtags" className="mt-3 text-2xl font-semibold sm:text-3xl">5 passos para montar um grupo relevante</h2><div className="mt-8 grid gap-4">{steps.map(([title, text], index) => <section key={title} className="rounded-2xl border border-line bg-white p-6 shadow-card"><p className="text-xs font-semibold text-brand-600">PASSO {index + 1}</p><h3 className="mt-2 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-7 text-muted">{text}</p></section>)}</div></section>

            <section aria-labelledby="exemplo-hashtags" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplo</p><h2 id="exemplo-hashtags" className="mt-3 text-2xl font-semibold sm:text-3xl">Do genérico para o específico</h2><div className="mt-7 rounded-3xl border border-line bg-canvas p-6 sm:p-8"><p className="text-sm text-muted">Produto: mochila impermeável preta para notebook.</p><div className="mt-5 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-line bg-white p-5"><p className="text-xs font-semibold uppercase tracking-wide text-muted">Muito genérico</p><p className="mt-2 font-semibold">#viral #instagood #promoção #top #love</p></div><div className="rounded-2xl border border-line bg-white p-5"><p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Mais coerente</p><p className="mt-2 font-semibold">#MochilaParaNotebook #MochilaImpermeavel #AcessoriosParaNotebook #MochilaPreta</p></div></div></div></section>

            <section className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Organização</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Monte o grupo a partir do que aparece no post</h2><p className="mt-4 text-[15px] leading-7 text-muted">Uma forma simples de revisar é separar os termos em três perguntas: qual produto aparece, em qual contexto ele está sendo mostrado e qual é o assunto daquela publicação. Em um post sobre uma mochila para notebook usada em deslocamentos, por exemplo, “mochila para notebook” descreve o item, enquanto um termo de contexto só faz sentido se o conteúdo realmente mostrar ou explicar esse uso.</p><p className="mt-4 text-[15px] leading-7 text-muted">Não existe vantagem em completar uma quantidade arbitrária se os termos extras perdem relação com o post. Quando duas hashtags dizem praticamente a mesma coisa, escolha a forma mais clara. E, se uma característica não aparece no produto ou não foi confirmada, deixe-a fora mesmo que pareça uma palavra atraente para o nicho.</p></section>

            <section aria-labelledby="erros-hashtags" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Erros comuns</p><h2 id="erros-hashtags" className="mt-3 text-2xl font-semibold sm:text-3xl">O que evitar</h2><ul className="mt-7 grid gap-3 sm:grid-cols-2">{["Copiar o mesmo bloco de hashtags para produtos sem relação entre si.","Usar termos populares que não descrevem a publicação.","Repetir variações quase idênticas sem necessidade.","Adicionar marcas, materiais ou características que o produto não possui.","Acreditar que hashtags compensam uma legenda pouco clara.","Publicar sem revisar se cada termo ainda representa o conteúdo."].map((item) => <li key={item} className="rounded-2xl border border-line bg-white p-5 text-sm leading-7 text-muted shadow-card">{item}</li>)}</ul></section>

            <section aria-labelledby="checklist-hashtags" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p><h2 id="checklist-hashtags" className="mt-3 text-2xl font-semibold sm:text-3xl">Antes de publicar</h2><ul className="mt-7 grid gap-3">{["Todas as hashtags têm relação direta com o conteúdo.","Há termos específicos do produto e do nicho.","Nenhuma hashtag inventa uma característica do item.","O bloco não depende apenas de palavras genéricas.","A legenda explica o produto mesmo sem as hashtags.","Os termos foram revisados para aquela publicação específica."].map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span className="font-bold text-brand-600">✓</span><span className="text-sm leading-7 text-ink-soft">{item}</span></li>)}</ul></section>

            <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10"><h2 className="text-2xl font-semibold sm:text-3xl">Gere a legenda completa e revise os termos</h2><p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Informe o produto e use o gerador para montar uma primeira versão de gancho, benefícios, CTA e hashtags para revisar antes de publicar.</p><Link href="/gerador-de-legendas-para-instagram#ferramenta" className="mt-7 inline-flex rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink">Abrir gerador de legendas</Link></section>
          </div></div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
