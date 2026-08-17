import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/sections/pricing";
import { SITE_URL } from "@/lib/site";

const PATH = "/entrar";
const TITLE = "Entrar na sua conta";
const DESCRIPTION =
  "Área de acesso do AnunciaAI. O login com Google será liberado junto dos recursos de conta, Pro e Premium.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

const accountBenefits = [
  {
    title: "Salvar seu trabalho",
    description: "A conta vai permitir guardar produtos, preferências e materiais que você quiser manter para depois.",
  },
  {
    title: "Histórico organizado",
    description: "Planejamos uma área para reencontrar gerações importantes sem depender de copiar tudo manualmente.",
  },
  {
    title: "Planos Pro e Premium",
    description: "Quando os planos pagos forem liberados, a conta será usada para reconhecer e liberar os recursos contratados.",
  },
];

export default function SignInPage() {
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
                Seu espaço no AnunciaAI está chegando
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Estamos preparando o acesso com Google antes de ativar histórico, recursos de conta e os planos pagos.
                O gerador gratuito continua disponível sem cadastro.
              </p>

              <div className="mt-8 rounded-2xl border border-line bg-canvas p-4">
                <button
                  type="button"
                  disabled
                  className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-xl border border-line-strong bg-white px-4 py-3.5 text-sm font-semibold text-ink opacity-70"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-6 place-items-center rounded-full border border-line-strong text-xs font-bold"
                  >
                    G
                  </span>
                  Continuar com Google
                  <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-700">
                    Em breve
                  </span>
                </button>
                <p className="mt-3 text-center text-xs leading-relaxed text-muted">
                  Ainda não pedimos email, senha nem dados de pagamento nesta tela.
                </p>
              </div>

              <Link
                href="/#ferramenta"
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-ink px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Continuar usando grátis
              </Link>

              <p className="mt-5 text-center text-xs text-muted">
                Nenhum plano pago está sendo cobrado neste momento.
              </p>
            </div>

            <div className="border-t border-line bg-ink p-6 text-white sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">O que a conta vai liberar</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Uma base pronta para o AnunciaAI crescer sem atrapalhar quem usa grátis
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                O acesso será opcional para as ferramentas gratuitas. A conta passa a fazer sentido quando você quiser
                salvar trabalho, manter preferências ou usar recursos avançados.
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
                <p className="text-sm font-semibold text-white">Primeiro segurança, depois cobrança.</p>
                <p className="mt-2 text-xs leading-relaxed text-white/65">
                  O login só será ativado quando autenticação, sessão e proteção de conta estiverem testadas. Depois disso,
                  conectamos Pro e Premium ao pagamento.
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
