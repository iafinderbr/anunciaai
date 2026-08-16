import type { GeneratorInput } from "./types";

/**
 * Conteúdo da landing page /gerador-de-titulos-para-produtos.
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
    text: "Cole o nome, a categoria e as características que você consegue confirmar. Pode ser em tópicos soltos.",
  },
  {
    title: "Gere variações",
    text: "A ferramenta reorganiza os dados informados e cria um título principal com alternativas para você comparar.",
  },
  {
    title: "Revise antes de usar",
    text: "Confira se a versão escolhida identifica o produto corretamente e se atende às regras atuais do canal onde será publicada.",
  },
];

export const TITLES_ANATOMY: { title: string; text: string }[] = [
  {
    title: "Comece pelo produto",
    text: "O leitor deve conseguir identificar o que está sendo anunciado sem depender de contexto escondido.",
  },
  {
    title: "Adicione um atributo relevante",
    text: "Marca, modelo, material, tamanho, capacidade ou função podem ajudar a diferenciar a versão quando realmente se aplicam.",
  },
  {
    title: "Use termos que descrevem o item",
    text: "Prefira palavras que representam o produto e suas características reais em vez de jargão interno ou elogios vagos.",
  },
  {
    title: "Corte o que não identifica",
    text: "Promoções, frete, urgência e superlativos ocupam espaço e podem mudar com o tempo; deixe essas informações nos campos apropriados.",
  },
  {
    title: "Confira as regras do canal",
    text: "Marketplaces e redes sociais podem mudar limites e orientações. Revise as regras atuais antes de publicar.",
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
    title: "Preview ajustado ao canal",
    text: "A ferramenta usa comprimentos editoriais diferentes para manter as opções legíveis, mas você deve conferir o limite atual da plataforma antes de publicar.",
  },
  {
    title: "Produto + atributos informados",
    text: "As opções combinam o nome do produto, a categoria e características fornecidas por você sem inventar especificações.",
  },
  {
    title: "Variações para comparar",
    text: "Receba um título principal e versões alternativas para avaliar qual identifica melhor o item.",
  },
  {
    title: "Sugestões de termos relacionados",
    text: "A ferramenta combina palavras do produto e das características como ponto de partida; ela não mede volume de busca.",
  },
  {
    title: "Tom ajustável",
    text: "Escolha entre profissional, persuasivo, simples ou premium para variar a linguagem sem alterar os fatos informados.",
  },
  {
    title: "Fácil de copiar e editar",
    text: "Cada opção pode ser copiada para você revisar e adaptar no formulário de publicação.",
  },
];

export const TITLES_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "PRODUTO NOVO!!! MELHOR PREÇO IMPERDÍVEL",
    right: "Garrafa Térmica 1 Litro Aço Inox Mantém 12h Quente",
  },
  {
    wrong: "Garrafa boa",
    right: "Nome do produto + material + característica relevante",
  },
  {
    wrong: "Garrafa Térmica de Aço Inoxidável que Mantém Bebidas Quentes por Muito Tempo",
    right: "Título mais enxuto com produto e especificações verificáveis",
  },
  {
    wrong: "Título copiado do fornecedor, idêntico ao de outra versão",
    right: "Título claro, específico e fiel à versão realmente anunciada",
  },
];

export const TITLES_CHANNELS: { title: string; text: string }[] = [
  {
    title: "Mercado Livre",
    text: "Priorize identificação do produto, marca, modelo e especificações úteis. Confira as orientações atuais da categoria antes de publicar.",
  },
  {
    title: "Shopee",
    text: "Use espaço para marca, modelo e características relevantes, sempre conferindo as regras e o contador exibidos pela plataforma.",
  },
  {
    title: "Loja virtual",
    text: "Prefira um título claro e consistente com a página, a ficha técnica e os dados estruturados do produto.",
  },
  {
    title: "Instagram",
    text: "Um título ou primeira linha mais curta pode funcionar como gancho, desde que continue fiel ao produto e ao objetivo da publicação.",
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
      "Comece pelo nome do produto e adicione marca, modelo ou uma característica que ajude a identificar a versão. Evite promessas vazias e confira as regras atuais do canal onde vai publicar.",
  },
  {
    question: "Qual o tamanho ideal de um título de produto?",
    answer:
      "Depende do canal, da categoria e da forma como a plataforma exibe o anúncio. Como limites e orientações podem mudar, use o preview apenas como referência editorial e confirme as regras atuais antes de publicar.",
  },
  {
    question: "O que devo colocar no título de um produto?",
    answer:
      "Produto + marca + modelo + característica relevante costuma ser uma boa base. Inclua apenas informações verdadeiras e úteis para reconhecer exatamente a versão anunciada.",
  },
  {
    question: "Devo usar emoji ou letras maiúsculas no título?",
    answer:
      "Em marketplaces, priorize clareza e evite símbolos ou caixa alta desnecessários. Em redes sociais, emojis podem fazer sentido quando combinam com o contexto. Revise sempre conforme o canal.",
  },
  {
    question: "O gerador de títulos é gratuito?",
    answer:
      "Sim. A versão atual pode ser usada gratuitamente durante o período de testes, sem cadastro e sem cartão de crédito.",
  },
  {
    question: "Posso gerar mais de uma versão do título?",
    answer:
      "Sim. A ferramenta entrega um título principal e variações, e o botão de gerar novamente reorganiza os dados para você comparar outras opções.",
  },
];
