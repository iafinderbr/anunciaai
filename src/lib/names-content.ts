import type { GeneratorInput } from "./types";

export const NAMES_EXAMPLE_INPUT: GeneratorInput = {
  productName: "Garrafa térmica para rotina e viagens",
  category: "Casa e bem-estar",
  price: "",
  audience: "Pessoas que trabalham fora, treinam e viajam",
  features: "Mantém a temperatura por horas, aço inox, resistente, moderna, fácil de levar e sem vazamentos",
  channel: "outro",
  tone: "premium",
};

export const NAMES_STEPS = [
  { title: "Descreva a ideia", text: "Conte o que é o produto, para quem ele foi criado e quais diferenciais precisa transmitir." },
  { title: "Escolha o estilo", text: "Defina se os nomes devem soar profissionais, persuasivos, simples ou premium." },
  { title: "Compare e valide", text: "Receba opções com explicações, escolha suas favoritas e confira marca e domínio antes de usar." },
];

export const NAMES_FEATURES = [
  { title: "Nomes curtos e memoráveis", text: "Sugestões fáceis de falar, escrever e reconhecer em uma embalagem ou vitrine." },
  { title: "Opções em estilos diferentes", text: "Compare nomes descritivos, modernos, compostos e mais autorais sem começar do zero." },
  { title: "Ideias ligadas ao produto", text: "Cada opção nasce da categoria, do público e dos diferenciais informados no formulário." },
  { title: "Explicação de cada escolha", text: "Entenda a ideia e a sensação transmitida por cada nome antes de decidir." },
  { title: "Variações para testar", text: "Gere novas rodadas mantendo o briefing até encontrar uma direção que combine com a marca." },
  { title: "Incluído no Grátis", text: "Entre com Google e use o gerador sem cartão de crédito." },
];

export const NAMES_DIFFERENCES = [
  { label: "Nome do produto", example: "Thermiva", purpose: "Cria identidade e pode acompanhar o produto por muito tempo." },
  { label: "Título do anúncio", example: "Garrafa Térmica Inox 1L Antivazamento", purpose: "Explica o item e ajuda o comprador a encontrá-lo na busca." },
];

export const NAMES_MISTAKES = [
  { wrong: "Nome comprido e difícil de pronunciar", right: "Curto, sonoro e fácil de repetir" },
  { wrong: "Copiar o nome de um concorrente", right: "Criar uma direção própria e pesquisar antes de usar" },
  { wrong: "Escolher só porque parece bonito", right: "Conectar o nome ao público e ao posicionamento" },
  { wrong: "Usar grafia confusa sem necessidade", right: "Preferir escrita simples e fácil de buscar" },
];

export const NAMES_EXAMPLES = [
  { category: "Garrafa térmica", names: ["Thermiva", "VittaFlow", "Norte Inox"] },
  { category: "Cosmético natural", names: ["Florena", "Raiz Pura", "Auré Botânica"] },
  { category: "Acessório pet", names: ["PataLeve", "NinoPet", "Laço Fiel"] },
  { category: "Organizador", names: ["Ordemê", "Casa Clara", "Encaixa"] },
];

export const NAMES_FAQ = [
  { question: "Qual é a diferença entre nome de produto e título de anúncio?", answer: "O nome identifica o produto ou a linha. O título descreve o item com palavras de busca, características e modelo para ajudar na venda." },
  { question: "Os nomes gerados estão disponíveis para registro?", answer: "A ferramenta cria ideias, mas não consulta automaticamente marcas, domínios ou redes sociais. Pesquise a disponibilidade antes de usar comercialmente." },
  { question: "Posso gerar nomes em português?", answer: "Sim. As sugestões misturam opções naturais em português, nomes compostos e palavras autorais fáceis de pronunciar." },
  { question: "Funciona para qualquer tipo de produto?", answer: "Sim. Quanto mais claro for o briefing sobre categoria, público e diferenciais, mais específicas ficam as sugestões." },
  { question: "Preciso pagar para usar?", answer: "Não. O gerador faz parte do plano Grátis. Basta entrar com Google e não pedimos cartão de crédito." },
];
