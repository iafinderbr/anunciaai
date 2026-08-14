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
    "Desenvolvido para entregar desempenho consistente no dia a dia",
    "Projetado com atenção aos detalhes que realmente importam",
    "Uma escolha segura para quem busca qualidade comprovada",
  ],
  persuasivo: [
    "Você procurava algo que resolvesse de vez esse problema",
    "Chega de perder tempo com opções que não entregam o que prometem",
    "Se você quer resultado de verdade, esse é o produto certo",
  ],
  simples: [
    "Prático, direto e feito para o uso do dia a dia",
    "Fácil de usar e pronto para o que você precisa",
    "Tudo o que você precisa, sem complicação",
  ],
  premium: [
    "Um produto pensado para quem não abre mão de acabamento e sofisticação",
    "Design refinado e materiais selecionados em cada detalhe",
    "Exclusividade e cuidado artesanal em um só produto",
  ],
};

export const TONE_CTA: Record<Tone, string[]> = {
  profissional: [
    "Adicione ao carrinho e receba com segurança.",
    "Finalize a compra e conte com nosso suporte pós-venda.",
    "Garanta o seu com envio rápido e nota fiscal.",
  ],
  persuasivo: [
    "Clique em COMPRAR agora e garanta o seu antes que acabe!",
    "Últimas unidades disponíveis — peça já o seu!",
    "Aproveite: adicione ao carrinho e receba em casa rapidinho!",
  ],
  simples: [
    "Peça o seu agora.",
    "Compre agora e receba em casa.",
    "É só clicar em comprar.",
  ],
  premium: [
    "Reserve o seu exemplar e viva essa experiência.",
    "Garanta o seu e sinta a diferença de um produto superior.",
    "Adicione ao carrinho e eleve o seu padrão.",
  ],
};

export const TONE_MODIFIERS: Record<Tone, string[]> = {
  profissional: ["de alta qualidade", "com excelente custo-benefício", "de performance confiável"],
  persuasivo: ["que você vai amar", "com tudo o que você precisa", "que faz a diferença"],
  simples: ["prático", "fácil de usar", "do dia a dia"],
  premium: ["exclusivo", "de acabamento superior", "de linha premium"],
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
  { match: /garantia/i, benefit: "Compra protegida por garantia — risco zero para você", specLabel: "Garantia" },
  { match: /cor(es)?\b|preto|branco|azul|vermelh|rosa|verde|bege/i, benefit: "Opções de cor para combinar com o seu estilo", specLabel: "Cores disponíveis" },
  { match: /tamanho|numeraç|\d{2}\s?ao\s?\d{2}|\b(PP|GG|XG)\b/i, benefit: "Grade de tamanhos completa para encontrar o seu", specLabel: "Tamanhos" },
  { match: /\d+\s?(ml|mililitros)\b/i, benefit: "Rende bastante: o conteúdo dura semanas de uso", specLabel: "Volume" },
  { match: /\d+\s?(cm|mm|metros?|polegadas)\b/i, benefit: "Dimensões pensadas para caber direitinho no seu espaço", specLabel: "Dimensões" },
  { match: /\d+\s?(kg|gramas)\b/i, benefit: "Peso equilibrado, fácil de transportar e guardar", specLabel: "Peso" },
  { match: /110v|220v|bivolt|volts?|watts?|\d+\s?w\b/i, benefit: "Compatível com a sua tomada, sem precisar de adaptador", specLabel: "Voltagem" },
  { match: /portát|dobráv|compact|cabe na bolsa/i, benefit: "Formato compacto que vai com você para qualquer lugar" },
  { match: /antialérg|hipoalerg|respiráv|ventilaç/i, benefit: "Respirabilidade que evita abafamento e irritações" },
  { match: /rápid|velocidade|potente|potência/i, benefit: "Desempenho rápido: faz mais em menos tempo" },
  { match: /kit|conjunto|unidades|peças/i, benefit: "Kit completo: você já recebe tudo pronto para usar", specLabel: "Itens inclusos" },
  { match: /original|autêntic|licenciad|nota fiscal/i, benefit: "Produto original com nota fiscal e procedência garantida" },
  { match: /marca|fabricante|modelo/i, benefit: "Modelo reconhecido por quem entende do assunto", specLabel: "Modelo" },
  { match: /envio|frete|entrega/i, benefit: "Envio rápido e embalagem reforçada para chegar perfeito", specLabel: "Envio" },
  { match: /segur|proteç|trava/i, benefit: "Mais segurança no uso diário, para você e para a família" },
  { match: /moderno|design|elegan|estilo|minimalist/i, benefit: "Design moderno que valoriza qualquer ambiente ou look" },
];

export const GENERIC_BENEFITS: Record<Tone, string[]> = {
  profissional: [
    "Qualidade verificada item a item antes do envio",
    "Excelente custo-benefício comparado a modelos similares",
    "Acabamento uniforme e materiais testados",
    "Fácil de usar, sem curva de aprendizado",
    "Suporte pós-venda com atendimento humano",
  ],
  persuasivo: [
    "Resolve na prática o problema que te incomoda todo dia",
    "Aprovado por quem já comprou e voltou para comprar de novo",
    "Você economiza tempo e dinheiro em uma única compra",
    "Chega rápido e já vem pronto para usar",
    "Se não gostar, você tem prazo para trocar sem dor de cabeça",
  ],
  simples: [
    "Simples de usar no dia a dia",
    "Chega pronto para uso, sem montagem complicada",
    "Fácil de guardar e transportar",
    "Boa durabilidade para o preço",
    "Ideal para uso diário",
  ],
  premium: [
    "Acabamento premium em cada detalhe",
    "Materiais selecionados que envelhecem bem",
    "Peça atemporal, longe do descartável",
    "Experiência de uso superior desde a embalagem",
    "Curadoria exclusiva, poucas unidades por lote",
  ],
};

export const OBJECTIONS: Record<Tone, string[]> = {
  profissional: ["Nota fiscal em todas as compras", "Garantia contra defeitos de fabricação", "Envio com código de rastreio"],
  persuasivo: ["Compra 100% segura", "Troca facilitada em até 7 dias", "Estoque limitado"],
  simples: ["Envio rápido", "Compra segura", "Suporte por mensagem"],
  premium: ["Embalagem premium para presente", "Atendimento consultivo", "Garantia estendida disponível"],
};

/**
 * Chamadas para ação no estilo classificado, usadas apenas no canal OLX.
 * Sem "link na bio" e sem pressão de e-commerce: o fechamento é negociação
 * e retirada/entrega.
 */
export const OLX_CTAS = [
  "Interessado? Chame no chat da OLX e combine retirada ou entrega.",
  "Quer ver de perto? Chama no chat e combina um horário.",
  "Valor à vista tem desconto. Chame no chat para negociar.",
];

/**
 * Chamadas para ação pessoa a pessoa, usadas apenas no canal Facebook
 * Marketplace. Sem "link na bio", sem hashtags e sem pressão de e-commerce:
 * o fechamento é conversa pelo Messenger.
 */
export const MARKETPLACE_CTAS = [
  "Se interessar, chame no Messenger — respondo rápido.",
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
