import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { auth } from "@/lib/auth";
import { effectivePlan } from "@/lib/plans";
import { SITE_URL } from "@/lib/site";

const PATH = "/conta";
const TITLE = "Minha conta";
const DESCRIPTION = "Área protegida da conta AnunciaAI para perfil, plano e recursos vinculados ao usuário.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

const areas = [
  {
    title: "Histórico",
    text: "Aqui ficarão os trabalhos que você decidir salvar quando o histórico for liberado.",
  },
  {
    title: "Produtos salvos",
    text: "Esta área será usada para produtos e preferências que você quiser reutilizar.",
  },
  {
    title: "Plano e assinatura",
    text: "Seu plano é controlado no servidor. Pro e Premium só serão liberados depois da cobrança real estar pronta.",
  },
];

const planNames = {
  free: "Grátis",
  pro: "Pro",
  premium: "Premium",
} as const;

export default async function AccountPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/entrar");

  const currentPlan = effectivePlan(session.user.plan, session.user.subscriptionStatus);
  const initial = session.user.name.trim().charAt(0).toUpperCase() || "A";

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="bg-canvas">
        <section className="container-page py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-lg font-semibold text-white"
                  >
                    {initial}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Minha conta</p>
                    <h1 className="mt-2 truncate text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      Olá, {session.user.name}
                    </h1>
                    <p className="mt-2 truncate text-sm text-muted">{session.user.email}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
                    Plano {planNames[currentPlan]}
                  </span>
                  <SignOutButton />
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-line bg-canvas p-5">
                <p className="text-sm font-semibold text-ink">Login com Google ativo.</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Sua sessão é validada no servidor antes desta página ser exibida. O plano atual é {planNames[currentPlan]} e
                  nenhuma assinatura paga é criada apenas por entrar na conta.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {areas.map((area) => (
                  <article key={area.title} className="rounded-2xl border border-line bg-canvas p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-base font-semibold text-ink">{area.title}</h2>
                      <span
                        aria-hidden="true"
                        className="grid size-8 place-items-center rounded-lg border border-line-strong bg-white text-muted"
                      >
                        •
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted">{area.text}</p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.08em] text-muted">Em preparação</p>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-line bg-canvas p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink">As ferramentas grátis continuam disponíveis normalmente.</p>
                  <p className="mt-1 text-xs leading-5 text-muted">
                    Entrar serve para recursos que precisam reconhecer sua conta entre diferentes acessos.
                  </p>
                </div>
                <Link
                  href="/#ferramenta"
                  className="rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-600"
                >
                  Usar ferramenta grátis
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
