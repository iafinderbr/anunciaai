import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-fazer-descricao-de-produto";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-15";

const TITLE = "Como Fazer Descrição de Produto: Guia e Exemplos";
const DESCRIPTION =
  "Aprenda como fazer descrição de produto com estrutura, modelo editável e exemplos para eletrônicos, roupas, casa e acessórios.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como fazer descrição de produto",
    "descrição de produto exemplos",
    "modelo de descrição de produto",
    "texto para vender produto",
    "descrição para loja virtual",
    "descrição de produto para e-commerce",
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
        { "@type": "ListItem", position: 3, name: "Como fazer descrição de produto", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const preparation = [
  "Nome, marca, modelo e versão exatos",
  "Material, medidas, cor, tamanho, capacidade ou voltagem",
  "Público e situação de uso do produto",
  "Itens realmente incluídos na embalagem",
  "Compatibilidade, cuidados e limitações confirmadas",
  "Condição do item e demais informações necessárias para a compra",
];

const structure = [
  {
    number: "01",
    title: "Identifique o produto logo no início",
    text: "Abra a descrição com o nome do produto e as informações que diferenciam aquela versão, como marca, modelo, tamanho ou material. O leitor precisa entender rapidamente o que está sendo oferecido.",
    example: "Mochila urbana de 20 litros em poliéster, modelo Atlas, na cor preta.",
  },
  {
    number: "02",
    title: "Explique para quem e para qual uso ele serve",
    text: "Mostre a situação em que o produto pode ser útil. Seja específico e evite frases genéricas como “produto perfeito para todos”.",
    example: "Indicada para levar notebook e itens pessoais no trajeto diário para o trabalho ou a faculdade.",
  },
  {
    number: "03",
    title: "Conecte características a benefícios reais",
    text: "Depois de apresentar um dado confirmado, explique o efeito prático dele. Não transforme uma característica em uma promessa que você não consegue comprovar.",
    example: "As alças ajustáveis permitem adaptar o encaixe da mochila ao corpo.",
  },
  {
    number: "04",
    title: "Organize a ficha técnica",
    text: "Agrupe medidas, materiais, capacidade, peso, cor e outras especificações em uma lista. Isso facilita a leitura e ajuda o comprador a comparar opções.",
    example: "Capacidade: 20 L · Material: poliéster · Cor: preta · Compartimentos: 3.",
  },
  {
    number: "05",
    title: "Informe conteúdo, compatibilidade e cuidados",
    text: "Liste o que acompanha a embalagem e avise sobre compatibilidade, montagem, lavagem ou conservação quando essas informações forem relevantes para a decisão.",
    example: "Conteúdo: 1 mochila. Compatível com notebooks de até 15,6 polegadas, conforme as medidas do aparelho.",
  },
  {
    number: "06",
    title: "Revise cada afirmação antes de publicar",
    text: "Compare o texto com a embalagem, a ficha do fabricante e o produto. Retire garantias, resultados, condições comerciais ou especificações que não foram confirmadas.",
    example: "Confira principalmente medidas, voltagem, variação escolhida e itens incluídos.",
  },
];

const examples = [
  {
    category: "Eletrônicos",
    title: "Fone Bluetooth",
    text: "Fone Bluetooth modelo Pulse B20 na cor preta, indicado para ouvir música e atender chamadas em dispositivos compatíveis. Possui controles no próprio fone e acompanha cabo de carregamento USB. Antes da compra, confira a versão Bluetooth e os conectores do seu aparelho. Conteúdo da embalagem: 1 fone e 1 cabo USB.",
  },
  {
    category: "Roupas",
    title: "Camiseta de algodão",
    text: "Camiseta unissex de manga curta, confeccionada em malha 100% algodão e disponível na cor azul-marinho. A modelagem reta facilita combinações para o uso diário. Consulte a tabela de medidas da peça antes de escolher o tamanho. Para conservação, siga as instruções da etiqueta.",
  },
  {
    category: "Casa e cozinha",
    title: "Jogo de potes",
    text: "Conjunto com 5 potes plásticos transparentes e tampas de encaixe, indicado para organizar alimentos secos no armário. Os tamanhos diferentes ajudam a separar porções e ingredientes. Conteúdo: 5 potes e 5 tampas. Confira as capacidades e orientações de limpeza informadas pelo fabricante.",
  },
  {
    category: "Acessórios",
    title: "Bolsa transversal",
    text: "Bolsa transversal compacta em material sintético, com alça regulável e fechamento por zíper. Possui compartimento principal para itens pessoais de pequeno porte e bolso externo para acesso rápido. Medidas aproximadas da peça: 20 × 15 × 7 cm. Conteúdo: 1 bolsa.",
  },
];

const questions = [
  {
    question: "O que uma descrição de produto precisa ter?",
    answer:
      "Ela deve identificar o produto, explicar seu uso, apresentar benefícios apoiados em características verdadeiras, organizar especificações e informar conteúdo da embalagem, compatibilidade e cuidados quando forem relevantes.",
  },
  {
    question: "Qual é o tamanho ideal de uma descrição?",
    answer:
      "Não existe uma quantidade única de palavras. Use o espaço necessário para responder às dúvidas importantes sem repetir informações. Produtos técnicos geralmente exigem mais detalhes do que itens simples.",
  },
  {
    question: "Como fazer uma descrição que ajuda no SEO?",
    answer:
      "Use o nome real do produto no título e no começo do texto, acrescente termos naturais que descrevem modelo, material ou uso e mantenha conteúdo próprio e fácil de ler. Não repita palavras-chave de forma artificial.",
  },
  {
    question: "Posso usar inteligência artificial para escrever?",
    answer:
      "Sim. A IA pode organizar as informações e criar uma primeira versão. Antes de publicar, confira cada característica, medida, benefício e condição para garantir que o texto represente o produto real.",
  },
  {
    question: "Posso copiar a descrição do fabricante?",
    answer:
      "Use a ficha do fabricante para confirmar dados, mas escreva um texto próprio voltado às dúvidas do seu público. Isso reduz repetições, evita carregar informações de outra versão e torna a leitura mais útil.",
  },
];

export default function ComoFazerDescricaoDeProdutoPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-descricao-de-produto#ferramenta" />

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
                  <li aria-current="page" className="font-medium text-ink-soft">Descrição de produto</li>
                </ol>
              </nav>

              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">
                  Guia prático · Atualizado em agosto de 2026
                </p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">
                  Como fazer uma descrição de produto: guia, modelo e exemplos
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                  Aprenda a transformar informações verdadeiras do produto em um texto claro, completo e fácil de
                  adaptar para sua loja virtual ou marketplace.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/gerador-de-descricao-de-produto#ferramenta"
                    className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                  >
                    Criar descrição com IA grátis
                  </Link>
                  <a
                    href="#estrutura"
                    className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600"
                  >
                    Ver a estrutura
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
                    <li><a href="#antes-de-escrever" className="hover:text-brand-600">Antes de escrever</a></li>
                    <li><a href="#estrutura" className="hover:text-brand-600">Estrutura em 6 partes</a></li>
                    <li><a href="#comparacao" className="hover:text-brand-600">Antes e depois</a></li>
                    <li><a href="#modelo" className="hover:text-brand-600">Modelo editável</a></li>
                    <li><a href="#exemplos" className="hover:text-brand-600">4 exemplos</a></li>
                    <li><a href="#seo" className="hover:text-brand-600">Descrição e SEO</a></li>
                    <li><a href="#duvidas" className="hover:text-brand-600">Dúvidas frequentes</a></li>
                  </ol>
                </nav>
              </details>

              <section id="antes-de-escrever" aria-labelledby="antes-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Antes de escrever</p>
                <h2 id="antes-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Reúna os dados que você pode confirmar
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  A qualidade do texto depende da qualidade das informações de entrada. Consulte o produto, a embalagem
                  e a ficha oficial. Se um dado não estiver confirmado, não o trate como fato.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {preparation.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card">
                      <span aria-hidden="true" className="mt-0.5 text-sm font-bold text-brand-600">✓</span>
                      <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
                  <p className="text-sm font-semibold text-amber-900">Informação que não deve ser inventada</p>
                  <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
                    Frete, estoque, prazo, parcelamento, garantia, devolução e resultados de uso dependem das condições
                    reais da loja, da plataforma e do produto. Só inclua o que você consegue comprovar.
                  </p>
                </div>
              </section>

              <section id="estrutura" aria-labelledby="estrutura-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Passo a passo</p>
                <h2 id="estrutura-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Estrutura de descrição de produto em 6 partes
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Use as etapas abaixo como uma ordem de revisão. Em produtos simples, alguns blocos podem ser curtos;
                  em produtos técnicos, detalhe o que influencia a escolha.
                </p>
                <ol className="mt-9 space-y-5">
                  {structure.map((step) => (
                    <li key={step.number} className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                      <div className="flex items-start gap-4">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-xs font-semibold text-white">
                          {step.number}
                        </span>
                        <div>
                          <h3 className="text-xl font-semibold leading-snug">{step.title}</h3>
                          <p className="mt-3 text-[15px] leading-7 text-muted">{step.text}</p>
                          <p className="mt-4 rounded-xl bg-canvas px-4 py-3 text-sm leading-relaxed text-ink-soft">
                            <strong>Exemplo:</strong> {step.example}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="comparacao" aria-labelledby="comparacao-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplo prático</p>
                <h2 id="comparacao-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Descrição vaga × descrição mais útil
                </h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-rose-700">Evite</p>
                    <p className="mt-3 text-sm leading-7 text-ink-soft">
                      Garrafa incrível, moderna e de ótima qualidade. Perfeita para qualquer pessoa. Compre agora!
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      O texto usa elogios, mas não informa material, capacidade, tampa ou cuidado de uso.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-700">Prefira</p>
                    <p className="mt-3 text-sm leading-7 text-ink-soft">
                      Garrafa de 750 ml em aço inoxidável, com tampa rosqueável e alça para transporte. Indicada para
                      levar água em atividades diárias. Conteúdo: 1 garrafa. Lave conforme as instruções do fabricante.
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      O leitor identifica o produto, entende seu uso e confere características concretas.
                    </p>
                  </div>
                </div>
              </section>

              <section id="modelo" aria-labelledby="modelo-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Modelo editável</p>
                <h2 id="modelo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Modelo de descrição para copiar e preencher
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Troque os campos entre colchetes por dados verdadeiros e apague os itens que não se aplicam ao produto.
                </p>
                <div className="mt-7 rounded-3xl border border-line bg-ink p-6 text-sm leading-7 text-white/80 shadow-lift sm:p-8">
                  <p className="font-semibold text-white">[NOME DO PRODUTO + MARCA/MODELO]</p>
                  <p className="mt-4">[Explique o que é o produto e para qual uso ele é indicado.]</p>
                  <p className="mt-4">[Apresente uma característica confirmada e o benefício prático relacionado a ela.]</p>
                  <p className="mt-4 font-semibold text-white">Principais características</p>
                  <p>• Material: [material]</p>
                  <p>• Cor/tamanho/modelo: [informação]</p>
                  <p>• Medidas/capacidade/voltagem: [informação]</p>
                  <p>• Compatibilidade: [informação, se aplicável]</p>
                  <p className="mt-4 font-semibold text-white">Conteúdo da embalagem</p>
                  <p>• [Liste somente os itens incluídos]</p>
                  <p className="mt-4 font-semibold text-white">Cuidados e observações</p>
                  <p>[Informe conservação, montagem, condição ou outra observação necessária.]</p>
                </div>
              </section>

              <section id="exemplos" aria-labelledby="exemplos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Inspiração</p>
                <h2 id="exemplos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  4 exemplos de descrição de produto
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Os textos abaixo são exemplos fictícios de estrutura. Não copie especificações sem confirmar: adapte
                  cada frase aos dados e às condições do item que você realmente vende.
                </p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {examples.map((example) => (
                    <article key={example.title} className="rounded-3xl border border-line bg-white p-6 shadow-card">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">{example.category}</p>
                      <h3 className="mt-3 text-lg font-semibold">{example.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{example.text}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section id="seo" aria-labelledby="seo-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Busca orgânica</p>
                <h2 id="seo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Como escrever uma descrição útil para pessoas e para o Google
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  A prioridade é responder às dúvidas de quem compra. Uma página clara também facilita a compreensão do
                  conteúdo pelos mecanismos de busca.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Use o nome real do produto no título, no início da descrição e onde fizer sentido.",
                    "Inclua naturalmente marca, modelo, material, categoria ou uso quando forem relevantes.",
                    "Escreva conteúdo próprio para aquela versão, em vez de repetir um texto genérico em vários itens.",
                    "Organize especificações em listas e mantenha parágrafos curtos para facilitar a leitura.",
                    "Crie links internos claros entre o produto, a categoria e conteúdos relacionados.",
                    "Evite repetir palavras-chave artificialmente ou produzir texto apenas para tentar subir no ranking.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="ia-titulo" className="mt-16 rounded-3xl border border-brand-200 bg-brand-50 p-6 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Primeira versão em segundos</p>
                <h2 id="ia-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Organize os dados do produto com ajuda da IA
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-soft">
                  Informe nome, categoria, características, público e tom de voz. O AnunciaAI monta uma descrição para
                  você revisar, corrigir e adaptar antes de publicar.
                </p>
                <Link
                  href="/gerador-de-descricao-de-produto#ferramenta"
                  className="mt-6 inline-flex rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  Usar o gerador de descrição
                </Link>
              </section>

              <section id="duvidas" aria-labelledby="duvidas-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas frequentes</p>
                <h2 id="duvidas-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Perguntas sobre descrição de produto
                </h2>
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

              <section aria-labelledby="fontes-titulo" className="mt-16 border-t border-line pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Revisão editorial</p>
                <h2 id="fontes-titulo" className="mt-3 text-xl font-semibold">Fontes consultadas</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Este guia foi escrito e revisado pela equipe do AnunciaAI com base em práticas de conteúdo útil,
                  informações verificáveis e leitura clara.
                </p>
                <ul className="mt-5 grid gap-3 text-sm text-muted">
                  <li>
                    <a href="https://developers.google.com/search/docs/essentials" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">
                      Google Search Essentials
                    </a>
                  </li>
                  <li>
                    <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">
                      Google — Como criar conteúdo útil e confiável
                    </a>
                  </li>
                  <li>
                    <a href="https://www.shopify.com/pt/blog/como-fazer-descricao-de-um-produto" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">
                      Shopify — Como fazer a descrição de um produto
                    </a>
                  </li>
                  <li>
                    <a href="https://www.totvs.com/blog/gestao-varejista/descricao-de-produtos/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">
                      TOTVS — Descrição de produtos
                    </a>
                  </li>
                </ul>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="text-sm font-semibold">Neste guia</p>
                <nav aria-label="Índice do guia">
                  <ol className="mt-4 space-y-3 text-sm text-muted">
                    <li><a href="#antes-de-escrever" className="hover:text-brand-600">Antes de escrever</a></li>
                    <li><a href="#estrutura" className="hover:text-brand-600">Estrutura em 6 partes</a></li>
                    <li><a href="#comparacao" className="hover:text-brand-600">Antes e depois</a></li>
                    <li><a href="#modelo" className="hover:text-brand-600">Modelo editável</a></li>
                    <li><a href="#exemplos" className="hover:text-brand-600">4 exemplos</a></li>
                    <li><a href="#seo" className="hover:text-brand-600">Descrição e SEO</a></li>
                    <li><a href="#duvidas" className="hover:text-brand-600">Dúvidas frequentes</a></li>
                  </ol>
                </nav>
                <Link href="/gerador-de-descricao-de-produto#ferramenta" className="mt-6 block rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                  Gerar descrição grátis
                </Link>
              </div>
            </aside>
          </div>

          <section aria-labelledby="continue-titulo" className="border-t border-line bg-white">
            <div className="container-page py-14 sm:py-20">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Próximos passos</p>
                <h2 id="continue-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Continue aprendendo e coloque em prática</h2>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  { href: "/guias", eyebrow: "Biblioteca", title: "Ver todos os guias", text: "Encontre conteúdos práticos para melhorar anúncios e páginas de produto." },
                  { href: "/como-criar-anuncio-no-mercado-livre", eyebrow: "Mercado Livre", title: "Criar um anúncio completo", text: "Organize título, fotos, ficha técnica, descrição, preço e revisão." },
                  { href: "/gerador-de-descricao-de-produto#ferramenta", eyebrow: "Ferramenta gratuita", title: "Gerar sua descrição", text: "Transforme os dados reais do produto em uma primeira versão para revisar." },
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
