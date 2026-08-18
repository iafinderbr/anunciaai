import type { Metadata } from "next";
import Link from "next/link";
import { ChannelStrip } from "@/components/channel-showcase";
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

const channelToolHrefs = new Set([
  "/gerador-de-anuncios-mercado-livre",
  "/gerador-de-anuncios-shopee",
  "/gerador-de-anuncios-olx",
  "/gerador-de-anuncios-facebook-marketplace",
  "/gerador-de-anuncios-para-loja-virtual",
  "/gerador-de-legendas-para-instagram",
]);

const channelTools = tools.filter((tool) => channelToolHrefs.has(tool.href));
const contentTools = tools.filter((tool) => !channelToolHrefs.has(tool.href));

function ToolCard({ tool, index, compact = false }: { tool: (typeof tools)[number]; index: number; compact?: boolean }) {
  return (
    <Link
      href={tool.href}
      className={`group relative grid h-full overflow-hidden rounded-[10px] border border-line-strong bg-white transition-colors hover:border-brand-300 hover:bg-[#fcfcfa] ${
        compact ? "min-h-[190px] grid-cols-[52px_minmax(0,1fr)] gap-5 p-6" : "min-h-[240px] grid-cols-[60px_minmax(0,1fr)] gap-6 p-7 sm:p-8"
      }`}
    >
      <span
        aria-hidden="true"
        className={`grid place-items-center self-start rounded-[8px] text-[11px] font-bold ${compact ? "size-11" : "size-12"} ${
          index < 2 ? "bg-[#111216] text-white" : "border border-line-strong bg-[#f2f2ef] text-ink"
        }`}
      >
        {tool.short}
      </span>

      <span className="min-w-0 pr-9">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-700">{tool.eyebrow}</span>
        <span className={`${compact ? "mt-3 text-[19px]" : "mt-4 text-[1.45rem]"} block font-semibold leading-tight tracking-[-0.04em] text-ink transition-colors group-hover:text-brand-700`}>
          {tool.title}
        </span>
        <span className={`${compact ? "mt-3 text-sm leading-6" : "mt-4 text-[15px] leading-7"} block max-w-xl text-muted`}>{tool.description}</span>
      </span>

      <span aria-hidden="true" className="absolute right-6 top-6 text-lg text-line-strong transition-all group-hover:translate-x-1 group-hover:text-brand-700">→</span>
    </Link>
  );
}

export default function FerramentasPage() {
  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="bg-[#f1f1ee]">
        <section className="relative overflow-hidden border-b border-[#25262a] bg-[#0e0f12] text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-56 -top-72 size-[760px] rounded-full bg-brand-500/[0.07] blur-3xl" />
            <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:64px_64px]" />
          </div>

          <div className="container-page relative py-14 sm:py-16 lg:py-20 xl:py-24">
            <nav aria-label="Trilha de navegação" className="text-xs text-white/34">
              <Link href="/" className="transition-colors hover:text-white">Início</Link>
              <span className="mx-2 text-white/18" aria-hidden="true">/</span>
              <span aria-current="page" className="font-medium text-white/62">Ferramentas</span>
            </nav>

            <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end lg:gap-20">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/42">
                  <span className="h-5 w-[2px] bg-brand-500" />
                  Central de ferramentas
                </div>
                <h1 className="mt-7 max-w-4xl text-[3.6rem] font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-[4.8rem] lg:text-[5.3rem]">
                  Escolha o canal. Depois escolha o trabalho.
                </h1>
                <p className="mt-8 max-w-2xl text-[17px] leading-8 text-white/54 sm:text-[19px]">
                  Comece pelo lugar onde você vai publicar ou use uma ferramenta específica para título, descrição, nome e palavras-chave.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href="#geradores" className="interactive-lift inline-flex min-h-14 items-center justify-center rounded-[8px] bg-brand-500 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600">
                    Escolher ferramenta <span aria-hidden="true" className="ml-2.5">↓</span>
                  </a>
                  <Link href="/#ferramenta" className="inline-flex min-h-14 items-center justify-center rounded-[8px] border border-white/14 bg-white/[0.025] px-6 text-[15px] font-semibold text-white/82 transition-colors hover:bg-white/[0.06] hover:text-white">
                    Criar anúncio completo
                  </Link>
                </div>
              </div>

              <aside className="border-l border-white/[0.10] pl-7 sm:pl-8" aria-label="Resumo do plano Grátis">
                <div className="flex items-end justify-between gap-4 border-b border-white/[0.08] pb-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/28">Disponível agora</p>
                    <p className="mt-2 text-base font-semibold text-white">Workspace Grátis</p>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-300">Ativo</span>
                </div>
                <div className="divide-y divide-white/[0.07]">
                  {workspaceInfo.map(([value, label]) => (
                    <div key={label} className="flex items-center justify-between gap-6 py-5">
                      <p className="text-2xl font-semibold tracking-[-0.045em] text-white">{value}</p>
                      <p className="max-w-[150px] text-right text-xs leading-5 text-white/34">{label}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            <div className="mt-14 border-t border-white/[0.08] pt-8">
              <ChannelStrip dark />
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-7">
              <div className="mb-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/28">Workspace</p>
                <p className="mt-2 text-sm font-semibold text-white/76">Conta, histórico e guias sem misturar com os geradores.</p>
              </div>
              <ToolsQuickActions variant="dark" />
            </div>
          </div>
        </section>

        <section id="geradores" aria-labelledby="geradores-titulo" className="scroll-mt-24 bg-white">
          <div className="container-page py-20 sm:py-24 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end lg:gap-20">
              <div className="max-w-4xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">Biblioteca</p>
                <h2 id="geradores-titulo" className="mt-5 text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.055em] text-ink sm:text-[3.45rem]">
                  Canais primeiro. Ferramentas de apoio depois.
                </h2>
              </div>
              <div>
                <p className="text-[15px] leading-7 text-muted">
                  A biblioteca continua completa, mas a navegação prioriza as decisões que mais importam: onde publicar e o que criar.
                </p>
                <Link href="/guias" className="mt-4 inline-flex items-center gap-2 border-b border-brand-700 pb-1 text-sm font-semibold text-brand-700 hover:text-brand-800">
                  Ver guias relacionados <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="mt-16 flex items-end justify-between gap-6 border-b border-line pb-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-700">Por canal</p>
                <h3 className="mt-2 text-[1.45rem] font-semibold tracking-[-0.04em] text-ink">Onde você vai publicar?</h3>
              </div>
              <span className="text-xs text-muted">{channelTools.length} opções</span>
            </div>

            <ul className="mt-7 grid gap-5 lg:grid-cols-2">
              {channelTools.map((tool, index) => (
                <li key={tool.href}><ToolCard tool={tool} index={index} /></li>
              ))}
            </ul>

            <div className="mt-20 flex items-end justify-between gap-6 border-b border-line pb-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-700">Por objetivo</p>
                <h3 className="mt-2 text-[1.45rem] font-semibold tracking-[-0.04em] text-ink">Refine uma parte do conteúdo.</h3>
              </div>
              <span className="text-xs text-muted">{contentTools.length} ferramentas</span>
            </div>

            <ul className="mt-7 grid gap-5 md:grid-cols-2">
              {contentTools.map((tool, index) => (
                <li key={tool.href}><ToolCard tool={tool} index={index + 2} compact /></li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col gap-5 border-y border-line py-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-base font-semibold text-ink">Ainda não sabe qual usar?</p>
                <p className="mt-2 text-sm leading-6 text-muted">Comece pelo gerador completo e escolha um canal específico depois.</p>
              </div>
              <Link href="/#ferramenta" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-[8px] bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
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
