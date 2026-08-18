import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/sections/pricing";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { auth } from "@/lib/auth";
import { SITE_URL } from "@/lib/site";

const PATH = "/entrar";
const TITLE = "Entrar na sua conta";
const DESCRIPTION = "Entre no AnunciaAI com Google para acessar sua área de conta e os recursos vinculados ao seu perfil.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

const accountBenefits = [
  {
    title: "Salvar seu trabalho",
    description: "A conta será a base para guardar produtos, preferências e materiais que você decidir manter para depois.",
  },
  {
    title: "Histórico organizado",
    description: "Estamos preparando uma área para reencontrar trabalhos importantes sem depender de copiar tudo manualmente.",
  },
  {
    title: "Planos Pro e Premium",
    description: "Quando os planos pagos forem liberados, sua conta será usada para reconhecer e liberar os recursos contratados.",
  },
];

export default async function SignInPage() {
  await ensureDatabaseSchema();
  const session = await auth.api.getSession({ headers: await headers() });
  if (session) redirect("/conta");

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />

      <main className="bg-canvas">
        <section className="container-page py-12 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-line bg-white shadow-lift lg:grid-cols-[0.92fr_1.08fr]">
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">
                <span className="size-2 rounded-full bg-brand-500" aria-hidden="true" />
                Conta AnunciaAI
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Entre com sua conta Google
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                O login é opcional para continuar usando as ferramentas gratuitas. Ele serve para identificar sua área de
                conta e, depois, liberar histórico, itens salvos e planos avançados.
              </p>

              <div className="mt-8 rounded-2xl border border-line bg-canvas p-4">
                <GoogleSignInButton />
                <p className="mt-3 text-center text-xs leading-relaxed text-muted">
                  O AnunciaAI não recebe sua senha do Google e não pede dados de pagamento para entrar.
                </p>
              </div>

              <Link
                href="/#ferramenta"
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-ink px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Continuar usando grátis sem conta
              </Link>

              <p className="mt-5 text-center text-xs text-muted">
                Nenhum plano pago está sendo cobrado neste momento.
              </p>
            </div>

            <div className="border-t border-line bg-ink p-6 text-white sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">O que a conta vai liberar</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Uma área pessoal sem tirar o acesso de quem prefere usar grátis
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                Entrar não muda o acesso às ferramentas gratuitas. A conta passa a fazer sentido quando você quiser manter
                dados entre acessos ou usar recursos vinculados a um plano.
              </p>

              <div className="mt-8 space-y-4">
                {accountBenefits.map((benefit, index) => (
                  <article key={benefit.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-500 text-xs font-bold text-white"
                      >
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white">{benefit.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/60">{benefit.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-brand-400/30 bg-brand-500/10 p-5">
                <p className="text-sm font-semibold text-white">Login primeiro, cobrança depois.</p>
                <p className="mt-2 text-xs leading-relaxed text-white/65">
                  Pro e Premium continuam em preparação. O login não inicia assinatura nem gera cobrança automática.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
