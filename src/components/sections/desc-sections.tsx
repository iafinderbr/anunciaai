import {
  DESC_ANATOMY,
  DESC_BENEFIT_EXAMPLES,
  DESC_CHANNELS,
  DESC_COMPARISON,
  DESC_FAQ,
  DESC_FEATURES,
  DESC_MISTAKES,
  DESC_STEPS,
} from "@/lib/desc-content";

export function DescHowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="desc-como-funciona-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Como funciona</p><h2 id="desc-como-funciona-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Das características à primeira versão em 3 passos</h2><p className="mt-3 text-[15px] text-muted">Informe o que você consegue confirmar, gere a estrutura e revise antes de usar.</p></div>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">{DESC_STEPS.map((step, index) => <li key={step.title} className="rounded-2xl border border-line bg-canvas p-6"><span className="grid size-9 place-items-center rounded-xl bg-ink text-sm font-semibold text-white">{index + 1}</span><h3 className="mt-4 text-base font-semibold">{step.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p></li>)}</ol>
      </div>
    </section>
  );
}

export function DescAnatomy() {
  return (
    <section aria-labelledby="desc-anatomia-titulo" className="container-page py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
        <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">O essencial</p><h2 id="desc-anatomia-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">O que uma descrição clara pode ter</h2><p className="mt-3 text-[15px] text-muted">Uma boa descrição organiza fatos do produto e explica sua utilidade sem acrescentar promessas que não foram informadas.</p><ol className="mt-6 space-y-4">{DESC_ANATOMY.map((item, index) => <li key={item.title} className="flex gap-3"><span className="grid size-6 shrink-0 place-items-center rounded-md bg-brand-50 text-[11px] font-bold text-brand-700">{index + 1}</span><div><h3 className="text-[15px] font-semibold text-ink">{item.title}</h3><p className="mt-0.5 text-sm leading-relaxed text-muted">{item.text}</p></div></li>)}</ol></div>
        <div className="lg:pt-10"><div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Característica → explicação</p><h3 className="mt-2 text-lg font-semibold tracking-tight">Transforme sem exagerar</h3><p className="mt-1.5 text-sm text-muted">Uma característica pode ser explicada de forma útil, mas o texto não deve virar garantia de desempenho ou resultado.</p><ul className="mt-5 divide-y divide-line overflow-hidden rounded-xl border border-line">{DESC_BENEFIT_EXAMPLES.map((item) => <li key={item.feature} className="bg-canvas px-4 py-3"><p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">Característica</p><p className="mt-0.5 text-sm text-ink-soft">{item.feature}</p><p className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-600"><span aria-hidden="true">↓</span> Explicação conservadora</p><p className="mt-0.5 text-sm font-medium text-ink">{item.benefit}</p></li>)}</ul></div></div>
      </div>
    </section>
  );
}

export function DescFeatures() {
  return (
    <section id="recursos" aria-labelledby="desc-recursos-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Recursos</p><h2 id="desc-recursos-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Vários blocos para revisar de uma vez</h2><p className="mt-3 text-[15px] text-muted">Você informa o produto uma vez e recebe uma estrutura organizada para editar e adaptar.</p></div><ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{DESC_FEATURES.map((feature) => <li key={feature.title} className="rounded-2xl border border-line bg-canvas p-6 shadow-card"><h3 className="text-base font-semibold">{feature.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{feature.text}</p></li>)}</ul></div>
    </section>
  );
}

export function DescMistakes() {
  return (
    <section aria-labelledby="desc-erros-titulo" className="container-page py-14 sm:py-20">
      <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p><h2 id="desc-erros-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Erros comuns em descrições de produtos</h2><p className="mt-3 text-[15px] text-muted">Use os exemplos como referência e confira se a versão final continua fiel ao produto.</p></div>
      <ul className="mt-10 grid gap-3">{DESC_MISTAKES.map((item) => <li key={item.wrong} className="grid gap-3 rounded-2xl border border-line bg-white p-5 shadow-card sm:grid-cols-2 sm:gap-6"><div className="flex gap-3"><span aria-hidden="true" className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-rose-50 text-[11px] font-bold text-rose-600">✕</span><p className="text-sm leading-relaxed text-muted line-through decoration-rose-300">{item.wrong}</p></div><div className="flex gap-3 border-t border-line pt-3 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0"><span aria-hidden="true" className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-600">✓</span><p className="text-sm font-medium leading-relaxed text-ink-soft">{item.right}</p></div></li>)}</ul>
      <div className="mt-10"><h3 className="text-base font-semibold">Na prática: descrição fraca × descrição melhor</h3><p className="mt-1.5 text-sm text-muted">O mesmo tipo de produto pode ser apresentado com níveis diferentes de clareza.</p><div className="mt-5 grid gap-3 md:grid-cols-2"><div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-5"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-rose-600">Descrição fraca</p><p className="mt-3 text-sm leading-relaxed text-rose-900/70">{DESC_COMPARISON.bad}</p></div><div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-emerald-700">Descrição melhor</p><p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-emerald-900/80">{DESC_COMPARISON.good}</p></div></div></div>
    </section>
  );
}

export function DescChannels() {
  return (
    <section aria-labelledby="desc-canais-titulo" className="border-y border-line bg-white"><div className="container-page py-14 sm:py-20"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Adaptação</p><h2 id="desc-canais-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Adapte a descrição ao canal e ao tipo de produto</h2><p className="mt-3 text-[15px] text-muted">Loja virtual, marketplaces e redes sociais pedem formatos diferentes. O tipo de produto também muda quais informações merecem mais destaque na revisão.</p></div><ul className="mt-10 grid gap-4 md:grid-cols-3">{DESC_CHANNELS.map((channel) => <li key={channel.title} className="rounded-2xl border border-line bg-canvas p-6 shadow-card"><h3 className="text-base font-semibold">{channel.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{channel.text}</p></li>)}</ul></div></section>
  );
}

export function DescFaq() {
  return (
    <section id="duvidas" aria-labelledby="desc-faq-titulo" className="border-t border-line bg-white"><div className="container-page py-14 sm:py-20"><div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas</p><h2 id="desc-faq-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Perguntas sobre descrições de produto</h2><p className="mt-3 text-[15px] text-muted">O essencial para gerar, conferir e adaptar a primeira versão.</p></div><div className="divide-y divide-line rounded-2xl border border-line bg-canvas shadow-card">{DESC_FAQ.map((faq) => <details key={faq.question} className="group p-5 sm:p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink"><h3 className="text-[15px] font-medium">{faq.question}</h3><span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p></details>)}</div></div></div></section>
  );
}
