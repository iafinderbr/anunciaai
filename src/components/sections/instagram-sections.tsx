import {
  INSTAGRAM_BENEFIT_MAP,
  INSTAGRAM_COMPARISON,
  INSTAGRAM_FAQ,
  INSTAGRAM_FEATURES,
  INSTAGRAM_MISTAKES,
  INSTAGRAM_STEPS,
  INSTAGRAM_STRUCTURE,
} from "@/lib/instagram-content";

export function InstagramHowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="instagram-como-funciona-titulo"
      className="border-y border-line bg-white"
    >
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Como funciona</p>
          <h2 id="instagram-como-funciona-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Do produto na caixa à legenda publicada em 3 passos
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Você não precisa ser social media para escrever uma legenda que vende. Precisa apenas saber o que o
            produto é.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {INSTAGRAM_STEPS.map((step, index) => (
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

export function InstagramStructure() {
  return (
    <section aria-labelledby="instagram-estrutura-titulo" className="container-page py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">A estrutura</p>
          <h2 id="instagram-estrutura-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            O que uma boa legenda de produto precisa ter
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            No Instagram, a legenda compete com o feed inteiro. Ela precisa segurar a atenção em segundos e levar a um
            próximo passo claro.
          </p>

          <ol className="mt-6 space-y-4">
            {INSTAGRAM_STRUCTURE.map((item, index) => (
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
              Legenda gerada pela ferramenta
            </p>
            <div className="mt-3 whitespace-pre-wrap rounded-xl bg-canvas p-4 text-[15px] leading-relaxed text-ink-soft">
              Chegou a vela que transforma qualquer cômodo em um spa. ✨{"\n\n"}
              ✅ Cera de soja, queima limpa{"\n"}
              ✅ Até 40 horas de aroma{"\n"}
              ✅ Frasco de vidro reutilizável{"\n\n"}
              💰 R$ 79,90{"\n"}
              👉 Garanta a sua pelo link na bio!{"\n\n"}
              <span className="text-brand-600">#velaaromatica #decoracao #bemestar #lojaonline</span>
            </div>
            <p className="mt-3 text-xs text-muted">
              Gancho na abertura, benefícios em tópicos, preço, CTA e hashtags — tudo em um único texto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InstagramBenefits() {
  return (
    <section aria-labelledby="instagram-beneficios-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">O essencial</p>
          <h2 id="instagram-beneficios-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Característica vira benefício
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            O seguidor não quer saber que a vela tem cera de soja. Ele quer saber que a casa vai ficar mais aconchegante.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {INSTAGRAM_BENEFIT_MAP.map((item) => (
            <li key={item.feature} className="rounded-2xl border border-line bg-canvas p-5 shadow-card">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">Característica</p>
              <p className="mt-1 text-sm text-ink-soft">{item.feature}</p>
              <p className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-600">
                <span aria-hidden="true">↓</span> Benefício
              </p>
              <p className="mt-1 text-sm font-medium text-ink">{item.benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function InstagramFeatures() {
  return (
    <section id="recursos" aria-labelledby="instagram-recursos-titulo" className="container-page py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Recursos</p>
        <h2 id="instagram-recursos-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Uma legenda completa, gerada de uma vez
        </h2>
        <p className="mt-3 text-[15px] text-muted">
          Você informa o produto uma única vez e recebe o texto pronto, com a estrutura que segura a atenção.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INSTAGRAM_FEATURES.map((feature) => (
          <li key={feature.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <h3 className="text-base font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{feature.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function InstagramMistakes() {
  return (
    <section aria-labelledby="instagram-erros-titulo" className="container-page py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
        <h2 id="instagram-erros-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Erros comuns em legendas de venda
        </h2>
        <p className="mt-3 text-[15px] text-muted">
          A ferramenta entrega o texto do lado direito. Você só precisa colar e revisar.
        </p>
      </div>

      <ul className="mt-10 grid gap-3">
        {INSTAGRAM_MISTAKES.map((item) => (
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

      <div className="mt-10">
        <h3 className="text-base font-semibold">Na prática: legenda fraca × legenda melhor</h3>
        <p className="mt-1.5 text-sm text-muted">Mesmo produto, resultados bem diferentes.</p>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-rose-600">Legenda fraca</p>
            <p className="mt-3 text-sm leading-relaxed text-rose-900/70">{INSTAGRAM_COMPARISON.bad}</p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-emerald-700">Legenda melhor</p>
            <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-emerald-900/80">
              {INSTAGRAM_COMPARISON.good}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InstagramFaq() {
  return (
    <section id="duvidas" aria-labelledby="instagram-faq-titulo" className="border-t border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas</p>
            <h2 id="instagram-faq-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Perguntas sobre legendas para Instagram
            </h2>
            <p className="mt-3 text-[15px] text-muted">
              O que os vendedores mais perguntam antes de publicar a primeira legenda gerada por IA.
            </p>
          </div>

          <div className="divide-y divide-line rounded-2xl border border-line bg-canvas shadow-card">
            {INSTAGRAM_FAQ.map((faq) => (
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

