import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-criar-anuncio-na-olx";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-15";

const TITLE = "Como Criar Anúncio na OLX: Guia 2026";
const DESCRIPTION =
  "Aprenda como criar anúncio na OLX com título, fotos, categoria, descrição, preço, localização e revisão antes de publicar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como criar anúncio na OLX",
    "como anunciar na OLX",
    "criar anúncio OLX",
    "título para OLX",
    "descrição para OLX",
    "como vender na OLX",
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
        { "@type": "ListItem", position: 3, name: "Como criar anúncio na OLX", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const preparation = [
  "Nome exato e categoria do produto",
  "Estado de conservação e defeitos relevantes",
  "Marca, modelo, medidas e acessórios incluídos",
  "Fotos próprias e nítidas do item real",
  "Preço total e região onde o produto está",
];

const steps = [
  {
    id: "regras",
    number: "01",
    title: "Confira as regras e se o item pode ser anunciado",
    text: "Antes de montar o texto, confirme se o produto ou serviço é permitido e se a categoria escolhida possui alguma regra específica. Isso evita preparar um anúncio que depois não poderá ser publicado.",
    points: ["Consulte as regras atuais da OLX antes de publicar.", "Não tente contornar uma restrição mudando o nome ou a categoria do item."],
  },
  {
    id: "titulo",
    number: "02",
    title: "Comece o título pelas palavras mais importantes",
    text: "A OLX informa que suas buscas priorizam as primeiras palavras do título. Identifique o produto logo no começo e use o restante para estado, marca, modelo ou característica útil.",
    points: ["O limite atual informado pela OLX é de 90 caracteres.", "Evite caracteres especiais, palavras genéricas e termos sem relação com o item."],
  },
  {
    id: "fotos",
    number: "03",
    title: "Adicione fotos nítidas do produto real",
    text: "A OLX exige pelo menos uma foto e informa que anúncios com imagens têm prioridade nas buscas. Mostre o item inteiro, detalhes, acessórios e sinais de uso que o comprador precisa conhecer.",
    points: ["Para a maioria das categorias, a OLX informa limite de 6 fotos.", "Imóveis e Autos podem ter limites diferentes; confira o formulário da sua categoria."],
  },
  {
    id: "categoria",
    number: "04",
    title: "Escolha categoria, subcategoria e preencha os campos",
    text: "Selecione a categoria que representa exatamente o item e complete os campos obrigatórios e opcionais disponíveis. Informações completas ajudam o comprador a filtrar e entender o anúncio.",
    points: ["Preencha marca, modelo e condição quando esses campos existirem.", "Não use uma categoria mais popular se ela não representar o produto."],
  },
  {
    id: "descricao",
    number: "05",
    title: "Escreva uma descrição completa e objetiva",
    text: "Explique estado de conservação, características, medidas, itens incluídos e qualquer detalhe que possa mudar a decisão de compra. A descrição deve complementar os campos do anúncio, não repetir frases promocionais.",
    points: ["A OLX informa limite de até 6.000 caracteres para a descrição.", "Links, e-mails e palavras de busca sem relação com o produto não devem ser usados."],
  },
  {
    id: "preco-localizacao",
    number: "06",
    title: "Informe o preço total e a localização correta",
    text: "Use o campo de preço para o valor total do item e informe o CEP ou região correspondente ao produto. Essas informações evitam expectativas erradas antes mesmo do primeiro contato.",
    points: ["Não invente parcelamento, frete ou desconto que não esteja realmente disponível.", "Se aceitar troca ou doação, marque a opção correta no formulário quando ela estiver disponível."],
  },
  {
    id: "negociacao",
    number: "07",
    title: "Prepare o anúncio para uma negociação clara",
    text: "Deixe explícito o que está incluído, o estado do item e observações importantes. Depois de publicar, use os recursos de contato e negociação disponibilizados pela própria OLX.",
    points: ["Não esconda defeitos para conseguir mais contatos.", "Combine retirada, entrega e pagamento somente com informações que você possa cumprir."],
  },
  {
    id: "revisao",
    number: "08",
    title: "Revise tudo antes de enviar",
    text: "Compare título, fotos, campos, descrição, preço e localização. Procure informações contraditórias, caracteres desnecessários e qualquer característica que tenha sido colocada sem confirmação.",
    points: ["Confira se as fotos mostram exatamente o item descrito.", "Leia o começo do título novamente: ele deve identificar o produto imediatamente."],
  },
];

const questions = [
  {
    question: "Quantos caracteres pode ter o título na OLX?",
    answer:
      "A Central de Ajuda da OLX informa limite de 90 caracteres para o título. Mesmo com esse espaço, vale colocar as informações mais importantes primeiro porque a própria OLX diz que as primeiras palavras têm prioridade nas buscas.",
  },
  {
    question: "Quantas fotos posso colocar no anúncio?",
    answer:
      "A OLX exige pelo menos uma foto. Para a maioria das categorias, informa limite de 6 imagens; Imóveis e Autos podem aceitar até 20. Confira sempre o formulário da categoria usada.",
  },
  {
    question: "O que colocar na descrição do anúncio?",
    answer:
      "Estado de conservação, características, medidas, acessórios incluídos, defeitos relevantes e informações que ajudem o comprador a entender exatamente o item. Evite links, e-mails e palavras sem relação com o anúncio.",
  },
  {
    question: "Posso usar inteligência artificial para escrever o anúncio?",
    answer:
      "Sim, como apoio para organizar as informações. Antes de publicar, revise cada detalhe e confirme que título, descrição, preço e características correspondem ao produto real.",
  },
];

export default function ComoCriarAnuncioOlxPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-olx#ferramenta" />

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
                  <li aria-current="page" className="font-medium text-ink-soft">Como criar anúncio na OLX</li>
                </ol>
              </nav>

              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">
                  Guia prático · Atualizado em agosto de 2026
                </p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">
                  Como criar um anúncio na OLX: passo a passo
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                  Organize título, fotos, categoria, descrição, preço e localização para publicar um anúncio claro e fiel ao item que você vende.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-olx#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                    Criar anúncio com IA grátis
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
                    <li><a href="#regras" className="hover:text-brand-600">Regras</a></li>
                    <li><a href="#titulo" className="hover:text-brand-600">Título</a></li>
                    <li><a href="#fotos" className="hover:text-brand-600">Fotos</a></li>
                    <li><a href="#categoria" className="hover:text-brand-600">Categoria</a></li>
                    <li><a href="#descricao" className="hover:text-brand-600">Descrição</a></li>
                    <li><a href="#revisao" className="hover:text-brand-600">Revisão</a></li>
                    <li><a href="#duvidas" className="hover:text-brand-600">Dúvidas</a></li>
                  </ol>
                </nav>
              </details>

              <section id="antes-de-comecar" aria-labelledby="antes-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Antes de começar</p>
                <h2 id="antes-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Separe as informações do item</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Um classificado funciona melhor quando o comprador consegue entender rapidamente o que está sendo vendido e em qual estado ele se encontra.
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
                <p className="mt-4 text-[15px] leading-7 text-muted">Siga esta sequência para reduzir dúvidas e evitar informações conflitantes no anúncio.</p>
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
                <h2 id="exemplo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Título genérico × título fácil de encontrar</h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-rose-700">Evite</p>
                    <p className="mt-3 font-mono text-sm leading-relaxed text-ink-soft">VENDO SOFÁ TOP!!! OPORTUNIDADE</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">As primeiras palavras não identificam o produto e o texto usa termos e símbolos sem utilidade.</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-700">Prefira</p>
                    <p className="mt-3 font-mono text-sm leading-relaxed text-ink-soft">Sofá Retrátil 3 Lugares Suede Bege Pouco Uso</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">Produto, tamanho, material, cor e estado aparecem logo de início.</p>
                  </div>
                </div>
              </section>

              <section aria-labelledby="modelo-titulo" className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Modelo de descrição</p>
                <h2 id="modelo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Uma estrutura simples para adaptar</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">Substitua os campos pelas informações reais e retire qualquer linha que não se aplique ao item.</p>
                <div className="mt-7 rounded-3xl border border-line bg-ink p-6 text-sm leading-7 text-white/80 shadow-lift sm:p-8">
                  <p className="font-semibold text-white">[NOME DO PRODUTO]</p>
                  <p className="mt-4">[Explique em uma frase o que é o item e por que está vendendo, se isso for relevante.]</p>
                  <p className="mt-4 font-semibold text-white">Estado e características</p>
                  <p>• [Estado de conservação]</p>
                  <p>• [Marca, modelo, cor, material ou medidas]</p>
                  <p>• [Defeitos ou marcas de uso relevantes]</p>
                  <p className="mt-4 font-semibold text-white">O que acompanha</p>
                  <p>• [Liste somente os itens realmente incluídos]</p>
                </div>
              </section>

              <section aria-labelledby="ia-titulo" className="mt-16 rounded-3xl border border-brand-200 bg-brand-50 p-6 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Economize tempo</p>
                <h2 id="ia-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Transforme os dados do item em uma primeira versão pronta para revisar</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-soft">
                  Informe produto, preço e características. O AnunciaAI organiza título, descrição, benefícios e estado de conservação para você revisar antes de publicar.
                </p>
                <Link href="/gerador-de-anuncios-olx#ferramenta" className="mt-6 inline-flex rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                  Usar o gerador para OLX
                </Link>
              </section>

              <section id="duvidas" aria-labelledby="duvidas-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas frequentes</p>
                <h2 id="duvidas-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Perguntas sobre anúncios na OLX</h2>
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

              <section aria-labelledby="fontes-titulo" className="mt-16 border-t border-line pt-8">
                <h2 id="fontes-titulo" className="text-base font-semibold">Fontes e revisão</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Este guia foi revisado em 15 de agosto de 2026 com base na Central de Ajuda oficial da OLX. Regras e formulários podem mudar; confira as opções exibidas na sua conta antes de publicar.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a href="https://ajuda.olx.com.br/s/article/como-publicar-anuncio" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">
                      Como publicar anúncio — OLX
                    </a>
                  </li>
                  <li>
                    <a href="https://ajuda.olx.com.br/s/article/dicas-como-fazer-bom-anuncio" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">
                      Dicas para um bom anúncio — OLX
                    </a>
                  </li>
                  <li>
                    <a href="https://ajuda.olx.com.br/s/article/regras" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">
                      Regras de publicação — OLX
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
                    <li><a href="#regras" className="hover:text-brand-600">Regras</a></li>
                    <li><a href="#titulo" className="hover:text-brand-600">Título</a></li>
                    <li><a href="#fotos" className="hover:text-brand-600">Fotos</a></li>
                    <li><a href="#categoria" className="hover:text-brand-600">Categoria</a></li>
                    <li><a href="#descricao" className="hover:text-brand-600">Descrição</a></li>
                    <li><a href="#revisao" className="hover:text-brand-600">Revisão final</a></li>
                    <li><a href="#duvidas" className="hover:text-brand-600">Dúvidas frequentes</a></li>
                  </ol>
                </nav>
                <div className="mt-5 border-t border-line pt-5">
                  <p className="text-sm font-semibold">Quer o texto pronto?</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">Gere gratuitamente e revise antes de publicar.</p>
                  <Link href="/gerador-de-anuncios-olx#ferramenta" className="mt-4 flex justify-center rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
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
                { href: "/gerador-de-descricao-de-produto", label: "Gerador de descrição", text: "Organize características e estado do item." },
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
