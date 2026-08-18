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
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Ferramentas", item: ABSOLUTE_URL },
  ],
};

const workspaceInfo = [
  ["10", "geradores disponíveis"],
  ["R$ 0", "plano Grátis"],
  ["Google", "acesso à conta"],
] as const;

export default function FerramentasPage() {
  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="bg-canvas">
        <section className="border-b border-line bg-white">
          <div className="container-page py-8 sm:py-10 lg:py-12">
            <nav aria-label="Trilha de navegação" className="text-xs text-muted">
              <Link href="/" className="transition-colors hover:text-ink">Início</Link>
              <span className="mx-2 text-line-strong" aria-hidden="true">/</span>
              <span aria-current="page" className="font-medium text-ink-soft">Ferramentas</span>
            </nav>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Central de ferramentas</p>
                <h1 className="mt-4 max-w-3xl text-[2.6rem] font-semibold leading-[1] tracking-[-0.055em] text-ink sm:text-5xl lg:text-[3.7rem]">
                  Escolha a tarefa. O resto fica organizado.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-[17px] sm:leading-8">
                  Um único lugar para criar, retomar e consultar conteúdo de produto sem procurar recursos espalhados pelo site.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href="#geradores" className="interactive-lift inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-5 text-sm font-semibold text-white hover:bg-brand-600">
                    Ver geradores
                  </a>
                  <Link href="/#ferramenta" className="inline-flex min-h-11 items-center justify-center rounded-md border border-line-strong bg-white px-5 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700">
                    Criar anúncio completo
                  </Link>
                </div>
              </div>

              <aside className="border-l border-line pl-6" aria-label="Resumo do plano Grátis">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">Disponível agora</p>
                <div className="mt-4 grid gap-4">
                  {workspaceInfo.map(([value, label]) => (
                    <div key={label} className="flex items-baseline justify-between gap-5 border-b border-line pb-3 last:border-b-0 last:pb-0">
                      <p className="text-lg font-semibold tracking-tight text-ink">{value}</p>
                      <p className="text-right text-xs leading-5 text-muted">{label}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">Acesso rápido</p>
                  <p className="mt-1 text-sm font-semibold text-ink">Continue de onde faz sentido para você.</p>
                </div>
              </div>
              <ToolsQuickActions />
            </div>
          </div>
        </section>

        <section id="geradores" aria-labelledby="geradores-titulo" className="scroll-mt-20">
          <div className="container-page py-14 sm:py-18 lg:py-22">
            <div className="grid gap-8 border-b border-line pb-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-14">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Biblioteca</p>
                <h2 id="geradores-titulo" className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2.25rem]">
                  Dez ferramentas, cada uma com uma função clara.
                </h2>
              </div>
              <div>
                <p className="text-sm leading-6 text-muted">
                  Escolha pelo canal de venda ou pelo tipo de conteúdo. Todas as ferramentas atuais fazem parte do modo Grátis.
                </p>
                <Link href="/guias" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
                  Ver guias relacionados <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <ul className="mt-8 grid gap-3 lg:grid-cols-2">
              {tools.map((tool, index) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="group grid h-full min-h-[158px] grid-cols-[44px_minmax(0,1fr)_24px] gap-4 rounded-lg border border-line bg-white p-5 transition-colors hover:border-line-strong hover:bg-[#fcfcfb] sm:p-6"
                  >
                    <span
                      aria-hidden="true"
                      className={`grid size-10 place-items-center rounded-lg text-[10px] font-bold ${index < 2 ? "bg-ink text-white" : "border border-line-strong bg-canvas text-ink-soft"}`}
                    >
                      {tool.short}
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.11em] text-muted">{tool.eyebrow}</span>
                      <span className="mt-2 block text-[17px] font-semibold leading-snug tracking-[-0.02em] text-ink transition-colors group-hover:text-brand-700">
                        {tool.title}
                      </span>
                      <span className="mt-2 block max-w-xl text-sm leading-6 text-muted">{tool.description}</span>
                    </span>

                    <span aria-hidden="true" className="mt-1 text-lg text-line-strong transition-all group-hover:translate-x-0.5 group-hover:text-brand-700">→</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 rounded-lg border border-line bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">Não sabe qual usar primeiro? Comece pelo gerador completo e depois refine o conteúdo específico.</p>
              <Link href="/#ferramenta" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-ink hover:text-brand-700">
                Abrir gerador completo <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
