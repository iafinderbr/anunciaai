import Link from "next/link";

interface Plan {
  name: string;
  price: string;
  period?: string;
  badge: string;
  summary: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

const plans: Plan[] = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "/mês",
    badge: "Disponível agora",
    summary: "Para criar conteúdo de produtos, com conta opcional para guardar resultados e produtos importantes.",
    features: [
      "10 geradores atuais sem cadastro",
      "Conta Google opcional",
      "Histórico salvo manualmente",
      "Até 20 produtos salvos",
    ],
    cta: "Começar grátis",
    href: "#ferramenta",
  },
  {
    name: "Pro",
    price: "Em breve",
    badge: "Em preparação",
    summary: "Planejado para quem cria conteúdo de produtos com frequência e quer mais produtividade e reutilização.",
    features: [
      "Tudo do Grátis",
      "Biblioteca ampliada de produtos",
      "Mais variações e atalhos",
      "Preferências e recursos de produtividade",
    ],
    cta: "Ver área de conta",
    href: "/entrar",
    featured: true,
  },
  {
    name: "Premium",
    price: "Em breve",
    badge: "Em preparação",
    summary: "Planejado para catálogos maiores e fluxos que precisam de mais escala e padronização.",
    features: [
      "Tudo do Pro",
      "Fluxos em lote planejados",
      "Padrões e voz da marca",
      "Recursos avançados de catálogo",
    ],
    cta: "Acompanhar preparação",
    href: "/entrar",
  },
];

export function PricingSection() {
  return (
    <section id="precos" aria-labelledby="precos-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Planos</p>
          <h2 id="precos-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Comece grátis. Faça upgrade quando os recursos avançados chegarem.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            A versão gratuita, o login com Google, o histórico e a biblioteca de produtos já estão disponíveis. Pro e Premium serão liberados somente depois da cobrança e do controle de acesso pago estarem prontos e testados.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 shadow-card sm:p-7 ${
                plan.featured ? "border-brand-300 bg-brand-50/45" : "border-line bg-canvas"
              }`}
            >
              {plan.featured ? (
                <span className="absolute right-5 top-5 rounded-full bg-brand-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                  Planejado para uso frequente
                </span>
              ) : null}

              <div className="pr-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-700">{plan.badge}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">{plan.name}</h3>
              </div>

              <p className="mt-5 flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-tight">{plan.price}</span>
                {plan.period ? <span className="text-sm text-muted">{plan.period}</span> : null}
              </p>
              <p className="mt-3 min-h-16 text-sm leading-relaxed text-muted">{plan.summary}</p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="mt-0.5 size-4 shrink-0 text-brand-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M4 10.5 8 14.5 16 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-ink-soft">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.name === "Grátis" ? (
                <a
                  href={plan.href}
                  className="mt-7 w-full rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  {plan.cta}
                </a>
              ) : (
                <Link
                  href={plan.href}
                  className="mt-7 w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-center text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-700"
                >
                  {plan.cta}
                </Link>
              )}
            </article>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-line bg-canvas px-5 py-4 text-center">
          <p className="text-sm font-medium text-ink-soft">
            Não há cobrança de Pro ou Premium ativa hoje.
            <span className="font-normal text-muted"> Os preços serão publicados antes de qualquer assinatura ser aberta.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "Preciso pagar para usar?",
    answer: "Não. A versão gratuita atual pode ser usada sem cadastro e não pede cartão de crédito para começar. Criar uma conta Google é opcional e permite usar histórico e produtos salvos.",
  },
  {
    question: "Pro e Premium já estão disponíveis?",
    answer: "Ainda não. Login, histórico e biblioteca de produtos já estão ativos, mas Pro e Premium só serão liberados depois que cobrança e controle de acesso pago estiverem prontos e testados. Os preços serão mostrados antes do lançamento das assinaturas.",
  },
  {
    question: "O conteúdo serve para Mercado Livre e Shopee?",
    answer: "Sim. Você escolhe o canal e recebe uma estrutura adaptada como primeira versão. Revise sempre os dados do produto e as regras atuais da plataforma antes de publicar.",
  },
  {
    question: "Posso editar o texto depois?",
    answer: "Sim. Cada bloco foi feito para ser revisado e adaptado. Confira especificações, preço, condição, estoque e qualquer informação comercial antes de usar o texto.",
  },
  {
    question: "Meus dados de produto ficam salvos?",
    answer: "Por padrão, não. O conteúdo usado para gerar um anúncio não é salvo no banco de gerações; para o contador público guardamos apenas canal e horário. Quando você está conectado, só armazenamos conteúdo ou dados do produto se você clicar explicitamente em “Salvar no histórico” ou “Salvar produto”.",
  },
];

export function FaqSection() {
  return (
    <section aria-labelledby="faq-titulo" className="container-page py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas</p>
          <h2 id="faq-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Perguntas frequentes</h2>
          <p className="mt-3 text-[15px] text-muted">Use a versão gratuita e revise a primeira versão com os dados reais do seu produto.</p>
        </div>
        <div className="divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink">
                {faq.question}
                <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
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
            <Link href="/#ferramenta" className="mt-5 inline-flex rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
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
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">Conta</p>
              <div className="mt-3 grid gap-2.5 text-muted">
                <Link href="/entrar" className="transition-colors hover:text-brand-600">Entrar</Link>
                <Link href="/conta" className="transition-colors hover:text-brand-600">Minha conta</Link>
                <Link href="/conta/produtos" className="transition-colors hover:text-brand-600">Produtos salvos</Link>
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
