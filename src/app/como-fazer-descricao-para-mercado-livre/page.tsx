import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-fazer-descricao-para-mercado-livre";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-16";
const TITLE = "Como Fazer Descrição para Mercado Livre: Modelo e Exemplos";
const DESCRIPTION =
  "Aprenda como fazer uma descrição para Mercado Livre com estrutura pronta, exemplo editável, checklist e boas práticas para complementar a ficha técnica.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como fazer descrição para Mercado Livre",
    "descrição Mercado Livre",
    "modelo de descrição Mercado Livre",
    "descrição de produto Mercado Livre",
    "exemplo de descrição Mercado Livre",
    "texto para anúncio Mercado Livre",
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
        { "@type": "ListItem", position: 3, name: "Descrição para Mercado Livre", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const structure = [
  {
    title: "1. Abra com a identificação do produto",
    text: "Comece dizendo de forma simples o que é o item, qual é a versão e para qual uso ele foi feito. Evite repetir o título palavra por palavra.",
  },
  {
    title: "2. Explique os principais benefícios",
    text: "Transforme características confirmadas em benefícios claros. Em vez de apenas listar uma especificação, explique quando ela faz diferença para o comprador.",
  },
  {
    title: "3. Complete com informações que não cabem na ficha técnica",
    text: "Use a descrição para contexto, modo de uso, conteúdo da embalagem, compatibilidade e observações úteis. Dados estruturados como marca, modelo, medidas e voltagem devem permanecer corretos na ficha técnica.",
  },
  {
    title: "4. Termine com uma revisão objetiva",
    text: "Confira se descrição, fotos, variações e ficha técnica falam exatamente do mesmo produto. Retire promessas, condições ou acessórios que não estejam confirmados.",
  },
];

const checklist = [
  "O texto descreve exatamente a versão anunciada.",
  "Marca, modelo, cor, tamanho e voltagem conferem com a ficha técnica.",
  "O conteúdo da embalagem está explicado sem inventar acessórios.",
  "Compatibilidade e limitações estão claras quando forem importantes.",
  "Preço, frete, parcelamento e garantia não foram prometidos de forma incorreta.",
  "A descrição está organizada em blocos curtos e fáceis de ler.",
];

export default function ComoFazerDescricaoMercadoLivrePage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-mercado-livre#ferramenta" />
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
                  <li aria-current="page" className="font-medium text-ink-soft">Descrição para Mercado Livre</li>
                </ol>
              </nav>
              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Guia prático · Atualizado em agosto de 2026</p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como fazer uma descrição para Mercado Livre</h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Monte uma descrição clara, curta e útil para complementar a ficha técnica, responder dúvidas e representar exatamente o produto anunciado.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-mercado-livre#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">Gerar descrição com IA grátis</Link>
                  <a href="#modelo" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver modelo pronto</a>
                </div>
                <p className="mt-5 text-sm text-muted">Leitura de aproximadamente 7 minutos · Por AnunciaAI</p>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section aria-labelledby="regra-principal" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Regra principal</p>
                <h2 id="regra-principal" className="mt-3 text-2xl font-semibold sm:text-3xl">A descrição complementa a ficha técnica</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">No Mercado Livre, a ficha técnica concentra as especificações estruturadas do produto. A descrição funciona melhor quando acrescenta contexto: uso, benefícios, conteúdo da embalagem, compatibilidade e observações que ajudam o comprador a entender o item sem repetir todos os campos técnicos.</p>
                <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5 text-sm leading-7 text-ink-soft">Antes de escrever, complete os dados técnicos corretos do produto. Depois use a descrição para explicar o que esses dados significam na prática.</div>
              </section>

              <section aria-labelledby="estrutura-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Estrutura</p>
                <h2 id="estrutura-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Uma estrutura simples em quatro blocos</h2>
                <div className="mt-8 grid gap-4">
                  {structure.map((item) => (
                    <section key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
                    </section>
                  ))}
                </div>
              </section>

              <section id="modelo" aria-labelledby="modelo-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Modelo editável</p>
                <h2 id="modelo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Modelo de descrição para Mercado Livre</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">Troque os campos entre colchetes apenas por informações verdadeiras do seu produto.</p>
                <div className="mt-6 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                  <p className="whitespace-pre-line text-sm leading-7 text-ink-soft">{`[NOME DO PRODUTO] é indicado para [USO OU PÚBLICO].\n\nPrincipais benefícios:\n• [BENEFÍCIO 1]\n• [BENEFÍCIO 2]\n• [BENEFÍCIO 3]\n\nDetalhes importantes:\n• Compatibilidade: [INFORMAÇÃO CONFIRMADA]\n• Material/acabamento: [INFORMAÇÃO CONFIRMADA]\n• Conteúdo da embalagem: [ITENS INCLUÍDOS]\n\nAntes da compra, confira [MEDIDA, VOLTAGEM, MODELO OU OUTRO DADO QUE POSSA EVITAR ERRO].`}</p>
                </div>
              </section>

              <section aria-labelledby="exemplo-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplo</p>
                <h2 id="exemplo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Exemplo com um fone Bluetooth</h2>
                <div className="mt-6 rounded-3xl border border-line bg-canvas p-6 sm:p-8">
                  <p className="text-sm leading-7 text-ink-soft">O Fone Bluetooth JBL Tune 510BT é uma opção sem fio para músicas, chamadas e uso diário. O formato leve facilita o transporte e a conexão Bluetooth elimina a necessidade de cabo durante o uso.</p>
                  <p className="mt-4 text-sm leading-7 text-ink-soft">Principais benefícios: conexão sem fio, controles integrados no fone e bateria recarregável. Antes da compra, confira a compatibilidade Bluetooth do aparelho que será utilizado e os itens incluídos na embalagem do anúncio.</p>
                </div>
              </section>

              <section aria-labelledby="erros-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Erros comuns</p>
                <h2 id="erros-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">O que enfraquece a descrição</h2>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {["Repetir a ficha técnica inteira sem acrescentar contexto.", "Usar frases promocionais vagas no lugar de informações úteis.", "Copiar a descrição de outro vendedor e herdar dados errados.", "Prometer acessórios, garantia ou compatibilidade não confirmados.", "Misturar informações de versões, cores ou voltagens diferentes.", "Criar um bloco enorme de texto sem organização visual."].map((item) => (
                    <li key={item} className="rounded-2xl border border-line bg-white p-5 text-sm leading-7 text-muted shadow-card">{item}</li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="checklist-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
                <h2 id="checklist-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Revise antes de publicar</h2>
                <ul className="mt-7 grid gap-3">
                  {checklist.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span className="font-bold text-brand-600">✓</span><span className="text-sm leading-7 text-ink-soft">{item}</span></li>
                  ))}
                </ul>
              </section>

              <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10">
                <h2 className="text-2xl font-semibold sm:text-3xl">Quer montar o anúncio inteiro?</h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Use o gerador do AnunciaAI para criar título, descrição, benefícios, ficha técnica e palavras-chave a partir dos dados reais do produto.</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-mercado-livre#ferramenta" className="rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:bg-brand-500 hover:text-white">Abrir gerador para Mercado Livre</Link>
                  <Link href="/como-criar-anuncio-no-mercado-livre" className="rounded-2xl border border-white/20 px-6 py-3.5 text-center text-sm font-semibold text-white hover:border-white/50">Ver guia completo do anúncio</Link>
                </div>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Neste guia</p>
                <nav aria-label="Índice do guia">
                  <ul className="mt-4 grid gap-3 text-sm text-muted">
                    <li><a href="#regra-principal" className="hover:text-brand-600">Descrição e ficha técnica</a></li>
                    <li><a href="#estrutura-titulo" className="hover:text-brand-600">Estrutura em 4 blocos</a></li>
                    <li><a href="#modelo" className="hover:text-brand-600">Modelo pronto</a></li>
                    <li><a href="#exemplo-titulo" className="hover:text-brand-600">Exemplo</a></li>
                    <li><a href="#erros-titulo" className="hover:text-brand-600">Erros comuns</a></li>
                    <li><a href="#checklist-titulo" className="hover:text-brand-600">Checklist final</a></li>
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
