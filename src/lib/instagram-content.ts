import type { GeneratorInput } from "./types";

/** Conteúdo da landing page /gerador-de-legendas-para-instagram. */
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
  { title: "Informe seu produto", text: "Cole nome, categoria, preço e características que você consegue confirmar." },
  { title: "Gere uma primeira versão", text: "A ferramenta organiza gancho, apresentação, benefícios conservadores, chamada para ação e hashtags relacionadas aos dados informados." },
  { title: "Revise e adapte", text: "Ajuste a legenda ao formato do conteúdo, ao caminho de compra realmente disponível e à voz da sua marca antes de usar." },
];

export const INSTAGRAM_STRUCTURE: { title: string; text: string }[] = [
  { title: "Gancho inicial", text: "A primeira frase apresenta o contexto sem inventar urgência, escassez ou resultado." },
  { title: "Apresentação do produto", text: "Diga o que é e, quando informado, para qual público ele foi pensado." },
  { title: "Benefícios em tópicos", text: "As características podem ser explicadas de forma cuidadosa sem transformar possibilidade em garantia." },
  { title: "Chamada para ação", text: "Indique um próximo passo neutro e adapte ao recurso que sua publicação realmente oferece." },
  { title: "Hashtags", text: "Use termos derivados do produto e da categoria como ponto de partida e remova o que não representa o conteúdo." },
];

export const INSTAGRAM_BENEFIT_MAP: { feature: string; benefit: string }[] = [
  { feature: "Cera de soja", benefit: "Base vegetal informada no produto" },
  { feature: "Até 40 horas de queima", benefit: "Tempo de uso informado para ajudar na comparação" },
  { feature: "Essência de lavanda", benefit: "Aroma de lavanda conforme a composição informada" },
  { feature: "Frasco de vidro reutilizável", benefit: "Recipiente reutilizável conforme a característica informada" },
];

export const INSTAGRAM_FEATURES: { title: string; text: string }[] = [
  { title: "Legenda para revisar", text: "Gancho, apresentação, benefícios, preço informado e chamada para ação organizados em uma primeira versão." },
  { title: "Gancho neutro", text: "A abertura apresenta o produto sem assumir promoção, estoque, urgência ou desempenho não informado." },
  { title: "Chamada para ação adaptável", text: "O fechamento sugere um próximo passo que você deve adequar ao caminho realmente disponível." },
  { title: "Hashtags relacionadas", text: "Os termos são derivados do produto e da categoria; a ferramenta não mede popularidade ou alcance." },
  { title: "Título curto", text: "Uma opção curta pode servir como ponto de partida para capa ou início do conteúdo depois da revisão." },
  { title: "Tom ajustável", text: "Escolha entre profissional, persuasivo, simples ou premium sem alterar os fatos fornecidos." },
];

export const INSTAGRAM_MISTAKES: { wrong: string; right: string }[] = [
  { wrong: "Legenda de uma frase: “Produto novo, chama no direct!”", right: "Contexto + apresentação + características + chamada para ação" },
  { wrong: "Lista técnica acompanhada de promessas não comprovadas", right: "Características reais com explicações conservadoras" },
  { wrong: "Lista longa de hashtags genéricas sem relação com o produto", right: "Hashtags específicas e coerentes com o conteúdo" },
  { wrong: "CTA que pressupõe um link ou canal que não existe", right: "Próximo passo adaptado ao recurso realmente disponível" },
];

export interface CaptionComparison {
  bad: string;
  good: string;
}

export const INSTAGRAM_COMPARISON: CaptionComparison = {
  bad: "Vela de lavanda. Super cheirosa. Compra aí! 😍",
  good:
    "Vela Aromática de Soja 200g com essência de lavanda. ✨\n\n" +
    "Características informadas:\n" +
    "✅ Cera de soja\n" +
    "✅ Até 40 horas de queima\n" +
    "✅ Pavio de algodão\n" +
    "✅ Frasco de vidro reutilizável\n\n" +
    "💰 Preço informado: R$ 79,90\n" +
    "👉 Confira os detalhes e adapte o próximo passo ao seu perfil.\n\n" +
    "#velaaromatica #veladesoja #decoracaoebemestar",
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const INSTAGRAM_FAQ: FaqItem[] = [
  { question: "Como usar o gerador de legendas para Instagram?", answer: "Preencha nome, categoria, preço e características e gere uma primeira versão com gancho, benefícios conservadores, chamada para ação e hashtags relacionadas ao produto." },
  { question: "O que uma legenda de produto pode ter?", answer: "Uma estrutura útil inclui contexto ou gancho, apresentação do produto, características, benefícios sustentados e um próximo passo coerente com o objetivo da publicação." },
  { question: "Quantas hashtags devo usar?", answer: "Não é necessário perseguir um número fixo. Prefira termos realmente relacionados ao produto e ao conteúdo e remova palavras genéricas sem relação direta." },
  { question: "A legenda serve para divulgar ou vender?", answer: "Pode ser adaptada para objetivos diferentes. Revise preço, chamada para ação e qualquer condição comercial conforme o que sua loja realmente oferece." },
  { question: "O gerador de legendas é gratuito?", answer: "Sim. A versão atual pode ser usada gratuitamente durante o período de testes, sem cadastro e sem cartão de crédito." },
  { question: "Posso usar o texto em posts, Reels e Stories?", answer: "Use como base e adapte ao formato. Stories normalmente pedem textos mais curtos, enquanto posts e Reels podem aproveitar uma legenda mais completa." },
];
