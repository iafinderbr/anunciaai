import {
  TITLES_ANATOMY,
  TITLES_CHANNELS,
  TITLES_FAQ,
  TITLES_FEATURE_MAP,
  TITLES_FEATURES,
  TITLES_MISTAKES,
  TITLES_STEPS,
} from "@/lib/titles-content";

export function TitlesHowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="titles-como-funciona-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Como funciona</p>
          <h2 id="titles-como-funciona-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Das características ao título publicado em 3 passos
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Você não precisa ser redator para escrever um título que vende. Precisa apenas informar o que o produto é.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {TITLES_STEPS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-line bg-canvas p-6">
              <span className="grid size-9 place-items-center rounded-xl bg-ink text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function TitlesAnatomy() {
  return (
    <section aria-labelledby="titles-anatomia-titulo" className="container-page py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">O essencial</p>
          <h2 id="titles-anatomia-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            O que um bom título de produto precisa ter
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            O título é a primeira coisa que o comprador vê. Se ele não entender em segundos, a busca segue para o
            próximo anúncio.
          </p>

          <ol className="mt-6 space-y-4">
            {TITLES_ANATOMY.map((item, index) => (
              <li key={item.title} className="flex gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-md bg-brand-50 text-[11px] font-bold text-brand-700">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:pt-10">
          <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
              Transformando características em título
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight">A IA escolhe o que entra no título</h3>
            <p className="mt-1.5 text-sm text-muted">
              Nem toda característica vira título. A ferramenta separa o que é essencial, encurta e ordena na fórmula
              que converte.
            </p>

            <ul className="mt-5 divide-y divide-line overflow-hidden rounded-xl border border-line">
              {TITLES_FEATURE_MAP.map((item) => (
                <li key={item.feature} className="grid gap-1 bg-canvas px-4 py-3 sm:grid-cols-2 sm:gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">Característica</p>
                    <p className="mt-0.5 text-sm text-ink-soft">{item.feature}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-600">No título</p>
                    <p className="mt-0.5 text-sm font-medium text-ink">{item.inTitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TitlesFeatures() {
  return (
    <section id="recursos" aria-labelledby="titles-recursos-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Recursos</p>
          <h2 id="titles-recursos-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Títulos prontos para publicar, gerados de uma vez
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Você informa o produto uma única vez e recebe o título principal, variações e os termos de busca.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TITLES_FEATURES.map((feature) => (
            <li key={feature.title} className="rounded-2xl border border-line bg-canvas p-6 shadow-card">
              <h3 className="text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TitlesMistakes() {
  return (
    <section aria-labelledby="titles-erros-titulo" className="container-page py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
        <h2 id="titles-erros-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Títulos ruins versus títulos que vendem
        </h2>
        <p className="mt-3 text-[15px] text-muted">
          Mesmo produto, resultados bem diferentes. A ferramenta entrega o lado direito da tabela.
        </p>
      </div>

      <ul className="mt-10 grid gap-3">
        {TITLES_MISTAKES.map((item) => (
          <li
            key={item.wrong}
            className="grid gap-3 rounded-2xl border border-line bg-white p-5 shadow-card sm:grid-cols-2 sm:gap-6"
          >
            <div className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-rose-50 text-[11px] font-bold text-rose-600"
              >
                ✕
              </span>
              <p className="text-sm leading-relaxed text-muted line-through decoration-rose-300">{item.wrong}</p>
            </div>
            <div className="flex gap-3 border-t border-line pt-3 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <span
                aria-hidden="true"
                className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-600"
              >
                ✓
              </span>
              <p className="text-sm font-medium leading-relaxed text-ink-soft">{item.right}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TitlesChannels() {
  return (
    <section aria-labelledby="titles-canais-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Adaptação</p>
          <h2 id="titles-canais-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            O mesmo título não serve para todo canal
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Cada plataforma tem um limite de caracteres e um jeito de exibir o título. A ferramenta adapta na hora.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TITLES_CHANNELS.map((channel) => (
            <li key={channel.title} className="rounded-2xl border border-line bg-canvas p-6 shadow-card">
              <h3 className="text-base font-semibold">{channel.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{channel.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TitlesFaq() {
  return (
    <section id="duvidas" aria-labelledby="titles-faq-titulo" className="border-t border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas</p>
            <h2 id="titles-faq-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Perguntas sobre títulos de produtos
            </h2>
            <p className="mt-3 text-[15px] text-muted">
              O que os lojistas mais perguntam antes de escrever o primeiro título com IA.
            </p>
          </div>

          <div className="divide-y divide-line rounded-2xl border border-line bg-canvas shadow-card">
            {TITLES_FAQ.map((faq) => (
              <details key={faq.question} className="group p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink">
                  <h3 className="text-[15px] font-medium">{faq.question}</h3>
                  <span
                    aria-hidden="true"
                    className="grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

