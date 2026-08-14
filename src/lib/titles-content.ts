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
    text: "Cada plataforma corta ou esconde o título que passa do máximo de caracteres.",
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
    text: "O texto sai pronto para o canal escolhido, com o tamanho certo e sem cortes no meio de uma palavra.",
  },
  {
    title: "Fórmula produto + atributo + diferencial",
    text: "A IA ordena os termos na ordem certa: o que é, o que tem de bom e o que torna o item único.",
  },
  {
    title: "Variações para testar",
    text: "Receba o título principal e versões alternativas para rodar testes e descobrir o que converte mais.",
  },
  {
    title: "Termos de busca incluídos",
    text: "Palavras que o comprador realmente pesquisa, prontas para distribuir entre título e ficha técnica.",
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
    right: "Título com o seu diferencial na frente e o tamanho certo",
  },
];

export const TITLES_CHANNELS: { title: string; text: string }[] = [
  {
    title: "Mercado Livre",
    text: "Até 60 caracteres, sem emoji e sem CAPS LOCK. Foco em produto + marca + especificação.",
  },
  {
    title: "Shopee",
    text: "Até 100 caracteres, com espaço para emojis e palavras-chave que o comprador busca.",
  },
  {
    title: "Loja virtual",
    text: "Entre 50 e 70 caracteres, otimizado para SEO e para o snippet exibido no Google.",
  },
  {
    title: "Instagram",
    text: "Curto e com personalidade: emoji, sensação de novidade e chamada para a bio.",
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
      "Comece pelo nome do produto, adicione a característica que mais diferencia (material, tamanho, função) e termine com um termo de busca. Evite promessas vazias e respeite o limite de caracteres do canal onde vai publicar.",
  },
  {
    question: "Qual o tamanho ideal de um título de produto?",
    answer:
      "Depende do canal. Mercado Livre usa até 60 caracteres, Shopee até 100 e lojas virtuais costumam trabalhar entre 50 e 70. A ferramenta gera o título já no limite do canal selecionado e mostra o contador.",
  },
  {
    question: "O que devo colocar no título de um produto?",
    answer:
      "Produto + marca + característica que vende + termo de busca. Pense no que o comprador digitaria para encontrar o seu item e coloque essas palavras no título, na ordem certa.",
  },
  {
    question: "Devo usar emoji ou letras maiúsculas no título?",
    answer:
      "Depende da plataforma. Mercado Livre não recomenda emojis nem CAPS LOCK em excesso; Shopee e Instagram aceitam emojis com naturalidade. A ferramenta adapta o título ao canal escolhido automaticamente.",
  },
  {
    question: "O gerador de títulos é gratuito?",
    answer:
      "Sim. A geração é gratuita, não exige cadastro e não pede cartão de crédito. Você pode gerar, copiar e testar quantos títulos quiser durante o período de testes.",
  },
  {
    question: "Posso gerar mais de uma versão do título?",
    answer:
      "Sim. A ferramenta entrega o título principal e variações, e o botão “Gerar novamente” cria versões alternativas para você testar qual converte mais no seu anúncio.",
  },
];

