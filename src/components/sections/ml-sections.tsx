import { ML_FAQ, ML_FEATURES, ML_MISTAKES, ML_STEPS } from "@/lib/ml-content";

export function MlHowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="ml-como-funciona-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Como funciona</p>
          <h2 id="ml-como-funciona-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Do produto na caixa ao anúncio publicado em 3 passos
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Você não precisa saber escrever para vender bem. Precisa apenas informar o que o produto é.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {ML_STEPS.map((step, index) => (
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

export function MlFeatures() {
  return (
    <section id="recursos" aria-labelledby="ml-recursos-titulo" className="container-page py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Recursos</p>
        <h2 id="ml-recursos-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Feito para as regras do Mercado Livre
        </h2>
        <p className="mt-3 text-[15px] text-muted">
          Um texto genérico de IA não serve para marketplace. O conteúdo aqui respeita limite de caracteres, estrutura
          de título e política de descrição da plataforma.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ML_FEATURES.map((feature) => (
          <li key={feature.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <h3 className="text-base font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{feature.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function MlAnatomy() {
  return (
    <section aria-labelledby="ml-anatomia-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Anatomia do título</p>
            <h2 id="ml-anatomia-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              O título é 80% do seu resultado na busca
            </h2>
            <p className="mt-3 text-[15px] text-muted">
              O Mercado Livre recomenda a estrutura <strong className="font-medium text-ink-soft">Produto + Marca +
              Modelo + especificações</strong>, dentro de 60 caracteres. É exatamente o formato que a ferramenta gera.
            </p>
            <p className="mt-3 text-[15px] text-muted">
              Palavras como “promoção”, “frete grátis” e emojis ocupam espaço que deveria ser de termos que o comprador
              realmente digita na busca.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-line bg-canvas p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Exemplo de título gerado</p>
              <p className="mt-3 font-mono text-[15px] leading-relaxed text-ink">
                Fone Bluetooth JBL Tune 510BT Dobrável 40h Bateria
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">
                  49/60 caracteres
                </span>
                <span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-ink-soft">
                  Sem emoji
                </span>
                <span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-ink-soft">
                  Sem CAPS LOCK
                </span>
              </div>
            </div>

            <ul className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Produto", value: "Fone Bluetooth" },
                { label: "Marca", value: "JBL" },
                { label: "Modelo", value: "Tune 510BT" },
                { label: "Especificações", value: "Dobrável · 40h bateria" },
              ].map((part) => (
                <li key={part.label} className="rounded-xl border border-line bg-canvas px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-600">{part.label}</p>
                  <p className="mt-1 text-sm text-ink-soft">{part.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MlMistakes() {
  return (
    <section aria-labelledby="ml-erros-titulo" className="container-page py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
        <h2 id="ml-erros-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Erros que derrubam um anúncio no Mercado Livre
        </h2>
        <p className="mt-3 text-[15px] text-muted">
          A ferramenta já entrega o texto do lado direito da tabela. Você só precisa colar.
        </p>
      </div>

      <ul className="mt-10 grid gap-3">
        {ML_MISTAKES.map((item) => (
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

export function MlFaq() {
  return (
    <section id="duvidas" aria-labelledby="ml-faq-titulo" className="border-t border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas</p>
            <h2 id="ml-faq-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Perguntas sobre anúncios no Mercado Livre
            </h2>
            <p className="mt-3 text-[15px] text-muted">
              O que os vendedores mais perguntam antes de publicar o primeiro anúncio gerados pela ferramenta.
            </p>
          </div>

          <div className="divide-y divide-line rounded-2xl border border-line bg-canvas shadow-card">
            {ML_FAQ.map((faq) => (
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
