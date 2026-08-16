import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-criar-legenda-para-instagram";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-15";

const TITLE = "Como Criar Legenda para Instagram: Guia Prático";
const DESCRIPTION =
  "Aprenda como criar legenda para Instagram com gancho, apresentação do produto, benefícios, chamada para ação, hashtags e revisão.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como criar legenda para instagram",
    "legenda para vender produto",
    "legenda para loja no instagram",
    "legenda de produto instagram",
    "como escrever legenda instagram",
    "legenda para divulgação de produto",
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
        { "@type": "ListItem", position: 3, name: "Como criar legenda para Instagram", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const preparation = [
  "Nome e versão exata do produto",
  "Principal característica ou diferencial confirmado",
  "Público e situação de uso",
  "Preço, quando fizer sentido divulgar",
  "Próximo passo que você quer do leitor",
  "Tom de voz usado pela sua loja",
];

const steps = [
  {
    id: "objetivo",
    number: "01",
    title: "Defina o objetivo da publicação",
    text: "Antes de escrever, escolha o que a legenda precisa provocar: apresentar um produto, gerar conversa, levar para a loja, explicar um diferencial ou anunciar uma novidade. Isso evita misturar chamadas diferentes no mesmo texto.",
    points: ["Use uma ação principal por publicação.", "A legenda deve combinar com a imagem ou vídeo que acompanha o post."],
  },
  {
    id: "gancho",
    number: "02",
    title: "Abra com uma frase que dê contexto rápido",
    text: "As primeiras linhas devem deixar claro por que aquele produto merece atenção. Pode ser uma situação de uso, uma novidade, uma pergunta ou a apresentação direta do item.",
    points: ["Evite começar com frases vagas que serviriam para qualquer produto.", "Não prometa resultados que as características não sustentam."],
  },
  {
    id: "produto",
    number: "03",
    title: "Apresente o produto sem enrolação",
    text: "Diga o que é o produto e para quem ele pode ser útil. Nome, tipo, material, tamanho, função ou modelo ajudam o leitor a entender rapidamente o que está sendo divulgado.",
    points: ["Use o nome real do produto.", "Inclua apenas características confirmadas."],
  },
  {
    id: "beneficios",
    number: "04",
    title: "Conecte características a benefícios reais",
    text: "Depois de citar uma característica, explique o efeito prático dela. Isso torna o texto mais fácil de entender do que uma lista técnica isolada.",
    points: ["Mantenha a característica visível para o leitor conferir.", "Prefira benefícios específicos a elogios como “incrível” ou “perfeito”."],
  },
  {
    id: "leitura",
    number: "05",
    title: "Organize a legenda para leitura no celular",
    text: "Use parágrafos curtos, quebras de linha e listas quando ajudarem a separar as ideias. Emojis podem funcionar como apoio visual, desde que não substituam informações importantes.",
    points: ["Evite blocos longos sem respiro.", "Não use símbolos em excesso a ponto de dificultar a leitura."],
  },
  {
    id: "cta",
    number: "06",
    title: "Termine com uma chamada para ação clara",
    text: "Diga o que o leitor pode fazer depois: visitar o link disponível no perfil, comentar, enviar uma mensagem, salvar a publicação ou conhecer uma coleção. A chamada precisa corresponder ao caminho que realmente existe no perfil.",
    points: ["Não anuncie link, cupom ou condição que não esteja disponível.", "Escolha uma ação coerente com o objetivo definido no início."],
  },
  {
    id: "hashtags",
    number: "07",
    title: "Use hashtags somente quando forem relevantes",
    text: "Se usar hashtags, prefira termos ligados ao produto, à categoria, ao uso ou ao nicho. Elas devem complementar a legenda; não precisam carregar informações essenciais sobre a oferta.",
    points: ["Evite listas genéricas que não descrevem o conteúdo.", "Priorize relevância em vez de quantidade."],
  },
  {
    id: "revisao",
    number: "08",
    title: "Revise texto, produto e chamada antes de publicar",
    text: "Confira nome, preço, características, links e qualquer condição citada. Leia a legenda junto com a imagem ou vídeo para garantir que os dois contam a mesma história.",
    points: ["Remova promessas que não podem ser comprovadas.", "Confira se a CTA ainda leva ao destino certo."],
  },
];

const questions = [
  {
    question: "O que uma legenda de produto precisa ter?",
    answer:
      "Uma estrutura simples é: contexto ou gancho, apresentação do produto, benefícios apoiados em características reais e uma chamada para ação. Hashtags podem ser adicionadas quando forem relevantes ao conteúdo.",
  },
  {
    question: "A legenda precisa ser longa?",
    answer:
      "Não existe um tamanho único que funcione para todo produto. Use o espaço necessário para explicar a ideia sem repetir informações. Uma novidade simples pode pedir poucas linhas; um produto técnico pode exigir mais contexto.",
  },
  {
    question: "Quantas hashtags devo usar?",
    answer:
      "Não é necessário perseguir um número fixo. Escolha hashtags relevantes ao produto, à categoria e ao público, e remova termos genéricos que não ajudam a descrever a publicação.",
  },
  {
    question: "Posso usar IA para criar legendas?",
    answer:
      "Sim. A ferramenta pode organizar uma primeira versão com gancho, benefícios e chamada para ação. Antes de publicar, confira se preço, características, condições e destino da CTA correspondem ao que sua loja realmente oferece.",
  },
];

export default function ComoCriarLegendaInstagramPage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-legendas-para-instagram#ferramenta" />
      <main id="ferramenta">
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação"><ol className="flex flex-wrap items-center gap-2 text-xs text-muted"><li><Link href="/" className="transition-colors hover:text-ink">Início</Link></li><li aria-hidden="true">/</li><li><Link href="/guias" className="transition-colors hover:text-ink">Guias</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="font-medium text-ink-soft">Legenda para Instagram</li></ol></nav>
              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Guia prático · Atualizado em agosto de 2026</p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como criar legenda para Instagram que apresenta o produto com clareza</h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Monte uma legenda com contexto, produto, benefícios, chamada para ação e hashtags relevantes sem inventar características ou condições.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/gerador-de-legendas-para-instagram#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">Criar legenda com o gerador gratuito</Link><a href="#passo-a-passo" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600">Ver o passo a passo</a></div>
                <p className="mt-5 text-sm text-muted">Leitura de aproximadamente 8 minutos · Por AnunciaAI</p>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section id="antes-de-comecar" aria-labelledby="antes-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Antes de escrever</p>
                <h2 id="antes-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Separe as informações que a legenda precisa representar</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">O texto fica mais consistente quando produto, público e próximo passo estão definidos antes da primeira frase.</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">{preparation.map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span aria-hidden="true" className="mt-0.5 text-sm font-bold text-brand-600">✓</span><span className="text-sm leading-relaxed text-ink-soft">{item}</span></li>)}</ul>
              </section>

              <section id="passo-a-passo" aria-labelledby="passos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Passo a passo</p>
                <h2 id="passos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Escreva a legenda do objetivo até a revisão</h2>
                <ol className="mt-9 space-y-5">
                  {steps.map((step) => (
                    <li key={step.id} id={step.id} className="scroll-mt-24 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                      <div className="flex items-start gap-4"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-xs font-semibold text-white">{step.number}</span><div><h3 className="text-xl font-semibold leading-snug">{step.title}</h3><p className="mt-3 text-[15px] leading-7 text-muted">{step.text}</p><ul className="mt-4 space-y-2">{step.points.map((point) => <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"><span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" /><span>{point}</span></li>)}</ul></div></div>
                    </li>
                  ))}
                </ol>
              </section>

              <section aria-labelledby="modelo-titulo" className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Modelo editável</p>
                <h2 id="modelo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Uma estrutura simples para adaptar</h2>
                <div className="mt-7 rounded-3xl border border-line bg-ink p-6 text-sm leading-7 text-white/80 shadow-lift sm:p-8">
                  <p className="font-semibold text-white">[GANCHO OU CONTEXTO]</p>
                  <p className="mt-4">[NOME DO PRODUTO] é [explique em uma frase o que é e para quem serve].</p>
                  <p className="mt-4">✓ [Característica real + benefício prático]</p>
                  <p>✓ [Característica real + benefício prático]</p>
                  <p>✓ [Característica real + benefício prático]</p>
                  <p className="mt-4">[PREÇO OU CONDIÇÃO, somente se estiver disponível]</p>
                  <p className="mt-4 font-semibold text-white">[CHAMADA PARA AÇÃO]</p>
                  <p className="mt-4">#[hashtag_relevante] #[categoria] #[nicho]</p>
                </div>
              </section>

              <section aria-labelledby="ia-titulo" className="mt-16 rounded-3xl border border-brand-200 bg-brand-50 p-6 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Economize tempo</p>
                <h2 id="ia-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Gere uma primeira versão e concentre a revisão nos detalhes reais</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-soft">Informe o produto, público e características. O AnunciaAI organiza uma legenda com apresentação, benefícios, chamada para ação e hashtags para você revisar.</p>
                <Link href="/gerador-de-legendas-para-instagram#ferramenta" className="mt-6 inline-flex rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">Usar o gerador de legendas</Link>
              </section>

              <section id="duvidas" aria-labelledby="duvidas-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas frequentes</p>
                <h2 id="duvidas-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Perguntas sobre legendas de produto</h2>
                <div className="mt-7 divide-y divide-line rounded-2xl border border-line bg-white shadow-card">{questions.map((item) => <details key={item.question} className="group p-5 sm:p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4"><h3 className="text-[15px] font-medium text-ink">{item.question}</h3><span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p></details>)}</div>
              </section>
            </div>

            <aside className="hidden lg:block"><div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">Neste guia</p><nav aria-label="Índice do guia"><ol className="mt-4 space-y-2.5 text-sm text-muted"><li><a href="#antes-de-comecar" className="hover:text-brand-600">Antes de começar</a></li><li><a href="#objetivo" className="hover:text-brand-600">Objetivo</a></li><li><a href="#gancho" className="hover:text-brand-600">Gancho</a></li><li><a href="#produto" className="hover:text-brand-600">Produto</a></li><li><a href="#beneficios" className="hover:text-brand-600">Benefícios</a></li><li><a href="#cta" className="hover:text-brand-600">Chamada para ação</a></li><li><a href="#hashtags" className="hover:text-brand-600">Hashtags</a></li><li><a href="#duvidas" className="hover:text-brand-600">Dúvidas</a></li></ol></nav><div className="mt-5 border-t border-line pt-5"><p className="text-sm font-semibold">Quer uma primeira versão?</p><p className="mt-1.5 text-xs leading-relaxed text-muted">Gere gratuitamente e revise antes de publicar.</p><Link href="/gerador-de-legendas-para-instagram#ferramenta" className="mt-4 flex justify-center rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">Criar legenda grátis</Link></div></div></aside>
          </div>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
