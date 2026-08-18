import Link from "next/link";

/**
 * Mantido como export para preservar compatibilidade com a Home, mas os modos
 * comerciais agora vivem exclusivamente dentro da conta autenticada.
 */
export function PricingSection() {
  return null;
}

const faqs = [
  {
    question: "Preciso pagar para usar?",
    answer: "Não para começar. O modo Grátis continua disponível depois do login e já libera os geradores atuais. Outros modos ficam disponíveis dentro da área da conta.",
  },
  {
    question: "Existe um modo Pro?",
    answer: "Sim. O Pro existe como modo adicional para contas autenticadas e possui recursos exclusivos. Detalhes de contratação e gerenciamento ficam dentro da conta, não na página principal.",
  },
  {
    question: "E o Premium?",
    answer: "O Premium continua planejado. Fluxos em lote, voz da marca e recursos avançados de catálogo ainda não são apresentados como disponíveis.",
  },
  {
    question: "O conteúdo serve para Mercado Livre e Shopee?",
    answer: "Sim. Você escolhe o canal e recebe uma estrutura adaptada como primeira versão. Revise sempre os dados do produto e as regras atuais da plataforma antes de publicar.",
  },
  {
    question: "Meus dados de produto ficam salvos?",
    answer: "Por padrão, não. Quando você está conectado, conteúdo ou dados do produto só são armazenados se você clicar explicitamente em salvar no histórico ou salvar produto.",
  },
];

export function FaqSection() {
  return (
    <section aria-labelledby="faq-titulo" className="bg-white">
      <div className="container-page py-20 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">Dúvidas</p>
            <h2 id="faq-titulo" className="mt-5 text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.055em] text-ink">Antes de começar.</h2>
            <p className="mt-6 max-w-xs text-[15px] leading-7 text-muted">Respostas diretas sobre acesso, conta e dados do AnunciaAI.</p>
          </div>

          <div className="border-y border-line">
            {faqs.map((faq, index) => (
              <details key={faq.question} className={`group py-6 sm:py-7 ${index < faqs.length - 1 ? "border-b border-line" : ""}`}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-[16px] font-semibold tracking-[-0.02em] text-ink">
                  {faq.question}
                  <span aria-hidden="true" className="shrink-0 text-xl font-normal text-muted transition-all group-open:rotate-45 group-open:text-brand-700">+</span>
                </summary>
                <p className="mt-5 max-w-3xl pr-10 text-[15px] leading-7 text-muted">{faq.answer}</p>
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
    <footer className="relative overflow-hidden border-t border-[#25262a] bg-[#0e0f12] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-56 -top-72 size-[700px] rounded-full bg-brand-500/[0.055] blur-3xl" />
      </div>

      <div className="container-page relative py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/[0.09] pb-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/34">
              <span className="h-5 w-[2px] bg-brand-500" />
              Comece pelo produto
            </div>
            <h2 className="mt-6 text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.06em] text-white sm:text-[3.5rem]">Transforme as informações do produto em uma primeira versão organizada.</h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/42">Use o gerador completo, revise cada bloco e escolha o canal onde o conteúdo será usado.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/#ferramenta" className="interactive-lift inline-flex min-h-14 items-center justify-center rounded-[8px] bg-brand-500 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600">Criar anúncio grátis <span aria-hidden="true" className="ml-2.5">→</span></Link>
            <Link href="/entrar" className="inline-flex min-h-14 items-center justify-center rounded-[8px] border border-white/12 bg-white/[0.02] px-6 text-[15px] font-semibold text-white/70 transition-colors hover:bg-white/[0.05] hover:text-white">Entrar na conta</Link>
          </div>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24">
          <div className="max-w-lg">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="AnunciaAI, página inicial">
              <span className="relative grid size-10 place-items-center overflow-hidden rounded-[8px] bg-white text-[15px] font-extrabold text-[#151619]">A<span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] bg-brand-500" /></span>
              <span className="text-[20px] font-semibold tracking-[-0.05em] text-white">Anuncia<span className="text-brand-300">AI</span></span>
            </Link>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/42">Crie, organize e compare conteúdo de produtos para diferentes canais de venda.</p>
          </div>

          <nav aria-label="Links do rodapé" className="grid gap-10 text-sm sm:grid-cols-3 sm:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/26">Produto</p>
              <div className="mt-5 grid gap-4 text-white/56">
                <Link href="/ferramentas" className="hover:text-white">Ferramentas</Link>
                <Link href="/guias" className="hover:text-white">Guias</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/26">Conta</p>
              <div className="mt-5 grid gap-4 text-white/56">
                <Link href="/entrar" className="hover:text-white">Entrar</Link>
                <Link href="/conta" className="hover:text-white">Minha conta</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/26">Empresa</p>
              <div className="mt-5 grid gap-4 text-white/56">
                <Link href="/sobre" className="hover:text-white">Sobre</Link>
                <Link href="/privacidade" className="hover:text-white">Privacidade</Link>
                <Link href="/termos" className="hover:text-white">Termos</Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.09] pt-7 text-[11px] leading-5 text-white/28 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AnunciaAI. Conteúdo deve ser revisado antes da publicação.</p>
          <p>Conta gratuita disponível · modos adicionais dentro da conta</p>
        </div>
      </div>
    </footer>
  );
}
