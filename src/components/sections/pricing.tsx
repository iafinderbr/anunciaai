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
    badge: "Disponível agora",
    summary: "Para usar todos os geradores atuais e manter seu trabalho organizado em uma conta simples.",
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
    badge: "Preço planejado",
    summary: "Para quem cria conteúdo com frequência e quer mais velocidade, reutilização e espaço para trabalhar.",
    features: PRO_PLANNED_FEATURES,
    cta: "Ver detalhes do Pro",
    href: "/conta/plano",
    plannedPrice: true,
  },
  {
    name: "Premium",
    price: "Depois",
    badge: "Em estudo",
    summary: "Uma camada futura para catálogos maiores e fluxos que precisem de escala e padronização.",
    features: [
      "Tudo do Pro",
      "Fluxos em lote planejados",
      "Padrões e voz da marca",
      "Recursos avançados de catálogo",
    ],
    cta: "Acompanhar pela conta",
    href: "/conta/plano",
  },
];

export function PricingSection() {
  return (
    <section id="precos" aria-labelledby="precos-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.52fr)] lg:items-end lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-600">Planos</p>
            <h2 id="precos-titulo" className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Entre grátis. Evolua só quando fizer sentido.
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-muted">
              O plano Grátis libera todos os geradores atuais após um login simples com Google. O Pro já tem pacote e preço planejados, mas ainda não existe checkout nem cobrança ativa.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-canvas px-4 py-3.5 text-sm leading-6 text-muted lg:text-right">
            <span className="font-semibold text-ink-soft">Sem cobrança ativa.</span> O valor do Pro é uma proposta de lançamento e pode ser ajustado antes da abertura.
          </div>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex min-h-[360px] flex-col rounded-2xl border p-5 sm:p-6 ${
                plan.available
                  ? "border-ink bg-ink text-white shadow-lift"
                  : plan.plannedPrice
                    ? "border-brand-200 bg-brand-50/35 shadow-card"
                    : "border-line bg-canvas/70"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className={`text-lg font-semibold tracking-tight ${plan.available ? "text-white" : "text-ink"}`}>{plan.name}</h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${
                    plan.available
                      ? "bg-white/10 text-white/75"
                      : plan.plannedPrice
                        ? "border border-brand-200 bg-white text-brand-700"
                        : "border border-line-strong bg-white text-muted"
                  }`}
                >
                  {plan.badge}
                </span>
              </div>

              <p className="mt-5 flex items-baseline gap-1">
                <span className={`text-3xl font-semibold tracking-tight ${plan.available ? "text-white" : "text-ink"}`}>{plan.price}</span>
                {plan.period ? <span className={plan.available ? "text-sm text-white/55" : "text-sm text-muted"}>{plan.period}</span> : null}
              </p>
              <p className={`mt-3 text-sm leading-6 ${plan.available ? "text-white/65" : "text-muted"}`}>{plan.summary}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <span
                      aria-hidden="true"
                      className={`mt-1 size-1.5 shrink-0 rounded-full ${plan.available ? "bg-brand-500" : "bg-brand-500/80"}`}
                    />
                    <span className={plan.available ? "text-white/78" : "text-ink-soft"}>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.available ? (
                <a
                  href={plan.href}
                  className="interactive-lift mt-7 w-full rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-ink hover:bg-brand-500 hover:text-white"
                >
                  {plan.cta}
                </a>
              ) : (
                <Link
                  href={plan.href}
                  className="interactive-lift mt-7 w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-center text-sm font-semibold text-ink hover:border-brand-300 hover:text-brand-700"
                >
                  {plan.cta}
                </Link>
              )}
              {plan.plannedPrice ? (
                <p className="mt-3 text-center text-[11px] leading-5 text-muted">Preço planejado. Ainda não é possível contratar.</p>
              ) : null}
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
    <section aria-labelledby="faq-titulo" className="container-page py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-600">Dúvidas</p>
          <h2 id="faq-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Perguntas frequentes</h2>
          <p className="mt-3 text-[15px] leading-7 text-muted">Respostas rápidas sobre acesso, conta, dados e próximos planos.</p>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5 sm:py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-ink">
                {faq.question}
                <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full border border-line-strong bg-white text-muted transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-3xl pr-10 text-sm leading-6 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page py-10 sm:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="AnunciaAI, página inicial">
              <span className="grid size-8 place-items-center rounded-lg bg-ink text-sm font-bold text-white">A</span>
              <span className="text-[17px] font-semibold tracking-tight">Anuncia<span className="text-brand-600">AI</span></span>
            </Link>
            <p className="mt-3 text-sm leading-6 text-muted">
              Ferramentas simples para criar, organizar e reutilizar conteúdo de produtos sem complicar o processo.
            </p>
            <Link href="/#ferramenta" className="interactive-lift mt-5 inline-flex rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">
              Criar anúncio grátis
            </Link>
          </div>

          <nav aria-label="Links do rodapé" className="grid gap-7 text-sm sm:grid-cols-3 sm:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">Produto</p>
              <div className="mt-3 grid gap-2.5 text-muted">
                <Link href="/ferramentas" className="transition-colors hover:text-brand-600">Ferramentas</Link>
                <Link href="/guias" className="transition-colors hover:text-brand-600">Guias</Link>
                <Link href="/#precos" className="transition-colors hover:text-brand-600">Preços</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">Acesso</p>
              <div className="mt-3 grid gap-2.5 text-muted">
                <Link href="/entrar" className="transition-colors hover:text-brand-600">Entrar ou criar conta</Link>
                <Link href="/ferramentas" className="transition-colors hover:text-brand-600">Central do AnunciaAI</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">Institucional</p>
              <div className="mt-3 grid gap-2.5 text-muted">
                <Link href="/sobre" className="transition-colors hover:text-brand-600">Sobre</Link>
                <Link href="/privacidade" className="transition-colors hover:text-brand-600">Privacidade</Link>
                <Link href="/termos" className="transition-colors hover:text-brand-600">Termos</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AnunciaAI. Feito no Brasil para quem vende online.</p>
          <p>Conteúdo gerado deve ser revisado antes da publicação.</p>
        </div>
      </div>
    </footer>
  );
}
