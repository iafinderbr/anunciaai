import type { GeneratorInput } from "./types";

/** Conteúdo da landing page /gerador-de-anuncios-facebook-marketplace. */
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
  { title: "Informe seu produto", text: "Cole nome, categoria, preço e características — incluindo condição quando você souber." },
  { title: "Gere uma primeira versão", text: "A ferramenta organiza título, descrição, características e a condição do item somente quando ela foi informada." },
  { title: "Revise e adapte", text: "Confira preço, condição, itens incluídos e demais detalhes antes de preencher o classificado do Marketplace." },
];

export const MARKETPLACE_STRUCTURE: { title: string; text: string }[] = [
  { title: "Título natural", text: "Identifique o produto e acrescente marca, modelo ou condição quando isso realmente ajuda a diferenciar o item." },
  { title: "Descrição direta", text: "Explique o que está sendo vendido, a condição, os detalhes importantes e tudo o que acompanha o item quando essas informações forem conhecidas." },
  { title: "Estado de conservação", text: "A condição deve aparecer somente quando foi informada e precisa permanecer coerente com fotos e descrição." },
  { title: "Detalhes que ajudam a avaliar", text: "Marca, medidas, acessórios, compatibilidade e defeitos relevantes ajudam a pessoa a entender o item antes do contato." },
  { title: "Preço correto", text: "Informe o valor real e não invente desconto, entrega, garantia ou condição de pagamento." },
];

export const MARKETPLACE_FEATURES: { title: string; text: string }[] = [
  { title: "Título curto e identificável", text: "O AnunciaAI usa um tamanho editorial conservador para facilitar a leitura. Isso não deve ser interpretado como limite oficial da Meta." },
  { title: "Descrição para classificado", text: "Texto direto com características, condição e informações fornecidas pelo vendedor." },
  { title: "Condição somente quando informada", text: "Novo, seminovo, pouco uso ou usado só são destacados quando essas informações aparecem nos dados fornecidos." },
  { title: "Benefícios conservadores", text: "A ferramenta explica características sem acrescentar desempenho, durabilidade ou condições que você não informou." },
  { title: "Primeira versão para revisar", text: "Receba um texto-base para ajustar antes de preencher os campos do Marketplace." },
  { title: "Tom ajustável", text: "Escolha entre profissional, persuasivo, simples ou premium sem alterar os fatos fornecidos." },
];

export const MARKETPLACE_MISTAKES: { wrong: string; right: string }[] = [
  { wrong: "Título genérico: “BICICLETA TOP!! 🔥”", right: "Bicicleta Aro 29 21 Marchas Quadro de Alumínio Seminova" },
  { wrong: "Descrição de uma frase: “Boa, interessados chamar”", right: "Condição, detalhes, itens incluídos e observações explicados com clareza" },
  { wrong: "Ocultar defeitos ou o estado real do produto", right: "Descrever sinais de uso e problemas relevantes e mostrar o item nas fotos" },
  { wrong: "Inventar desconto, entrega ou garantia", right: "Usar somente preço, condições e características que possam ser confirmadas" },
];

export interface MarketplaceExample {
  bad: string;
  good: string;
}

export const MARKETPLACE_EXAMPLE: MarketplaceExample = {
  bad: "Bicicleta aro 29. Muito boa. Interessados chamar.",
  good:
    "Estou vendendo uma bicicleta aro 29, informada como seminova, com poucos riscos e revisão recente.\n\n" +
    "• Quadro de alumínio\n" +
    "• Freios a disco\n" +
    "• Suspensão dianteira\n\n" +
    "Estado informado: seminova, com poucos riscos.\n" +
    "Valor informado: R$ 850.\n\n" +
    "Confira as fotos e use os recursos de contato do Marketplace para confirmar os detalhes.",
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const MARKETPLACE_FAQ: FaqItem[] = [
  { question: "Como usar o gerador para Facebook Marketplace?", answer: "Preencha nome, categoria, preço e características. A ferramenta monta uma primeira versão de título, descrição, benefícios e características para você revisar." },
  { question: "Existe um limite fixo de título informado pelo AnunciaAI?", answer: "Não. O AnunciaAI usa um tamanho editorial conservador para facilitar a leitura. Confira os campos e orientações atuais mostrados pelo Facebook Marketplace antes de publicar." },
  { question: "O que devo colocar na descrição?", answer: "Informe condição, características, marca, medidas, itens incluídos e defeitos relevantes quando essas informações existirem e puderem ser confirmadas." },
  { question: "Preciso informar o estado de conservação?", answer: "Quando você souber a condição, informe-a nas características. A ferramenta não deve adivinhar se o item é novo, seminovo ou usado." },
  { question: "O gerador para Facebook Marketplace é gratuito?", answer: "Sim. Ele faz parte do plano Grátis. Basta entrar com Google e não pedimos cartão de crédito." },
  { question: "A ferramenta serve para outros canais?", answer: "Sim. Existem geradores dedicados a OLX, Mercado Livre, Shopee, loja virtual e Instagram." },
];
