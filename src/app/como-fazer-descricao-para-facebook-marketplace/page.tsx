import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-fazer-descricao-para-facebook-marketplace";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-16";
const TITLE = "Como Fazer Descrição para Facebook Marketplace: Modelo";
const DESCRIPTION =
  "Aprenda como fazer descrição para Facebook Marketplace com estrutura pronta, modelo editável, exemplos e checklist para explicar condição, características e itens incluídos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como fazer descrição para Facebook Marketplace",
    "descrição Facebook Marketplace",
    "modelo de descrição Marketplace",
    "exemplo de descrição Facebook Marketplace",
    "texto para anúncio Marketplace",
    "descrição de produto usado Marketplace",
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
        { "@type": "ListItem", position: 3, name: "Descrição para Facebook Marketplace", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const structure = [
  { title: "1. Identifique o produto", text: "Abra com nome do item, marca, modelo e versão quando essas informações forem confirmadas." },
  { title: "2. Explique a condição", text: "Descreva sinais de uso, defeitos, reparos ou desgaste de forma compatível com a condição selecionada no Marketplace." },
  { title: "3. Liste características e itens incluídos", text: "Inclua medidas, material, capacidade, compatibilidade, acessórios e o que realmente acompanha a venda." },
  { title: "4. Feche com detalhes úteis", text: "Acrescente informações verdadeiras sobre retirada, teste ou observações importantes, sem prometer condições que não estejam disponíveis." },
];

const checklist = [
  "A descrição corresponde às fotos e ao título.",
  "A condição do item está explicada com precisão.",
  "Defeitos e sinais de uso relevantes não foram escondidos.",
  "Marca, modelo, medidas e compatibilidade foram conferidos quando aplicáveis.",
  "Os acessórios e itens incluídos na venda estão corretos.",
  "O conteúdo não anuncia serviços ou itens proibidos pelas Políticas Comerciais da Meta.",
];

export default function ComoFazerDescricaoFacebookMarketplacePage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-facebook-marketplace#ferramenta" />
      <main id="ferramenta">
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação">
                <ol className="flex flex-wrap items-center gap-2 text-xs text-muted"><li><Link href="/" className="hover:text-ink">Início</Link></li><li aria-hidden="true">/</li><li><Link href="/guias" className="hover:text-ink">Guias</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="font-medium text-ink-soft">Descrição para Facebook Marketplace</li></ol>
              </nav>
              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Guia prático · Atualizado em agosto de 2026</p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como fazer descrição para Facebook Marketplace</h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Explique o que é o item, em qual condição ele está, o que acompanha e os detalhes que o comprador precisa saber antes de conversar com você.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/gerador-de-anuncios-facebook-marketplace#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">Gerar descrição grátis</Link><a href="#estrutura" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver estrutura</a></div>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section id="estrutura" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Estrutura</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Quatro blocos para uma descrição fácil de revisar</h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">{structure.map((item) => <section key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted">{item.text}</p></section>)}</div>
              </section>

              <section className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Modelo editável</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Copie a estrutura e substitua pelos dados reais</h2>
                <div className="mt-7 rounded-3xl bg-ink p-6 text-sm leading-7 text-white/80 sm:p-8">
                  <p className="font-semibold text-white">[NOME DO PRODUTO + MARCA/MODELO]</p>
                  <p className="mt-4">Condição: [NOVO / USADO / RECONDICIONADO + DETALHES]</p>
                  <p className="mt-4">Características:</p>
                  <p>• [medida, capacidade, material ou compatibilidade]</p>
                  <p>• [outra característica confirmada]</p>
                  <p className="mt-4">Acompanha:</p>
                  <p>• [liste somente os itens incluídos]</p>
                  <p className="mt-4">Observações: [defeitos, marcas de uso, retirada/teste ou detalhe importante]</p>
                </div>
              </section>

              <section className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Condição</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">A descrição deve explicar o que a etiqueta de condição não conta</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">A Meta diferencia condições como novo, usado em diferentes estados e recondicionado. Se o item tiver marcas, defeitos ou reparos, descreva esses detalhes de forma visível e mantenha as fotos coerentes com o texto.</p>
              </section>

              <section className="mt-16 rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Políticas</p>
                <h2 className="mt-3 text-2xl font-semibold">Antes de publicar, confira se o item é permitido</h2>
                <p className="mt-3 text-sm leading-7 text-ink-soft">Os classificados precisam seguir as Políticas Comerciais e os Padrões da Comunidade. A Central de Ajuda da Meta cita, entre exemplos de itens que não podem ser anunciados no Marketplace, serviços, animais e determinados produtos de saúde.</p>
              </section>

              <section className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Confira antes de copiar</h2>
                <ul className="mt-7 grid gap-3">{checklist.map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span className="font-bold text-brand-600">✓</span><span className="text-sm leading-7 text-ink-soft">{item}</span></li>)}</ul>
              </section>

              <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10"><h2 className="text-2xl font-semibold">Transforme os dados em uma primeira versão</h2><p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Use o gerador para organizar título, descrição, benefícios e condição; depois confira tudo antes de publicar.</p><Link href="/gerador-de-anuncios-facebook-marketplace#ferramenta" className="mt-6 inline-flex rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink hover:bg-brand-500 hover:text-white">Abrir gerador para Marketplace</Link></section>
            </div>
            <aside className="hidden lg:block"><div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Continue aprendendo</p><div className="mt-4 grid gap-3 text-sm"><Link href="/como-criar-anuncio-no-facebook-marketplace" className="hover:text-brand-600">Guia completo do anúncio</Link><Link href="/como-criar-titulo-para-facebook-marketplace" className="hover:text-brand-600">Como criar o título</Link></div></div></aside>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
