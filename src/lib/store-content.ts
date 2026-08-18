import type { GeneratorInput } from "./types";

/** Conteúdo da landing page /gerador-de-anuncios-para-loja-virtual. */
export const STORE_EXAMPLE_INPUT: GeneratorInput = {
  productName: "Cafeteira Espresso 15 Bar",
  category: "Eletrodomésticos para cozinha",
  price: "R$ 649,90",
  audience: "Quem quer preparar café em casa",
  features:
    "Bomba italiana de 15 bar, reservatório de 1,5L, vaporizador de leite, bandeja removível, corpo em inox escovado, 110v, garantia de 12 meses",
  channel: "loja-virtual",
  tone: "profissional",
};

export const STORE_STEPS: { title: string; text: string }[] = [
  { title: "Informe seu produto", text: "Cole nome, categoria, preço, público e características que você consegue confirmar." },
  { title: "Gere uma primeira versão", text: "A ferramenta organiza título, descrição, benefícios, ficha de características, anúncio e sugestões de SEO." },
  { title: "Revise e distribua", text: "Confira os dados e adapte cada bloco aos campos da sua plataforma de e-commerce antes de usar." },
];

export const STORE_PAGE_BLOCKS: { title: string; text: string }[] = [
  { title: "Título do produto", text: "Nome do produto com características relevantes e verificáveis, em um formato legível para a página." },
  { title: "Descrição completa", text: "Abertura, características, benefícios conservadores e público informado em blocos fáceis de revisar." },
  { title: "Benefícios", text: "Explicações baseadas nas características fornecidas, sem inventar resultado ou desempenho." },
  { title: "Ficha de características", text: "Material, medidas, voltagem, garantia e outros dados quando foram informados." },
  { title: "Versão de anúncio", text: "Uma alternativa de copy para você adaptar ao contexto real de campanha, e-mail ou vitrine." },
  { title: "Sugestões de SEO", text: "Título SEO, meta description e termos derivados do produto como ponto de partida; sem promessa de posição no Google." },
];

export const STORE_SEO_BREAKDOWN: { label: string; value: string }[] = [
  { label: "Título SEO", value: "Cafeteira Espresso 15 Bar | Informações do Produto" },
  { label: "Meta description", value: "Cafeteira espresso 15 bar com vaporizador de leite e corpo em inox." },
  { label: "Termos sugeridos", value: "cafeteira espresso, cafeteira 15 bar, máquina de café" },
];

export const STORE_FEATURES: { title: string; text: string }[] = [
  { title: "Título SEO para revisar", text: "A ferramenta monta um título usando os dados do produto. Comprimento e palavras devem ser avaliados conforme a sua página e estratégia." },
  { title: "Descrição estruturada", text: "Blocos separados por assunto ajudam a conferir características, benefícios e informações técnicas." },
  { title: "Ficha técnica organizada", text: "Suas anotações viram atributos para facilitar o preenchimento da plataforma." },
  { title: "Benefícios conservadores", text: "Especificações são explicadas sem criar promessas que não possam ser sustentadas pelos dados informados." },
  { title: "Copy para adaptar", text: "Uma versão adicional do anúncio pode servir como ponto de partida para outros formatos depois da revisão." },
  { title: "Sugestões de SEO", text: "Título, meta description e termos relacionados são sugestões; a ferramenta não mede ranking, volume ou concorrência." },
];

export const STORE_MISTAKES: { wrong: string; right: string }[] = [
  { wrong: "Página de produto só com uma foto e o preço, sem informações", right: "Título, descrição, benefícios e ficha técnica coerentes com o produto" },
  { wrong: "Descrição copiada de outra versão do item", right: "Texto fiel às características e condições da versão realmente vendida" },
  { wrong: "Meta description cortada ou cheia de promessas", right: "Resumo claro que identifica o produto sem exageros" },
  { wrong: "Ficha técnica com dados aproximados", right: "Atributos conferidos antes da publicação" },
];

export interface StorePageExample {
  bad: string;
  good: string;
}

export const STORE_PAGE_EXAMPLE: StorePageExample = {
  bad: "Cafeteira Espresso 15 Bar. Produto importado. Aproveite!",
  good:
    "Título: Cafeteira Espresso 15 Bar com Vaporizador\n\n" +
    "Descrição: Cafeteira espresso com bomba de 15 bar, reservatório de 1,5L, vaporizador de leite e corpo em inox escovado.\n\n" +
    "Características:\n" +
    "• Pressão informada: 15 bar\n" +
    "• Reservatório: 1,5L\n" +
    "• Vaporizador de leite\n" +
    "• Voltagem: 110v\n" +
    "• Garantia informada: 12 meses\n\n" +
    "Termos sugeridos: cafeteira espresso, cafeteira 15 bar, máquina de café",
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const STORE_FAQ: FaqItem[] = [
  { question: "Como usar o gerador para loja virtual?", answer: "Preencha nome, categoria, preço, público e características. A ferramenta organiza uma primeira versão de título, descrição, benefícios, ficha técnica, anúncio e sugestões de SEO para você revisar." },
  { question: "O que uma página de produto pode ter?", answer: "Título claro, imagens, descrição, benefícios sustentados pelas características, ficha técnica, preço, disponibilidade e demais informações relevantes para a compra." },
  { question: "Qual a diferença entre este gerador e o de descrição?", answer: "O gerador de descrição foca no texto descritivo. Esta página também organiza título, benefícios, ficha de características, versão de anúncio e sugestões de SEO." },
  { question: "O conteúdo garante resultado de SEO?", answer: "Não. A ferramenta cria sugestões de título, meta description e termos relacionados, mas não consulta volume, concorrência nem posição e não pode garantir resultado de busca." },
  { question: "O gerador para loja virtual é gratuito?", answer: "Sim. Ele faz parte do plano Grátis. Basta entrar com Google e não pedimos cartão de crédito." },
  { question: "Funciona com qualquer plataforma de e-commerce?", answer: "O conteúdo é texto neutro e pode ser adaptado a plataformas que ofereçam campos equivalentes. Confira sempre requisitos e limitações da plataforma escolhida." },
];
