import type { GeneratorInput } from "./types";

/** Conteúdo da landing page /gerador-de-anuncios-mercado-livre. */
export const ML_EXAMPLE_INPUT: GeneratorInput = {
  productName: "Fone de ouvido bluetooth JBL Tune 510BT",
  category: "Eletrônicos, Áudio e Vídeo",
  price: "R$ 249,90",
  audience: "Jovens e profissionais que usam fone com frequência",
  features:
    "Bluetooth 5.0, até 40 horas de bateria, dobrável, com microfone integrado, carregamento rápido USB-C, cores preto e azul, garantia de 12 meses",
  channel: "mercado-livre",
  tone: "persuasivo",
};

export const ML_STEPS: { title: string; text: string }[] = [
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
    text: "Confira cada informação e ajuste o conteúdo às regras atuais da categoria antes de usar no formulário do Mercado Livre.",
  },
];

export const ML_FEATURES: { title: string; text: string }[] = [
  {
    title: "Título objetivo",
    text: "O preview usa um tamanho editorial conservador para facilitar a leitura. Regras e limites podem variar, então confirme as orientações atuais da categoria antes de publicar.",
  },
  {
    title: "Produto + marca + modelo",
    text: "A ferramenta prioriza identificação do produto e acrescenta características fornecidas por você quando elas ajudam a diferenciar a versão.",
  },
  {
    title: "Descrição organizada",
    text: "O texto reúne características, benefícios conservadores e informações fornecidas pelo vendedor em blocos fáceis de revisar.",
  },
  {
    title: "Ficha de características",
    text: "Suas anotações viram pares de atributo e valor para facilitar a conferência ao preencher os campos do anúncio.",
  },
  {
    title: "Sugestões de termos",
    text: "As combinações são derivadas do produto, da categoria e das características informadas. A ferramenta não mede volume de busca ou posição.",
  },
  {
    title: "Variações para comparar",
    text: "Receba alternativas de título para escolher a versão que identifica melhor o item, sem promessa de ganho de posição.",
  },
];

export const ML_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "PROMOÇÃO!!! FRETE GRÁTIS 🔥 MELHOR PREÇO",
    right: "Fone Bluetooth JBL Tune 510BT Dobrável 40h Bateria",
  },
  {
    wrong: "Título genérico: “Fone de ouvido bom e barato”",
    right: "Produto + marca + modelo + especificação relevante e confirmada",
  },
  {
    wrong: "Descrição com informação de contato ou condição que não pertence ao produto",
    right: "Descrição focada em uso, características, medidas, conteúdo da caixa e garantia quando informada",
  },
  {
    wrong: "Ficha técnica incompleta mesmo com os dados disponíveis",
    right: "Atributos conferidos e preenchidos de acordo com a versão realmente anunciada",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const ML_FAQ: FaqItem[] = [
  {
    question: "Como usar o gerador de anúncios para Mercado Livre?",
    answer:
      "Preencha o nome do produto, a categoria, o preço e as características e clique em “Gerar anúncio”. A ferramenta monta uma primeira versão de título, descrição, benefícios, ficha de características e sugestões de termos para você revisar.",
  },
  {
    question: "Existe um limite fixo de caracteres para todo título no Mercado Livre?",
    answer:
      "As regras de publicação podem variar por categoria e por mudanças da própria plataforma. O AnunciaAI usa um preview editorial para manter o título legível, mas ele não substitui a validação mostrada pelo Mercado Livre no momento da publicação.",
  },
  {
    question: "Como estruturar um título de Mercado Livre?",
    answer:
      "Comece pelo produto e use marca, modelo e especificações que ajudem a identificar a versão. Evite promoções, símbolos e informações que mudam com frequência quando elas não fazem parte da identificação do item.",
  },
  {
    question: "O gerador de anúncios é gratuito?",
    answer:
      "Sim. A versão atual pode ser usada gratuitamente durante o período de testes, sem cadastro e sem cartão de crédito.",
  },
  {
    question: "Preciso revisar o conteúdo gerado?",
    answer:
      "Sim. Confira especificações, preço, condição, estoque, entrega e qualquer regra atual da categoria antes de usar o texto. A ferramenta trabalha somente com os dados que você informa.",
  },
  {
    question: "A ferramenta serve para Shopee e loja virtual também?",
    answer:
      "Sim. Existem geradores dedicados a Shopee, loja virtual, OLX, Facebook Marketplace e Instagram. Cada um muda a estrutura do texto, mas a revisão das regras atuais do canal continua necessária.",
  },
];
