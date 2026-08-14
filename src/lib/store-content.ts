import type { GeneratorInput } from "./types";

/**
 * Conteúdo da landing page /gerador-de-anuncios-para-loja-virtual.
 * Fonte única para as seções de conteúdo (como funciona, estrutura da
 * página de produto, recursos, erros comuns e FAQ).
 * O FAQ e o passo a passo são renderizados apenas como conteúdo HTML.
 */

export const STORE_EXAMPLE_INPUT: GeneratorInput = {
  productName: "Cafeteira Espresso 15 Bar",
  category: "Eletrodomésticos para cozinha",
  price: "R$ 649,90",
  audience: "Quem quer café de cafeteria em casa sem complicação",
  features:
    "Bomba italiana de 15 bar, reservatório de 1,5L, vaporizador de leite, bandeja removível, corpo em inox escovado, 110v, garantia de 12 meses",
  channel: "loja-virtual",
  tone: "profissional",
};

export const STORE_STEPS: { title: string; text: string }[] = [
  {
    title: "Informe seu produto",
    text: "Cole nome, categoria, preço, público e características. Pode ser em tópicos soltos, do jeito que você tem anotado.",
  },
  {
    title: "Deixe a IA criar",
    text: "Em segundos você recebe título, descrição, benefícios, ficha técnica, anúncio e SEO para a página do produto.",
  },
  {
    title: "Copie e publique",
    text: "Copie cada bloco com um clique e distribua nos campos da sua plataforma de e-commerce.",
  },
];

export const STORE_PAGE_BLOCKS: { title: string; text: string }[] = [
  {
    title: "Título do produto",
    text: "Com até 70 caracteres e as palavras que o comprador busca, otimizado para aparecer no Google.",
  },
  {
    title: "Descrição completa",
    text: "Abertura, diferenciais, benefícios e público indicado — o texto que apresenta e convence.",
  },
  {
    title: "Benefícios",
    text: "As características viram vantagens claras, na ordem que mais importa para a decisão de compra.",
  },
  {
    title: "Ficha de características",
    text: "Medidas, material, voltagem e garantia organizados em uma tabela limpa.",
  },
  {
    title: "Anúncio persuasivo",
    text: "Uma versão de copy pronta para campanha, página inicial ou remarketing.",
  },
  {
    title: "SEO e palavras-chave",
    text: "Título SEO, meta description no tamanho certo e a lista de termos para ranquear.",
  },
];

export const STORE_SEO_BREAKDOWN: { label: string; value: string }[] = [
  { label: "Título SEO", value: "Cafeteira Espresso 15 Bar | Comprar Online" },
  { label: "Meta description", value: "Cafeteira espresso 15 bar com vaporizador de leite e corpo em inox." },
  { label: "Palavras-chave", value: "cafeteira espresso, cafeteira 15 bar, máquina de café" },
];

export const STORE_FEATURES: { title: string; text: string }[] = [
  {
    title: "Título otimizado para SEO",
    text: "O texto sai com as palavras de busca e o tamanho certo para o snippet do Google e a URL da loja.",
  },
  {
    title: "Descrição longa e estruturada",
    text: "Blocos separados por assunto, fáceis de ler e prontos para o campo de descrição do produto.",
  },
  {
    title: "Ficha técnica organizada",
    text: "Suas anotações viram atributos limpos para preencher a ficha técnica da sua plataforma.",
  },
  {
    title: "Benefícios que vendem",
    text: "A IA converte especificações em vantagens que o comprador entende na hora.",
  },
  {
    title: "Copy para campanha",
    text: "Uma versão persuasiva do anúncio para usar em banners, e-mails e remarketing.",
  },
  {
    title: "SEO incluído",
    text: "Título SEO, meta description e palavras-chave para a página do produto ranquear melhor.",
  },
];

export const STORE_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "Página de produto só com uma foto e o preço, sem texto",
    right: "Título, descrição, benefícios, ficha técnica e SEO preenchidos",
  },
  {
    wrong: "Descrição copiada do fornecedor, igual à de todos os concorrentes",
    right: "Texto único, escrito para o seu público e a sua loja",
  },
  {
    wrong: "Meta description vazia ou cortada no meio de uma frase",
    right: "Meta description com até 158 caracteres e chamada para o clique",
  },
  {
    wrong: "Ficha técnica em branco ou pela metade",
    right: "Atributos completos para o produto aparecer nos filtros da loja",
  },
];

export interface StorePageExample {
  bad: string;
  good: string;
}

export const STORE_PAGE_EXAMPLE: StorePageExample = {
  bad: "Cafeteira Espresso 15 Bar. Produto importado. Aproveite!",
  good:
    "Título SEO: Cafeteira Espresso 15 Bar | Comprar Online\n\n" +
    "Descrição: Prepare um espresso de cafeteria sem sair de casa. A Cafeteira Espresso 15 Bar tem bomba italiana, vaporizador de leite e corpo em inox escovado — pronta para o seu café da manhã.\n\n" +
    "Benefícios:\n" +
    "• Pressão de 15 bar para um espresso encorpado\n" +
    "• Vaporizador para cappuccino e leite cremoso\n" +
    "• Reservatório de 1,5L, sem ficar reabastecendo\n\n" +
    "Ficha técnica: 110v · inox escovado · garantia de 12 meses\n\n" +
    "Palavras-chave: cafeteira espresso, cafeteira 15 bar, máquina de café",
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const STORE_FAQ: FaqItem[] = [
  {
    question: "Como criar o conteúdo de uma página de produto com inteligência artificial?",
    answer:
      "Preencha o nome do produto, a categoria, o preço e as características na ferramenta desta página e clique em “Gerar anúncio”. Em segundos a IA devolve título, descrição, benefícios, ficha técnica, anúncio e SEO prontos para a sua loja virtual.",
  },
  {
    question: "O que uma boa página de produto precisa ter?",
    answer:
      "Título otimizado, descrição completa, benefícios que traduzem as características, ficha técnica organizada, um anúncio persuasivo e SEO (título, meta description e palavras-chave). A ferramenta entrega esses seis blocos de uma vez.",
  },
  {
    question: "Qual a diferença entre este gerador e o de descrição de produto?",
    answer:
      "O gerador de descrição foca apenas no texto descritivo. Esta página gera o conteúdo completo da página do produto: título, descrição, benefícios, ficha técnica, copy e SEO — tudo o que uma loja virtual precisa para apresentar o item.",
  },
  {
    question: "O conteúdo gerado ajuda o SEO da minha loja?",
    answer:
      "Sim. O título sai otimizado para busca, a meta description respeita o limite de 158 caracteres e a lista de palavras-chave indica os termos para distribuir pelo texto, pela URL e pelas tags da página.",
  },
  {
    question: "O gerador para loja virtual é gratuito?",
    answer:
      "Sim. A geração é gratuita, não exige cadastro e não pede cartão de crédito. Você pode gerar, copiar e publicar quantas páginas de produto quiser durante o período de testes.",
  },
  {
    question: "Funciona com qualquer plataforma de e-commerce?",
    answer:
      "Sim. O conteúdo gerado é neutro e pode ser distribuído nos campos de Shopify, WooCommerce, Nuvemshop, VTEX ou qualquer outra plataforma que tenha campos de título, descrição, ficha técnica e SEO.",
  },
];

