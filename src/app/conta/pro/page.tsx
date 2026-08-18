import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AccountNav } from "@/components/account/account-nav";
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
      <main className="min-h-[75vh] bg-[#f4f4f1]">
        <section className="container-page py-8 sm:py-10 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <AccountNav active="pro" />

            <div className="mt-7 border border-[#28292e] bg-[#111216] px-6 py-8 text-white sm:px-8 lg:grid lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-16 lg:px-10 lg:py-10">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">AnunciaAI Pro</p>
                <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-[2.8rem]">Compare versões antes de decidir qual caminho publicar.</h1>
              </div>
              <p className="mt-5 text-sm leading-7 text-white/52 lg:mt-0">O Pro gera três abordagens do mesmo produto para comparação. O acesso permanece disponível enquanto sua assinatura estiver ativa ou até o fim do período comprado via Pix.</p>
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
