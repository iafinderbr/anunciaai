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
    summary: "Para começar a criar, organizar e reutilizar conteúdo de produtos sem cartão de crédito.",
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
    badge: "Próximo passo",
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

function Check({ inverse = false }: { inverse?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-[10px] font-bold ${
        inverse ? "bg-brand-500/16 text-brand-300" : "bg-brand-50 text-brand-700"
      }`}
    >
      ✓
    </span>
  );
}

export function PricingSection() {
  return (
    <section id="precos" aria-labelledby="precos-titulo" className="border-y border-line bg-[#f4f4f1]">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Planos</p>
          <h2 id="precos-titulo" className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-[2.65rem]">
            Comece grátis. Só evolua quando fizer sentido.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-muted">
            O plano Grátis já libera os geradores atuais. O Pro tem pacote e preço planejados, mas checkout e cobrança continuam desligados.
          </p>
        </div>

        <div className="mt-11 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => {
            const featured = Boolean(plan.plannedPrice);

            return (
              <article
                key={plan.name}
                className={`relative flex min-h-[430px] flex-col overflow-hidden rounded-2xl border p-6 sm:p-7 ${
                  featured
                    ? "border-[#24252a] bg-[#111216] text-white shadow-[0_28px_80px_-42px_rgba(0,0,0,.72)]"
                    : "border-line bg-white text-ink shadow-[0_18px_50px_-44px_rgba(23,23,20,.3)]"
                }`}
              >
                {featured ? (
                  <div className="absolute inset-x-0 top-0 h-1 bg-brand-500" aria-hidden="true" />
                ) : null}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.13em] ${featured ? "text-brand-300" : "text-brand-700"}`}>
                      {plan.badge}
                    </p>
                    <h3 className={`mt-3 text-xl font-semibold tracking-[-0.035em] ${featured ? "text-white" : "text-ink"}`}>
                      {plan.name}
                    </h3>
                  </div>
                  {plan.available ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
                      <span className="size-1.5 rounded-full bg-emerald-500" /> Ativo
                    </span>
                  ) : null}
                </div>

                <div className="mt-8">
                  <p className="flex items-baseline gap-1.5">
                    <span className={`text-[2.7rem] font-semibold leading-none tracking-[-0.055em] ${featured ? "text-white" : "text-ink"}`}>
                      {plan.price}
                    </span>
                    {plan.period ? <span className={`text-sm ${featured ? "text-white/42" : "text-muted"}`}>{plan.period}</span> : null}
                  </p>
                  <p className={`mt-4 text-sm leading-6 ${featured ? "text-white/55" : "text-muted"}`}>{plan.summary}</p>
                </div>

                <div className={`mt-7 border-t pt-6 ${featured ? "border-white/10" : "border-line"}`}>
                  <p className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${featured ? "text-white/34" : "text-muted"}`}>Inclui</p>
                  <ul className="mt-4 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className={`flex items-start gap-3 text-sm leading-5 ${featured ? "text-white/72" : "text-ink-soft"}`}>
                        <Check inverse={featured} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  {plan.available ? (
                    <a href={plan.href} className="interactive-lift block w-full rounded-lg bg-ink px-4 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">
                      {plan.cta}
                    </a>
                  ) : (
                    <Link
                      href={plan.href}
                      className={`block w-full rounded-lg px-4 py-3.5 text-center text-sm font-semibold transition-colors ${
                        featured
                          ? "bg-white text-[#151619] hover:bg-brand-500 hover:text-white"
                          : "border border-line-strong bg-white text-ink hover:border-brand-300 hover:text-brand-700"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  )}
                  {plan.plannedPrice ? (
                    <p className="mt-3 text-center text-[10px] leading-4 text-white/32">Preço planejado. Ainda não é possível contratar.</p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-2 rounded-xl border border-line bg-white px-5 py-4 text-xs leading-5 text-muted sm:flex-row sm:items-center sm:justify-between">
          <p><span className="font-semibold text-ink">Nenhuma cobrança está ativa.</span> Você pode usar o modo Grátis sem cadastrar cartão.</p>
          <p className="sm:text-right">O valor do Pro pode mudar antes do lançamento.</p>
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
    <section aria-labelledby="faq-titulo" className="bg-white">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Dúvidas</p>
            <h2 id="faq-titulo" className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-[2.35rem]">Antes de começar</h2>
            <p className="mt-5 max-w-xs text-sm leading-7 text-muted">
              Respostas diretas sobre acesso, conta, dados e os próximos planos do AnunciaAI.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line bg-[#fafaf8] px-5 sm:px-7">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-line py-5 last:border-b-0 sm:py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[15px] font-semibold text-ink">
                  {faq.question}
                  <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full border border-line-strong bg-white text-base font-normal text-muted transition-all group-open:rotate-45 group-open:border-brand-200 group-open:text-brand-700">+</span>
                </summary>
                <p className="mt-4 max-w-3xl pr-8 text-sm leading-7 text-muted">{faq.answer}</p>
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
    <footer className="border-t border-[#26272c] bg-[#101114] text-white">
      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="AnunciaAI, página inicial">
              <span className="relative grid size-9 place-items-center rounded-[10px] bg-white text-sm font-extrabold text-[#151619]">
                A
                <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-[#101114] bg-brand-500" />
              </span>
              <span className="text-[18px] font-semibold tracking-[-0.04em] text-white">Anuncia<span className="text-brand-300">AI</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
              Crie, organize e reutilize conteúdo de produtos para diferentes canais de venda em um fluxo mais simples.
            </p>
            <Link href="/#ferramenta" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-300">
              Criar anúncio grátis <span aria-hidden="true">→</span>
            </Link>
          </div>

          <nav aria-label="Links do rodapé" className="grid gap-9 text-sm sm:grid-cols-3 sm:gap-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-white/28">Produto</p>
              <div className="mt-4 grid gap-3 text-white/58">
                <Link href="/ferramentas" className="transition-colors hover:text-white">Ferramentas</Link>
                <Link href="/guias" className="transition-colors hover:text-white">Guias</Link>
                <Link href="/#precos" className="transition-colors hover:text-white">Preços</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-white/28">Conta</p>
              <div className="mt-4 grid gap-3 text-white/58">
                <Link href="/entrar" className="transition-colors hover:text-white">Entrar ou acessar conta</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-white/28">Empresa</p>
              <div className="mt-4 grid gap-3 text-white/58">
                <Link href="/sobre" className="transition-colors hover:text-white">Sobre</Link>
                <Link href="/privacidade" className="transition-colors hover:text-white">Privacidade</Link>
                <Link href="/termos" className="transition-colors hover:text-white">Termos</Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.08] pt-6 text-xs text-white/28 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AnunciaAI.</p>
          <p>Revise o conteúdo antes de publicar.</p>
        </div>
      </div>
    </footer>
  );
}
