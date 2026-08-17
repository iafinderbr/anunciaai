import type { GeneratorInput } from "./types";

/** Conteúdo da landing page /gerador-de-descricao-de-produto. */
export const DESC_EXAMPLE_INPUT: GeneratorInput = {
  productName: "Cadeira de escritório ergonômica",
  category: "Móveis para escritório",
  price: "R$ 899,90",
  audience: "Quem trabalha em home office e passa horas sentado",
  features:
    "Encosto reclinável, apoio lombar ajustável, braços acolchoados, rodízios silenciosos, tecido respirável, suporta até 120 kg, garantia de 2 anos",
  channel: "loja-virtual",
  tone: "persuasivo",
};

export const DESC_STEPS: { title: string; text: string }[] = [
  {
    title: "Informe seu produto",
    text: "Cole nome, categoria, preço e características que você consegue confirmar.",
  },
  {
    title: "Gere uma primeira versão",
    text: "A ferramenta organiza abertura, características, benefícios conservadores, ficha técnica e chamada para ação.",
  },
  {
    title: "Revise e adapte",
    text: "Confira cada informação e ajuste o texto ao canal, à sua loja e às condições reais do produto antes de usar.",
  },
];

export const DESC_ANATOMY: { title: string; text: string }[] = [
  {
    title: "Abertura direta",
    text: "A primeira frase identifica o produto e pode incluir o público informado sem acrescentar uma promessa de desempenho.",
  },
  {
    title: "Benefícios apoiados em características",
    text: "A utilidade é explicada somente quando pode ser ligada a uma informação fornecida pelo vendedor.",
  },
  {
    title: "Ficha técnica organizada",
    text: "Medidas, material, garantia e itens inclusos aparecem quando foram informados e são úteis para identificar a versão.",
  },
  {
    title: "Condições separadas dos fatos do produto",
    text: "Frete, troca, estoque e condições comerciais devem ser confirmados nos campos próprios em vez de serem inventados no texto.",
  },
  {
    title: "Chamada para ação",
    text: "O fechamento sugere um próximo passo neutro para você adaptar ao caminho realmente disponível.",
  },
];

export const DESC_BENEFIT_EXAMPLES: { feature: string; benefit: string }[] = [
  { feature: "Bateria de 40 horas", benefit: "Autonomia informada para ajudar a comparar o tempo de uso" },
  { feature: "Solado antiderrapante", benefit: "Recurso antiderrapante informado; confira as condições de uso" },
  { feature: "Tecido respirável", benefit: "Material respirável destacado nas características do produto" },
  { feature: "Garantia de 12 meses", benefit: "Garantia de 12 meses conforme a condição informada pelo vendedor" },
];

export const DESC_FEATURES: { title: string; text: string }[] = [
  {
    title: "Abertura organizada",
    text: "A primeira parte apresenta o produto usando os dados fornecidos e pode ser editada antes do uso.",
  },
  {
    title: "Benefícios conservadores",
    text: "As características são explicadas sem transformar possibilidade em garantia ou inventar resultado de uso.",
  },
  {
    title: "Estrutura em blocos",
    text: "Descrição, benefícios, ficha de características e chamada para ação ficam separados para facilitar a revisão.",
  },
  {
    title: "Tom de texto ajustável",
    text: "Escolha entre profissional, persuasivo, simples ou premium sem alterar as informações factuais do produto.",
  },
  {
    title: "Sugestões de termos",
    text: "A ferramenta combina produto, categoria e características como ponto de partida. Ela não consulta volume real de busca.",
  },
  {
    title: "Ficha de características",
    text: "Suas anotações viram atributos organizados para facilitar a conferência antes de preencher a página do produto.",
  },
];

export const DESC_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "Descrição de uma linha: “Produto bom, entrega rápida.”",
    right: "Descrição com identificação, características, benefícios sustentados e dados técnicos disponíveis",
  },
  {
    wrong: "Lista de especificações soltas sem contexto",
    right: "Características acompanhadas de uma explicação cuidadosa sobre sua utilidade quando possível",
  },
  {
    wrong: "Texto copiado de outra versão do produto",
    right: "Descrição coerente com a versão, as fotos e as especificações realmente anunciadas",
  },
  {
    wrong: "Promessas vazias: “o melhor”, “incrível”, “imperdível”",
    right: "Texto concreto, baseado no que pode ser confirmado",
  },
];

export interface DescriptionComparison {
  title: string;
  bad: string;
  good: string;
}

export const DESC_COMPARISON: DescriptionComparison = {
  title: "Cadeira de escritório ergonômica",
  bad: "Cadeira de escritório ergonômica, muito boa, confortável, entrega rápida. Aproveite!",
  good:
    "Cadeira de Escritório Ergonômica para quem busca organizar o espaço de home office com recursos de ajuste.\n\n" +
    "Características informadas:\n" +
    "• Encosto reclinável\n" +
    "• Apoio lombar ajustável\n" +
    "• Braços acolchoados\n" +
    "• Rodízios silenciosos\n" +
    "• Tecido respirável\n\n" +
    "Suporta até 120 kg e possui garantia informada de 2 anos. Confira medidas, condições e demais detalhes antes da compra.",
};

export const DESC_CHANNELS: { title: string; text: string }[] = [
  {
    title: "Loja virtual",
    text: "Use uma descrição completa, ficha técnica consistente e campos de SEO claros. Sugestões de termos não substituem dados reais de pesquisa.",
  },
  {
    title: "Mercado Livre e Shopee",
    text: "Prefira texto objetivo, atributos corretos e consistência entre título, fotos, ficha técnica e descrição.",
  },
  {
    title: "Instagram e redes sociais",
    text: "Adapte a descrição para uma legenda mais curta, com chamada para ação e hashtags relacionadas ao conteúdo quando fizer sentido.",
  },
  {
    title: "Eletrônicos",
    text: "Destaque marca, modelo, capacidade, compatibilidade, alimentação e medidas confirmadas. Evite completar especificações técnicas que não foram informadas.",
  },
  {
    title: "Moda e acessórios",
    text: "Organize material, tamanho, medidas, modelagem, cor e cuidados informados para facilitar a comparação entre variações do produto.",
  },
  {
    title: "Casa e decoração",
    text: "Priorize material, dimensões, acabamento, montagem, uso indicado e itens incluídos sempre que esses dados estiverem disponíveis.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const DESC_FAQ: FaqItem[] = [
  {
    question: "Como usar o gerador de descrição de produto?",
    answer:
      "Preencha nome, categoria, preço e características e clique em “Gerar descrição”. A ferramenta organiza uma primeira versão com abertura, características, benefícios conservadores, ficha técnica e chamada para ação.",
  },
  {
    question: "O que uma descrição de produto pode ter?",
    answer:
      "Uma estrutura útil inclui identificação do produto, características verificáveis, explicações de benefício quando sustentadas pelos dados, ficha técnica e um próximo passo compatível com a sua loja.",
  },
  {
    question: "Qual a diferença entre característica e benefício?",
    answer:
      "Característica é um dado do produto, como bateria de 40 horas. Um benefício deve explicar a utilidade desse dado sem acrescentar uma garantia que não foi informada.",
  },
  {
    question: "A descrição serve para loja virtual e marketplace?",
    answer:
      "Sim, como primeira versão. Revise e adapte o conteúdo ao formato e às regras atuais do canal escolhido antes de usar.",
  },
  {
    question: "O gerador de descrição é gratuito?",
    answer:
      "Sim. A versão atual pode ser usada gratuitamente durante o período de testes, sem cadastro e sem cartão de crédito.",
  },
  {
    question: "Preciso revisar a descrição?",
    answer:
      "Sim. Confira especificações, estoque, preço, entrega, garantia e qualquer condição comercial antes de usar o texto. A ferramenta trabalha com os dados que você fornece.",
  },
];
