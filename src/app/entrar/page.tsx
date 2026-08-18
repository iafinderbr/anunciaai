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
const DESCRIPTION = "Entre no AnunciaAI com Google para acessar histórico, produtos salvos e sua área pessoal.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

const accountBenefits = [
  {
    title: "Histórico",
    description: "Guarde manualmente os resultados que quiser reencontrar depois.",
  },
  {
    title: "Produtos salvos",
    description: "Salve dados de produtos e reutilize as informações nos próximos anúncios.",
  },
  {
    title: "Área pessoal",
    description: "Acompanhe seu plano e concentre recursos da conta em um único lugar.",
  },
] as const;

export default async function SignInPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (session) redirect("/conta");

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />

      <main className="min-h-[72vh] bg-canvas">
        <section className="container-page py-10 sm:py-14 lg:py-16">
          <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-line bg-white shadow-lift lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-600">Conta AnunciaAI</p>
              <h1 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Continue com Google
              </h1>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
                O login é opcional para usar os geradores. Entre quando quiser salvar histórico, reutilizar produtos e acessar sua área pessoal.
              </p>

              <div className="mt-8 max-w-lg">
                <GoogleSignInButton />
                <p className="mt-3 text-xs leading-5 text-muted">
                  O AnunciaAI não recebe sua senha do Google. Entrar não inicia assinatura nem cobrança.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
                <Link
                  href="/#ferramenta"
                  className="inline-flex items-center justify-center rounded-xl border border-line-strong bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  Usar sem conta
                </Link>
                <Link href="/ferramentas" className="text-center text-sm font-semibold text-brand-700 hover:text-brand-800 sm:text-left">
                  Ver ferramentas →
                </Link>
              </div>
            </div>

            <aside className="border-t border-line bg-ink p-6 text-white sm:p-8 lg:border-l lg:border-t-0 lg:p-9" aria-label="Recursos da conta">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-200">Já disponível</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">Sua área de trabalho pessoal</h2>
              <p className="mt-3 text-sm leading-6 text-white/60">
                A conta organiza o que você escolhe guardar sem bloquear o uso gratuito do restante do site.
              </p>

              <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
                {accountBenefits.map((benefit, index) => (
                  <div key={benefit.title} className="grid grid-cols-[28px_1fr] gap-3 py-4">
                    <span className="text-xs font-semibold tabular-nums text-brand-300">0{index + 1}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{benefit.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-white/55">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-semibold text-white">Grátis continua grátis.</p>
                <p className="mt-1.5 text-xs leading-5 text-white/55">
                  Pro e Premium seguem em preparação e não há cobrança ativa neste momento.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
