const trustCards = [
  {
    icon: "01",
    title: "Economize etapas",
    text: "Informe o produto uma vez e organize vários blocos de conteúdo na mesma tela.",
  },
  {
    icon: "02",
    title: "Adapte para vários canais",
    text: "Use estruturas diferentes como ponto de partida para marketplaces, loja virtual e redes sociais.",
  },
  {
    icon: "03",
    title: "Comece grátis",
    text: "Teste a ferramenta sem precisar cadastrar cartão.",
  },
];

export function TrustSection() {
  return (
    <section aria-labelledby="confianca-titulo" className="container-page py-14 sm:py-20">
      <h2 id="confianca-titulo" className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
        Feito para quem vende online
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-[15px] text-muted">
        Organize a primeira versão do conteúdo e mantenha a revisão final nas suas mãos.
      </p>

      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {trustCards.map((card) => (
          <li key={card.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <span aria-hidden="true" className="grid size-9 place-items-center rounded-xl border border-line-strong bg-canvas text-[11px] font-bold text-ink-soft">
              {card.icon}
            </span>
            <h3 className="mt-4 text-base font-semibold">{card.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{card.text}</p>
          </li>
        ))}
      </ul>
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
    <section id="como-funciona" aria-labelledby="como-funciona-titulo" className="border-y border-line bg-canvas">
      <div className="container-page py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-600">Como funciona</p>
            <h2 id="como-funciona-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Um fluxo simples do começo ao fim
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-muted">
              Sem etapas escondidas: você informa, gera e decide o que vale usar.
            </p>
          </div>

          <ol className="divide-y divide-line border-y border-line">
            {steps.map((step, index) => (
              <li key={step.title} className="grid gap-3 py-5 sm:grid-cols-[56px_1fr] sm:gap-5 sm:py-6">
                <span className="text-sm font-semibold tabular-nums text-brand-600">0{index + 1}</span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1.5 max-w-2xl text-sm leading-6 text-muted">{step.text}</p>
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
    text: "A ferramenta muda a estrutura do título conforme o canal e mantém um preview legível para você revisar.",
  },
  {
    title: "Descrição estruturada",
    text: "Organiza características, público informado, preço e chamada final em blocos fáceis de conferir.",
  },
  {
    title: "Benefícios a partir dos dados",
    text: "Traduz características fornecidas em explicações conservadoras, sem transformar possibilidade em garantia.",
  },
  {
    title: "Ficha de características organizada",
    text: "Suas anotações viram uma lista estruturada de produto, categoria, material, medidas e outros dados informados.",
  },
  {
    title: "Versão de anúncio para revisar",
    text: "Cria uma alternativa de copy adequada ao estilo do canal sem inventar desconto, escassez, entrega ou condição do item.",
  },
  {
    title: "Sugestões de SEO",
    text: "Gera título SEO, meta description e ideias de palavras-chave como ponto de partida, sem prometer posição no Google.",
  },
];

export function FeaturesSection() {
  return (
    <section id="recursos" aria-labelledby="recursos-titulo" className="container-page py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-600">Recursos</p>
        <h2 id="recursos-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Vários blocos organizados a partir do mesmo produto
        </h2>
        <p className="mt-3 text-[15px] text-muted">
          Você informa os dados uma vez e recebe seis blocos para conferir, editar e adaptar antes do uso.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <li key={feature.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <h3 className="text-base font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{feature.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
