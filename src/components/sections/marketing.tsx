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
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Para quem vende online</p>
            <h2 id="confianca-titulo" className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.05em] sm:text-[2.55rem]">
              Um fluxo que reduz o trabalho repetitivo sem tirar seu controle.
            </h2>
          </div>
          <p className="text-sm leading-7 text-muted">
            A IA organiza a primeira versão. Você continua responsável pelos dados, pela revisão e pela publicação final.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {trustCards.map((card) => (
            <li key={card.title} className="group relative overflow-hidden rounded-2xl border border-line bg-[#fafaf8] p-6 transition-all hover:-translate-y-0.5 hover:border-line-strong hover:bg-white hover:shadow-[0_22px_56px_-42px_rgba(23,23,20,.32)] sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-700">{card.eyebrow}</span>
                <span className="text-[10px] font-semibold tabular-nums tracking-[0.13em] text-muted">{card.icon}</span>
              </div>
              <div className="mt-9 grid size-10 place-items-center rounded-xl border border-line bg-white text-sm font-semibold text-ink shadow-[0_8px_18px_-16px_rgba(15,15,18,.45)]" aria-hidden="true">
                {card.icon.slice(-1)}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-ink transition-colors group-hover:text-brand-700">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{card.text}</p>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand-500 transition-transform duration-200 group-hover:scale-x-100" />
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
    <section id="como-funciona" aria-labelledby="como-funciona-titulo" className="relative overflow-hidden border-b border-[#25262b] bg-[#111216] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 bottom-[-18rem] size-[560px] rounded-full bg-brand-500/[0.055] blur-3xl" />
        <div className="absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-brand-500/30 via-white/10 to-transparent" />
      </div>

      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <div className="max-w-xl lg:sticky lg:top-28 lg:self-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-300">
              <span className="size-1.5 rounded-full bg-brand-500" /> Como funciona
            </div>
            <h2 id="como-funciona-titulo" className="mt-5 text-3xl font-semibold tracking-[-0.052em] text-white sm:text-[2.8rem]">
              Da informação bruta a uma estrutura pronta para revisar.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/48">
              Sem painel complicado e sem dezenas de etapas. O fluxo foi pensado para você entender onde está e o que acontece em seguida.
            </p>

            <div className="mt-9 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035]">
              <div className="flex items-center gap-3 border-b border-white/[0.07] p-5">
                <span className="grid size-10 place-items-center rounded-xl bg-brand-500 text-xs font-bold text-white shadow-[0_12px_24px_-14px_rgba(241,102,42,.85)]">AI</span>
                <div>
                  <p className="text-xs font-semibold text-white">Assistência, não piloto automático</p>
                  <p className="mt-1 text-[11px] leading-5 text-white/38">Dados reais e revisão vêm primeiro.</p>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-white/[0.07]">
                {steps.map((step, index) => (
                  <div key={step.title} className="px-3 py-4 text-center">
                    <p className="text-[10px] font-semibold tabular-nums text-brand-300">0{index + 1}</p>
                    <p className="mt-1 text-[9px] leading-4 text-white/30">{index === 0 ? "Entrada" : index === 1 ? "Estrutura" : "Revisão"}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ol className="grid gap-3">
            {steps.map((step, index) => (
              <li key={step.title} className="group relative grid gap-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all hover:border-white/[0.13] hover:bg-white/[0.045] sm:grid-cols-[64px_minmax(0,1fr)] sm:p-6">
                <div className="relative">
                  <span className={`relative z-10 grid size-12 place-items-center rounded-xl text-xs font-bold tabular-nums ${index === 1 ? "bg-brand-500 text-white shadow-[0_12px_24px_-14px_rgba(241,102,42,.8)]" : "border border-white/10 bg-white/[0.035] text-white/52"}`}>
                    0{index + 1}
                  </span>
                  {index < steps.length - 1 ? <span aria-hidden="true" className="absolute left-6 top-12 hidden h-[calc(100%+2.4rem)] w-px bg-gradient-to-b from-white/10 to-transparent sm:block" /> : null}
                </div>

                <div className="min-w-0">
                  <div className="grid gap-2 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-brand-300/70">{index === 0 ? "Entrada" : index === 1 ? "Processamento" : "Controle"}</p>
                      <h3 className="mt-2 text-base font-semibold tracking-[-0.025em] text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-6 text-white/52">{step.text}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-2 border-t border-white/[0.07] pt-4">
                    <span className="size-1.5 rounded-full bg-emerald-400/80" />
                    <p className="text-[11px] font-medium text-white/30">{step.detail}</p>
                  </div>
                </div>

                <span aria-hidden="true" className="absolute right-4 top-4 text-[10px] font-semibold text-white/[0.08] transition-colors group-hover:text-brand-500/30">0{index + 1}</span>
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
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-700">Recursos</p>
            <h2 id="recursos-titulo" className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-[2.55rem]">
              A informação do produto entra uma vez. O conteúdo sai organizado.
            </h2>
          </div>
          <p className="text-sm leading-7 text-muted">
            Cada bloco tem um papel claro para facilitar conferência, edição e adaptação antes do uso.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-[#fafaf8]">
          <div className="grid border-b border-line lg:grid-cols-[0.85fr_1.15fr]">
            <div className="p-6 sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-700">Fluxo de conteúdo</p>
              <h3 className="mt-4 max-w-sm text-2xl font-semibold tracking-[-0.04em] text-ink">Do dado bruto ao bloco que você realmente precisa.</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-muted">Em vez de entregar um texto único e difícil de editar, o AnunciaAI separa o resultado em partes reutilizáveis.</p>
            </div>
            <div className="border-t border-line bg-white p-5 sm:p-6 lg:border-l lg:border-t-0">
              <div className="rounded-xl border border-line bg-[#f7f7f4] p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-muted">Produto informado</p>
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-emerald-700"><span className="size-1.5 rounded-full bg-emerald-500" />Pronto</span>
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">Fone Bluetooth JBL Tune 510BT</p>
                <p className="mt-1 text-xs leading-5 text-muted">Bluetooth 5.0 · USB-C · dobrável · microfone integrado</p>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {["Título", "Descrição", "Benefícios", "Ficha", "Copy", "SEO"].map((item, index) => (
                  <div key={item} className={`rounded-lg border p-3 ${index === 0 ? "border-brand-200 bg-brand-50/60" : "border-line bg-white"}`}>
                    <p className={`text-[9px] font-semibold uppercase tracking-[0.1em] ${index === 0 ? "text-brand-700" : "text-muted"}`}>{item}</p>
                    <div className="mt-3 space-y-1.5" aria-hidden="true">
                      <span className={`block h-1.5 rounded-full ${index === 0 ? "w-4/5 bg-brand-200" : "w-4/5 bg-line"}`} />
                      <span className="block h-1.5 w-3/5 rounded-full bg-line" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <li key={feature.title} className={`group relative min-h-[210px] bg-white p-6 transition-colors hover:bg-[#fcfcfa] ${index < 3 ? "border-b border-line" : ""} ${index % 3 !== 2 ? "lg:border-r lg:border-line" : ""} ${index % 2 === 0 ? "sm:border-r sm:border-line lg:border-r" : ""}`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-700">{feature.eyebrow}</span>
                  <span className="text-[10px] font-semibold tabular-nums text-muted">0{index + 1}</span>
                </div>
                <h3 className="mt-8 text-base font-semibold tracking-[-0.025em] text-ink transition-colors group-hover:text-brand-700">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
