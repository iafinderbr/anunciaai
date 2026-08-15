import { sql } from "drizzle-orm";
import { GeneratorTool } from "@/components/generator/generator-tool";
import { LiveStats } from "@/components/live-stats";
import { SiteHeader } from "@/components/site-header";
import { FeaturesSection, HowItWorksSection, TrustSection } from "@/components/sections/marketing";
import { FaqSection, PricingSection, SiteFooter } from "@/components/sections/pricing";
import { RecentStrip } from "@/components/sections/recent-strip";
import { ToolsSection } from "@/components/sections/tools";
import { db } from "@/db";
import { generations } from "@/db/schema";

export const dynamic = "force-dynamic";

const channels = ["Mercado Livre", "Shopee", "Loja virtual", "Instagram", "Amazon", "Magalu"];

async function getTotal(): Promise<number> {
  try {
    const [row] = await db.select({ total: sql<number>`count(*)::int` }).from(generations);
    return row?.total ?? 0;
  } catch {
    return 0;
  }
}

export default async function HomePage() {
  const total = await getTotal();

  return (
    <>
      <SiteHeader />

      <main id="topo">
        {/* HERO + FERRAMENTA */}
        <section aria-labelledby="hero-titulo" className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.10),transparent_70%)]"
          />

          <div className="container-page relative pb-4 pt-14 sm:pt-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-3 py-1.5 text-xs font-medium text-ink-soft shadow-card">
                <span className="size-1.5 rounded-full bg-brand-500" />
                Ferramenta gratuita de IA para lojistas
              </p>

              <h1
                id="hero-titulo"
                className="mt-6 text-[2.15rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]"
              >
                Transforme seu produto em um anúncio que vende.
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                A AnunciaAI é um gerador de anúncios com inteligência artificial que cria títulos, descrições, benefícios e
                conteúdo otimizado para seus produtos em segundos.
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
                <LiveStats initialTotal={total} />
              </div>

              <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.1em] text-muted">
                {channels.map((channel) => (
                  <li key={channel}>{channel}</li>
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
        <TrustSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <FaqSection />

        {/* CTA FINAL */}
        <section aria-labelledby="cta-final" className="border-t border-line bg-white">
          <div className="container-page py-14 sm:py-20">
            <div className="rounded-3xl bg-ink px-6 py-12 text-center sm:px-12">
              <h2 id="cta-final" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Seu próximo anúncio pode estar pronto em 30 segundos
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/70">
                Cole as informações do produto, escolha o canal e receba título, descrição, benefícios e SEO na mesma
                tela.
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
    </>
  );
}
