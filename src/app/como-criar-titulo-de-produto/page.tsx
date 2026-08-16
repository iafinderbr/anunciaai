import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-criar-titulo-de-produto";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-15";

const TITLE = "Como Criar Título de Produto: Modelos e Exemplos";
const DESCRIPTION =
  "Aprenda como criar títulos de produtos com fórmula pronta, checklist, erros comuns e exemplos para lojas virtuais e marketplaces.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como criar título de produto",
    "título para produto exemplos",
    "modelo de título de produto",
    "título para e-commerce",
    "título para marketplace",
    "como nomear produtos na loja virtual",
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
        { "@type": "ListItem", position: 3, name: "Como criar título de produto", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const preparation = [
  "Tipo exato do produto",
  "Marca, linha e modelo confirmados",
  "Cor, tamanho, material, capacidade ou voltagem",
  "Quantidade quando for kit ou conjunto",
  "Compatibilidade e público quando forem decisivos",
  "Limite e regras atuais do canal onde será publicado",
];

const formulaParts = [
  {
    number: "01",
    title: "Produto",
    text: "Comece pelo termo que identifica o item sem ambiguidade. Use a forma que o comprador reconhece, como fone Bluetooth, jogo de panelas ou camiseta.",
  },
  {
    number: "02",
    title: "Marca",
    text: "Inclua a marca quando ela identifica ou diferencia o produto. Não use o nome da sua loja no lugar da marca do fabricante.",
  },
  {
    number: "03",
    title: "Modelo ou linha",
    text: "Acrescente modelo, coleção ou código quando isso ajuda a localizar a versão correta e pode ser confirmado no produto ou na embalagem.",
  },
  {
    number: "04",
    title: "Característica principal",
    text: "Finalize com o detalhe que influencia a escolha: capacidade, tamanho, material, cor, quantidade, voltagem ou compatibilidade.",
  },
];

const categoryModels = [
  { category: "Eletrônicos", model: "Produto + marca + modelo + capacidade/compatibilidade + cor" },
  { category: "Moda", model: "Tipo da peça + público/modelagem + marca/linha + material + cor" },
  { category: "Casa e cozinha", model: "Produto + marca/linha + material + capacidade/medida + quantidade" },
  { category: "Beleza", model: "Tipo do produto + marca + linha + indicação confirmada + volume" },
  { category: "Acessórios", model: "Produto + compatibilidade/uso + material + medida + cor" },
  { category: "Kits", model: "Kit/conjunto + quantidade + produtos incluídos + marca + característica" },
];

const examples = [
  { category: "Eletrônicos", title: "Fone Bluetooth Sonora Air B20 Preto" },
  { category: "Informática", title: "Cabo USB-C para USB-C 1m 60W Preto" },
  { category: "Moda", title: "Camiseta Feminina Aurora Algodão Manga Curta Azul" },
  { category: "Calçados", title: "Tênis RunFast Pace Masculino Preto Tamanho 40" },
  { category: "Casa", title: "Jogo 6 Taças de Vidro 300ml Transparente" },
  { category: "Organização", title: "Kit 3 Potes Herméticos 1L Transparente" },
  { category: "Beleza", title: "Hidratante Facial Derma Vita 50g para Pele Seca" },
  { category: "Decoração", title: "Tapete para Sala Lume 200x150cm Cinza" },
];

const mistakes = [
  { title: "Usar elogios vagos", text: "“Produto incrível” e “qualidade premium” ocupam espaço sem identificar o item." },
  { title: "Colocar promoção no título", text: "Preço, desconto, frete e urgência mudam e devem ficar nos campos próprios do canal." },
  { title: "Repetir palavras-chave", text: "Variações artificiais deixam a leitura confusa e não acrescentam informação sobre o produto." },
  { title: "Esconder a diferença entre variações", text: "Cor, tamanho ou capacidade precisam aparecer quando distinguem o item anunciado." },
  { title: "Usar caixa alta, símbolos ou emojis", text: "Recursos de destaque podem parecer spam e violar regras editoriais de alguns canais." },
  { title: "Prometer o que não foi confirmado", text: "Não invente compatibilidade, material, potência, garantia ou resultados de uso." },
];

const questions = [
  {
    question: "Qual é a melhor fórmula para título de produto?",
    answer:
      "Uma base segura é produto + marca + modelo + característica principal. A ordem pode mudar conforme a categoria e o canal, mas o item e seus detalhes mais importantes devem aparecer primeiro.",
  },
  {
    question: "Quantos caracteres o título deve ter?",
    answer:
      "Depende do canal. No Google Merchant Center, o atributo de título aceita de 1 a 150 caracteres, embora a exibição possa mostrar 70 ou menos. Marketplaces têm regras próprias e podem alterá-las, então confira o campo antes de publicar.",
  },
  {
    question: "Devo colocar preço e frete no título?",
    answer:
      "Normalmente não. Essas condições podem mudar e costumam ter campos próprios. Priorize informações permanentes que identificam o produto, como modelo, medida, material ou capacidade.",
  },
  {
    question: "Posso usar o mesmo título em todos os canais?",
    answer:
      "Use a mesma base de dados, mas adapte a ordem e o tamanho às regras de cada canal. Nunca mude a identidade do produto apenas para encaixar uma palavra-chave.",
  },
  {
    question: "A automação de conteúdo pode gerar o título?",
    answer:
      "Pode criar opções a partir dos dados fornecidos, mas você precisa conferir cada especificação. Se enviar um título gerados pela ferramenta ao Google Merchant Center, siga também as regras atuais do atributo structured_title.",
  },
];

export default function ComoCriarTituloDeProdutoPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-titulos-para-produtos#ferramenta" />

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
                  <li aria-current="page" className="font-medium text-ink-soft">Título de produto</li>
                </ol>
              </nav>

              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">
                  Guia prático · Atualizado em agosto de 2026
                </p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">
                  Como criar título de produto: fórmula, modelos e exemplos
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                  Aprenda a organizar as informações que identificam o produto, adaptar a estrutura por categoria e
                  evitar palavras que ocupam espaço sem ajudar o comprador.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-titulos-para-produtos#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                    Criar títulos com o gerador gratuito
                  </Link>
                  <a href="#formula" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600">
                    Ver a fórmula
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
                    <li><a href="#antes-de-criar" className="hover:text-brand-600">Antes de criar</a></li>
                    <li><a href="#formula" className="hover:text-brand-600">Fórmula em 4 partes</a></li>
                    <li><a href="#categorias" className="hover:text-brand-600">Modelos por categoria</a></li>
                    <li><a href="#comparacao" className="hover:text-brand-600">Antes e depois</a></li>
                    <li><a href="#exemplos" className="hover:text-brand-600">8 exemplos</a></li>
                    <li><a href="#canais" className="hover:text-brand-600">Regras por canal</a></li>
                    <li><a href="#erros" className="hover:text-brand-600">Erros comuns</a></li>
                    <li><a href="#duvidas" className="hover:text-brand-600">Dúvidas frequentes</a></li>
                  </ol>
                </nav>
              </details>

              <section id="antes-de-criar" aria-labelledby="antes-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Antes de criar</p>
                <h2 id="antes-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Separe apenas informações confirmadas</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  O título é um resumo do produto, não um espaço para adivinhar especificações. Consulte o item, a
                  embalagem e a ficha do fabricante antes de escolher o que entra no texto.
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

              <section id="formula" aria-labelledby="formula-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Fórmula principal</p>
                <h2 id="formula-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Produto + marca + modelo + característica</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Essa ordem funciona como ponto de partida porque apresenta primeiro a identidade do item e depois o
                  detalhe que diferencia a versão. Remova qualquer parte que não exista ou não seja relevante.
                </p>
                <ol className="mt-9 grid gap-5 sm:grid-cols-2">
                  {formulaParts.map((part) => (
                    <li key={part.number} className="rounded-3xl border border-line bg-white p-6 shadow-card">
                      <span className="grid size-10 place-items-center rounded-xl bg-ink text-xs font-semibold text-white">{part.number}</span>
                      <h3 className="mt-4 text-xl font-semibold">{part.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{part.text}</p>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5">
                  <p className="text-sm font-semibold text-brand-800">Exemplo da fórmula</p>
                  <p className="mt-2 font-mono text-sm leading-7 text-ink-soft">Fone Bluetooth + Sonora + Air B20 + Preto</p>
                  <p className="mt-2 text-sm text-muted">Resultado: Fone Bluetooth Sonora Air B20 Preto</p>
                </div>
              </section>

              <section id="categorias" aria-labelledby="categorias-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Modelos prontos</p>
                <h2 id="categorias-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Adapte a ordem à categoria do produto</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  O dado mais útil muda conforme o que está sendo vendido. Capacidade pode ser decisiva em eletrônicos;
                  material e tamanho costumam ter mais peso em moda e itens para casa.
                </p>
                <div className="mt-7 divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
                  {categoryModels.map((item) => (
                    <div key={item.category} className="p-5 sm:grid sm:grid-cols-[140px_1fr] sm:gap-5 sm:p-6">
                      <h3 className="text-sm font-semibold text-ink">{item.category}</h3>
                      <p className="mt-2 font-mono text-sm leading-6 text-muted sm:mt-0">{item.model}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="comparacao" aria-labelledby="comparacao-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Antes e depois</p>
                <h2 id="comparacao-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Título genérico × título identificável</h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-rose-700">Evite</p>
                    <p className="mt-3 font-mono text-sm leading-7 text-ink-soft">OFERTA!!! Tênis lindo super confortável barato</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">Não informa marca, modelo, público, cor ou tamanho.</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-700">Prefira</p>
                    <p className="mt-3 font-mono text-sm leading-7 text-ink-soft">Tênis RunFast Pace Masculino Preto Tamanho 40</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">O comprador consegue identificar a versão antes de abrir a página.</p>
                  </div>
                </div>
              </section>

              <section id="exemplos" aria-labelledby="exemplos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Inspiração</p>
                <h2 id="exemplos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">8 exemplos de títulos de produtos</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Estes exemplos são fictícios e demonstram apenas a estrutura. Troque marcas, modelos e especificações
                  pelos dados verdadeiros do item anunciado.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {examples.map((example) => (
                    <div key={example.title} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">{example.category}</p>
                      <p className="mt-3 text-sm font-medium leading-6 text-ink">{example.title}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="canais" aria-labelledby="canais-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Adaptação por canal</p>
                <h2 id="canais-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">A mesma base, regras diferentes</h2>
                <div className="mt-7 grid gap-5">
                  <article className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                    <h3 className="text-lg font-semibold">Google Merchant Center</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      O atributo de título aceita até 150 caracteres, mas os usuários podem ver somente os primeiros 70
                      ou menos, dependendo da tela. Coloque os detalhes importantes no início, diferencie variações e não
                      inclua promoção, caixa alta ou símbolos usados apenas para chamar atenção.
                    </p>
                    <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-sm leading-6 text-amber-900/80">
                      <strong className="text-amber-900">Título criado com a ferramenta:</strong> ao enviar para o Merchant Center,
                      o Google orienta usar o atributo <code>structured_title</code>, com o tipo de fonte digital
                      <code className="ml-1">trained_algorithmic_media</code>. Isso é uma regra do feed, não do texto visível na sua loja.
                    </div>
                  </article>
                  <article className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                    <h3 className="text-lg font-semibold">Marketplaces</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      Mercado Livre e outros canais definem limites, categorias e campos próprios. Use uma estrutura clara
                      como produto + marca + modelo + especificação e confirme a regra exibida no cadastro antes de publicar.
                    </p>
                  </article>
                  <article className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                    <h3 className="text-lg font-semibold">Loja virtual</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      Mantenha um padrão entre produtos semelhantes e faça cada título corresponder à versão apresentada
                      na página. Clareza e consistência ajudam o cliente a comparar itens e organizar o catálogo.
                    </p>
                  </article>
                </div>
              </section>

              <section id="erros" aria-labelledby="erros-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Revisão</p>
                <h2 id="erros-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">6 erros que enfraquecem o título</h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {mistakes.map((mistake) => (
                    <div key={mistake.title} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                      <h3 className="text-sm font-semibold">{mistake.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{mistake.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="checklist-titulo" className="mt-16 rounded-3xl border border-line bg-ink p-6 text-white sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">Checklist final</p>
                <h2 id="checklist-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Confira antes de publicar</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "O título identifica o produto logo no começo?",
                    "Marca e modelo correspondem ao item real?",
                    "A variação anunciada está clara?",
                    "A característica principal ajuda a escolher?",
                    "Promoções, emojis e repetições foram removidos?",
                    "O texto respeita o limite e as regras do canal?",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 rounded-xl bg-white/8 p-4 text-sm leading-relaxed text-white/80">
                      <span aria-hidden="true" className="text-brand-300">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="ia-titulo" className="mt-16 rounded-3xl border border-brand-200 bg-brand-50 p-6 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Crie variações</p>
                <h2 id="ia-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Transforme os dados reais em opções de título</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-soft">
                  Informe o produto, as características e o canal. O AnunciaAI organiza um título principal e variações
                  para você conferir antes de publicar.
                </p>
                <Link href="/gerador-de-titulos-para-produtos#ferramenta" className="mt-6 inline-flex rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                  Usar o gerador de títulos
                </Link>
              </section>

              <section id="duvidas" aria-labelledby="duvidas-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas frequentes</p>
                <h2 id="duvidas-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Perguntas sobre títulos de produtos</h2>
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
                  Guia escrito e revisado pela equipe do AnunciaAI. Limites e regras de canais podem mudar; confirme as
                  instruções apresentadas no momento do cadastro.
                </p>
                <ul className="mt-5 grid gap-3 text-sm text-muted">
                  <li><a href="https://support.google.com/merchants/answer/6324415?hl=pt-BR" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">Google Merchant Center — título e título estruturado</a></li>
                  <li><a href="https://vendedores.mercadolivre.com.br/nota/como-criar-um-titulo-atrativo" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">Mercado Livre — como fazer um bom título</a></li>
                  <li><a href="https://vendedores.mercadolivre.com.br/nota/como-criar-anuncios-eficientes-no-mercado-livre" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">Mercado Livre — como criar anúncios eficientes</a></li>
                </ul>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="text-sm font-semibold">Neste guia</p>
                <nav aria-label="Índice do guia">
                  <ol className="mt-4 space-y-3 text-sm text-muted">
                    <li><a href="#antes-de-criar" className="hover:text-brand-600">Antes de criar</a></li>
                    <li><a href="#formula" className="hover:text-brand-600">Fórmula em 4 partes</a></li>
                    <li><a href="#categorias" className="hover:text-brand-600">Modelos por categoria</a></li>
                    <li><a href="#comparacao" className="hover:text-brand-600">Antes e depois</a></li>
                    <li><a href="#exemplos" className="hover:text-brand-600">8 exemplos</a></li>
                    <li><a href="#canais" className="hover:text-brand-600">Regras por canal</a></li>
                    <li><a href="#erros" className="hover:text-brand-600">Erros comuns</a></li>
                    <li><a href="#duvidas" className="hover:text-brand-600">Dúvidas frequentes</a></li>
                  </ol>
                </nav>
                <Link href="/gerador-de-titulos-para-produtos#ferramenta" className="mt-6 block rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">Gerar títulos grátis</Link>
              </div>
            </aside>
          </div>

          <section aria-labelledby="continue-titulo" className="border-t border-line bg-white">
            <div className="container-page py-14 sm:py-20">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Próximos passos</p>
              <h2 id="continue-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Complete a página do produto</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { href: "/como-escolher-palavras-chave-para-produtos", eyebrow: "Palavras-chave", title: "Escolha os termos certos", text: "Separe a palavra principal, atributos e buscas de cauda longa." },
                  { href: "/como-fazer-descricao-de-produto", eyebrow: "Descrição", title: "Escreva o texto completo", text: "Use uma estrutura em seis partes, modelo editável e exemplos." },
                  { href: "/como-criar-anuncio-no-mercado-livre", eyebrow: "Marketplace", title: "Monte o anúncio inteiro", text: "Organize categoria, fotos, ficha técnica, descrição e revisão." },
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
