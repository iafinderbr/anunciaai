import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-fazer-descricao-para-shopee";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-16";
const TITLE = "Como Fazer Descrição para Shopee: Modelo e Exemplos";
const DESCRIPTION =
  "Aprenda como fazer descrição para Shopee com estrutura pronta, modelo editável, limite atual, exemplos e checklist para revisar antes de publicar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como fazer descrição para Shopee",
    "descrição Shopee",
    "modelo de descrição Shopee",
    "exemplo de descrição Shopee",
    "descrição de produto Shopee",
    "texto para anúncio Shopee",
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
        { "@type": "ListItem", position: 3, name: "Descrição para Shopee", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const structure = [
  { title: "1. Identifique o produto logo no início", text: "Abra dizendo o que é o item, marca, modelo e versão quando essas informações existirem. Evite começar com slogans ou frases promocionais." },
  { title: "2. Explique benefícios ligados a características reais", text: "Transforme material, capacidade, tamanho, potência, compatibilidade e outros dados confirmados em benefícios fáceis de entender." },
  { title: "3. Organize especificações e conteúdo da embalagem", text: "Use blocos curtos para medidas, material, compatibilidade, variações, itens incluídos e outras informações que ajudam a evitar dúvidas." },
  { title: "4. Termine com observações importantes", text: "Destaque voltagem, tamanho, compatibilidade, cuidados ou qualquer detalhe que o comprador precise conferir antes de finalizar a compra." },
];

const checklist = [
  "A descrição fala da mesma versão mostrada nas fotos e no título.",
  "Marca, modelo, material, medidas, capacidade e voltagem foram conferidos.",
  "O conteúdo da embalagem está correto e não inclui acessórios inexistentes.",
  "As primeiras linhas identificam o produto sem enrolação.",
  "Não há promessas enganosas de resultado, garantia, desconto, frete ou estoque.",
  "O texto está dividido em blocos curtos e fáceis de escanear no celular.",
  "Você conferiu o limite e as orientações atuais exibidas pela Shopee antes de publicar.",
];

export default function ComoFazerDescricaoShopeePage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-shopee#ferramenta" />
      <main id="ferramenta">
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação"><ol className="flex flex-wrap items-center gap-2 text-xs text-muted"><li><Link href="/" className="hover:text-ink">Início</Link></li><li aria-hidden="true">/</li><li><Link href="/guias" className="hover:text-ink">Guias</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="font-medium text-ink-soft">Descrição para Shopee</li></ol></nav>
              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Guia prático · Atualizado em agosto de 2026</p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como fazer uma descrição para Shopee</h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Monte uma descrição útil para o comprador, organizada em blocos curtos e baseada apenas em informações reais do produto.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/gerador-de-anuncios-shopee#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">Gerar descrição para Shopee grátis</Link><a href="#modelo" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver modelo pronto</a></div>
                <p className="mt-5 text-sm text-muted">Leitura de aproximadamente 7 minutos · Por AnunciaAI</p>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section id="limite" aria-labelledby="limite-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Limite atual</p>
                <h2 id="limite-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">A documentação atual da Shopee Ads cita até 3.000 caracteres</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">A Shopee Ads orienta vendedores a aproveitar a descrição com até 3.000 caracteres e recomenda atenção especial ao começo do texto. Em integrações com Google Ads, a própria Shopee sugere frases completas nos primeiros 150 caracteres para facilitar a leitura.</p>
                <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5 text-sm leading-7 text-ink-soft">Não tente preencher todo o limite. O objetivo é responder às dúvidas do comprador com informação relevante, não aumentar o texto artificialmente.</div>
              </section>

              <section id="estrutura" aria-labelledby="estrutura-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Estrutura</p>
                <h2 id="estrutura-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Uma descrição simples em quatro blocos</h2>
                <div className="mt-8 grid gap-4">{structure.map((item) => <section key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card"><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted">{item.text}</p></section>)}</div>
              </section>

              <section id="modelo" aria-labelledby="modelo-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Modelo editável</p>
                <h2 id="modelo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Modelo de descrição para Shopee</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">Substitua os campos entre colchetes apenas por informações confirmadas.</p>
                <div className="mt-6 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8"><p className="whitespace-pre-line text-sm leading-7 text-ink-soft">{`[NOME DO PRODUTO] [MARCA/MODELO] é indicado para [USO OU PÚBLICO].\n\nPrincipais benefícios:\n• [BENEFÍCIO LIGADO A UMA CARACTERÍSTICA REAL]\n• [BENEFÍCIO 2]\n• [BENEFÍCIO 3]\n\nDetalhes do produto:\n• Material: [MATERIAL]\n• Medidas/capacidade: [DADO CONFIRMADO]\n• Compatibilidade: [DADO CONFIRMADO]\n• Conteúdo da embalagem: [ITENS INCLUÍDOS]\n\nAntes da compra, confira [TAMANHO, COR, VOLTAGEM, MODELO OU OUTRO DADO IMPORTANTE].`}</p></div>
              </section>

              <section id="exemplo" aria-labelledby="exemplo-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplo</p>
                <h2 id="exemplo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Exemplo com um liquidificador</h2>
                <div className="mt-6 rounded-3xl border border-line bg-canvas p-6 sm:p-8"><p className="text-sm leading-7 text-ink-soft">O Liquidificador Mondial Turbo 900W 3L é indicado para o preparo diário de sucos, vitaminas e receitas simples. O copo de 3 litros oferece espaço para preparar porções maiores, enquanto a potência informada pelo fabricante atende diferentes preparos domésticos.</p><p className="mt-4 text-sm leading-7 text-ink-soft">Antes da compra, confira a voltagem da versão escolhida, os itens incluídos na embalagem e as medidas do produto.</p></div>
              </section>

              <section id="erros" aria-labelledby="erros-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Erros comuns</p>
                <h2 id="erros-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">O que enfraquece a descrição</h2>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">{["Começar com várias linhas promocionais antes de dizer qual é o produto.", "Repetir a mesma palavra-chave de forma artificial.", "Copiar uma descrição de outra versão e manter medidas ou compatibilidades erradas.", "Prometer frete, desconto, garantia ou resultado que não está configurado ou comprovado.", "Criar um bloco enorme de texto sem divisão visual.", "Esconder informação importante como voltagem, tamanho ou compatibilidade."].map((item) => <li key={item} className="rounded-2xl border border-line bg-white p-5 text-sm leading-7 text-muted shadow-card">{item}</li>)}</ul>
              </section>

              <section id="checklist" aria-labelledby="checklist-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
                <h2 id="checklist-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Revise antes de publicar</h2>
                <ul className="mt-7 grid gap-3">{checklist.map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span className="font-bold text-brand-600">✓</span><span className="text-sm leading-7 text-ink-soft">{item}</span></li>)}</ul>
              </section>

              <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10"><h2 className="text-2xl font-semibold sm:text-3xl">Quer montar o anúncio inteiro?</h2><p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Use os dados reais do produto para gerar uma primeira versão de título, descrição, benefícios e palavras-chave no AnunciaAI.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/gerador-de-anuncios-shopee#ferramenta" className="rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:bg-brand-500 hover:text-white">Abrir gerador para Shopee</Link><Link href="/como-criar-titulo-para-shopee" className="rounded-2xl border border-white/20 px-6 py-3.5 text-center text-sm font-semibold text-white hover:border-white/50">Ver guia de título</Link></div></section>

              <section className="mt-12 border-t border-line pt-8"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Fontes oficiais consultadas</p><ul className="mt-4 grid gap-2 text-sm text-muted"><li><a href="https://ads.shopee.com.br/learn/faq/363/1795" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">Shopee Ads — Google Ads com Shopee</a></li><li><a href="https://help.shopee.com.br/portal/4/article/77113" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">Shopee — Termos de Serviço para vendedores e compradores</a></li></ul></section>
            </div>

            <aside className="hidden lg:block"><div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Neste guia</p><nav aria-label="Índice do guia"><ul className="mt-4 grid gap-3 text-sm text-muted"><li><a href="#limite" className="hover:text-brand-600">Limite atual</a></li><li><a href="#estrutura" className="hover:text-brand-600">Estrutura</a></li><li><a href="#modelo" className="hover:text-brand-600">Modelo</a></li><li><a href="#exemplo" className="hover:text-brand-600">Exemplo</a></li><li><a href="#erros" className="hover:text-brand-600">Erros comuns</a></li><li><a href="#checklist" className="hover:text-brand-600">Checklist</a></li></ul></nav></div></aside>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
