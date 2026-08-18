import Link from "next/link";

/**
 * Mantido como export para preservar compatibilidade. Os modos comerciais
 * vivem exclusivamente dentro da conta autenticada.
 */
export function PricingSection() {
  return null;
}

const faqs = [
  {
    question: "Preciso pagar para usar?",
    answer: "Não para começar. O modo Grátis libera os geradores atuais depois do login e não exige cartão de crédito.",
  },
  {
    question: "Quais canais são atendidos?",
    answer: "Há fluxos para Mercado Livre, Shopee, OLX, Facebook Marketplace, Instagram e loja virtual, além de geradores focados em títulos, descrições e outras partes do conteúdo.",
  },
  {
    question: "Meus dados ficam salvos automaticamente?",
    answer: "Não. Histórico e produtos só recebem conteúdo quando você está conectado e escolhe explicitamente salvar.",
  },
  {
    question: "O AnunciaAI publica o anúncio por mim?",
    answer: "Não. A ferramenta organiza uma primeira versão para revisão. A conferência dos dados e a publicação final continuam sob seu controle.",
  },
] as const;

export function FaqSection() {
  return (
    <section aria-labelledby="faq-titulo" className="border-b border-white/[0.08] bg-[#0d0e11] text-white">
      <div className="container-page py-12 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/28">
              <span className="h-5 w-[2px] bg-brand-500" />
              Dúvidas
            </div>
            <h2 id="faq-titulo" className="mt-4 text-2xl font-semibold tracking-[-0.045em] text-white">Antes de usar.</h2>
            <p className="mt-3 text-xs leading-6 text-white/34">Só o essencial sobre acesso, canais e dados.</p>
          </div>

          <div className="border-y border-white/[0.09]">
            {faqs.map((faq, index) => (
              <details key={faq.question} className={`group py-4 sm:py-5 ${index < faqs.length - 1 ? "border-b border-white/[0.09]" : ""}`}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-sm font-semibold text-white/82 transition-colors hover:text-white">
                  {faq.question}
                  <span aria-hidden="true" className="shrink-0 text-lg font-normal text-white/22 transition-all group-open:rotate-45 group-open:text-brand-300">+</span>
                </summary>
                <p className="mt-4 max-w-3xl pr-8 text-sm leading-6 text-white/40">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#090a0c] text-white">
      <div className="container-page py-9 sm:py-10">
        <div className="flex flex-col gap-6 border-b border-white/[0.08] pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="AnunciaAI, página inicial">
              <span className="relative grid size-9 place-items-center border border-white/[0.13] bg-[#15161a] text-[13px] font-extrabold text-white">
                A
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-500" />
              </span>
              <span className="text-[19px] font-semibold tracking-[-0.05em] text-white">Anuncia<span className="text-brand-300">AI</span></span>
            </Link>
            <p className="mt-3 text-xs leading-6 text-white/32">Conteúdo de produto organizado para revisar antes de publicar.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link href="/#ferramenta" className="inline-flex min-h-11 items-center justify-center bg-brand-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600">Criar anúncio →</Link>
            <Link href="/entrar" className="inline-flex min-h-11 items-center justify-center border border-white/[0.11] px-5 text-sm font-semibold text-white/62 transition-colors hover:bg-white/[0.04] hover:text-white">Entrar</Link>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Links do rodapé" className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/42">
            <Link href="/ferramentas" className="hover:text-white">Ferramentas</Link>
            <Link href="/guias" className="hover:text-white">Guias</Link>
            <Link href="/sobre" className="hover:text-white">Sobre</Link>
            <Link href="/privacidade" className="hover:text-white">Privacidade</Link>
            <Link href="/termos" className="hover:text-white">Termos</Link>
          </nav>

          <p className="text-[10px] leading-5 text-white/24">© 2026 AnunciaAI · Revise o conteúdo antes da publicação.</p>
        </div>
      </div>
    </footer>
  );
}
