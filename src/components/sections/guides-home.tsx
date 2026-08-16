import Link from "next/link";

const guides = [
  {
    href: "/como-criar-anuncio-no-mercado-livre",
    eyebrow: "Mercado Livre",
    title: "Como criar um anúncio no Mercado Livre",
    description: "Título, fotos, ficha técnica, descrição, preço e revisão em um passo a passo prático.",
  },
  {
    href: "/como-criar-anuncio-na-shopee",
    eyebrow: "Shopee",
    title: "Como criar um anúncio na Shopee",
    description: "Organize categoria, título, atributos, variações, descrição e preço antes de publicar.",
  },
  {
    href: "/como-criar-anuncio-na-olx",
    eyebrow: "OLX",
    title: "Como criar um anúncio na OLX",
    description: "Monte um classificado claro com título, fotos, descrição, preço e localização.",
  },
  {
    href: "/como-fazer-descricao-de-produto",
    eyebrow: "Descrição",
    title: "Como fazer uma descrição de produto",
    description: "Veja uma estrutura pronta para transformar características em benefícios sem inventar informações.",
  },
  {
    href: "/como-criar-titulo-de-produto",
    eyebrow: "Título",
    title: "Como criar título de produto",
    description: "Use uma fórmula simples para criar títulos claros, pesquisáveis e adequados ao canal.",
  },
  {
    href: "/como-escolher-palavras-chave-para-produtos",
    eyebrow: "SEO",
    title: "Como escolher palavras-chave para produtos",
    description: "Encontre termos principais, atributos e cauda longa para lojas e marketplaces.",
  },
];

export function GuidesHomeSection() {
  return (
    <section aria-labelledby="guias-home-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Guias práticos</p>
            <h2 id="guias-home-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Aprenda a criar antes de publicar
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Entenda a estrutura de um bom anúncio, veja exemplos e depois use a ferramenta gratuita para acelerar o trabalho.
            </p>
          </div>

          <Link
            href="/guias"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-line-strong bg-canvas px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600"
          >
            Ver todos os guias
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.href} className="rounded-2xl border border-line bg-canvas p-5 shadow-card sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">{guide.eyebrow}</p>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">
                <Link href={guide.href} className="transition-colors hover:text-brand-600">
                  {guide.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{guide.description}</p>
              <Link
                href={guide.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Ler guia
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
