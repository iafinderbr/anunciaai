import Link from "next/link";
import { headers } from "next/headers";
import { FacebookSignInButton } from "@/components/auth/facebook-sign-in-button";
import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";
import { ChannelStrip } from "@/components/channel-showcase";
import { GeneratorTool } from "@/components/generator/generator-tool";
import { EntryPreview } from "@/components/home/entry-preview";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { auth } from "@/lib/auth";
import { effectivePlan } from "@/lib/plans";
import { SITE_URL } from "@/lib/site";

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

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="AnunciaAI, página inicial">
      <span className="relative grid size-9 place-items-center border border-white/[0.14] bg-[#17181c] text-[14px] font-extrabold text-white">
        A
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-500" />
      </span>
      <span className="text-[19px] font-semibold tracking-[-0.05em] text-white">
        Anuncia<span className="text-brand-300">AI</span>
      </span>
    </Link>
  );
}

function LockedNavItem({ label }: { label: string }) {
  return (
    <a href="#acesso" className="group relative inline-flex min-h-11 items-center px-1 text-[13px] font-medium text-white/34 transition-colors hover:text-white/72">
      {label}
      <span className="pointer-events-none absolute left-1/2 top-[calc(100%-2px)] z-20 hidden w-max -translate-x-1/2 border border-white/[0.10] bg-[#17181c] px-3 py-2 text-[10px] font-medium text-white/58 shadow-xl group-hover:block group-focus-visible:block">
        Disponível depois do login
      </span>
    </a>
  );
}

function PublicEntry({ facebookEnabled }: { facebookEnabled: boolean }) {
  return (
    <div className="min-h-screen bg-[#0c0d0f] text-white">
      <header className="border-b border-white/[0.07]">
        <div className="container-page flex h-[72px] items-center justify-between gap-6">
          <Brand />

          <nav aria-label="Prévia da navegação" className="hidden items-center gap-8 md:flex">
            <LockedNavItem label="Ferramentas" />
            <LockedNavItem label="Guias" />
            <LockedNavItem label="Biblioteca" />
          </nav>

          <a href="#acesso" className="inline-flex min-h-10 items-center border border-white/[0.12] px-4 text-[12px] font-semibold text-white/68 transition-colors hover:border-white/[0.22] hover:text-white">
            Entrar
          </a>
        </div>
      </header>

      <main id="topo" className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(60%_75%_at_30%_0%,rgba(241,102,42,0.08),transparent_72%)]" />

        <section className="container-page relative grid min-h-[calc(100vh-72px)] gap-10 py-10 lg:grid-cols-[minmax(360px,0.78fr)_minmax(0,1.22fr)] lg:items-center lg:gap-16 lg:py-14">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-300">Conteúdo de produto, organizado</p>
            <h1 className="mt-5 max-w-2xl text-[3.2rem] font-semibold leading-[0.95] tracking-[-0.065em] text-white sm:text-[4.15rem] lg:text-[4.55rem]">
              Entre. Escolha o canal. Crie.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/46 sm:text-base">
              O AnunciaAI organiza as informações do seu produto em uma primeira versão de anúncio para marketplaces, loja virtual e redes sociais.
            </p>

            <div id="acesso" className="scroll-mt-24 mt-8 border border-white/[0.11] bg-[#111216] p-5 sm:p-6">
              <p className="text-sm font-semibold text-white">Entrar no AnunciaAI</p>
              <p className="mt-1.5 text-xs leading-5 text-white/36">Google pessoal ou Google Workspace. Entrar não inicia cobrança.</p>

              <div className="mt-5 grid gap-3 rounded-none [&_button]:rounded-none">
                <GoogleSignInButton callbackURL="/" />
                {facebookEnabled ? <FacebookSignInButton callbackURL="/" /> : null}
              </div>

              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 border-t border-white/[0.08] pt-4 text-[10px] font-medium text-white/30">
                <span>Modo Grátis</span>
                <span aria-hidden="true">·</span>
                <span>Sem cartão</span>
                <span aria-hidden="true">·</span>
                <span>Workspace liberado após entrar</span>
              </div>
            </div>

            <p className="mt-5 max-w-lg text-[11px] leading-5 text-white/28">
              Passe o mouse pelos canais ao lado para ver como o workspace se adapta. As ferramentas e dados da conta são liberados depois do login.
            </p>
          </div>

          <div className="w-full lg:justify-self-end">
            <EntryPreview />
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}

function WorkspaceHome({ name, email, plan }: { name: string; email: string; plan: "free" | "pro" | "premium" }) {
  const firstName = name.trim().split(/\s+/)[0] || "por aqui";
  const planLabel = plan === "free" ? "Grátis" : plan === "pro" ? "Pro" : "Premium";

  return (
    <>
      <SiteHeader />
      <main id="topo" className="bg-[#0c0d0f] text-white">
        <section className="border-b border-white/[0.08] bg-[#0d0e11]">
          <div className="container-page py-10 sm:py-12 lg:py-14">
            <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:gap-14">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-brand-300">Workspace</p>
                <h1 className="mt-4 max-w-3xl text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-[3.7rem]">
                  Bem-vindo, {firstName}.
                </h1>
                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/44 sm:text-base">
                  Informe o produto, escolha onde pretende anunciar e revise a primeira versão antes de usar. O AnunciaAI organiza o conteúdo; você continua no controle do que será publicado.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href="#ferramenta" className="inline-flex min-h-12 items-center justify-center bg-brand-500 px-6 text-[13px] font-semibold text-white transition-colors hover:bg-brand-600">
                    Criar anúncio <span aria-hidden="true" className="ml-2">→</span>
                  </a>
                  <Link href="/conta/ferramentas" className="inline-flex min-h-12 items-center justify-center border border-white/[0.11] px-6 text-[13px] font-semibold text-white/62 transition-colors hover:bg-white/[0.04] hover:text-white">
                    Ver ferramentas
                  </Link>
                </div>
              </div>

              <aside className="border-y border-white/[0.09] py-4" aria-label="Conta conectada">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/26">Conta conectada</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-300">{planLabel}</span>
                </div>
                <p className="mt-3 truncate text-sm font-semibold text-white">{name}</p>
                <p className="mt-1 truncate text-xs text-white/34">{email}</p>
                <Link href="/conta" className="mt-4 inline-flex text-xs font-semibold text-white/42 transition-colors hover:text-brand-300">Gerenciar conta →</Link>
              </aside>
            </div>

            <div className="mt-9 border-t border-white/[0.08] pt-6">
              <ChannelStrip dark />
            </div>
          </div>
        </section>

        <section aria-labelledby="como-funciona" className="border-b border-white/[0.08] bg-[#101114]">
          <div className="container-page py-9 sm:py-10">
            <div className="grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
              {[
                ["01", "Informe o produto", "Use nome, categoria e características que você consegue confirmar."],
                ["02", "Escolha o canal", "Mercado Livre, Shopee, OLX, Instagram, Facebook ou loja virtual."],
                ["03", "Revise o resultado", "Ajuste o texto e só então use no canal escolhido."],
              ].map(([number, title, text]) => (
                <div key={number} className="bg-[#121316] p-5 sm:p-6">
                  <span className="text-[10px] font-semibold tabular-nums text-brand-300">{number}</span>
                  <h2 id={number === "01" ? "como-funciona" : undefined} className="mt-5 text-sm font-semibold text-white">{title}</h2>
                  <p className="mt-2 text-xs leading-5 text-white/34">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ferramenta" aria-labelledby="gerador-titulo" className="scroll-mt-24 border-b border-white/[0.08] bg-[#0d0e11]">
          <div className="container-page py-12 sm:py-14">
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 flex flex-col gap-3 border-b border-white/[0.08] pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">Criar agora</p>
                  <h2 id="gerador-titulo" className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-white sm:text-3xl">Seu produto entra. O anúncio sai organizado.</h2>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/26">Modo {planLabel}</span>
              </div>

              <GeneratorTool />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}

export default async function HomePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  const facebookEnabled = Boolean(process.env.FACEBOOK_CLIENT_ID && process.env.FACEBOOK_CLIENT_SECRET);

  if (!session) return <PublicEntry facebookEnabled={facebookEnabled} />;

  const plan = effectivePlan(
    session.user.plan,
    session.user.subscriptionStatus,
    session.user.proAccessUntil,
  );

  return <WorkspaceHome name={session.user.name} email={session.user.email} plan={plan} />;
}
