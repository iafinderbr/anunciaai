const trustCards = [
  {
    icon: "01",
    eyebrow: "Entrada única",
    title: "Menos retrabalho",
    text: "Informe o produto uma vez e organize vários blocos de conteúdo na mesma tela.",
  },
  {
    icon: "02",
    eyebrow: "Contexto",
    title: "Estrutura por canal",
    text: "Use formatos diferentes como ponto de partida para marketplaces, loja virtual e redes sociais.",
  },
  {
    icon: "03",
    eyebrow: "Acesso",
    title: "Comece sem custo",
    text: "Use o modo Grátis sem cadastrar cartão de crédito.",
  },
];

export function TrustSection() {
  return (
    <section aria-labelledby="confianca-titulo" className="border-y border-line bg-white">
      <div className="container-page py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">Para quem vende online</p>
            <h2 id="confianca-titulo" className="mt-5 max-w-3xl text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.055em] sm:text-[3.4rem]">
              Menos trabalho repetitivo. Mais controle sobre o que será publicado.
            </h2>
          </div>
          <p className="text-[15px] leading-7 text-muted">
            A ferramenta organiza a primeira versão. Você continua responsável pelos dados, pela revisão e pela publicação final.
          </p>
        </div>

        <ul className="mt-14 grid border-y border-line md:grid-cols-3">
          {trustCards.map((card, index) => (
            <li key={card.title} className={`min-h-[280px] bg-white px-7 py-8 sm:px-8 ${index < trustCards.length - 1 ? "border-b border-line md:border-b-0 md:border-r" : ""}`}>
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-700">{card.eyebrow}</span>
                <span className="text-sm font-semibold tabular-nums text-line-strong">{card.icon}</span>
              </div>
              <h3 className="mt-14 text-[1.4rem] font-semibold tracking-[-0.04em] text-ink">{card.title}</h3>
              <p className="mt-4 max-w-sm text-[15px] leading-7 text-muted">{card.text}</p>
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
    <section id="como-funciona" aria-labelledby="como-funciona-titulo" className="relative overflow-hidden border-b border-[#25262a] bg-[#0e0f12] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-56 bottom-[-22rem] size-[720px] rounded-full bg-brand-500/[0.045] blur-3xl" />
        <div className="absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-brand-500/24 via-white/8 to-transparent" />
      </div>

      <div className="container-page relative py-20 sm:py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-24">
          <div className="max-w-xl lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/38">
              <span className="h-5 w-[2px] bg-brand-500" />
              Como funciona
            </div>
            <h2 id="como-funciona-titulo" className="mt-6 text-[2.9rem] font-semibold leading-[1.01] tracking-[-0.06em] text-white sm:text-[3.55rem]">
              Da informação bruta a uma estrutura pronta para revisar.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/46">
              O fluxo separa entrada, organização e revisão. Você entende onde está e o que precisa conferir antes de usar o resultado.
            </p>
            <div className="mt-10 border-y border-white/[0.09] py-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300">Princípio do produto</p>
              <p className="mt-3 text-sm font-semibold text-white">Assistência, não piloto automático.</p>
              <p className="mt-2 text-xs leading-6 text-white/34">Dados reais e revisão vêm primeiro.</p>
            </div>
          </div>

          <ol className="border-y border-white/[0.09]">
            {steps.map((step, index) => (
              <li key={step.title} className={`grid min-h-[190px] gap-8 py-8 sm:grid-cols-[80px_220px_minmax(0,1fr)] sm:items-start sm:py-10 ${index < steps.length - 1 ? "border-b border-white/[0.09]" : ""}`}>
                <span className={`text-[2rem] font-semibold tabular-nums tracking-[-0.05em] ${index === 1 ? "text-brand-300" : "text-white/20"}`}>
                  0{index + 1}
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300/70">{index === 0 ? "Entrada" : index === 1 ? "Estrutura" : "Controle"}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.035em] text-white">{step.title}</h3>
                </div>
                <div>
                  <p className="text-[15px] leading-7 text-white/52">{step.text}</p>
                  <p className="mt-5 border-l-2 border-white/[0.10] pl-4 text-xs leading-6 text-white/30">{step.detail}</p>
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
    eyebrow: "Título",
    title: "Títulos adaptados ao canal",
    text: "A estrutura muda conforme o canal e continua legível para você revisar.",
  },
  {
    eyebrow: "Descrição",
    title: "Descrição estruturada",
    text: "Características, público, preço e chamada final ficam organizados em blocos fáceis de conferir.",
  },
  {
    eyebrow: "Benefícios",
    title: "Benefícios a partir dos dados",
    text: "Características informadas viram explicações conservadoras, sem transformar possibilidade em garantia.",
  },
  {
    eyebrow: "Produto",
    title: "Ficha organizada",
    text: "Suas anotações viram uma lista estruturada de produto, categoria e outras especificações informadas.",
  },
  {
    eyebrow: "Copy",
    title: "Versão para revisar",
    text: "Uma alternativa de copy adequada ao estilo do canal sem inventar condição comercial.",
  },
  {
    eyebrow: "SEO",
    title: "Sugestões de SEO",
    text: "Título SEO, meta description e ideias de palavras-chave como ponto de partida, sem prometer posição no Google.",
  },
];

export function FeaturesSection() {
  return (
    <section id="recursos" aria-labelledby="recursos-titulo" className="bg-white">
      <div className="container-page py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end lg:gap-20">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">Recursos</p>
            <h2 id="recursos-titulo" className="mt-5 text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.055em] sm:text-[3.4rem]">
              A informação entra uma vez. O resultado fica separado por função.
            </h2>
          </div>
          <p className="text-[15px] leading-7 text-muted">
            Cada bloco tem um papel claro para facilitar conferência, edição e adaptação antes do uso.
          </p>
        </div>

        <div className="mt-14 border-y border-line">
          <div className="grid border-b border-line lg:grid-cols-[0.8fr_1.2fr]">
            <div className="px-7 py-9 sm:px-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-700">Fluxo de conteúdo</p>
              <h3 className="mt-5 max-w-md text-[1.8rem] font-semibold leading-tight tracking-[-0.045em] text-ink">Do dado bruto aos blocos que você realmente precisa.</h3>
              <p className="mt-5 max-w-md text-[15px] leading-7 text-muted">Em vez de entregar um texto único e difícil de editar, o AnunciaAI separa o resultado em partes reutilizáveis.</p>
            </div>
            <div className="border-t border-line bg-[#f7f7f4] p-7 sm:p-8 lg:border-l lg:border-t-0">
              <div className="border-b border-line pb-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Produto informado</p>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-700">Pronto</span>
                </div>
                <p className="mt-3 text-[15px] font-semibold text-ink">Fone Bluetooth JBL Tune 510BT</p>
                <p className="mt-1.5 text-xs leading-5 text-muted">Bluetooth 5.0 · USB-C · dobrável · microfone integrado</p>
              </div>
              <div className="mt-5 grid grid-cols-2 border-l border-t border-line sm:grid-cols-3">
                {["Título", "Descrição", "Benefícios", "Ficha", "Copy", "SEO"].map((item, index) => (
                  <div key={item} className={`min-h-[92px] border-b border-r border-line p-4 ${index === 0 ? "bg-white" : "bg-[#f7f7f4]"}`}>
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${index === 0 ? "text-brand-700" : "text-muted"}`}>{item}</p>
                    <div className="mt-4 space-y-2" aria-hidden="true">
                      <span className={`block h-1.5 w-4/5 ${index === 0 ? "bg-brand-200" : "bg-line-strong"}`} />
                      <span className="block h-1.5 w-3/5 bg-line" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <li key={feature.title} className={`min-h-[230px] bg-white p-7 sm:p-8 ${index < 3 ? "border-b border-line" : ""} ${index % 3 !== 2 ? "lg:border-r lg:border-line" : ""} ${index % 2 === 0 ? "sm:border-r sm:border-line lg:border-r" : ""}`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-700">{feature.eyebrow}</span>
                  <span className="text-xs font-semibold tabular-nums text-line-strong">0{index + 1}</span>
                </div>
                <h3 className="mt-10 text-[1.2rem] font-semibold tracking-[-0.035em] text-ink">{feature.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-muted">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
