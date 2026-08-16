import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-criar-titulo-para-olx";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-16";
const TITLE = "Como Criar Título para OLX: Fórmula e Exemplos";
const DESCRIPTION =
  "Aprenda como criar título para OLX com fórmula prática, exemplos, limite de 90 caracteres, erros comuns e checklist para revisar antes de publicar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como criar título para OLX",
    "título OLX",
    "modelo de título OLX",
    "exemplo de título OLX",
    "título de anúncio OLX",
    "como fazer título OLX",
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
        { "@type": "ListItem", position: 3, name: "Título para OLX", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const examples = [
  { category: "Eletrônicos", weak: "Vendo celular oportunidade!!!", strong: "iPhone 13 128GB Azul Usado" },
  { category: "Casa", weak: "Sofá lindo barato urgente", strong: "Sofá 3 Lugares Cinza Seminovo" },
  { category: "Informática", weak: "Notebook top promoção", strong: "Notebook Lenovo IdeaPad 3 Ryzen 5 8GB" },
  { category: "Moda", weak: "Tênis original imperdível", strong: "Tênis Adidas Grand Court Masculino 40" },
];

const checklist = [
  "O produto ou serviço aparece logo nas primeiras palavras.",
  "Marca, modelo, medida ou versão foram incluídos somente quando são confirmados.",
  "O estado de conservação aparece quando ajuda a diferenciar o item.",
  "Não há palavras como “vendo”, “oportunidade” ou símbolos sem relação com o produto.",
  "Não há repetição artificial de palavras-chave.",
  "Título, fotos, categoria e descrição representam exatamente o mesmo item.",
  "O título tem no máximo 90 caracteres, conforme a orientação atual da Central de Ajuda da OLX.",
];

export default function ComoCriarTituloOlxPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-olx#ferramenta" />
      <main id="ferramenta">
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação">
                <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  <li><Link href="/" className="hover:text-ink">Início</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/guias" className="hover:text-ink">Guias</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="font-medium text-ink-soft">Título para OLX</li>
                </ol>
              </nav>

              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Guia prático · Atualizado em agosto de 2026</p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como criar título para OLX</h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                  Coloque as palavras mais importantes primeiro, identifique o item sem enrolação e use os 90 caracteres disponíveis para acrescentar detalhes que realmente ajudam o comprador.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-olx#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">Criar anúncio com IA grátis</Link>
                  <a href="#formula" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver a fórmula</a>
                </div>
                <p className="mt-5 text-sm text-muted">Leitura de aproximadamente 7 minutos · Por AnunciaAI</p>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section id="regra-principal" aria-labelledby="regra-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Regra principal</p>
                <h2 id="regra-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">As primeiras palavras precisam identificar o anúncio</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  A própria OLX informa que as buscas com palavras-chave priorizam as primeiras palavras do título. Por isso, comece pelo nome do produto ou serviço e deixe termos promocionais de fora.
                </p>
                <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5 text-sm leading-7 text-ink-soft">
                  O limite informado atualmente pela Central de Ajuda da OLX é de 90 caracteres para o título. Algumas categorias, como Autos, podem usar títulos gerados automaticamente que não podem ser editados.
                </div>
              </section>

              <section id="formula" aria-labelledby="formula-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Fórmula prática</p>
                <h2 id="formula-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Produto + marca/modelo + característica + estado</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">Use apenas as partes que realmente existem e ajudam a diferenciar o item. O estado de conservação é especialmente útil em classificados de produtos usados.</p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: "Produto", text: "Comece pelo termo que o comprador usaria para procurar o item." },
                    { title: "Marca e modelo", text: "Inclua quando forem relevantes e puderem ser confirmados." },
                    { title: "Característica", text: "Capacidade, tamanho, medida, cor ou outra informação que diferencia a versão." },
                    { title: "Estado", text: "Novo, usado ou seminovo somente quando essa informação representa corretamente o item." },
                  ].map((item) => (
                    <section key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
                    </section>
                  ))}
                </div>
              </section>

              <section id="exemplos" aria-labelledby="exemplos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Antes e depois</p>
                <h2 id="exemplos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Exemplos de títulos mais identificáveis</h2>
                <div className="mt-8 grid gap-4">
                  {examples.map((example) => (
                    <article key={example.category} className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">{example.category}</p>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div><p className="text-xs font-semibold text-muted">Evite</p><p className="mt-2 font-mono text-sm leading-7 text-ink-soft">{example.weak}</p></div>
                        <div><p className="text-xs font-semibold text-muted">Prefira</p><p className="mt-2 font-mono text-sm leading-7 text-ink-soft">{example.strong}</p></div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section id="erros" aria-labelledby="erros-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Erros comuns</p>
                <h2 id="erros-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Não desperdice o começo do título</h2>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Começar com “vendo”, “compro”, “oportunidade” ou outra palavra que não identifica o item.",
                    "Usar caracteres especiais apenas para chamar atenção.",
                    "Repetir várias palavras semelhantes para tentar aparecer em mais buscas.",
                    "Inserir bairros, cidades ou termos de compatibilidade em excesso.",
                    "Esconder a identidade do produto atrás de elogios como “top” ou “imperdível”.",
                    "Adicionar marca, modelo ou estado de conservação que não foram confirmados.",
                  ].map((item) => <li key={item} className="rounded-2xl border border-line bg-white p-5 text-sm leading-7 text-muted shadow-card">{item}</li>)}
                </ul>
              </section>

              <section id="checklist" aria-labelledby="checklist-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
                <h2 id="checklist-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Revise antes de publicar</h2>
                <ul className="mt-7 grid gap-3">
                  {checklist.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span className="font-bold text-brand-600">✓</span><span className="text-sm leading-7 text-ink-soft">{item}</span></li>
                  ))}
                </ul>
              </section>

              <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10">
                <h2 className="text-2xl font-semibold sm:text-3xl">Quer montar o anúncio inteiro?</h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Informe os dados reais do item e use o AnunciaAI para gerar uma primeira versão de título, descrição e benefícios para revisar.</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-olx#ferramenta" className="rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:bg-brand-500 hover:text-white">Abrir gerador para OLX</Link>
                  <Link href="/como-fazer-descricao-para-olx" className="rounded-2xl border border-white/20 px-6 py-3.5 text-center text-sm font-semibold text-white hover:border-white/50">Ver guia de descrição</Link>
                </div>
              </section>

              <section aria-labelledby="fontes-titulo" className="mt-16 border-t border-line pt-8">
                <h2 id="fontes-titulo" className="text-base font-semibold">Fontes e revisão</h2>
                <p className="mt-3 text-sm leading-7 text-muted">Este conteúdo foi revisado em 16 de agosto de 2026 com base na Central de Ajuda da OLX. Limites, telas e regras podem mudar.</p>
                <ul className="mt-4 grid gap-2 text-sm text-muted">
                  <li><a href="https://ajuda.olx.com.br/s/article/dicas-como-fazer-bom-anuncio" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">OLX — Dicas para um bom anúncio</a></li>
                  <li><a href="https://ajuda.olx.com.br/s/article/como-publicar-anuncio" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">OLX — Como publicar anúncio</a></li>
                </ul>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Neste guia</p>
                <nav aria-label="Índice do guia"><ul className="mt-4 grid gap-3 text-sm text-muted">
                  <li><a href="#regra-principal" className="hover:text-brand-600">Regra principal</a></li>
                  <li><a href="#formula" className="hover:text-brand-600">Fórmula</a></li>
                  <li><a href="#exemplos" className="hover:text-brand-600">Exemplos</a></li>
                  <li><a href="#erros" className="hover:text-brand-600">Erros comuns</a></li>
                  <li><a href="#checklist" className="hover:text-brand-600">Checklist</a></li>
                </ul></nav>
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
