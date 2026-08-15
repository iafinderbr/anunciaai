import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-escolher-palavras-chave-para-produtos";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-15";

const TITLE = "Como Escolher Palavras-Chave para Produtos: Guia";
const DESCRIPTION =
  "Aprenda como escolher palavras-chave para produtos, organizar termos principais e de cauda longa e usá-los sem repetição artificial.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como escolher palavras-chave para produtos",
    "palavras-chave para produtos",
    "palavras-chave para e-commerce",
    "palavras-chave para marketplace",
    "SEO para página de produto",
    "palavras-chave de cauda longa",
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
        { "@type": "ListItem", position: 3, name: "Como escolher palavras-chave", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const productMap = [
  { title: "Produto", example: "garrafa térmica" },
  { title: "Material", example: "aço inoxidável" },
  { title: "Capacidade", example: "1 litro" },
  { title: "Uso", example: "para café" },
  { title: "Diferencial", example: "com alça" },
  { title: "Público ou compatibilidade", example: "quando realmente se aplicar" },
];

const steps = [
  {
    number: "01",
    title: "Identifique o produto sem linguagem promocional",
    text: "Escreva o nome que uma pessoa usaria para reconhecer o item. Comece por “garrafa térmica”, não por “produto incrível para sua casa”.",
  },
  {
    number: "02",
    title: "Crie uma palavra-chave base",
    text: "Una o tipo do produto ao detalhe mais importante e confirmado. Essa expressão será o ponto de partida para encontrar variações úteis.",
  },
  {
    number: "03",
    title: "Colete formas reais de pesquisa",
    text: "Observe sugestões do Google, buscas de marketplaces, categorias e filtros. Registre somente termos que continuam descrevendo o item vendido.",
  },
  {
    number: "04",
    title: "Separe intenção de compra e informação",
    text: "Termos com modelo, medida ou compatibilidade costumam combinar com uma página de produto. Perguntas amplas podem funcionar melhor em um guia ou FAQ.",
  },
  {
    number: "05",
    title: "Escolha uma principal e poucas secundárias",
    text: "Priorize a expressão que melhor representa o produto. Depois, selecione atributos e variações naturais que acrescentam significado, sem criar uma lista interminável.",
  },
  {
    number: "06",
    title: "Confira se a página entrega o que o termo promete",
    text: "A palavra-chave, o título, a descrição, as imagens e a variação selecionada precisam falar do mesmo item. Relevância vale mais do que volume isolado.",
  },
];

const keywordTypes = [
  {
    type: "Principal",
    purpose: "Identifica o produto e sua característica central.",
    example: "garrafa térmica 1 litro",
  },
  {
    type: "Atributos",
    purpose: "Detalham material, cor, tamanho, capacidade ou modelo.",
    example: "inox, preta, 1L, tampa rosqueável",
  },
  {
    type: "Cauda longa",
    purpose: "Combina detalhes para representar uma busca mais específica.",
    example: "garrafa térmica inox 1 litro com alça",
  },
  {
    type: "Compatibilidade",
    purpose: "Explica para qual aparelho, peça ou uso o item serve.",
    example: "capa compatível com Galaxy A55",
  },
  {
    type: "Informacional",
    purpose: "Expressa uma dúvida que pode pedir um guia, comparação ou FAQ.",
    example: "como limpar garrafa térmica",
  },
];

const categoryExamples = [
  {
    category: "Eletrônicos",
    product: "Fone Bluetooth Sonora Air B20",
    primary: "fone Bluetooth Sonora Air B20",
    supporting: "preto, com microfone, controles no fone",
  },
  {
    category: "Moda",
    product: "Camiseta feminina de algodão azul",
    primary: "camiseta feminina de algodão",
    supporting: "azul, manga curta, modelagem reta",
  },
  {
    category: "Casa",
    product: "Jogo com 6 taças de vidro de 300ml",
    primary: "jogo 6 taças de vidro",
    supporting: "300ml, transparente, para água",
  },
  {
    category: "Beleza",
    product: "Hidratante facial Derma Vita 50g",
    primary: "hidratante facial Derma Vita",
    supporting: "50g, para pele seca, uso facial",
  },
  {
    category: "Acessórios",
    product: "Capa transparente compatível com Galaxy A55",
    primary: "capa para Galaxy A55",
    supporting: "transparente, material flexível, recorte para câmera",
  },
];

const questions = [
  {
    question: "Quantas palavras-chave devo usar em um produto?",
    answer:
      "Não existe um número obrigatório. Uma palavra principal e alguns termos de atributo normalmente bastam para representar um item. Use somente os termos que ajudam a identificar aquela versão e cabem naturalmente no conteúdo.",
  },
  {
    question: "Palavra-chave de cauda longa é melhor?",
    answer:
      "Ela pode ser mais específica, mas só é útil quando corresponde ao produto e à intenção da página. Uma expressão longa e artificial não é melhor apenas por ter mais palavras.",
  },
  {
    question: "Onde colocar as palavras-chave?",
    answer:
      "Use a principal naturalmente no título e na identificação inicial. Distribua atributos verdadeiros na descrição, ficha técnica, categorias, links e textos alternativos quando eles realmente descreverem o conteúdo.",
  },
  {
    question: "A tag meta keywords ajuda no Google?",
    answer:
      "Não. O próprio Google informa que a Busca não usa a tag meta keywords. Concentre o trabalho no conteúdo visível, na estrutura da página e em informações úteis e verificáveis.",
  },
  {
    question: "A inteligência artificial pode escolher as palavras-chave?",
    answer:
      "A IA pode organizar ideias a partir dos dados do produto. Você ainda precisa remover termos irrelevantes, confirmar atributos e comparar as sugestões com a linguagem usada pelas pessoas e pelo canal de venda.",
  },
];

export default function ComoEscolherPalavrasChaveParaProdutosPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-palavras-chave-para-produtos#ferramenta" />

      <main id="ferramenta">
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação">
                <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  <li><Link href="/" className="transition-colors hover:text-ink">Início</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/guias" className="transition-colors hover:text-ink">Guias</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="font-medium text-ink-soft">Palavras-chave para produtos</li>
                </ol>
              </nav>

              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">
                  Guia prático · Atualizado em agosto de 2026
                </p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">
                  Como escolher palavras-chave para produtos: guia com exemplos
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                  Aprenda a encontrar termos que descrevem o produto, separar intenção de compra e organizar uma lista
                  curta para títulos, descrições, lojas virtuais e marketplaces.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-palavras-chave-para-produtos#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                    Gerar palavras-chave grátis
                  </Link>
                  <a href="#passo-a-passo" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600">
                    Ver o passo a passo
                  </a>
                </div>
                <p className="mt-5 text-sm text-muted">Leitura de aproximadamente 9 minutos · Por AnunciaAI</p>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <details className="mb-10 rounded-2xl border border-line bg-white p-5 shadow-card lg:hidden">
                <summary className="cursor-pointer text-sm font-semibold">Ver índice do guia</summary>
                <nav aria-label="Índice do guia no celular">
                  <ol className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-2">
                    <li><a href="#mapa-produto" className="hover:text-brand-600">Mapa do produto</a></li>
                    <li><a href="#passo-a-passo" className="hover:text-brand-600">Passo a passo</a></li>
                    <li><a href="#tipos" className="hover:text-brand-600">Tipos de palavra-chave</a></li>
                    <li><a href="#fontes" className="hover:text-brand-600">Fontes gratuitas</a></li>
                    <li><a href="#exemplo-pratico" className="hover:text-brand-600">Exemplo prático</a></li>
                    <li><a href="#onde-usar" className="hover:text-brand-600">Onde usar</a></li>
                    <li><a href="#categorias" className="hover:text-brand-600">Exemplos por categoria</a></li>
                    <li><a href="#duvidas" className="hover:text-brand-600">Dúvidas frequentes</a></li>
                  </ol>
                </nav>
              </details>

              <section id="mapa-produto" aria-labelledby="mapa-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Comece pelo produto</p>
                <h2 id="mapa-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Monte um mapa de informações verdadeiras</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Palavra-chave não é uma palavra mágica. É uma forma de conectar a linguagem usada na busca às
                  características do item. Antes de pesquisar ideias, liste o que realmente define o produto.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {productMap.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-line bg-white p-4 shadow-card">
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.example}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
                  <p className="text-sm font-semibold text-amber-900">Relevância antes de volume</p>
                  <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
                    Um termo popular não serve se descreve outro produto, versão ou intenção. Escolher palavras-chave não
                    garante posição no Google nem vendas; elas precisam fazer parte de uma página realmente útil.
                  </p>
                </div>
              </section>

              <section id="passo-a-passo" aria-labelledby="passos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Método em 6 etapas</p>
                <h2 id="passos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Como escolher palavras-chave para uma página de produto</h2>
                <ol className="mt-9 space-y-5">
                  {steps.map((step) => (
                    <li key={step.number} className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                      <div className="flex items-start gap-4">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-xs font-semibold text-white">{step.number}</span>
                        <div>
                          <h3 className="text-xl font-semibold leading-snug">{step.title}</h3>
                          <p className="mt-3 text-[15px] leading-7 text-muted">{step.text}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="tipos" aria-labelledby="tipos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Organize a lista</p>
                <h2 id="tipos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">5 tipos de termos e a função de cada um</h2>
                <div className="mt-7 overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                  {keywordTypes.map((item) => (
                    <div key={item.type} className="border-b border-line p-5 last:border-0 sm:grid sm:grid-cols-[120px_1fr] sm:gap-5 sm:p-6">
                      <h3 className="text-sm font-semibold text-ink">{item.type}</h3>
                      <div className="mt-2 sm:mt-0">
                        <p className="text-sm leading-relaxed text-muted">{item.purpose}</p>
                        <p className="mt-2 font-mono text-sm text-ink-soft">{item.example}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="fontes" aria-labelledby="fontes-pesquisa-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Pesquisa sem pagar</p>
                <h2 id="fontes-pesquisa-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Onde encontrar ideias de palavras-chave</h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: "Sugestões de busca", text: "Digite o produto no Google e nos marketplaces e observe complementos coerentes. Não copie termos que não representam o item." },
                    { title: "Categorias e filtros", text: "Material, tamanho, cor, capacidade e compatibilidade usados nos filtros revelam atributos importantes para o comprador." },
                    { title: "Google Trends", text: "Compare o interesse relativo entre formas de pesquisa e observe mudanças ao longo do tempo e por região." },
                    { title: "Planejador do Google Ads", text: "Pode gerar ideias e estimativas, mas o acesso pode exigir a configuração da conta e informações de faturamento." },
                    { title: "Google Search Console", text: "Quando houver dados, consulte as consultas que já exibem suas páginas e procure diferenças entre o termo e o conteúdo entregue." },
                    { title: "Gerador do AnunciaAI", text: "Use os dados do produto para criar uma primeira lista e depois revise relevância, veracidade e intenção." },
                  ].map((item) => (
                    <article key={item.title} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section id="exemplo-pratico" aria-labelledby="pratico-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplo prático</p>
                <h2 id="pratico-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">De uma lista genérica para uma estratégia focada</h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-rose-700">Lista fraca</p>
                    <p className="mt-3 font-mono text-sm leading-7 text-ink-soft">garrafa, oferta, barato, melhor produto, cozinha, promoção</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">Mistura termos vagos e promocionais que não identificam a versão.</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-700">Lista focada</p>
                    <p className="mt-3 font-mono text-sm leading-7 text-ink-soft">garrafa térmica 1 litro, inox, para café, com alça, preta</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">A principal identifica o item; os outros termos descrevem atributos confirmados.</p>
                  </div>
                </div>
              </section>

              <section id="onde-usar" aria-labelledby="onde-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Aplicação</p>
                <h2 id="onde-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Onde usar sem repetir artificialmente</h2>
                <ul className="mt-7 space-y-3">
                  {[
                    "Título e nome visível: use a expressão que identifica o produto com clareza.",
                    "Descrição: explique atributos, uso, compatibilidade e conteúdo da embalagem em frases naturais.",
                    "Ficha técnica e filtros: preencha os campos corretos em vez de esconder todas as informações no texto.",
                    "Categorias e links: use nomes que ajudam a pessoa a entender para onde o link leva.",
                    "Texto alternativo de imagens: descreva o que aparece na imagem, sem preencher o campo com uma lista de termos.",
                    "Conteúdos de apoio: responda perguntas informacionais em guias e FAQs quando elas não pertencem à oferta do produto.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl border border-line bg-canvas p-5">
                  <p className="text-sm font-semibold">Não dependa da tag meta keywords</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    O Google informa que a Busca não usa essa tag. O conteúdo visível e útil, a estrutura da página e os
                    dados reais do produto merecem a sua atenção.
                  </p>
                </div>
              </section>

              <section id="categorias" aria-labelledby="categorias-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Modelos de organização</p>
                <h2 id="categorias-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Exemplos de palavras-chave por categoria</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Os exemplos são fictícios. Use a estrutura, mas substitua todos os dados pelas características reais do produto.
                </p>
                <div className="mt-7 grid gap-5">
                  {categoryExamples.map((item) => (
                    <article key={item.category} className="rounded-3xl border border-line bg-white p-6 shadow-card">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">{item.category}</p>
                      <h3 className="mt-3 text-lg font-semibold">{item.product}</h3>
                      <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                        <div className="rounded-xl bg-canvas p-4">
                          <dt className="font-semibold text-ink">Principal</dt>
                          <dd className="mt-1.5 text-muted">{item.primary}</dd>
                        </div>
                        <div className="rounded-xl bg-canvas p-4">
                          <dt className="font-semibold text-ink">Apoio</dt>
                          <dd className="mt-1.5 text-muted">{item.supporting}</dd>
                        </div>
                      </dl>
                    </article>
                  ))}
                </div>
              </section>

              <section aria-labelledby="checklist-titulo" className="mt-16 rounded-3xl border border-line bg-ink p-6 text-white sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">Checklist final</p>
                <h2 id="checklist-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Revise a lista antes de usar</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "A palavra principal identifica o produto?",
                    "Cada atributo pode ser confirmado?",
                    "Os termos representam a versão anunciada?",
                    "A intenção combina com a página de produto?",
                    "A lista está curta e sem repetições?",
                    "O conteúdo continua natural para uma pessoa?",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 rounded-xl bg-white/8 p-4 text-sm leading-relaxed text-white/80"><span aria-hidden="true" className="text-brand-300">✓</span>{item}</li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="ia-titulo" className="mt-16 rounded-3xl border border-brand-200 bg-brand-50 p-6 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Primeira lista em segundos</p>
                <h2 id="ia-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Organize termos principais, secundários e de cauda longa</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-soft">
                  Informe o produto, as características e o público. O AnunciaAI cria uma estratégia inicial para você
                  remover excessos, confirmar os dados e adaptar ao canal.
                </p>
                <Link href="/gerador-de-palavras-chave-para-produtos#ferramenta" className="mt-6 inline-flex rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">Usar o gerador de palavras-chave</Link>
              </section>

              <section id="duvidas" aria-labelledby="duvidas-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas frequentes</p>
                <h2 id="duvidas-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Perguntas sobre palavras-chave de produtos</h2>
                <div className="mt-7 divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
                  {questions.map((item) => (
                    <details key={item.question} className="group p-5 sm:p-6">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink">
                        {item.question}
                        <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section aria-labelledby="referencias-titulo" className="mt-16 border-t border-line pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Revisão editorial</p>
                <h2 id="referencias-titulo" className="mt-3 text-xl font-semibold">Fontes consultadas</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">Guia escrito e revisado pela equipe do AnunciaAI com base em orientações oficiais do Google.</p>
                <ul className="mt-5 grid gap-3 text-sm text-muted">
                  <li><a href="https://developers.google.com/search/docs/essentials" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">Google Search Essentials</a></li>
                  <li><a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">Google — Guia de SEO para iniciantes</a></li>
                  <li><a href="https://developers.google.com/search/docs/essentials/spam-policies#keyword-stuffing" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">Google — Política contra repetição de palavras-chave</a></li>
                  <li><a href="https://support.google.com/google-ads/answer/7337243?hl=pt-BR" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">Google Ads — Planejador de palavras-chave</a></li>
                </ul>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="text-sm font-semibold">Neste guia</p>
                <nav aria-label="Índice do guia">
                  <ol className="mt-4 space-y-3 text-sm text-muted">
                    <li><a href="#mapa-produto" className="hover:text-brand-600">Mapa do produto</a></li>
                    <li><a href="#passo-a-passo" className="hover:text-brand-600">Passo a passo</a></li>
                    <li><a href="#tipos" className="hover:text-brand-600">Tipos de palavra-chave</a></li>
                    <li><a href="#fontes" className="hover:text-brand-600">Fontes gratuitas</a></li>
                    <li><a href="#exemplo-pratico" className="hover:text-brand-600">Exemplo prático</a></li>
                    <li><a href="#onde-usar" className="hover:text-brand-600">Onde usar</a></li>
                    <li><a href="#categorias" className="hover:text-brand-600">Exemplos por categoria</a></li>
                    <li><a href="#duvidas" className="hover:text-brand-600">Dúvidas frequentes</a></li>
                  </ol>
                </nav>
                <Link href="/gerador-de-palavras-chave-para-produtos#ferramenta" className="mt-6 block rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">Gerar palavras-chave grátis</Link>
              </div>
            </aside>
          </div>

          <section aria-labelledby="continue-titulo" className="border-t border-line bg-white">
            <div className="container-page py-14 sm:py-20">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Próximos passos</p>
              <h2 id="continue-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Use os termos no conteúdo do produto</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  { href: "/como-criar-titulo-de-produto", eyebrow: "Título", title: "Organize a identificação", text: "Use a fórmula em quatro partes e adapte a ordem à categoria." },
                  { href: "/como-fazer-descricao-de-produto", eyebrow: "Descrição", title: "Explique o produto", text: "Transforme atributos verdadeiros em um texto claro e completo." },
                  { href: "/guias", eyebrow: "Biblioteca", title: "Ver todos os guias", text: "Continue aprendendo com os conteúdos gratuitos do AnunciaAI." },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-2xl border border-line bg-canvas p-5 transition-colors hover:border-brand-300 hover:bg-brand-50">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">{item.eyebrow}</p>
                    <h3 className="mt-3 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
