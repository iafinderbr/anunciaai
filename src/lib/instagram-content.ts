import type { GeneratorInput } from "./types";

/**
 * Conteúdo da landing page /gerador-de-legendas-para-instagram.
 * Fonte única para as seções de conteúdo (como funciona, estrutura da
 * legenda, características → benefícios, recursos, erros e FAQ).
 * O FAQ e o passo a passo são renderizados apenas como conteúdo HTML.
 */

export const INSTAGRAM_EXAMPLE_INPUT: GeneratorInput = {
  productName: "Vela aromática de soja 200g",
  category: "Decoração e bem-estar",
  price: "R$ 79,90",
  audience: "Quem quer deixar a casa mais aconchegante",
  features:
    "Cera de soja, até 40 horas de queima, pavio de algodão, essência de lavanda, frasco de vidro reutilizável, feito à mão",
  channel: "instagram",
  tone: "persuasivo",
};

export const INSTAGRAM_STEPS: { title: string; text: string }[] = [
  {
    title: "Informe seu produto",
    text: "Cole o nome, a categoria, o preço e as características. Pode ser em tópicos soltos.",
  },
  {
    title: "Deixe a IA criar",
    text: "Em segundos você recebe uma legenda com gancho, benefícios, chamada para ação e hashtags.",
  },
  {
    title: "Copie e publique",
    text: "Copie a legenda com um clique e adapte ao formato do conteúdo que você vai publicar.",
  },
];

export const INSTAGRAM_STRUCTURE: { title: string; text: string }[] = [
  {
    title: "Gancho inicial",
    text: "A primeira frase apresenta o contexto e ajuda o leitor a entender rapidamente por que aquele produto é relevante.",
  },
  {
    title: "Apresentação do produto",
    text: "Diga o que é e para quem serve, em uma ou duas frases diretas, sem jargão.",
  },
  {
    title: "Benefícios em tópicos",
    text: "As características viram vantagens rápidas, com organização visual que facilita a leitura na tela do celular.",
  },
  {
    title: "Chamada para ação",
    text: "Indique um próximo passo que realmente esteja disponível, como visitar o link do perfil, comentar ou mandar mensagem.",
  },
  {
    title: "Hashtags",
    text: "Termos relacionados ao produto, à categoria e ao nicho, usados somente quando ajudam a contextualizar a publicação.",
  },
];

export const INSTAGRAM_BENEFIT_MAP: { feature: string; benefit: string }[] = [
  { feature: "Cera de soja", benefit: "Base vegetal informada no produto" },
  { feature: "Até 40 horas de queima", benefit: "Tempo de uso informado para o produto" },
  { feature: "Essência de lavanda", benefit: "Aroma de lavanda conforme a composição informada" },
  { feature: "Frasco de vidro reutilizável", benefit: "O recipiente pode ganhar outro uso depois, se estiver em boas condições" },
];

export const INSTAGRAM_FEATURES: { title: string; text: string }[] = [
  {
    title: "Legenda pronta para revisar",
    text: "Gancho, apresentação, benefícios, preço e chamada para ação organizados em uma primeira versão.",
  },
  {
    title: "Gancho inicial incluído",
    text: "A primeira frase já vem preparada para apresentar o contexto do produto de forma direta.",
  },
  {
    title: "Chamada para ação no final",
    text: "A legenda termina com um convite claro que você pode adaptar ao caminho disponível no seu perfil.",
  },
  {
    title: "Hashtags relacionadas",
    text: "Geradas a partir do produto e da categoria para você revisar e manter apenas as que fazem sentido.",
  },
  {
    title: "Título curto com toque de rede social",
    text: "Uma opção curta para nomear o conteúdo e adaptar à capa ou ao início do texto.",
  },
  {
    title: "Tom de texto ajustável",
    text: "Escolha entre profissional, persuasivo, simples ou premium e mantenha a voz da sua marca.",
  },
];

export const INSTAGRAM_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "Legenda de uma frase: “Produto novo, chama no direct!”",
    right: "Contexto + apresentação + benefícios + chamada para ação",
  },
  {
    wrong: "Lista de especificações técnicas sem explicar o valor",
    right: "Características acompanhadas de benefícios que o seguidor consegue entender",
  },
  {
    wrong: "Lista longa de hashtags genéricas sem relação com o produto",
    right: "Hashtags específicas e relevantes ao conteúdo, quando fizerem sentido",
  },
  {
    wrong: "Sem chamada para ação: o leitor não sabe qual é o próximo passo",
    right: "CTA clara no final, alinhada ao caminho realmente disponível no perfil",
  },
];

export interface CaptionComparison {
  bad: string;
  good: string;
}

export const INSTAGRAM_COMPARISON: CaptionComparison = {
  bad: "Vela de lavanda. Super cheirosa. Compra aí! 😍",
  good:
    "Um aroma de lavanda para acompanhar os momentos de descanso em casa. ✨\n\n" +
    "A Vela Aromática de Soja 200g é feita à mão, com cera de soja, pavio de algodão e essência de lavanda.\n\n" +
    "✅ Até 40 horas de queima, conforme informado\n" +
    "✅ Frasco de vidro reutilizável\n" +
    "✅ Pavio de algodão\n\n" +
    "💰 R$ 79,90\n" +
    "👉 Confira a opção disponível no perfil.\n\n" +
    "#velaaromatica #decoracao #bemestar #casa",
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const INSTAGRAM_FAQ: FaqItem[] = [
  {
    question: "Como criar legenda para Instagram com inteligência artificial?",
    answer:
      "Preencha o nome do produto, a categoria, o preço e as características na ferramenta desta página e clique em “Gerar anúncio”. Em segundos a IA devolve uma legenda com gancho, benefícios, chamada para ação e hashtags para você revisar antes de publicar.",
  },
  {
    question: "O que uma boa legenda de produto precisa ter?",
    answer:
      "Uma estrutura útil é: contexto ou gancho, apresentação do produto, benefícios apoiados em características reais e uma chamada para ação. Hashtags podem complementar o texto quando forem relevantes.",
  },
  {
    question: "Quantas hashtags devo usar em uma legenda?",
    answer:
      "Não é necessário perseguir um número fixo. Prefira hashtags relacionadas ao produto, à categoria e ao público e remova termos genéricos que não ajudam a descrever a publicação.",
  },
  {
    question: "A legenda serve para divulgar ou para vender?",
    answer:
      "Pode servir para os dois objetivos. Ajuste a apresentação, os benefícios, o preço e a chamada para ação de acordo com a finalidade da publicação e com o que sua loja realmente oferece.",
  },
  {
    question: "O gerador de legendas para Instagram é gratuito?",
    answer:
      "Sim. A geração é gratuita, não exige cadastro e não pede cartão de crédito. Você pode gerar e copiar novas versões durante o período de testes.",
  },
  {
    question: "Posso usar o texto em posts, Reels e Stories?",
    answer:
      "Use a legenda como base para posts e Reels. Para Stories, adapte as partes mais importantes para textos curtos, stickers ou outros elementos do formato em vez de copiar a legenda inteira.",
  },
];
