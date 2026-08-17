import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/conta";
const TITLE = "Minha conta";
const DESCRIPTION = "Área de conta do AnunciaAI, preparada para histórico, produtos salvos e planos Pro e Premium.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

const areas = [
  {
    title: "Histórico",
    text: "Reencontre trabalhos que você decidir salvar quando o login estiver ativo.",
  },
  {
    title: "Produtos salvos",
    text: "Mantenha informações recorrentes de produtos sem precisar preencher tudo novamente.",
  },
  {
    title: "Plano e assinatura",
    text: "Veja seu plano atual e, no futuro, gerencie Pro ou Premium com cobrança vinculada à sua conta.",
  },
];

export default function AccountPage() {
  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="bg-canvas">
        <section className="container-page py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Minha conta</p>
                  <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                    A estrutura da sua área já está preparada
                  </h1>
                  <p className="mt-4 text-[15px] leading-7 text-muted">
                    Esta rota será protegida por sessão quando o login com Google for ativado. Até lá, nenhuma informação
                    pessoal é exibida ou criada aqui.
                  </p>
                </div>
                <span className="inline-flex w-fit rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
                  Aguardando autenticação
                </span>
              </div>

              <div className="mt-9 grid gap-4 md:grid-cols-3">
                {areas.map((area) => (
                  <article key={area.title} className="rounded-2xl border border-line bg-canvas p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-base font-semibold text-ink">{area.title}</h2>
                      <span aria-hidden="true" className="grid size-8 place-items-center rounded-lg border border-line-strong bg-white text-muted">
                        •
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted">{area.text}</p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.08em] text-muted">Bloqueado até o login</p>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-line bg-canvas p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink">O uso grátis continua sem cadastro.</p>
                  <p className="mt-1 text-xs leading-5 text-muted">
                    A conta será necessária somente para recursos que precisam reconhecer você entre diferentes acessos.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="/entrar"
                    className="rounded-xl border border-line-strong bg-white px-4 py-3 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-700"
                  >
                    Ir para o login
                  </Link>
                  <Link
                    href="/#ferramenta"
                    className="rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-600"
                  >
                    Usar grátis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
