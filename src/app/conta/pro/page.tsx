import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AccountNav } from "@/components/account/account-nav";
import { AccountShellHeader } from "@/components/account/account-shell-header";
import { ProVariationsTool } from "@/components/account/pro-variations-tool";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { auth } from "@/lib/auth";
import { effectivePlan } from "@/lib/plans";
import { SITE_URL } from "@/lib/site";

const PATH = "/conta/pro";

export const metadata: Metadata = {
  title: "Recursos Pro",
  description: "Área Pro do AnunciaAI para comparar múltiplas versões de conteúdo do mesmo produto.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

export default async function ProPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/entrar");

  const plan = effectivePlan(session.user.plan, session.user.subscriptionStatus, session.user.proAccessUntil);
  if (plan !== "pro" && plan !== "premium") redirect("/conta/plano");

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="min-h-[75vh] bg-[#0d0e11] text-white">
        <section className="container-page py-7 sm:py-9 lg:py-10">
          <div className="mx-auto max-w-6xl">
            <AccountShellHeader name={session.user.name} email={session.user.email} plan={plan} />
            <div className="mt-3"><AccountNav active="pro" /></div>

            <div className="mt-7 grid gap-6 border-b border-white/[0.09] pb-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-14">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300">AnunciaAI Pro</p>
                <h1 className="mt-2 max-w-3xl text-2xl font-semibold tracking-[-0.045em] text-white sm:text-3xl">Compare versões antes de escolher o caminho final.</h1>
              </div>
              <p className="text-xs leading-6 text-white/34">Três abordagens do mesmo produto para comparação. O acesso permanece enquanto a assinatura estiver ativa ou até o fim do período comprado via Pix.</p>
            </div>

            <div className="mt-6">
              <ProVariationsTool />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
