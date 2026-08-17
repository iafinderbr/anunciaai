import type { Channel, GeneratorInput, Tone } from "@/lib/types";

const DEFAULT_MODEL = "gemini-2.5-flash";
const REQUEST_TIMEOUT_MS = 12_000;
const MAX_OUTPUT_TOKENS = 2_048;

export interface AdvancedGeneratedCopy {
  title: string;
  titleAlternatives: string[];
  description: string;
  benefits: string[];
  adCopy: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
}

interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{ text?: string }>;
    };
  }>;
}

const CHANNEL_GUIDANCE: Record<Channel, string> = {
  "mercado-livre": "Título objetivo, produto identificável e linguagem de marketplace. Não trate qualquer tamanho de título como regra oficial universal.",
  shopee: "Título descritivo, leitura simples e linguagem de marketplace. Não invente atributos, cupons ou condições comerciais.",
  "loja-virtual": "Conteúdo de página de produto, com descrição organizada e sugestões editoriais de SEO sem promessa de posição em busca.",
  instagram: "Legenda legível, chamada para ação neutra e palavras relacionadas somente aos dados fornecidos.",
  olx: "Classificado direto. Só mencione condição, retirada, entrega ou negociação quando isso estiver explicitamente nos dados.",
  "facebook-marketplace": "Classificado direto e natural. Só mencione condição ou termos comerciais quando explicitamente informados.",
  outro: "Texto neutro e fácil de adaptar a outro canal.",
};

const TONE_GUIDANCE: Record<Tone, string> = {
  profissional: "Tom profissional, objetivo e sem exageros.",
  persuasivo: "Tom convidativo, mas sem urgência falsa, superlativos ou promessas não sustentadas.",
  simples: "Tom simples, curto e direto.",
  premium: "Tom mais refinado, sem transformar estilo em alegação de qualidade superior.",
};

function clean(value: string, max: number): string {
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

function compactInput(input: GeneratorInput): GeneratorInput {
  return {
    productName: clean(input.productName, 160),
    category: clean(input.category, 120),
    price: clean(input.price, 60),
    audience: clean(input.audience, 220),
    features: input.features.trim().slice(0, 3_000),
    channel: input.channel,
    tone: input.tone,
  };
}

function buildPrompt(input: GeneratorInput): string {
  const safe = compactInput(input);

  return [
    "Tarefa: reescrever uma primeira versão de conteúdo comercial usando SOMENTE os fatos fornecidos abaixo.",
    "Regras obrigatórias:",
    "- Não invente produto, especificação, número, medida, material, marca, modelo, condição, garantia, compatibilidade, estoque, entrega, frete, desconto, promoção, parcelamento, urgência, certificação ou resultado de uso.",
    "- Não use superlativos como melhor, perfeito, imperdível ou garantido.",
    "- Não diga que algo melhora vendas, conversão, posicionamento ou alcance.",
    "- Benefícios devem explicar com cautela uma característica já informada; não transforme possibilidade em garantia.",
    "- Se um dado não existe, omita-o.",
    "- Sugestões de SEO e palavras-chave são editoriais; não afirme volume, concorrência, tendência ou posição.",
    "- Retorne APENAS JSON válido, sem markdown, comentários ou texto fora do objeto.",
    `Canal: ${safe.channel}. ${CHANNEL_GUIDANCE[safe.channel]}`,
    `Tom: ${safe.tone}. ${TONE_GUIDANCE[safe.tone]}`,
    "",
    "Dados fornecidos pelo vendedor:",
    JSON.stringify(safe),
    "",
    "Formato exato de resposta:",
    JSON.stringify({
      title: "string",
      titleAlternatives: ["string", "string"],
      description: "string",
      benefits: ["string", "string", "string"],
      adCopy: "string",
      seoTitle: "string",
      metaDescription: "string",
      keywords: ["string", "string", "string"],
    }),
  ].join("\n");
}

function parseJsonText(raw: string): unknown {
  const trimmed = raw.trim();
  const withoutFence = trimmed
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/, "")
    .trim();
  return JSON.parse(withoutFence);
}

function stringArray(value: unknown, maxItems: number, maxLength: number): string[] {
  if (!Array.isArray(value)) return [];
  const seen = new Set<string>();
  const output: string[] = [];

  for (const item of value) {
    if (typeof item !== "string") continue;
    const text = clean(item, maxLength);
    const key = text.toLocaleLowerCase("pt-BR");
    if (!text || seen.has(key)) continue;
    seen.add(key);
    output.push(text);
    if (output.length >= maxItems) break;
  }

  return output;
}

function sanitizeResult(value: unknown): AdvancedGeneratedCopy | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const item = value as Record<string, unknown>;

  const title = typeof item.title === "string" ? clean(item.title, 120) : "";
  const description = typeof item.description === "string" ? item.description.trim().slice(0, 5_000) : "";
  const adCopy = typeof item.adCopy === "string" ? item.adCopy.trim().slice(0, 4_000) : "";
  const seoTitle = typeof item.seoTitle === "string" ? clean(item.seoTitle, 80) : "";
  const metaDescription = typeof item.metaDescription === "string" ? clean(item.metaDescription, 220) : "";
  const titleAlternatives = stringArray(item.titleAlternatives, 3, 120);
  const benefits = stringArray(item.benefits, 6, 280);
  const keywords = stringArray(item.keywords, 10, 90);

  if (!title || !description || !adCopy || !seoTitle || !metaDescription) return null;
  if (benefits.length < 2 || titleAlternatives.length < 1 || keywords.length < 2) return null;

  return {
    title,
    titleAlternatives,
    description,
    benefits,
    adCopy,
    seoTitle,
    metaDescription,
    keywords,
  };
}

function normalize(value: string): string {
  return value
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

function allText(result: AdvancedGeneratedCopy): string {
  return [
    result.title,
    ...result.titleAlternatives,
    result.description,
    ...result.benefits,
    result.adCopy,
    result.seoTitle,
    result.metaDescription,
    ...result.keywords,
  ].join("\n");
}

function numberTokens(value: string): Set<string> {
  return new Set(value.match(/\d+(?:[.,]\d+)?/g) ?? []);
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function containsPhrase(text: string, phrase: string): boolean {
  const body = phrase
    .trim()
    .split(/\s+/)
    .map(escapeRegExp)
    .join("\\s+");
  return new RegExp(`(?:^|[^a-z0-9])${body}(?=$|[^a-z0-9])`, "i").test(text);
}

function hasUnsupportedClaims(input: GeneratorInput, result: AdvancedGeneratedCopy): boolean {
  const facts = normalize(JSON.stringify(compactInput(input)));
  const output = normalize(allText(result));

  const alwaysBlocked = [
    "melhor do mercado",
    "o melhor",
    "imperdivel",
    "garantido",
    "resultado garantido",
    "qualidade garantida",
    "ultimas unidades",
    "estoque acabando",
    "mais vendido",
    "campeao de vendas",
    "sucesso garantido",
  ];
  if (alwaysBlocked.some((phrase) => containsPhrase(output, phrase))) return true;

  const conditionalClaims = [
    "frete gratis",
    "entrega rapida",
    "desconto",
    "promocao",
    "parcelamento",
    "sem juros",
    "garantia",
    "original",
    "autentico",
    "oficial",
    "lacrado",
    "pronta entrega",
    "impermeavel",
    "a prova d'agua",
    "certificado",
    "seminovo",
    "pouco uso",
    "usado",
    "novo",
  ];

  for (const phrase of conditionalClaims) {
    if (containsPhrase(output, phrase) && !containsPhrase(facts, phrase)) return true;
  }

  const inputNumbers = numberTokens(facts);
  for (const number of numberTokens(output)) {
    if (!inputNumbers.has(number)) return true;
  }

  return false;
}

export function isGeminiEnabled(): boolean {
  return process.env.ANUNCIAAI_GENERATIVE_ENABLED === "true" && Boolean(process.env.GEMINI_API_KEY);
}

export async function generateWithGemini(input: GeneratorInput): Promise<AdvancedGeneratedCopy | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || process.env.ANUNCIAAI_GENERATIVE_ENABLED !== "true") return null;

  const model = clean(process.env.GEMINI_MODEL || DEFAULT_MODEL, 80);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: buildPrompt(input) }] }],
          generationConfig: {
            temperature: 0.35,
            candidateCount: 1,
            maxOutputTokens: MAX_OUTPUT_TOKENS,
            responseMimeType: "application/json",
          },
        }),
        signal: controller.signal,
        cache: "no-store",
      },
    );

    if (!response.ok) return null;

    const payload = (await response.json()) as GeminiResponse;
    const raw = payload.candidates?.[0]?.content?.parts
      ?.map((part) => part.text ?? "")
      .join("")
      .trim();
    if (!raw) return null;

    const result = sanitizeResult(parseJsonText(raw));
    if (!result || hasUnsupportedClaims(input, result)) return null;
    return result;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}