import Link from "next/link";
import { GeneratorTool } from "@/components/generator/generator-tool";
import { LiveStats } from "@/components/live-stats";
import { SiteHeader } from "@/components/site-header";
import { HowItWorksSection } from "@/components/sections/marketing";
import { FaqSection, PricingSection, SiteFooter } from "@/components/sections/pricing";
import { SITE_URL } from "@/lib/site";

const workspaceCards = [
  {
    href: "/ferramentas",
    eyebrow: "Criar",
    title: "Ferramentas por tarefa",
    text: "Escolha o gerador certo para cada canal ou tipo de conteúdo.",
    action: "Ver ferramentas",
  },
  {
    href: "/entrar",
    eyebrow: "Organizar",
    title: "Conta e biblioteca",
    text: "Acesse histórico e produtos que você decidiu guardar para reutilizar.",
    action: "Abrir minha conta",
  },
  {
    href: "/guias",
    eyebrow: "Aprender",
    title: "Guias práticos",
    text: "Consulte exemplos, checklists e estruturas antes de publicar.",
    action: "Explorar guias",
  },
] as const;

const modeHighlights = [
  { value: "10", label: "geradores atuais" },
  { value: "20", label: "produtos salvos" },
  { value: "100", label: "itens no histórico" },
  { value: "R$ 0", label: "plano Grátis" },
] as const;

const previewBlocks = [
  { label: "Título", value: "Fone Bluetooth JBL Tune 510BT Preto" },
  { label: "Benefícios", value: "Bateria prolongada · Dobrável · Microfone integrado" },
  { label: "Ficha técnica", value: "Bluetooth 5.0 · USB-C · informações organizadas para revisar" },
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
        <section aria-labelledby="hero-titulo" className="border-b border-line bg-white">
          <div className="container-page grid gap-12 pb-10 pt-12 lg:grid-cols-[minmax(0,1.03fr)_minmax(390px,0.8fr)] lg:items-center lg:gap-20 lg:pb-16 lg:pt-18">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">
                Workspace para conteúdo de produto
              </p>

              <h1 id="hero-titulo" className="mt-4 max-w-3xl text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.06em] text-ink sm:text-[3.7rem] lg:text-[4.55rem]">
                Crie anúncios com menos trabalho repetitivo.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-[17px] sm:leading-8">
                Organize produto, título, descrição, benefícios e ficha técnica em um fluxo claro para diferentes canais de venda.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#ferramenta" className="interactive-lift inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-5 text-sm font-semibold text-white hover:bg-brand-600">
                  Criar anúncio grátis
                </a>
                <Link href="/ferramentas" className="inline-flex min-h-11 items-center justify-center rounded-md border border-line-strong bg-white px-5 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700">
                  Ver ferramentas
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted sm:text-sm">
                <span className="inline-flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-500" />Plano Grátis ativo</span>
                <span>Sem cartão</span>
                <span>Login Google</span>
                <span>Salvamento opcional</span>
              </div>

              <div className="mt-7 max-w-xl border-t border-line pt-5">
                <LiveStats />
              </div>
            </div>

            <aside className="w-full" aria-label="Prévia do workspace AnunciaAI">
              <div className="overflow-hidden rounded-xl border border-line bg-white shadow-card">
                <div className="flex items-center justify-between border-b border-line px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="relative grid size-8 place-items-center rounded-[9px] bg-ink text-xs font-bold text-white">
                      A
                      <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 size-2 rounded-full border-2 border-white bg-brand-500" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-ink">Workspace</p>
                      <p className="mt-0.5 text-[10px] text-muted">Prévia do fluxo de criação</p>
                    </div>
                  </div>
                  <span className="rounded-md border border-line bg-canvas px-2 py-1 text-[10px] font-semibold text-muted">Grátis</span>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-5 border-b border-line pb-5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.11em] text-muted">Produto atual</p>
                      <p className="mt-2 text-sm font-semibold text-ink">Fone Bluetooth JBL Tune 510BT</p>
                      <p className="mt-1 text-xs text-muted">Mercado Livre · conteúdo para revisar</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-700"><span className="size-1.5 rounded-full bg-emerald-500" />Pronto</span>
                  </div>

                  <div className="divide-y divide-line">
                    {previewBlocks.map((block) => (
                      <div key={block.label} className="grid gap-1 py-4 sm:grid-cols-[92px_1fr] sm:gap-4">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.09em] text-muted">{block.label}</span>
                        <span className="text-xs leading-5 text-ink-soft">{block.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 border-t border-line pt-4">
                    <div className="rounded-lg bg-canvas p-3.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.09em] text-muted">Histórico</p>
                      <p className="mt-2 text-xs font-semibold text-ink">Salvamento manual</p>
                    </div>
                    <div className="rounded-lg bg-canvas p-3.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.09em] text-muted">Biblioteca</p>
                      <p className="mt-2 text-xs font-semibold text-ink">Produtos reutilizáveis</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="container-page pb-9">
            <div className="grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
              {modeHighlights.map((item, index) => (
                <div key={item.label} className={`py-4 ${index < modeHighlights.length - 1 ? "border-b border-line sm:border-b-0 sm:border-r sm:px-5" : "sm:px-5"} ${index === 0 ? "sm:pl-0" : ""}`}>
                  <p className="text-lg font-semibold tracking-tight text-ink">{item.value}</p>
                  <p className="mt-1 text-xs text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ferramenta" aria-labelledby="ferramenta-principal-titulo" className="scroll-mt-20 border-b border-line bg-canvas">
          <div className="container-page py-16 sm:py-20 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Ferramenta principal</p>
                <h2 id="ferramenta-principal-titulo" className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink">
                  Comece pelo produto.
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted">
                  Informe os dados reais e receba uma primeira versão organizada para revisar.
                </p>
              </div>
              <div className="max-w-3xl">
                <GeneratorTool />
              </div>
            </div>
          </div>
        </section>

        <section id="ferramentas" aria-labelledby="workspace-titulo" className="scroll-mt-20 bg-white">
          <div className="container-page py-16 sm:py-20 lg:py-24">
            <div className="grid gap-8 border-b border-line pb-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end lg:gap-16">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Workspace</p>
                <h2 id="workspace-titulo" className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2.35rem]">
                  Crie, organize e consulte sem misturar tudo.
                </h2>
              </div>
              <p className="text-sm leading-6 text-muted">
                Cada área tem uma função clara. Você entra no ponto certo e continua sem transformar a experiência em um painel pesado.
              </p>
            </div>

            <div className="mt-8 grid overflow-hidden rounded-lg border border-line lg:grid-cols-3">
              {workspaceCards.map((card, index) => (
                <Link key={card.href} href={card.href} className={`group flex min-h-[230px] flex-col bg-white p-6 transition-colors hover:bg-canvas/55 ${index < workspaceCards.length - 1 ? "border-b border-line lg:border-b-0 lg:border-r" : ""}`}>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">{card.eyebrow}</span>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.025em] text-ink transition-colors group-hover:text-brand-700">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{card.text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-ink-soft transition-colors group-hover:text-brand-700">
                    {card.action} <span aria-hidden="true">→</span>
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
