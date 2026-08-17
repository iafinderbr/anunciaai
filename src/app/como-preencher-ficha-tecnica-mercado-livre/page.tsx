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
  "Aprenda a preencher a ficha técnica do Mercado Livre com marca, modelo, código universal, variações e características corretas do produto.";

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

const steps = [
  {
    title: "1. Confirme a categoria",
    text: "A categoria determina quais atributos aparecem. Se os campos não combinarem com o produto, revise a categoria antes de preencher.",
  },
  {
    title: "2. Confira marca, linha e modelo",
    text: "Use a identificação real do fabricante ou da embalagem. Não substitua marca pelo nome da loja nem invente modelo para completar um campo.",
  },
  {
    title: "3. Preencha as especificações aplicáveis",
    text: "Capacidade, potência, material, medidas, cor e voltagem variam conforme a categoria. Priorize dados confirmados da versão anunciada.",
  },
  {
    title: "4. Informe o código universal quando houver",
    text: "GTIN, EAN, UPC, JAN ou ISBN pode aparecer junto ao código de barras. Confira se o número corresponde exatamente à versão do produto.",
  },
  {
    title: "5. Organize as variações",
    text: "Cor, tamanho, voltagem e outras opções devem permanecer coerentes com fotos, estoque e demais dados de cada variação.",
  },
  {
    title: "6. Revise a consistência do anúncio",
    text: "Ficha técnica, título, fotos e descrição devem representar a mesma versão. Corrija divergências antes de publicar.",
  },
] as const;

const examples = [
  ["Fone Bluetooth", "Marca, modelo, cor, conexão, compatibilidade e código universal quando houver"],
  ["Liquidificador", "Marca, modelo, potência, capacidade, voltagem, material do copo e código universal"],
  ["Camiseta", "Marca, linha, material, tamanho, cor e variações disponíveis"],
] as const;

const checklist = [
  "A categoria representa o produto corretamente.",
  "Marca e modelo foram conferidos em fonte confiável do produto.",
  "Medidas, potência, capacidade, material e voltagem estão corretos quando aplicáveis.",
  "O código universal corresponde à versão anunciada quando existe.",
  "As variações têm fotos, dados e estoque coerentes.",
  "Título, ficha técnica, fotos e descrição não apresentam informações conflitantes.",
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
                  Organize marca, modelo, atributos, código universal e variações para manter a ficha técnica coerente com o produto realmente anunciado.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-mercado-livre#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">
                    Montar anúncio com o gerador
                  </Link>
                  <a href="#passo-a-passo" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">
                    Ver o passo a passo
                  </a>
                </div>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section aria-labelledby="base-titulo">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Por que preencher</p>
                <h2 id="base-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">A ficha técnica organiza os dados estruturados do produto</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Os atributos disponíveis mudam por categoria. Preencher somente informações confirmadas ajuda a manter consistência entre a versão escolhida, os filtros, o título e a descrição.
                </p>
              </section>

              <section id="passo-a-passo" aria-labelledby="passos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Passo a passo</p>
                <h2 id="passos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Preencha em uma ordem que reduz erros</h2>
                <div className="mt-8 grid gap-4">
                  {steps.map((step) => (
                    <section key={step.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{step.text}</p>
                    </section>
                  ))}
                </div>
              </section>

              <section aria-labelledby="codigo-titulo" className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Código universal</p>
                <h2 id="codigo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Use o identificador da versão correta</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Quando o produto tiver um código universal, procure-o na embalagem ou em documentação confiável do fabricante. Não copie o identificador de uma versão parecida apenas para preencher o campo.
                </p>
              </section>

              <section aria-labelledby="exemplos-titulo" className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplos</p>
                <h2 id="exemplos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Os campos mudam conforme a categoria</h2>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {examples.map(([product, fields]) => (
                    <article key={product} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                      <h3 className="font-semibold">{product}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{fields}</p>
                    </article>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">
                  São exemplos de organização. Confira sempre os atributos exibidos para a categoria escolhida no momento do cadastro.
                </p>
              </section>

              <section aria-labelledby="checklist-titulo" className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
                <h2 id="checklist-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Revise antes de publicar</h2>
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
                <h2 className="text-2xl font-semibold sm:text-3xl">Use os dados confirmados no restante do anúncio</h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">
                  Depois de organizar a ficha técnica, use as mesmas informações como base para uma primeira versão de título, descrição e benefícios.
                </p>
                <Link href="/gerador-de-anuncios-mercado-livre#ferramenta" className="mt-6 inline-flex rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink hover:bg-brand-500 hover:text-white">
                  Abrir gerador para Mercado Livre
                </Link>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Continue aprendendo</p>
                <nav className="mt-4 grid gap-3 text-sm" aria-label="Guias relacionados">
                  <Link href="/como-criar-anuncio-no-mercado-livre" className="hover:text-brand-600">Guia completo do anúncio</Link>
                  <Link href="/como-criar-titulo-para-mercado-livre" className="hover:text-brand-600">Como criar o título</Link>
                  <Link href="/como-fazer-descricao-para-mercado-livre" className="hover:text-brand-600">Como fazer a descrição</Link>
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
