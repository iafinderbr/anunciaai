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
    title: "Central de ferramentas",
    text: "Escolha o gerador certo para Mercado Livre, Shopee, OLX, Instagram, loja virtual e outras tarefas.",
    action: "Ver ferramentas",
  },
  {
    href: "/entrar",
    eyebrow: "Organizar",
    title: "Sua área no AnunciaAI",
    text: "Entre com Google para liberar o modo Grátis, acessar histórico e reutilizar produtos sem preencher tudo novamente.",
    action: "Abrir minha conta",
  },
  {
    href: "/guias",
    eyebrow: "Aprender",
    title: "Guias práticos",
    text: "Consulte conteúdos por canal e objetivo quando precisar revisar uma publicação ou melhorar a estrutura do anúncio.",
    action: "Explorar guias",
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
        <section aria-labelledby="hero-titulo" className="relative overflow-hidden border-b border-line bg-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(55%_65%_at_74%_10%,rgba(255,92,26,0.09),transparent_72%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,#e8e9ee_1px,transparent_1px),linear-gradient(to_bottom,#e8e9ee_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_68%)]"
          />

          <div className="container-page relative grid gap-10 pb-12 pt-12 lg:grid-cols-[minmax(0,1.06fr)_minmax(360px,0.74fr)] lg:items-center lg:gap-16 lg:pb-16 lg:pt-18">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink-soft shadow-card backdrop-blur">
                <span className="size-1.5 rounded-full bg-brand-500" />
                Anúncios de produto, sem complicação
              </p>

              <h1
                id="hero-titulo"
                className="mt-6 max-w-3xl text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[3.75rem]"
              >
                Crie anúncios de produto com mais clareza e menos trabalho.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Entre com Google, informe o produto uma vez e use os geradores gratuitos para organizar título, descrição, benefícios, ficha técnica e SEO.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#ferramenta"
                  className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white shadow-card hover:bg-brand-600"
                >
                  Começar grátis
                </a>
                <Link
                  href="/ferramentas"
                  className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl border border-line-strong bg-white px-6 py-3 text-sm font-semibold text-ink hover:border-brand-300 hover:text-brand-700"
                >
                  Ver todas as ferramentas
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted sm:text-sm">
                <span className="inline-flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-500" />Plano Grátis</span>
                <span>Sem cartão</span>
                <span>Login Google simples</span>
              </div>

              <div className="mt-7 max-w-xl">
                <LiveStats />
              </div>
            </div>

            <aside className="relative mx-auto w-full max-w-lg lg:max-w-none" aria-label="Visão geral do fluxo do AnunciaAI">
              <div className="absolute -inset-4 rounded-[2rem] bg-brand-50/45 blur-2xl" aria-hidden="true" />
              <div className="product-surface relative overflow-hidden rounded-2xl">
                <div className="flex items-center justify-between border-b border-line bg-canvas/65 px-5 py-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-600">Seu fluxo</p>
                    <p className="mt-1 text-sm font-semibold text-ink">Do login ao conteúdo</p>
                  </div>
                  <span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-[10px] font-semibold text-muted">AnunciaAI</span>
                </div>

                <div className="divide-y divide-line px-5">
                  {[
                    ["01", "Entre com Google", "Um login simples libera o modo Grátis."],
                    ["02", "Informe o produto", "Nome, categoria e características reais."],
                    ["03", "Gere a primeira versão", "Conteúdo organizado em blocos claros."],
                    ["04", "Salve e reutilize", "Histórico e produtos ficam vinculados à sua conta quando você quiser."],
                  ].map(([number, title, text]) => (
                    <div key={number} className="grid grid-cols-[34px_1fr] gap-3 py-4">
                      <span className="pt-0.5 text-[11px] font-bold tabular-nums text-brand-600">{number}</span>
                      <div>
                        <p className="text-sm font-semibold text-ink">{title}</p>
                        <p className="mt-0.5 text-xs leading-5 text-muted">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-line bg-canvas/45 px-5 py-4">
                  <p className="text-xs leading-5 text-muted">Você mantém o controle: revise especificações, preço e regras do canal antes de publicar.</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="ferramenta" aria-labelledby="ferramenta-principal-titulo" className="scroll-mt-20 border-b border-line bg-canvas">
          <div className="container-page py-12 sm:py-16 lg:py-20">
            <div className="mx-auto mb-7 max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-600">Ferramenta principal</p>
              <h2 id="ferramenta-principal-titulo" className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Comece pelo seu produto
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted sm:text-[15px]">
                Faça o login uma vez. Depois o plano Grátis libera os geradores, histórico e produtos salvos sem pedir cartão.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <GeneratorTool />
            </div>
          </div>
        </section>

        <section id="ferramentas" aria-labelledby="workspace-titulo" className="scroll-mt-20 bg-white">
          <div className="container-page py-14 sm:py-20">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-600">Seu espaço de trabalho</p>
                <h2 id="workspace-titulo" className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  O essencial fica organizado. O restante aparece quando você precisa.
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-muted">
                  Em vez de espalhar dezenas de links pela página, o AnunciaAI concentra criação, conta e conteúdo em áreas próprias.
                </p>
              </div>
              <Link href="/ferramentas" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800">
                Abrir central completa <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="product-surface mt-8 overflow-hidden rounded-2xl lg:grid lg:grid-cols-3 lg:divide-x lg:divide-line">
              {workspaceCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group block border-b border-line p-5 transition-colors duration-200 last:border-b-0 hover:bg-canvas/70 sm:p-6 lg:border-b-0"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-600">{card.eyebrow}</span>
                    <span aria-hidden="true" className="text-sm text-line-strong transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand-600">→</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink transition-colors group-hover:text-brand-700">{card.title}</h3>
                  <p className="mt-2 min-h-18 text-sm leading-6 text-muted">{card.text}</p>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-ink-soft transition-colors group-hover:text-brand-700">
                    {card.action}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <HowItWorksSection />
        <PricingSection />
        <FaqSection />

        <section aria-labelledby="cta-final" className="border-t border-line bg-white">
          <div className="container-page py-14 sm:py-20">
            <div className="overflow-hidden rounded-2xl bg-ink px-6 py-11 text-center shadow-lift sm:px-12 sm:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/55">Pronto para começar?</p>
              <h2 id="cta-final" className="mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Entre com Google e libere os geradores gratuitos.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-white/65">
                Sem cartão e sem formulário longo. O login identifica sua conta e mantém seu trabalho organizado.
              </p>
              <a
                href="#ferramenta"
                className="interactive-lift mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-ink shadow-card hover:bg-brand-500 hover:text-white"
              >
                Começar grátis
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
