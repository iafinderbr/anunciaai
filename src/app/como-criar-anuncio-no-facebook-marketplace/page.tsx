import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/como-criar-anuncio-no-facebook-marketplace";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;
const PUBLISHED_AT = "2026-08-15";

const TITLE = "Como Criar Anúncio no Facebook Marketplace: Guia 2026";
const DESCRIPTION =
  "Aprenda como criar anúncio no Facebook Marketplace com fotos, título, preço, categoria, condição, descrição e revisão antes de publicar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como criar anúncio no facebook marketplace",
    "como anunciar no facebook marketplace",
    "criar anúncio marketplace facebook",
    "vender no facebook marketplace",
    "descrição facebook marketplace",
    "anúncio marketplace passo a passo",
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
        { "@type": "ListItem", position: 3, name: "Como criar anúncio no Facebook Marketplace", item: ABSOLUTE_URL },
      ],
    },
  ],
};

const preparation = [
  "Nome exato, marca e modelo do item",
  "Preço e categoria adequados",
  "Condição real e defeitos relevantes",
  "Fotos próprias, claras e atuais",
  "Acessórios e itens realmente incluídos",
];

const steps = [
  {
    id: "elegibilidade",
    number: "01",
    title: "Confira se o item e sua conta podem usar o Marketplace",
    text: "Antes de montar o anúncio, confirme o acesso ao Marketplace e se o item é permitido. A Meta exige que os classificados sigam as Políticas Comerciais e os Padrões da Comunidade.",
    points: ["O Marketplace é destinado a pessoas adultas com contas elegíveis.", "Não tente publicar um item proibido em outra categoria para contornar as políticas."],
  },
  {
    id: "fotos",
    number: "02",
    title: "Use fotos que representem exatamente o item",
    text: "Ao criar um classificado, a Meta permite adicionar fotos e, em algumas experiências, vídeo. Mostre o produto inteiro, detalhes importantes e sinais de uso que possam influenciar a decisão.",
    points: ["Prefira imagens nítidas e bem iluminadas do item real.", "Em eletrônicos, a própria Meta recomenda mostrar problemas, defeitos e a condição do produto."],
  },
  {
    id: "titulo",
    number: "03",
    title: "Escreva um título curto e identificável",
    text: "Comece pelo nome do produto e acrescente marca, modelo ou característica importante quando isso ajudar a diferenciar a versão. Nas instruções oficiais atuais consultadas, a Meta não publica um limite fixo de caracteres para o título.",
    points: ["Priorize identificação em vez de frases promocionais.", "Não trate o alvo de tamanho usado pelo AnunciaAI como um limite oficial da Meta."],
  },
  {
    id: "preco-categoria",
    number: "04",
    title: "Informe preço, categoria e os detalhes disponíveis",
    text: "Preencha os campos solicitados para o item. A Meta também oferece opções adicionais em algumas versões do formulário, como categoria e outros detalhes do classificado.",
    points: ["Para marcar um item como grátis, a Meta orienta informar 0 no preço.", "Escolha a categoria que realmente corresponde ao produto."],
  },
  {
    id: "condicao",
    number: "05",
    title: "Escolha a condição que melhor descreve o produto",
    text: "Quando o campo estiver disponível, selecione a condição correspondente ao estado real do item. A Meta diferencia opções como novo, usado em diferentes estados e recondicionado.",
    points: ["Não classifique como 'como novo' um item com sinais de desgaste ou defeitos.", "A descrição e as fotos devem ser coerentes com a condição selecionada."],
  },
  {
    id: "descricao",
    number: "06",
    title: "Explique características, itens incluídos e defeitos",
    text: "Use a descrição para complementar o título e os campos do anúncio. Informe medidas, material, compatibilidade, acessórios e problemas conhecidos quando forem relevantes.",
    points: ["Se o item for usado, descreva sinais de uso importantes.", "Não invente garantia, entrega, parcelamento ou condição de pagamento."],
  },
  {
    id: "politicas",
    number: "07",
    title: "Revise o anúncio pelas Políticas Comerciais",
    text: "Produtos publicados no Marketplace precisam seguir as políticas da Meta. Há categorias proibidas e restritas; a Central de Ajuda cita, por exemplo, serviços, animais e determinados produtos de saúde entre itens que não podem ser anunciados.",
    points: ["Consulte a política atual se tiver dúvida sobre uma categoria.", "Um classificado pode deixar de ser aprovado se o item ou o conteúdo violar as regras."],
  },
  {
    id: "publicacao",
    number: "08",
    title: "Faça a revisão final e publique",
    text: "Compare fotos, título, preço, categoria, condição e descrição. Depois use a opção de publicar do próprio Marketplace. Se houver campos obrigatórios faltando, o Facebook pode impedir o avanço no formulário.",
    points: ["Retire qualquer informação que você não consiga confirmar.", "Depois da venda, use os recursos do Marketplace para editar ou marcar o item como vendido quando necessário."],
  },
];

const questions = [
  {
    question: "Existe limite de caracteres para o título no Facebook Marketplace?",
    answer:
      "Nas instruções oficiais atuais da Meta consultadas para criação de classificados, não há um limite fixo de caracteres publicado. O AnunciaAI usa um tamanho conservador para manter o título fácil de ler, mas isso não deve ser apresentado como regra oficial da Meta.",
  },
  {
    question: "O que é obrigatório para criar o classificado?",
    answer:
      "O formulário pede informações do item e fotos, além de campos que podem variar conforme dispositivo, região e categoria. Se algo obrigatório estiver faltando, a opção de avançar pode ficar indisponível.",
  },
  {
    question: "Posso vender qualquer produto no Marketplace?",
    answer:
      "Não. Os itens precisam seguir as Políticas Comerciais e os Padrões da Comunidade da Meta. A Central de Ajuda mantém exemplos de produtos e tipos de oferta que não podem ser anunciados.",
  },
  {
    question: "Como descrever um produto usado?",
    answer:
      "Informe a condição com precisão e descreva sinais de uso, problemas ou defeitos relevantes. Para eletrônicos, a Meta recomenda deixar claros os problemas e incluir fotos de boa qualidade.",
  },
];

export default function ComoCriarAnuncioFacebookMarketplacePage() {
  return (
    <>
      <SiteHeader ctaHref="/gerador-de-anuncios-facebook-marketplace#ferramenta" />

      <main id="ferramenta">
        <article>
          <header className="relative overflow-hidden border-b border-line bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,92,26,0.11),transparent_72%)]" />
            <div className="container-page relative py-10 sm:py-16">
              <nav aria-label="Trilha de navegação">
                <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  <li><Link href="/" className="transition-colors hover:text-ink">Início</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/guias" className="transition-colors hover:text-ink">Guias</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="font-medium text-ink-soft">Facebook Marketplace</li>
                </ol>
              </nav>

              <div className="mt-10 max-w-4xl">
                <p className="inline-flex rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-card">Guia prático · Atualizado em agosto de 2026</p>
                <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.65rem]">Como criar um anúncio no Facebook Marketplace</h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">Organize fotos, título, preço, categoria, condição e descrição para publicar um classificado fiel ao item que você vende.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/gerador-de-anuncios-facebook-marketplace#ferramenta" className="rounded-2xl bg-ink px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600">Criar anúncio com IA grátis</Link>
                  <a href="#passo-a-passo" className="rounded-2xl border border-line-strong bg-white px-6 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600">Ver o passo a passo</a>
                </div>
                <p className="mt-5 text-sm text-muted">Leitura de aproximadamente 8 minutos · Por AnunciaAI</p>
              </div>
            </div>
          </header>

          <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <section id="antes-de-comecar" aria-labelledby="antes-titulo" className="scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Antes de começar</p>
                <h2 id="antes-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Separe as informações verdadeiras do item</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">O texto fica mais confiável quando a primeira versão nasce de dados que você consegue confirmar.</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {preparation.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"><span aria-hidden="true" className="mt-0.5 text-sm font-bold text-brand-600">✓</span><span className="text-sm leading-relaxed text-ink-soft">{item}</span></li>
                  ))}
                </ul>
              </section>

              <section id="passo-a-passo" aria-labelledby="passos-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Passo a passo</p>
                <h2 id="passos-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Como montar o classificado do início ao fim</h2>
                <ol className="mt-9 space-y-5">
                  {steps.map((step) => (
                    <li key={step.id} id={step.id} className="scroll-mt-24 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
                      <div className="flex items-start gap-4">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-xs font-semibold text-white">{step.number}</span>
                        <div><h3 className="text-xl font-semibold leading-snug">{step.title}</h3><p className="mt-3 text-[15px] leading-7 text-muted">{step.text}</p><ul className="mt-4 space-y-2">{step.points.map((point) => <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"><span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" /><span>{point}</span></li>)}</ul></div>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section aria-labelledby="exemplo-titulo" className="mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Exemplo prático</p>
                <h2 id="exemplo-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Título genérico × título identificável</h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5"><p className="text-xs font-semibold uppercase tracking-[0.1em] text-rose-700">Evite</p><p className="mt-3 font-mono text-sm leading-relaxed text-ink-soft">BICICLETA TOP!!! IMPERDÍVEL</p><p className="mt-4 text-sm leading-relaxed text-muted">O texto não informa tamanho, marchas, material nem condição.</p></div>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5"><p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-700">Prefira</p><p className="mt-3 font-mono text-sm leading-relaxed text-ink-soft">Bicicleta Aro 29 21 Marchas Quadro de Alumínio Seminova</p><p className="mt-4 text-sm leading-relaxed text-muted">O comprador identifica o produto e os principais detalhes rapidamente.</p></div>
                </div>
              </section>

              <section aria-labelledby="ia-titulo" className="mt-16 rounded-3xl border border-brand-200 bg-brand-50 p-6 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Economize tempo</p>
                <h2 id="ia-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Gere uma primeira versão e revise antes de publicar</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-soft">Informe produto, preço e características. O AnunciaAI organiza título, descrição, benefícios e características sem inventar condições comerciais.</p>
                <Link href="/gerador-de-anuncios-facebook-marketplace#ferramenta" className="mt-6 inline-flex rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">Usar o gerador para Marketplace</Link>
              </section>

              <section id="duvidas" aria-labelledby="duvidas-titulo" className="mt-16 scroll-mt-24">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Dúvidas frequentes</p>
                <h2 id="duvidas-titulo" className="mt-3 text-2xl font-semibold sm:text-3xl">Perguntas sobre anúncios no Marketplace</h2>
                <div className="mt-7 divide-y divide-line rounded-2xl border border-line bg-white shadow-card">{questions.map((item) => <details key={item.question} className="group p-5 sm:p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink"><h3 className="text-[15px] font-medium">{item.question}</h3><span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p></details>)}</div>
              </section>

              <section aria-labelledby="fontes-titulo" className="mt-16 border-t border-line pt-8">
                <h2 id="fontes-titulo" className="text-base font-semibold">Fontes e revisão</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">Este guia foi revisado em 15 de agosto de 2026 com base na Central de Ajuda oficial do Facebook. Recursos, elegibilidade e campos podem variar; confira a experiência exibida na sua conta.</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li><a href="https://www.facebook.com/help/561376580709359/" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">Como vender um item no Facebook Marketplace</a></li>
                  <li><a href="https://www.facebook.com/help/130910837313345" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">Itens que não podem ser vendidos no Marketplace</a></li>
                  <li><a href="https://www.facebook.com/help/1252783238218358" className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700">Compra e venda de eletrônicos no Marketplace</a></li>
                </ul>
              </section>
            </div>

            <aside className="hidden lg:block"><div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-card"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">Neste guia</p><nav aria-label="Índice do guia"><ol className="mt-4 space-y-2.5 text-sm text-muted"><li><a href="#elegibilidade" className="hover:text-brand-600">Elegibilidade</a></li><li><a href="#fotos" className="hover:text-brand-600">Fotos</a></li><li><a href="#titulo" className="hover:text-brand-600">Título</a></li><li><a href="#preco-categoria" className="hover:text-brand-600">Preço e categoria</a></li><li><a href="#condicao" className="hover:text-brand-600">Condição</a></li><li><a href="#descricao" className="hover:text-brand-600">Descrição</a></li><li><a href="#politicas" className="hover:text-brand-600">Políticas</a></li><li><a href="#duvidas" className="hover:text-brand-600">Dúvidas</a></li></ol></nav><div className="mt-5 border-t border-line pt-5"><p className="text-sm font-semibold">Quer uma primeira versão?</p><p className="mt-1.5 text-xs leading-relaxed text-muted">Gere gratuitamente e revise antes de publicar.</p><Link href="/gerador-de-anuncios-facebook-marketplace#ferramenta" className="mt-4 flex justify-center rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600">Criar anúncio grátis</Link></div></div></aside>
          </div>
        </article>
      </main>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
