import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-escrever-beneficios-de-produto";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const TITLE = "Como Escrever Benefícios de Produto: Método com Exemplos";
const DESCRIPTION =
  "Aprenda como transformar características em benefícios de produto sem inventar promessas, com fórmula prática, exemplos e checklist para loja virtual.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["benefícios de produto", "como escrever benefícios", "características e benefícios", "copy de produto", "benefícios para e-commerce"],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: { type: "article", locale: "pt_BR", url: ABSOLUTE_URL, siteName: "AnunciaAI", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const examples = [
  ["Bateria de 40 horas", "Permite usar o produto por longos períodos entre recargas, de acordo com a autonomia informada pelo fabricante."],
  ["Tecido impermeável", "Ajuda a proteger o conteúdo contra contato com água dentro das condições previstas para o material."],
  ["Copo de 2 litros", "Oferece capacidade para preparar volumes maiores em uma única utilização."],
  ["Compatível com USB-C", "Pode ser conectado a dispositivos compatíveis com esse padrão, desde que os demais requisitos também sejam atendidos."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: TITLE, description: DESCRIPTION, mainEntityOfPage: ABSOLUTE_URL, inLanguage: "pt-BR", author: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL }, publisher: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE_URL}/guias` },
      { "@type": "ListItem", position: 3, name: "Benefícios de produto", item: ABSOLUTE_URL },
    ] },
  ],
};

export default function BeneficiosProdutoPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-para-loja-virtual#ferramenta" />
      <main>
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação"><ol className="flex flex-wrap items-center gap-2 text-xs text-muted"><li><Link href="/">Início</Link></li><li>/</li><li><Link href="/guias">Guias</Link></li><li>/</li><li aria-current="page" className="font-medium text-ink-soft">Benefícios de produto</li></ol></nav>
              <div className="mt-10 max-w-4xl"><p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Copy de produto · Loja virtual</p><h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como escrever benefícios de produto</h1><p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Benefício não é uma promessa inventada. Ele explica por que uma característica confirmada pode ser útil para o comprador. O melhor texto conecta especificação, contexto e utilidade real.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/gerador-de-anuncios-para-loja-virtual#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">Gerar benefícios com a ferramenta</Link><Link href="/como-fazer-descricao-para-loja-virtual" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver guia de descrição</Link></div></div>
            </div>
          </header>

          <div className="container-page py-12 sm:py-16"><div className="mx-auto max-w-4xl">
            <section aria-labelledby="formula-beneficios"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Fórmula prática</p><h2 id="formula-beneficios" className="mt-3 text-2xl font-semibold sm:text-3xl">Característica → consequência → benefício</h2><div className="mt-7 grid gap-4 sm:grid-cols-3">{[["Característica", "O dado objetivo e verificável do produto."],["Consequência", "O que essa característica permite ou muda no uso."],["Benefício", "Por que isso pode ser útil para quem compra."]].map(([title, text]) => <article key={title} className="rounded-2xl border border-line bg-white p-5 shadow-card"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-7 text-muted">{text}</p></article>)}</div></section>

            <section aria-labelledby="exemplos-beneficios" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplos</p><h2 id="exemplos-beneficios" className="mt-3 text-2xl font-semibold sm:text-3xl">Transforme a especificação sem exagerar</h2><div className="mt-7 grid gap-4 sm:grid-cols-2">{examples.map(([feature, benefit]) => <article key={feature} className="rounded-2xl border border-line bg-white p-5 shadow-card"><p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Característica</p><h3 className="mt-2 font-semibold">{feature}</h3><p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">Benefício possível</p><p className="mt-2 text-sm leading-7 text-muted">{benefit}</p></article>)}</div></section>

            <section className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Contexto de uso</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">O mesmo recurso pode ter utilidades diferentes</h2><p className="mt-4 text-[15px] leading-7 text-muted">Antes de escrever o benefício, pergunte em qual situação aquela característica faz diferença. Uma mochila com compartimento acolchoado pode ajudar a organizar e proteger um notebook durante o transporte; isso não significa que ela seja indestrutível. Uma garrafa de 1 litro reduz a necessidade de reabastecer com tanta frequência em alguns usos; isso não garante que a capacidade seja ideal para todas as pessoas.</p><p className="mt-4 text-[15px] leading-7 text-muted">Esse cuidado deixa a copy mais específica. Em vez de transformar todo recurso em “mais praticidade” ou “melhor experiência”, descreva a consequência observável e mantenha condicionais quando o resultado depender do modo de uso, de compatibilidade ou de outra variável que o produto não controla.</p></section>

            <section aria-labelledby="erros-beneficios" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Erros comuns</p><h2 id="erros-beneficios" className="mt-3 text-2xl font-semibold sm:text-3xl">O que evitar</h2><ul className="mt-7 grid gap-3 sm:grid-cols-2">{["Trocar uma característica técnica por uma promessa absoluta.","Dizer “o melhor”, “perfeito” ou “garantido” sem base objetiva.","Criar benefício para uma função que o produto não possui.","Confundir opinião com informação comprovável.","Listar benefícios genéricos que serviriam para qualquer produto.","Omitir limitações relevantes quando elas mudam a expectativa do comprador."].map((item) => <li key={item} className="rounded-2xl border border-line bg-white p-5 text-sm leading-7 text-muted shadow-card">{item}</li>)}</ul></section>

            <section aria-labelledby="checklist-beneficios" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p><h2 id="checklist-beneficios" className="mt-3 text-2xl font-semibold sm:text-3xl">Revise cada benefício</h2><ul className="mt-7 grid gap-3">{["Existe uma característica real que sustenta o benefício.","O texto explica utilidade sem transformar possibilidade em garantia.","O benefício é específico para aquele produto.","Não há superlativos ou comparações sem comprovação.","As limitações importantes continuam claras.","A ficha técnica e a descrição dizem a mesma coisa."].map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span className="font-bold text-brand-600">✓</span><span className="text-sm leading-7 text-ink-soft">{item}</span></li>)}</ul></section>

            <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10"><h2 className="text-2xl font-semibold sm:text-3xl">Transforme características em uma primeira versão</h2><p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Informe os dados reais do produto e gere benefícios, descrição, ficha técnica e termos de SEO para revisar antes de publicar.</p><Link href="/gerador-de-anuncios-para-loja-virtual#ferramenta" className="mt-7 inline-flex rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink">Abrir gerador para loja virtual</Link></section>
          </div></div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
