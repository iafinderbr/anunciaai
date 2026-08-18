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
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Para quem vende online</p>
            <h2 id="confianca-titulo" className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.045em] sm:text-[2.45rem]">
              Um fluxo mais claro para chegar à primeira versão.
            </h2>
          </div>
          <p className="text-sm leading-7 text-muted">
            Organize o conteúdo e mantenha a revisão final nas suas mãos antes de publicar.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {trustCards.map((card) => (
            <li key={card.title} className="rounded-2xl border border-line bg-[#fafaf8] p-6 sm:p-7">
              <span className="text-[10px] font-semibold tabular-nums tracking-[0.13em] text-brand-700">{card.icon}</span>
              <h3 className="mt-8 text-lg font-semibold tracking-[-0.03em]">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{card.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Informe o produto",
    text: "Nome, categoria, preço, público e características que você consegue confirmar.",
    detail: "Você controla os dados de entrada.",
  },
  {
    title: "Gere a estrutura",
    text: "O AnunciaAI organiza título, descrição, benefícios, ficha técnica, anúncio e sugestões de SEO.",
    detail: "Tudo separado em blocos fáceis de revisar.",
  },
  {
    title: "Revise e publique",
    text: "Confira especificações, preço, condições e regras atuais do canal antes de usar o conteúdo.",
    detail: "A decisão final continua sendo sua.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-titulo" className="border-b border-[#25262b] bg-[#111216] text-white">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-300">Como funciona</p>
            <h2 id="como-funciona-titulo" className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-[2.65rem]">
              Menos etapas entre a informação e o conteúdo pronto para revisar.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/48">
              Um fluxo curto, sem painel complicado: você informa o que sabe, recebe uma estrutura organizada e revisa antes de publicar.
            </p>

            <div className="mt-9 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-brand-500 text-xs font-bold text-white">AI</span>
                <div>
                  <p className="text-xs font-semibold text-white">Assistência, não piloto automático</p>
                  <p className="mt-1 text-[11px] leading-5 text-white/38">O conteúdo é uma primeira versão. Dados reais e revisão vêm primeiro.</p>
                </div>
              </div>
            </div>
          </div>

          <ol className="grid gap-3">
            {steps.map((step, index) => (
              <li key={step.title} className="group grid gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-colors hover:bg-white/[0.045] sm:grid-cols-[56px_minmax(0,1fr)] sm:p-6">
                <span className={`grid size-11 place-items-center rounded-xl text-xs font-bold tabular-nums ${index === 1 ? "bg-brand-500 text-white" : "border border-white/10 bg-white/[0.035] text-white/52"}`}>
                  0{index + 1}
                </span>
                <div className="min-w-0">
                  <div className="grid gap-2 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6">
                    <h3 className="text-base font-semibold tracking-[-0.025em] text-white">{step.title}</h3>
                    <p className="text-sm leading-6 text-white/52">{step.text}</p>
                  </div>
                  <p className="mt-4 border-t border-white/[0.07] pt-4 text-[11px] font-medium text-white/30">{step.detail}</p>
                </div>
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
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Recursos</p>
            <h2 id="recursos-titulo" className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-[2.45rem]">
              Um produto, vários blocos organizados.
            </h2>
          </div>
          <p className="text-sm leading-7 text-muted">
            Você informa os dados uma vez e recebe blocos para conferir, editar e adaptar antes do uso.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <li key={feature.title} className="rounded-2xl border border-line bg-[#fafaf8] p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="size-2 rounded-full bg-brand-500" aria-hidden="true" />
                <span className="text-[10px] font-semibold tabular-nums text-muted">0{index + 1}</span>
              </div>
              <h3 className="mt-7 text-base font-semibold tracking-[-0.025em]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
