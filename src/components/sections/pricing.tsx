import Link from "next/link";
import { toolLinks } from "@/components/sections/tools";

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
    summary: "Para criar e revisar conteúdo de produtos sem precisar abrir uma conta.",
    features: [
      "Geradores atuais sem cadastro",
      "Títulos e descrições",
      "Benefícios e ficha técnica",
      "Ferramentas para diferentes canais",
    ],
    cta: "Começar grátis",
    href: "#ferramenta",
  },
  {
    name: "Pro",
    price: "Em breve",
    badge: "Em preparação",
    summary: "Planejado para quem cria conteúdo de produtos com frequência e quer manter o trabalho organizado.",
    features: [
      "Conta e histórico de trabalho",
      "Salvar produtos e preferências",
      "Mais variações e atalhos",
      "Recursos de produtividade",
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
            A versão gratuita já está disponível sem cadastro. Pro e Premium serão liberados somente depois de login,
            cobrança e controle de acesso estarem prontos e testados.
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
    answer: "Não. A versão gratuita atual pode ser usada sem cadastro e não pede cartão de crédito para começar.",
  },
  {
    question: "Pro e Premium já estão disponíveis?",
    answer: "Ainda não. Estamos preparando conta, autenticação e controle de acesso antes de ativar qualquer cobrança. Os preços serão mostrados antes do lançamento das assinaturas.",
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
    answer: "Não. O conteúdo digitado no formulário é usado para gerar o resultado no navegador e não é salvo no banco de gerações. Para o contador público, enviamos e armazenamos apenas o canal utilizado e o horário da geração. Métricas de navegação também podem ser coletadas pelo Vercel Web Analytics.",
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
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        <div>
          <p className="text-[17px] font-semibold tracking-tight">Anuncia<span className="text-brand-600">AI</span></p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            Ferramenta gratuita para organizar primeiras versões de anúncios e conteúdo de produtos.
          </p>
          <Link href="/#ferramenta" className="mt-5 inline-flex rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600">Criar anúncio grátis</Link>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
            <Link href="/entrar" className="font-medium text-ink-soft transition-colors hover:text-brand-600">Entrar</Link>
            <Link href="/sobre" className="transition-colors hover:text-brand-600">Sobre</Link>
            <Link href="/privacidade" className="transition-colors hover:text-brand-600">Privacidade</Link>
            <Link href="/termos" className="transition-colors hover:text-brand-600">Termos de uso</Link>
          </div>
        </div>

        <nav aria-label="Ferramentas do AnunciaAI">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">Ferramentas gratuitas</p>
          <ul className="mt-4 grid gap-x-8 gap-y-2.5 text-sm text-muted sm:grid-cols-2">
            {toolLinks.map((tool) => <li key={tool.href}><Link className="transition-colors hover:text-brand-600" href={tool.href}>{tool.label}</Link></li>)}
          </ul>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">Guias práticos</p>
          <ul className="mt-4 grid gap-2.5 text-sm text-muted">
            <li><Link className="font-medium text-ink-soft transition-colors hover:text-brand-600" href="/guias">Ver todos os guias</Link></li>
            <li><Link className="transition-colors hover:text-brand-600" href="/como-criar-anuncio-no-mercado-livre">Como criar anúncio no Mercado Livre</Link></li>
            <li><Link className="transition-colors hover:text-brand-600" href="/como-criar-anuncio-na-shopee">Como criar anúncio na Shopee</Link></li>
            <li><Link className="transition-colors hover:text-brand-600" href="/como-criar-anuncio-na-olx">Como criar anúncio na OLX</Link></li>
            <li><Link className="transition-colors hover:text-brand-600" href="/como-criar-anuncio-no-facebook-marketplace">Como criar anúncio no Facebook Marketplace</Link></li>
            <li><Link className="transition-colors hover:text-brand-600" href="/como-criar-pagina-de-produto-para-loja-virtual">Como criar página de produto para loja virtual</Link></li>
            <li><Link className="transition-colors hover:text-brand-600" href="/como-criar-legenda-para-instagram">Como criar legenda para Instagram</Link></li>
            <li><Link className="transition-colors hover:text-brand-600" href="/como-fazer-descricao-de-produto">Como fazer descrição de produto</Link></li>
            <li><Link className="transition-colors hover:text-brand-600" href="/como-criar-titulo-de-produto">Como criar título de produto</Link></li>
            <li><Link className="transition-colors hover:text-brand-600" href="/como-escolher-palavras-chave-para-produtos">Como escolher palavras-chave</Link></li>
            <li><Link className="transition-colors hover:text-brand-600" href="/como-criar-nome-de-produto">Como criar nome de produto</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AnunciaAI. Feito no Brasil para quem vende online.</p>
          <div className="flex gap-4">
            <Link href="/entrar" className="transition-colors hover:text-brand-600">Entrar</Link>
            <Link href="/sobre" className="transition-colors hover:text-brand-600">Sobre</Link>
            <Link href="/privacidade" className="transition-colors hover:text-brand-600">Privacidade</Link>
            <Link href="/termos" className="transition-colors hover:text-brand-600">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
