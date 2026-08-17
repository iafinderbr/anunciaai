import { ML_FAQ, ML_FEATURES, ML_MISTAKES, ML_STEPS } from "@/lib/ml-content";

const mlCategoryExamples = [
  {
    category: "Eletrônicos",
    title: "Smartphone Samsung Galaxy A55 256GB 5G",
    note: "Produto, marca, modelo, capacidade e conectividade ajudam a identificar a versão.",
  },
  {
    category: "Casa e cozinha",
    title: "Cafeteira Elétrica Oster OCAF300 1,2L 220V",
    note: "Capacidade e voltagem podem ser úteis quando diferenciam modelos realmente distintos.",
  },
  {
    category: "Moda",
    title: "Tênis Adidas Grand Court Base Masculino",
    note: "Priorize produto, marca e linha; tamanho e cor costumam funcionar melhor como variações quando aplicável.",
  },
] as const;

export function MlHowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="ml-como-funciona-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Como funciona</p>
          <h2 id="ml-como-funciona-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Do produto à primeira versão do anúncio em 3 passos
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Informe os dados que você consegue confirmar, gere os blocos de conteúdo e revise tudo antes de preencher o anúncio no Mercado Livre.
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
          Estrutura pensada para anúncios no Mercado Livre
        </h2>
        <p className="mt-3 text-[15px] text-muted">
          A ferramenta organiza título, descrição, benefícios e ficha de características como primeira versão. Regras, campos e limites podem variar por categoria, então confira sempre o fluxo atual da plataforma antes de publicar.
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
              Como deixar o título claro e identificável
            </h2>
            <p className="mt-3 text-[15px] text-muted">
              O Mercado Livre orienta usar uma estrutura com <strong className="font-medium text-ink-soft">produto + marca + modelo + especificações que ajudem a identificar o item</strong>. O limite permitido pode variar por categoria, por isso o AnunciaAI usa apenas um preview editorial e você deve conferir o contador atual no momento da publicação.
            </p>
            <p className="mt-3 text-[15px] text-muted">
              Informações como promoção, frete e parcelamento não ajudam a identificar o produto e normalmente pertencem a outros campos do anúncio. Prefira um título coerente com a ficha técnica e com a versão realmente vendida.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-line bg-canvas p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Exemplo de título para revisar</p>
              <p className="mt-3 font-mono text-[15px] leading-relaxed text-ink">
                Fone Bluetooth JBL Tune 510BT Dobrável 40h Bateria
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">
                  Preview editorial
                </span>
                <span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-ink-soft">
                  Sem promoção no título
                </span>
                <span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-ink-soft">
                  Dados verificáveis
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

        <div className="mt-12 border-t border-line pt-9">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplos por categoria</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">O que vale destacar muda conforme o produto</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Use somente características confirmadas e escolha as que realmente ajudam o comprador a diferenciar uma versão da outra.
            </p>
          </div>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {mlCategoryExamples.map((example) => (
              <li key={example.category} className="rounded-2xl border border-line bg-canvas p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand-600">{example.category}</p>
                <p className="mt-3 font-mono text-sm leading-6 text-ink">{example.title}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{example.note}</p>
              </li>
            ))}
          </ul>
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
          Erros comuns que enfraquecem a clareza do anúncio
        </h2>
        <p className="mt-3 text-[15px] text-muted">
          Compare os exemplos e revise a versão gerada com os dados reais do produto e os campos disponíveis na sua categoria.
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
              Respostas rápidas para gerar uma primeira versão e revisar antes de usar no anúncio.
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
