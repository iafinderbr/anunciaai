export default function Loading() {
  return (
    <main className="min-h-[68vh] bg-[#0d0e11] text-white" aria-busy="true" aria-live="polite">
      <div className="container-page py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl border-y border-white/[0.08] py-10">
          <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">
            <span className="h-px w-8 bg-brand-500" aria-hidden="true" />
            Carregando workspace
          </div>
          <div className="mt-8 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            <div className="h-36 animate-pulse bg-[#121316]" />
            <div className="h-36 animate-pulse bg-[#121316]" />
            <div className="h-36 animate-pulse bg-[#121316]" />
          </div>
          <p className="sr-only">Carregando conteúdo do AnunciaAI.</p>
        </div>
      </div>
    </main>
  );
}
