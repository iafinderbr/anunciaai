import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-criar-titulo-para-shopee";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-16";
const TITLE = "Como Criar Título para Shopee: Fórmula e Exemplos";
const DESCRIPTION =
  "Aprenda como criar título para Shopee com fórmula prática, exemplos por categoria, limite atual, erros comuns e checklist para revisar antes de publicar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como criar título para Shopee",
    "título Shopee",
    "modelo de título Shopee",
    "exemplo de título Shopee",
    "título de produto Shopee",
    "como fazer título Shopee",
  ],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: ABSOLUTE_URL,
    siteName: "AnunciaAI",
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: `${PUBLISHED_AT}T12:00:00-03:00`,
    modifiedTime: `${PUBLISHED_AT}T12:00:00-03:00`,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      mainEntityOfPage: ABSOLUTE_URL,
      datePublished: PUBLISHED_AT,
      dateModified: PUBLISHED_AT,
      inLanguage: "pt-BR",
      author: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL },
      publisher: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE_URL}/guias` },
        { "@type": "ListItem", position: 3, name: "Título para Shopee", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const examples = [
  { category: "Eletrônicos", weak: "Fone top promoção imperdível", strong: "Fone Bluetooth JBL Tune 510BT Preto" },
  { category: "Casa", weak: "Liquidificador muito potente barato", strong: "Liquidificador Mondial Turbo 900W 3L 127V" },
  { category: "Moda", weak: "Camiseta linda confortável nova", strong: "Camiseta Feminina Algodão Manga Curta Preta" },
  { category: "Organização", weak: "Kit de potes perfeito para casa", strong: "Kit 3 Potes Herméticos 1L Transparente" },
];

const checklist = [
  "O produto aparece logo no começo do título.",
  "Marca, linha e modelo estão corretos quando existem.",
  "Cor, tamanho, material, quantidade ou outra característica só entram quando ajudam a identificar a versão.",
  "Não há palavras promocionais vagas, repetição de termos ou informações imprecisas.",
  "O título corresponde às fotos, atributos, variações e descrição.",
  "O texto respeita o limite exibido pela Shopee no momento da publicação.",
];

export default function ComoCriarTituloShopeePage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-shopee#ferramenta" />
      <main id="ferramenta">
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação">
                <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  <li><Link href="/" className="hover:text-ink">Início</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/guias" className="hover:text-ink">Guias</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="font-medium text-ink-soft">Título para Shopee</li>
                </ol>
              </nav>
              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Guia prático · Atualizado em agosto de 2026</p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como criar título para Shopee</h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Use uma estrutura clara para identificar o produto, aproveitar bem o espaço disponível e evitar palavras que só ocupam caracteres sem ajudar o comprador.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-shopee#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">Gerar título para Shopee grátis</Link>
                  <a href="#formula" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver a fórmula</a>
                </div>
                <p className="mt-5 text-sm text-muted">Leitura de aproximadamente 7 minutos · Por AnunciaAI</p>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section id="limite" aria-labelledby="limite-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Limite atual</p>
                <h2 id="limite-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">A Shopee trabalha com até 120 caracteres no título</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">A documentação atual da Shopee Ads orienta a aproveitar a contagem de até 120 caracteres. Isso não significa preencher o campo com palavras repetidas: a própria Shopee recomenda títulos informativos, concisos e fáceis de entender.</p>
                <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5 text-sm leading-7 text-ink-soft">Use o espaço para identificar melhor o produto. Se o título já está completo e claro com menos caracteres, não acrescente termos só para chegar ao limite.</div>
              </section>

              <section id="formula" aria-labelledby="formula-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Fórmula prática</p>
                <h2 id="formula-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Produto + marca/linha + modelo + característica</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">A Shopee recomenda incluir dados que distinguem o item, como marca, linha, modelo, material, ingrediente principal, cor, tamanho e quantidade quando estiverem disponíveis e forem relevantes.</p>
                <div className="mt-7 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                  <p className="text-sm font-semibold text-brand-700">Exemplo da estrutura</p>
                  <p className="mt-3 font-mono text-sm leading-7 text-ink-soft">Fone Bluetooth + JBL + Tune 510BT + Preto</p>
                  <p className="mt-3 text-sm leading-7 text-muted">Resultado: Fone Bluetooth JBL Tune 510BT Preto</p>
                </div>
              </section>

              <section id="exemplos" aria-labelledby="exemplos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Antes e depois</p>
                <h2 id="exemplos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Troque elogios por informações do produto</h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {examples.map((example) => (
                    <article key={example.category} className="rounded-3xl border border-line bg-white p-6 shadow-card">
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">{example.category}</p>
                      <p className="mt-4 text-sm leading-7 text-muted"><span className="font-semibold text-ink">Evite:</span> {example.weak}</p>
                      <p className="mt-2 text-sm leading-7 text-ink-soft"><span className="font-semibold text-ink">Prefira:</span> {example.strong}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section id="erros" aria-labelledby="erros-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Erros comuns</p>
                <h2 id="erros-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">O que prejudica a clareza</h2>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {["Repetir a mesma palavra para tentar aparecer mais vezes na busca.", "Colocar promoção, frete ou urgência no lugar de características permanentes.", "Usar detalhes irrelevantes ou imprecisos que confundem o comprador.", "Escrever tudo em CAIXA ALTA.", "Misturar dados de cores, tamanhos ou modelos diferentes.", "Usar uma marca que não corresponde ao produto anunciado."].map((item) => (
                    <li key={item} className="rounded-2xl border border-line bg-white p-5 text-sm leading-7 text-muted shadow-card">{item}</li>
                  ))}
                </ul>
              </section>

              <section id="checklist" aria-labelledby="checklist-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
                <h2 id="checklist-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Revise antes de publicar</h2>
                <ul className="mt-7 grid gap-3">
                  {checklist.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span className="font-bold text-brand-600">✓</span><span className="text-sm leading-7 text-ink-soft">{item}</span></li>
                  ))}
                </ul>
              </section>

              <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10">
                <h2 className="text-2xl font-semibold sm:text-3xl">Quer gerar o anúncio inteiro?</h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Informe os dados reais do produto e use o AnunciaAI para criar uma primeira versão de título, descrição, benefícios e palavras-chave para revisar.</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-shopee#ferramenta" className="rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:bg-brand-500 hover:text-white">Abrir gerador para Shopee</Link>
                  <Link href="/como-criar-anuncio-na-shopee" className="rounded-2xl border border-white/20 px-6 py-3.5 text-center text-sm font-semibold text-white hover:border-white/50">Ver guia completo</Link>
                </div>
              </section>

              <section className="mt-12 border-t border-line pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Fontes oficiais consultadas</p>
                <ul className="mt-4 grid gap-2 text-sm text-muted">
                  <li><a href="https://ads.shopee.com.br/learn/faq/323/1462" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">Shopee Ads — Melhore a página do seu produto para ter sucesso</a></li>
                  <li><a href="https://ads.shopee.com.br/learn/faq/363/1795" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">Shopee Ads — Google Ads com Shopee</a></li>
                </ul>
              </section>
            </div>

            <aside className="hidden lg:block"><div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Neste guia</p><nav aria-label="Índice do guia"><ul className="mt-4 grid gap-3 text-sm text-muted"><li><a href="#limite" className="hover:text-brand-600">Limite atual</a></li><li><a href="#formula" className="hover:text-brand-600">Fórmula</a></li><li><a href="#exemplos" className="hover:text-brand-600">Exemplos</a></li><li><a href="#erros" className="hover:text-brand-600">Erros comuns</a></li><li><a href="#checklist" className="hover:text-brand-600">Checklist</a></li></ul></nav></div></aside>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
