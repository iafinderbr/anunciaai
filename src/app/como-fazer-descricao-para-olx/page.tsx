import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-fazer-descricao-para-olx";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-16";
const TITLE = "Como Fazer Descrição para OLX: Modelo e Exemplos";
const DESCRIPTION =
  "Aprenda como fazer descrição para OLX com estrutura pronta, modelo editável, limite de 6.000 caracteres, exemplos e checklist para revisar antes de publicar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como fazer descrição para OLX",
    "descrição OLX",
    "modelo de descrição OLX",
    "exemplo de descrição OLX",
    "descrição de produto OLX",
    "texto para anúncio OLX",
  ],
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: ABSOLUTE_URL,
    siteName: "AnunciaAI",
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: `${PUBLISHED_AT}T12:00:00-03:00`,
    modifiedTime: `${PUBLISHED_AT}T12:00:00-03:00`,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      mainEntityOfPage: ABSOLUTE_URL,
      datePublished: PUBLISHED_AT,
      dateModified: PUBLISHED_AT,
      inLanguage: "pt-BR",
      author: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL },
      publisher: { "@type": "Organization", name: "AnunciaAI", url: SITE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE_URL}/guias` },
        { "@type": "ListItem", position: 3, name: "Descrição para OLX", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const structure = [
  { title: "1. Identifique o item", text: "Comece dizendo exatamente o que está sendo vendido, incluindo marca, modelo e versão quando essas informações forem confirmadas." },
  { title: "2. Explique o estado de conservação", text: "Diga há quanto tempo o item é usado quando souber, descreva marcas de uso e informe defeitos ou reparos que possam influenciar a compra." },
  { title: "3. Liste características e o que acompanha", text: "Inclua medidas, capacidade, material, compatibilidade, acessórios e conteúdo da venda sem repetir campos que já estejam claros no formulário." },
  { title: "4. Feche com informações úteis", text: "Acrescente observações de retirada, teste, montagem ou outra condição real da negociação, sem colocar links, e-mails ou promessas que não possam ser cumpridas." },
];

const checklist = [
  "A descrição corresponde exatamente às fotos e ao título.",
  "O estado de conservação e os defeitos relevantes estão claros.",
  "Marca, modelo, medidas, capacidade e compatibilidade foram conferidos quando se aplicam.",
  "Todos os acessórios e itens incluídos na venda estão corretos.",
  "Não existem links, e-mails ou palavras de busca sem relação com o item.",
  "Não há informações promocionais enganosas ou condições comerciais inventadas.",
  "O texto está dentro do limite atual de 6.000 caracteres informado pela OLX.",
];

export default function ComoFazerDescricaoOlxPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-olx#ferramenta" />
      <main id="ferramenta">
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação">
                <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  <li><Link href="/" className="hover:text-ink">Início</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/guias" className="hover:text-ink">Guias</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="font-medium text-ink-soft">Descrição para OLX</li>
                </ol>
              </nav>

              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Guia prático · Atualizado em agosto de 2026</p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como fazer descrição para OLX</h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Explique o estado do item, características, acessórios e detalhes importantes em um texto claro que complemente os campos do anúncio.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-olx#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white hover:bg-brand-600">Criar anúncio com o gerador gratuito</Link>
                  <a href="#modelo" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver modelo pronto</a>
                </div>
                <p className="mt-5 text-sm text-muted">Leitura de aproximadamente 7 minutos · Por AnunciaAI</p>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section id="regra-principal" aria-labelledby="regra-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Regra principal</p>
                <h2 id="regra-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Use a descrição para completar o que os campos não explicam</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">A OLX recomenda detalhar o produto ou serviço com informações que ainda não apareceram nos outros campos. Para itens usados, transparência sobre conservação e defeitos ajuda o comprador a entender melhor a oferta.</p>
                <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5 text-sm leading-7 text-ink-soft">A Central de Ajuda da OLX informa atualmente limite de 6.000 caracteres para a descrição. Links e e-mails não são permitidos no texto do anúncio, e palavras de busca sem relação com o item também devem ser evitadas.</div>
              </section>

              <section id="estrutura" aria-labelledby="estrutura-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Estrutura</p>
                <h2 id="estrutura-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Uma descrição simples em quatro blocos</h2>
                <div className="mt-8 grid gap-4">
                  {structure.map((item) => (
                    <section key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card"><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted">{item.text}</p></section>
                  ))}
                </div>
              </section>

              <section id="modelo" aria-labelledby="modelo-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Modelo editável</p>
                <h2 id="modelo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Modelo de descrição para OLX</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">Troque os campos entre colchetes apenas por informações verdadeiras e remova o que não se aplicar.</p>
                <div className="mt-6 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                  <p className="whitespace-pre-line text-sm leading-7 text-ink-soft">{`[NOME DO PRODUTO] [MARCA/MODELO, SE HOUVER]\n\nEstado de conservação:\n[EXPLIQUE O ESTADO REAL, MARCAS DE USO E DEFEITOS RELEVANTES]\n\nCaracterísticas:\n• [CARACTERÍSTICA 1]\n• [CARACTERÍSTICA 2]\n• [MEDIDA, CAPACIDADE OU COMPATIBILIDADE]\n\nAcompanha:\n• [ITENS INCLUÍDOS NA VENDA]\n\nObservações:\n[INFORMAÇÃO IMPORTANTE SOBRE TESTE, RETIRADA OU OUTRO DETALHE REAL]`}</p>
                </div>
              </section>

              <section id="exemplo" aria-labelledby="exemplo-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplo</p>
                <h2 id="exemplo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Exemplo com um notebook usado</h2>
                <div className="mt-6 rounded-3xl border border-line bg-canvas p-6 sm:p-8">
                  <p className="text-sm leading-7 text-ink-soft">Notebook Lenovo IdeaPad 3 com Ryzen 5 e 8 GB de RAM. Produto usado, funcionando normalmente, com pequenas marcas de uso na tampa que aparecem nas fotos.</p>
                  <p className="mt-4 text-sm leading-7 text-ink-soft">Acompanha carregador original. Tela, teclado, Wi-Fi e bateria estão funcionando. Antes de fechar a compra, confira pelas fotos o estado externo e confirme qualquer detalhe importante diretamente na negociação.</p>
                </div>
              </section>

              <section id="erros" aria-labelledby="erros-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Erros comuns</p>
                <h2 id="erros-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">O que enfraquece a descrição</h2>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Esconder marcas de uso, defeitos ou reparos relevantes.",
                    "Usar palavras-chave de produtos diferentes para tentar aparecer em mais buscas.",
                    "Colocar links, e-mails ou informações de contato proibidas no campo de descrição.",
                    "Copiar uma descrição de outro anúncio e manter dados que não pertencem ao seu item.",
                    "Prometer acessórios, garantia, entrega ou condições que não existem.",
                    "Criar um bloco enorme de texto sem separar características e observações.",
                  ].map((item) => <li key={item} className="rounded-2xl border border-line bg-white p-5 text-sm leading-7 text-muted shadow-card">{item}</li>)}
                </ul>
              </section>

              <section id="checklist" aria-labelledby="checklist-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Checklist</p>
                <h2 id="checklist-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Revise antes de publicar</h2>
                <ul className="mt-7 grid gap-3">
                  {checklist.map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span className="font-bold text-brand-600">✓</span><span className="text-sm leading-7 text-ink-soft">{item}</span></li>)}
                </ul>
              </section>

              <section className="mt-16 rounded-3xl bg-ink p-7 text-white sm:p-10">
                <h2 className="text-2xl font-semibold sm:text-3xl">Quer gerar uma primeira versão?</h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">Informe o produto, estado e características para organizar título, descrição e benefícios antes da revisão final.</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-olx#ferramenta" className="rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink hover:bg-brand-500 hover:text-white">Abrir gerador para OLX</Link>
                  <Link href="/como-criar-titulo-para-olx" className="rounded-2xl border border-white/20 px-6 py-3.5 text-center text-sm font-semibold text-white hover:border-white/50">Ver guia de título</Link>
                </div>
              </section>

              <section aria-labelledby="fontes-titulo" className="mt-16 border-t border-line pt-8">
                <h2 id="fontes-titulo" className="text-base font-semibold">Fontes e revisão</h2>
                <p className="mt-3 text-sm leading-7 text-muted">Conteúdo revisado em 16 de agosto de 2026 com base na Central de Ajuda da OLX. Limites e regras podem mudar.</p>
                <ul className="mt-4 grid gap-2 text-sm text-muted">
                  <li><a href="https://ajuda.olx.com.br/s/article/dicas-como-fazer-bom-anuncio" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">OLX — Dicas para um bom anúncio</a></li>
                  <li><a href="https://ajuda.olx.com.br/s/article/como-publicar-anuncio" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-600">OLX — Como publicar anúncio</a></li>
                </ul>
              </section>
            </div>

            <aside className="hidden lg:block"><div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Neste guia</p><nav aria-label="Índice do guia"><ul className="mt-4 grid gap-3 text-sm text-muted"><li><a href="#regra-principal" className="hover:text-brand-600">Regra principal</a></li><li><a href="#estrutura" className="hover:text-brand-600">Estrutura</a></li><li><a href="#modelo" className="hover:text-brand-600">Modelo</a></li><li><a href="#exemplo" className="hover:text-brand-600">Exemplo</a></li><li><a href="#erros" className="hover:text-brand-600">Erros comuns</a></li><li><a href="#checklist" className="hover:text-brand-600">Checklist</a></li></ul></nav></div></aside>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
