import Link from "next/link";
import { PRO_PLANNED_FEATURES, PRO_PLANNED_PRICE_LABEL } from "@/lib/plans";

interface Plan {
  name: string;
  price: string;
  period?: string;
  badge: string;
  summary: string;
  features: readonly string[];
  cta: string;
  href: string;
  available?: boolean;
  plannedPrice?: boolean;
}

const plans: Plan[] = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "/mês",
    badge: "Disponível",
    summary: "Para criar anúncios, guardar resultados escolhidos e organizar produtos em uma conta simples.",
    features: [
      "10 geradores com login Google",
      "Sem cartão de crédito",
      "Histórico salvo manualmente",
      "Até 20 produtos salvos",
    ],
    cta: "Começar grátis",
    href: "#ferramenta",
    available: true,
  },
  {
    name: "Pro",
    price: PRO_PLANNED_PRICE_LABEL,
    period: "/mês",
    badge: "Planejado",
    summary: "Para quem cria conteúdo com frequência e quer mais espaço, velocidade e reutilização no fluxo de trabalho.",
    features: PRO_PLANNED_FEATURES,
    cta: "Acompanhar lançamento",
    href: "/entrar",
    plannedPrice: true,
  },
  {
    name: "Premium",
    price: "Depois",
    badge: "Em estudo",
    summary: "Uma camada futura para catálogos maiores, padronização de marca e operações com mais escala.",
    features: [
      "Tudo do Pro",
      "Fluxos em lote planejados",
      "Padrões e voz da marca",
      "Recursos avançados de catálogo",
    ],
    cta: "Acompanhar novidades",
    href: "/entrar",
  },
];

export function PricingSection() {
  return (
    <section id="precos" aria-labelledby="precos-titulo" className="border-y border-line bg-white">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 border-b border-line pb-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Planos</p>
            <h2 id="precos-titulo" className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-[2.35rem]">
              Comece sem custo. Evolua quando precisar.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              O modo Grátis libera os geradores atuais depois do login com Google. O Pro tem pacote e preço planejados, mas checkout e cobrança seguem desligados.
            </p>
          </div>
          <div className="border-l border-line pl-5 text-sm leading-6 text-muted">
            <p className="font-semibold text-ink">Nenhuma cobrança está ativa.</p>
            <p className="mt-1">O valor do Pro é uma proposta de lançamento e pode mudar antes da abertura.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex min-h-[370px] flex-col rounded-lg border bg-white p-6 ${plan.plannedPrice ? "border-ink" : "border-line"}`}
            >
              {plan.plannedPrice ? <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 rounded-t-lg bg-brand-500" /> : null}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.025em] text-ink">{plan.name}</h3>
                  <p className="mt-1 text-xs text-muted">{plan.badge}</p>
                </div>
                {plan.available ? <span className="size-2 rounded-full bg-emerald-500" aria-label="Plano disponível" /> : null}
              </div>

              <div className="mt-7">
                <p className="flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-[-0.04em] text-ink">{plan.price}</span>
                  {plan.period ? <span className="text-sm text-muted">{plan.period}</span> : null}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">{plan.summary}</p>
              </div>

              <div className="mt-6 border-t border-line pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">Inclui</p>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-5 text-ink-soft">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-7">
                {plan.available ? (
                  <a href={plan.href} className="interactive-lift block w-full rounded-md bg-ink px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-600">
                    {plan.cta}
                  </a>
                ) : (
                  <Link href={plan.href} className={`block w-full rounded-md border px-4 py-3 text-center text-sm font-semibold transition-colors ${plan.plannedPrice ? "border-ink bg-white text-ink hover:bg-ink hover:text-white" : "border-line-strong bg-white text-ink hover:border-brand-300 hover:text-brand-700"}`}>
                    {plan.cta}
                  </Link>
                )}
                {plan.plannedPrice ? <p className="mt-3 text-center text-[11px] leading-5 text-muted">Ainda não é possível contratar.</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "Preciso pagar para usar?",
    answer: "Não. O plano Grátis custa R$ 0 e libera os geradores atuais depois de um login simples com Google. Não pedimos cartão de crédito para usar o modo gratuito.",
  },
  {
    question: "Por que preciso entrar com Google?",
    answer: "Para manter o acesso simples e vincular histórico e produtos salvos à mesma conta. O login não inicia assinatura, não gera cobrança e o AnunciaAI não recebe sua senha do Google.",
  },
  {
    question: "O Pro já está disponível?",
    answer: `Ainda não. O pacote Pro está sendo preparado com preço planejado de ${PRO_PLANNED_PRICE_LABEL} por mês, mas checkout, cobrança e liberação de recursos pagos continuam desativados até o lançamento.`,
  },
  {
    question: "O conteúdo serve para Mercado Livre e Shopee?",
    answer: "Sim. Você escolhe o canal e recebe uma estrutura adaptada como primeira versão. Revise sempre os dados do produto e as regras atuais da plataforma antes de publicar.",
  },
  {
    question: "Meus dados de produto ficam salvos?",
    answer: "Por padrão, não. O conteúdo usado para gerar um anúncio não é salvo no banco de gerações; para o contador público guardamos apenas canal e horário. Quando você está conectado, só armazenamos conteúdo ou dados do produto se você clicar explicitamente em “Salvar no histórico” ou “Salvar produto”.",
  },
];

export function FaqSection() {
  return (
    <section aria-labelledby="faq-titulo" className="bg-canvas">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Dúvidas</p>
            <h2 id="faq-titulo" className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink">Perguntas frequentes</h2>
            <p className="mt-4 text-sm leading-6 text-muted">Acesso, conta, dados e próximos planos.</p>
          </div>

          <div className="border-t border-line">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-line py-5 sm:py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[15px] font-semibold text-ink">
                  {faq.question}
                  <span aria-hidden="true" className="text-lg font-normal text-muted transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl pr-8 text-sm leading-6 text-muted">{faq.answer}</p>
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
    <footer className="border-t border-line bg-white">
      <div className="container-page py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="AnunciaAI, página inicial">
              <span className="relative grid size-8 place-items-center rounded-[9px] bg-ink text-[13px] font-bold text-white">
                A
                <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 size-2 rounded-full border-2 border-white bg-brand-500" />
              </span>
              <span className="text-[17px] font-semibold tracking-[-0.035em] text-ink">Anuncia<span className="text-brand-600">AI</span></span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted">
              Ferramentas para criar, organizar e reutilizar conteúdo de produtos em diferentes canais de venda.
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="grid gap-8 text-sm sm:grid-cols-3 sm:gap-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">Produto</p>
              <div className="mt-4 grid gap-2.5 text-ink-soft">
                <Link href="/ferramentas" className="hover:text-brand-700">Ferramentas</Link>
                <Link href="/guias" className="hover:text-brand-700">Guias</Link>
                <Link href="/#precos" className="hover:text-brand-700">Preços</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">Conta</p>
              <div className="mt-4 grid gap-2.5 text-ink-soft">
                <Link href="/entrar" className="hover:text-brand-700">Entrar</Link>
                <Link href="/conta" className="hover:text-brand-700">Minha conta</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">Empresa</p>
              <div className="mt-4 grid gap-2.5 text-ink-soft">
                <Link href="/sobre" className="hover:text-brand-700">Sobre</Link>
                <Link href="/privacidade" className="hover:text-brand-700">Privacidade</Link>
                <Link href="/termos" className="hover:text-brand-700">Termos</Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AnunciaAI.</p>
          <p>Revise o conteúdo antes de publicar.</p>
        </div>
      </div>
    </footer>
  );
}
