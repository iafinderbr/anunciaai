import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { tools } from "@/components/sections/tools";
import { SiteHeader } from "@/components/site-header";
import { ToolsQuickActions } from "@/components/tools/tools-quick-actions";
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
          <div className="container-page py-7 sm:py-9 lg:py-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <nav aria-label="Trilha de navegação" className="text-xs text-muted">
                  <Link href="/" className="transition-colors hover:text-ink">
                    Início
                  </Link>
                  <span className="mx-2" aria-hidden="true">/</span>
                  <span aria-current="page" className="font-medium text-ink-soft">Ferramentas</span>
                </nav>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Central do AnunciaAI</p>
                <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                  Ferramentas, histórico e conta em um só lugar
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-[15px]">
                  Acesse o gerador principal, seus resultados salvos e todos os geradores sem precisar procurar pela página inicial.
                </p>
              </div>

              <a
                href="#geradores"
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-line-strong bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                Ver todos os geradores
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <ToolsQuickActions />
          </div>
        </section>

        <section id="geradores" aria-labelledby="geradores-titulo" className="scroll-mt-20 bg-white">
          <div className="container-page py-10 sm:py-14 lg:py-16">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Todos os geradores</p>
                <h2 id="geradores-titulo" className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Escolha a ferramenta certa para cada tarefa
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted sm:text-[15px]">
                  As ferramentas continuam gratuitas e podem ser usadas sem cadastro. A conta é necessária apenas para recursos pessoais, como o histórico.
                </p>
              </div>
              <Link
                href="/#ferramenta"
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Gerador completo
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="group flex h-full min-h-48 flex-col rounded-2xl border border-line bg-canvas p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lift"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        aria-hidden="true"
                        className="grid h-9 min-w-9 place-items-center rounded-xl border border-line-strong bg-white px-2 text-[11px] font-bold text-ink-soft"
                      >
                        {tool.short}
                      </span>
                      <span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-muted">
                        {tool.eyebrow}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold leading-snug text-ink transition-colors group-hover:text-brand-700 sm:text-lg">
                      {tool.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted">{tool.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                      Abrir ferramenta
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
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
