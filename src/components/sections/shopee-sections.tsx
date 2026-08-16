import {
  SHOPEE_ANATOMY,
  SHOPEE_FAQ,
  SHOPEE_FEATURES,
  SHOPEE_MISTAKES,
  SHOPEE_STEPS,
  SHOPEE_TITLE_BREAKDOWN,
} from "@/lib/shopee-content";

export function ShopeeHowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="shopee-como-funciona-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Como funciona</p>
          <h2 id="shopee-como-funciona-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Do produto na caixa ao anúncio publicado em 3 passos
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Você não precisa saber escrever para vender bem na Shopee. Precisa apenas informar o que o produto é.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {SHOPEE_STEPS.map((step, index) => (
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

export function ShopeeAnatomy() {
  return (
    <section aria-labelledby="shopee-anatomia-titulo" className="container-page py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">A estrutura</p>
          <h2 id="shopee-anatomia-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            O que um bom anúncio na Shopee precisa ter
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Um anúncio que vende na Shopee não é só um título bonito. É um conjunto que responde às dúvidas do
            comprador e ajuda o produto a aparecer na busca.
          </p>

          <ol className="mt-6 space-y-4">
            {SHOPEE_ANATOMY.map((item, index) => (
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
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Exemplo de título gerado</p>
            <p className="mt-3 font-mono text-[15px] leading-relaxed text-ink">
              Carregador Portátil 20000mAh Carregamento Rápido Duas Portas USB 🔥
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">
                66/120 caracteres
              </span>
              <span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-ink-soft">
                Com palavras-chave
              </span>
            </div>
          </div>

          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {SHOPEE_TITLE_BREAKDOWN.map((part) => (
              <li key={part.label} className="rounded-xl border border-line bg-canvas px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-600">{part.label}</p>
                <p className="mt-1 text-sm text-ink-soft">{part.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ShopeeFeatures() {
  return (
    <section id="recursos" aria-labelledby="shopee-recursos-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Recursos</p>
          <h2 id="shopee-recursos-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Um anúncio completo para a Shopee, gerado de uma vez
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Você informa o produto uma única vez e recebe tudo o que precisa para publicar, no formato da Shopee.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SHOPEE_FEATURES.map((feature) => (
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

export function ShopeeMistakes() {
  return (
    <section aria-labelledby="shopee-erros-titulo" className="container-page py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
        <h2 id="shopee-erros-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Erros comuns em anúncios na Shopee
        </h2>
        <p className="mt-3 text-[15px] text-muted">
          Use os exemplos abaixo como revisão antes de publicar o anúncio.
        </p>
      </div>

      <ul className="mt-10 grid gap-3">
        {SHOPEE_MISTAKES.map((item) => (
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

export function ShopeeFaq() {
  return (
    <section id="duvidas" aria-labelledby="shopee-faq-titulo" className="border-t border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas</p>
            <h2 id="shopee-faq-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Perguntas sobre anúncios na Shopee
            </h2>
            <p className="mt-3 text-[15px] text-muted">
              O que os vendedores mais perguntam antes de publicar o primeiro anúncio gerados pela ferramenta.
            </p>
          </div>

          <div className="divide-y divide-line rounded-2xl border border-line bg-canvas shadow-card">
            {SHOPEE_FAQ.map((faq) => (
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

