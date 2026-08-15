import type { GeneratorInput } from "./types";

/**
 * Conteúdo da landing page /gerador-de-titulos-para-produtos.
 * Fonte única para as seções de conteúdo (como funciona, anatomia,
 * recursos, exemplos, adaptação por canal e FAQ).
 * O FAQ e o passo a passo são renderizados apenas como conteúdo HTML.
 */

export const TITLES_EXAMPLE_INPUT: GeneratorInput = {
  productName: "Garrafa térmica de 1 litro",
  category: "Garrafas térmicas",
  price: "R$ 119,90",
  audience: "Quem leva bebida para o trabalho, a academia e viagens",
  features:
    "Aço inox, mantém 12h quente, 24h gelada, tampa à prova de vazamento, boca larga, sem BPA, cores preto e azul",
  channel: "mercado-livre",
  tone: "persuasivo",
};

export const TITLES_STEPS: { title: string; text: string }[] = [
  {
    title: "Informe seu produto",
    text: "Cole o nome, a categoria e as características que mais importam. Pode ser em tópicos soltos.",
  },
  {
    title: "Deixe a IA criar",
    text: "Em segundos você recebe o título principal e variações, já dentro do limite do canal escolhido.",
  },
  {
    title: "Copie e publique",
    text: "Copie o título com um clique e cole no anúncio, na página do produto ou na legenda da rede social.",
  },
];

export const TITLES_ANATOMY: { title: string; text: string }[] = [
  {
    title: "Comece pelo produto",
    text: "O comprador precisa identificar o que é em dois segundos, sem adivinhar.",
  },
  {
    title: "Adicione o atributo que vende",
    text: "Material, tamanho ou função que diferencia o item dos concorrentes.",
  },
  {
    title: "Use palavras de busca",
    text: "Os termos que o comprador digita para encontrar, não jargão interno do catálogo.",
  },
  {
    title: "Corte o que não ajuda",
    text: "“Promoção”, “frete grátis” e elogios vagos ocupam espaço sem vender nada.",
  },
  {
    title: "Respeite o limite do canal",
    text: "Cada plataforma possui orientações próprias de tamanho e apresentação do título.",
  },
];

export const TITLES_FEATURE_MAP: { feature: string; inTitle: string }[] = [
  { feature: "Aço inox 18/8", inTitle: "Aço Inox" },
  { feature: "Mantém 12h quente", inTitle: "12h Quente" },
  { feature: "Tampa à prova de vazamento", inTitle: "Sem Vazamento" },
  { feature: "Livre de BPA", inTitle: "Livre de BPA" },
];

export const TITLES_FEATURES: { title: string; text: string }[] = [
  {
    title: "Título no limite de cada canal",
    text: "O texto sai pronto para o canal escolhido, com tamanho adequado e sem cortes no meio de uma palavra.",
  },
  {
    title: "Fórmula produto + atributo + diferencial",
    text: "A IA ordena os termos na ordem certa: o que é, o que tem de bom e o que torna o item único.",
  },
  {
    title: "Variações para testar",
    text: "Receba o título principal e versões alternativas para comparar abordagens diferentes.",
  },
  {
    title: "Termos de busca incluídos",
    text: "Palavras relacionadas ao produto, prontas para distribuir entre título e ficha técnica.",
  },
  {
    title: "Tom ajustável",
    text: "Escolha entre profissional, persuasivo, simples ou premium e mantenha a voz da sua marca.",
  },
  {
    title: "Pronto para copiar",
    text: "Cada título tem botão de copiar com um clique — cole direto no formulário de publicação.",
  },
];

export const TITLES_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "PRODUTO NOVO!!! MELHOR PREÇO IMPERDÍVEL",
    right: "Garrafa Térmica 1 Litro Aço Inox Mantém 12h Quente",
  },
  {
    wrong: "Garrafa boa",
    right: "Nome do produto + material + o benefício que mais importa",
  },
  {
    wrong: "Garrafa Térmica de Aço Inoxidável que Mantém Bebidas Quentes por Muito Tempo",
    right: "Título enxuto, com os termos certos dentro do limite do canal",
  },
  {
    wrong: "Título copiado do fornecedor, idêntico ao de todos os concorrentes",
    right: "Título claro, específico e fiel ao produto anunciado",
  },
];

export const TITLES_CHANNELS: { title: string; text: string }[] = [
  {
    title: "Mercado Livre",
    text: "Até 60 caracteres, sem exageros e com foco em produto + marca + especificação.",
  },
  {
    title: "Shopee",
    text: "Até 120 caracteres, com espaço para marca, modelo e características relevantes para a busca.",
  },
  {
    title: "Loja virtual",
    text: "Entre 50 e 70 caracteres, pensado para leitura clara e SEO da página do produto.",
  },
  {
    title: "Instagram",
    text: "Curto e com personalidade, adaptado à linguagem da legenda ou publicação.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const TITLES_FAQ: FaqItem[] = [
  {
    question: "Como criar um bom título para produto?",
    answer:
      "Comece pelo nome do produto, adicione a característica que mais diferencia, como material, tamanho ou função, e inclua termos que ajudem o comprador a identificar o item. Evite promessas vazias e respeite as orientações do canal onde vai publicar.",
  },
  {
    question: "Qual o tamanho ideal de um título de produto?",
    answer:
      "Depende do canal. O Mercado Livre trabalha com até 60 caracteres e a documentação atual da Shopee indica até 120. Em lojas virtuais, títulos entre 50 e 70 caracteres costumam manter boa leitura. A ferramenta mostra o contador para você conferir.",
  },
  {
    question: "O que devo colocar no título de um produto?",
    answer:
      "Produto + marca + modelo + característica relevante costuma ser uma boa base. Pense no que o comprador precisa ler para reconhecer exatamente a versão anunciada.",
  },
  {
    question: "Devo usar emoji ou letras maiúsculas no título?",
    answer:
      "Em marketplaces, priorize clareza e evite símbolos ou caixa alta desnecessários. Em redes sociais, emojis podem fazer sentido quando combinam com o tom da publicação. A ferramenta adapta a estrutura ao canal escolhido.",
  },
  {
    question: "O gerador de títulos é gratuito?",
    answer:
      "Sim. A geração é gratuita, não exige cadastro e não pede cartão de crédito. Você pode gerar, copiar e testar títulos durante o período de testes.",
  },
  {
    question: "Posso gerar mais de uma versão do título?",
    answer:
      "Sim. A ferramenta entrega o título principal e variações, e o botão “Gerar novamente” cria versões alternativas para você comparar.",
  },
];

