import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/sections/pricing";
import { auth } from "@/lib/auth";
import { SITE_URL } from "@/lib/site";

const PATH = "/entrar";
const TITLE = "Entrar na sua conta";
const DESCRIPTION = "Entre no AnunciaAI com Google para liberar os geradores gratuitos, histórico e produtos salvos.";

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

export default async function SignInPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (session) redirect("/conta");

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />

      <main className="relative min-h-[74vh] overflow-hidden bg-canvas">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(55%_75%_at_50%_0%,rgba(255,92,26,0.10),transparent_72%)]" />

        <section className="container-page relative py-10 sm:py-14 lg:py-18">
          <div className="mx-auto max-w-5xl">
            <div className="mb-7 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-600">Acesso seguro</p>
              <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Entre uma vez e use tudo do Grátis
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted sm:text-[15px]">
                Sem criar outra senha, sem formulário longo e sem cartão. Sua conta Google libera o workspace gratuito do AnunciaAI.
              </p>
            </div>

            <div className="surface-premium grid overflow-hidden rounded-[1.6rem] lg:grid-cols-[minmax(0,1fr)_380px]">
              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-ink text-sm font-bold text-white shadow-card">A</span>
                  <div>
                    <p className="text-sm font-semibold text-ink">AnunciaAI</p>
                    <p className="mt-0.5 text-xs text-muted">Workspace para anúncios de produtos</p>
                  </div>
                </div>

                <div className="mt-8 max-w-lg">
                  <p className="text-sm font-semibold text-ink">Continuar com sua Conta Google</p>
                  <p className="mt-1.5 text-sm leading-6 text-muted">
                    É o único passo necessário para identificar sua conta e manter histórico e produtos salvos ligados ao mesmo acesso.
                  </p>

                  <div className="mt-5">
                    <GoogleSignInButton />
                  </div>

                  <div className="mt-4 grid gap-2.5 text-xs text-muted sm:grid-cols-3">
                    <span className="rounded-lg border border-line bg-canvas/65 px-3 py-2 text-center font-medium">R$ 0</span>
                    <span className="rounded-lg border border-line bg-canvas/65 px-3 py-2 text-center font-medium">Sem cartão</span>
                    <span className="rounded-lg border border-line bg-canvas/65 px-3 py-2 text-center font-medium">Sem nova senha</span>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-muted">
                    O AnunciaAI não recebe sua senha do Google. Entrar não inicia assinatura nem cobrança.
                  </p>
                </div>

                <div className="mt-8 border-t border-line pt-6">
                  <Link href="/ferramentas" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
                    Ver as ferramentas antes de entrar <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <aside className="relative overflow-hidden border-t border-line bg-[#101217] p-6 text-white sm:p-8 lg:border-l lg:border-t-0 lg:p-9" aria-label="Recursos da conta">
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(65%_100%_at_50%_0%,rgba(255,92,26,0.19),transparent_74%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-200">Plano Grátis</p>
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] font-semibold text-white/55">Disponível</span>
                  </div>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">O básico bem feito, sem burocracia.</h2>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    Depois do login, os geradores ficam liberados normalmente e você passa a ter uma área própria para organizar o que decidir salvar.
                  </p>

                  <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
                    {accountBenefits.map((benefit, index) => (
                      <div key={benefit.title} className="grid grid-cols-[30px_1fr] gap-3 py-4">
                        <span className="text-[11px] font-semibold tabular-nums text-brand-200">0{index + 1}</span>
                        <div>
                          <h3 className="text-sm font-semibold text-white">{benefit.title}</h3>
                          <p className="mt-1 text-xs leading-5 text-white/52">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.045] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold text-white">Plano Grátis</p>
                      <span className="text-sm font-semibold text-brand-200">R$ 0</span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-white/52">
                      O Pro está sendo preparado separadamente e ainda não pode ser contratado. Nenhuma cobrança é ativada pelo login.
                    </p>
                  </div>
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
