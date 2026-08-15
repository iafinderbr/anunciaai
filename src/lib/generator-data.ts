import type { Channel, Tone } from "./types";

export const CHANNELS: { value: Channel; label: string; hint: string }[] = [
  { value: "mercado-livre", label: "Mercado Livre", hint: "Título de até 60 caracteres, sem emojis" },
  { value: "shopee", label: "Shopee", hint: "Título com palavras-chave e emojis" },
  { value: "loja-virtual", label: "Loja virtual", hint: "Descrição longa e otimizada para SEO" },
  { value: "instagram", label: "Instagram", hint: "Legenda curta com hashtags" },
  { value: "olx", label: "OLX", hint: "Título curto e claro, estilo classificado" },
  { value: "facebook-marketplace", label: "Facebook Marketplace", hint: "Título natural e descrição direta, pessoa para pessoa" },
  { value: "outro", label: "Outro", hint: "Formato neutro, serve para qualquer canal" },
];

export const TONES: { value: Tone; label: string; hint: string }[] = [
  { value: "profissional", label: "Profissional", hint: "Direto, técnico e confiável" },
  { value: "persuasivo", label: "Persuasivo", hint: "Focado em conversão e gatilhos" },
  { value: "simples", label: "Simples", hint: "Curto, claro e fácil de ler" },
  { value: "premium", label: "Premium", hint: "Sofisticado, para ticket alto" },
];

export const CHANNEL_LABEL: Record<Channel, string> = {
  "mercado-livre": "Mercado Livre",
  shopee: "Shopee",
  "loja-virtual": "Loja virtual",
  instagram: "Instagram",
  olx: "OLX",
  "facebook-marketplace": "Facebook Marketplace",
  outro: "Outros canais",
};

export const TONE_LABEL: Record<Tone, string> = {
  profissional: "Profissional",
  persuasivo: "Persuasivo",
  simples: "Simples",
  premium: "Premium",
};

/** Adjetivos de abertura por tom, com variações para o botão "Gerar novamente". */
export const TONE_OPENERS: Record<Tone, string[]> = {
  profissional: [
    "Informações objetivas para ajudar na sua escolha",
    "Uma apresentação clara dos detalhes que realmente importam",
    "Características organizadas para facilitar a comparação",
  ],
  persuasivo: [
    "Conheça os diferenciais informados para este produto",
    "Veja os pontos que podem fazer diferença na sua escolha",
    "Confira as características e encontre a opção certa para você",
  ],
  simples: [
    "Informações diretas e fáceis de entender",
    "Os principais detalhes apresentados sem complicação",
    "Uma forma simples de conhecer melhor o produto",
  ],
  premium: [
    "Uma apresentação refinada das características informadas",
    "Detalhes organizados com uma linguagem mais sofisticada",
    "Uma proposta de comunicação cuidadosa e elegante",
  ],
};

export const TONE_CTA: Record<Tone, string[]> = {
  profissional: [
    "Confira todos os detalhes antes de finalizar a compra.",
    "Veja as opções disponíveis e escolha a mais adequada para você.",
    "Consulte as condições do vendedor e finalize quando estiver pronto.",
  ],
  persuasivo: [
    "Gostou das características? Veja os detalhes e escolha a sua opção.",
    "Compare as informações e decida se este produto combina com você.",
    "Confira as opções disponíveis e avance para a compra quando quiser.",
  ],
  simples: [
    "Confira os detalhes.",
    "Veja as opções disponíveis.",
    "Escolha a opção que combina com você.",
  ],
  premium: [
    "Conheça todos os detalhes antes de fazer sua escolha.",
    "Compare as características e escolha com tranquilidade.",
    "Veja as opções apresentadas pelo vendedor.",
  ],
};

export const TONE_MODIFIERS: Record<Tone, string[]> = {
  profissional: ["com características objetivas", "com proposta bem definida", "apresentado de forma clara"],
  persuasivo: ["com diferenciais fáceis de entender", "com detalhes que ajudam na escolha", "apresentado para facilitar a comparação"],
  simples: ["com informações diretas", "apresentado sem complicação", "com os principais detalhes"],
  premium: ["apresentado com linguagem sofisticada", "com uma comunicação mais refinada", "descrito com atenção aos detalhes"],
};

/**
 * Dicionário de palavra-chave → benefício.
 * É o que faz o texto gerado parecer realmente escrito para o produto.
 */
export const BENEFIT_RULES: { match: RegExp; benefit: string; specLabel?: string }[] = [
  { match: /leve|leveza/i, benefit: "Leve de verdade: você usa o dia inteiro sem sentir peso", specLabel: "Peso" },
  { match: /confort|macio|acolchoad/i, benefit: "Conforto desde o primeiro uso, sem período de adaptação" },
  { match: /antiaderent/i, benefit: "Superfície antiaderente: nada gruda e a limpeza fica muito mais rápida" },
  { match: /antiderrapan/i, benefit: "Base antiderrapante que garante firmeza e segurança no uso" },
  { match: /resisten|durá|dura[bv]|reforçad/i, benefit: "Alta resistência: acompanha a sua rotina por muito mais tempo" },
  { match: /litros?\b|capacidade/i, benefit: "Capacidade generosa para dar conta do uso diário sem apertos", specLabel: "Capacidade" },
  { match: /impermeáv|à prova d|prova d'á|water/i, benefit: "Proteção contra água e respingos para usar sem preocupação", specLabel: "Proteção" },
  { match: /bateria|mah|autonomia|horas de uso/i, benefit: "Bateria de longa duração para você não ficar na mão", specLabel: "Bateria" },
  { match: /bluetooth|sem fio|wireless|wi-?fi|usb|type-?c/i, benefit: "Conexão rápida e estável, sem fios atrapalhando", specLabel: "Conectividade" },
  { match: /algodão|couro|silicone|inox|alumínio|madeira|poliést|tecido|material/i, benefit: "Material selecionado, com toque agradável e acabamento caprichado", specLabel: "Material" },
  { match: /ajustáv|regul|elástic/i, benefit: "Ajuste personalizado para encaixar perfeitamente em você", specLabel: "Ajuste" },
  { match: /laváv|máquina de lavar|fácil de limpar|limpeza/i, benefit: "Limpeza simples: cuidar dele leva menos de um minuto" },
  { match: /garantia/i, benefit: "Garantia informada pelo vendedor", specLabel: "Garantia" },
  { match: /cor(es)?\b|preto|branco|azul|vermelh|rosa|verde|bege/i, benefit: "Opções de cor para combinar com o seu estilo", specLabel: "Cores disponíveis" },
  { match: /tamanho|numeraç|\d{2}\s?ao\s?\d{2}|\b(PP|GG|XG)\b/i, benefit: "Tamanhos informados para facilitar a escolha", specLabel: "Tamanhos" },
  { match: /\d+\s?(ml|mililitros)\b/i, benefit: "Volume informado com clareza", specLabel: "Volume" },
  { match: /\d+\s?(cm|mm|metros?|polegadas)\b/i, benefit: "Dimensões pensadas para caber direitinho no seu espaço", specLabel: "Dimensões" },
  { match: /\d+\s?(kg|gramas)\b/i, benefit: "Peso informado para ajudar no planejamento do uso", specLabel: "Peso" },
  { match: /110v|220v|bivolt|volts?|watts?|\d+\s?w\b/i, benefit: "Voltagem informada para conferir a compatibilidade", specLabel: "Voltagem" },
  { match: /portát|dobráv|compact|cabe na bolsa/i, benefit: "Formato compacto que vai com você para qualquer lugar" },
  { match: /antialérg|hipoalerg|respiráv|ventilaç/i, benefit: "Respirabilidade que evita abafamento e irritações" },
  { match: /rápid|velocidade|potente|potência/i, benefit: "Desempenho rápido: faz mais em menos tempo" },
  { match: /kit|conjunto|unidades|peças/i, benefit: "Itens do conjunto destacados pelo vendedor", specLabel: "Itens inclusos" },
  { match: /original|autêntic|licenciad/i, benefit: "Procedência destacada nas informações do produto" },
  { match: /nota fiscal/i, benefit: "Nota fiscal informada pelo vendedor" },
  { match: /marca|fabricante|modelo/i, benefit: "Marca ou modelo informado para facilitar a identificação", specLabel: "Modelo" },
  { match: /envio|frete|entrega/i, benefit: "Condição de envio informada pelo vendedor", specLabel: "Envio" },
  { match: /segur|proteç|trava/i, benefit: "Mais segurança no uso diário, para você e para a família" },
  { match: /moderno|design|elegan|estilo|minimalist/i, benefit: "Design moderno que valoriza qualquer ambiente ou look" },
];

/**
 * Chamadas para ação no estilo classificado, usadas apenas no canal OLX.
 * Sem "link na bio" e sem pressão de e-commerce: o fechamento é negociação
 * e retirada/entrega.
 */
export const OLX_CTAS = [
  "Interessado? Chame no chat da OLX e combine retirada ou entrega.",
  "Quer ver de perto? Chama no chat e combina um horário.",
  "Chame no chat para negociar e combinar os próximos passos.",
];

/**
 * Chamadas para ação pessoa a pessoa, usadas apenas no canal Facebook
 * Marketplace. Sem "link na bio", sem hashtags e sem pressão de e-commerce:
 * o fechamento é conversa pelo Messenger.
 */
export const MARKETPLACE_CTAS = [
  "Se interessar, chame no Messenger para conversar.",
  "Tem alguma dúvida? Mande mensagem aqui pelo Marketplace.",
  "Gostou? Chama no chat para mais detalhes.",
];

/**
 * Infere o estado de conservação a partir das características informadas.
 * A ordem importa: a primeira regra que casar vence. Usado nos canais de
 * classificado (OLX e Facebook Marketplace), que não têm campo próprio
 * para estado/conservação.
 */
export const CONDITION_RULES: { match: RegExp; state: string }[] = [
  { match: /seminov|semi-nov/i, state: "Seminovo" },
  { match: /lacrado|novo na caixa|na caixa|nunca usado|zero uso/i, state: "Novo" },
  { match: /pouco uso|quase novo|como novo|impec|excelente estado|perfeito estado|estado de novo|conservad|revisad/i, state: "Pouco uso, em ótimo estado" },
  { match: /usado|segunda mão|segunda mao/i, state: "Usado, em bom estado" },
  { match: /nov[oa]\b/i, state: "Novo" },
];
