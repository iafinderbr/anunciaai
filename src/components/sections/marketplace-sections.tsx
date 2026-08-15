import {
  MARKETPLACE_EXAMPLE,
  MARKETPLACE_FAQ,
  MARKETPLACE_FEATURES,
  MARKETPLACE_MISTAKES,
  MARKETPLACE_STEPS,
  MARKETPLACE_STRUCTURE,
} from "@/lib/marketplace-content";

export function MarketplaceHowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="marketplace-como-funciona-titulo"
      className="border-y border-line bg-white"
    >
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Como funciona</p>
          <h2 id="marketplace-como-funciona-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Do produto ao classificado em 3 passos
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Você informa os dados do item, recebe uma primeira versão e revisa antes de preencher o Marketplace.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {MARKETPLACE_STEPS.map((step, index) => (
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

export function MarketplaceStructure() {
  return (
    <section aria-labelledby="marketplace-estrutura-titulo" className="container-page py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">A estrutura</p>
          <h2 id="marketplace-estrutura-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            O que um bom anúncio no Marketplace precisa ter
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Fotos, informações corretas e uma descrição coerente com a condição do item ajudam o comprador a avaliar o produto.
          </p>

          <ol className="mt-6 space-y-4">
            {MARKETPLACE_STRUCTURE.map((item, index) => (
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
              Bicicleta Aro 29 21 Marchas Seminova Quadro de Alumínio
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">
                Título curto e identificável
              </span>
              <span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-ink-soft">
                Sem limite oficial atribuído à Meta
              </span>
              <span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-ink-soft">
                Condição incluída
              </span>
            </div>
          </div>

          <div className="mt-3 rounded-2xl border border-line bg-canvas p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Estado de conservação</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              A IA identifica sinais de <strong className="font-medium text-ink">novo</strong>,{" "}
              <strong className="font-medium text-ink">seminovo</strong> ou{" "}
              <strong className="font-medium text-ink">usado</strong> somente quando essas informações aparecem nos dados
              que você fornece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MarketplaceFeatures() {
  return (
    <section id="recursos" aria-labelledby="marketplace-recursos-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Recursos</p>
          <h2 id="marketplace-recursos-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Uma primeira versão do classificado, gerada de uma vez
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Você informa o produto uma única vez e recebe texto para revisar antes de preencher os campos do Marketplace.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETPLACE_FEATURES.map((feature) => (
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

export function MarketplaceMistakes() {
  return (
    <section aria-labelledby="marketplace-erros-titulo" className="container-page py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
        <h2 id="marketplace-erros-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Erros comuns em anúncios no Marketplace
        </h2>
        <p className="mt-3 text-[15px] text-muted">
          Use os exemplos abaixo para conferir o texto antes de publicar.
        </p>
      </div>

      <ul className="mt-10 grid gap-3">
        {MARKETPLACE_MISTAKES.map((item) => (
          <li
            key={item.wrong}
            className="grid gap-3 rounded-2xl border border-line bg-white p-5 shadow-card sm:grid-cols-2 sm:gap-6"
          >
            <div className="flex gap-3">
              <span aria-hidden="true" className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-rose-50 text-[11px] font-bold text-rose-600">✕</span>
              <p className="text-sm leading-relaxed text-muted line-through decoration-rose-300">{item.wrong}</p>
            </div>
            <div className="flex gap-3 border-t border-line pt-3 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <span aria-hidden="true" className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-600">✓</span>
              <p className="text-sm font-medium leading-relaxed text-ink-soft">{item.right}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <h3 className="text-base font-semibold">Na prática: anúncio fraco × anúncio melhor</h3>
        <p className="mt-1.5 text-sm text-muted">Mesmo produto, com níveis de informação diferentes.</p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-rose-600">Anúncio fraco</p>
            <p className="mt-3 text-sm leading-relaxed text-rose-900/70">{MARKETPLACE_EXAMPLE.bad}</p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-emerald-700">Anúncio melhor</p>
            <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-emerald-900/80">{MARKETPLACE_EXAMPLE.good}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MarketplaceFaq() {
  return (
    <section id="duvidas" aria-labelledby="marketplace-faq-titulo" className="border-t border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas</p>
            <h2 id="marketplace-faq-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Perguntas sobre anúncios no Marketplace
            </h2>
            <p className="mt-3 text-[15px] text-muted">Respostas para revisar o classificado antes de publicar.</p>
          </div>

          <div className="divide-y divide-line rounded-2xl border border-line bg-canvas shadow-card">
            {MARKETPLACE_FAQ.map((faq) => (
              <details key={faq.question} className="group p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink">
                  <h3 className="text-[15px] font-medium">{faq.question}</h3>
                  <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45">+</span>
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
