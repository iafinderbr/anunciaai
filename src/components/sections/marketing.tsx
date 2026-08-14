const trustCards = [
  {
    icon: "⏱️",
    title: "Economize tempo",
    text: "Crie conteúdo de produtos em segundos.",
  },
  {
    icon: "🛒",
    title: "Venda em vários canais",
    text: "Adapte seu anúncio para diferentes plataformas.",
  },
  {
    icon: "🎁",
    title: "Comece grátis",
    text: "Teste a ferramenta sem precisar cadastrar cartão.",
  },
];

export function TrustSection() {
  return (
    <section aria-labelledby="confianca-titulo" className="container-page py-14 sm:py-20">
      <h2 id="confianca-titulo" className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
        Feito para quem vende online
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-[15px] text-muted">
        Do primeiro anúncio ao catálogo inteiro: a ferramenta acompanha o ritmo de quem precisa cadastrar produtos
        todos os dias.
      </p>

      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {trustCards.map((card) => (
          <li key={card.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <span aria-hidden="true" className="grid size-10 place-items-center rounded-xl bg-brand-50 text-lg">
              {card.icon}
            </span>
            <h3 className="mt-4 text-base font-semibold">{card.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{card.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const steps = [
  {
    title: "Informe seu produto",
    text: "Nome, categoria, preço, público e características. Pode ser em tópicos rápidos — a IA organiza o resto.",
  },
  {
    title: "Deixe a IA criar",
    text: "Em segundos você recebe título, descrição, benefícios, ficha de características, anúncio e SEO.",
  },
  {
    title: "Copie e publique",
    text: "Um clique copia cada bloco no formato certo para Mercado Livre, Shopee, loja virtual ou Instagram.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-titulo" className="border-y border-line bg-white">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Como funciona</p>
          <h2 id="como-funciona-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Três passos entre o produto na caixa e o anúncio no ar
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Nada de tela complicada. Você preenche, gera e publica — sem sair da mesma página.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl border border-line bg-canvas p-6">
              <span className="grid size-9 place-items-center rounded-xl bg-ink text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Títulos no limite de cada canal",
    text: "60 caracteres no Mercado Livre, palavras-chave na Shopee, título SEO na loja virtual. Cada canal tem sua regra e a ferramenta respeita.",
  },
  {
    title: "Descrição completa e estruturada",
    text: "Abertura, diferenciais, benefícios, público indicado, preço e chamada final — no formato que converte.",
  },
  {
    title: "Benefícios que vendem",
    text: "A IA transforma características técnicas em vantagens claras para o comprador entender o valor.",
  },
  {
    title: "Ficha de características organizada",
    text: "Suas anotações soltas viram uma tabela limpa de material, tamanho, cores, garantia e mais.",
  },
  {
    title: "Anúncio persuasivo pronto",
    text: "Versão com gancho, prova, escassez e chamada para ação para usar em campanhas e redes sociais.",
  },
  {
    title: "SEO incluído",
    text: "Título SEO, meta description no tamanho certo e lista de palavras-chave para ranquear no Google.",
  },
];

export function FeaturesSection() {
  return (
    <section id="recursos" aria-labelledby="recursos-titulo" className="container-page py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Recursos</p>
        <h2 id="recursos-titulo" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Tudo o que um anúncio precisa, gerado de uma vez
        </h2>
        <p className="mt-3 text-[15px] text-muted">
          Você cola as informações do produto uma única vez e recebe seis blocos prontos para publicar.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <li key={feature.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <h3 className="text-base font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{feature.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
