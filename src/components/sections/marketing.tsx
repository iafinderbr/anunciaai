const trustCards = [
  {
    icon: "01",
    title: "Menos retrabalho",
    text: "Informe o produto uma vez e organize vários blocos de conteúdo na mesma tela.",
  },
  {
    icon: "02",
    title: "Estrutura por canal",
    text: "Use formatos diferentes como ponto de partida para marketplaces, loja virtual e redes sociais.",
  },
  {
    icon: "03",
    title: "Comece sem custo",
    text: "Use o modo Grátis sem cadastrar cartão de crédito.",
  },
];

export function TrustSection() {
  return (
    <section aria-labelledby="confianca-titulo" className="border-y border-line bg-white">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 border-b border-line pb-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Para quem vende online</p>
            <h2 id="confianca-titulo" className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-[2.35rem]">
              Um fluxo mais claro para chegar à primeira versão.
            </h2>
          </div>
          <p className="text-sm leading-6 text-muted">
            Organize o conteúdo e mantenha a revisão final nas suas mãos antes de publicar.
          </p>
        </div>

        <ul className="mt-8 grid overflow-hidden rounded-lg border border-line md:grid-cols-3">
          {trustCards.map((card, index) => (
            <li key={card.title} className={`bg-white p-6 ${index < trustCards.length - 1 ? "border-b border-line md:border-b-0 md:border-r" : ""}`}>
              <span className="text-[10px] font-semibold tabular-nums tracking-[0.12em] text-brand-700">{card.icon}</span>
              <h3 className="mt-5 text-base font-semibold tracking-[-0.02em]">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{card.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Informe seu produto",
    text: "Preencha nome, categoria, preço, público e características que você consegue confirmar.",
  },
  {
    title: "Gere a primeira versão",
    text: "A ferramenta organiza os dados em título, descrição, benefícios, ficha de características, anúncio e sugestões de SEO.",
  },
  {
    title: "Revise e adapte",
    text: "Confira especificações, preço, condições e regras atuais do canal antes de copiar e publicar qualquer bloco.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-titulo" className="border-b border-line bg-canvas">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Como funciona</p>
            <h2 id="como-funciona-titulo" className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
              Três etapas.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Você informa, gera e decide o que vale usar.
            </p>
          </div>

          <ol className="border-t border-line">
            {steps.map((step, index) => (
              <li key={step.title} className="grid gap-4 border-b border-line py-6 sm:grid-cols-[64px_220px_minmax(0,1fr)] sm:items-start sm:gap-6">
                <span className="text-xs font-semibold tabular-nums text-brand-700">0{index + 1}</span>
                <h3 className="text-base font-semibold tracking-[-0.02em] text-ink">{step.title}</h3>
                <p className="max-w-2xl text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Títulos adaptados ao canal",
    text: "A estrutura muda conforme o canal e continua legível para você revisar.",
  },
  {
    title: "Descrição estruturada",
    text: "Características, público, preço e chamada final ficam organizados em blocos fáceis de conferir.",
  },
  {
    title: "Benefícios a partir dos dados",
    text: "Características informadas viram explicações conservadoras, sem transformar possibilidade em garantia.",
  },
  {
    title: "Ficha organizada",
    text: "Suas anotações viram uma lista estruturada de produto, categoria e outras especificações informadas.",
  },
  {
    title: "Versão para revisar",
    text: "Uma alternativa de copy adequada ao estilo do canal sem inventar condição comercial.",
  },
  {
    title: "Sugestões de SEO",
    text: "Título SEO, meta description e ideias de palavras-chave como ponto de partida, sem prometer posição no Google.",
  },
];

export function FeaturesSection() {
  return (
    <section id="recursos" aria-labelledby="recursos-titulo" className="bg-white">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 border-b border-line pb-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Recursos</p>
            <h2 id="recursos-titulo" className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-[2.35rem]">
              Um produto, vários blocos organizados.
            </h2>
          </div>
          <p className="text-sm leading-6 text-muted">
            Você informa os dados uma vez e recebe blocos para conferir, editar e adaptar antes do uso.
          </p>
        </div>

        <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.title} className="bg-white p-6">
              <h3 className="text-base font-semibold tracking-[-0.02em]">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
