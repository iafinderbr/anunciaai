import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-criar-titulo-para-mercado-livre";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-16";
const TITLE = "Como Criar Título para Mercado Livre: Fórmula e Exemplos";
const DESCRIPTION =
  "Aprenda como criar título para Mercado Livre com fórmula prática, exemplos por categoria, erros comuns e checklist para deixar o anúncio claro e fácil de encontrar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como criar título para Mercado Livre",
    "título Mercado Livre",
    "modelo de título Mercado Livre",
    "exemplo de título Mercado Livre",
    "título de anúncio Mercado Livre",
    "como fazer título Mercado Livre",
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
        { "@type": "ListItem", position: 3, name: "Título para Mercado Livre", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const examples = [
  {
    category: "Eletrônicos",
    weak: "Fone incrível Bluetooth promoção",
    strong: "Fone Bluetooth JBL Tune 510BT Preto",
  },
  {
    category: "Casa",
    weak: "Liquidificador potente novo barato",
    strong: "Liquidificador Mondial Turbo 900W 3L",
  },
  {
    category: "Informática",
    weak: "Mouse gamer top RGB",
    strong: "Mouse Gamer Logitech G203 RGB 8000 DPI",
  },
  {
    category: "Moda",
    weak: "Tênis lindo confortável original",
    strong: "Tênis Adidas Grand Court Base Masculino",
  },
];

const checklist = [
  "O título começa pelo produto e não por uma promoção.",
  "Marca e modelo estão corretos e correspondem ao item anunciado.",
  "As especificações escolhidas ajudam a diferenciar a versão.",
  "Não há frete, parcelamento, desconto ou condição do produto no título.",
  "Cor e tamanho só aparecem quando realmente ajudam a identificar a versão e não deveriam estar apenas nas variações.",
  "O título está de acordo com a categoria, ficha técnica, fotos e descrição.",
  "Você conferiu o limite e as orientações exibidos pelo Mercado Livre para aquela categoria e fluxo de publicação.",
];

export default function ComoCriarTituloMercadoLivrePage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-mercado-livre#ferramenta" />
      <main id="ferramenta">
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]"
            />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação">
                <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  <li><Link href="/" className="hover:text-ink">Início</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/guias" className="hover:text-ink">Guias</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="font-medium text-ink-soft">Título para Mercado Livre</li>
                </ol>
              </nav>

              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">
                  Guia prático · Atualizado em agosto de 2026
                </p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">
                  Como criar um título para Mercado Livre
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                  Use uma estrutura simples para identificar o produto, destacar a versão correta e evitar palavras que ocupam espaço sem ajudar o comprador.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/gerador-de-anuncios-mercado-livre#ferramenta"
                    className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600"
                  >
                    Gerar título com IA grátis
                  </Link>
                  <a
                    href="#formula"
                    className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600"
                  >
                    Ver a fórmula
                  </a>
                </div>
                <p className="mt-5 text-sm text-muted">Leitura de aproximadamente 7 minutos · Por AnunciaAI</p>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section id="formula" aria-labelledby="formula-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Fórmula prática</p>
                <h2 id="formula-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Produto + marca + modelo + especificação útil
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  O Mercado Livre recomenda títulos claros e objetivos, começando pelo produto e acrescentando marca, modelo e algumas especificações que realmente ajudam a identificar a versão. A ideia é facilitar a correspondência entre o anúncio e o que o comprador procura.
                </p>
                <div className="mt-6 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Modelo</p>
                  <p className="mt-3 text-xl font-semibold sm:text-2xl">[PRODUTO] + [MARCA] + [MODELO] + [ESPECIFICAÇÃO]</p>
                  <p className="mt-3 text-sm leading-7 text-muted">Exemplo: Fone Bluetooth JBL Tune 510BT Preto</p>
                </div>
              </section>

              <section aria-labelledby="prioridades-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Ordem de prioridade</p>
                <h2 id="prioridades-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">O que colocar primeiro</h2>
                <ol className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    ["1", "Produto", "Diga imediatamente o que está sendo vendido: fone, tênis, liquidificador, notebook, mochila."],
                    ["2", "Marca", "Use a marca verdadeira do item. Se for genérico, não invente uma marca conhecida."],
                    ["3", "Modelo", "Inclua o código ou nome do modelo quando ele diferenciar versões do mesmo produto."],
                    ["4", "Especificação", "Capacidade, potência, medida ou outra característica pode entrar quando realmente ajuda a reconhecer a versão."],
                  ].map(([number, title, text]) => (
                    <li key={number} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                      <span className="grid size-9 place-items-center rounded-xl bg-ink text-xs font-semibold text-white">{number}</span>
                      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section aria-labelledby="evitar-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Evite desperdiçar o título</p>
                <h2 id="evitar-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Informações que normalmente não deveriam ocupar esse espaço</h2>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Frete grátis, devolução ou parcelamento.",
                    "Palavras promocionais como imperdível, oferta ou barato.",
                    "Condição como novo, usado ou recondicionado quando a plataforma já exibe isso em outro campo.",
                    "A palavra estoque ou chamadas como última unidade.",
                    "Repetições do mesmo termo para tentar aparecer mais vezes.",
                    "Marca de terceiro sem relação real com o produto.",
                  ].map((item) => (
                    <li key={item} className="rounded-2xl border border-line bg-white p-5 text-sm leading-7 text-muted shadow-card">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="exemplos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Antes e depois</p>
                <h2 id="exemplos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Exemplos de títulos mais claros</h2>
                <div className="mt-8 grid gap-4">
                  {examples.map((example) => (
                    <article key={example.category} className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">{example.category}</p>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl bg-canvas p-4">
                          <p className="text-xs font-semibold text-muted">Evite</p>
                          <p className="mt-2 text-sm leading-6 text-muted line-through">{example.weak}</p>
                        </div>
                        <div className="rounded-2xl border border-brand-200 bg-brand-50 p-4">
                          <p className="text-xs font-semibold text-brand-600">Prefira</p>
                          <p className="mt-2 text-sm font-medium leading-6 text-ink-soft">{example.strong}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section aria-labelledby="limite-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Limite de caracteres</p>
                <h2 id="limite-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Não trate um único número como regra para todas as categorias</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  O limite de título pode variar conforme a categoria e o fluxo de publicação. Em fluxos mais novos, o próprio Mercado Livre também pode montar o título a partir das informações do produto. Por isso, use um título conciso e sempre confirme o limite mostrado na tela antes de publicar.
                </p>
                <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5 text-sm leading-7 text-ink-soft">
                  A ferramenta do AnunciaAI mantém os títulos curtos de propósito, mas a validação final deve considerar a categoria e as orientações exibidas na sua conta do Mercado Livre.
                </div>
              </section>

              <section aria-labelledby="checklist-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
                <h2 id="checklist-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Revise antes de publicar</h2>
                <ul className="mt-7 grid gap-3">
                  {checklist.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card">
                      <span className="font-bold text-brand-600">✓</span>
                      <span className="text-sm leading-7 text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10">
                <h2 className="text-2xl font-semibold sm:text-3xl">Quer gerar o anúncio completo?</h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">
                  Informe os dados reais do produto e receba título, descrição, benefícios, ficha técnica e palavras-chave para revisar antes de publicar.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-mercado-livre#ferramenta" className="rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:bg-brand-500 hover:text-white">
                    Abrir gerador para Mercado Livre
                  </Link>
                  <Link href="/como-fazer-descricao-para-mercado-livre" className="rounded-2xl border border-white/20 px-6 py-3.5 text-center text-sm font-semibold text-white hover:border-white/50">
                    Ver guia de descrição
                  </Link>
                </div>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Neste guia</p>
                <nav aria-label="Índice do guia">
                  <ul className="mt-4 grid gap-3 text-sm text-muted">
                    <li><a href="#formula" className="hover:text-brand-600">Fórmula do título</a></li>
                    <li><a href="#prioridades-titulo" className="hover:text-brand-600">Ordem de prioridade</a></li>
                    <li><a href="#evitar-titulo" className="hover:text-brand-600">O que evitar</a></li>
                    <li><a href="#exemplos-titulo" className="hover:text-brand-600">Exemplos</a></li>
                    <li><a href="#limite-titulo" className="hover:text-brand-600">Limite de caracteres</a></li>
                    <li><a href="#checklist-titulo" className="hover:text-brand-600">Checklist</a></li>
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
