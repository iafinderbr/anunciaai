import Link from "next/link";
import { ChannelIcon, ChannelStrip } from "@/components/channel-showcase";
import { GeneratorTool } from "@/components/generator/generator-tool";
import { SiteHeader } from "@/components/site-header";
import { FaqSection, SiteFooter } from "@/components/sections/pricing";
import { SITE_URL } from "@/lib/site";

const previewBlocks = [
  {
    label: "Título",
    value: "Fone Bluetooth JBL Tune 510BT Preto",
  },
  {
    label: "Conteúdo",
    value: "Benefícios, descrição e ficha separados para revisão.",
  },
] as const;

const quickSteps = [
  {
    number: "01",
    title: "Informe o produto",
    text: "Use apenas dados que você consegue confirmar.",
  },
  {
    number: "02",
    title: "Escolha o canal",
    text: "A estrutura muda conforme o destino do anúncio.",
  },
  {
    number: "03",
    title: "Revise e use",
    text: "Confira cada bloco antes de publicar no canal escolhido.",
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

      <main id="topo" className="bg-[#0b0c0e] text-white">
        <section aria-labelledby="hero-titulo" className="relative overflow-hidden border-b border-white/[0.08] bg-[#0d0e11]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-48 -top-64 size-[680px] rounded-full bg-brand-500/[0.07] blur-3xl" />
            <div className="absolute left-1/2 top-0 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
          </div>

          <div className="container-page relative py-14 sm:py-16 lg:py-20 xl:py-22">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(460px,1.1fr)] lg:items-center lg:gap-16">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/42">
                  <span className="h-5 w-[2px] bg-brand-500" />
                  Conteúdo de produto por canal
                </div>

                <h1 id="hero-titulo" className="mt-6 max-w-4xl text-[3.2rem] font-semibold leading-[0.94] tracking-[-0.068em] text-white sm:text-[4.25rem] lg:text-[4.7rem] xl:text-[5.2rem]">
                  Do produto a uma primeira versão pronta para revisar.
                </h1>

                <p className="mt-6 max-w-2xl text-[16px] leading-8 text-white/54 sm:text-[18px]">
                  Organize título, descrição, benefícios e ficha para marketplaces, loja virtual e redes sociais sem transformar a Home em um painel cheio de etapas.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#ferramenta" className="inline-flex min-h-13 items-center justify-center bg-brand-500 px-6 text-[14px] font-semibold text-white transition-colors hover:bg-brand-600">
                    Criar anúncio grátis <span aria-hidden="true" className="ml-2.5">→</span>
                  </a>
                  <Link href="/ferramentas" className="inline-flex min-h-13 items-center justify-center border border-white/[0.12] bg-white/[0.02] px-6 text-[14px] font-semibold text-white/72 transition-colors hover:bg-white/[0.05] hover:text-white">
                    Ver todas as ferramentas
                  </Link>
                </div>

                <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/36">
                  <span className="font-medium text-white/62">Modo Grátis</span>
                  <span aria-hidden="true">·</span>
                  <span>Sem cartão</span>
                  <span aria-hidden="true">·</span>
                  <span>Google pessoal ou Workspace</span>
                </div>
              </div>

              <aside className="relative w-full" aria-label="Prévia do workspace AnunciaAI">
                <div className="relative border border-white/[0.10] bg-[#131418]">
                  <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-6">
                    <div className="flex items-center gap-3">
                      <span className="relative grid size-9 place-items-center border border-white/[0.12] bg-[#191a1e] text-[13px] font-extrabold text-white">
                        A
                        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-500" />
                      </span>
                      <div>
                        <p className="text-[13px] font-semibold text-white">AnunciaAI</p>
                        <p className="mt-0.5 text-[10px] text-white/30">Resultado organizado</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[10px] font-medium text-white/34">
                      <ChannelIcon id="mercado-livre" className="size-[18px] text-white/58" />
                      Mercado Livre
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-5 border-b border-white/[0.08] pb-5">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-300">Produto</p>
                        <p className="mt-2 text-[15px] font-semibold text-white">JBL Tune 510BT</p>
                        <p className="mt-1 text-[11px] text-white/30">Fone Bluetooth · Preto</p>
                      </div>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/28">Revisão</span>
                    </div>

                    <div className="mt-4 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
                      {previewBlocks.map((block, index) => (
                        <div key={block.label} className={`min-h-32 p-5 ${index === 0 ? "bg-[#17181c]" : "bg-[#121316]"}`}>
                          <p className={`text-[9px] font-semibold uppercase tracking-[0.14em] ${index === 0 ? "text-brand-300" : "text-white/28"}`}>{block.label}</p>
                          <p className="mt-4 text-[13px] leading-6 text-white/66">{block.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-4">
                      <span className="text-[10px] text-white/26">Revise antes de publicar</span>
                      <span className="border border-brand-500/35 bg-brand-500 px-3 py-2 text-[10px] font-semibold text-white">Copiar resultado</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <div id="ferramentas" className="scroll-mt-24 mt-10 border-t border-white/[0.08] pt-6">
              <ChannelStrip dark />
            </div>
          </div>
        </section>

        <section id="ferramenta" aria-labelledby="ferramenta-principal-titulo" className="scroll-mt-24 border-b border-white/[0.08] bg-[#0d0e11]">
          <div className="container-page py-14 sm:py-16 lg:py-18">
            <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-brand-300">Criar agora</p>
                <h2 id="ferramenta-principal-titulo" className="mt-4 text-[2.25rem] font-semibold leading-[1.02] tracking-[-0.052em] text-white sm:text-[2.7rem]">
                  Um formulário. Um resultado organizado.
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/42">
                  Preencha o que você sabe, escolha o destino e revise a primeira versão antes de usar.
                </p>

                <div className="mt-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                  {["Título e descrição", "Benefícios e ficha", "SEO e chamada final"].map((item) => (
                    <div key={item} className="flex items-center justify-between py-3 text-xs text-white/42">
                      <span>{item}</span>
                      <span aria-hidden="true" className="text-brand-300">→</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden border border-white/[0.10] bg-[#111216]">
                <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-6">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-brand-300">Ferramenta principal</p>
                    <p className="mt-1.5 text-sm font-semibold text-white">Gerador de anúncio completo</p>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/30">Grátis</span>
                </div>
                <div className="p-2 sm:p-3">
                  <GeneratorTool />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="fluxo-curto-titulo" className="border-b border-white/[0.08] bg-[#101114]">
          <div className="container-page py-12 sm:py-14">
            <div className="flex flex-col gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">Como usar</p>
                <h2 id="fluxo-curto-titulo" className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">Três passos, sem enrolação.</h2>
              </div>
              <Link href="/guias" className="text-xs font-semibold text-white/42 transition-colors hover:text-brand-300">Ver guias práticos →</Link>
            </div>

            <ol className="grid divide-y divide-white/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {quickSteps.map((step) => (
                <li key={step.number} className="py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                  <div className="flex items-start gap-4">
                    <span className="text-[10px] font-semibold tabular-nums text-brand-300">{step.number}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-white/34">{step.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <FaqSection />
      </main>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
