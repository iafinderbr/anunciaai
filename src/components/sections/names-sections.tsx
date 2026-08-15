import Link from "next/link";
import { NAMES_DIFFERENCES, NAMES_EXAMPLES, NAMES_FAQ, NAMES_FEATURES, NAMES_MISTAKES, NAMES_STEPS } from "@/lib/names-content";

export function NamesHowItWorks() { return <section id="como-funciona" className="border-y border-line bg-white"><div className="container-page py-14 sm:py-20"><p className="text-xs font-semibold uppercase tracking-[.14em] text-brand-600">Como funciona</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Da ideia ao nome em 3 passos</h2><ol className="mt-10 grid gap-4 md:grid-cols-3">{NAMES_STEPS.map((item, index) => <li key={item.title} className="rounded-2xl border border-line bg-canvas p-6"><span className="grid size-9 place-items-center rounded-xl bg-ink text-sm font-semibold text-white">{index + 1}</span><h3 className="mt-4 font-semibold">{item.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p></li>)}</ol></div></section>; }

export function NamesDifference() { return <section className="container-page py-14 sm:py-20"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.14em] text-brand-600">Não é a mesma coisa</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Nome do produto não é título do anúncio</h2><p className="mt-3 text-[15px] text-muted">O nome cria identidade. O título explica o item e ajuda a encontrá-lo na busca.</p></div><div className="mt-10 grid gap-4 md:grid-cols-2">{NAMES_DIFFERENCES.map((item) => <article key={item.label} className="rounded-2xl border border-line bg-white p-6 shadow-card"><p className="text-xs font-semibold uppercase tracking-[.08em] text-brand-600">{item.label}</p><h3 className="mt-3 text-2xl font-semibold">{item.example}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{item.purpose}</p></article>)}</div></section>; }

export function NamesFeatures() { return <section id="recursos" className="border-y border-line bg-white"><div className="container-page py-14 sm:py-20"><p className="text-xs font-semibold uppercase tracking-[.14em] text-brand-600">Recursos</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Mais caminhos para encontrar o nome certo</h2><ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{NAMES_FEATURES.map((item) => <li key={item.title} className="rounded-2xl border border-line bg-canvas p-6"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p></li>)}</ul></div></section>; }

export function NamesMistakes() { return <section className="container-page py-14 sm:py-20"><p className="text-xs font-semibold uppercase tracking-[.14em] text-brand-600">Boas práticas</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Erros que enfraquecem um nome</h2><ul className="mt-10 grid gap-3">{NAMES_MISTAKES.map((item) => <li key={item.wrong} className="grid gap-3 rounded-2xl border border-line bg-white p-5 shadow-card sm:grid-cols-2"><p className="text-sm text-muted line-through decoration-rose-300">✕ {item.wrong}</p><p className="text-sm font-medium text-ink-soft">✓ {item.right}</p></li>)}</ul></section>; }

export function NamesExamples() {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[.14em] text-brand-600">Exemplos</p>
        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Inspiração para diferentes categorias</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {NAMES_EXAMPLES.map((item) => (
            <article key={item.category} className="rounded-2xl border border-line bg-canvas p-6">
              <h3 className="font-semibold">{item.category}</h3>
              <ul className="mt-3 space-y-2">
                {item.names.map((name) => <li key={name} className="rounded-lg bg-white px-3 py-2 text-sm font-medium">{name}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-semibold">Quer um método para avaliar as ideias?</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">Veja briefing, estilos, exemplos e verificações importantes antes do lançamento.</p>
          </div>
          <Link href="/como-criar-nome-de-produto" className="shrink-0 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">Ler o guia gratuito</Link>
        </div>
      </div>
    </section>
  );
}

export function NamesFaq() { return <section className="border-t border-line bg-white"><div className="container-page py-14 sm:py-20"><div className="grid gap-8 lg:grid-cols-[340px_1fr] lg:gap-16"><div><p className="text-xs font-semibold uppercase tracking-[.14em] text-brand-600">Dúvidas</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Perguntas sobre nomes de produtos</h2></div><div className="divide-y divide-line rounded-2xl border border-line bg-canvas">{NAMES_FAQ.map((item) => <details key={item.question} className="group p-5 sm:p-6"><summary className="flex cursor-pointer list-none justify-between gap-4 text-[15px] font-medium"><h3>{item.question}</h3><span className="group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p></details>)}</div></div></div></section>; }
