import Link from "next/link";

const guides = [
  { href: "/como-criar-anuncio-no-mercado-livre", eyebrow: "Mercado Livre", title: "Como criar um anúncio no Mercado Livre", description: "Título, fotos, ficha técnica, descrição, preço e revisão em um passo a passo prático." },
  { href: "/como-criar-anuncio-na-shopee", eyebrow: "Shopee", title: "Como criar um anúncio na Shopee", description: "Organize categoria, título, atributos, variações, descrição e preço antes de publicar." },
  { href: "/como-criar-anuncio-na-olx", eyebrow: "OLX", title: "Como criar um anúncio na OLX", description: "Monte um classificado claro com título, fotos, descrição, preço e localização." },
  { href: "/como-fazer-descricao-de-produto", eyebrow: "Descrição", title: "Como fazer uma descrição de produto", description: "Veja uma estrutura pronta para transformar características em benefícios sem inventar informações." },
  { href: "/como-criar-titulo-de-produto", eyebrow: "Título", title: "Como criar título de produto", description: "Use uma fórmula simples para criar títulos claros, pesquisáveis e adequados ao canal." },
  { href: "/como-escolher-palavras-chave-para-produtos", eyebrow: "SEO", title: "Como escolher palavras-chave para produtos", description: "Encontre termos principais, atributos e cauda longa para lojas e marketplaces." },
];

const guideCollections = [
  { title: "Mercado Livre", links: [["/como-criar-anuncio-no-mercado-livre", "Criar anúncio"],["/como-criar-titulo-para-mercado-livre", "Criar título"],["/como-fazer-descricao-para-mercado-livre", "Fazer descrição"],["/como-preencher-ficha-tecnica-mercado-livre", "Preencher ficha técnica"],["/como-escolher-palavras-chave-para-mercado-livre", "Escolher palavras-chave"]] },
  { title: "Shopee", links: [["/como-criar-anuncio-na-shopee", "Criar anúncio"],["/como-criar-titulo-para-shopee", "Criar título"],["/como-fazer-descricao-para-shopee", "Fazer descrição"],["/como-preencher-atributos-na-shopee", "Preencher atributos"]] },
  { title: "OLX", links: [["/como-criar-anuncio-na-olx", "Criar anúncio"],["/como-criar-titulo-para-olx", "Criar título"],["/como-fazer-descricao-para-olx", "Fazer descrição"]] },
  { title: "Facebook Marketplace", links: [["/como-criar-anuncio-no-facebook-marketplace", "Criar anúncio"],["/como-criar-titulo-para-facebook-marketplace", "Criar título"],["/como-fazer-descricao-para-facebook-marketplace", "Fazer descrição"]] },
  { title: "Loja virtual", links: [["/como-criar-pagina-de-produto-para-loja-virtual", "Criar página de produto"],["/como-fazer-descricao-para-loja-virtual", "Fazer descrição"],["/como-escrever-beneficios-de-produto", "Escrever benefícios"],["/seo-para-pagina-de-produto", "SEO para produto"],["/como-fazer-ficha-tecnica-de-produto", "Fazer ficha técnica"]] },
  { title: "Instagram e conteúdo", links: [["/como-criar-legenda-para-instagram", "Criar legenda"],["/como-criar-cta-para-instagram", "Criar CTA"],["/como-escolher-hashtags-para-instagram", "Escolher hashtags"],["/como-criar-nome-de-produto", "Criar nome de produto"],["/como-criar-titulo-de-produto", "Criar título de produto"],["/como-fazer-descricao-de-produto", "Fazer descrição de produto"],["/como-escolher-palavras-chave-para-produtos", "Escolher palavras-chave"]] },
] as const;

export function GuidesHomeSection() {
  return (
    <section aria-labelledby="guias-home-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Guias práticos</p><h2 id="guias-home-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Aprenda a criar antes de publicar</h2><p className="mt-3 text-[15px] leading-relaxed text-muted">Entenda a estrutura de um bom anúncio, veja exemplos e depois use a ferramenta gratuita para acelerar o trabalho.</p></div>
          <Link href="/guias" className="inline-flex w-fit items-center gap-2 rounded-xl border border-line-strong bg-canvas px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600">Ver todos os guias<span aria-hidden="true">→</span></Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{guides.map((guide) => <article key={guide.href} className="rounded-2xl border border-line bg-canvas p-5 shadow-card sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">{guide.eyebrow}</p><h3 className="mt-3 text-lg font-semibold leading-snug text-ink"><Link href={guide.href} className="transition-colors hover:text-brand-600">{guide.title}</Link></h3><p className="mt-2 text-sm leading-relaxed text-muted">{guide.description}</p><Link href={guide.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">Ler guia<span aria-hidden="true">→</span></Link></article>)}</div>
        <div className="mt-12 border-t border-line pt-9"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Explore por canal</p><h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">Encontre o guia certo para cada etapa</h3><p className="mt-2 text-sm leading-6 text-muted">Acesse diretamente os conteúdos de título, descrição, ficha técnica, SEO, CTA, hashtags e publicação de cada canal.</p></div><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{guideCollections.map((collection) => <nav key={collection.title} aria-label={`Guias de ${collection.title}`} className="rounded-2xl border border-line bg-canvas p-5"><p className="text-sm font-semibold text-ink">{collection.title}</p><ul className="mt-3 grid gap-2">{collection.links.map(([href, label]) => <li key={href}><Link href={href} className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand-600"><span aria-hidden="true" className="text-brand-500">→</span>{label}</Link></li>)}</ul></nav>)}</div></div>
      </div>
    </section>
  );
}
