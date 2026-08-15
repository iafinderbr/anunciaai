import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-criar-nome-de-produto";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-15";

const TITLE = "Como Criar Nome de Produto: Guia com Exemplos";
const DESCRIPTION =
  "Aprenda como criar nome de produto com briefing, estilos, critérios de avaliação, exemplos fictícios e checklist antes do lançamento.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como criar nome de produto",
    "nomes para produtos",
    "ideias de nomes para produtos",
    "nome criativo para produto",
    "como escolher nome de produto",
    "naming de produto",
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
        { "@type": "ListItem", position: 3, name: "Como criar nome de produto", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const briefing = [
  "O que é e para que serve o produto",
  "Quem deve reconhecer ou desejar o produto",
  "Qual diferencial pode ser comprovado",
  "Tom desejado: simples, técnico, leve ou sofisticado",
  "Idioma e região onde o nome será usado",
  "Relação com a marca principal e outros produtos da linha",
];

const steps = [
  {
    number: "01",
    title: "Defina o papel do nome",
    text: "Decida se ele identificará um único produto, uma coleção ou uma família inteira. Um nome que funciona para uma versão pode limitar futuras cores, tamanhos ou modelos.",
  },
  {
    number: "02",
    title: "Crie um banco de palavras",
    text: "Liste materiais, sensações, usos, lugares, benefícios reais e características do público. Separe palavras concretas de associações mais criativas.",
  },
  {
    number: "03",
    title: "Gere ideias em direções diferentes",
    text: "Teste opções descritivas, sugestivas, compostas e inventadas. Produza quantidade primeiro; a avaliação acontece na etapa seguinte.",
  },
  {
    number: "04",
    title: "Leia, fale e escreva cada opção",
    text: "Verifique pronúncia, grafia, abreviações e possíveis interpretações. Peça para outra pessoa ouvir o nome e tentar escrevê-lo sem ajuda.",
  },
  {
    number: "05",
    title: "Compare com o mercado e com seu catálogo",
    text: "Procure nomes muito parecidos, significados indesejados e confusão com concorrentes ou produtos que você já vende. Disponibilidade de domínio ou perfil não substitui pesquisa de marca.",
  },
  {
    number: "06",
    title: "Faça a verificação jurídica adequada",
    text: "Pesquise marcas idênticas ou semelhantes nas bases do INPI e considere as classes relacionadas. Uma busca inicial não garante registro; quando a decisão for importante, procure orientação especializada.",
  },
];

const styles = [
  {
    style: "Descritivo",
    explanation: "Explica diretamente o tipo ou uso, mas pode ser menos distintivo.",
    structure: "categoria + característica",
  },
  {
    style: "Sugestivo",
    explanation: "Evoca uma sensação ou benefício sem descrever tudo literalmente.",
    structure: "ideia associada + som simples",
  },
  {
    style: "Composto",
    explanation: "Combina duas palavras relacionadas ao produto ou posicionamento.",
    structure: "palavra A + palavra B",
  },
  {
    style: "Inventado",
    explanation: "Cria uma palavra nova, que precisará ganhar significado com o uso da marca.",
    structure: "sílabas ou fragmentos combinados",
  },
  {
    style: "Linha + versão",
    explanation: "Mantém um sistema consistente para diferentes produtos ou níveis.",
    structure: "nome da linha + modelo/variação",
  },
];

const evaluation = [
  "Combina com a proposta e o público?",
  "É fácil de falar, ouvir e escrever?",
  "Evita confusão com outro produto ou concorrente?",
  "Funciona com novas versões da linha?",
  "Tem significados problemáticos nos locais de venda?",
  "Pode ser usado em um título que também identifica o produto?",
  "Passou por pesquisa inicial de marcas idênticas e semelhantes?",
];

const examples = [
  { category: "Café", name: "Serra Clara", title: "Café Torrado Serra Clara 500g Moagem Média" },
  { category: "Skincare", name: "Nuvia", title: "Hidratante Facial Nuvia 50g para Pele Seca" },
  { category: "Organização", name: "Encaixa", title: "Kit Organizador Encaixa com 3 Caixas Transparentes" },
  { category: "Papelaria", name: "Traço Leve", title: "Caderno Traço Leve A5 Pontilhado com 80 Folhas" },
  { category: "Acessórios", name: "Lume", title: "Bolsa Transversal Lume Sintética Preta" },
  { category: "Pet", name: "Pata Viva", title: "Brinquedo Interativo Pata Viva para Cães Pequenos" },
];

const questions = [
  {
    question: "Todo produto precisa de um nome criativo?",
    answer:
      "Não. Produtos revendidos devem manter a marca, linha e modelo oficiais. Um nome próprio faz mais sentido para produtos autorais, coleções ou linhas que sua empresa controla.",
  },
  {
    question: "Nome de produto e título são a mesma coisa?",
    answer:
      "Não necessariamente. O nome identifica a criação ou linha; o título acrescenta o tipo do produto e características que ajudam o comprador a reconhecer a versão.",
  },
  {
    question: "Como saber se um nome já existe?",
    answer:
      "Pesquise o nome exato e variações no mercado, na internet e nas bases de marcas do INPI. A análise deve considerar semelhança e classes de produtos ou serviços, por isso uma busca simples não garante disponibilidade jurídica.",
  },
  {
    question: "Preciso registrar o nome no INPI?",
    answer:
      "O registro de marca é uma decisão jurídica e comercial. Consulte o guia e as bases oficiais do INPI e, se o nome for importante para o negócio, considere orientação de um profissional especializado.",
  },
  {
    question: "Posso usar inteligência artificial para criar nomes?",
    answer:
      "Pode usar a IA para ampliar o brainstorm, mas não trate uma sugestão como disponível. Avalie significado, adequação, pronúncia e possíveis conflitos antes de lançar ou investir no nome.",
  },
];

export default function ComoCriarNomeDeProdutoPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-nomes-para-produtos#ferramenta" />

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
                  <li aria-current="page" className="font-medium text-ink-soft">Nome de produto</li>
                </ol>
              </nav>

              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Guia prático · Atualizado em agosto de 2026</p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como criar nome de produto: método, estilos e exemplos</h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                  Aprenda quando usar um nome próprio, como gerar opções em direções diferentes e quais verificações
                  fazer antes de apresentar o produto ao mercado.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-nomes-para-produtos#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">Criar nomes com IA grátis</Link>
                  <a href="#passo-a-passo" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600">Ver o método</a>
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
                    <li><a href="#quando-usar" className="hover:text-brand-600">Quando usar</a></li>
                    <li><a href="#briefing" className="hover:text-brand-600">Briefing</a></li>
                    <li><a href="#passo-a-passo" className="hover:text-brand-600">Método em 6 etapas</a></li>
                    <li><a href="#estilos" className="hover:text-brand-600">Estilos de nome</a></li>
                    <li><a href="#avaliacao" className="hover:text-brand-600">Como avaliar</a></li>
                    <li><a href="#nome-titulo" className="hover:text-brand-600">Nome × título</a></li>
                    <li><a href="#exemplos" className="hover:text-brand-600">6 exemplos</a></li>
                    <li><a href="#duvidas" className="hover:text-brand-600">Dúvidas frequentes</a></li>
                  </ol>
                </nav>
              </details>

              <section id="quando-usar" aria-labelledby="quando-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Primeira decisão</p>
                <h2 id="quando-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">O produto realmente precisa de um nome novo?</h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-700">Pode fazer sentido</p>
                    <p className="mt-3 text-sm leading-7 text-ink-soft">Produto próprio, receita autoral, coleção, linha exclusiva ou criação que sua empresa controla.</p>
                  </div>
                  <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-rose-700">Não renomeie</p>
                    <p className="mt-3 text-sm leading-7 text-ink-soft">Produto de outra marca ou modelo já existente. Preserve a identificação oficial para não confundir o comprador.</p>
                  </div>
                </div>
              </section>

              <section id="briefing" aria-labelledby="briefing-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Antes do brainstorm</p>
                <h2 id="briefing-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Prepare um briefing curto e específico</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">Sem critérios, qualquer palavra pode parecer interessante. Responda aos pontos abaixo antes de gerar ideias.</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {briefing.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span aria-hidden="true" className="mt-0.5 text-sm font-bold text-brand-600">✓</span><span className="text-sm leading-relaxed text-ink-soft">{item}</span></li>
                  ))}
                </ul>
              </section>

              <section id="passo-a-passo" aria-labelledby="passos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Método em 6 etapas</p>
                <h2 id="passos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Como criar e filtrar nomes de produtos</h2>
                <ol className="mt-9 space-y-5">
                  {steps.map((step) => (
                    <li key={step.number} className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                      <div className="flex items-start gap-4"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-xs font-semibold text-white">{step.number}</span><div><h3 className="text-xl font-semibold leading-snug">{step.title}</h3><p className="mt-3 text-[15px] leading-7 text-muted">{step.text}</p></div></div>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="estilos" aria-labelledby="estilos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Direções criativas</p>
                <h2 id="estilos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">5 estilos para explorar no brainstorm</h2>
                <div className="mt-7 divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
                  {styles.map((item) => (
                    <div key={item.style} className="p-5 sm:grid sm:grid-cols-[130px_1fr] sm:gap-5 sm:p-6">
                      <h3 className="text-sm font-semibold">{item.style}</h3>
                      <div className="mt-2 sm:mt-0"><p className="text-sm leading-relaxed text-muted">{item.explanation}</p><p className="mt-2 font-mono text-sm text-ink-soft">{item.structure}</p></div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="avaliacao" aria-labelledby="avaliacao-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Filtro</p>
                <h2 id="avaliacao-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Avalie a ideia com critérios, não apenas gosto pessoal</h2>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {evaluation.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500"/><span className="text-sm leading-relaxed text-ink-soft">{item}</span></li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
                  <p className="text-sm font-semibold text-amber-900">Disponível na internet não significa disponível como marca</p>
                  <p className="mt-2 text-sm leading-7 text-amber-900/80">Encontrar um domínio ou usuário livre não garante o direito de usar ou registrar o nome. Consulte as bases oficiais e considere análise especializada.</p>
                </div>
              </section>

              <section id="nome-titulo" aria-labelledby="nome-titulo-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Diferença importante</p>
                <h2 id="nome-titulo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Nome do produto × título da página</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">O nome pode construir identidade; o título precisa também explicar o que é o item e qual versão está sendo vendida.</p>
                <div className="mt-7 rounded-3xl border border-line bg-ink p-6 text-white shadow-lift sm:p-8">
                  <dl className="grid gap-6 sm:grid-cols-2">
                    <div><dt className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-300">Nome</dt><dd className="mt-3 text-xl font-semibold">Serra Clara</dd><dd className="mt-2 text-sm leading-relaxed text-white/65">Identidade escolhida para a linha.</dd></div>
                    <div><dt className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-300">Título</dt><dd className="mt-3 text-xl font-semibold">Café Torrado Serra Clara 500g Moagem Média</dd><dd className="mt-2 text-sm leading-relaxed text-white/65">Identifica produto, nome, peso e versão.</dd></div>
                  </dl>
                </div>
              </section>

              <section id="exemplos" aria-labelledby="exemplos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Inspiração</p>
                <h2 id="exemplos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">6 exemplos fictícios de nome e título</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">Os exemplos demonstram estrutura. A disponibilidade dos nomes não foi verificada; não use nenhum deles sem pesquisa própria.</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {examples.map((item) => (
                    <article key={item.name} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">{item.category}</p><h3 className="mt-3 text-lg font-semibold">{item.name}</h3><p className="mt-2 text-sm leading-7 text-muted">{item.title}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section aria-labelledby="ia-titulo" className="mt-16 rounded-3xl border border-brand-200 bg-brand-50 p-6 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Amplie o brainstorm</p>
                <h2 id="ia-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Gere opções em vários estilos e compare</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-soft">Informe o produto, o público, os diferenciais e o tom. Use as sugestões como ponto de partida e faça todas as verificações antes de escolher.</p>
                <Link href="/gerador-de-nomes-para-produtos#ferramenta" className="mt-6 inline-flex rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">Usar o gerador de nomes</Link>
              </section>

              <section id="duvidas" aria-labelledby="duvidas-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas frequentes</p>
                <h2 id="duvidas-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Perguntas sobre nomes de produtos</h2>
                <div className="mt-7 divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
                  {questions.map((item) => (
                    <details key={item.question} className="group p-5 sm:p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink">{item.question}<span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p></details>
                  ))}
                </div>
              </section>

              <section aria-labelledby="fontes-titulo" className="mt-16 border-t border-line pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Revisão editorial</p>
                <h2 id="fontes-titulo" className="mt-3 text-xl font-semibold">Fontes e avisos</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">Este conteúdo é educativo e não substitui análise jurídica sobre disponibilidade ou registro de marca.</p>
                <ul className="mt-5 grid gap-3 text-sm text-muted">
                  <li><a href="https://www.gov.br/inpi/pt-br/servicos/marcas/busca" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">INPI — busca de marcas</a></li>
                  <li><a href="https://www.gov.br/inpi/pt-br/servicos/marcas/guia-basico" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">INPI — guia básico de marcas</a></li>
                  <li><a href="https://support.google.com/merchants/answer/6324415?hl=pt-BR" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">Google Merchant Center — identificação do produto no título</a></li>
                </ul>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="text-sm font-semibold">Neste guia</p>
                <nav aria-label="Índice do guia"><ol className="mt-4 space-y-3 text-sm text-muted">
                  <li><a href="#quando-usar" className="hover:text-brand-600">Quando usar</a></li><li><a href="#briefing" className="hover:text-brand-600">Briefing</a></li><li><a href="#passo-a-passo" className="hover:text-brand-600">Método em 6 etapas</a></li><li><a href="#estilos" className="hover:text-brand-600">Estilos de nome</a></li><li><a href="#avaliacao" className="hover:text-brand-600">Como avaliar</a></li><li><a href="#nome-titulo" className="hover:text-brand-600">Nome × título</a></li><li><a href="#exemplos" className="hover:text-brand-600">6 exemplos</a></li><li><a href="#duvidas" className="hover:text-brand-600">Dúvidas frequentes</a></li>
                </ol></nav>
                <Link href="/gerador-de-nomes-para-produtos#ferramenta" className="mt-6 block rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">Gerar nomes grátis</Link>
              </div>
            </aside>
          </div>

          <section aria-labelledby="continue-titulo" className="border-t border-line bg-white">
            <div className="container-page py-14 sm:py-20">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Próximos passos</p>
              <h2 id="continue-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Apresente o produto com clareza</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  { href: "/como-criar-titulo-de-produto", eyebrow: "Título", title: "Identifique a versão", text: "Combine produto, marca, modelo e característica principal." },
                  { href: "/como-fazer-descricao-de-produto", eyebrow: "Descrição", title: "Explique o produto", text: "Use dados verdadeiros em uma estrutura completa e fácil de ler." },
                  { href: "/guias", eyebrow: "Biblioteca", title: "Ver todos os guias", text: "Continue aprendendo com os conteúdos gratuitos do AnunciaAI." },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-2xl border border-line bg-canvas p-5 transition-colors hover:border-brand-300 hover:bg-brand-50"><p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">{item.eyebrow}</p><h3 className="mt-3 font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p></Link>
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
