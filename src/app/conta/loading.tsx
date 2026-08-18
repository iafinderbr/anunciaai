export default function AccountLoading() {
  return (
    <main className="min-h-[70vh] bg-[#0d0e11] text-white" aria-busy="true" aria-live="polite">
      <div className="container-page py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="border-y border-white/[0.08] py-4">
            <div className="h-3 w-36 animate-pulse bg-white/[0.07]" />
          </div>
          <div className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">
            <span className="h-px w-8 bg-brand-500" aria-hidden="true" />
            Carregando workspace
          </div>
          <div className="mt-6 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 xl:grid-cols-4">
            <div className="h-36 animate-pulse bg-[#121316]" />
            <div className="h-36 animate-pulse bg-[#121316]" />
            <div className="h-36 animate-pulse bg-[#121316]" />
            <div className="h-36 animate-pulse bg-[#121316]" />
          </div>
          <p className="sr-only">Carregando sua conta AnunciaAI.</p>
        </div>
      </div>
    </main>
  );
}
