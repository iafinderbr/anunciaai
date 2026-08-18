import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { PRO_PLANNED_PRICE_LABEL } from "@/lib/plans";
import { SITE_URL } from "@/lib/site";

const PATH = "/sobre";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const TITLE = "Sobre o AnunciaAI: Ferramentas para Vendedores Online";
const DESCRIPTION =
  "Conheça o AnunciaAI, a ferramenta brasileira criada para ajudar vendedores a organizar títulos, descrições, benefícios e anúncios de produtos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: ABSOLUTE_URL,
    siteName: "AnunciaAI",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const principles = [
  {
    title: "Informação antes de persuasão",
    text: "A ferramenta parte dos dados informados pelo usuário. Marca, modelo, medidas, estado e outras características precisam ser verdadeiros e conferidos antes da publicação.",
  },
  {
    title: "Conteúdo que pode ser revisado",
    text: "Os textos gerados funcionam como primeira versão. O vendedor continua responsável por revisar preço, condições comerciais, especificações e regras da plataforma onde vai anunciar.",
  },
  {
    title: "Guias baseados em fontes oficiais",
    text: "Quando um guia depende de limites ou regras de marketplaces, priorizamos documentação oficial, registramos a data de revisão e indicamos as fontes na própria página.",
  },
  {
    title: "Privacidade por padrão",
    text: "O conteúdo digitado no gerador não é salvo no banco de gerações. Para estatísticas públicas, mantemos somente informações mínimas, como canal utilizado e horário da geração.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${ABSOLUTE_URL}#page`,
      url: ABSOLUTE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "pt-BR",
      about: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "AnunciaAI",
      alternateName: "Anuncia AI",
      url: SITE_URL,
      description:
        "Ferramenta brasileira para criação e organização de conteúdo de anúncios de produtos para marketplaces, lojas virtuais e redes sociais.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Sobre", item: ABSOLUTE_URL },
      ],
    },
  ],
};

export default function SobrePage() {
  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main id="ferramenta">
        <section aria-labelledby="sobre-titulo" className="relative overflow-hidden border-b border-line bg-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]"
          />
          <div className="container-page relative py-10 sm:py-16">
            <nav aria-label="Trilha de navegação">
              <ol className="flex items-center gap-2 text-xs text-muted">
                <li><Link href="/" className="transition-colors hover:text-ink">Início</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-ink-soft">Sobre</li>
              </ol>
            </nav>

            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">
                Feito no Brasil para quem vende online
              </p>
              <h1 id="sobre-titulo" className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">
                Sobre o AnunciaAI
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                O AnunciaAI foi criado para reduzir o trabalho repetitivo de transformar informações de um produto em
                títulos, descrições, benefícios e conteúdo pronto para revisar antes da publicação.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="missao-titulo" className="container-page py-14 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Nossa proposta</p>
              <h2 id="missao-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Menos tempo formatando. Mais tempo vendendo.
              </h2>
            </div>
            <div className="space-y-5 text-[15px] leading-7 text-muted">
              <p>
                Quem vende online normalmente precisa adaptar o mesmo produto para canais com estilos e exigências
                diferentes. O AnunciaAI organiza esse processo em ferramentas específicas para marketplaces, lojas
                virtuais e redes sociais.
              </p>
              <p>
                A plataforma não substitui a conferência do vendedor nem garante resultados de venda. Ela ajuda a
                estruturar uma primeira versão do conteúdo com base nas informações fornecidas, que deve ser revisada
                antes de ir ao ar.
              </p>
              <p>
                Além dos geradores, mantemos uma biblioteca de guias gratuitos com modelos, exemplos e checklists para
                quem quer entender o processo e não apenas copiar um texto pronto.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="principios-titulo" className="border-y border-line bg-white">
          <div className="container-page py-14 sm:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Como trabalhamos</p>
              <h2 id="principios-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Princípios usados no produto e no conteúdo
              </h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
              {principles.map((item) => (
                <article key={item.title} className="rounded-2xl border border-line bg-canvas p-6 shadow-card sm:p-7">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="transparencia-titulo" className="container-page py-14 sm:py-20">
          <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-white p-7 shadow-card sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Transparência</p>
            <h2 id="transparencia-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Plano Grátis disponível
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              Os geradores atuais fazem parte do plano Grátis e são liberados após um login simples com Google, sem cartão de crédito. O site pode exibir publicidade para ajudar a financiar a operação. O Pro está sendo preparado com preço planejado de {PRO_PLANNED_PRICE_LABEL} por mês, mas nenhuma assinatura paga, checkout ou cobrança está ativa hoje. O valor e as condições ainda podem ser ajustados antes da abertura.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">
                Usar o AnunciaAI grátis
              </Link>
              <Link href="/entrar" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">
                Entrar na conta
              </Link>
              <Link href="/guias" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">
                Explorar os guias
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="politicas-titulo" className="border-t border-line bg-white">
          <div className="container-page py-12">
            <div className="mx-auto flex max-w-4xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 id="politicas-titulo" className="text-lg font-semibold">Políticas e informações legais</h2>
                <p className="mt-1 text-sm text-muted">Veja como os dados são tratados e quais são as condições de uso da plataforma.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/privacidade" className="text-sm font-semibold text-brand-600 hover:text-brand-700">Política de Privacidade</Link>
                <Link href="/termos" className="text-sm font-semibold text-brand-600 hover:text-brand-700">Termos de Uso</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
