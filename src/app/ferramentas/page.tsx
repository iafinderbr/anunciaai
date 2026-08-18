import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { tools } from "@/components/sections/tools";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/ferramentas";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const TITLE = "Ferramentas gratuitas para criar anúncios de produtos";
const DESCRIPTION =
  "Acesse os geradores do AnunciaAI, seu histórico salvo, sua conta e guias para criar títulos, descrições e anúncios de produtos.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: ABSOLUTE_URL,
    siteName: "AnunciaAI",
    title: `${TITLE} | AnunciaAI`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: `${TITLE} | AnunciaAI`,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const quickActions = [
  {
    href: "/#ferramenta",
    eyebrow: "Gerador principal",
    title: "Criar anúncio completo",
    description: "Monte título, descrição, benefícios, características e sugestões de SEO em um só fluxo.",
    action: "Começar agora",
    short: "AI",
    featured: true,
  },
  {
    href: "/conta/historico",
    eyebrow: "Sua área",
    title: "Histórico salvo",
    description: "Reabra os resultados que você escolheu guardar. Nada é salvo automaticamente.",
    action: "Abrir histórico",
    short: "HI",
    featured: true,
  },
  {
    href: "/conta",
    eyebrow: "Conta",
    title: "Minha conta",
    description: "Veja seu perfil, plano atual e os recursos pessoais ligados à sua conta.",
    action: "Acessar conta",
    short: "EU",
    featured: false,
  },
  {
    href: "/guias",
    eyebrow: "Aprender",
    title: "Guias práticos",
    description: "Consulte conteúdos sobre Mercado Livre, Shopee, OLX, SEO, Instagram e loja virtual.",
    action: "Ver guias",
    short: "GUI",
    featured: false,
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ferramentas",
      item: ABSOLUTE_URL,
    },
  ],
};

export default function FerramentasPage() {
  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main>
        <section className="border-b border-line bg-canvas">
          <div className="container-page py-12 sm:py-16 lg:py-20">
            <nav aria-label="Trilha de navegação" className="text-xs text-muted">
              <Link href="/" className="transition-colors hover:text-ink">
                Início
              </Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page" className="font-medium text-ink-soft">Ferramentas</span>
            </nav>

            <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Central do AnunciaAI</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                  Tudo que você precisa, sem ficar procurando pela página
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
                  Gere anúncios, abra seu histórico, acesse sua conta ou escolha uma ferramenta específica para o canal em que você vende.
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Acesso rápido</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  O histórico é opcional e fica vinculado à conta somente quando você decide salvar um resultado.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickActions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex min-h-56 flex-col rounded-2xl border p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift ${
                    item.featured
                      ? "border-brand-200 bg-brand-50/55 hover:border-brand-400"
                      : "border-line bg-white hover:border-line-strong"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      aria-hidden="true"
                      className={`grid h-10 min-w-10 place-items-center rounded-xl px-2 text-[11px] font-bold ${
                        item.featured ? "bg-brand-500 text-white" : "border border-line-strong bg-canvas text-ink-soft"
                      }`}
                    >
                      {item.short}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">{item.eyebrow}</span>
                  </div>
                  <h2 className="mt-5 text-lg font-semibold text-ink transition-colors group-hover:text-brand-700">
                    {item.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted">{item.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                    {item.action}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="geradores" aria-labelledby="geradores-titulo" className="bg-white">
          <div className="container-page py-14 sm:py-20">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Todos os geradores</p>
                <h2 id="geradores-titulo" className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Escolha a ferramenta certa para cada tarefa
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-muted">
                  As ferramentas abaixo continuam gratuitas e podem ser usadas sem cadastro. Entrar na conta é necessário apenas para recursos pessoais, como salvar no histórico.
                </p>
              </div>
              <Link
                href="/#ferramenta"
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Gerador completo
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="group flex h-full min-h-52 flex-col rounded-2xl border border-line bg-canvas p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lift sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        aria-hidden="true"
                        className="grid h-10 min-w-10 place-items-center rounded-xl border border-line-strong bg-white px-2 text-xs font-bold text-ink-soft"
                      >
                        {tool.short}
                      </span>
                      <span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">
                        {tool.eyebrow}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-brand-700">
                      {tool.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted">{tool.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                      Abrir ferramenta
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-line bg-canvas">
          <div className="container-page py-12 sm:py-16">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
                <span className="text-xs font-bold text-brand-600">01</span>
                <h2 className="mt-3 text-base font-semibold text-ink">Escolha o caminho</h2>
                <p className="mt-2 text-sm leading-6 text-muted">Use o gerador completo ou abra uma ferramenta específica para o seu canal.</p>
              </div>
              <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
                <span className="text-xs font-bold text-brand-600">02</span>
                <h2 className="mt-3 text-base font-semibold text-ink">Gere e revise</h2>
                <p className="mt-2 text-sm leading-6 text-muted">Preencha os dados reais do produto, gere a primeira versão e revise antes de publicar.</p>
              </div>
              <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
                <span className="text-xs font-bold text-brand-600">03</span>
                <h2 className="mt-3 text-base font-semibold text-ink">Salve só se quiser</h2>
                <p className="mt-2 text-sm leading-6 text-muted">Conectado à conta, você pode guardar resultados importantes e reencontrá-los pelo histórico.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
