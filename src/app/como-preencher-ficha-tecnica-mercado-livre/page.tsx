import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-preencher-ficha-tecnica-mercado-livre";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-16";
const TITLE = "Como Preencher a Ficha Técnica do Mercado Livre: Checklist";
const DESCRIPTION =
  "Aprenda como preencher a ficha técnica do Mercado Livre com marca, modelo, código universal, variações e características corretas para deixar o anúncio mais completo.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ficha técnica Mercado Livre",
    "como preencher ficha técnica Mercado Livre",
    "características Mercado Livre",
    "atributos Mercado Livre",
    "código universal Mercado Livre",
    "ficha técnica produto Mercado Livre",
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
        { "@type": "ListItem", position: 3, name: "Ficha técnica Mercado Livre", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const order = [
  {
    title: "1. Confirme a categoria",
    text: "A categoria define quais características o Mercado Livre pede. Se os campos parecem não ter relação com o produto, revise a categoria antes de preencher informações aleatórias.",
  },
  {
    title: "2. Preencha marca e modelo",
    text: "Use exatamente a identificação do fabricante ou da embalagem. Não troque marca por nome da loja e não invente um modelo para completar um campo.",
  },
  {
    title: "3. Complete as características principais",
    text: "Capacidade, material, medida, potência, voltagem e outras especificações variam por categoria. Priorize os dados confirmados que ajudam a diferenciar a versão correta.",
  },
  {
    title: "4. Informe o código universal quando houver",
    text: "O GTIN, EAN, UPC, JAN ou ISBN costuma ficar próximo ao código de barras da embalagem. Em produtos com variações, cada opção pode ter seu próprio código.",
  },
  {
    title: "5. Cadastre as variações corretamente",
    text: "Cor, tamanho, voltagem ou outra opção deve ficar na variação quando o comprador escolhe entre versões do mesmo produto. Confira estoque e identificação de cada uma.",
  },
  {
    title: "6. Use a descrição apenas para complementar",
    text: "Depois de preencher a ficha técnica, leve para a descrição apenas contexto, benefícios, compatibilidade e detalhes que não estejam representados nos campos estruturados.",
  },
];

const checklist = [
  "A categoria representa exatamente o produto.",
  "Marca, linha e modelo foram conferidos na embalagem ou no fabricante.",
  "Medidas, capacidade, potência, material e voltagem estão corretos quando se aplicam.",
  "O código universal foi informado quando existe e corresponde à versão anunciada.",
  "As variações têm dados e estoque coerentes com cada opção.",
  "A opção “Não se aplica” foi usada somente quando a característica realmente não corresponde ao produto.",
  "Ficha técnica, título, fotos e descrição descrevem a mesma versão.",
];

const examples = [
  {
    product: "Fone Bluetooth",
    fields: ["Marca", "Modelo", "Cor", "Tipo de conexão", "Compatibilidade", "Código universal quando houver"],
  },
  {
    product: "Liquidificador",
    fields: ["Marca", "Modelo", "Potência", "Capacidade", "Voltagem", "Material do copo", "Código universal"],
  },
  {
    product: "Camiseta",
    fields: ["Marca", "Modelo/linha", "Gênero", "Material", "Tamanho", "Cor", "Variações"],
  },
];

export default function ComoPreencherFichaTecnicaMercadoLivrePage() {
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
                  <li aria-current="page" className="font-medium text-ink-soft">Ficha técnica Mercado Livre</li>
                </ol>
              </nav>

              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">
                  Guia prático · Atualizado em agosto de 2026
                </p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">
                  Como preencher a ficha técnica do Mercado Livre
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                  Organize marca, modelo, características, código universal e variações para deixar o anúncio mais completo e ajudar o comprador a encontrar a versão correta.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-mercado-livre#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">
                    Montar anúncio com IA grátis
                  </Link>
                  <a href="#passo-a-passo" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">
                    Ver o checklist
                  </a>
                </div>
                <p className="mt-5 text-sm text-muted">Leitura de aproximadamente 7 minutos · Por AnunciaAI</p>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section id="por-que" aria-labelledby="por-que-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Por que preencher</p>
                <h2 id="por-que-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">A ficha técnica ajuda na busca, nos filtros e na comparação</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  As características estruturadas ajudam o Mercado Livre a identificar o produto e permitem que compradores usem filtros como marca, modelo, medida e outras especificações. Alguns atributos podem ser obrigatórios, e outros podem influenciar a qualidade e a exposição do anúncio quando ficam incompletos.
                </p>
                <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5 text-sm leading-7 text-ink-soft">
                  Não complete um campo só para “ficar 100%”. Informação errada pode ser pior do que uma característica que realmente não se aplica.
                </div>
              </section>

              <section id="passo-a-passo" aria-labelledby="passos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Passo a passo</p>
                <h2 id="passos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Preencha em uma ordem que reduz erros</h2>
                <div className="mt-8 grid gap-4">
                  {order.map((item) => (
                    <section key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
                    </section>
                  ))}
                </div>
              </section>

              <section id="codigo-universal" aria-labelledby="codigo-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Código universal</p>
                <h2 id="codigo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Procure o número próximo ao código de barras</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  O código universal identifica o produto e pode aparecer como EAN, UPC, JAN, GTIN ou ISBN. Normalmente é numérico e fica na caixa ou embalagem. Se não encontrar, confirme com o fabricante ou fornecedor em vez de copiar o código de um produto parecido.
                </p>
              </section>

              <section id="exemplos" aria-labelledby="exemplos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplos</p>
                <h2 id="exemplos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Campos comuns mudam conforme a categoria</h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {examples.map((example) => (
                    <article key={example.product} className="rounded-3xl border border-line bg-white p-6 shadow-card">
                      <h3 className="font-semibold">{example.product}</h3>
                      <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted">
                        {example.fields.map((field) => <li key={field}>• {field}</li>)}
                      </ul>
                    </article>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">Esses são apenas exemplos. Os campos efetivos são definidos pela categoria escolhida no Mercado Livre.</p>
              </section>

              <section id="erros" aria-labelledby="erros-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Erros comuns</p>
                <h2 id="erros-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">O que costuma enfraquecer a ficha técnica</h2>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Escolher uma categoria errada e tentar adaptar os campos ao produto.",
                    "Confundir marca com modelo ou linha.",
                    "Marcar “Não se aplica” só porque você ainda não encontrou a informação.",
                    "Copiar código universal de outra versão do produto.",
                    "Misturar medidas, voltagens ou capacidades de variações diferentes.",
                    "Repetir na descrição informações que já estão bem representadas na ficha técnica.",
                  ].map((item) => (
                    <li key={item} className="rounded-2xl border border-line bg-white p-5 text-sm leading-7 text-muted shadow-card">{item}</li>
                  ))}
                </ul>
              </section>

              <section id="checklist" aria-labelledby="checklist-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist final</p>
                <h2 id="checklist-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Confira a ficha antes de publicar</h2>
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
                <h2 className="text-2xl font-semibold sm:text-3xl">Agora transforme os dados em anúncio</h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">
                  Use as informações confirmadas da ficha técnica como base para gerar título, descrição, benefícios e palavras-chave sem inventar detalhes do produto.
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
                    <li><a href="#por-que" className="hover:text-brand-600">Por que preencher</a></li>
                    <li><a href="#passo-a-passo" className="hover:text-brand-600">Passo a passo</a></li>
                    <li><a href="#codigo-universal" className="hover:text-brand-600">Código universal</a></li>
                    <li><a href="#exemplos" className="hover:text-brand-600">Exemplos</a></li>
                    <li><a href="#erros" className="hover:text-brand-600">Erros comuns</a></li>
                    <li><a href="#checklist" className="hover:text-brand-600">Checklist</a></li>
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
