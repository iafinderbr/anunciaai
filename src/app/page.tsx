import Link from "next/link";
import { ChannelRail, ChannelStrip } from "@/components/channel-showcase";
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
        <section aria-labelledby="hero-titulo" className="relative overflow-hidden border-b border-[#292a2f] bg-[#101114] text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-36 -top-52 size-[580px] rounded-full bg-brand-500/10 blur-3xl" />
            <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:48px_48px]" />
          </div>

          <div className="container-page relative grid gap-12 pb-16 pt-14 lg:grid-cols-[minmax(0,0.86fr)_minmax(430px,1.04fr)] lg:items-center lg:gap-12 lg:pb-24 lg:pt-24 xl:grid-cols-[minmax(0,0.82fr)_minmax(400px,0.98fr)_220px] xl:gap-7">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-white/72 backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-brand-500 shadow-[0_0_0_4px_rgba(241,102,42,.12)]" />
                Conteúdo de produto organizado por canal
              </div>

              <h1 id="hero-titulo" className="mt-6 max-w-3xl text-[3rem] font-semibold leading-[0.94] tracking-[-0.065em] text-white sm:text-[4rem] xl:text-[4.65rem]">
                Do produto bruto a um anúncio pronto para revisar.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-[18px] sm:leading-8">
                Transforme informações simples em título, descrição, benefícios, ficha técnica e conteúdo adaptado para diferentes canais de venda — em um único fluxo.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#ferramenta" className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-500 px-5 text-sm font-semibold text-white shadow-[0_12px_34px_-16px_rgba(241,102,42,.9)] transition-colors hover:bg-brand-600">
                  Criar anúncio grátis
                  <span aria-hidden="true" className="ml-2">→</span>
                </a>
                <Link href="/ferramentas" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/14 bg-white/[0.04] px-5 text-sm font-semibold text-white/88 transition-colors hover:bg-white/[0.08] hover:text-white">
                  Escolher um canal
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/48 sm:text-sm">
                <span className="inline-flex items-center gap-2 text-white/68"><span className="size-1.5 rounded-full bg-emerald-400" />Plano Grátis disponível</span>
                <span>Sem cartão</span>
                <span>Login Google</span>
                <span>Salvamento opcional</span>
              </div>
            </div>

            <aside className="relative w-full" aria-label="Prévia do workspace AnunciaAI">
              <div aria-hidden="true" className="absolute -inset-5 rounded-[28px] bg-brand-500/[0.05] blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#17181c] shadow-[0_32px_100px_-40px_rgba(0,0,0,.9)]">
                <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#1b1c20] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-[10px] bg-white text-sm font-extrabold text-[#151619]">A</span>
                    <div>
                      <p className="text-xs font-semibold text-white">Workspace AnunciaAI</p>
                      <p className="mt-0.5 text-[10px] text-white/40">Gerador de anúncio completo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[10px] font-semibold text-white/50 sm:inline-flex">Mercado Livre</span>
                    <span className="size-2 rounded-full bg-emerald-400" aria-label="Prévia pronta" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-[138px_minmax(0,1fr)]">
                  <div className="hidden border-r border-white/[0.07] bg-[#141519] p-3 sm:block">
                    <p className="px-2 pb-2 pt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/30">Seu fluxo</p>
                    {[
                      ["01", "Produto"],
                      ["02", "Conteúdo"],
                      ["03", "Revisão"],
                    ].map(([number, label], index) => (
                      <div key={label} className={`mt-1 flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-[11px] ${index === 1 ? "bg-white/[0.06] font-semibold text-white" : "text-white/40"}`}>
                        <span className={`grid size-5 place-items-center rounded-md text-[9px] ${index === 1 ? "bg-brand-500 text-white" : "border border-white/10"}`}>{number}</span>
                        {label}
                      </div>
                    ))}
                    <div className="mt-5 border-t border-white/[0.07] pt-4">
                      <p className="px-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/25">Conta</p>
                      <p className="mt-2 rounded-lg px-2 py-2 text-[10px] text-white/35">Histórico salvo</p>
                      <p className="rounded-lg px-2 py-2 text-[10px] text-white/35">Produtos</p>
                    </div>
                  </div>

                  <div className="min-w-0 bg-[#1a1b1f] p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/32">Produto atual</p>
                        <p className="mt-2 truncate text-sm font-semibold text-white">JBL Tune 510BT</p>
                        <p className="mt-1 text-[10px] text-white/38">Fone Bluetooth · Preto</p>
                      </div>
                      <span className="shrink-0 rounded-md bg-emerald-400/10 px-2 py-1 text-[9px] font-semibold text-emerald-300">Gerado</span>
                    </div>

                    <div className="mt-3 space-y-2.5">
                      {previewBlocks.map((block, index) => (
                        <div key={block.label} className={`rounded-xl border p-4 ${index === 0 ? "border-brand-500/30 bg-brand-500/[0.055]" : "border-white/[0.07] bg-white/[0.02]"}`}>
                          <div className="flex items-center justify-between gap-3">
                            <span className={`text-[9px] font-semibold uppercase tracking-[0.13em] ${index === 0 ? "text-brand-300" : "text-white/32"}`}>{block.label}</span>
                            <span className="text-[9px] text-white/25">{block.meta}</span>
                          </div>
                          <p className="mt-2 text-[11px] leading-5 text-white/72 sm:text-xs">{block.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/[0.07] pt-4">
                      <p className="text-[9px] text-white/28">Revise antes de publicar</p>
                      <span className="rounded-md bg-white px-3 py-2 text-[10px] font-bold text-[#16171a]">Copiar resultado</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <ChannelRail className="hidden xl:block" />

            <div className="lg:col-span-2 xl:hidden">
              <ChannelStrip dark />
            </div>
          </div>
        </section>

        <section aria-label="Resumo do produto" className="border-b border-line bg-white">
          <div className="container-page grid gap-5 py-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
            <div className="max-w-xl">
              <LiveStats />
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 lg:min-w-[560px]">
              {modeHighlights.map((item) => (
                <div key={item.label}>
                  <p className="text-lg font-semibold tracking-[-0.03em] text-ink">{item.value}</p>
                  <p className="mt-0.5 text-[11px] leading-4 text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ferramenta" aria-labelledby="ferramenta-principal-titulo" className="scroll-mt-20 border-b border-line bg-[#f4f4f1]">
          <div className="container-page py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Experimente agora</p>
                <h2 id="ferramenta-principal-titulo" className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-[2.45rem]">
                  Seu primeiro anúncio começa aqui.
                </h2>
                <p className="mt-5 text-sm leading-7 text-muted">
                  Informe apenas o que você sabe sobre o produto. O AnunciaAI organiza uma primeira versão para você revisar.
                </p>
                <div className="mt-7 border-t border-line pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">O que você recebe</p>
                  <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                    {["Título", "Descrição", "Benefícios", "Ficha técnica", "SEO e CTA"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="size-1.5 rounded-full bg-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="min-w-0 rounded-2xl border border-line bg-white p-2 shadow-[0_22px_70px_-42px_rgba(23,23,20,.38)] sm:p-3">
                <div className="border-b border-line px-3 py-3 sm:px-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-500" />
                      <p className="text-xs font-semibold text-ink">Gerador de anúncio completo</p>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.11em] text-muted">Grátis</span>
                  </div>
                </div>
                <div className="pt-2">
                  <GeneratorTool />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ferramentas" aria-labelledby="workspace-titulo" className="scroll-mt-20 bg-white">
          <div className="container-page py-16 sm:py-20 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-16">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Mais que um gerador</p>
                <h2 id="workspace-titulo" className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-[2.55rem]">
                  Um workspace enxuto para quem vende produto online.
                </h2>
              </div>
              <p className="text-sm leading-7 text-muted">
                Criação, organização e conteúdo de apoio ficam separados para você encontrar rápido o que precisa sem transformar a experiência em um painel pesado.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {workspaceCards.map((card) => (
                <Link key={card.href} href={card.href} className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-line bg-[#fafaf8] p-7 transition-all hover:-translate-y-1 hover:border-line-strong hover:bg-white hover:shadow-[0_24px_60px_-40px_rgba(23,23,20,.35)]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-700">{card.eyebrow}</span>
                    <span className="text-[10px] font-semibold tabular-nums text-muted">{card.number}</span>
                  </div>
                  <h3 className="mt-12 max-w-[15rem] text-xl font-semibold tracking-[-0.035em] text-ink transition-colors group-hover:text-brand-700">{card.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{card.text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-ink-soft transition-colors group-hover:text-brand-700">
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
