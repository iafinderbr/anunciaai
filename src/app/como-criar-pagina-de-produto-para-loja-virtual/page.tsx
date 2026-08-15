import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-criar-pagina-de-produto-para-loja-virtual";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-15";

const TITLE = "Como Criar Página de Produto para Loja Virtual";
const DESCRIPTION =
  "Aprenda como criar uma página de produto para loja virtual com título, imagens, descrição, benefícios, ficha técnica, SEO e revisão.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como criar página de produto",
    "página de produto loja virtual",
    "página de produto e-commerce",
    "conteúdo para loja virtual",
    "descrição de produto e-commerce",
    "SEO para página de produto",
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
        { "@type": "ListItem", position: 3, name: "Página de produto para loja virtual", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const preparation = [
  "Nome, marca, modelo e versão exatos",
  "Fotos próprias ou imagens autorizadas do produto",
  "Características, medidas, material, cor e variações",
  "Benefícios que podem ser sustentados pelas características",
  "Conteúdo da embalagem, compatibilidade e cuidados",
  "Preço, estoque e condições que serão configurados na loja",
];

const steps = [
  {
    id: "titulo",
    number: "01",
    title: "Comece por um título fácil de entender",
    text: "Use o nome do produto e acrescente marca, modelo ou característica que diferencia a versão. O título deve ajudar o visitante a identificar o item sem depender da descrição.",
    points: ["Coloque a informação mais importante no começo.", "Evite elogios genéricos e palavras repetidas."],
  },
  {
    id: "imagens",
    number: "02",
    title: "Mostre o produto com imagens consistentes",
    text: "Use imagens que representem exatamente a versão vendida. Mostre o produto inteiro, detalhes relevantes e elementos que ajudam o comprador a entender tamanho, acabamento ou conteúdo.",
    points: ["Evite misturar cores ou versões diferentes sem identificação.", "Mostre detalhes que costumam gerar dúvida antes da compra."],
  },
  {
    id: "resumo",
    number: "03",
    title: "Explique o principal valor do produto logo no início",
    text: "Depois do título, apresente em poucas linhas o que o produto é, para quem pode ser útil e qual característica mais pesa na escolha. Esse resumo deve preparar o visitante para os detalhes seguintes.",
    points: ["Seja específico sobre uso e público.", "Não transforme uma característica em promessa que você não consegue comprovar."],
  },
  {
    id: "beneficios",
    number: "04",
    title: "Transforme características em benefícios claros",
    text: "Liste as principais características e explique o efeito prático de cada uma. Uma especificação técnica pode ser mais fácil de entender quando vem acompanhada de sua utilidade real.",
    points: ["Mantenha as características originais visíveis.", "Evite frases absolutas como “o melhor” ou “garantido” sem base comprovável."],
  },
  {
    id: "descricao",
    number: "05",
    title: "Crie uma descrição completa sem repetir a página inteira",
    text: "A descrição deve reunir contexto de uso, diferenciais, compatibilidade, conteúdo da embalagem e informações que não cabem no resumo. Organize em parágrafos curtos e listas quando isso melhorar a leitura.",
    points: ["Responda dúvidas que poderiam impedir a compra.", "Remova informações que pertencem a outra versão do produto."],
  },
  {
    id: "ficha",
    number: "06",
    title: "Separe a ficha técnica em um bloco próprio",
    text: "Material, medidas, capacidade, peso, cor, voltagem, tamanho e outras especificações ficam mais fáceis de comparar quando aparecem em uma lista ou tabela dedicada.",
    points: ["Use os mesmos nomes de atributos em produtos semelhantes.", "Confirme medidas e unidades antes de publicar."],
  },
  {
    id: "seo",
    number: "07",
    title: "Prepare título SEO, URL e texto para busca",
    text: "Use o nome real do produto e termos que descrevem naturalmente marca, modelo, categoria e características. A página precisa continuar útil para pessoas; repetição artificial de palavras não melhora a experiência.",
    points: ["Crie uma URL curta e identificável quando a plataforma permitir.", "Use uma meta description que resuma o produto sem inventar condições comerciais."],
  },
  {
    id: "revisao",
    number: "08",
    title: "Revise a página como se você fosse o comprador",
    text: "Compare título, fotos, descrição, ficha técnica, preço, estoque e variações. Procure informações conflitantes e confirme se a versão exibida é a mesma que será enviada ao cliente.",
    points: ["Teste a leitura no celular.", "Confira links, botões, variações e informações essenciais antes de publicar."],
  },
];

const questions = [
  {
    question: "O que uma página de produto precisa ter?",
    answer:
      "Título claro, imagens coerentes, resumo do produto, benefícios, descrição, ficha técnica, informações comerciais configuradas corretamente e uma revisão final para garantir consistência entre todos os blocos.",
  },
  {
    question: "Como escrever uma página de produto para SEO?",
    answer:
      "Use o nome real do produto em pontos importantes, como título e introdução, e acrescente termos naturais relacionados a marca, modelo, categoria, material ou uso. O conteúdo deve ser útil e específico, sem repetir palavras de forma artificial.",
  },
  {
    question: "Descrição e ficha técnica são a mesma coisa?",
    answer:
      "Não. A descrição explica contexto, uso e benefícios. A ficha técnica organiza dados objetivos como material, medidas, capacidade, cor, tamanho e compatibilidade.",
  },
  {
    question: "Posso usar IA para montar a página de produto?",
    answer:
      "Sim. A IA pode organizar uma primeira versão de título, descrição, benefícios e SEO. Antes de publicar, confirme cada característica, medida, compatibilidade e condição comercial com os dados reais do produto.",
  },
];

export default function ComoCriarPaginaProdutoLojaVirtualPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-para-loja-virtual#ferramenta" />
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
                  <li aria-current="page" className="font-medium text-ink-soft">Página de produto</li>
                </ol>
              </nav>
              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Guia prático · Atualizado em agosto de 2026</p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como criar uma página de produto para loja virtual</h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Organize título, imagens, benefícios, descrição, ficha técnica e SEO para montar uma página clara, completa e fácil de revisar.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-para-loja-virtual#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">Criar conteúdo com IA grátis</Link>
                  <a href="#passo-a-passo" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600">Ver o passo a passo</a>
                </div>
                <p className="mt-5 text-sm text-muted">Leitura de aproximadamente 9 minutos · Por AnunciaAI</p>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section id="antes-de-comecar" aria-labelledby="antes-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Antes de começar</p>
                <h2 id="antes-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Separe os dados que sustentam a página</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">Uma página boa começa com informações corretas. Quanto menos lacunas existirem no briefing, menor o risco de misturar versões ou completar dados com suposições.</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {preparation.map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span aria-hidden="true" className="mt-0.5 text-sm font-bold text-brand-600">✓</span><span className="text-sm leading-relaxed text-ink-soft">{item}</span></li>)}
                </ul>
              </section>

              <section id="passo-a-passo" aria-labelledby="passos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Passo a passo</p>
                <h2 id="passos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Monte a página do topo até a revisão</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">Use esta ordem como checklist para não deixar uma informação importante isolada ou contraditória.</p>
                <ol className="mt-9 space-y-5">
                  {steps.map((step) => (
                    <li key={step.id} id={step.id} className="scroll-mt-24 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                      <div className="flex items-start gap-4">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-xs font-semibold text-white">{step.number}</span>
                        <div>
                          <h3 className="text-xl font-semibold leading-snug">{step.title}</h3>
                          <p className="mt-3 text-[15px] leading-7 text-muted">{step.text}</p>
                          <ul className="mt-4 space-y-2">{step.points.map((point) => <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"><span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" /><span>{point}</span></li>)}</ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section aria-labelledby="modelo-titulo" className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Modelo simples</p>
                <h2 id="modelo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Uma estrutura que você pode adaptar</h2>
                <div className="mt-7 rounded-3xl border border-line bg-ink p-6 text-sm leading-7 text-white/80 shadow-lift sm:p-8">
                  <p className="font-semibold text-white">[NOME + MARCA + MODELO]</p>
                  <p className="mt-4">[Resumo curto explicando o que é, para quem serve e o principal diferencial.]</p>
                  <p className="mt-4 font-semibold text-white">Principais benefícios</p>
                  <p>• [Característica confirmada + efeito prático]</p>
                  <p>• [Característica confirmada + efeito prático]</p>
                  <p className="mt-4 font-semibold text-white">Ficha técnica</p>
                  <p>• Material: [dado real]</p>
                  <p>• Medidas: [dado real]</p>
                  <p>• Cor/variação: [dado real]</p>
                  <p className="mt-4 font-semibold text-white">Conteúdo da embalagem</p>
                  <p>• [Liste apenas os itens incluídos]</p>
                </div>
              </section>

              <section aria-labelledby="ia-titulo" className="mt-16 rounded-3xl border border-brand-200 bg-brand-50 p-6 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Acelere o cadastro</p>
                <h2 id="ia-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Transforme as informações do produto em blocos prontos para revisar</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-soft">O gerador para loja virtual cria título, descrição, benefícios, ficha técnica, anúncio e SEO a partir dos dados que você informar.</p>
                <Link href="/gerador-de-anuncios-para-loja-virtual#ferramenta" className="mt-6 inline-flex rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">Usar o gerador para loja virtual</Link>
              </section>

              <section id="duvidas" aria-labelledby="duvidas-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas frequentes</p>
                <h2 id="duvidas-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Perguntas sobre páginas de produto</h2>
                <div className="mt-7 divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
                  {questions.map((item) => <details key={item.question} className="group p-5 sm:p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4"><h3 className="text-[15px] font-medium text-ink">{item.question}</h3><span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p></details>)}
                </div>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">Neste guia</p>
                <nav aria-label="Índice do guia"><ol className="mt-4 space-y-2.5 text-sm text-muted"><li><a href="#antes-de-comecar" className="hover:text-brand-600">Antes de começar</a></li><li><a href="#titulo" className="hover:text-brand-600">Título</a></li><li><a href="#imagens" className="hover:text-brand-600">Imagens</a></li><li><a href="#beneficios" className="hover:text-brand-600">Benefícios</a></li><li><a href="#descricao" className="hover:text-brand-600">Descrição</a></li><li><a href="#ficha" className="hover:text-brand-600">Ficha técnica</a></li><li><a href="#seo" className="hover:text-brand-600">SEO</a></li><li><a href="#duvidas" className="hover:text-brand-600">Dúvidas</a></li></ol></nav>
                <div className="mt-5 border-t border-line pt-5"><p className="text-sm font-semibold">Quer os blocos prontos?</p><p className="mt-1.5 text-xs leading-relaxed text-muted">Gere uma primeira versão e revise antes de publicar.</p><Link href="/gerador-de-anuncios-para-loja-virtual#ferramenta" className="mt-4 flex justify-center rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">Criar conteúdo grátis</Link></div>
              </div>
            </aside>
          </div>
        </article>

        <section aria-labelledby="proximos-titulo" className="border-t border-line bg-white">
          <div className="container-page py-12 sm:py-16">
            <h2 id="proximos-titulo" className="text-xl font-semibold sm:text-2xl">Ferramentas para completar a página</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[{ href: "/gerador-de-titulos-para-produtos", label: "Gerador de títulos", text: "Crie opções claras para identificar o produto." },{ href: "/gerador-de-descricao-de-produto", label: "Gerador de descrição", text: "Organize características, uso e benefícios." },{ href: "/gerador-de-palavras-chave-para-produtos", label: "Gerador de palavras-chave", text: "Encontre termos relacionados ao produto." }].map((item) => <Link key={item.href} href={item.href} className="rounded-2xl border border-line bg-canvas p-5 transition-colors hover:border-brand-500"><h3 className="text-sm font-semibold">{item.label}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p></Link>)}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
