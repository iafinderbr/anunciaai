import Link from "next/link";
import { PREMIUM_PLANNED_FEATURES, PRO_FEATURES, PRO_FUTURE_PRICE_LABEL } from "@/lib/plans";

interface Plan {
  name: string;
  price: string;
  period?: string;
  badge: string;
  summary: string;
  features: readonly string[];
  cta: string;
  href: string;
  featured?: boolean;
  planned?: boolean;
}

const plans: Plan[] = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "/mês",
    badge: "Disponível",
    summary: "Para criar e organizar conteúdo de produtos com os geradores atuais.",
    features: ["10 geradores", "Login Google", "Histórico opt-in", "Até 20 produtos salvos"],
    cta: "Começar grátis",
    href: "#ferramenta",
  },
  {
    name: "Pro",
    price: "R$ 0",
    period: "no acesso antecipado",
    badge: "Disponível agora",
    summary: "Para comparar mais abordagens do mesmo produto e testar primeiro os novos recursos Pro.",
    features: PRO_FEATURES,
    cta: "Ativar acesso Pro",
    href: "/conta/plano",
    featured: true,
  },
  {
    name: "Premium",
    price: "Planejado",
    badge: "Próxima camada",
    summary: "Para operações maiores que precisem de escala, catálogo e padronização de marca.",
    features: PREMIUM_PLANNED_FEATURES,
    cta: "Ver plano da conta",
    href: "/conta/plano",
    planned: true,
  },
];

function Check({ inverse = false }: { inverse?: boolean }) {
  return <span aria-hidden="true" className={`mt-0.5 shrink-0 text-sm font-semibold ${inverse ? "text-brand-300" : "text-brand-700"}`}>✓</span>;
}

export function PricingSection() {
  return (
    <section id="precos" aria-labelledby="precos-titulo" className="border-y border-line bg-[#f1f1ee]">
      <div className="container-page py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end lg:gap-20">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">Planos</p>
            <h2 id="precos-titulo" className="mt-5 text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.055em] text-ink sm:text-[3.4rem]">
              Grátis para começar. Pro já em jogo.
            </h2>
          </div>
          <p className="text-[15px] leading-7 text-muted">
            O Pro está disponível em acesso antecipado sem cobrança. O Premium continua planejado para uma etapa posterior.
          </p>
        </div>

        <div className="mt-14 grid border-y border-line lg:grid-cols-3">
          {plans.map((plan, index) => {
            const featured = Boolean(plan.featured);
            return (
              <article
                key={plan.name}
                className={`relative flex min-h-[520px] flex-col px-7 py-9 sm:px-8 ${featured ? "bg-[#0f1013] text-white" : "bg-white text-ink"} ${index < plans.length - 1 ? "border-b border-line lg:border-b-0 lg:border-r" : ""}`}
              >
                {featured ? <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-brand-500" /> : null}

                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${featured ? "text-brand-300" : "text-brand-700"}`}>{plan.badge}</p>
                    <h3 className={`mt-3 text-[1.45rem] font-semibold tracking-[-0.04em] ${featured ? "text-white" : "text-ink"}`}>{plan.name}</h3>
                  </div>
                  {featured ? <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-emerald-300">Acesso ativo</span> : plan.planned ? <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-muted">Planejado</span> : null}
                </div>

                <div className="mt-10">
                  <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className={`text-[3.1rem] font-semibold leading-none tracking-[-0.07em] ${featured ? "text-white" : "text-ink"}`}>{plan.price}</span>
                    {plan.period ? <span className={`text-sm ${featured ? "text-white/38" : "text-muted"}`}>{plan.period}</span> : null}
                  </p>
                  <p className={`mt-5 text-[15px] leading-7 ${featured ? "text-white/52" : "text-muted"}`}>{plan.summary}</p>
                </div>

                <div className={`mt-8 border-t pt-7 ${featured ? "border-white/[0.10]" : "border-line"}`}>
                  <p className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${featured ? "text-white/30" : "text-muted"}`}>Inclui</p>
                  <ul className="mt-5 divide-y divide-line/70">
                    {plan.features.map((feature) => (
                      <li key={feature} className={`flex items-start gap-3 py-3.5 text-sm leading-6 ${featured ? "border-white/[0.08] text-white/70" : "text-ink-soft"}`}>
                        <Check inverse={featured} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-9">
                  {plan.name === "Grátis" ? (
                    <a href={plan.href} className="interactive-lift flex min-h-12 w-full items-center justify-center rounded-[8px] bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                      {plan.cta} <span aria-hidden="true" className="ml-2">→</span>
                    </a>
                  ) : (
                    <Link href={plan.href} className={`flex min-h-12 w-full items-center justify-center rounded-[8px] px-5 text-sm font-semibold transition-colors ${featured ? "bg-white text-[#151619] hover:bg-brand-500 hover:text-white" : "border border-line-strong bg-white text-ink hover:border-brand-300 hover:text-brand-700"}`}>
                      {plan.cta}
                    </Link>
                  )}
                  {featured ? <p className="mt-4 text-center text-[10px] leading-5 text-white/30">Sem cartão. Preço comercial de referência futuro: {PRO_FUTURE_PRICE_LABEL}/mês.</p> : null}
                  {plan.planned ? <p className="mt-4 text-center text-[10px] leading-5 text-muted">Recursos e preço ainda não estão disponíveis.</p> : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid border-y border-line bg-white text-xs leading-5 text-muted sm:grid-cols-3">
          <div className="px-6 py-5 sm:border-r sm:border-line">
            <p className="font-semibold text-ink">Pro sem cobrança agora</p>
            <p className="mt-1">O acesso antecipado pode ser ativado pela conta.</p>
          </div>
          <div className="border-t border-line px-6 py-5 sm:border-r sm:border-t-0 sm:border-line">
            <p className="font-semibold text-ink">Cobrança futura separada</p>
            <p className="mt-1">Nenhum cartão ou assinatura paga é criado nesta fase.</p>
          </div>
          <div className="border-t border-line px-6 py-5 sm:border-t-0">
            <p className="font-semibold text-ink">Premium continua planejado</p>
            <p className="mt-1">Sem prometer data, preço ou contratação antes da implementação.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "Preciso pagar para usar?",
    answer: "Não. O plano Grátis custa R$ 0. O Pro também está sem cobrança durante o acesso antecipado e pode ser ativado pela área de plano da conta.",
  },
  {
    question: "O Pro já está disponível?",
    answer: `Sim. O Pro está disponível em acesso antecipado sem cobrança e já possui um laboratório exclusivo para comparar três versões do mesmo produto. O preço comercial de referência futuro é ${PRO_FUTURE_PRICE_LABEL}/mês, mas checkout e cobrança continuam desligados.`,
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
            <p className="mt-6 max-w-xs text-[15px] leading-7 text-muted">Respostas diretas sobre acesso, planos e dados do AnunciaAI.</p>
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
            <Link href="/conta/plano" className="inline-flex min-h-14 items-center justify-center rounded-[8px] border border-white/12 bg-white/[0.02] px-6 text-[15px] font-semibold text-white/70 transition-colors hover:bg-white/[0.05] hover:text-white">Ver planos</Link>
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
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/26">Produto</p><div className="mt-5 grid gap-4 text-white/56"><Link href="/ferramentas" className="hover:text-white">Ferramentas</Link><Link href="/guias" className="hover:text-white">Guias</Link><Link href="/#precos" className="hover:text-white">Preços</Link></div></div>
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/26">Conta</p><div className="mt-5 grid gap-4 text-white/56"><Link href="/entrar" className="hover:text-white">Entrar</Link><Link href="/conta/plano" className="hover:text-white">Plano</Link></div></div>
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/26">Empresa</p><div className="mt-5 grid gap-4 text-white/56"><Link href="/sobre" className="hover:text-white">Sobre</Link><Link href="/privacidade" className="hover:text-white">Privacidade</Link><Link href="/termos" className="hover:text-white">Termos</Link></div></div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/[0.09] pt-7 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AnunciaAI.</p>
          <p>Revise o conteúdo antes de publicar.</p>
        </div>
      </div>
    </footer>
  );
}
