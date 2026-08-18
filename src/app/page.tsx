import Link from "next/link";
import { ChannelStrip } from "@/components/channel-showcase";
import { GeneratorTool } from "@/components/generator/generator-tool";
import { LiveStats } from "@/components/live-stats";
import { SiteHeader } from "@/components/site-header";
import { HowItWorksSection } from "@/components/sections/marketing";
import { FaqSection, PricingSection, SiteFooter } from "@/components/sections/pricing";
import { SITE_URL } from "@/lib/site";

const workspaceCards = [
  {
    href: "/ferramentas",
    number: "01",
    eyebrow: "Criar",
    title: "10 geradores especializados",
    text: "Escolha a ferramenta certa para título, descrição, anúncio completo ou um canal específico.",
    action: "Explorar ferramentas",
  },
  {
    href: "/entrar",
    number: "02",
    eyebrow: "Organizar",
    title: "Histórico e produtos salvos",
    text: "Guarde o que realmente importa e reutilize informações sem preencher tudo outra vez.",
    action: "Abrir minha conta",
  },
  {
    href: "/guias",
    number: "03",
    eyebrow: "Aprender",
    title: "Guias práticos por canal",
    text: "Consulte estruturas, exemplos e boas práticas antes de revisar e publicar seu conteúdo.",
    action: "Ver guias",
  },
] as const;

const modeHighlights = [
  { value: "10", label: "geradores disponíveis" },
  { value: "20", label: "produtos salvos no Grátis" },
  { value: "100", label: "itens no histórico" },
  { value: "R$ 0", label: "para começar" },
] as const;

const previewBlocks = [
  {
    label: "Título otimizado",
    value: "Fone Bluetooth JBL Tune 510BT Preto",
    meta: "Mercado Livre",
  },
  {
    label: "Benefícios",
    value: "Bateria prolongada · Design dobrável · Microfone integrado",
    meta: "3 itens",
  },
  {
    label: "Ficha técnica",
    value: "Bluetooth 5.0 · USB-C · informações organizadas para revisão",
    meta: "Estruturada",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
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
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "AnunciaAI",
      alternateName: "Anuncia AI",
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "AnunciaAI",
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "pt-BR",
      provider: { "@id": `${SITE_URL}/#organization` },
      description:
        "Ferramenta web que organiza as informações do produto em primeiras versões de títulos, descrições, benefícios e anúncios para diferentes canais de venda.",
      offers: {
        "@type": "Offer",
        name: "Grátis",
        price: "0",
        priceCurrency: "BRL",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="topo">
        <section aria-labelledby="hero-titulo" className="relative overflow-hidden border-b border-[#26272b] bg-[#0e0f12] text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-48 -top-64 size-[720px] rounded-full bg-brand-500/[0.075] blur-3xl" />
            <div className="absolute left-1/2 top-0 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/14 to-transparent" />
            <div className="absolute inset-0 opacity-[0.022] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:64px_64px]" />
          </div>

          <div className="container-page relative py-16 sm:py-20 lg:py-24 xl:py-28">
            <div className="grid gap-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(540px,1.22fr)] lg:items-center lg:gap-16 xl:gap-20">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/46">
                  <span className="h-5 w-[2px] bg-brand-500" />
                  Conteúdo de produto organizado por canal
                </div>

                <h1 id="hero-titulo" className="mt-7 max-w-4xl text-[3.45rem] font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-[4.65rem] lg:text-[5rem] xl:text-[5.75rem]">
                  Do produto bruto a um anúncio pronto para revisar.
                </h1>

                <p className="mt-8 max-w-2xl text-[17px] leading-8 text-white/58 sm:text-[19px] sm:leading-8">
                  Organize título, descrição, benefícios, ficha técnica e conteúdo por canal em um fluxo único, com espaço para revisar antes de publicar.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href="#ferramenta" className="interactive-lift inline-flex min-h-14 items-center justify-center rounded-[8px] bg-brand-500 px-6 text-[15px] font-semibold text-white shadow-[0_18px_42px_-24px_rgba(241,102,42,.82)] transition-colors hover:bg-brand-600">
                    Criar anúncio grátis
                    <span aria-hidden="true" className="ml-2.5">→</span>
                  </a>
                  <Link href="/ferramentas" className="inline-flex min-h-14 items-center justify-center rounded-[8px] border border-white/14 bg-white/[0.025] px-6 text-[15px] font-semibold text-white/84 transition-colors hover:bg-white/[0.06] hover:text-white">
                    Escolher um canal
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/42 sm:text-sm">
                  <span className="font-medium text-white/68">Plano Grátis disponível</span>
                  <span aria-hidden="true">·</span>
                  <span>Sem cartão</span>
                  <span aria-hidden="true">·</span>
                  <span>Login Google</span>
                  <span aria-hidden="true">·</span>
                  <span>Salvamento opcional</span>
                </div>
              </div>

              <aside className="relative w-full" aria-label="Prévia do workspace AnunciaAI">
                <div aria-hidden="true" className="absolute -inset-8 bg-brand-500/[0.035] blur-3xl" />
                <div className="relative overflow-hidden rounded-[12px] border border-white/[0.11] bg-[#17181c] shadow-[0_38px_110px_-48px_rgba(0,0,0,.95)]">
                  <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#1a1b1f] px-6 py-5">
                    <div className="flex items-center gap-3.5">
                      <span className="relative grid size-10 place-items-center overflow-hidden rounded-[7px] bg-white text-[15px] font-extrabold text-[#151619]">
                        A
                        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] bg-brand-500" />
                      </span>
                      <div>
                        <p className="text-[13px] font-semibold tracking-[-0.02em] text-white">Workspace AnunciaAI</p>
                        <p className="mt-1 text-[11px] text-white/36">Gerador de anúncio completo</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hidden border-l border-white/10 pl-3 text-[11px] font-medium text-white/42 sm:inline-flex">Mercado Livre</span>
                      <span className="size-2 rounded-full bg-emerald-400" aria-label="Prévia pronta" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-[164px_minmax(0,1fr)]">
                    <div className="hidden border-r border-white/[0.07] bg-[#131418] px-4 py-5 sm:block">
                      <p className="px-1 pb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/26">Fluxo</p>
                      {[
                        ["01", "Produto"],
                        ["02", "Conteúdo"],
                        ["03", "Revisão"],
                      ].map(([number, label], index) => (
                        <div key={label} className={`mt-1 flex items-center gap-3 border-l-2 px-3 py-3 text-xs ${index === 1 ? "border-brand-500 bg-white/[0.045] font-semibold text-white" : "border-transparent text-white/36"}`}>
                          <span className="text-[10px] tabular-nums text-white/28">{number}</span>
                          {label}
                        </div>
                      ))}
                      <div className="mt-7 border-t border-white/[0.07] pt-5">
                        <p className="px-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/22">Workspace</p>
                        <p className="mt-3 px-1 py-2 text-[11px] text-white/32">Histórico salvo</p>
                        <p className="px-1 py-2 text-[11px] text-white/32">Produtos</p>
                      </div>
                    </div>

                    <div className="min-w-0 bg-[#1a1b1f] p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-5 border-b border-white/[0.08] pb-5">
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/28">Produto atual</p>
                          <p className="mt-2.5 truncate text-[15px] font-semibold tracking-[-0.02em] text-white">JBL Tune 510BT</p>
                          <p className="mt-1.5 text-[11px] text-white/36">Fone Bluetooth · Preto</p>
                        </div>
                        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-300">Gerado</span>
                      </div>

                      <div className="mt-5 space-y-3">
                        {previewBlocks.map((block, index) => (
                          <div key={block.label} className={`border p-5 ${index === 0 ? "border-brand-500/28 bg-brand-500/[0.045]" : "border-white/[0.07] bg-white/[0.015]"}`}>
                            <div className="flex items-center justify-between gap-4">
                              <span className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${index === 0 ? "text-brand-300" : "text-white/28"}`}>{block.label}</span>
                              <span className="text-[10px] text-white/22">{block.meta}</span>
                            </div>
                            <p className="mt-3 text-[13px] leading-6 text-white/72">{block.value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between gap-5 border-t border-white/[0.07] pt-5">
                        <p className="text-[10px] text-white/28">Revise antes de publicar</p>
                        <span className="rounded-[7px] bg-white px-4 py-2.5 text-[11px] font-bold text-[#16171a]">Copiar resultado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <div className="mt-14 border-t border-white/[0.08] pt-8 lg:mt-16">
              <ChannelStrip dark />
            </div>
          </div>
        </section>

        <section aria-label="Resumo do produto" className="border-b border-line bg-white">
          <div className="container-page grid gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
            <div className="max-w-xl">
              <LiveStats />
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4 lg:min-w-[620px]">
              {modeHighlights.map((item) => (
                <div key={item.label} className="border-l border-line pl-5">
                  <p className="text-2xl font-semibold tracking-[-0.045em] text-ink">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ferramenta" aria-labelledby="ferramenta-principal-titulo" className="scroll-mt-24 border-b border-line bg-[#f1f1ee]">
          <div className="container-page py-20 sm:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-20">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">Produto em ação</p>
                <h2 id="ferramenta-principal-titulo" className="mt-5 text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.055em] text-ink sm:text-[3.2rem]">
                  Um fluxo completo, sem painel desnecessário.
                </h2>
                <p className="mt-6 text-[15px] leading-7 text-muted">
                  Informe apenas o que você sabe sobre o produto. O AnunciaAI organiza uma primeira versão para você conferir e editar.
                </p>
                <div className="mt-8 border-t border-line pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Saída organizada</p>
                  <ul className="mt-5 divide-y divide-line text-sm text-ink-soft">
                    {["Título", "Descrição", "Benefícios", "Ficha técnica", "SEO e CTA"].map((item) => (
                      <li key={item} className="flex items-center justify-between py-3.5">
                        <span>{item}</span>
                        <span aria-hidden="true" className="text-brand-600">→</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="min-w-0 overflow-hidden rounded-[12px] border border-line-strong bg-white shadow-[0_28px_80px_-52px_rgba(23,23,20,.34)]">
                <div className="flex items-center justify-between gap-5 border-b border-line px-6 py-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">Workspace</p>
                    <p className="mt-1.5 text-sm font-semibold text-ink">Gerador de anúncio completo</p>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-700">Grátis</span>
                </div>
                <div className="p-2 sm:p-3">
                  <GeneratorTool />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ferramentas" aria-labelledby="workspace-titulo" className="scroll-mt-24 bg-white">
          <div className="container-page py-20 sm:py-24 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end lg:gap-20">
              <div className="max-w-4xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">Workspace</p>
                <h2 id="workspace-titulo" className="mt-5 text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.055em] text-ink sm:text-[3.4rem]">
                  Criação, organização e aprendizado no mesmo produto.
                </h2>
              </div>
              <p className="text-[15px] leading-7 text-muted">
                Cada área tem uma função clara. O objetivo é reduzir retrabalho e facilitar a revisão, sem transformar o AnunciaAI em um painel carregado.
              </p>
            </div>

            <div className="mt-14 grid border-y border-line lg:grid-cols-3">
              {workspaceCards.map((card, index) => (
                <Link key={card.href} href={card.href} className={`group relative flex min-h-[360px] flex-col bg-white px-7 py-8 transition-colors hover:bg-[#fafaf8] sm:px-8 ${index < workspaceCards.length - 1 ? "border-b border-line lg:border-b-0 lg:border-r" : ""}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-700">{card.eyebrow}</span>
                    <span className="text-sm font-semibold tabular-nums text-line-strong">{card.number}</span>
                  </div>
                  <h3 className="mt-16 max-w-[17rem] text-[1.55rem] font-semibold leading-tight tracking-[-0.04em] text-ink transition-colors group-hover:text-brand-700">{card.title}</h3>
                  <p className="mt-5 max-w-sm text-[15px] leading-7 text-muted">{card.text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-semibold text-ink transition-colors group-hover:text-brand-700">
                    {card.action} <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <HowItWorksSection />
        <PricingSection />
        <FaqSection />
      </main>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
