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
    text: "Copie a legenda com um clique e cole no post, no reels ou no carrossel da sua loja.",
  },
];

export const INSTAGRAM_STRUCTURE: { title: string; text: string }[] = [
  {
    title: "Gancho inicial",
    text: "A primeira frase precisa parar o dedo de quem rola o feed. Uma novidade ou uma pergunta que desperta curiosidade.",
  },
  {
    title: "Apresentação do produto",
    text: "Diga o que é e para quem serve, em uma ou duas frases diretas, sem jargão.",
  },
  {
    title: "Benefícios em tópicos",
    text: "As características viram vantagens rápidas, com emojis para facilitar a leitura na tela do celular.",
  },
  {
    title: "Chamada para ação",
    text: "Diga o próximo passo: “link na bio”, “comente EU QUERO” ou “chama no direct”.",
  },
  {
    title: "Hashtags",
    text: "Termos do seu nicho que o público realmente segue e busca, para ampliar o alcance.",
  },
];

export const INSTAGRAM_BENEFIT_MAP: { feature: string; benefit: string }[] = [
  { feature: "Cera de soja 100% natural", benefit: "Queima limpa, sem fumaça preta na parede" },
  { feature: "Até 40 horas de queima", benefit: "Dura semanas acesa, mesmo com uso diário" },
  { feature: "Essência de lavanda", benefit: "Transforma o quarto em um ambiente de spa" },
  { feature: "Frasco de vidro reutilizável", benefit: "Depois vira porta-treco ou porta-maquiagem" },
];

export const INSTAGRAM_FEATURES: { title: string; text: string }[] = [
  {
    title: "Legenda pronta para publicar",
    text: "Gancho, apresentação, benefícios, preço e chamada para ação já montados na ordem certa.",
  },
  {
    title: "Gancho inicial incluído",
    text: "A primeira frase já vem preparada para segurar a atenção nos primeiros segundos do post.",
  },
  {
    title: "Chamada para ação no final",
    text: "A legenda termina com um convite claro: link na bio, comentar ou mandar mensagem.",
  },
  {
    title: "Hashtags relevantes",
    text: "Geradas a partir do produto e da categoria, para você alcançar quem realmente se interessa.",
  },
  {
    title: "Título curto com emoji",
    text: "Um título de post pronto para reels e carrossel, com toque de rede social.",
  },
  {
    title: "Tom de texto ajustável",
    text: "Escolha entre profissional, persuasivo, simples ou premium e mantenha a voz da sua marca.",
  },
];

export const INSTAGRAM_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "Legenda de uma frase: “Produto novo, chama no direct!”",
    right: "Gancho + apresentação + benefícios + chamada para ação",
  },
  {
    wrong: "Lista de especificações técnicas sem explicar o valor",
    right: "Cada característica transformada em benefício que o seguidor entende",
  },
  {
    wrong: "Trinta hashtags genéricas como #love #instagood #foto",
    right: "Hashtags específicas do nicho, que o seu público realmente segue",
  },
  {
    wrong: "Sem chamada para ação: o seguidor curte, mas não sabe o que fazer",
    right: "CTA clara no final: link na bio, comentar ou mandar mensagem",
  },
];

export interface CaptionComparison {
  bad: string;
  good: string;
}

export const INSTAGRAM_COMPARISON: CaptionComparison = {
  bad: "Vela de lavanda. Super cheirosa. Compra aí! 😍",
  good:
    "Chegou a vela que transforma qualquer cômodo em um spa. ✨\n\n" +
    "A Vela Aromática de Soja 200g é feita à mão, com cera de soja, pavio de algodão e essência de lavanda — e queima por até 40 horas.\n\n" +
    "✅ Aroma suave que não enjoa\n" +
    "✅ Frasco de vidro reutilizável\n" +
    "✅ Perfeita para presentear\n\n" +
    "💰 R$ 79,90\n" +
    "👉 Garanta a sua pelo link na bio!\n\n" +
    "#velaaromatica #decoracao #bemestar #casa #lojaonline",
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const INSTAGRAM_FAQ: FaqItem[] = [
  {
    question: "Como criar legenda para Instagram com inteligência artificial?",
    answer:
      "Preencha o nome do produto, a categoria, o preço e as características na ferramenta desta página e clique em “Gerar anúncio”. Em segundos a IA devolve uma legenda com gancho, benefícios, chamada para ação e hashtags, pronta para publicar.",
  },
  {
    question: "O que uma boa legenda de produto precisa ter?",
    answer:
      "Um gancho que para o dedo de quem rola o feed, a apresentação do produto, os benefícios em tópicos, uma chamada para ação e hashtags do seu nicho. A ferramenta entrega essa estrutura completa a partir das suas anotações.",
  },
  {
    question: "Quantas hashtags devo usar em uma legenda?",
    answer:
      "Entre 5 e 10 hashtags relevantes costuma ser o ponto ideal: específicas do nicho e do público, não genéricas. A ferramenta gera hashtags a partir do produto e da categoria, junto com algumas de alcance como #lojaonline.",
  },
  {
    question: "A legenda serve para divulgar ou para vender?",
    answer:
      "Para os dois. A legenda apresenta o produto e os benefícios (divulgação) e fecha com uma chamada para ação e o preço (venda). O tom escolhido — profissional ou persuasivo, por exemplo — ajusta o peso de cada parte.",
  },
  {
    question: "O gerador de legendas para Instagram é gratuito?",
    answer:
      "Sim. A geração é gratuita, não exige cadastro e não pede cartão de crédito. Você pode gerar, copiar e publicar quantas legendas quiser durante o período de testes.",
  },
  {
    question: "Posso usar a mesma legenda para posts, reels e stories?",
    answer:
      "Sim, a legenda funciona para qualquer formato de conteúdo. Para reels e carrossel, você também recebe um título curto com emoji que ajuda a nomear o conteúdo e aparece na capa.",
  },
];

