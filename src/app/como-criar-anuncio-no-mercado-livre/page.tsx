import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-criar-anuncio-no-mercado-livre";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-15";

const TITLE = "Como Criar Anúncio no Mercado Livre: Guia 2026";
const DESCRIPTION =
  "Aprenda como criar um anúncio no Mercado Livre: título, fotos, ficha técnica, descrição, preço e revisão antes de publicar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como criar anúncio no Mercado Livre",
    "como anunciar no Mercado Livre",
    "criar anúncio Mercado Livre",
    "título para Mercado Livre",
    "descrição para Mercado Livre",
    "anúncio Mercado Livre passo a passo",
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
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
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
        { "@type": "ListItem", position: 3, name: "Como criar anúncio no Mercado Livre", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const preparation = [
  "Nome, marca e modelo exatos do produto",
  "Cor, tamanho, material, voltagem e outras variações",
  "Estado do item e tudo o que acompanha a embalagem",
  "Fotos próprias, nítidas e de vários ângulos",
  "Preço, quantidade disponível e condições reais de venda",
];

const steps = [
  {
    id: "produto-catalogo",
    number: "01",
    title: "Comece pelo produto e confira o catálogo",
    text: "Digite o produto que deseja vender e verifique se ele já existe no catálogo do Mercado Livre. Quando houver uma correspondência correta, confira marca, modelo e versão antes de continuar. Se não houver, preencha os dados do item com atenção.",
    points: ["Não escolha um produto apenas porque ele parece parecido.", "Modelo, capacidade, cor e voltagem precisam corresponder ao item real."],
  },
  {
    id: "categoria",
    number: "02",
    title: "Escolha a categoria correta",
    text: "A categoria define quais características serão solicitadas e ajuda o comprador a encontrar o item no lugar esperado. Leia as opções sugeridas e escolha a que representa exatamente o produto.",
    points: ["Compare anúncios do mesmo tipo de produto para entender a categoria usada.", "Evite categorias genéricas quando existir uma opção específica."],
  },
  {
    id: "titulo",
    number: "03",
    title: "Escreva um título direto e pesquisável",
    text: "Use as palavras que identificam o produto, sem promessas ou informações que não foram confirmadas. Uma estrutura segura é: produto + marca + modelo + característica importante.",
    points: ["Priorize identificação e especificações úteis.", "Evite emojis, repetições, telefone, preço e frases promocionais no título."],
  },
  {
    id: "fotos",
    number: "04",
    title: "Adicione fotos claras e fiéis ao produto",
    text: "Mostre o item inteiro, detalhes importantes, embalagem e acessórios incluídos. Use boa iluminação, fundo limpo e imagens que representem exatamente o produto entregue ao comprador.",
    points: ["Fotografe de frente, de lado e os principais detalhes.", "Não esconda marcas de uso quando o produto for usado."],
  },
  {
    id: "ficha-tecnica",
    number: "05",
    title: "Complete a ficha técnica e as variações",
    text: "Preencha marca, modelo, dimensões, material, cor, tamanho e demais campos disponíveis. Esses dados ajudam o comprador a comparar opções e reduzem dúvidas antes da compra.",
    points: ["Use somente informações confirmadas na embalagem ou pelo fabricante.", "Cadastre cor e tamanho como variações quando houver estoque diferente para cada opção."],
  },
  {
    id: "descricao",
    number: "06",
    title: "Monte uma descrição que responda às dúvidas",
    text: "Explique o que é o produto, para quem ele é indicado, suas características, o que acompanha a embalagem e informações de compatibilidade. Organize o texto em blocos curtos e fáceis de conferir.",
    points: ["Transforme características verdadeiras em benefícios claros.", "Não invente garantia, estoque, frete, parcelamento ou condição comercial."],
  },
  {
    id: "condicoes",
    number: "07",
    title: "Defina preço, estoque e condições de venda",
    text: "Informe o preço real e a quantidade disponível. Depois, revise as opções de entrega e as condições oferecidas na sua conta antes de publicar.",
    points: ["Confira se o preço digitado corresponde à variação escolhida.", "Mantenha o estoque atualizado para evitar vendas sem disponibilidade."],
  },
  {
    id: "revisao",
    number: "08",
    title: "Revise o anúncio como se fosse o comprador",
    text: "Antes de publicar, releia título, ficha técnica e descrição. Compare as fotos com o produto e confirme se todas as condições exibidas estão corretas.",
    points: ["Procure diferenças entre o texto, as fotos e as variações.", "Corrija erros de digitação e retire qualquer promessa não comprovada."],
  },
];

const questions = [
  {
    question: "A automação de conteúdo pode criar o anúncio inteiro?",
    answer:
      "Ela pode organizar o título, a descrição, os benefícios e as palavras-chave. Ainda assim, o vendedor precisa conferir se todas as informações correspondem ao produto e às condições reais da venda.",
  },
  {
    question: "O que colocar no título do anúncio?",
    answer:
      "Comece pelo tipo do produto e acrescente marca, modelo e especificações que ajudam a identificar a versão correta. Retire palavras promocionais que não ajudam o comprador a reconhecer o item.",
  },
  {
    question: "Posso copiar a descrição de outro vendedor?",
    answer:
      "O mais seguro é escrever uma descrição própria com os dados do seu produto. Assim você evita copiar informações erradas, condições comerciais de outra loja ou características de uma versão diferente.",
  },
  {
    question: "O que devo conferir antes de publicar?",
    answer:
      "Revise produto, categoria, título, fotos, características, variações, descrição, preço e estoque. Confirme também se não há telefone, e-mail ou outra informação de contato no anúncio.",
  },
];

export default function ComoCriarAnuncioMercadoLivrePage() {
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
                  <li>
                    <Link href="/" className="transition-colors hover:text-ink">
                      Início
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/guias" className="transition-colors hover:text-ink">
                      Guias
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="font-medium text-ink-soft">
                    Como criar anúncio no Mercado Livre
                  </li>
                </ol>
              </nav>

              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">
                  Guia prático · Atualizado em agosto de 2026
                </p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">
                  Como criar um anúncio no Mercado Livre: passo a passo
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                  Aprenda a organizar título, fotos, ficha técnica, descrição, preço e estoque para publicar um anúncio
                  claro, completo e fiel ao produto que você vende.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/gerador-de-anuncios-mercado-livre#ferramenta"
                    className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                  >
                    Criar anúncio com o gerador gratuito
                  </Link>
                  <a
                    href="#passo-a-passo"
                    className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600"
                  >
                    Ver o passo a passo
                  </a>
                </div>
                <p className="mt-5 text-sm text-muted">
                  Leitura de aproximadamente 8 minutos · Por AnunciaAI
                </p>
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
                    <li><a href="#produto-catalogo" className="hover:text-brand-600">Produto e catálogo</a></li>
                    <li><a href="#titulo" className="hover:text-brand-600">Título do anúncio</a></li>
                    <li><a href="#fotos" className="hover:text-brand-600">Fotos do produto</a></li>
                    <li><a href="#ficha-tecnica" className="hover:text-brand-600">Ficha técnica</a></li>
                    <li><a href="#descricao" className="hover:text-brand-600">Descrição</a></li>
                    <li><a href="#revisao" className="hover:text-brand-600">Revisão final</a></li>
                    <li><a href="#duvidas" className="hover:text-brand-600">Dúvidas frequentes</a></li>
                  </ol>
                </nav>
              </details>

              <section id="antes-de-comecar" aria-labelledby="antes-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Antes de começar</p>
                <h2 id="antes-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Separe as informações do produto
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Um bom anúncio começa com dados corretos. Ter as informações abaixo em mãos deixa o cadastro mais
                  rápido e evita que o texto prometa algo que o produto não oferece.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {preparation.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card">
                      <span aria-hidden="true" className="mt-0.5 text-sm font-bold text-brand-600">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="passo-a-passo" aria-labelledby="passos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Passo a passo</p>
                <h2 id="passos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Como anunciar no Mercado Livre do início ao fim
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Siga esta ordem para preencher o anúncio sem esquecer as informações que ajudam o comprador a decidir.
                </p>

                <ol className="mt-9 space-y-5">
                  {steps.map((step) => (
                    <li
                      key={step.id}
                      id={step.id}
                      className="scroll-mt-24 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8"
                    >
                      <div className="flex items-start gap-4">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-xs font-semibold text-white">
                          {step.number}
                        </span>
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
                <h2 id="exemplo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Título fraco × título mais claro
                </h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-rose-700">Evite</p>
                    <p className="mt-3 font-mono text-sm leading-relaxed text-ink-soft">
                      PROMOÇÃO!!! Fone incrível barato frete grátis
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      O texto ocupa espaço com promoção e não identifica marca, modelo ou versão.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-700">Prefira</p>
                    <p className="mt-3 font-mono text-sm leading-relaxed text-ink-soft">
                      Fone Bluetooth JBL Tune 510BT Preto
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      O comprador encontra produto, marca, modelo e cor em uma leitura rápida.
                    </p>
                  </div>
                </div>
              </section>

              <section aria-labelledby="modelo-descricao-titulo" className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Modelo de descrição</p>
                <h2 id="modelo-descricao-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Uma estrutura simples para adaptar
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Substitua os campos entre colchetes pelas informações reais do produto. Remova qualquer linha que não
                  se aplique ao item.
                </p>
                <div className="mt-7 rounded-3xl border border-line bg-ink p-6 text-sm leading-7 text-white/80 shadow-lift sm:p-8">
                  <p className="font-semibold text-white">[NOME DO PRODUTO]</p>
                  <p className="mt-4">
                    [Explique em uma frase o que é o produto e para qual uso ele é indicado.]
                  </p>
                  <p className="mt-4 font-semibold text-white">Principais características</p>
                  <p>• [Marca e modelo]</p>
                  <p>• [Cor, tamanho, material ou capacidade]</p>
                  <p>• [Compatibilidade ou indicação de uso]</p>
                  <p className="mt-4 font-semibold text-white">Conteúdo da embalagem</p>
                  <p>• [Liste somente os itens realmente incluídos]</p>
                  <p className="mt-4 font-semibold text-white">Informações importantes</p>
                  <p>[Informe condição, medidas ou observações necessárias para a compra.]</p>
                </div>
              </section>

              <section aria-labelledby="ia-titulo" className="mt-16 rounded-3xl border border-brand-200 bg-brand-50 p-6 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Economize tempo</p>
                <h2 id="ia-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Transforme os dados do produto em uma primeira versão do anúncio
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-soft">
                  Informe nome, categoria, características, público e preço. O AnunciaAI organiza título, descrição,
                  benefícios, ficha técnica e palavras-chave sem inventar condições comerciais.
                </p>
                <Link
                  href="/gerador-de-anuncios-mercado-livre#ferramenta"
                  className="mt-6 inline-flex rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  Usar o gerador para Mercado Livre
                </Link>
              </section>

              <section id="duvidas" aria-labelledby="duvidas-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas frequentes</p>
                <h2 id="duvidas-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Perguntas sobre a criação do anúncio
                </h2>
                <div className="mt-7 divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
                  {questions.map((item) => (
                    <details key={item.question} className="group p-5 sm:p-6">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink">
                        <h3 className="text-[15px] font-medium">{item.question}</h3>
                        <span
                          aria-hidden="true"
                          className="grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section aria-labelledby="fontes-titulo" className="mt-16 border-t border-line pt-8">
                <h2 id="fontes-titulo" className="text-base font-semibold">
                  Fontes e revisão
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Este guia foi revisado em 15 de agosto de 2026 com base nas orientações oficiais do Mercado Livre.
                  Regras e telas podem mudar; confira as condições exibidas na sua conta antes de publicar.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a
                      href="https://vendedores.mercadolivre.com.br/nota/como-criar-anuncios-eficientes-no-mercado-livre"
                      className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
                    >
                      Como criar anúncios e alcançar mais compradores
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://vendedores.mercadolivre.com.br/nota/como-criar-um-titulo-atrativo"
                      className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
                    >
                      Como fazer um bom título para o seu anúncio
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://vendedores.mercadolivre.com.br/aprender/nota/como-gerenciar-os-anuncios-com-eficiencia"
                      className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
                    >
                      Como gerenciar anúncios com eficiência
                    </a>
                  </li>
                </ul>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">Neste guia</p>
                <nav aria-label="Índice do guia">
                  <ol className="mt-4 space-y-2.5 text-sm text-muted">
                    <li><a href="#antes-de-comecar" className="hover:text-brand-600">Antes de começar</a></li>
                    <li><a href="#produto-catalogo" className="hover:text-brand-600">Produto e catálogo</a></li>
                    <li><a href="#titulo" className="hover:text-brand-600">Título do anúncio</a></li>
                    <li><a href="#fotos" className="hover:text-brand-600">Fotos do produto</a></li>
                    <li><a href="#ficha-tecnica" className="hover:text-brand-600">Ficha técnica</a></li>
                    <li><a href="#descricao" className="hover:text-brand-600">Descrição</a></li>
                    <li><a href="#revisao" className="hover:text-brand-600">Revisão final</a></li>
                    <li><a href="#duvidas" className="hover:text-brand-600">Dúvidas frequentes</a></li>
                  </ol>
                </nav>
                <div className="mt-5 border-t border-line pt-5">
                  <p className="text-sm font-semibold">Quer uma primeira versão do texto?</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">Gere gratuitamente e revise antes de publicar.</p>
                  <Link
                    href="/gerador-de-anuncios-mercado-livre#ferramenta"
                    className="mt-4 flex justify-center rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                  >
                    Criar anúncio grátis
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </article>

        <section aria-labelledby="proximos-titulo" className="border-t border-line bg-white">
          <div className="container-page py-12 sm:py-16">
            <div className="mb-8 rounded-3xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Aprofunde a descrição</p>
              <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div className="max-w-2xl">
                  <h2 className="text-xl font-semibold sm:text-2xl">Aprenda a descrever qualquer tipo de produto</h2>
                  <p className="mt-2 text-sm leading-7 text-ink-soft">
                    Veja uma estrutura em seis partes, um modelo editável e exemplos para eletrônicos, roupas, casa e acessórios.
                  </p>
                </div>
                <Link href="/como-fazer-descricao-de-produto" className="shrink-0 rounded-xl bg-ink px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                  Ler o guia de descrição
                </Link>
              </div>
            </div>
            <h2 id="proximos-titulo" className="text-xl font-semibold sm:text-2xl">
              Ferramentas para completar seu anúncio
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { href: "/gerador-de-titulos-para-produtos", label: "Gerador de títulos", text: "Crie opções de título com palavras-chave." },
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
              Precisa melhorar o título?{" "}
              <Link href="/como-criar-titulo-de-produto" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">
                Veja a fórmula e os exemplos
              </Link>
              {" · "}
              Quer ver todos os conteúdos?{" "}
              <Link href="/guias" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">
                Acesse a central de guias
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
