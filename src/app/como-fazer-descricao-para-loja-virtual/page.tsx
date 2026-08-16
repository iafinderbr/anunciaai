import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-fazer-descricao-para-loja-virtual";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const TITLE = "Como Fazer Descrição para Loja Virtual: Modelo e Checklist";
const DESCRIPTION =
  "Aprenda como fazer descrição para loja virtual com estrutura clara, benefícios, detalhes do produto, ficha técnica e revisão antes de publicar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["descrição para loja virtual", "descrição para e-commerce", "como fazer descrição de produto", "texto para página de produto", "descrição de produto para loja"],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: { type: "article", locale: "pt_BR", url: ABSOLUTE_URL, siteName: "AnunciaAI", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const blocks = [
  ["1. Identifique o produto", "Comece dizendo o que é, para quem faz sentido e qual versão está sendo apresentada. Marca, modelo, tamanho, material ou capacidade entram quando ajudam a diferenciar o item."],
  ["2. Explique os benefícios", "Transforme características confirmadas em consequências úteis para o comprador. Evite promessas que não podem ser sustentadas pelas especificações reais."],
  ["3. Dê contexto de uso", "Mostre situações em que o produto pode ser útil sem inventar desempenho, durabilidade ou resultados que não estejam comprovados."],
  ["4. Organize os detalhes", "Use ficha técnica, medidas, conteúdo da embalagem, compatibilidade e cuidados para responder dúvidas objetivas antes da compra."],
  ["5. Termine com próximo passo", "Direcione o comprador para escolher uma variação, conferir disponibilidade ou concluir a compra, sem criar urgência falsa."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: TITLE, description: DESCRIPTION, mainEntityOfPage: ABSOLUTE_URL, inLanguage: "pt-BR", author: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL }, publisher: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE_URL}/guias` },
      { "@type": "ListItem", position: 3, name: "Descrição para loja virtual", item: ABSOLUTE_URL },
    ] },
  ],
};

export default function DescricaoLojaVirtualPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-para-loja-virtual#ferramenta" />
      <main>
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação"><ol className="flex flex-wrap items-center gap-2 text-xs text-muted"><li><Link href="/">Início</Link></li><li>/</li><li><Link href="/guias">Guias</Link></li><li>/</li><li aria-current="page" className="font-medium text-ink-soft">Descrição para loja virtual</li></ol></nav>
              <div className="mt-10 max-w-4xl"><p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Loja virtual · Página de produto</p><h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como fazer descrição para loja virtual</h1><p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Uma boa descrição ajuda o comprador a entender o produto sem esconder o que importa. Organize identificação, benefícios, contexto de uso e informações técnicas de forma fácil de revisar.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/gerador-de-anuncios-para-loja-virtual#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">Gerar conteúdo para loja</Link><Link href="/como-criar-pagina-de-produto-para-loja-virtual" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver página de produto completa</Link></div></div>
            </div>
          </header>

          <div className="container-page py-12 sm:py-16"><div className="mx-auto max-w-4xl">
            <section aria-labelledby="estrutura-descricao-loja"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Estrutura</p><h2 id="estrutura-descricao-loja" className="mt-3 text-2xl font-semibold sm:text-3xl">5 blocos para escrever a descrição</h2><div className="mt-8 grid gap-4">{blocks.map(([title, text]) => <section key={title} className="rounded-2xl border border-line bg-white p-6 shadow-card"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-7 text-muted">{text}</p></section>)}</div></section>

            <section aria-labelledby="modelo-descricao-loja" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Modelo editável</p><h2 id="modelo-descricao-loja" className="mt-3 text-2xl font-semibold sm:text-3xl">Use como ponto de partida</h2><div className="mt-7 rounded-3xl border border-line bg-canvas p-6 sm:p-8"><p className="whitespace-pre-line text-sm leading-7 text-ink-soft">{`[Produto + versão] foi desenvolvido para [uso/público].\n\nEntre os principais destaques estão [benefício 1] e [benefício 2], com base em [características confirmadas].\n\nDetalhes importantes:\n• Material: [material]\n• Medidas: [medidas]\n• Compatibilidade: [quando aplicável]\n• Conteúdo da embalagem: [itens]\n\nConfira as variações e informações disponíveis antes de finalizar a compra.`}</p></div></section>

            <section aria-labelledby="erros-descricao-loja" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Erros comuns</p><h2 id="erros-descricao-loja" className="mt-3 text-2xl font-semibold sm:text-3xl">O que evitar</h2><ul className="mt-7 grid gap-3 sm:grid-cols-2">{["Repetir o título e a ficha técnica sem acrescentar contexto.","Inventar benefícios que não são sustentados pelas características do produto.","Esconder medidas, compatibilidade ou restrições relevantes.","Criar blocos longos sem subtítulos ou listas quando há muitos detalhes.","Usar urgência ou escassez sem confirmação real de estoque ou prazo.","Publicar uma descrição que contradiz fotos, variações ou ficha técnica."].map((item) => <li key={item} className="rounded-2xl border border-line bg-white p-5 text-sm leading-7 text-muted shadow-card">{item}</li>)}</ul></section>

            <section aria-labelledby="checklist-descricao-loja" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p><h2 id="checklist-descricao-loja" className="mt-3 text-2xl font-semibold sm:text-3xl">Antes de publicar</h2><ul className="mt-7 grid gap-3">{["A descrição identifica exatamente a versão vendida.","Os benefícios vêm de características confirmadas.","Medidas, compatibilidade e conteúdo da embalagem estão corretos quando aplicáveis.","O texto complementa a ficha técnica em vez de contradizê-la.","A leitura está organizada em blocos curtos e claros.","Não há promessa, prazo, desconto ou escassez inventada."].map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span className="font-bold text-brand-600">✓</span><span className="text-sm leading-7 text-ink-soft">{item}</span></li>)}</ul></section>

            <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10"><h2 className="text-2xl font-semibold sm:text-3xl">Gere uma primeira versão para revisar</h2><p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Informe as características reais do produto e organize título, descrição, benefícios, ficha técnica e termos de SEO para adaptar à sua loja.</p><Link href="/gerador-de-anuncios-para-loja-virtual#ferramenta" className="mt-7 inline-flex rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink">Abrir gerador para loja virtual</Link></section>
          </div></div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
