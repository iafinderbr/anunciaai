import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/termos";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Consulte as condições de uso do AnunciaAI, responsabilidades do usuário, contas e limites do conteúdo gerado.",
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: ABSOLUTE_URL,
    siteName: "AnunciaAI",
    title: "Termos de Uso | AnunciaAI",
    description: "Consulte as condições de uso do AnunciaAI, responsabilidades do usuário, contas e limites do conteúdo gerado.",
  },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Uso da ferramenta",
    text: "O AnunciaAI oferece ferramentas para ajudar na criação e organização de textos de produtos, anúncios, títulos, descrições, palavras-chave, nomes e legendas. O resultado deve ser tratado como uma primeira versão a ser revisada antes da publicação.",
  },
  {
    title: "2. Responsabilidade pelas informações",
    text: "O usuário é responsável por fornecer informações verdadeiras sobre o produto e por conferir preço, medidas, material, compatibilidade, garantia, estoque, condição, prazo, frete e qualquer outra informação comercial antes de publicar o conteúdo.",
  },
  {
    title: "3. Regras de marketplaces e plataformas",
    text: "Mercado Livre, Shopee, OLX, Facebook Marketplace, Instagram e outras plataformas podem alterar limites, políticas e requisitos a qualquer momento. O usuário deve conferir as regras atuais do canal em que pretende publicar.",
  },
  {
    title: "4. Ausência de vínculo com terceiros",
    text: "O AnunciaAI é uma ferramenta independente e não representa, não é patrocinado e não é afiliado oficialmente às plataformas e marcas mencionadas no site, salvo quando houver indicação expressa em contrário.",
  },
  {
    title: "5. Conteúdo gerado",
    text: "Não garantimos que todo texto gerado esteja completo, correto, adequado a uma plataforma específica ou capaz de produzir determinado resultado comercial. A revisão humana antes da publicação é indispensável.",
  },
  {
    title: "6. Uso permitido",
    text: "A ferramenta deve ser usada para finalidades lícitas. Não é permitido utilizar o serviço para criar conteúdo fraudulento, enganoso, ilícito, que viole direitos de terceiros ou que tente contornar regras de plataformas.",
  },
  {
    title: "7. Conta e autenticação",
    text: "O uso das ferramentas gratuitas continua disponível sem conta. Quando o usuário optar por entrar com Google, ele é responsável por manter a própria Conta Google segura e por encerrar a sessão em dispositivos compartilhados. O acesso à área de conta depende de uma sessão válida e pode ser interrompido em caso de abuso, risco de segurança ou indisponibilidade técnica.",
  },
  {
    title: "8. Disponibilidade",
    text: "O serviço pode passar por manutenção, alterações, testes ou interrupções. Recursos gratuitos, limites e funcionalidades podem mudar conforme o produto evolui.",
  },
  {
    title: "9. Planos futuros",
    text: "Planos pagos exibidos como “Em breve” ou “Em preparação” são apenas uma indicação de recursos planejados. Valores, funcionalidades e condições podem mudar antes do lançamento e não representam uma contratação enquanto a compra não estiver disponível.",
  },
  {
    title: "10. Alterações dos termos",
    text: "Estes termos podem ser atualizados para acompanhar mudanças no produto, na legislação ou nas integrações utilizadas. A versão publicada nesta página é a versão vigente.",
  },
];

export default function TermosPage() {
  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main id="ferramenta">
        <section className="border-b border-line bg-white">
          <div className="container-page py-10 sm:py-16">
            <nav aria-label="Trilha de navegação" className="text-xs text-muted">
              <Link href="/" className="transition-colors hover:text-ink">Início</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page" className="font-medium text-ink-soft">Termos de uso</span>
            </nav>
            <div className="mt-10 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Uso responsável</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Termos de Uso</h1>
              <p className="mt-5 text-base leading-8 text-muted">
                Estes termos explicam as condições básicas para utilizar as ferramentas, a conta e os conteúdos do AnunciaAI.
              </p>
              <p className="mt-3 text-sm text-muted">Última atualização: 17 de agosto de 2026.</p>
            </div>
          </div>
        </section>

        <section className="container-page py-12 sm:py-16">
          <div className="max-w-3xl space-y-9">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">{section.title}</h2>
                <p className="mt-3 text-[15px] leading-7 text-muted">{section.text}</p>
              </section>
            ))}

            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-lg font-semibold">Antes de publicar</h2>
              <p className="mt-2 text-sm leading-6 text-muted">Revise o texto, confira os dados reais do produto e consulte as regras atuais da plataforma escolhida.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/#ferramenta" className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">Abrir gerador</Link>
                <Link href="/privacidade" className="rounded-xl border border-line-strong px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Política de privacidade</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
