import type { GeneratorInput } from "./types";

/**
 * Conteúdo da landing page /gerador-de-anuncios-shopee.
 * Fonte única para as seções de conteúdo da página (como funciona,
 * estrutura do anúncio, recursos, erros comuns e FAQ).
 * O FAQ e o passo a passo são renderizados apenas como conteúdo HTML.
 */

export const SHOPEE_EXAMPLE_INPUT: GeneratorInput = {
  productName: "Carregador portátil 20000mAh",
  category: "Acessórios para celular",
  price: "R$ 89,90",
  audience: "Quem usa o celular o dia todo fora de casa",
  features:
    "20000mAh, carregamento rápido 20W, duas portas USB, entrada USB-C, indicador LED de bateria, carrega até 4 vezes o celular, garantia de 6 meses",
  channel: "shopee",
  tone: "persuasivo",
};

export const SHOPEE_STEPS: { title: string; text: string }[] = [
  {
    title: "Informe seu produto",
    text: "Cole nome, categoria, preço e características. Pode ser em tópicos soltos, do jeito que você tem anotado.",
  },
  {
    title: "Deixe a IA criar",
    text: "Em segundos você recebe título, descrição, benefícios, ficha técnica e palavras-chave no formato da Shopee.",
  },
  {
    title: "Copie e publique",
    text: "Copie cada bloco com um clique e cole no formulário de anúncio da Shopee. Sem retrabalho.",
  },
];

export const SHOPEE_ANATOMY: { title: string; text: string }[] = [
  {
    title: "Título com palavra-chave",
    text: "Até 120 caracteres, com nome do produto, marca, modelo e características relevantes para a busca.",
  },
  {
    title: "Descrição que apresenta e convence",
    text: "Abertura direta, benefícios em tópicos e uma chamada para ação no final.",
  },
  {
    title: "Benefícios, não só características",
    text: "Cada especificação vira uma vantagem que o comprador entende na hora.",
  },
  {
    title: "Ficha técnica completa",
    text: "Material, medidas, garantia e itens inclusos preenchidos para deixar o anúncio mais claro.",
  },
  {
    title: "Informações consistentes",
    text: "Título, fotos, atributos e descrição precisam representar a mesma versão do produto.",
  },
];

export const SHOPEE_TITLE_BREAKDOWN: { label: string; value: string }[] = [
  { label: "Produto", value: "Carregador Portátil" },
  { label: "Diferencial", value: "20000mAh" },
  { label: "Palavra-chave", value: "Carregamento Rápido" },
  { label: "Atributo", value: "Duas Portas USB" },
];

export const SHOPEE_FEATURES: { title: string; text: string }[] = [
  {
    title: "Título de até 120 caracteres",
    text: "A ferramenta mantém o título dentro do limite atual e prioriza informações úteis, sem encher o texto com termos irrelevantes.",
  },
  {
    title: "Descrição otimizada para a Shopee",
    text: "Texto organizado para apresentar características, benefícios, medidas, compatibilidades e conteúdo da embalagem.",
  },
  {
    title: "Benefícios que vendem",
    text: "A IA transforma especificações técnicas em vantagens claras para o comprador.",
  },
  {
    title: "Palavras-chave de busca",
    text: "Termos relacionados ao produto, prontos para distribuir de forma natural entre título, descrição e atributos.",
  },
  {
    title: "Ficha técnica organizada",
    text: "Suas anotações viram atributos limpos, prontos para conferir ao preencher o anúncio.",
  },
  {
    title: "Tom de texto ajustável",
    text: "Escolha entre profissional, persuasivo, simples ou premium e mantenha a voz da sua loja.",
  },
];

export const SHOPEE_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "Título genérico: “Carregador portátil muito bom”",
    right: "Carregador Portátil 20000mAh Carregamento Rápido Duas Portas USB",
  },
  {
    wrong: "Descrição vaga, sem medidas, compatibilidade ou itens inclusos",
    right: "Descrição focada em uso, características reais e informações que ajudam a decidir",
  },
  {
    wrong: "Foto e título dizendo uma coisa, ficha técnica dizendo outra",
    right: "Título, fotos, descrição e atributos coerentes, com a mesma versão e especificações",
  },
  {
    wrong: "Prometer frete grátis ou parcelamento que a loja não configura",
    right: "Deixar frete, cupom e parcelamento para as condições realmente configuradas no anúncio",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const SHOPEE_FAQ: FaqItem[] = [
  {
    question: "Como criar um anúncio para a Shopee com inteligência artificial?",
    answer:
      "Preencha o nome do produto, a categoria, o preço e as características na ferramenta desta página e clique em “Gerar anúncio”. Em segundos a IA devolve título, descrição, benefícios, ficha técnica e palavras-chave para você revisar.",
  },
  {
    question: "Qual o limite de caracteres do título na Shopee?",
    answer:
      "A documentação oficial atual da Shopee indica títulos de produto com até 120 caracteres. Use o espaço para identificar o item com clareza, incluindo marca, modelo e características relevantes quando fizer sentido.",
  },
  {
    question: "O que colocar na descrição de um anúncio da Shopee?",
    answer:
      "Inclua as informações que ajudam o comprador a decidir: principais características, medidas, material, compatibilidade, modo de uso e conteúdo da embalagem, sempre de forma clara e fiel ao produto.",
  },
  {
    question: "O que ajuda um produto a aparecer na busca da Shopee?",
    answer:
      "Título informativo e atributos precisos ajudam a Shopee e o comprador a entender o produto. Use termos relevantes sem repetição artificial e mantenha as características completas e corretas.",
  },
  {
    question: "O gerador de anúncios para Shopee é gratuito?",
    answer:
      "Sim. A geração é gratuita, não exige cadastro e não pede cartão de crédito. Você pode gerar, copiar e revisar anúncios durante o período de testes.",
  },
  {
    question: "A ferramenta serve para outros marketplaces também?",
    answer:
      "Sim. Esta página é otimizada para a Shopee, mas o AnunciaAI também gera anúncios para Mercado Livre, loja virtual e outros canais, adaptando a estrutura ao canal escolhido.",
  },
];

