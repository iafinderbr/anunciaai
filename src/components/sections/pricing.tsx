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
    summary: "Para criar anúncios, salvar o que importa e organizar seus produtos em uma conta simples.",
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
    summary: "Para quem cria conteúdo com frequência e quer ganhar espaço, velocidade e reutilização no dia a dia.",
    features: PRO_PLANNED_FEATURES,
    cta: "Entrar para acompanhar",
    href: "/entrar",
    plannedPrice: true,
  },
  {
    name: "Premium",
    price: "Depois",
    badge: "Em estudo",
    summary: "Uma camada futura para catálogos maiores, padronização de marca e fluxos com mais escala.",
    features: [
      "Tudo do Pro",
      "Fluxos em lote planejados",
      "Padrões e voz da marca",
      "Recursos avançados de catálogo",
    ],
    cta: "Entrar para acompanhar",
    href: "/entrar",
  },
];

export function PricingSection() {
  return (
    <section id="precos" aria-labelledby="precos-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.48fr)] lg:items-end lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-600">Planos</p>
            <h2 id="precos-titulo" className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Comece com o necessário. Evolua quando o uso pedir.
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-muted">
              O plano Grátis libera todos os geradores atuais depois de um login simples com Google. O Pro já tem pacote e preço planejados, mas checkout e cobrança continuam desligados.
            </p>
          </div>
          <div className="surface-premium rounded-2xl px-5 py-4 text-sm leading-6 text-muted lg:text-right">
            <span className="font-semibold text-ink-soft">Nenhuma cobrança ativa.</span> O valor do Pro é uma proposta de lançamento e ainda pode mudar antes da abertura.
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex min-h-[390px] flex-col overflow-hidden rounded-[1.4rem] border p-5 sm:p-6 ${
                plan.plannedPrice
                  ? "border-ink bg-[#111318] text-white shadow-lift"
                  : plan.available
                    ? "border-line-strong bg-white shadow-card"
                    : "border-line bg-canvas/75"
              }`}
            >
              {plan.plannedPrice ? (
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(65%_100%_at_50%_0%,rgba(255,92,26,0.19),transparent_74%)]" />
              ) : null}

              <div className="relative flex items-center justify-between gap-3">
                <h3 className={`text-lg font-semibold tracking-tight ${plan.plannedPrice ? "text-white" : "text-ink"}`}>{plan.name}</h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${
                    plan.plannedPrice
                      ? "border border-white/10 bg-white/[0.06] text-brand-200"
                      : plan.available
                        ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border border-line-strong bg-white text-muted"
                  }`}
                >
                  {plan.badge}
                </span>
              </div>

              <div className="relative mt-6">
                <p className="flex items-baseline gap-1">
                  <span className={`text-3xl font-semibold tracking-tight ${plan.plannedPrice ? "text-white" : "text-ink"}`}>{plan.price}</span>
                  {plan.period ? <span className={plan.plannedPrice ? "text-sm text-white/45" : "text-sm text-muted"}>{plan.period}</span> : null}
                </p>
                <p className={`mt-3 text-sm leading-6 ${plan.plannedPrice ? "text-white/58" : "text-muted"}`}>{plan.summary}</p>
              </div>

              <div className={`relative mt-6 border-t pt-5 ${plan.plannedPrice ? "border-white/10" : "border-line"}`}>
                <p className={`text-[10px] font-semibold uppercase tracking-[0.11em] ${plan.plannedPrice ? "text-white/35" : "text-muted"}`}>Inclui</p>
                <ul className="mt-4 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <span
                        aria-hidden="true"
                        className={`mt-1.5 size-1.5 shrink-0 rounded-full ${plan.plannedPrice ? "bg-brand-500" : "bg-brand-500/80"}`}
                      />
                      <span className={plan.plannedPrice ? "text-white/70" : "text-ink-soft"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-auto pt-7">
                {plan.available ? (
                  <a
                    href={plan.href}
                    className="interactive-lift block w-full rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-600"
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <Link
                    href={plan.href}
                    className={`interactive-lift block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold ${
                      plan.plannedPrice
                        ? "border border-white/12 bg-white text-ink hover:bg-brand-500 hover:text-white"
                        : "border border-line-strong bg-white text-ink hover:border-brand-300 hover:text-brand-700"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                )}
                {plan.plannedPrice ? (
                  <p className="mt-3 text-center text-[11px] leading-5 text-white/38">Preço planejado. Ainda não é possível contratar.</p>
                ) : null}
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
    <section aria-labelledby="faq-titulo" className="container-page py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-600">Dúvidas</p>
          <h2 id="faq-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Perguntas frequentes</h2>
          <p className="mt-3 text-[15px] leading-7 text-muted">Respostas rápidas sobre acesso, conta, dados e próximos planos.</p>
        </div>
        <div className="surface-premium overflow-hidden rounded-2xl">
          {faqs.map((faq, index) => (
            <details key={faq.question} className={`group px-5 py-5 sm:px-6 sm:py-6 ${index < faqs.length - 1 ? "border-b border-line" : ""}`}>
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
        <div className="flex flex-col gap-9 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="AnunciaAI, página inicial">
              <span className="grid size-9 place-items-center rounded-xl bg-ink text-sm font-bold text-white shadow-card">A</span>
              <span className="text-[17px] font-semibold tracking-tight">Anuncia<span className="text-brand-600">AI</span></span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted">
              Workspace brasileiro para criar, organizar e reutilizar conteúdo de produtos sem complicar o processo.
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

      <div className="border-t border-line bg-canvas/55">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AnunciaAI. Feito no Brasil para quem vende online.</p>
          <p>Conteúdo gerado deve ser revisado antes da publicação.</p>
        </div>
      </div>
    </footer>
  );
}
