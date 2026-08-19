import Link from "next/link";
import { headers } from "next/headers";
import { GeneratorTool } from "@/components/generator/generator-tool";
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

function Wordmark({ dark = true }: { dark?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="AnunciaAI, página inicial">
      <span aria-hidden="true" className="h-7 w-[3px] bg-brand-500" />
      <span className={`text-[20px] font-semibold tracking-[-0.05em] ${dark ? "text-white" : "text-[#171714]"}`}>
        Anuncia<span className="text-brand-300">AI</span>
      </span>
    </Link>
  );
}

function ProductPreview() {
  return (
    <div id="ferramentas" className="relative hidden min-h-[590px] w-full max-w-[650px] overflow-hidden bg-[#ece9e1] p-8 text-[#171714] lg:block xl:p-10">
      <div className="flex items-center justify-between border-b border-[#171714]/10 pb-5">
        <div className="flex items-center gap-3">
          <span className="size-2 bg-[#f1662a]" />
          <span className="text-[12px] font-semibold tracking-[-0.02em]">Workspace AnunciaAI</span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#171714]/38">Prévia</span>
      </div>

      <div className="mt-10 border border-[#171714]/12 bg-[#f7f5ef]">
        <div className="grid grid-cols-[150px_1fr] border-b border-[#171714]/10">
          <div className="border-r border-[#171714]/10 p-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#171714]/38">Produto</p>
          </div>
          <div className="p-5">
            <p className="text-sm font-semibold">JBL Tune 510BT</p>
            <p className="mt-1 text-xs text-[#171714]/45">Fone Bluetooth · Preto</p>
          </div>
        </div>
        <div className="grid grid-cols-[150px_1fr] border-b border-[#171714]/10">
          <div className="border-r border-[#171714]/10 p-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#171714]/38">Destino</p>
          </div>
          <div className="p-5">
            <p className="text-sm font-semibold">Marketplace</p>
            <p className="mt-1 text-xs text-[#171714]/45">Estrutura adaptada para o canal escolhido</p>
          </div>
        </div>

        <div className="grid gap-px bg-[#171714]/10 sm:grid-cols-2">
          {["Título", "Descrição", "Benefícios", "Ficha técnica"].map((item, index) => (
            <div key={item} className="min-h-32 bg-[#f7f5ef] p-5">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#171714]/38">{item}</p>
                <span className="text-[9px] tabular-nums text-[#171714]/24">0{index + 1}</span>
              </div>
              <div className="mt-5 space-y-2">
                <span className="block h-2 w-[88%] bg-[#171714]/10" />
                <span className="block h-2 w-[72%] bg-[#171714]/[0.07]" />
                {index > 0 ? <span className="block h-2 w-[58%] bg-[#171714]/[0.05]" /> : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between border-t border-[#171714]/10 pt-5 xl:bottom-10 xl:left-10 xl:right-10">
        <span className="text-[11px] font-medium text-[#171714]/42">Você revisa antes de usar.</span>
        <span className="inline-flex min-h-9 items-center bg-[#171714] px-4 text-[11px] font-semibold text-white">Pronto para revisar</span>
      </div>
    </div>
  );
}

function PublicEntry() {
  return (
    <div className="min-h-screen bg-[#10110f] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1540px] flex-col px-5 sm:px-8 lg:px-12">
        <header className="flex h-[76px] items-center justify-between border-b border-white/[0.07]">
          <Wordmark />
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/entrar?modo=entrar&voltar=/" className="inline-flex min-h-10 items-center px-3 text-[12px] font-semibold text-white/58 transition-colors hover:text-white sm:px-4">
              Entrar
            </Link>
            <Link href="/entrar?modo=registrar&voltar=/" className="inline-flex min-h-10 items-center border border-white/[0.14] bg-white/[0.02] px-4 text-[12px] font-semibold text-white transition-colors hover:bg-white/[0.06] sm:px-5">
              Registrar-se
            </Link>
          </div>
        </header>

        <span id="inicio-conteudo" tabIndex={-1} className="block h-0 scroll-mt-24" />

        <main id="topo" className="flex flex-1 items-center py-10 sm:py-14 lg:py-16">
          <section className="grid w-full gap-12 lg:grid-cols-[minmax(360px,0.82fr)_minmax(520px,1.18fr)] lg:items-center lg:gap-16 xl:gap-20">
            <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-300">Conteúdo de produto, organizado</p>
              <h1 className="mt-5 text-[3.15rem] font-semibold leading-[0.95] tracking-[-0.065em] text-white sm:text-[4rem] lg:text-[4.55rem]">
                Do produto ao anúncio, sem começar do zero.
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-[15px] leading-7 text-white/48 sm:text-base lg:mx-0">
                Organize títulos, descrições, benefícios e informações do produto em uma primeira versão pronta para revisar antes de publicar.
              </p>

              <div id="ferramenta" className="mt-8 flex scroll-mt-24 flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link href="/entrar?modo=registrar&voltar=/" className="inline-flex min-h-12 items-center justify-center bg-[#f2f0e9] px-6 text-[13px] font-semibold text-[#171714] transition-colors hover:bg-white">
                  Registrar-se <span aria-hidden="true" className="ml-2.5">→</span>
                </Link>
                <Link href="/entrar?modo=entrar&voltar=/" className="inline-flex min-h-12 items-center justify-center border border-white/[0.13] px-6 text-[13px] font-semibold text-white/72 transition-colors hover:bg-white/[0.04] hover:text-white">
                  Entrar
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] text-white/32 lg:justify-start">
                <span>Grátis para começar</span>
                <span aria-hidden="true">·</span>
                <span>Sem cartão</span>
                <span aria-hidden="true">·</span>
                <span>Google pessoal ou Workspace</span>
              </div>

              <div className="mx-auto mt-10 max-w-lg border-t border-white/[0.08] pt-6 text-left lg:mx-0">
                <div className="grid gap-4 sm:grid-cols-3">
                  {["Informe o produto", "Escolha o destino", "Revise o resultado"].map((item, index) => (
                    <div key={item} className="flex items-start gap-3 sm:block">
                      <span className="text-[9px] font-semibold tabular-nums text-brand-300">0{index + 1}</span>
                      <p className="mt-0.5 text-[11px] font-medium leading-5 text-white/42 sm:mt-2">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="justify-self-end">
              <ProductPreview />
            </div>
          </section>
        </main>

        <footer className="flex min-h-14 flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/[0.07] py-3 text-[10px] text-white/26 lg:justify-between">
          <span>© {new Date().getFullYear()} AnunciaAI</span>
          <div className="flex items-center gap-5">
            <Link href="/privacidade" className="transition-colors hover:text-white/60">Privacidade</Link>
            <Link href="/termos" className="transition-colors hover:text-white/60">Termos</Link>
            <Link href="/sobre" className="transition-colors hover:text-white/60">Sobre</Link>
          </div>
        </footer>
      </div>

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
      <main id="topo" className="min-h-[78vh] bg-[#0c0d0f] text-white">
        <section className="border-b border-white/[0.08] bg-[#0d0e11]">
          <div className="container-page py-10 sm:py-12 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_310px] lg:items-end lg:gap-14">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-brand-300">AnunciaAI</p>
                <h1 className="mt-4 max-w-3xl text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-[3.55rem]">
                  Olá, {firstName}. Vamos criar seu próximo anúncio.
                </h1>
                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/44 sm:text-base">
                  Você informa o que sabe sobre o produto. O AnunciaAI organiza a primeira versão. Você revisa antes de usar.
                </p>
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

            <div className="mt-9 grid gap-5 border-y border-white/[0.08] py-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/[0.08]">
              {[
                ["01", "Informe o produto", "Nome, categoria e características confirmadas."],
                ["02", "Escolha o destino", "Marketplace, rede social ou loja virtual."],
                ["03", "Revise antes de usar", "Ajuste o texto antes de publicar onde quiser."],
              ].map(([number, title, text], index) => (
                <div key={number} className={`flex gap-4 ${index > 0 ? "sm:pl-6" : ""} ${index < 2 ? "sm:pr-6" : ""}`}>
                  <span className="text-[9px] font-semibold tabular-nums text-brand-300">{number}</span>
                  <div>
                    <h2 className="text-sm font-semibold text-white">{title}</h2>
                    <p className="mt-1.5 text-xs leading-5 text-white/32">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#ferramenta" className="inline-flex min-h-12 items-center justify-center bg-brand-500 px-7 text-[13px] font-semibold text-white transition-colors hover:bg-brand-600">
                Criar anúncio <span aria-hidden="true" className="ml-2.5">→</span>
              </a>
              <Link href="/conta/ferramentas" className="inline-flex min-h-12 items-center justify-center px-3 text-[12px] font-semibold text-white/42 transition-colors hover:text-white sm:justify-start">
                Ver todas as ferramentas
              </Link>
            </div>
          </div>
        </section>

        <section id="ferramenta" aria-labelledby="gerador-titulo" className="scroll-mt-24 border-b border-white/[0.08] bg-[#0d0e11]">
          <div className="container-page py-10 sm:py-12">
            <div className="mx-auto max-w-5xl">
              <div className="mb-5 flex items-end justify-between gap-4 border-b border-white/[0.08] pb-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">Criar agora</p>
                  <h2 id="gerador-titulo" className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-white sm:text-3xl">Abra o gerador quando estiver pronto.</h2>
                </div>
                <span className="hidden text-[10px] font-semibold uppercase tracking-[0.12em] text-white/26 sm:block">Modo {planLabel}</span>
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

  if (!session) return <PublicEntry />;

  const plan = effectivePlan(
    session.user.plan,
    session.user.subscriptionStatus,
    session.user.proAccessUntil,
  );

  return <WorkspaceHome name={session.user.name} email={session.user.email} plan={plan} />;
}
