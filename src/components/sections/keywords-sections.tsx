import {
  KEYWORDS_FAQ,
  KEYWORDS_FEATURES,
  KEYWORDS_GROUPS,
  KEYWORDS_MISTAKES,
  KEYWORDS_PLACEMENT,
  KEYWORDS_STEPS,
} from "@/lib/keywords-content";

export function KeywordsHowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="keywords-como-funciona" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Como funciona</p>
          <h2 id="keywords-como-funciona" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Dos dados do produto às sugestões em 3 passos</h2>
          <p className="mt-3 text-[15px] text-muted">A ferramenta combina somente as informações fornecidas; ela não consulta volume, concorrência ou tendências de busca.</p>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">{KEYWORDS_STEPS.map((step, index) => <li key={step.title} className="rounded-2xl border border-line bg-canvas p-6"><span className="grid size-9 place-items-center rounded-xl bg-ink text-sm font-semibold text-white">{index + 1}</span><h3 className="mt-4 text-base font-semibold">{step.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p></li>)}</ol>
      </div>
    </section>
  );
}

export function KeywordsTypes() {
  return (
    <section aria-labelledby="keywords-tipos" className="container-page py-14 sm:py-20">
      <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Organização</p><h2 id="keywords-tipos" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Três grupos para organizar as combinações</h2><p className="mt-3 text-[15px] text-muted">Os grupos mostram o nível de detalhe da expressão, não popularidade, intenção comprovada ou dificuldade de ranqueamento.</p></div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">{KEYWORDS_GROUPS.map((group, index) => <article key={group.title} className="rounded-2xl border border-line bg-white p-6 shadow-card"><span className="text-xs font-semibold text-brand-600">0{index + 1}</span><h3 className="mt-3 text-lg font-semibold tracking-tight">{group.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{group.text}</p><p className="mt-5 rounded-xl bg-canvas px-4 py-3 text-sm font-medium text-ink-soft">“{group.example}”</p></article>)}</div>
    </section>
  );
}

export function KeywordsFeatures() {
  return (
    <section id="recursos" aria-labelledby="keywords-recursos" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Recursos</p><h2 id="keywords-recursos" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Sugestões organizadas para revisar</h2><p className="mt-3 text-[15px] text-muted">As combinações deixam claro de qual dado do produto cada termo surgiu.</p></div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{KEYWORDS_FEATURES.map((feature) => <li key={feature.title} className="rounded-2xl border border-line bg-canvas p-6 shadow-card"><h3 className="text-base font-semibold">{feature.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{feature.text}</p></li>)}</ul>
      </div>
    </section>
  );
}

export function KeywordsPlacement() {
  return (
    <section aria-labelledby="keywords-onde-usar" className="container-page py-14 sm:py-20">
      <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Aplicação</p><h2 id="keywords-onde-usar" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Onde uma combinação pode ser útil</h2><p className="mt-3 text-[15px] text-muted">Use somente termos que façam sentido para a pessoa que lê e para a versão realmente anunciada.</p></div>
      <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-card"><div className="hidden grid-cols-[180px_1fr_1fr] gap-4 border-b border-line bg-canvas px-5 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-muted sm:grid"><span>Local</span><span>Como usar</span><span>Exemplo</span></div><ul className="divide-y divide-line">{KEYWORDS_PLACEMENT.map((item) => <li key={item.place} className="grid gap-3 px-5 py-5 sm:grid-cols-[180px_1fr_1fr] sm:gap-4"><h3 className="text-sm font-semibold text-ink">{item.place}</h3><p className="text-sm leading-relaxed text-muted">{item.use}</p><p className="text-sm font-medium leading-relaxed text-ink-soft">{item.example}</p></li>)}</ul></div>
    </section>
  );
}

export function KeywordsMistakes() {
  return (
    <section aria-labelledby="keywords-erros" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p><h2 id="keywords-erros" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Erros que deixam as sugestões menos úteis</h2></div><ul className="mt-10 grid gap-3">{KEYWORDS_MISTAKES.map((item) => <li key={item.wrong} className="grid gap-3 rounded-2xl border border-line bg-canvas p-5 sm:grid-cols-2 sm:gap-6"><p className="text-sm leading-relaxed text-muted line-through decoration-rose-300">✕ {item.wrong}</p><p className="border-t border-line pt-3 text-sm font-medium leading-relaxed text-ink-soft sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">✓ {item.right}</p></li>)}</ul></div>
    </section>
  );
}

export function KeywordsFaq() {
  return (
    <section id="duvidas" aria-labelledby="keywords-faq" className="border-t border-line bg-white">
      <div className="container-page py-14 sm:py-20"><div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas</p><h2 id="keywords-faq" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Perguntas sobre palavras-chave para produtos</h2><p className="mt-3 text-[15px] text-muted">O essencial para usar as sugestões sem confundi-las com dados reais de pesquisa.</p></div><div className="divide-y divide-line rounded-2xl border border-line bg-canvas shadow-card">{KEYWORDS_FAQ.map((faq) => <details key={faq.question} className="group p-5 sm:p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink"><h3 className="text-[15px] font-medium">{faq.question}</h3><span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p></details>)}</div></div></div>
    </section>
  );
}
