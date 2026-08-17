import Link from "next/link";
import { GeneratorTool } from "@/components/generator/generator-tool";
import { LiveStats } from "@/components/live-stats";
import { SiteHeader } from "@/components/site-header";
import { FeaturesSection, HowItWorksSection, TrustSection } from "@/components/sections/marketing";
import { FaqSection, PricingSection, SiteFooter } from "@/components/sections/pricing";
import { RecentStrip } from "@/components/sections/recent-strip";
import { ToolsSection } from "@/components/sections/tools";
import { GuidesHomeSection } from "@/components/sections/guides-home";
import { SITE_URL } from "@/lib/site";

const channels = [
  { label: "Mercado Livre", href: "/gerador-de-anuncios-mercado-livre" },
  { label: "Shopee", href: "/gerador-de-anuncios-shopee" },
  { label: "OLX", href: "/gerador-de-anuncios-olx" },
  { label: "Facebook Marketplace", href: "/gerador-de-anuncios-facebook-marketplace" },
  { label: "Loja virtual", href: "/gerador-de-anuncios-para-loja-virtual" },
  { label: "Instagram", href: "/gerador-de-legendas-para-instagram" },
];

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
        <section aria-labelledby="hero-titulo" className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.10),transparent_70%)]"
          />

          <div className="container-page relative pb-4 pt-14 sm:pt-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-3 py-1.5 text-xs font-medium text-ink-soft shadow-card">
                <span className="size-1.5 rounded-full bg-brand-500" />
                Gerador gratuito para quem vende online
              </p>

              <h1
                id="hero-titulo"
                className="mt-6 text-[2.15rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]"
              >
                Transforme informações do produto em um anúncio mais claro.
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                O AnunciaAI organiza os dados que você informa em títulos, descrições, benefícios, ficha técnica,
                anúncio e sugestões de SEO para revisar antes de publicar.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="#ferramenta"
                  className="w-full rounded-2xl bg-ink px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-brand-600 sm:w-auto"
                >
                  Gerar meu anúncio grátis
                </a>
                <a
                  href="#como-funciona"
                  className="w-full rounded-2xl border border-line-strong bg-white px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600 sm:w-auto"
                >
                  Ver como funciona
                </a>
              </div>

              <p className="mt-3 text-sm text-muted">Sem cartão de crédito.</p>

              <div className="mt-6">
                <LiveStats />
              </div>

              <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.1em] text-muted">
                {channels.map((channel) => (
                  <li key={channel.href}>
                    <Link href={channel.href} className="transition-colors hover:text-brand-600">
                      {channel.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="ferramenta" className="container-page scroll-mt-20 pb-16 pt-10 sm:pb-20">
            <div className="mx-auto max-w-3xl">
              <GeneratorTool />
            </div>
          </div>
        </section>

        <RecentStrip />
        <ToolsSection />
        <GuidesHomeSection />
        <TrustSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <FaqSection />

        <section aria-labelledby="cta-final" className="border-t border-line bg-white">
          <div className="container-page py-14 sm:py-20">
            <div className="rounded-3xl bg-ink px-6 py-12 text-center sm:px-12">
              <h2 id="cta-final" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Prepare a primeira versão do seu próximo anúncio
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/70">
                Informe o produto, escolha o canal e receba blocos de conteúdo para conferir, ajustar e usar onde fizer sentido.
              </p>
              <a
                href="#ferramenta"
                className="mt-7 inline-flex rounded-2xl bg-white px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-brand-500 hover:text-white"
              >
                Gerar meu anúncio grátis
              </a>
              <p className="mt-3 text-sm text-white/60">Sem cartão de crédito.</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
