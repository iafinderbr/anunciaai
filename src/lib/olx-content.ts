import type { GeneratorInput } from "./types";

/** Conteúdo da landing page /gerador-de-anuncios-olx. */
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
  { title: "Informe seu produto", text: "Cole nome, categoria, preço e características — incluindo estado de conservação quando você souber." },
  { title: "Gere uma primeira versão", text: "A ferramenta organiza título, descrição, características e a condição do item somente quando ela aparece nos dados fornecidos." },
  { title: "Revise e adapte", text: "Confira preço, condição, medidas, retirada ou entrega e demais detalhes antes de usar o texto na OLX." },
];

export const OLX_STRUCTURE: { title: string; text: string }[] = [
  { title: "Título claro e direto", text: "Comece pelo produto e acrescente estado, marca, modelo ou outro diferencial útil quando a informação estiver confirmada." },
  { title: "Descrição honesta", text: "Explique o que está sendo vendido, as características e observações relevantes sem esconder defeitos conhecidos." },
  { title: "Estado de conservação", text: "Novo, pouco uso ou usado só deve aparecer quando essa condição foi realmente informada pelo vendedor." },
  { title: "Detalhes que ajudam a avaliar", text: "Medidas, acessórios incluídos, marcas de uso e outras informações objetivas reduzem dúvidas antes do contato." },
  { title: "Preço e negociação", text: "Informe o valor real e deixe entrega, retirada e outras condições apenas quando elas estiverem definidas." },
];

export const OLX_FEATURES: { title: string; text: string }[] = [
  { title: "Título para revisar", text: "A ferramenta usa um preview curto e legível. Confira o contador e as regras atuais mostradas pela OLX no momento da publicação." },
  { title: "Descrição estilo classificado", text: "Texto direto com características, condição e informações fornecidas pelo vendedor." },
  { title: "Condição somente quando informada", text: "Termos como novo, seminovo, pouco uso ou usado são destacados apenas se estiverem presentes nas características." },
  { title: "Ficha de características", text: "Suas anotações são organizadas em uma lista para facilitar a conferência de material, medidas e itens incluídos." },
  { title: "CTA neutro", text: "O fechamento convida o interessado a usar o chat sem inventar entrega, desconto ou condição de pagamento." },
  { title: "Tom ajustável", text: "Escolha entre profissional, persuasivo, simples ou premium sem alterar os fatos informados." },
];

export const OLX_MISTAKES: { wrong: string; right: string }[] = [
  { wrong: "Título genérico: “SOFÁ TOP!! NÃO PERCA”", right: "Sofá Retrátil 3 Lugares — Pouco Uso · Tecido Suede Bege" },
  { wrong: "Descrição sem condição ou medidas disponíveis", right: "Estado, material, dimensões e observações importantes explicados com clareza" },
  { wrong: "Esconder defeitos para valorizar o anúncio", right: "Mostrar marcas de uso e defeitos relevantes para a pessoa saber o que está avaliando" },
  { wrong: "Preencher informações por aproximação", right: "Usar somente preço, medidas, características e condições que possam ser confirmadas" },
];

export interface OlxAnnouncementExample {
  bad: string;
  good: string;
}

export const OLX_ANNOUNCEMENT_EXAMPLE: OlxAnnouncementExample = {
  bad: "Sofá retrátil. Ótimo estado. Só pegar. Interessados chamar.",
  good:
    "Vendo sofá retrátil de 3 lugares, com pouco uso e sem rasgos.\n\n" +
    "• Tecido suede bege\n" +
    "• Estrutura de madeira reforçada\n" +
    "• Retrátil\n\n" +
    "Estado informado: pouco uso, sem rasgos.\n" +
    "Valor informado: R$ 1.200.\n\n" +
    "Use o chat da OLX para tirar dúvidas e confirmar os detalhes da negociação.",
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const OLX_FAQ: FaqItem[] = [
  { question: "Como usar o gerador de anúncios para OLX?", answer: "Preencha nome, categoria, preço e características e clique em “Gerar anúncio”. A ferramenta monta uma primeira versão para você revisar antes de usar." },
  { question: "Preciso informar o estado de conservação?", answer: "É recomendável. A ferramenta só destaca a condição quando encontra termos como novo, seminovo, pouco uso ou usado nos dados fornecidos." },
  { question: "Como conferir o tamanho permitido do título?", answer: "Use o contador e as orientações exibidas pela OLX no momento da publicação. Regras de plataforma podem mudar, então o preview do AnunciaAI é apenas uma referência editorial." },
  { question: "O que colocar na descrição?", answer: "Inclua estado de conservação, características, medidas, itens incluídos e defeitos relevantes quando essas informações existirem." },
  { question: "O gerador para OLX é gratuito?", answer: "Sim. Ele faz parte do plano Grátis. Basta entrar com Google e não pedimos cartão de crédito." },
  { question: "A ferramenta serve para outros canais?", answer: "Sim. Existem geradores dedicados a Mercado Livre, Shopee, Facebook Marketplace, loja virtual e Instagram, cada um com uma estrutura diferente para revisar." },
];
