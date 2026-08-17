import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const generatorFile = path.join(ROOT, "src", "lib", "generator.ts");
const dataFile = path.join(ROOT, "src", "lib", "generator-data.ts");
const generatorToolFile = path.join(ROOT, "src", "components", "generator", "generator-tool.tsx");
const keywordsToolFile = path.join(ROOT, "src", "components", "generator", "product-keywords-tool.tsx");
const statsApiFile = path.join(ROOT, "src", "app", "api", "generations", "route.ts");

const generator = fs.readFileSync(generatorFile, "utf8");
const data = fs.readFileSync(dataFile, "utf8");
const generatorTool = fs.readFileSync(generatorToolFile, "utf8");
const keywordsTool = fs.readFileSync(keywordsToolFile, "utf8");
const statsApi = fs.readFileSync(statsApiFile, "utf8");
const source = `${generator}\n${data}`;
const failures = [];

const forbidden = [
  "Link na bio",
  "sem sentir peso",
  "sem período de adaptação",
  "garante firmeza e segurança",
  "não ficar na mão",
  "Conexão rápida e estável",
  "resultado consistente",
  "entra na rotina e não sai mais",
  "Usado, em bom estado",
];

for (const phrase of forbidden) {
  if (source.toLocaleLowerCase("pt-BR").includes(phrase.toLocaleLowerCase("pt-BR"))) {
    failures.push(`Frase não sustentada encontrada: ${phrase}`);
  }
}

const requiredGeneratorPatterns = [
  ["CTA do Instagram sem assumir link externo", "blocks.push(cta);"],
  ["hashtags derivadas apenas dos dados do produto", "return unique([...phraseTags, ...wordTags]).slice(0, 8);"],
  ["preview editorial do Mercado Livre sem declarar regra oficial", "const previewMax = 80;"],
  ["estado de conservação explicitamente rotulado", "ESTADO DE CONSERVAÇÃO INFORMADO"],
  ["público tratado como informação fornecida", "PÚBLICO INFORMADO"],
];

for (const [label, pattern] of requiredGeneratorPatterns) {
  if (!generator.includes(pattern)) {
    failures.push(`Proteção ausente no motor: ${label}`);
  }
}

const requiredDataPatterns = [
  [
    "estado novo exige característica explícita",
    '{ match: /^(?:(?:estado|condi[cç][aã]o)\\s*:\\s*)?(?:nov[oa]|novo na caixa|nunca usado|zero uso)$/i, state: "Novo" }',
  ],
  [
    "usado exige característica explícita",
    '{ match: /^(?:(?:estado|condi[cç][aã]o)\\s*:\\s*)?(?:usad[oa]|segunda mão|segunda mao)(?:\\s+em\\s+.+)?$/i, state: "Usado" }',
  ],
  ["canal Mercado Livre sem limite universal", 'hint: "Título objetivo e fácil de identificar"'],
  ["tom persuasivo sem gatilhos artificiais", 'hint: "Focado em benefícios e próximo passo"'],
];

for (const [label, pattern] of requiredDataPatterns) {
  if (!data.includes(pattern)) {
    failures.push(`Proteção ausente nos dados do gerador: ${label}`);
  }
}

const forbiddenConditionPatterns = [
  ["novo por substring pode confundir marcas como Lenovo", '{ match: /nov[oa]\\b/i, state: "Novo" }'],
  ["conservado genérico pode melhorar condição negativa", "/bem conservad|conservad/i"],
];

for (const [label, pattern] of forbiddenConditionPatterns) {
  if (data.includes(pattern)) {
    failures.push(`Inferência de condição insegura: ${label}`);
  }
}

const requiredKeywordPatterns = [
  ["Google altera as combinações", 'if (target === "google")'],
  ["Google usa contexto informativo", 'term: `${product} características`'],
  ["loja virtual altera as combinações", 'if (target === "loja")'],
  ["loja usa contexto de compra online", 'term: `comprar ${product}`'],
  ["Mercado Livre altera as combinações", 'term: `${product} mercado livre`'],
  ["Shopee altera as combinações", 'term: `${product} shopee`'],
  ["ferramenta nega consulta a autocomplete", "autocomplete nem dados internos"],
];

for (const [label, pattern] of requiredKeywordPatterns) {
  if (!keywordsTool.includes(pattern)) {
    failures.push(`Proteção ausente no gerador de palavras-chave: ${label}`);
  }
}

const requiredPrivacyPatterns = [
  [
    "geração principal continua local no navegador",
    "const generated = generateAd(data, nextVariant);",
    generatorTool,
  ],
  [
    "estatística envia somente o canal selecionado",
    "body: JSON.stringify({ channel: data.channel }),",
    generatorTool,
  ],
  [
    "API de estatísticas lê somente o canal do payload",
    "const channel = str((body as Record<string, unknown>).channel, 40);",
    statsApi,
  ],
  ["nome do produto não é armazenado", 'productName: "Produto",', statsApi],
  ["categoria do produto não é armazenada", 'category: "Não armazenada",', statsApi],
  ["público do produto não é armazenado", "audience: null,", statsApi],
  ["preço do produto não é armazenado", "price: null,", statsApi],
  ["prévia do título não é armazenada", "titlePreview: null,", statsApi],
  ["características não são contabilizadas no banco", "featureCount: 0,", statsApi],
];

for (const [label, pattern, target] of requiredPrivacyPatterns) {
  if (!target.includes(pattern)) {
    failures.push(`Proteção de privacidade ausente: ${label}`);
  }
}

if (/fetch\s*\(\s*["']\/api\/generate["']/.test(generatorTool)) {
  failures.push("Privacidade: o gerador principal passou a enviar conteúdo para /api/generate.");
}

for (const field of ["productName", "category", "audience", "price", "features", "tone"]) {
  const bodyFieldPattern = new RegExp(`\\bbody(?:\\s+as[^;]+)?[\\s\\S]{0,80}\\.${field}\\b`);
  if (bodyFieldPattern.test(statsApi)) {
    failures.push(`Privacidade: a API de estatísticas passou a ler o campo ${field} do payload.`);
  }
}

if (failures.length) {
  console.error("\nFalhas na auditoria do gerador:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  "Gerador OK: proteções contra promessas, inferência insegura de condição, destinos de palavras-chave e envio indevido de dados estão presentes.",
);
