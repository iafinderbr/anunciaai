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

const modeHighlights = [
  { value: "10", label: "geradores atuais" },
  { value: "20", label: "produtos salvos" },
  { value: "100", label: "itens no histórico" },
  { value: "R$ 0", label: "no plano Grátis" },
] as const;

const previewBlocks = [
  { label: "Título", value: "Fone Bluetooth JBL Tune 510BT Dobrável 40h" },
  { label: "Benefícios", value: "Bateria prolongada · Dobrável · Microfone integrado" },
  { label: "Ficha", value: "Bluetooth 5.0 · USB-C · Garantia informada de 12 meses" },
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
            className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(58%_70%_at_78%_8%,rgba(255,92,26,0.105),transparent_72%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(to_right,#dde1e8_1px,transparent_1px),linear-gradient(to_bottom,#dde1e8_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]"
          />

          <div className="container-page relative grid gap-12 pb-12 pt-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(390px,0.86fr)] lg:items-center lg:gap-16 lg:pb-16 lg:pt-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/92 px-3 py-1.5 text-xs font-semibold text-ink-soft shadow-card backdrop-blur">
                <span className="grid size-5 place-items-center rounded-full bg-brand-50 text-[10px] font-bold text-brand-700">A</span>
                Workspace gratuito para vendedores online
              </div>

              <h1
                id="hero-titulo"
                className="mt-6 max-w-3xl text-[2.55rem] font-semibold leading-[1.01] tracking-[-0.052em] text-ink sm:text-[3.45rem] lg:text-[4.15rem]"
              >
                Crie anúncios melhores sem transformar isso em mais trabalho.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Um espaço simples para organizar produto, título, descrição, benefícios, ficha técnica e conteúdo para diferentes canais — com login Google e plano Grátis sem cartão.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#ferramenta"
                  className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white shadow-card hover:bg-brand-600"
                >
                  Criar meu primeiro anúncio
                </a>
                <Link
                  href="/ferramentas"
                  className="interactive-lift inline-flex min-h-12 items-center justify-center rounded-xl border border-line-strong bg-white px-6 py-3 text-sm font-semibold text-ink hover:border-brand-300 hover:text-brand-700"
                >
                  Explorar ferramentas
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted sm:text-sm">
                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Plano Grátis ativo
                </span>
                <span>Sem cartão</span>
                <span>Login Google</span>
                <span>Dados salvos só quando você escolher</span>
              </div>

              <div className="mt-7 max-w-xl">
                <LiveStats />
              </div>
            </div>

            <aside className="relative mx-auto w-full max-w-xl lg:max-w-none" aria-label="Prévia do workspace AnunciaAI">
              <div className="absolute -inset-5 rounded-[2.25rem] bg-brand-100/35 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.65rem] border border-ink/10 bg-[#101217] shadow-[0_36px_90px_-42px_rgba(17,19,24,0.72)]">
                <div className="flex items-center justify-between border-b border-white/8 px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-lg bg-white text-xs font-bold text-ink">A</span>
                    <div>
                      <p className="text-xs font-semibold text-white">AnunciaAI Workspace</p>
                      <p className="mt-0.5 text-[10px] text-white/42">Prévia do fluxo de criação</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1 text-[10px] font-semibold text-white/60">Grátis</span>
                </div>

                <div className="grid gap-4 p-4 sm:p-5">
                  <div className="rounded-xl border border-white/9 bg-white/[0.045] p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-200">Produto atual</p>
                        <p className="mt-2 text-sm font-semibold text-white">Fone Bluetooth JBL Tune 510BT</p>
                        <p className="mt-1 text-xs text-white/46">Mercado Livre · Tom persuasivo</p>
                      </div>
                      <span className="rounded-lg bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold text-emerald-300">Pronto</span>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-white/9 bg-[#16191f]">
                    <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.11em] text-white/36">Resultado</p>
                        <p className="mt-1 text-xs font-semibold text-white/82">Conteúdo organizado para revisar</p>
                      </div>
                      <span className="size-2 rounded-full bg-brand-500" aria-hidden="true" />
                    </div>
                    <div className="divide-y divide-white/7 px-4">
                      {previewBlocks.map((block) => (
                        <div key={block.label} className="grid gap-1 py-3.5 sm:grid-cols-[78px_1fr] sm:gap-3">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/34">{block.label}</span>
                          <span className="text-xs leading-5 text-white/70">{block.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/9 bg-white/[0.035] p-3.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.09em] text-white/34">Histórico</p>
                      <p className="mt-2 text-sm font-semibold text-white">Salvamento manual</p>
                    </div>
                    <div className="rounded-xl border border-white/9 bg-white/[0.035] p-3.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.09em] text-white/34">Biblioteca</p>
                      <p className="mt-2 text-sm font-semibold text-white">Produtos reutilizáveis</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="container-page relative pb-8">
            <div className="grid overflow-hidden rounded-2xl border border-line bg-white/92 shadow-card backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
              {modeHighlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`px-5 py-4 ${index < modeHighlights.length - 1 ? "border-b border-line sm:border-b-0 sm:border-r" : ""}`}
                >
                  <p className="text-xl font-semibold tracking-tight text-ink">{item.value}</p>
                  <p className="mt-1 text-xs font-medium text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ferramenta" aria-labelledby="ferramenta-principal-titulo" className="scroll-mt-20 border-b border-line bg-canvas">
          <div className="container-page py-14 sm:py-18 lg:py-22">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Ferramenta principal</p>
              <h2 id="ferramenta-principal-titulo" className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Seu produto entra. O trabalho repetitivo diminui.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-[15px]">
                Faça o login uma vez, informe os dados reais do produto e use o modo Grátis para criar uma primeira versão organizada para revisar.
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
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-600">Workspace</p>
                <h2 id="workspace-titulo" className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Criação, organização e aprendizado no mesmo lugar.
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-muted">
                  O AnunciaAI separa cada tarefa em uma área clara para você encontrar o que precisa sem transformar a página em um painel confuso.
                </p>
              </div>
              <Link href="/ferramentas" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800">
                Abrir central completa <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="surface-premium mt-9 overflow-hidden rounded-2xl lg:grid lg:grid-cols-3 lg:divide-x lg:divide-line">
              {workspaceCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group block border-b border-line p-6 transition-colors duration-200 last:border-b-0 hover:bg-canvas/65 lg:border-b-0 lg:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-600">{card.eyebrow}</span>
                    <span aria-hidden="true" className="grid size-8 place-items-center rounded-full border border-line bg-white text-sm text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:border-brand-200 group-hover:text-brand-600">→</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink transition-colors group-hover:text-brand-700">{card.title}</h3>
                  <p className="mt-2 min-h-18 text-sm leading-6 text-muted">{card.text}</p>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-ink-soft transition-colors group-hover:text-brand-700">
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
            <div className="relative overflow-hidden rounded-[1.75rem] bg-ink px-6 py-12 text-center shadow-lift sm:px-12 sm:py-16">
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(55%_100%_at_50%_0%,rgba(255,92,26,0.20),transparent_72%)]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">Comece pelo básico</p>
                <h2 id="cta-final" className="mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Entre com Google e transforme seu produto em conteúdo organizado.
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-white/62">
                  Sem cartão e sem formulário longo. O login libera o plano Grátis e mantém histórico e biblioteca ligados à sua conta.
                </p>
                <a
                  href="#ferramenta"
                  className="interactive-lift mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-ink shadow-card hover:bg-brand-500 hover:text-white"
                >
                  Usar o AnunciaAI grátis
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
