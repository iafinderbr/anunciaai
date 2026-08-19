import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AccountNav } from "@/components/account/account-nav";
import { AccountShellHeader } from "@/components/account/account-shell-header";
import { SiteFooter } from "@/components/sections/pricing";
import { tools, ToolVisual } from "@/components/sections/tools";
import { SiteHeader } from "@/components/site-header";
import { auth } from "@/lib/auth";
import { effectivePlan } from "@/lib/plans";
import { SITE_URL } from "@/lib/site";

const PATH = "/conta/ferramentas";

export const metadata: Metadata = {
  title: "Ferramentas do workspace",
  description: "Ferramentas disponíveis dentro da área autenticada do AnunciaAI.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  robots: { index: false, follow: false },
};

export default async function AccountToolsPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/entrar?voltar=/conta/ferramentas");

  const currentPlan = effectivePlan(session.user.plan, session.user.subscriptionStatus, session.user.proAccessUntil);

  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main className="min-h-[72vh] bg-[#0d0e11] text-white">
        <section className="container-page py-7 sm:py-9 lg:py-10">
          <div className="mx-auto max-w-6xl">
            <AccountShellHeader name={session.user.name} email={session.user.email} plan={currentPlan} />
            <div className="mt-3"><AccountNav active="tools" /></div>

            <section aria-labelledby="ferramentas-workspace" className="mt-7">
              <div className="flex flex-col gap-3 border-b border-white/[0.09] pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h1 id="ferramentas-workspace" className="text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">Ferramentas</h1>
                  <p className="mt-1.5 text-xs leading-5 text-white/34">Escolha o que quer criar sem sair do workspace.</p>
                </div>
                <span className="text-xs font-semibold text-white/32">{tools.length} disponíveis</span>
              </div>

              <ul className="mt-2 grid border-b border-white/[0.08] md:grid-cols-2 md:divide-x md:divide-white/[0.08]">
                {tools.map((tool, index) => (
                  <li key={tool.href} className={`${index >= 2 ? "border-t border-white/[0.08]" : ""} ${index % 2 === 1 ? "md:pl-7" : "md:pr-7"}`}>
                    <Link href={tool.href} className="group flex min-h-[126px] items-center gap-5 py-5">
                      <ToolVisual icon={tool.icon} />
                      <span className="min-w-0 flex-1">
                        <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-brand-300">{tool.eyebrow}</span>
                        <span className="mt-2 block text-[15px] font-semibold tracking-[-0.025em] text-white transition-colors group-hover:text-brand-200">{tool.title}</span>
                        <span className="mt-1.5 line-clamp-2 block text-xs leading-5 text-white/30">{tool.description}</span>
                      </span>
                      <span aria-hidden="true" className="text-sm text-white/18 transition-all group-hover:translate-x-1 group-hover:text-brand-300">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
