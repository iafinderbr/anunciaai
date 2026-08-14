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
    text: "Até 100 caracteres, com o nome do produto, o diferencial e os termos que o comprador busca.",
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
    text: "Material, medidas, garantia e itens inclusos preenchidos para o produto aparecer nos filtros.",
  },
  {
    title: "Prova de confiança",
    text: "Garantia e troca explicadas para reduzir a hesitação de compra.",
  },
];

export const SHOPEE_TITLE_BREAKDOWN: { label: string; value: string }[] = [
  { label: "Produto", value: "Carregador Portátil" },
  { label: "Diferencial", value: "20000mAh" },
  { label: "Palavra-chave", value: "Carregamento Rápido" },
  { label: "Toque Shopee", value: "Duas Portas USB 🔥" },
];

export const SHOPEE_FEATURES: { title: string; text: string }[] = [
  {
    title: "Título de até 100 caracteres",
    text: "A Shopee exibe títulos longos. A ferramenta aproveita o espaço com palavras-chave, sem exagerar.",
  },
  {
    title: "Descrição otimizada para a Shopee",
    text: "Texto limpo, sem telefone, e-mail ou link externo — os itens que a Shopee proíbe na descrição.",
  },
  {
    title: "Benefícios que vendem",
    text: "A IA transforma especificações técnicas em vantagens claras para o comprador.",
  },
  {
    title: "Palavras-chave de busca",
    text: "Termos que o comprador digita na busca da Shopee, prontos para distribuir entre título e ficha.",
  },
  {
    title: "Ficha técnica organizada",
    text: "Suas anotações viram atributos limpos, prontos para preencher os campos de variação do anúncio.",
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
    wrong: "Descrição com WhatsApp, e-mail ou link para outro site",
    right: "Descrição focada em uso, ficha técnica e garantia — a Shopee bloqueia contato externo",
  },
  {
    wrong: "Foto e título dizendo uma coisa, ficha técnica dizendo outra",
    right: "Título, descrição e ficha técnica coerentes, com o mesmo nome e especificações",
  },
  {
    wrong: "Prometer frete grátis ou parcelamento que a loja não configura",
    right: "Deixar frete, cupom e parcelamento para as configurações do anúncio",
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
      "Preencha o nome do produto, a categoria, o preço e as características na ferramenta desta página e clique em “Gerar anúncio”. Em segundos a IA devolve título, descrição, benefícios, ficha técnica e palavras-chave no formato da Shopee.",
  },
  {
    question: "Qual o limite de caracteres do título na Shopee?",
    answer:
      "A Shopee permite títulos de até 100 caracteres, com espaço para palavras-chave e emojis. A ferramenta gera o título dentro desse limite e mostra o contador para você conferir.",
  },
  {
    question: "O que não pode ter na descrição de um anúncio da Shopee?",
    answer:
      "A Shopee proíbe contato externo na descrição, como telefone, WhatsApp, e-mail e links para outros sites, além de negociação fora da plataforma. A ferramenta entrega um texto limpo, focado em uso, ficha técnica e garantia.",
  },
  {
    question: "O que faz um produto aparecer na busca da Shopee?",
    answer:
      "Principalmente o título, as palavras-chave e a ficha técnica preenchida. A ferramenta monta o título com os termos de busca e organiza a ficha para o produto aparecer nos filtros certos.",
  },
  {
    question: "O gerador de anúncios para Shopee é gratuito?",
    answer:
      "Sim. A geração é gratuita, não exige cadastro e não pede cartão de crédito. Você pode gerar, copiar e publicar quantos anúncios quiser durante o período de testes.",
  },
  {
    question: "A ferramenta serve para outros marketplaces também?",
    answer:
      "Sim. Esta página é otimizada para a Shopee, mas o AnunciaAI também gera anúncios para Mercado Livre, loja virtual e Instagram, cada um com o formato e o limite de caracteres da plataforma.",
  },
];

