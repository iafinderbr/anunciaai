import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = [path.join(ROOT, "src", "app"), path.join(ROOT, "src", "components"), path.join(ROOT, "src", "lib")];

const patterns = [
  ["menção a IA ainda não conectada", /\bcom IA\b|\bA IA\b|\bDeixe a IA\b|intelig[eê]ncia artificial/gi],
  ["promessa de resultado pronto em segundos", /pront[oa]s? em \d+ segundos|em apenas \d+ segundos/gi],
  [
    "promessa de publicação sem revisão",
    /pront[oa]s? para publicar|copie e publique|voc[eê] s[oó] precisa colar|tudo o que precisa para publicar|an[uú]ncio publicado em \d+ passos/gi,
  ],
  ["promessa de conversão", /f[oó]rmula que converte|t[ií]tulos? que vendem|an[uú]ncio que vende/gi],
  ["promessa de ranking", /ranquear no Google|melhorar (?:o )?ranking|subir no Google|\b\d{1,3}% do (?:seu )?resultado na busca/gi],
  [
    "limite antigo do Mercado Livre",
    /Mercado Livre[\s\S]{0,220}(?:at[eé]|limite de|dentro de) 60 caracteres|60 caracteres[\s\S]{0,220}Mercado Livre/gi,
  ],
  ["contador estático apresentado como limite", /\b\d{1,3}\/\d{1,3}\s+caracteres\b/gi],
  ["garantia de limite por canal", /limite certo de cada canal|dentro do limite do canal|no limite de cada canal/gi],
  [
    "garantia de conformidade com marketplace",
    /respeita(?: o)? limite de caracteres|respeita[^.\n]{0,100}(?:regras|pol[ií]tica)[^.\n]{0,100}(?:plataforma|marketplace)/gi,
  ],
  ["contador atribuído a público não verificado", /por lojistas com o AnunciaAI/gi],
  ["SEO apresentado como otimização comprovada", /Otimizado para busca no Google e dentro do marketplace/gi],
];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const files = SCAN_DIRS.flatMap(walk).filter((file) => /\.(ts|tsx|js|jsx)$/.test(file));
const failures = [];

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const lines = source.split(/\r?\n/);

  for (const [label, pattern] of patterns) {
    pattern.lastIndex = 0;
    for (const match of source.matchAll(pattern)) {
      const before = source.slice(0, match.index ?? 0);
      const lineNumber = before.split(/\r?\n/).length;
      const excerpt = lines[lineNumber - 1]?.trim().slice(0, 180) ?? match[0];
      failures.push({
        label,
        file: path.relative(ROOT, file).replaceAll(path.sep, "/"),
        lineNumber,
        excerpt,
      });
    }
  }
}

if (failures.length) {
  console.error("\nPromessas públicas que precisam de revisão:");
  for (const failure of failures) {
    console.error(`- ${failure.file}:${failure.lineNumber} [${failure.label}] ${failure.excerpt}`);
  }
  process.exit(1);
}

console.log("Promessas OK: nenhuma afirmação bloqueada foi encontrada no conteúdo público.");
