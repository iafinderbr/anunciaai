import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { FacebookSignInButton } from "@/components/auth/facebook-sign-in-button";
import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/sections/pricing";
import { auth } from "@/lib/auth";
import { SITE_URL } from "@/lib/site";

const PATH = "/entrar";
const TITLE = "Entrar na sua conta";
const DESCRIPTION = "Entre no AnunciaAI para liberar os geradores gratuitos, histórico e produtos salvos.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

const accountBenefits = [
  {
    title: "Todos os geradores grátis",
    description: "Um único login libera as ferramentas gratuitas do AnunciaAI sem cartão de crédito.",
  },
  {
    title: "Histórico sob seu controle",
    description: "Guarde manualmente apenas os resultados que quiser reencontrar depois.",
  },
  {
    title: "Biblioteca de produtos",
    description: "Salve dados de produtos e reutilize as informações nos próximos anúncios.",
  },
] as const;

function safeCallbackURL(value?: string) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/conta";

  try {
    const base = new URL(SITE_URL);
    const target = new URL(value, base);
    if (target.origin !== base.origin) return "/conta";
    return `${target.pathname}${target.search}${target.hash}`;
  } catch {
    return "/conta";
  }
}

function socialErrorMessage(error?: string) {
  if (error === "google") {
    return "O Google não conseguiu concluir o acesso. Escolha outra conta e tente novamente. Se continuar falhando, a configuração OAuth do Google precisa ser revisada.";
  }
  if (error === "facebook") {
    return "O Facebook não conseguiu concluir o acesso. Tente novamente ou use o Google.";
  }
  return null;
}

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ voltar?: string; erro?: string }>;
}) {
  const session = await auth.api.getSession({ headers: await headers() });
  const { voltar, erro } = await searchParams;
  const callbackURL = safeCallbackURL(voltar);
  const errorMessage = socialErrorMessage(erro);
  const facebookEnabled = Boolean(process.env.FACEBOOK_CLIENT_ID && process.env.FACEBOOK_CLIENT_SECRET);

  if (session) redirect(callbackURL);

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />

      <main className="relative min-h-[74vh] overflow-hidden bg-[#0d0e11] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(55%_75%_at_50%_0%,rgba(241,102,42,0.09),transparent_74%)]" />

        <section className="container-page relative py-10 sm:py-14 lg:py-18">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 border-l-2 border-brand-500 pl-5 sm:pl-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">Acesso seguro</p>
              <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-[2.7rem]">
                Entre no seu workspace.
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45 sm:text-[15px]">
                Um único acesso libera o modo Grátis e mantém histórico, produtos e recursos da conta organizados em um só lugar.
              </p>
            </div>

            {errorMessage ? (
              <div role="alert" className="mb-5 border border-rose-400/25 bg-rose-400/[0.05] px-5 py-4 text-sm leading-6 text-rose-100">
                {errorMessage}
              </div>
            ) : null}

            <div className="grid overflow-hidden border border-white/[0.10] bg-[#121316] lg:grid-cols-[minmax(0,1fr)_380px]">
              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
                <div className="flex items-center gap-3 border-b border-white/[0.08] pb-6">
                  <span className="relative grid size-10 place-items-center border border-white/[0.13] bg-[#1a1b1f] text-sm font-bold text-white">
                    A
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-500" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">AnunciaAI</p>
                    <p className="mt-0.5 text-xs text-white/34">Workspace para conteúdo de produtos</p>
                  </div>
                </div>

                <div className="mt-7 max-w-lg">
                  <p className="text-sm font-semibold text-white">Continuar para sua conta</p>
                  <p className="mt-2 text-sm leading-6 text-white/44">
                    {facebookEnabled
                      ? "Escolha Google ou Facebook. Contas Google pessoais e Google Workspace usam o mesmo acesso."
                      : "Use uma conta Google pessoal ou Google Workspace. Outras opções sociais só aparecem depois de configuradas e testadas de verdade."}
                  </p>

                  <div className="mt-5 grid gap-3 rounded-none [&_button]:rounded-none">
                    <GoogleSignInButton callbackURL={callbackURL} />
                    {facebookEnabled ? <FacebookSignInButton callbackURL={callbackURL} /> : null}
                  </div>

                  <div className="mt-5 grid border-y border-white/[0.08] text-xs text-white/42 sm:grid-cols-3 sm:divide-x sm:divide-white/[0.08]">
                    <span className="px-3 py-3 text-center font-medium">R$ 0 para começar</span>
                    <span className="border-t border-white/[0.08] px-3 py-3 text-center font-medium sm:border-t-0">Sem cartão</span>
                    <span className="border-t border-white/[0.08] px-3 py-3 text-center font-medium sm:border-t-0">Google pessoal ou empresa</span>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-white/34">
                    O AnunciaAI não recebe a senha da sua conta social. Entrar não inicia assinatura nem cobrança.
                  </p>
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <Link href="/ferramentas" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors hover:text-white">
                    Ver as ferramentas antes de entrar <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <aside className="relative overflow-hidden border-t border-white/[0.09] bg-[#0b0c0e] p-6 text-white sm:p-8 lg:border-l lg:border-t-0 lg:p-9" aria-label="Recursos da conta">
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(65%_100%_at_50%_0%,rgba(241,102,42,0.13),transparent_75%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-300">Modo Grátis</p>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.10em] text-white/28">Disponível</span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold tracking-[-0.035em] text-white">O essencial para começar sem burocracia.</h2>
                  <p className="mt-3 text-sm leading-6 text-white/45">
                    Depois do login, os geradores ficam liberados e você passa a ter uma área própria para organizar somente o que decidir salvar.
                  </p>

                  <div className="mt-7 divide-y divide-white/[0.09] border-y border-white/[0.09]">
                    {accountBenefits.map((benefit, index) => (
                      <div key={benefit.title} className="grid grid-cols-[30px_1fr] gap-3 py-4">
                        <span className="text-[10px] font-semibold tabular-nums text-brand-300">0{index + 1}</span>
                        <div>
                          <h3 className="text-sm font-semibold text-white">{benefit.title}</h3>
                          <p className="mt-1 text-xs leading-5 text-white/42">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 border-l-2 border-brand-500/70 pl-4 text-xs leading-5 text-white/36">
                    O login libera o modo Grátis. Pro e outros modos só são contratados por uma ação explícita dentro da conta.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
