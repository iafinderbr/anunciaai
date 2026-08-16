import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-criar-anuncio-na-shopee";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-15";

const TITLE = "Como Criar Anúncio na Shopee: Guia 2026";
const DESCRIPTION =
  "Aprenda como criar anúncio na Shopee com título claro, fotos, atributos, descrição, variações, preço e revisão antes de publicar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como criar anúncio na Shopee",
    "como anunciar na Shopee",
    "criar anúncio Shopee",
    "título para Shopee",
    "descrição para Shopee",
    "anúncio Shopee passo a passo",
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
        { "@type": "ListItem", position: 3, name: "Como criar anúncio na Shopee", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const preparation = [
  "Nome, marca e modelo exatos do produto",
  "Cor, tamanho, material, capacidade e outras variações",
  "Fotos próprias e nítidas do item real",
  "Características e compatibilidades confirmadas",
  "Preço, estoque e conteúdo da embalagem",
];

const steps = [
  {
    id: "categoria",
    number: "01",
    title: "Escolha a categoria que representa o produto",
    text: "Comece pela categoria mais específica disponível para o item. Ela influencia os atributos solicitados e ajuda a organizar o produto corretamente dentro do marketplace.",
    points: ["Evite escolher uma categoria apenas por parecer popular.", "Compare o tipo, o uso e as características do item antes de confirmar."],
  },
  {
    id: "titulo",
    number: "02",
    title: "Escreva um título fácil de identificar",
    text: "Coloque primeiro as informações que ajudam o comprador a reconhecer o produto: tipo, marca, modelo e uma característica importante. Prefira clareza a frases promocionais.",
    points: ["Use somente informações verdadeiras sobre o produto.", "Evite repetir palavras, símbolos e promessas que não ajudam na identificação."],
  },
  {
    id: "fotos",
    number: "03",
    title: "Use fotos claras e coerentes entre si",
    text: "Mostre o produto inteiro, ângulos diferentes e detalhes que influenciam a compra. As imagens precisam representar a mesma versão, cor e itens descritos no anúncio.",
    points: ["Dê preferência a boa iluminação e fundo limpo.", "Mostre acessórios incluídos e detalhes importantes do produto."],
  },
  {
    id: "atributos",
    number: "04",
    title: "Preencha atributos e especificações",
    text: "Complete marca, modelo, material, dimensões, capacidade, tamanho, cor e demais campos aplicáveis. Esses dados tornam o anúncio mais completo e reduzem dúvidas do comprador.",
    points: ["Consulte embalagem, manual ou fabricante quando necessário.", "Não preencha um atributo por aproximação quando não souber a informação."],
  },
  {
    id: "variacoes",
    number: "05",
    title: "Organize corretamente as variações",
    text: "Quando o mesmo produto tiver cores, tamanhos ou outras versões, associe cada opção ao estoque e às imagens correspondentes. Isso reduz o risco de o comprador escolher uma variante diferente da desejada.",
    points: ["Revise nome, foto e estoque de cada variação.", "Não misture produtos diferentes como se fossem apenas variações do mesmo item."],
  },
  {
    id: "descricao",
    number: "06",
    title: "Crie uma descrição que responda às dúvidas",
    text: "Explique o que é o produto, para quem ele serve, principais características, medidas, compatibilidades e o que acompanha a embalagem. Organize a informação em blocos curtos.",
    points: ["Transforme características confirmadas em benefícios claros.", "Não invente garantia, frete, desconto, estoque ou condições comerciais."],
  },
  {
    id: "preco-estoque",
    number: "07",
    title: "Confira preço e estoque antes de publicar",
    text: "Revise o valor informado e a quantidade disponível para cada variação. As condições exibidas ao comprador devem corresponder ao que está realmente configurado na conta.",
    points: ["Evite publicar com estoque desatualizado.", "Confira se o preço está associado à versão correta do produto."],
  },
  {
    id: "revisao",
    number: "08",
    title: "Faça uma revisão final como comprador",
    text: "Compare título, fotos, atributos, variações e descrição. Procure informações conflitantes, erros de digitação e qualquer promessa que não possa ser confirmada.",
    points: ["Confira se todas as imagens mostram o item anunciado.", "Leia o anúncio no celular para verificar se as informações principais aparecem rapidamente."],
  },
];

const questions = [
  {
    question: "O que colocar no título de um produto na Shopee?",
    answer:
      "Comece pelo tipo do produto e acrescente marca, modelo e características que diferenciam a versão. O objetivo é permitir que o comprador identifique rapidamente o item.",
  },
  {
    question: "A descrição precisa repetir tudo o que está no título?",
    answer:
      "Não. O título identifica o produto. A descrição pode desenvolver características, uso, medidas, compatibilidade, conteúdo da embalagem e outras informações úteis para a decisão de compra.",
  },
  {
    question: "Posso usar IA para criar o anúncio?",
    answer:
      "Sim, como apoio para organizar o texto. Antes de publicar, confira se título, descrição, benefícios e especificações correspondem exatamente ao produto e às condições reais da venda.",
  },
  {
    question: "O que revisar antes de publicar?",
    answer:
      "Revise categoria, título, fotos, atributos, variações, descrição, preço e estoque. Também confirme se não existem informações contraditórias entre imagens e texto.",
  },
];

export default function ComoCriarAnuncioShopeePage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-shopee#ferramenta" />

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
                  <li><Link href="/" className="transition-colors hover:text-ink">Início</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/guias" className="transition-colors hover:text-ink">Guias</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="font-medium text-ink-soft">Como criar anúncio na Shopee</li>
                </ol>
              </nav>

              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">
                  Guia prático · Atualizado em agosto de 2026
                </p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">
                  Como criar um anúncio na Shopee: passo a passo
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                  Organize título, fotos, atributos, variações e descrição para publicar um anúncio claro e fiel ao produto que você vende.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-shopee#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                    Criar anúncio com o gerador gratuito
                  </Link>
                  <a href="#passo-a-passo" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600">
                    Ver o passo a passo
                  </a>
                </div>
                <p className="mt-5 text-sm text-muted">Leitura de aproximadamente 8 minutos · Por AnunciaAI</p>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <details className="mb-10 rounded-2xl border border-line bg-white p-5 shadow-card lg:hidden">
                <summary className="cursor-pointer text-sm font-semibold">Ver índice do guia</summary>
                <nav aria-label="Índice do guia no celular">
                  <ol className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-2">
                    <li><a href="#antes-de-comecar" className="hover:text-brand-600">Antes de começar</a></li>
                    <li><a href="#categoria" className="hover:text-brand-600">Categoria</a></li>
                    <li><a href="#titulo" className="hover:text-brand-600">Título</a></li>
                    <li><a href="#fotos" className="hover:text-brand-600">Fotos</a></li>
                    <li><a href="#atributos" className="hover:text-brand-600">Atributos</a></li>
                    <li><a href="#variacoes" className="hover:text-brand-600">Variações</a></li>
                    <li><a href="#descricao" className="hover:text-brand-600">Descrição</a></li>
                    <li><a href="#duvidas" className="hover:text-brand-600">Dúvidas</a></li>
                  </ol>
                </nav>
              </details>

              <section id="antes-de-comecar" aria-labelledby="antes-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Antes de começar</p>
                <h2 id="antes-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Separe as informações do produto</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Quanto mais precisos forem os dados de entrada, mais fácil será criar um anúncio coerente sem completar lacunas com suposições.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {preparation.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card">
                      <span aria-hidden="true" className="mt-0.5 text-sm font-bold text-brand-600">✓</span>
                      <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="passo-a-passo" aria-labelledby="passos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Passo a passo</p>
                <h2 id="passos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Como montar o anúncio do início ao fim</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">Use esta sequência para organizar as informações antes de publicar.</p>
                <ol className="mt-9 space-y-5">
                  {steps.map((step) => (
                    <li key={step.id} id={step.id} className="scroll-mt-24 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                      <div className="flex items-start gap-4">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-xs font-semibold text-white">{step.number}</span>
                        <div>
                          <h3 className="text-xl font-semibold leading-snug">{step.title}</h3>
                          <p className="mt-3 text-[15px] leading-7 text-muted">{step.text}</p>
                          <ul className="mt-4 space-y-2">
                            {step.points.map((point) => (
                              <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section aria-labelledby="exemplo-titulo" className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplo prático</p>
                <h2 id="exemplo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Título genérico × título identificável</h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-rose-700">Evite</p>
                    <p className="mt-3 font-mono text-sm leading-relaxed text-ink-soft">Fone Bluetooth Top Oferta Imperdível</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">A frase ocupa espaço, mas não informa marca, modelo ou versão.</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-700">Prefira</p>
                    <p className="mt-3 font-mono text-sm leading-relaxed text-ink-soft">Fone Bluetooth JBL Tune 510BT Preto</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">Produto, marca, modelo e cor aparecem de forma direta.</p>
                  </div>
                </div>
              </section>

              <section aria-labelledby="modelo-titulo" className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Modelo de descrição</p>
                <h2 id="modelo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Uma estrutura simples para adaptar</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">Substitua os campos pelas informações reais e remova qualquer linha que não se aplique ao produto.</p>
                <div className="mt-7 rounded-3xl border border-line bg-ink p-6 text-sm leading-7 text-white/80 shadow-lift sm:p-8">
                  <p className="font-semibold text-white">[NOME DO PRODUTO]</p>
                  <p className="mt-4">[Explique em uma frase o que é e para qual uso ele é indicado.]</p>
                  <p className="mt-4 font-semibold text-white">Principais características</p>
                  <p>• [Marca e modelo]</p>
                  <p>• [Cor, tamanho, material ou capacidade]</p>
                  <p>• [Compatibilidade ou indicação de uso]</p>
                  <p className="mt-4 font-semibold text-white">Conteúdo da embalagem</p>
                  <p>• [Liste somente os itens realmente incluídos]</p>
                </div>
              </section>

              <section aria-labelledby="ia-titulo" className="mt-16 rounded-3xl border border-brand-200 bg-brand-50 p-6 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Economize tempo</p>
                <h2 id="ia-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Transforme os dados em uma primeira versão pronta para revisar</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-soft">
                  Informe o produto e suas características. O AnunciaAI organiza título, descrição, benefícios e palavras-chave para você revisar antes de publicar.
                </p>
                <Link href="/gerador-de-anuncios-shopee#ferramenta" className="mt-6 inline-flex rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                  Usar o gerador para Shopee
                </Link>
              </section>

              <section id="duvidas" aria-labelledby="duvidas-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas frequentes</p>
                <h2 id="duvidas-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Perguntas sobre a criação do anúncio</h2>
                <div className="mt-7 divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
                  {questions.map((item) => (
                    <details key={item.question} className="group p-5 sm:p-6">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink">
                        <h3 className="text-[15px] font-medium">{item.question}</h3>
                        <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section aria-labelledby="revisao-conteudo-titulo" className="mt-16 border-t border-line pt-8">
                <h2 id="revisao-conteudo-titulo" className="text-base font-semibold">Revisão do conteúdo</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Este guia foi revisado em 15 de agosto de 2026. Regras, campos e telas da Shopee podem mudar; confirme sempre as opções exibidas na Central do Vendedor antes de publicar.
                </p>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">Neste guia</p>
                <nav aria-label="Índice do guia">
                  <ol className="mt-4 space-y-2.5 text-sm text-muted">
                    <li><a href="#antes-de-comecar" className="hover:text-brand-600">Antes de começar</a></li>
                    <li><a href="#categoria" className="hover:text-brand-600">Categoria</a></li>
                    <li><a href="#titulo" className="hover:text-brand-600">Título</a></li>
                    <li><a href="#fotos" className="hover:text-brand-600">Fotos</a></li>
                    <li><a href="#atributos" className="hover:text-brand-600">Atributos</a></li>
                    <li><a href="#variacoes" className="hover:text-brand-600">Variações</a></li>
                    <li><a href="#descricao" className="hover:text-brand-600">Descrição</a></li>
                    <li><a href="#duvidas" className="hover:text-brand-600">Dúvidas frequentes</a></li>
                  </ol>
                </nav>
                <div className="mt-5 border-t border-line pt-5">
                  <p className="text-sm font-semibold">Quer o texto pronto?</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">Gere gratuitamente e revise antes de publicar.</p>
                  <Link href="/gerador-de-anuncios-shopee#ferramenta" className="mt-4 flex justify-center rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                    Criar anúncio grátis
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </article>

        <section aria-labelledby="proximos-titulo" className="border-t border-line bg-white">
          <div className="container-page py-12 sm:py-16">
            <h2 id="proximos-titulo" className="text-xl font-semibold sm:text-2xl">Ferramentas para completar seu anúncio</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { href: "/gerador-de-titulos-para-produtos", label: "Gerador de títulos", text: "Crie opções claras para identificar o produto." },
                { href: "/gerador-de-descricao-de-produto", label: "Gerador de descrição", text: "Organize características e benefícios." },
                { href: "/gerador-de-palavras-chave-para-produtos", label: "Gerador de palavras-chave", text: "Encontre termos relacionados ao produto." },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl border border-line bg-canvas p-5 transition-colors hover:border-brand-500">
                  <h3 className="text-sm font-semibold">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </Link>
              ))}
            </div>
            <p className="mt-7 text-center text-sm text-muted">
              Quer ver todos os conteúdos?{" "}
              <Link href="/guias" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">Acesse a central de guias</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
