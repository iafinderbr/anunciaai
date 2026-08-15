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
    text: "Copie cada bloco com um clique, revise as informações e cole no anúncio da OLX junto com as fotos do produto.",
  },
];

export const OLX_STRUCTURE: { title: string; text: string }[] = [
  {
    title: "Título claro e direto",
    text: "Comece pelo que é o produto e use o restante para estado, marca, modelo ou outro diferencial útil.",
  },
  {
    title: "Descrição honesta",
    text: "O comprador precisa entender exatamente o que está levando. Informe características, estado e observações relevantes.",
  },
  {
    title: "Estado de conservação",
    text: "Novo, pouco uso ou usado: deixar a condição clara ajuda o interessado a avaliar o item antes do contato.",
  },
  {
    title: "Detalhes que ajudam a decidir",
    text: "Medidas, acessórios incluídos e defeitos relevantes reduzem dúvidas e deixam o anúncio mais completo.",
  },
  {
    title: "Preço e localização corretos",
    text: "Informe o valor total do item e a região correta para alinhar as expectativas antes da negociação.",
  },
];

export const OLX_FEATURES: { title: string; text: string }[] = [
  {
    title: "Título de até 90 caracteres",
    text: "A OLX informa limite de 90 caracteres. Priorize o nome do produto nas primeiras palavras e use o restante para detalhes relevantes.",
  },
  {
    title: "Descrição estilo classificado",
    text: "Texto direto, com características, estado de conservação e informações úteis para quem está avaliando o item.",
  },
  {
    title: "Estado de conservação detectado",
    text: "A IA identifica sinais de novo, seminovo ou usado nas características que você fornece e pode destacar essa informação no anúncio.",
  },
  {
    title: "Ficha de características",
    text: "Suas anotações viram uma lista organizada de medidas, material e itens inclusos para você conferir.",
  },
  {
    title: "CTA de classificado",
    text: "Fechamento adaptado a uma negociação entre comprador e vendedor, sem inventar condições comerciais.",
  },
  {
    title: "Tom de texto ajustável",
    text: "Escolha entre profissional, persuasivo, simples ou premium e mantenha a sua forma de vender.",
  },
];

export const OLX_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "Título genérico: “SOFÁ TOP!! NÃO PERCA”",
    right: "Sofá Retrátil 3 Lugares — Pouco Uso · Tecido Suede Bege",
  },
  {
    wrong: "Descrição sem estado de conservação e sem medidas",
    right: "Estado, material, dimensões e observações importantes explicados com clareza",
  },
  {
    wrong: "Esconder defeitos para valorizar o anúncio",
    right: "Mostrar marcas de uso e defeitos relevantes para o comprador saber o que está avaliando",
  },
  {
    wrong: "Preencher informações por aproximação",
    right: "Usar somente preço, medidas, características e condições que possam ser confirmadas",
  },
];

export interface OlxAnnouncementExample {
  bad: string;
  good: string;
}

export const OLX_ANNOUNCEMENT_EXAMPLE: OlxAnnouncementExample = {
  bad: "Sofá retrátil. Ótimo estado. Só pegar. Interessados chamar.",
  good:
    "Vendo sofá retrátil de 3 lugares, pouco uso, sem rasgos e em bom estado. Estou me mudando de cidade.\n\n" +
    "• Tecido suede bege\n" +
    "• Estrutura de madeira reforçada\n" +
    "• Retrátil\n\n" +
    "Estado de conservação: pouco uso, sem rasgos.\n" +
    "Valor: R$ 1.200.\n\n" +
    "Interessado? Use o chat da OLX para tirar dúvidas e combinar os detalhes.",
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const OLX_FAQ: FaqItem[] = [
  {
    question: "Como criar um anúncio para a OLX com inteligência artificial?",
    answer:
      "Preencha o nome do produto, a categoria, o preço e as características na ferramenta desta página e clique em “Gerar anúncio”. A IA devolve título, descrição, benefícios e características para você revisar antes de publicar.",
  },
  {
    question: "Preciso informar o estado de conservação do produto?",
    answer:
      "É recomendável informar. Se você mencionar termos como “seminovo”, “pouco uso” ou “usado” nas características, a ferramenta consegue destacar essa condição no texto sem precisar adivinhar.",
  },
  {
    question: "Qual o limite do título de um anúncio na OLX?",
    answer:
      "A Central de Ajuda da OLX informa limite de 90 caracteres. A própria plataforma recomenda começar pelas palavras mais importantes, porque elas têm prioridade nas buscas. Use um título direto e relacionado ao item.",
  },
  {
    question: "O que devo colocar na descrição de um anúncio OLX?",
    answer:
      "Inclua estado de conservação, características, medidas, itens incluídos e defeitos relevantes. A OLX informa limite de até 6.000 caracteres e orienta evitar links, e-mails e palavras de busca sem relação com o produto.",
  },
  {
    question: "O gerador de anúncios para OLX é gratuito?",
    answer:
      "Sim. A geração é gratuita, não exige cadastro e não pede cartão de crédito durante o período de testes.",
  },
  {
    question: "A ferramenta serve para outros marketplaces também?",
    answer:
      "Sim. Esta página é otimizada para a OLX, mas o AnunciaAI também gera anúncios para Mercado Livre, Shopee, loja virtual e outros canais, adaptando a estrutura ao canal escolhido.",
  },
];

