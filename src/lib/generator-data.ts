import type { Channel, Tone } from "./types";

export const CHANNELS: { value: Channel; label: string; hint: string }[] = [
  { value: "mercado-livre", label: "Mercado Livre", hint: "Título objetivo e fácil de identificar" },
  { value: "shopee", label: "Shopee", hint: "Título descritivo com termos do produto" },
  { value: "loja-virtual", label: "Loja virtual", hint: "Descrição detalhada e termos de SEO" },
  { value: "instagram", label: "Instagram", hint: "Legenda com CTA e sugestões de hashtags" },
  { value: "olx", label: "OLX", hint: "Título curto e claro, estilo classificado" },
  { value: "facebook-marketplace", label: "Facebook Marketplace", hint: "Título natural e descrição direta" },
  { value: "outro", label: "Outro", hint: "Formato neutro para revisar e adaptar" },
];

export const TONES: { value: Tone; label: string; hint: string }[] = [
  { value: "profissional", label: "Profissional", hint: "Direto, técnico e confiável" },
  { value: "persuasivo", label: "Persuasivo", hint: "Focado em benefícios e próximo passo" },
  { value: "simples", label: "Simples", hint: "Curto, claro e fácil de ler" },
  { value: "premium", label: "Premium", hint: "Linguagem mais sofisticada e cuidadosa" },
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

/** Aberturas neutras por tom, sem criar atributos que o vendedor não informou. */
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
 * Dicionário de característica → benefício conservador.
 * O texto apenas traduz a informação fornecida; não promete desempenho,
 * durabilidade, segurança, conforto ou resultado que não tenha sido informado.
 */
export const BENEFIT_RULES: { match: RegExp; benefit: string; specLabel?: string }[] = [
  { match: /leve|leveza/i, benefit: "Peso ou leveza destacados para facilitar a comparação", specLabel: "Peso" },
  { match: /confort|macio|acolchoad/i, benefit: "Conforto ou acabamento macio destacado nas informações do produto" },
  { match: /antiaderent/i, benefit: "Superfície antiaderente informada pelo vendedor" },
  { match: /antiderrapan/i, benefit: "Recurso antiderrapante informado; confira as condições de uso" },
  { match: /resisten|durá|dura[bv]|reforçad/i, benefit: "Resistência ou construção reforçada destacada nas especificações" },
  { match: /litros?\b|capacidade/i, benefit: "Capacidade informada para ajudar a comparar o tamanho útil", specLabel: "Capacidade" },
  { match: /impermeáv|à prova d|prova d'á|water/i, benefit: "Proteção contra água informada; confirme o nível de proteção e as condições de uso", specLabel: "Proteção" },
  { match: /bateria|mah|autonomia|horas de uso/i, benefit: "Bateria ou autonomia informada para ajudar na comparação", specLabel: "Bateria" },
  { match: /bluetooth|sem fio|wireless|wi-?fi|usb|type-?c/i, benefit: "Tipo de conectividade informado; confirme compatibilidade com seus dispositivos", specLabel: "Conectividade" },
  { match: /algodão|couro|silicone|inox|alumínio|madeira|poliést|tecido|material/i, benefit: "Material informado para ajudar a avaliar acabamento e uso", specLabel: "Material" },
  { match: /ajustáv|regul|elástic/i, benefit: "Ajuste ou regulagem informado como característica do produto", specLabel: "Ajuste" },
  { match: /laváv|máquina de lavar|fácil de limpar|limpeza/i, benefit: "Informação de lavagem ou limpeza destacada; siga as instruções do fabricante" },
  { match: /garantia/i, benefit: "Garantia informada pelo vendedor", specLabel: "Garantia" },
  { match: /cor(es)?\b|preto|branco|azul|vermelh|rosa|verde|bege/i, benefit: "Cor ou opções de cor informadas para facilitar a escolha", specLabel: "Cores disponíveis" },
  { match: /tamanho|numeraç|\d{2}\s?ao\s?\d{2}|\b(PP|GG|XG)\b/i, benefit: "Tamanhos informados para facilitar a escolha", specLabel: "Tamanhos" },
  { match: /\d+\s?(ml|mililitros)\b/i, benefit: "Volume informado com clareza", specLabel: "Volume" },
  { match: /\d+\s?(cm|mm|metros?|polegadas)\b/i, benefit: "Dimensões informadas para conferir compatibilidade com o espaço disponível", specLabel: "Dimensões" },
  { match: /\d+\s?(kg|gramas)\b/i, benefit: "Peso informado para ajudar no planejamento do uso", specLabel: "Peso" },
  { match: /110v|220v|bivolt|volts?|watts?|\d+\s?w\b/i, benefit: "Voltagem ou potência informada para conferir compatibilidade", specLabel: "Voltagem" },
  { match: /portát|dobráv|compact|cabe na bolsa/i, benefit: "Formato portátil ou compacto destacado nas informações do produto" },
  { match: /antialérg|hipoalerg|respiráv|ventilaç/i, benefit: "Característica de composição ou respirabilidade informada; confira materiais e orientações do fabricante" },
  { match: /rápid|velocidade|potente|potência/i, benefit: "Velocidade ou potência informada para comparar as especificações" },
  { match: /kit|conjunto|unidades|peças/i, benefit: "Itens do conjunto destacados pelo vendedor", specLabel: "Itens inclusos" },
  { match: /original|autêntic|licenciad/i, benefit: "Procedência destacada nas informações do produto" },
  { match: /nota fiscal/i, benefit: "Nota fiscal informada pelo vendedor" },
  { match: /marca|fabricante|modelo/i, benefit: "Marca ou modelo informado para facilitar a identificação", specLabel: "Modelo" },
  { match: /envio|frete|entrega/i, benefit: "Condição de envio informada pelo vendedor", specLabel: "Envio" },
  { match: /segur|proteç|trava/i, benefit: "Informação de segurança ou proteção destacada; confira instruções e limitações de uso" },
  { match: /moderno|design|elegan|estilo|minimalist/i, benefit: "Design ou estilo destacado nas informações do produto" },
];

/** Chamadas neutras para classificado, sem pressupor retirada, entrega ou desconto. */
export const OLX_CTAS = [
  "Se tiver interesse, use o chat da OLX para tirar dúvidas e combinar os próximos passos.",
  "Quer saber mais? Envie uma mensagem pelo chat da OLX.",
  "Use o chat para confirmar os detalhes da negociação com o vendedor.",
];

/** Chamadas pessoa a pessoa para Facebook Marketplace sem pressupor condições não informadas. */
export const MARKETPLACE_CTAS = [
  "Se tiver interesse, envie uma mensagem pelo Marketplace para conversar.",
  "Tem alguma dúvida? Envie uma mensagem para confirmar os detalhes.",
  "Gostou? Use o chat do Marketplace para saber mais.",
];

/**
 * Infere estado de conservação apenas quando uma característica inteira declara
 * explicitamente o estado (ou usa o formato "Estado: ..." / "Condição: ...").
 * Isso evita falsos positivos em marcas e frases como "Lenovo" ou "imperfeito".
 */
export const CONDITION_RULES: { match: RegExp; state: string }[] = [
  { match: /^(?:(?:estado|condi[cç][aã]o)\s*:\s*)?seminov[oa]$/i, state: "Seminovo" },
  { match: /^(?:(?:estado|condi[cç][aã]o)\s*:\s*)?(?:nov[oa]|novo na caixa|nunca usado|zero uso)$/i, state: "Novo" },
  { match: /^(?:(?:estado|condi[cç][aã]o)\s*:\s*)?(?:pouco uso|quase novo|como novo)$/i, state: "Pouco uso" },
  { match: /^(?:(?:estado|condi[cç][aã]o)\s*:\s*)?(?:impec[aá]vel|excelente estado|perfeito estado|estado de novo)$/i, state: "Em excelente estado" },
  { match: /^(?:(?:estado|condi[cç][aã]o)\s*:\s*)?bem conservad[oa]$/i, state: "Bem conservado" },
  { match: /^(?:(?:estado|condi[cç][aã]o)\s*:\s*)?(?:usad[oa]|segunda mão|segunda mao)(?:\s+em\s+.+)?$/i, state: "Usado" },
];
