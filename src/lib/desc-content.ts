import type { GeneratorInput } from "./types";

/**
 * Conteúdo da landing page /gerador-de-descricao-de-produto.
 * Fonte única para as seções de conteúdo da página (como funciona,
 * anatomia, recursos, erros, adaptação por canal e FAQ).
 * O FAQ e o passo a passo são renderizados apenas como conteúdo HTML.
 */

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
    text: "Cole nome, categoria, preço e características. Pode ser em tópicos soltos, do jeito que você tem anotado.",
  },
  {
    title: "Deixe a IA escrever",
    text: "Em segundos você recebe uma descrição estruturada: abertura, benefícios, ficha técnica e chamada para ação.",
  },
  {
    title: "Copie e publique",
    text: "Copie a descrição com um clique e cole na página do produto da sua loja ou no marketplace.",
  },
];

export const DESC_ANATOMY: { title: string; text: string }[] = [
  {
    title: "Abertura direta",
    text: "A primeira frase diz o que é o produto e para quem ele foi feito, sem enrolação.",
  },
  {
    title: "Benefícios, não só características",
    text: "Cada especificação vira uma vantagem que o comprador consegue sentir.",
  },
  {
    title: "Ficha técnica organizada",
    text: "Medidas, material, garantia e itens inclusos, sem fazer o cliente procurar.",
  },
  {
    title: "Prova de confiança",
    text: "Garantia, troca e envio explicados para reduzir a hesitação de compra.",
  },
  {
    title: "Chamada para ação",
    text: "Um convite claro para o próximo passo, sem pressão exagerada.",
  },
];

export const DESC_BENEFIT_EXAMPLES: { feature: string; benefit: string }[] = [
  { feature: "Bateria de 40 horas", benefit: "Use a semana inteira sem procurar a tomada" },
  { feature: "Solado antiderrapante", benefit: "Firmeza e segurança mesmo em piso molhado" },
  { feature: "Tecido respirável", benefit: "Conforto mesmo nos dias mais quentes" },
  { feature: "Garantia de 12 meses", benefit: "Compra sem risco, coberta por garantia" },
];

export const DESC_FEATURES: { title: string; text: string }[] = [
  {
    title: "Abertura que prende a atenção",
    text: "A primeira frase apresenta o produto e diz para quem ele serve, sem enrolação.",
  },
  {
    title: "Características viram benefícios",
    text: "A IA converte especificações técnicas em vantagens que o comprador entende na hora.",
  },
  {
    title: "Estrutura pronta para converter",
    text: "Abertura, benefícios, ficha técnica, prova de confiança e chamada para ação, na ordem certa.",
  },
  {
    title: "Tom de texto ajustável",
    text: "Escolha entre profissional, persuasivo, simples ou premium e mantenha a voz da sua marca.",
  },
  {
    title: "Palavras-chave de busca",
    text: "Termos que o comprador digita no Google e no marketplace, prontos para distribuir pelo texto.",
  },
  {
    title: "Ficha técnica organizada",
    text: "Suas anotações viram atributos limpos, prontos para preencher a ficha do produto.",
  },
];

export const DESC_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "Descrição de uma linha: “Produto bom, entrega rápida.”",
    right: "Descrição completa com abertura, benefícios, ficha técnica e chamada para ação",
  },
  {
    wrong: "Lista de especificações soltas, sem explicar o valor",
    right: "Cada característica transformada em benefício que o comprador entende",
  },
  {
    wrong: "Texto copiado do fornecedor, igual ao de todos os concorrentes",
    right: "Descrição única, escrita para o seu público e a sua loja",
  },
  {
    wrong: "Promessas vazias: “o melhor”, “incrível”, “imperdível”",
    right: "Texto concreto, mostrando o que o produto realmente entrega",
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
    "Trabalhar de casa exige uma cadeira que aguente o dia inteiro. A Cadeira de Escritório Ergonômica foi desenhada para quem passa horas em frente ao computador: o apoio lombar ajustável acompanha a curvatura das suas costas e o tecido respirável evita o abafamento mesmo em dias quentes.\n\n" +
    "Por que você vai gostar:\n" +
    "• Encosto reclinável para variar a postura entre uma reunião e outra\n" +
    "• Braços acolchoados que aliviam a tensão dos ombros\n" +
    "• Rodízios silenciosos que não riscam o piso\n\n" +
    "Suporta até 120 kg e acompanha garantia de 2 anos. Clique em comprar e monte o seu espaço de trabalho com conforto.",
};

export const DESC_CHANNELS: { title: string; text: string }[] = [
  {
    title: "Loja virtual",
    text: "Descrição longa e otimizada para SEO. Pode contar a história da marca e usar palavras-chave para ranquear no Google.",
  },
  {
    title: "Mercado Livre e Shopee",
    text: "Texto objetivo, com ficha técnica bem preenchida e sem links externos. Os filtros de busca importam tanto quanto o texto.",
  },
  {
    title: "Instagram e redes sociais",
    text: "Legenda curta, com emojis, chamada para ação e tom mais próximo do seu público.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const DESC_FAQ: FaqItem[] = [
  {
    question: "Como criar uma descrição de produto com inteligência artificial?",
    answer:
      "Preencha o nome do produto, a categoria, o preço e as características na ferramenta desta página e clique em “Gerar descrição”. Em poucos segundos a IA devolve uma descrição estruturada com abertura, benefícios, ficha técnica e chamada para ação, pronta para colar na página do produto.",
  },
  {
    question: "O que uma boa descrição de produto precisa ter?",
    answer:
      "Uma abertura que apresenta o produto, benefícios que traduzem as características, ficha técnica organizada, uma prova de confiança (garantia, troca, envio) e uma chamada para ação. A ferramenta entrega essa estrutura completa a partir das suas anotações.",
  },
  {
    question: "Qual a diferença entre característica e benefício?",
    answer:
      "Característica é o que o produto tem (ex.: bateria de 40 horas). Benefício é o que isso significa para o comprador (usar a semana inteira sem recarregar). Descrições que só listam características soam técnicas; descrições que explicam o benefício vendem.",
  },
  {
    question: "A descrição gerada serve para loja virtual e marketplace?",
    answer:
      "Sim. Esta página é otimizada para descrições de loja virtual, mas o texto também funciona em marketplaces como Mercado Livre e Shopee. Para anúncios completos no formato específico de cada plataforma, use os geradores dedicados do AnunciaAI.",
  },
  {
    question: "O gerador de descrição é gratuito?",
    answer:
      "Sim. A geração nesta página é gratuita, não exige cadastro e não pede cartão de crédito. Você pode gerar, copiar e publicar quantas descrições quiser durante o período de testes.",
  },
  {
    question: "Preciso revisar a descrição gerada pela IA?",
    answer:
      "Recomendamos sempre uma leitura rápida. A IA monta a estrutura completa a partir do que você informou, mas só você conhece detalhes como prazo de envio, estoque e condições específicas do seu produto.",
  },
];

