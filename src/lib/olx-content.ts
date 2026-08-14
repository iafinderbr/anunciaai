import type { GeneratorInput } from "./types";

/**
 * Conteúdo da landing page /gerador-de-anuncios-olx.
 * Fonte única para as seções de conteúdo (como funciona, estrutura do
 * anúncio, recursos, erros comuns e FAQ).
 * O FAQ e o passo a passo são renderizados apenas como conteúdo HTML.
 */

export const OLX_EXAMPLE_INPUT: GeneratorInput = {
  productName: "Sofá retrátil 3 lugares",
  category: "Móveis",
  price: "R$ 1.200",
  audience: "Famílias e casais montando a sala",
  features:
    "Pouco uso, sem rasgos, tecido suede bege, estrutura de madeira reforçada, vendo por mudança de cidade, retirada no local",
  channel: "olx",
  tone: "persuasivo",
};

export const OLX_STEPS: { title: string; text: string }[] = [
  {
    title: "Informe seu produto",
    text: "Cole nome, categoria, preço e características — incluindo estado de conservação, se souber.",
  },
  {
    title: "Deixe a IA criar",
    text: "Em segundos você recebe título claro, descrição honesta, benefícios e estado de conservação.",
  },
  {
    title: "Copie e publique",
    text: "Copie cada bloco com um clique e cole no anúncio da OLX, junto com as fotos do produto.",
  },
];

export const OLX_STRUCTURE: { title: string; text: string }[] = [
  {
    title: "Título claro e direto",
    text: "O que é, o estado de conservação e o diferencial — sem CAPS LOCK e sem promessa vazia.",
  },
  {
    title: "Descrição honesta",
    text: "O comprador precisa entender exatamente o que está levando. Transparência evita desistência na hora da retirada.",
  },
  {
    title: "Estado de conservação",
    text: "Seminovo, pouco uso ou usado: dizer o estado logo de cara filtra os interessados certos.",
  },
  {
    title: "Detalhes que ajudam a decidir",
    text: "Medidas, nota fiscal, acessórios inclusos e motivo da venda reduzem as perguntas no chat.",
  },
  {
    title: "Preço justo e negociável",
    text: "Um valor coerente com o estado atrai negociação sem desvalorizar o produto.",
  },
];

export const OLX_FEATURES: { title: string; text: string }[] = [
  {
    title: "Título curto e claro",
    text: "Produto + estado de conservação + diferencial, sem emojis e sem letras maiúsculas em excesso.",
  },
  {
    title: "Descrição estilo classificado",
    text: "Texto em primeira pessoa, com características, benefícios e informações de retirada/negociação.",
  },
  {
    title: "Estado de conservação detectado",
    text: "A IA identifica sinais de novo, seminovo ou usado nas suas características e destaca no anúncio.",
  },
  {
    title: "Ficha de características",
    text: "Suas anotações viram uma lista organizada de medidas, material e itens inclusos.",
  },
  {
    title: "CTA de classificado",
    text: "Fechamento que convida ao chat e à negociação — sem “link na bio” e sem pressão de e-commerce.",
  },
  {
    title: "Tom de texto ajustável",
    text: "Escolha entre profissional, persuasivo, simples ou premium e mantenha a sua forma de vender.",
  },
];

export const OLX_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "Título genérico: “SOFÁ TOP!! NÃO PERCA”",
    right: "Sofá Retrátil 3 Lugares — Pouco uso · Tecido Suede Bege",
  },
  {
    wrong: "Descrição sem estado de conservação e sem medidas",
    right: "Estado, material, dimensões e motivo da venda explicados logo no começo",
  },
  {
    wrong: "Esconder defeitos para valorizar o anúncio",
    right: "Transparência: o comprador confirma o que viu e fecha mais rápido",
  },
  {
    wrong: "Preço acima do mercado, sem margem para negociar",
    right: "Valor coerente com o estado, aberto a negociação no chat",
  },
];

export interface OlxAnnouncementExample {
  bad: string;
  good: string;
}

export const OLX_ANNOUNCEMENT_EXAMPLE: OlxAnnouncementExample = {
  bad: "Sofá retrátil. Ótimo estado. Só pegar. Interessados chamar.",
  good:
    "Vendo sofá retrátil de 3 lugares, pouco uso, sem rasgos e em ótimo estado. Estou me mudando de cidade, por isso o valor abaixo do mercado.\n\n" +
    "• Tecido suede bege, fácil de limpar\n" +
    "• Estrutura de madeira reforçada\n" +
    "• Retrátil: vira cama para visitas\n\n" +
    "Estado de conservação: pouco uso, sem marcas.\n" +
    "Valor: R$ 1.200 (negociável).\n\n" +
    "Interessado? Chame no chat da OLX e combine a retirada.",
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const OLX_FAQ: FaqItem[] = [
  {
    question: "Como criar um anúncio para a OLX com inteligência artificial?",
    answer:
      "Preencha o nome do produto, a categoria, o preço e as características na ferramenta desta página e clique em “Gerar anúncio”. Em segundos a IA devolve título, descrição, benefícios e estado de conservação prontos para colar no anúncio da OLX.",
  },
  {
    question: "Preciso informar o estado de conservação do produto?",
    answer:
      "Recomendamos, sim, mas não é obrigatório. Se você mencionar termos como “seminovo”, “pouco uso” ou “usado” nas características, a ferramenta identifica e destaca o estado no título e na descrição. Anúncios com estado claro vendem mais rápido.",
  },
  {
    question: "Qual o tamanho ideal do título de um anúncio na OLX?",
    answer:
      "Curto e claro, em torno de 65 caracteres. Diga o que é, o estado de conservação e o principal diferencial. Evite CAPS LOCK, emojis e palavras como “promoção”, que não ajudam em um classificado.",
  },
  {
    question: "O que devo colocar na descrição de um anúncio OLX?",
    answer:
      "Estado de conservação, características e diferenciais, medidas, itens inclusos, motivo da venda (quando fizer sentido) e como funciona a retirada ou entrega. A ferramenta organiza esses blocos automaticamente.",
  },
  {
    question: "O gerador de anúncios para OLX é gratuito?",
    answer:
      "Sim. A geração é gratuita, não exige cadastro e não pede cartão de crédito. Você pode gerar, copiar e publicar quantos anúncios quiser durante o período de testes.",
  },
  {
    question: "A ferramenta serve para outros marketplaces também?",
    answer:
      "Sim. Esta página é otimizada para a OLX, mas o AnunciaAI também gera anúncios para Mercado Livre, Shopee, loja virtual e legendas para Instagram, cada um com o formato da plataforma.",
  },
];

