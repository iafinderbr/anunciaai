import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-criar-cta-para-instagram";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-16";
const UPDATED_AT = "2026-08-17";
const TITLE = "Como Criar CTA para Instagram: Exemplos para Produtos";
const DESCRIPTION =
  "Aprenda como criar CTA para Instagram com chamadas claras para comprar, conhecer o produto, tirar dúvidas ou avançar para o próximo passo.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["CTA para Instagram", "chamada para ação Instagram", "CTA para vendas", "legenda para vender produto", "chamada para comprar"],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: { type: "article", locale: "pt_BR", url: ABSOLUTE_URL, siteName: "AnunciaAI", title: TITLE, description: DESCRIPTION, publishedTime: `${PUBLISHED_AT}T12:00:00-03:00`, modifiedTime: `${UPDATED_AT}T12:00:00-03:00` },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const examples = [
  ["Compra direta", "Veja os detalhes do produto e escolha a sua versão pelo link da loja."],
  ["Dúvida antes da compra", "Ficou com dúvida sobre tamanho, material ou compatibilidade? Confira as informações antes de escolher."],
  ["Lançamento", "Conheça a nova versão e veja as características disponíveis."],
  ["Catálogo", "Explore as opções e compare qual modelo combina melhor com o que você precisa."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: TITLE, description: DESCRIPTION, mainEntityOfPage: ABSOLUTE_URL, datePublished: PUBLISHED_AT, dateModified: UPDATED_AT, inLanguage: "pt-BR", author: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL }, publisher: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE_URL}/guias` },
      { "@type": "ListItem", position: 3, name: "CTA para Instagram", item: ABSOLUTE_URL },
    ] },
  ],
};

export default function CtaInstagramPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-legendas-para-instagram#ferramenta" />
      <main id="ferramenta">
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação"><ol className="flex flex-wrap items-center gap-2 text-xs text-muted"><li><Link href="/">Início</Link></li><li>/</li><li><Link href="/guias">Guias</Link></li><li>/</li><li aria-current="page" className="font-medium text-ink-soft">CTA para Instagram</li></ol></nav>
              <div className="mt-10 max-w-4xl"><p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Instagram · Chamada para ação</p><h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como criar CTA para Instagram</h1><p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Uma boa chamada para ação deixa claro qual é o próximo passo. Ela não precisa pressionar o leitor: basta combinar o objetivo da publicação com uma ação simples e coerente.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/gerador-de-legendas-para-instagram#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">Gerar legenda com CTA</Link><Link href="/como-criar-legenda-para-instagram" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver guia de legenda</Link></div></div>
            </div>
          </header>

          <div className="container-page py-12 sm:py-16"><div className="mx-auto max-w-4xl">
            <section aria-labelledby="formula-cta"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Fórmula simples</p><h2 id="formula-cta" className="mt-3 text-2xl font-semibold sm:text-3xl">Objetivo + ação + próximo passo</h2><div className="mt-7 rounded-3xl border border-line bg-canvas p-6 sm:p-8"><p className="text-sm leading-7 text-muted">Primeiro defina o que você quer que a pessoa faça. Depois use um verbo claro e diga onde ou como ela pode continuar. Exemplo: <strong className="text-ink">“Veja as medidas na página do produto e escolha o tamanho que combina com você.”</strong></p></div></section>

            <section aria-labelledby="exemplos-cta" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplos</p><h2 id="exemplos-cta" className="mt-3 text-2xl font-semibold sm:text-3xl">Adapte a chamada ao objetivo do post</h2><div className="mt-7 grid gap-4 sm:grid-cols-2">{examples.map(([title, text]) => <article key={title} className="rounded-2xl border border-line bg-white p-5 shadow-card"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-7 text-muted">{text}</p></article>)}</div></section>

            <section className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Destino do CTA</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">A chamada precisa combinar com o caminho disponível</h2><p className="mt-4 text-[15px] leading-7 text-muted">Antes de escrever “veja no link”, confirme se existe um link acessível naquele contexto e se ele leva à página correta. Se o próximo passo é comparar tamanhos, a página de destino precisa mostrar essas opções. Se o objetivo é conhecer detalhes técnicos, direcione para um local onde essas informações estejam realmente disponíveis.</p><p className="mt-4 text-[15px] leading-7 text-muted">Também vale reduzir atrito entre a frase e a ação. Um CTA como “compare os modelos no catálogo” é mais claro quando o catálogo já abre nas opções relacionadas. Evite pedir comentário, mensagem, clique e compra ao mesmo tempo; escolha a ação que melhor representa o objetivo principal daquele post e deixe as demais informações como apoio.</p></section>

            <section aria-labelledby="erros-cta" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Erros comuns</p><h2 id="erros-cta" className="mt-3 text-2xl font-semibold sm:text-3xl">O que enfraquece uma chamada</h2><ul className="mt-7 grid gap-3 sm:grid-cols-2">{["Usar vários CTAs diferentes no mesmo trecho e deixar o próximo passo confuso.","Criar urgência falsa ou prometer estoque, desconto ou prazo sem confirmar.","Pedir uma ação que não tem relação com o objetivo da publicação.","Usar frases vagas como “corre” ou “não perde” sem explicar o que fazer.","Esconder informações importantes para forçar a pessoa a perguntar no direct.","Escrever uma chamada longa demais depois de uma legenda já extensa."].map((item) => <li key={item} className="rounded-2xl border border-line bg-white p-5 text-sm leading-7 text-muted shadow-card">{item}</li>)}</ul></section>

            <section aria-labelledby="checklist-cta" className="mt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p><h2 id="checklist-cta" className="mt-3 text-2xl font-semibold sm:text-3xl">Antes de publicar</h2><ul className="mt-7 grid gap-3">{["O CTA combina com o objetivo da publicação.","A ação está escrita de forma clara e específica.","O próximo passo realmente existe e está disponível.","Não há urgência, escassez ou benefício inventado.","A chamada cabe naturalmente no final da legenda.","O texto pode ser entendido sem depender de contexto oculto."].map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span className="font-bold text-brand-600">✓</span><span className="text-sm leading-7 text-ink-soft">{item}</span></li>)}</ul></section>

            <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10"><h2 className="text-2xl font-semibold sm:text-3xl">Monte a legenda completa</h2><p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Use o gerador para criar uma primeira versão com gancho, benefícios, chamada para ação e hashtags e revise tudo antes de publicar.</p><Link href="/gerador-de-legendas-para-instagram#ferramenta" className="mt-7 inline-flex rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink">Abrir gerador de legendas</Link></section>
          </div></div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
