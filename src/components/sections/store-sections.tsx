import {
  STORE_FAQ,
  STORE_FEATURES,
  STORE_MISTAKES,
  STORE_PAGE_BLOCKS,
  STORE_PAGE_EXAMPLE,
  STORE_SEO_BREAKDOWN,
  STORE_STEPS,
} from "@/lib/store-content";

export function StoreHowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="store-como-funciona-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Como funciona</p><h2 id="store-como-funciona-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Dos dados do produto aos blocos da página em 3 passos</h2><p className="mt-3 text-[15px] text-muted">Informe as características, gere a primeira versão e revise cada bloco antes de usar na sua loja.</p></div>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">{STORE_STEPS.map((step, index) => <li key={step.title} className="rounded-2xl border border-line bg-canvas p-6"><span className="grid size-9 place-items-center rounded-xl bg-ink text-sm font-semibold text-white">{index + 1}</span><h3 className="mt-4 text-base font-semibold">{step.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p></li>)}</ol>
      </div>
    </section>
  );
}

export function StoreAnatomy() {
  return (
    <section aria-labelledby="store-anatomia-titulo" className="container-page py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
        <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">A estrutura</p><h2 id="store-anatomia-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Blocos úteis em uma página de produto</h2><p className="mt-3 text-[15px] text-muted">Título, descrição, benefícios, ficha técnica e campos de SEO cumprem funções diferentes e precisam permanecer coerentes entre si.</p><ol className="mt-6 space-y-4">{STORE_PAGE_BLOCKS.map((item, index) => <li key={item.title} className="flex gap-3"><span className="grid size-6 shrink-0 place-items-center rounded-md bg-brand-50 text-[11px] font-bold text-brand-700">{index + 1}</span><div><h3 className="text-[15px] font-semibold text-ink">{item.title}</h3><p className="mt-0.5 text-sm leading-relaxed text-muted">{item.text}</p></div></li>)}</ol></div>
        <div className="lg:pt-10"><div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Exemplo de título</p><p className="mt-3 font-mono text-[15px] leading-relaxed text-ink">Cafeteira Espresso 15 Bar — Inox Escovado | Eletrodomésticos</p><div className="mt-3 flex flex-wrap items-center gap-2 text-xs"><span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-ink-soft">Preview editorial</span><span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-ink-soft">Revisar antes de usar</span></div></div><div className="mt-3 rounded-2xl border border-line bg-canvas p-5"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Sugestões de SEO incluídas</p><ul className="mt-3 space-y-2">{STORE_SEO_BREAKDOWN.map((item) => <li key={item.label} className="grid gap-1 sm:grid-cols-[minmax(0,130px)_1fr] sm:gap-4"><p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-600">{item.label}</p><p className="text-sm text-ink-soft">{item.value}</p></li>)}</ul><p className="mt-4 text-xs leading-5 text-muted">Esses campos são sugestões de texto. A ferramenta não mede volume, concorrência ou posição em mecanismos de busca.</p></div></div>
      </div>
    </section>
  );
}

export function StoreFeatures() {
  return (
    <section id="recursos" aria-labelledby="store-recursos-titulo" className="border-y border-line bg-white"><div className="container-page py-14 sm:py-20"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Recursos</p><h2 id="store-recursos-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Vários blocos organizados a partir do mesmo produto</h2><p className="mt-3 text-[15px] text-muted">Você informa o produto uma vez e recebe versões para conferir e adaptar aos campos da sua loja.</p></div><ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{STORE_FEATURES.map((feature) => <li key={feature.title} className="rounded-2xl border border-line bg-canvas p-6 shadow-card"><h3 className="text-base font-semibold">{feature.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{feature.text}</p></li>)}</ul></div></section>
  );
}

export function StoreMistakes() {
  return (
    <section aria-labelledby="store-erros-titulo" className="container-page py-14 sm:py-20"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p><h2 id="store-erros-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Erros comuns em páginas de produto</h2><p className="mt-3 text-[15px] text-muted">Use o conteúdo gerado como primeira versão e confira se todos os blocos continuam fiéis ao item vendido.</p></div><ul className="mt-10 grid gap-3">{STORE_MISTAKES.map((item) => <li key={item.wrong} className="grid gap-3 rounded-2xl border border-line bg-white p-5 shadow-card sm:grid-cols-2 sm:gap-6"><div className="flex gap-3"><span aria-hidden="true" className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-rose-50 text-[11px] font-bold text-rose-600">✕</span><p className="text-sm leading-relaxed text-muted line-through decoration-rose-300">{item.wrong}</p></div><div className="flex gap-3 border-t border-line pt-3 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0"><span aria-hidden="true" className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-600">✓</span><p className="text-sm font-medium leading-relaxed text-ink-soft">{item.right}</p></div></li>)}</ul><div className="mt-10"><h3 className="text-base font-semibold">Na prática: página fraca × página melhor</h3><p className="mt-1.5 text-sm text-muted">Mesmo produto, apresentações com níveis diferentes de informação.</p><div className="mt-5 grid gap-3 md:grid-cols-2"><div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-5"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-rose-600">Página fraca</p><p className="mt-3 text-sm leading-relaxed text-rose-900/70">{STORE_PAGE_EXAMPLE.bad}</p></div><div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-emerald-700">Página melhor</p><p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-emerald-900/80">{STORE_PAGE_EXAMPLE.good}</p></div></div></div></section>
  );
}

export function StoreFaq() {
  return (
    <section id="duvidas" aria-labelledby="store-faq-titulo" className="border-t border-line bg-white"><div className="container-page py-14 sm:py-20"><div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas</p><h2 id="store-faq-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Perguntas sobre páginas de produto</h2><p className="mt-3 text-[15px] text-muted">O essencial para gerar, revisar e adaptar os blocos à sua plataforma.</p></div><div className="divide-y divide-line rounded-2xl border border-line bg-canvas shadow-card">{STORE_FAQ.map((faq) => <details key={faq.question} className="group p-5 sm:p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink"><h3 className="text-[15px] font-medium">{faq.question}</h3><span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p></details>)}</div></div></div></section>
  );
}
