import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/privacidade";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Entenda quais dados o AnunciaAI processa, o que é armazenado e como as métricas de uso são utilizadas.",
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: ABSOLUTE_URL,
    siteName: "AnunciaAI",
    title: "Política de Privacidade | AnunciaAI",
    description: "Entenda quais dados o AnunciaAI processa, o que é armazenado e como as métricas de uso são utilizadas.",
  },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Dados informados na ferramenta",
    paragraphs: [
      "Os dados digitados nos campos do gerador, como nome, categoria, preço, público e características do produto, são usados para montar o resultado exibido na própria página.",
      "A geração do texto acontece no navegador. Para registrar o contador de uso, o site envia ao servidor somente o canal selecionado, como Mercado Livre, Shopee, OLX ou loja virtual.",
    ],
  },
  {
    title: "2. O que fica armazenado",
    paragraphs: [
      "O registro técnico da geração não guarda o nome do produto, categoria, preço, público, título gerado nem as características digitadas. O banco mantém apenas informações mínimas necessárias ao contador e à operação, como o canal utilizado e o horário da geração.",
    ],
  },
  {
    title: "3. Métricas de navegação",
    paragraphs: [
      "O AnunciaAI utiliza o Vercel Web Analytics para entender, de forma agregada, o uso do site e melhorar desempenho, páginas e recursos. Essas métricas podem incluir informações técnicas e de navegação disponibilizadas pelo serviço de analytics.",
    ],
  },
  {
    title: "4. Cadastro e pagamento",
    paragraphs: [
      "A versão atual pode ser usada sem criar conta e sem informar cartão de crédito. Enquanto os planos pagos estiverem marcados como “Em breve”, o AnunciaAI não realiza cobrança por esses planos no site.",
    ],
  },
  {
    title: "5. Finalidade e minimização",
    paragraphs: [
      "Coletamos apenas o necessário para operar a ferramenta, medir o uso e melhorar a experiência. Sempre que uma informação deixa de ser necessária para essas finalidades, buscamos reduzir, anonimizar ou eliminar seu uso.",
    ],
  },
  {
    title: "6. Segurança e terceiros",
    paragraphs: [
      "Adotamos medidas técnicas compatíveis com o estágio atual do serviço para reduzir riscos de acesso indevido. Serviços de infraestrutura e métricas, como a Vercel, podem processar dados técnicos necessários para hospedar e medir o site segundo as próprias políticas desses fornecedores.",
    ],
  },
  {
    title: "7. Direitos do usuário",
    paragraphs: [
      "Nos termos da legislação aplicável, inclusive a LGPD quando pertinente, o usuário pode solicitar informações sobre o tratamento de dados e exercer os direitos previstos em lei. Como o AnunciaAI não exige conta na versão atual e minimiza os registros de geração, pode não existir informação pessoal vinculável a um usuário específico no banco de gerações.",
    ],
  },
  {
    title: "8. Alterações desta política",
    paragraphs: [
      "Esta política pode ser atualizada quando o produto ganhar novas funcionalidades, integrações, contas ou formas de pagamento. A versão publicada nesta página é a versão vigente.",
    ],
  },
];

export default function PrivacidadePage() {
  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main id="ferramenta">
        <section className="border-b border-line bg-white">
          <div className="container-page py-10 sm:py-16">
            <nav aria-label="Trilha de navegação" className="text-xs text-muted">
              <Link href="/" className="transition-colors hover:text-ink">Início</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page" className="font-medium text-ink-soft">Privacidade</span>
            </nav>
            <div className="mt-10 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Transparência</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Política de Privacidade</h1>
              <p className="mt-5 text-base leading-8 text-muted">
                Esta página explica de forma direta quais informações o AnunciaAI processa e quais dados são mantidos para o funcionamento do serviço.
              </p>
              <p className="mt-3 text-sm text-muted">Última atualização: 16 de agosto de 2026.</p>
            </div>
          </div>
        </section>

        <section className="container-page py-12 sm:py-16">
          <div className="max-w-3xl space-y-10">
            {sections.map((section) => (
              <section key={section.title} aria-labelledby={section.title.replace(/[^a-zA-Z0-9]/g, "-")}>
                <h2 id={section.title.replace(/[^a-zA-Z0-9]/g, "-")} className="text-xl font-semibold text-ink sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[15px] leading-7 text-muted">{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-lg font-semibold">Continue usando o AnunciaAI</h2>
              <p className="mt-2 text-sm leading-6 text-muted">Volte para a ferramenta ou consulte os guias gratuitos antes de publicar seus produtos.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/#ferramenta" className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">Abrir gerador</Link>
                <Link href="/guias" className="rounded-xl border border-line-strong px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver guias</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
