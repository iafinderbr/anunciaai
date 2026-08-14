import type { GeneratorInput } from "./types";

/**
 * Conteúdo da landing page /gerador-de-anuncios-mercado-livre.
 * Fonte única para as seções de conteúdo (como funciona, recursos,
 * checklist de erros e FAQ). Os passos e o FAQ são renderizados apenas
 * como conteúdo normal da página (sem JSON-LD de HowTo/FAQPage).
 */

export const ML_EXAMPLE_INPUT: GeneratorInput = {
  productName: "Fone de ouvido bluetooth JBL Tune 510BT",
  category: "Eletrônicos, Áudio e Vídeo",
  price: "R$ 249,90",
  audience: "Jovens e profissionais que usam fone o dia todo",
  features:
    "Bluetooth 5.0, até 40 horas de bateria, dobrável, com microfone integrado, carregamento rápido USB-C, cores preto e azul, garantia de 12 meses",
  channel: "mercado-livre",
  tone: "persuasivo",
};

export const ML_STEPS: { title: string; text: string }[] = [
  {
    title: "Informe seu produto",
    text: "Cole o nome, a categoria, o preço e as características do produto. Pode ser em tópicos soltos, do jeito que veio do fornecedor.",
  },
  {
    title: "Deixe a IA criar",
    text: "Em segundos você recebe o título dentro dos 60 caracteres, a descrição, os benefícios, a ficha técnica e as palavras-chave.",
  },
  {
    title: "Copie e publique",
    text: "Copie cada bloco com um clique e cole direto no formulário de publicação do Mercado Livre. Sem retrabalho.",
  },
];

export const ML_FEATURES: { title: string; text: string }[] = [
  {
    title: "Título dentro dos 60 caracteres",
    text: "O Mercado Livre corta títulos acima de 60 caracteres. A ferramenta já gera dentro do limite e mostra o contador em tempo real, sem emojis e sem CAPS LOCK.",
  },
  {
    title: "Fórmula Produto + Marca + Modelo",
    text: "Seguimos a estrutura que o próprio Mercado Livre recomenda: produto, marca, modelo e as especificações que ajudam o comprador a identificar o item.",
  },
  {
    title: "Descrição sem risco de punição",
    text: "Texto limpo, sem telefone, e-mail, link externo ou promessa de frete — os itens que costumam derrubar anúncios na moderação.",
  },
  {
    title: "Ficha técnica organizada",
    text: "Suas anotações viram pares de atributo e valor (material, voltagem, tamanho, garantia) prontos para preencher a ficha técnica do anúncio.",
  },
  {
    title: "Palavras-chave de busca",
    text: "Lista de termos que compradores realmente digitam na busca do Mercado Livre, para você distribuir entre título, ficha e descrição.",
  },
  {
    title: "Variações de título para testar",
    text: "Receba mais de uma versão do título e troque quando o anúncio estagnar. Testar título é a forma mais barata de ganhar posição.",
  },
];

export const ML_MISTAKES: { wrong: string; right: string }[] = [
  {
    wrong: "PROMOÇÃO!!! FRETE GRÁTIS 🔥 MELHOR PREÇO",
    right: "Fone Bluetooth JBL Tune 510BT Dobrável 40h Bateria",
  },
  {
    wrong: "Título genérico: “Fone de ouvido bom e barato”",
    right: "Produto + marca + modelo + especificação que o comprador busca",
  },
  {
    wrong: "Descrição com WhatsApp, e-mail ou link para outro site",
    right: "Descrição focada em uso, medidas, conteúdo da caixa e garantia",
  },
  {
    wrong: "Ficha técnica em branco ou pela metade",
    right: "Atributos preenchidos para o produto aparecer nos filtros da busca",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const ML_FAQ: FaqItem[] = [
  {
    question: "Como criar um anúncio para o Mercado Livre com inteligência artificial?",
    answer:
      "Preencha o nome do produto, a categoria, o preço e as características na ferramenta desta página e clique em “Gerar anúncio”. Em poucos segundos a IA devolve título, descrição, benefícios, ficha técnica e palavras-chave prontos para colar no formulário de publicação do Mercado Livre.",
  },
  {
    question: "Qual o limite de caracteres do título no Mercado Livre?",
    answer:
      "O título de um anúncio no Mercado Livre tem no máximo 60 caracteres. O AnunciaAI já gera o título dentro desse limite e mostra um contador com aviso caso você edite o texto e ultrapasse o máximo permitido.",
  },
  {
    question: "Qual é a estrutura ideal de um título no Mercado Livre?",
    answer:
      "O próprio Mercado Livre recomenda a estrutura Produto + Marca + Modelo + especificações que ajudem a identificar o item. Evite palavras como “promoção”, “frete grátis”, emojis e letras maiúsculas em excesso: elas não ajudam na busca e podem prejudicar o anúncio.",
  },
  {
    question: "O gerador de anúncios é gratuito?",
    answer:
      "Sim. A geração de anúncios nesta página é gratuita, não exige cadastro e não pede cartão de crédito. Você pode gerar, copiar e publicar quantas vezes quiser durante o período de testes.",
  },
  {
    question: "Preciso revisar o texto gerado pela IA?",
    answer:
      "Recomendamos sempre uma leitura rápida. A IA monta a estrutura completa a partir das informações que você forneceu, mas apenas você conhece detalhes como estoque, prazo de envio e condições específicas do seu produto.",
  },
  {
    question: "A ferramenta serve para Shopee e loja virtual também?",
    answer:
      "Sim. Esta página é otimizada para o Mercado Livre, mas o AnunciaAI também gera anúncios para Shopee, loja virtual e Instagram, cada um com o formato e o limite de caracteres da plataforma.",
  },
];
