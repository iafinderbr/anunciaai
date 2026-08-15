import {
  BENEFIT_RULES,
  CHANNEL_LABEL,
  CONDITION_RULES,
  MARKETPLACE_CTAS,
  OLX_CTAS,
  TONE_CTA,
  TONE_LABEL,
  TONE_MODIFIERS,
  TONE_OPENERS,
} from "./generator-data";
import type { Channel, GeneratedAd, GeneratorInput, SpecItem, Tone } from "./types";

/* -------------------------------------------------------------------------- */
/*  Utilitários                                                               */
/* -------------------------------------------------------------------------- */

const SMALL_WORDS = new Set(["de", "da", "do", "das", "dos", "e", "com", "para", "em", "a", "o", "no", "na", "sem"]);

function clean(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function upperFirst(value: string): string {
  const text = clean(value);
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function lowerFirst(value: string): string {
  const text = clean(value);
  if (!text) return "";
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function titleCase(value: string): string {
  return clean(value)
    .split(" ")
    .map((word, index) => {
      // Mantém medidas e siglas como o lojista escreveu (4L, 500ml, USB, LED, FPS 50).
      if (/\d/.test(word)) return word;
      if (word.length <= 5 && word === word.toLocaleUpperCase("pt-BR")) return word;

      const lower = word.toLocaleLowerCase("pt-BR");
      if (index > 0 && SMALL_WORDS.has(lower)) return lower;
      return lower.charAt(0).toLocaleUpperCase("pt-BR") + lower.slice(1);
    })
    .join(" ");
}

function pick<T>(items: T[], variant: number, offset = 0): T {
  return items[Math.abs(variant + offset) % items.length];
}

function unique(values: string[]): string[] {
  const seen = new Set<string>();
  const output: string[] = [];
  for (const value of values) {
    const key = value.toLocaleLowerCase("pt-BR");
    if (!key || seen.has(key)) continue;
    seen.add(key);
    output.push(value);
  }
  return output;
}

function truncate(value: string, max: number): string {
  const text = clean(value);
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,–—-]+$/, "");
}

/* -------------------------------------------------------------------------- */
/*  Parsers                                                                   */
/* -------------------------------------------------------------------------- */

export function parseFeatures(raw: string): string[] {
  return unique(
    raw
      .split(/[\n;•|]+|,(?=\s)|,$/)
      .map((item) => item.replace(/^[\s\-*+✔✓·]+/, "").replace(/[.\s]+$/, ""))
      .map(clean)
      .filter((item) => item.length > 1),
  ).slice(0, 12);
}

export interface PriceInfo {
  formatted: string;
  value: number | null;
  installments: string | null;
}

export function parsePrice(raw: string): PriceInfo {
  const text = clean(raw);
  if (!text) return { formatted: "", value: null, installments: null };

  const digits = text.replace(/[^\d.,]/g, "");
  let normalized = digits;
  if (digits.includes(",")) {
    normalized = digits.replace(/\./g, "").replace(",", ".");
  } else if (/\.\d{3}$/.test(digits)) {
    normalized = digits.replace(/\./g, "");
  }

  const value = Number.parseFloat(normalized);
  if (!Number.isFinite(value) || value <= 0) {
    return { formatted: text, value: null, installments: null };
  }

  const formatted = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
  // O formulário recebe apenas o preço. Parcelamento, juros e condições de
  // pagamento não podem ser inferidos sem que o vendedor os informe.
  return { formatted, value, installments: null };
}

/* -------------------------------------------------------------------------- */
/*  Blocos de conteúdo                                                        */
/* -------------------------------------------------------------------------- */

function buildBenefits(features: string[], input: GeneratorInput, variant: number): string[] {
  const matched: string[] = [];

  for (const feature of features) {
    for (const rule of BENEFIT_RULES) {
      if (rule.match.test(feature) && !matched.includes(rule.benefit)) {
        matched.push(rule.benefit);
        break;
      }
    }
  }

  const audience = clean(input.audience);
  const contextual: string[] = [];

  if (audience) {
    contextual.push(`Indicado para ${lowerFirst(audience)}, conforme informado`);
  }
  if (features.length > 0) {
    contextual.push(`${upperFirst(features[0])} — o detalhe que mais pesa na hora da escolha`);
  }
  if (input.category) {
    contextual.push(`Informações organizadas para a categoria ${lowerFirst(input.category)}`);
  }
  const explicit = features.map((feature) => upperFirst(feature));

  return unique([...matched, ...explicit, ...contextual]).slice(0, 5);
}

function buildSpecs(features: string[], input: GeneratorInput): SpecItem[] {
  const specs: SpecItem[] = [];
  const usedLabels = new Set<string>();

  const pushSpec = (label: string, value: string) => {
    const cleanValue = clean(value);
    if (!cleanValue) return;
    let finalLabel = label;
    let counter = 2;
    while (usedLabels.has(finalLabel)) {
      finalLabel = `${label} ${counter}`;
      counter += 1;
    }
    usedLabels.add(finalLabel);
    specs.push({ label: finalLabel, value: upperFirst(cleanValue) });
  };

  pushSpec("Produto", clean(input.productName));
  if (input.category) pushSpec("Categoria", titleCase(input.category));

  for (const feature of features) {
    const explicit = feature.match(/^([^:]{2,26}):\s*(.+)$/);
    if (explicit) {
      pushSpec(titleCase(explicit[1]), explicit[2]);
      continue;
    }

    const rule = BENEFIT_RULES.find((item) => item.specLabel && item.match.test(feature));
    pushSpec(rule?.specLabel ?? "Característica", feature);
  }

  const price = parsePrice(input.price);
  if (price.formatted) pushSpec("Preço", price.formatted);
  if (price.installments) pushSpec("Parcelamento", price.installments);
  if (input.audience) pushSpec("Indicado para", input.audience);
  pushSpec("Canal de venda", CHANNEL_LABEL[input.channel]);

  return specs;
}

function specsToText(specs: SpecItem[]): string {
  return specs.map((spec) => `• ${spec.label}: ${spec.value}`).join("\n");
}

function shortFeatures(features: string[]): string[] {
  return features
    .filter((feature) => feature.length <= 24 && !/:/.test(feature))
    .map((feature) => clean(feature.replace(/\.$/, "")));
}

/** Infere o estado de conservação para anúncios de classificado (OLX e Facebook Marketplace). */
function inferCondition(features: string[]): string | null {
  for (const feature of features) {
    for (const rule of CONDITION_RULES) {
      if (rule.match.test(feature)) return rule.state;
    }
  }
  return null;
}

function buildTitles(features: string[], input: GeneratorInput, variant: number): { title: string; alternatives: string[] } {
  const product = clean(input.productName);
  const category = clean(input.category);
  const productText = product.toLocaleLowerCase("pt-BR");
  const shorts = shortFeatures(features).filter(
    (feature) => !productText.includes(feature.toLocaleLowerCase("pt-BR")),
  );
  const f1 = shorts[0] ?? "";
  const f2 = shorts[1] ?? "";
  const f3 = shorts[2] ?? "";
  const price = parsePrice(input.price);

  const build = (channel: Channel): string[] => {
    switch (channel) {
      case "mercado-livre":
        return [
          truncate(titleCase([product, f1, f2].filter(Boolean).join(" ")), 60),
          truncate(titleCase([product, category, f1].filter(Boolean).join(" ")), 60),
          truncate(titleCase([product, f2 || f1, f3 || category].filter(Boolean).join(" ")), 60),
        ];
      case "shopee":
        return [
          truncate(`${titleCase(product)} ${[f1, f2, category].filter(Boolean).map(upperFirst).join(" ")} ✨`, 100),
          truncate(`✨ ${titleCase(product)}${f1 ? ` | ${upperFirst(f1)}` : ""}${f2 ? ` | ${upperFirst(f2)}` : ""}`, 100),
          truncate(`${titleCase(product)} ${[category, f1 || f2].filter(Boolean).map(titleCase).join(" ")}`, 100),
        ];
      case "loja-virtual":
        return [
          truncate(`${titleCase(product)}${f1 ? ` — ${upperFirst(f1)}` : ""}${category ? ` | ${titleCase(category)}` : ""}`, 70),
          truncate(`${titleCase(product)}${category ? ` ${titleCase(category)}` : ""} | Comprar Online${price.formatted ? ` por ${price.formatted}` : ""}`, 70),
          truncate(`${titleCase(product)}${f1 ? `: ${lowerFirst(f1)}` : ""}${f2 ? ` e ${lowerFirst(f2)}` : ""}`, 70),
        ];
      case "instagram":
        return [
          truncate(`${titleCase(product)} ✨${f1 ? ` ${upperFirst(f1)}` : category ? ` ${titleCase(category)}` : ""}`, 65),
          truncate(`${titleCase(product)}${f1 ? `: ${lowerFirst(f1)}` : ""}${f2 ? ` e ${lowerFirst(f2)}` : ""} 🚀`, 65),
          truncate(`${titleCase(product)}${price.formatted ? ` por ${price.formatted}` : ""}${f1 ? ` — ${lowerFirst(f1)}` : ""}`, 65),
        ];
      case "olx": {
        const state = inferCondition(features);
        const sold = shorts.filter((short) => !CONDITION_RULES.some((rule) => rule.match.test(short)));
        const o1 = sold[0] ?? "";
        const o2 = sold[1] ?? "";
        return [
          truncate(`${titleCase(product)}${state ? ` — ${state}` : ""}${o1 ? ` · ${upperFirst(o1)}` : ""}`, 65),
          truncate(`${titleCase(product)}${o1 ? ` ${upperFirst(o1)}` : ""}${o2 ? ` ${upperFirst(o2)}` : ""}${state ? ` · ${state}` : ""}`, 65),
          truncate(`${titleCase(product)}${category ? ` ${titleCase(category)}` : ""}${state ? ` — ${state}` : ""}`, 65),
        ];
      }
      case "facebook-marketplace": {
        const state = inferCondition(features);
        const sold = shorts.filter((short) => !CONDITION_RULES.some((rule) => rule.match.test(short)));
        const m1 = sold[0] ?? "";
        const m2 = sold[1] ?? "";
        return [
          truncate(`${titleCase(product)}${state ? ` (${state})` : ""}${m1 ? ` ${upperFirst(m1)}` : ""}`, 65),
          truncate(`${titleCase(product)}${state ? ` (${state})` : ""}${m2 ? ` ${upperFirst(m2)}` : ""}`, 65),
          truncate(`${titleCase(product)}${category ? ` ${titleCase(category)}` : ""}${m1 ? ` · ${upperFirst(m1)}` : ""}`, 65),
        ];
      }
      default:
        return [
          truncate(`${titleCase(product)}${f1 ? ` ${upperFirst(f1)}` : ""}${category ? ` — ${titleCase(category)}` : ""}`, 70),
          truncate(`${titleCase(product)}${category ? ` de ${lowerFirst(category)}` : ""}${f1 ? ` com ${lowerFirst(f1)}` : ""}`, 70),
          truncate(`${titleCase(product)}${f2 ? ` ${upperFirst(f2)}` : ""}${f1 ? ` e ${lowerFirst(f1)}` : ""}`, 70),
        ];
    }
  };

  const options = unique(build(input.channel).filter(Boolean));
  const rotated = [...options.slice(variant % options.length), ...options.slice(0, variant % options.length)];

  return { title: rotated[0], alternatives: rotated.slice(1) };
}

function buildDescription(features: string[], benefits: string[], input: GeneratorInput, variant: number): string {
  const product = clean(input.productName);
  const category = lowerFirst(input.category);
  const audience = lowerFirst(input.audience);
  const price = parsePrice(input.price);
  const opener = pick(TONE_OPENERS[input.tone], variant);
  const modifier = pick(TONE_MODIFIERS[input.tone], variant, 1);
  const cta = pick(TONE_CTA[input.tone], variant);
  const blocks: string[] = [];

  if (input.channel === "instagram") {
    blocks.push(`${titleCase(product)}, ${modifier}. ${opener}.`);
    if (audience) blocks.push(`Indicado para ${audience}, conforme o público informado pelo vendedor.`);
    if (features.length) blocks.push(features.slice(0, 5).map((feature) => `✅ ${upperFirst(feature)}`).join("\n"));
    if (price.formatted) blocks.push(`💰 ${price.formatted}${price.installments ? ` ou ${price.installments}` : ""}`);
    blocks.push(`${cta} Link na bio 👆`);
    return blocks.join("\n\n");
  }

  if (input.channel === "olx") {
    const condition = inferCondition(features);
    const detailFeatures = features.filter((feature) => !CONDITION_RULES.some((rule) => rule.match.test(feature)));
    blocks.push(
      `${opener}. Estou anunciando ${product}${condition ? `, ${condition.toLocaleLowerCase("pt-BR")}` : ""}${audience ? ` — ideal para ${audience}` : ""}.`,
    );
    if (detailFeatures.length) {
      blocks.push(
        `CARACTERÍSTICAS E DIFERENCIAIS\n${detailFeatures.map((feature) => `• ${upperFirst(feature)}`).join("\n")}`,
      );
    }
    blocks.push(`BENEFÍCIOS\n${benefits.map((benefit) => `• ${benefit}`).join("\n")}`);
    if (condition) {
      blocks.push(`ESTADO DE CONSERVAÇÃO\n${condition}.`);
    }
    if (price.formatted) {
      blocks.push(`VALOR\n${price.formatted}.`);
    }
    blocks.push(pick(OLX_CTAS, variant));
    return blocks.join("\n\n");
  }

  if (input.channel === "facebook-marketplace") {
    const condition = inferCondition(features);
    const detailFeatures = features.filter((feature) => !CONDITION_RULES.some((rule) => rule.match.test(feature)));
    blocks.push(
      `${opener}. Estou vendendo ${product}${condition ? `, ${condition.toLocaleLowerCase("pt-BR")}` : ""}${audience ? ` — ideal para ${audience}` : ""}.`,
    );
    if (detailFeatures.length) {
      blocks.push(
        `SOBRE O PRODUTO\n${detailFeatures.map((feature) => `• ${upperFirst(feature)}`).join("\n")}`,
      );
    }
    blocks.push(`POR QUE VALE A PENA\n${benefits.map((benefit) => `• ${benefit}`).join("\n")}`);
    if (condition) {
      blocks.push(`ESTADO DE CONSERVAÇÃO\n${condition}.`);
    }
    if (price.formatted) {
      blocks.push(`VALOR\n${price.formatted}.`);
    }
    blocks.push(pick(MARKETPLACE_CTAS, variant));
    return blocks.join("\n\n");
  }

  blocks.push(
    `${opener}. Conheça ${product}, ${modifier}${category ? `, na categoria ${category}` : ""}. ` +
      `${audience ? `Indicado para ${audience}, ele reúne` : "Reúne"} as características informadas pelo vendedor em uma apresentação organizada.`,
  );

  if (features.length) {
    blocks.push(
      `POR QUE ESCOLHER ${product.toLocaleUpperCase("pt-BR")}\n` +
        features.map((feature) => `✔ ${upperFirst(feature)}`).join("\n"),
    );
  }

  blocks.push(`PRINCIPAIS BENEFÍCIOS\n${benefits.map((benefit) => `• ${benefit}`).join("\n")}`);

  if (audience) {
    blocks.push(
      `PARA QUEM É INDICADO\nSe você se encaixa no perfil de ${audience}, esse é o tipo de produto que entra na rotina e não sai mais. ` +
        `Uso simples, resultado consistente e aquela sensação de compra bem feita.`,
    );
  }

  if (price.formatted) {
    blocks.push(`VALOR INFORMADO\n${price.formatted}. Confira as condições de pagamento definidas pelo vendedor.`);
  }

  blocks.push(cta);

  return blocks.join("\n\n");
}

function buildAdCopy(features: string[], benefits: string[], input: GeneratorInput, variant: number): string {
  const product = clean(input.productName);
  const audience = lowerFirst(input.audience);
  const price = parsePrice(input.price);
  const cta = pick(TONE_CTA[input.tone], variant, 1);
  const useEmoji = input.channel === "shopee" || input.channel === "instagram" || input.tone === "persuasivo";

  if (input.channel === "olx") {
    const condition = inferCondition(features);
    const olxLines: string[] = [];
    olxLines.push(
      `${titleCase(product).toLocaleUpperCase("pt-BR")}${condition ? ` — ${condition.toLocaleUpperCase("pt-BR")}` : ""}`,
    );
    olxLines.push("");
    olxLines.push(`Está procurando ${lowerFirst(input.category || product)}? Confira os detalhes deste anúncio.`);
    olxLines.push("");
    olxLines.push(benefits.slice(0, 4).map((benefit) => `› ${benefit}`).join("\n"));
    const highlights = features.filter((feature) => !CONDITION_RULES.some((rule) => rule.match.test(feature)));
    if (highlights.length) {
      olxLines.push("");
      olxLines.push(`Destaques: ${highlights.slice(0, 5).map(lowerFirst).join(", ")}.`);
    }
    if (price.formatted) {
      olxLines.push("");
      olxLines.push(`Valor: ${price.formatted}.`);
    }
    olxLines.push("");
    olxLines.push(pick(OLX_CTAS, variant, 1));
    return olxLines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
  }

  if (input.channel === "facebook-marketplace") {
    const condition = inferCondition(features);
    const mpLines: string[] = [];
    mpLines.push(
      `${titleCase(product).toLocaleUpperCase("pt-BR")}${condition ? ` — ${condition.toLocaleUpperCase("pt-BR")}` : ""}`,
    );
    mpLines.push("");
    mpLines.push(`Está procurando ${lowerFirst(input.category || product)}? Confira os detalhes informados pelo vendedor.`);
    mpLines.push("");
    mpLines.push(benefits.slice(0, 4).map((benefit) => `› ${benefit}`).join("\n"));
    const details = features.filter((feature) => !CONDITION_RULES.some((rule) => rule.match.test(feature)));
    if (details.length) {
      mpLines.push("");
      mpLines.push(`Detalhes do produto: ${details.slice(0, 5).map(lowerFirst).join(", ")}.`);
    }
    if (price.formatted) {
      mpLines.push("");
      mpLines.push(`Valor: ${price.formatted}.`);
    }
    mpLines.push("");
    mpLines.push(pick(MARKETPLACE_CTAS, variant, 1));
    return mpLines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
  }

  const hooks = [
    `Conheça uma opção de ${lowerFirst(input.category || product)} com informações claras para comparar.`,
    `Veja os detalhes de ${lowerFirst(product)} antes de escolher.`,
    `Quem procura ${lowerFirst(input.category || product)} pode conferir aqui as principais características.`,
  ];

  const lines: string[] = [];
  lines.push(`${useEmoji ? "🔥 " : ""}${titleCase(product).toLocaleUpperCase("pt-BR")}`);
  lines.push("");
  lines.push(pick(hooks, variant));
  lines.push("");
  lines.push(
    `Indicado para ${audience || "quem procura esse tipo de produto"}, ${product} reúne as características informadas pelo vendedor. ` +
      `${pick(TONE_OPENERS[input.tone], variant, 2)}.`,
  );
  lines.push("");
  lines.push(benefits.slice(0, 4).map((benefit) => `${useEmoji ? "✅" : "›"} ${benefit}`).join("\n"));

  if (features.length > 3) {
    lines.push("");
    lines.push(`E ainda: ${features.slice(3, 6).map(lowerFirst).join(", ")}.`);
  }

  lines.push("");
  if (price.formatted) {
    lines.push(`${useEmoji ? "💰 " : ""}Preço informado: ${price.formatted}.`);
  }
  lines.push("");
  lines.push(`${useEmoji ? "👉 " : ""}${cta}`);

  if (input.channel === "instagram") {
    lines.push("");
    lines.push(buildHashtags(input).join(" "));
  }

  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function buildHashtags(input: GeneratorInput): string[] {
  const source = [input.productName, input.category].join(" ");
  const words = source
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !SMALL_WORDS.has(word));

  const tags = unique(words.map((word) => `#${word}`));
  return [...tags.slice(0, 5), "#lojaonline", "#produtos", "#compreonline"].slice(0, 8);
}

function buildKeywords(features: string[], input: GeneratorInput): string[] {
  const product = clean(input.productName).toLocaleLowerCase("pt-BR");
  const category = clean(input.category).toLocaleLowerCase("pt-BR");
  const featureWords = features.slice(0, 3).map((feature) => `${product} ${lowerFirst(feature)}`.toLocaleLowerCase("pt-BR"));

  return unique(
    [
      product,
      category && `${product} ${category}`,
      `comprar ${product}`,
      `${product} preço`,
      category && `${category} online`,
      ...featureWords,
    ].filter((item): item is string => Boolean(item)),
  )
    .map((item) => truncate(item, 55))
    .slice(0, 8);
}

function buildSeo(features: string[], input: GeneratorInput, variant: number): { seoTitle: string; metaDescription: string } {
  const product = titleCase(input.productName);
  const category = clean(input.category);
  const price = parsePrice(input.price);
  const shorts = shortFeatures(features);
  const highlight = shorts[0] ? upperFirst(shorts[0]) : category ? titleCase(category) : "Detalhes do Produto";

  const titleOptions = [
    `${product} ${highlight} | Veja os Detalhes`,
    `${product}${category ? ` ${titleCase(category)}` : ""}${price.formatted ? ` por ${price.formatted}` : ""} | Comprar Online`,
    `${product}${shorts[0] ? ` ${upperFirst(shorts[0])}` : ""} | Informações do Produto`,
  ].map((option) => truncate(option, 60));

  // Monta a meta description por frases completas, sem cortar no meio.
  const fit = (segments: string[], max = 158): string => {
    let output = truncate(segments[0], max);
    for (const segment of segments.slice(1)) {
      if (!segment) continue;
      if (`${output} ${segment}`.length <= max) output = `${output} ${segment}`;
    }
    return output;
  };

  const descriptionOptions = [
    fit([
      `${product}${category ? ` de ${lowerFirst(category)}` : ""}${shorts[0] ? ` com ${lowerFirst(shorts[0])}` : ""}${
        shorts[1] ? ` e ${lowerFirst(shorts[1])}` : ""
      }.`,
      price.formatted ? `Preço informado: ${price.formatted}.` : "",
      "Confira as características antes de comprar.",
    ]),
    fit([
      `Procurando ${lowerFirst(product)}?`,
      shorts[0] ? `${upperFirst(shorts[0])}.` : "Veja os detalhes e diferenciais informados pelo vendedor.",
      price.formatted ? `Preço informado: ${price.formatted}.` : "",
      "Compare as informações.",
    ]),
    fit([
      `${product}:`,
      input.audience ? `ideal para ${lowerFirst(input.audience)}.` : "",
      shorts[0] ? `${upperFirst(shorts[0])}.` : "",
      "Veja características, benefícios e informações do produto.",
    ]),
  ];

  return {
    seoTitle: pick(titleOptions, variant),
    metaDescription: pick(descriptionOptions, variant),
  };
}

/* -------------------------------------------------------------------------- */
/*  Geração completa                                                          */
/* -------------------------------------------------------------------------- */

export function generateAd(input: GeneratorInput, variant = 0): GeneratedAd {
  const features = parseFeatures(input.features);
  const benefits = buildBenefits(features, input, variant);
  const specs = buildSpecs(features, input);
  const { title, alternatives } = buildTitles(features, input, variant);
  const description = buildDescription(features, benefits, input, variant);
  const adCopy = buildAdCopy(features, benefits, input, variant);
  const { seoTitle, metaDescription } = buildSeo(features, input, variant);

  return {
    title,
    titleAlternatives: alternatives,
    description,
    benefits,
    specs,
    specsText: specsToText(specs),
    adCopy,
    seoTitle,
    metaDescription,
    keywords: buildKeywords(features, input),
    channelLabel: CHANNEL_LABEL[input.channel],
    toneLabel: TONE_LABEL[input.tone],
    variant,
  };
}

export const EMPTY_INPUT: GeneratorInput = {
  productName: "",
  category: "",
  price: "",
  audience: "",
  features: "",
  channel: "mercado-livre",
  tone: "persuasivo",
};

export const EXAMPLE_INPUT: GeneratorInput = {
  productName: "Tênis masculino casual",
  category: "Calçados",
  price: "R$ 149,90",
  audience: "Homens de 18 a 35 anos",
  features:
    "Leve, confortável, solado antiderrapante, material respirável, disponível nas cores preto e branco, numeração 38 ao 44",
  channel: "mercado-livre",
  tone: "persuasivo",
};

export type { Channel, GeneratedAd, GeneratorInput, SpecItem, Tone };
