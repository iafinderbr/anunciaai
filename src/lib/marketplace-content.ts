import type { GeneratorInput } from "./types";

/**
 * Conteúdo da landing page /gerador-de-anuncios-facebook-marketplace.
 * Fonte única para as seções de conteúdo (como funciona, estrutura do
 * anúncio, recursos, erros comuns e FAQ).
 * O FAQ e o passo a passo são renderizados apenas como conteúdo HTML.
 */

export const MARKETPLACE_EXAMPLE_INPUT: GeneratorInput = {
  productName: "Bicicleta aro 29 21 marchas",
  category: "Bicicletas",
  price: "R$ 850",
  audience: "Quem quer pedalar na cidade e em trilhas leves",
  features:
    "Seminova, quadro de alumínio, freios a disco, suspensão dianteira, poucos riscos, revisada recentemente",
  channel: "facebook-marketplace",
  tone: "simples",
};

export const MARKETPLACE_STEPS: { title: string; text: string }[] = [
  {
    title: "Informe seu produto",
    text: "Cole nome, categoria, preço e características — incluindo o estado de conservação, se souber.",
  },
  {
    title: "Deixe a IA criar",
    text: "Em segundos você recebe título natural, descrição direta, benefícios e estado de conservação.",
  },
  {
    title: "Copie e publique",
    text: "Copie cada bloco com um clique e cole no anúncio do Marketplace, junto com as fotos.",
  },
];

export const MARKETPLACE_STRUCTURE: { title: string; text: string }[] = [
  {
    title: "Título natural",
    text: "O que é e o estado de conservação, sem CAPS LOCK, sem emoji e sem promessa vazia.",
  },
  {
    title: "Descrição direta",
    text: "Texto em primeira pessoa, fácil de ler no celular e honesto sobre o que está vendendo.",
  },
  {
    title: "Estado de conservação",
    text: "Novo, seminovo ou usado: dizer logo de cara filtra os interessados certos e evita desistência.",
  },
  {
    title: "Detalhes que ajudam a decidir",
    text: "Marca, medidas, acessórios e o que mais o comprador pergunta antes de fechar.",
  },
  {
    title: "Preço honesto",
    text: "Um valor coerente com o estado, que convida à negociação pelo Messenger.",
  },
];

export const MARKETPLACE_FEATURES: { title: string; text: string }[] = [
  {
    title: "Título natural e sem enrolação",
    text: "Produto + estado de conservação, sem letras maiúsculas em excesso e sem emojis.",
  },
  {
    title: "Descrição pessoa para pessoa",
    text: "Texto em primeira pessoa, direto e fácil de ler, como quem realmente está vendendo.",
  },
  {
    title: "Estado de conservação detectado",
    text: "A IA identifica sinais de novo, seminovo ou usado nas características e destaca no anúncio.",
  },
  {
    title: "Benefícios em vez de só especificações",
    text: "As características viram vantagens que o comprador entende na hora.",
  },
  {
    title: "CTA pelo Messenger",
    text: "Fechamento que convida à conversa pelo chat do Marketplace — sem “link na bio”.",
  },
  {
    title: "Tom de texto ajustável",
    text: "Escolha entre profissional, persuasivo, simples ou premium e mantenha a sua forma de vender.",
  },
];

export const MARKETPLACE_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "Título com CAPS LOCK e emoji: “BICICLETA TOP!! 🔥”",
    right: "Bicicleta Aro 29 21 Marchas (Seminovo) Quadro de Alumínio",
  },
  {
    wrong: "Descrição de uma frase: “Boa, interessados chamar”",
    right: "Estado, detalhes, benefícios e preço explicados com clareza",
  },
  {
    wrong: "Ocultar defeitos ou o estado real do produto",
    right: "Transparência: o comprador confirma o que viu e fecha mais rápido",
  },
  {
    wrong: "Preço acima do mercado, sem margem para negociar",
    right: "Valor coerente com o estado, aberto a conversa no Messenger",
  },
];

export interface MarketplaceExample {
  bad: string;
  good: string;
}

export const MARKETPLACE_EXAMPLE: MarketplaceExample = {
  bad: "Bicicleta aro 29. Muito boa. Interessados chamar.",
  good:
    "Estou vendendo minha bicicleta aro 29, seminova, com poucos riscos e revisada recentemente.\n\n" +
    "• Quadro de alumínio, leve para subir e descer\n" +
    "• Freios a disco, mais segurança na descida\n" +
    "• Suspensão dianteira, conforto em trilhas leves\n\n" +
    "Estado de conservação: seminovo.\n" +
    "Valor: R$ 850 (negociável).\n\n" +
    "Se interessar, chame no Messenger — respondo rápido.",
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const MARKETPLACE_FAQ: FaqItem[] = [
  {
    question: "Como criar um anúncio para o Facebook Marketplace com IA?",
    answer:
      "Preencha o nome do produto, a categoria, o preço e as características na ferramenta desta página e clique em “Gerar anúncio”. Em segundos a IA devolve título, descrição, benefícios e estado de conservação prontos para colar no anúncio.",
  },
  {
    question: "Qual o tamanho ideal do título de um anúncio no Marketplace?",
    answer:
      "Curto e natural, em torno de 65 caracteres. Diga o que é, o estado de conservação e o principal diferencial. Evite CAPS LOCK, emojis e palavras de vitrine, que não combinam com compra e venda entre pessoas.",
  },
  {
    question: "O que devo colocar na descrição?",
    answer:
      "Estado de conservação, características e diferenciais, marca, medidas e itens inclusos — o que o comprador pergunta primeiro. A ferramenta organiza esses blocos em um texto direto, em primeira pessoa.",
  },
  {
    question: "Preciso informar o estado de conservação do produto?",
    answer:
      "Recomendamos, sim, mas não é obrigatório. Se você mencionar termos como “novo”, “seminovo” ou “pouco uso” nas características, a ferramenta identifica e destaca o estado no título e na descrição. Anúncios com estado claro recebem mais mensagens.",
  },
  {
    question: "O gerador para Facebook Marketplace é gratuito?",
    answer:
      "Sim. A geração é gratuita, não exige cadastro e não pede cartão de crédito. Você pode gerar, copiar e publicar quantos anúncios quiser durante o período de testes.",
  },
  {
    question: "A ferramenta serve para outros canais também?",
    answer:
      "Sim. Esta página é otimizada para o Facebook Marketplace, mas o AnunciaAI também gera anúncios para OLX, Mercado Livre, Shopee, loja virtual e legendas para Instagram, cada um com o formato da plataforma.",
  },
];

