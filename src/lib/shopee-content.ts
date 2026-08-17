import type { GeneratorInput } from "./types";

/** Conteúdo da landing page /gerador-de-anuncios-shopee. */
export const SHOPEE_EXAMPLE_INPUT: GeneratorInput = {
  productName: "Carregador portátil 20000mAh",
  category: "Acessórios para celular",
  price: "R$ 89,90",
  audience: "Quem usa o celular com frequência fora de casa",
  features:
    "20000mAh, carregamento rápido 20W, duas portas USB, entrada USB-C, indicador LED de bateria, garantia de 6 meses",
  channel: "shopee",
  tone: "persuasivo",
};

export const SHOPEE_STEPS: { title: string; text: string }[] = [
  {
    title: "Informe seu produto",
    text: "Cole nome, categoria, preço e características que você consegue confirmar.",
  },
  {
    title: "Gere uma primeira versão",
    text: "A ferramenta organiza os dados em título, descrição, benefícios, ficha de características e sugestões de termos relacionados.",
  },
  {
    title: "Revise e adapte",
    text: "Confira os dados e ajuste o conteúdo às regras atuais da categoria antes de preencher o anúncio da Shopee.",
  },
];

export const SHOPEE_ANATOMY: { title: string; text: string }[] = [
  {
    title: "Título identificável",
    text: "Use nome do produto, marca, modelo e características relevantes quando elas realmente ajudam a diferenciar a versão.",
  },
  {
    title: "Descrição organizada",
    text: "Apresente características, contexto de uso e informações importantes em blocos fáceis de conferir.",
  },
  {
    title: "Benefícios apoiados nos dados",
    text: "Explique a utilidade possível de uma característica sem transformar possibilidade em garantia.",
  },
  {
    title: "Atributos consistentes",
    text: "Material, medidas, garantia, voltagem e outros campos devem refletir exatamente a versão anunciada.",
  },
  {
    title: "Informações coerentes",
    text: "Título, fotos, atributos e descrição precisam representar o mesmo produto e as mesmas variações.",
  },
];

export const SHOPEE_TITLE_BREAKDOWN: { label: string; value: string }[] = [
  { label: "Produto", value: "Carregador Portátil" },
  { label: "Capacidade", value: "20000mAh" },
  { label: "Característica", value: "Carregamento Rápido 20W" },
  { label: "Conectividade", value: "USB-C" },
];

export const SHOPEE_FEATURES: { title: string; text: string }[] = [
  {
    title: "Título para revisar",
    text: "A ferramenta cria um preview legível com produto e características informadas. Confira sempre as regras e o contador exibidos pela Shopee antes de publicar.",
  },
  {
    title: "Descrição estruturada",
    text: "Texto organizado com características, benefícios conservadores, medidas, compatibilidades e conteúdo da embalagem quando esses dados são informados.",
  },
  {
    title: "Benefícios conservadores",
    text: "As características são explicadas sem inventar desempenho, durabilidade ou condições que você não forneceu.",
  },
  {
    title: "Sugestões de termos",
    text: "Combinações relacionadas ao produto para você revisar; a ferramenta não consulta volume real de busca.",
  },
  {
    title: "Ficha de características",
    text: "Suas anotações viram atributos organizados para facilitar a conferência ao preencher o anúncio.",
  },
  {
    title: "Tom de texto ajustável",
    text: "Escolha entre profissional, persuasivo, simples ou premium sem alterar os fatos informados.",
  },
];

export const SHOPEE_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "Título genérico: “Carregador portátil muito bom”",
    right: "Carregador Portátil 20000mAh Carregamento Rápido 20W USB-C",
  },
  {
    wrong: "Descrição vaga, sem medidas, compatibilidade ou itens inclusos",
    right: "Descrição focada em características reais e informações que ajudam a identificar o produto",
  },
  {
    wrong: "Foto e título dizendo uma coisa, atributos dizendo outra",
    right: "Título, fotos, descrição e atributos coerentes com a mesma versão",
  },
  {
    wrong: "Prometer frete, cupom ou parcelamento que não está configurado",
    right: "Deixar condições comerciais para os campos e configurações reais do anúncio",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const SHOPEE_FAQ: FaqItem[] = [
  {
    question: "Como usar o gerador de anúncios para Shopee?",
    answer:
      "Preencha nome, categoria, preço e características e clique em “Gerar anúncio”. A ferramenta cria uma primeira versão de título, descrição, benefícios e ficha de características para você revisar.",
  },
  {
    question: "Como conferir o tamanho permitido do título na Shopee?",
    answer:
      "Use o contador e as orientações exibidas pela Shopee no momento da publicação. Como regras de plataforma podem mudar, o preview do AnunciaAI deve ser tratado como referência editorial, não como garantia de limite oficial.",
  },
  {
    question: "O que colocar na descrição de um anúncio da Shopee?",
    answer:
      "Inclua características, medidas, material, compatibilidade, modo de uso e conteúdo da embalagem quando essas informações existirem e forem relevantes.",
  },
  {
    question: "O que pode ajudar o produto a ser entendido na busca da Shopee?",
    answer:
      "Um título claro e atributos precisos ajudam a plataforma e o comprador a identificar o item. Evite repetição artificial e mantenha as características consistentes.",
  },
  {
    question: "O gerador para Shopee é gratuito?",
    answer:
      "Sim. A versão gratuita atual pode ser usada sem cadastro e sem cartão de crédito para começar.",
  },
  {
    question: "A ferramenta serve para outros canais também?",
    answer:
      "Sim. Existem geradores dedicados a Mercado Livre, OLX, Facebook Marketplace, loja virtual e Instagram, cada um com uma estrutura diferente para revisar.",
  },
];
