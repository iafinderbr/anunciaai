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
    title: "Copie, revise e publique",
    text: "Confira as informações, copie os blocos e cole no classificado do Marketplace junto com as fotos do item.",
  },
];

export const MARKETPLACE_STRUCTURE: { title: string; text: string }[] = [
  {
    title: "Título natural",
    text: "Identifique o produto e acrescente marca, modelo ou condição quando isso ajudar a diferenciar o item.",
  },
  {
    title: "Descrição direta",
    text: "Explique o que está vendendo, a condição, os detalhes importantes e tudo o que realmente acompanha o item.",
  },
  {
    title: "Estado de conservação",
    text: "Quando o campo estiver disponível, escolha a condição que representa de verdade o produto e mantenha fotos e descrição coerentes.",
  },
  {
    title: "Detalhes que ajudam a decidir",
    text: "Marca, medidas, acessórios, compatibilidade e defeitos relevantes ajudam o comprador a avaliar o produto.",
  },
  {
    title: "Preço correto",
    text: "Informe o valor real do item e não invente desconto, entrega ou condição de pagamento.",
  },
];

export const MARKETPLACE_FEATURES: { title: string; text: string }[] = [
  {
    title: "Título curto e identificável",
    text: "O AnunciaAI usa um tamanho conservador para facilitar a leitura. Isso é uma escolha da ferramenta, não um limite oficial publicado pela Meta.",
  },
  {
    title: "Descrição para classificado",
    text: "Texto direto com características, condição e informações que o comprador precisa conferir antes do contato.",
  },
  {
    title: "Estado de conservação detectado",
    text: "A IA identifica sinais de novo, seminovo ou usado apenas quando essas informações aparecem nos dados fornecidos.",
  },
  {
    title: "Benefícios a partir de dados reais",
    text: "A ferramenta transforma características informadas em vantagens claras, sem acrescentar especificações que você não forneceu.",
  },
  {
    title: "Texto pronto para revisar",
    text: "Receba uma primeira versão para ajustar antes de preencher os campos do Marketplace e publicar.",
  },
  {
    title: "Tom de texto ajustável",
    text: "Escolha entre profissional, persuasivo, simples ou premium e mantenha a sua forma de vender.",
  },
];

export const MARKETPLACE_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "Título genérico: “BICICLETA TOP!! 🔥”",
    right: "Bicicleta Aro 29 21 Marchas Quadro de Alumínio Seminova",
  },
  {
    wrong: "Descrição de uma frase: “Boa, interessados chamar”",
    right: "Condição, detalhes, itens incluídos e observações explicados com clareza",
  },
  {
    wrong: "Ocultar defeitos ou o estado real do produto",
    right: "Descrever sinais de uso e problemas relevantes e mostrar o item nas fotos",
  },
  {
    wrong: "Inventar desconto, entrega ou garantia",
    right: "Usar somente preço, condições e características que possam ser confirmadas",
  },
];

export interface MarketplaceExample {
  bad: string;
  good: string;
}

export const MARKETPLACE_EXAMPLE: MarketplaceExample = {
  bad: "Bicicleta aro 29. Muito boa. Interessados chamar.",
  good:
    "Estou vendendo uma bicicleta aro 29, seminova, com poucos riscos e revisada recentemente.\n\n" +
    "• Quadro de alumínio\n" +
    "• Freios a disco\n" +
    "• Suspensão dianteira\n\n" +
    "Estado de conservação: seminova, com poucos riscos.\n" +
    "Valor informado: R$ 850.\n\n" +
    "Confira as fotos e use os recursos de contato do Marketplace para tirar dúvidas.",
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const MARKETPLACE_FAQ: FaqItem[] = [
  {
    question: "Como criar um anúncio para o Facebook Marketplace com IA?",
    answer:
      "Preencha o nome do produto, a categoria, o preço e as características na ferramenta desta página. A IA devolve uma primeira versão com título, descrição, benefícios e características para você revisar antes de publicar.",
  },
  {
    question: "Qual o limite do título de um anúncio no Marketplace?",
    answer:
      "Nas instruções oficiais atuais da Meta consultadas para criação de classificados, não há um limite fixo de caracteres publicado. O AnunciaAI usa um tamanho conservador para manter o título fácil de ler, mas esse número não deve ser entendido como regra oficial da Meta.",
  },
  {
    question: "O que devo colocar na descrição?",
    answer:
      "Informe condição, características, marca, medidas, itens incluídos e defeitos relevantes. O objetivo é complementar as fotos e os campos do classificado com informações que você consegue confirmar.",
  },
  {
    question: "Preciso informar o estado de conservação do produto?",
    answer:
      "Quando o campo de condição estiver disponível, escolha a opção que melhor descreve o item. A Meta diferencia estados como novo, usado em diferentes condições e recondicionado, e recomenda clareza sobre problemas e defeitos, especialmente em eletrônicos.",
  },
  {
    question: "O gerador para Facebook Marketplace é gratuito?",
    answer:
      "Sim. A geração é gratuita, não exige cadastro e não pede cartão de crédito durante o período de testes.",
  },
  {
    question: "A ferramenta serve para outros canais também?",
    answer:
      "Sim. Esta página é adaptada ao Facebook Marketplace, mas o AnunciaAI também gera anúncios para OLX, Mercado Livre, Shopee, loja virtual e outros canais.",
  },
];

