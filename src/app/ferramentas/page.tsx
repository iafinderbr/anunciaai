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

const workspaceInfo = [
  ["10", "geradores atuais"],
  ["Google", "login simples"],
  ["R$ 0", "plano Grátis"],
] as const;

export default function FerramentasPage() {
  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main>
        <section className="relative overflow-hidden border-b border-line bg-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(55%_80%_at_72%_0%,rgba(255,92,26,0.09),transparent_74%)]" />
          <div className="container-page relative py-9 sm:py-12 lg:py-15">
            <nav aria-label="Trilha de navegação" className="text-xs text-muted">
              <Link href="/" className="transition-colors hover:text-ink">Início</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page" className="font-medium text-ink-soft">Ferramentas</span>
            </nav>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Central do AnunciaAI</p>
                <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-[3rem] lg:leading-[1.07]">
                  Um workspace claro para cada etapa do seu anúncio.
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                  Escolha a ferramenta certa para o canal, salve o que quiser reutilizar e mantenha guias, histórico e conta no mesmo fluxo.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href="#geradores" className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white shadow-card hover:bg-brand-600">
                    Ver todos os geradores
                  </a>
                  <Link href="/#ferramenta" className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl border border-line-strong bg-white px-5 py-3 text-sm font-semibold text-ink hover:border-brand-300 hover:text-brand-700">
                    Abrir gerador completo
                  </Link>
                </div>
              </div>

              <aside className="overflow-hidden rounded-[1.35rem] border border-ink bg-[#111318] text-white shadow-lift" aria-label="Resumo do workspace">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-200">Workspace</p>
                    <p className="mt-1 text-sm font-semibold text-white">Modo Grátis</p>
                  </div>
                  <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
                </div>
                <div className="grid grid-cols-3 divide-x divide-white/10">
                  {workspaceInfo.map(([value, label]) => (
                    <div key={label} className="px-3 py-4 text-center">
                      <p className="text-sm font-semibold text-white">{value}</p>
                      <p className="mt-1 text-[10px] leading-4 text-white/42">{label}</p>
                    </div>
                  ))}
                </div>
                <p className="border-t border-white/10 px-5 py-4 text-[11px] leading-5 text-white/45">
                  O login libera o modo gratuito. Histórico e produtos só são salvos quando você escolher.
                </p>
              </aside>
            </div>

            <div className="mt-8">
              <ToolsQuickActions />
            </div>
          </div>
        </section>

        <section id="geradores" aria-labelledby="geradores-titulo" className="scroll-mt-20 bg-canvas">
          <div className="container-page py-12 sm:py-16 lg:py-20">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Todos os geradores</p>
                <h2 id="geradores-titulo" className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Escolha a ferramenta certa para cada tarefa.
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted sm:text-[15px]">
                  Mercado Livre, Shopee, OLX, Instagram, loja virtual e ferramentas de conteúdo fazem parte do plano Grátis atual.
                </p>
              </div>
              <Link href="/guias" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
                Precisa de ajuda? Ver guias <span aria-hidden="true">→</span>
              </Link>
            </div>

            <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool, index) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className={`interactive-lift group flex h-full min-h-52 flex-col overflow-hidden rounded-[1.3rem] border p-5 shadow-card transition-all ${
                      index < 2 ? "border-brand-200 bg-white" : "border-line bg-white"
                    } hover:border-brand-300`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        aria-hidden="true"
                        className={`grid h-9 min-w-9 place-items-center rounded-lg px-2 text-[10px] font-bold ${
                          index < 2 ? "bg-ink text-white" : "bg-canvas text-ink-soft ring-1 ring-inset ring-line-strong"
                        }`}
                      >
                        {tool.short}
                      </span>
                      <span className="rounded-full border border-line bg-canvas/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.09em] text-muted">
                        {tool.eyebrow}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[17px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand-700">
                      {tool.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted">{tool.description}</p>

                    <span className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm font-semibold text-ink-soft transition-colors group-hover:text-brand-700">
                      Abrir ferramenta
                      <span aria-hidden="true" className="grid size-7 place-items-center rounded-full border border-line bg-white text-xs transition-all group-hover:translate-x-0.5 group-hover:border-brand-200">→</span>
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
