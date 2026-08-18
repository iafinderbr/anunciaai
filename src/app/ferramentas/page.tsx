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
  ["R$ 0", "para começar"],
  ["Google", "acesso à conta"],
] as const;

export default function FerramentasPage() {
  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="bg-[#f4f4f1]">
        <section className="relative overflow-hidden border-b border-[#26272c] bg-[#111216] text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-44 -top-56 size-[560px] rounded-full bg-brand-500/[0.09] blur-3xl" />
            <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:52px_52px]" />
          </div>

          <div className="container-page relative py-10 sm:py-12 lg:py-16">
            <nav aria-label="Trilha de navegação" className="text-xs text-white/36">
              <Link href="/" className="transition-colors hover:text-white">Início</Link>
              <span className="mx-2 text-white/18" aria-hidden="true">/</span>
              <span aria-current="page" className="font-medium text-white/66">Ferramentas</span>
            </nav>

            <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-20">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50">
                  <span className="size-1.5 rounded-full bg-brand-500" /> Central de ferramentas
                </div>
                <h1 className="mt-5 max-w-3xl text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-[3.8rem] lg:text-[4.5rem]">
                  Escolha o que precisa criar. O fluxo já vem organizado.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/52 sm:text-[17px] sm:leading-8">
                  Título, descrição, anúncio completo e ferramentas específicas por canal em uma biblioteca feita para ir direto ao ponto.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#geradores" className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                    Explorar geradores <span aria-hidden="true" className="ml-2">↓</span>
                  </a>
                  <Link href="/#ferramenta" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/12 bg-white/[0.035] px-5 text-sm font-semibold text-white/82 transition-colors hover:bg-white/[0.07] hover:text-white">
                    Criar anúncio completo
                  </Link>
                </div>
              </div>

              <aside className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-sm" aria-label="Resumo do plano Grátis">
                <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-white/28">Disponível agora</p>
                    <p className="mt-1.5 text-sm font-semibold text-white">Workspace Grátis</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-300"><span className="size-1.5 rounded-full bg-emerald-400" />Ativo</span>
                </div>
                <div className="mt-4 grid gap-1">
                  {workspaceInfo.map(([value, label]) => (
                    <div key={label} className="flex items-center justify-between gap-5 rounded-lg px-1 py-3">
                      <p className="text-lg font-semibold tracking-[-0.03em] text-white">{value}</p>
                      <p className="text-right text-xs leading-5 text-white/36">{label}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            <div className="mt-12 border-t border-white/[0.08] pt-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/28">Acesso rápido</p>
                  <p className="mt-1 text-sm font-semibold text-white/78">Continue do ponto certo.</p>
                </div>
              </div>
              <ToolsQuickActions variant="dark" />
            </div>
          </div>
        </section>

        <section id="geradores" aria-labelledby="geradores-titulo" className="scroll-mt-20">
          <div className="container-page py-16 sm:py-20 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-16">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Biblioteca</p>
                <h2 id="geradores-titulo" className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-[2.55rem]">
                  Dez ferramentas. Uma função clara para cada uma.
                </h2>
              </div>
              <div>
                <p className="text-sm leading-7 text-muted">
                  Escolha pelo canal de venda ou pelo tipo de conteúdo. Todas as ferramentas atuais fazem parte do modo Grátis.
                </p>
                <Link href="/guias" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
                  Ver guias relacionados <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <ul className="mt-10 grid gap-4 lg:grid-cols-2">
              {tools.map((tool, index) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="group relative grid h-full min-h-[190px] grid-cols-[52px_minmax(0,1fr)] gap-5 overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_22px_60px_-42px_rgba(23,23,20,.34)] sm:p-7"
                  >
                    <span
                      aria-hidden="true"
                      className={`grid size-11 place-items-center rounded-xl text-[10px] font-bold ${index < 2 ? "bg-[#111216] text-white" : "border border-line-strong bg-[#f7f7f4] text-ink-soft"}`}
                    >
                      {tool.short}
                    </span>

                    <span className="min-w-0 pr-7">
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-700">{tool.eyebrow}</span>
                      <span className="mt-3 block text-xl font-semibold leading-snug tracking-[-0.035em] text-ink transition-colors group-hover:text-brand-700">
                        {tool.title}
                      </span>
                      <span className="mt-3 block max-w-xl text-sm leading-6 text-muted">{tool.description}</span>
                    </span>

                    <span aria-hidden="true" className="absolute right-6 top-6 grid size-8 place-items-center rounded-full border border-line text-sm text-muted transition-all group-hover:border-brand-200 group-hover:bg-brand-50 group-hover:text-brand-700">→</span>
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand-500 transition-transform duration-200 group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-line bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <p className="text-sm font-semibold text-ink">Não sabe qual usar primeiro?</p>
                <p className="mt-1 text-xs leading-5 text-muted">Comece pelo gerador completo e refine depois com uma ferramenta específica.</p>
              </div>
              <Link href="/#ferramenta" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
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
