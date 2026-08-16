import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const roots = [
  path.join(ROOT, "src", "app"),
  path.join(ROOT, "src", "components"),
  path.join(ROOT, "src", "lib"),
];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const replacements = [
  [/\bDeixe a IA (?:criar|escrever|fazer|gerar)\b/gi, "Gere uma primeira versão"],
  [/\bDeixe a IA\b/gi, "Use a ferramenta"],
  [/\bA IA (?:cria|gera|organiza|transforma|escreve|monta|faz)\b/gi, "A ferramenta organiza"],
  [/\ba IA (?:cria|gera|organiza|transforma|escreve|monta|faz)\b/gi, "a ferramenta organiza"],
  [/\bA IA\b/g, "A ferramenta"],
  [/\ba IA\b/g, "a ferramenta"],
  [/\bcom inteligência artificial\b/gi, "com a ferramenta"],
  [/\binteligência artificial\b/gi, "automação de conteúdo"],
  [/\bcom IA\b/gi, "com a ferramenta"],
  [/\bcriad[oa]s? por IA\b/gi, "organizados pela ferramenta"],
  [/\bcriad[oa]s? com IA\b/gi, "organizados pela ferramenta"],
  [/\bgerad[oa]s? por IA\b/gi, "gerados pela ferramenta"],
  [/\btexto da IA\b/gi, "texto gerado"],

  [/\bpront[oa]s? para publicar\b/gi, "para revisar antes de publicar"],
  [/\bpront[oa]s? para copiar e publicar\b/gi, "para copiar, revisar e adaptar"],
  [/\bcopie e publique\b/gi, "copie, revise e adapte"],
  [/\bgerar, copiar e publicar\b/gi, "gerar, revisar e adaptar"],
  [/\bgerou, copiou, publicou\b/gi, "gerou, revisou e adaptou"],

  [/\bpront[oa]s? em \d+ segundos\b/gi, "organizados em poucos passos"],
  [/\bem apenas \d+ segundos\b/gi, "em poucos passos"],
  [/\bem \d+ segundos\b/gi, "em poucos passos"],

  [/\bfórmula que converte\b/gi, "estrutura clara"],
  [/\bfórmula para converter\b/gi, "estrutura para organizar"],
  [/\btítulos? que vendem\b/gi, "títulos claros"],
  [/\btexto que converte\b/gi, "texto claro"],
  [/\bbenefícios? que vendem\b/gi, "benefícios bem explicados"],

  [/\branq(?:uear|ueia|ueie|ueamento) no Google\b/gi, "organizar o conteúdo para mecanismos de busca"],
  [/\bmelhorar (?:o )?ranking\b/gi, "melhorar a clareza para mecanismos de busca"],
  [/\bsubir no Google\b/gi, "melhorar a clareza para mecanismos de busca"],

  [/\blimite certo de cada canal\b/gi, "formato de referência para cada canal"],
  [/\bdentro do limite do canal\b/gi, "em um formato de referência para o canal"],
  [/\bno limite de cada canal\b/gi, "em um formato de referência para cada canal"],
  [/\brespeita o limite de cada canal\b/gi, "usa um formato editorial de referência para cada canal"],

  [/Mercado Livre[^\n]{0,120}(?:aceita|permite|tem|usa|limite(?: de)?)[^\n]{0,40}60 caracteres/gi, "O Mercado Livre pode aplicar regras diferentes conforme a categoria e o fluxo de publicação"],
  [/60 caracteres[^\n]{0,120}Mercado Livre/gi, "um preview editorial para títulos do Mercado Livre"],
];

const forbidden = [
  /\bcom IA\b|\bA IA\b|\bDeixe a IA\b|intelig[eê]ncia artificial/gi,
  /pront[oa]s? em \d+ segundos|em apenas \d+ segundos/gi,
  /pront[oa]s? para publicar|copie e publique/gi,
  /f[oó]rmula que converte|t[ií]tulos? que vendem/gi,
  /ranquear no Google|melhorar (?:o )?ranking|subir no Google/gi,
  /Mercado Livre[^\n]{0,100}(?:at[eé]|limite de) 60 caracteres|60 caracteres[^\n]{0,100}Mercado Livre/gi,
  /limite certo de cada canal|dentro do limite do canal|no limite de cada canal/gi,
];

const files = roots.flatMap(walk).filter((file) => /\.(ts|tsx|js|jsx)$/.test(file));
let changedFiles = 0;
let replacementsMade = 0;

for (const file of files) {
  const before = fs.readFileSync(file, "utf8");
  let after = before;

  for (const [pattern, replacement] of replacements) {
    const matches = after.match(pattern);
    if (matches) replacementsMade += matches.length;
    after = after.replace(pattern, replacement);
  }

  if (after !== before) {
    fs.writeFileSync(file, after, "utf8");
    changedFiles += 1;
    console.log(`corrigido: ${path.relative(ROOT, file).replaceAll(path.sep, "/")}`);
  }
}

const leftovers = [];
for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  for (const pattern of forbidden) {
    pattern.lastIndex = 0;
    const match = pattern.exec(source);
    if (match) {
      const line = source.slice(0, match.index).split(/\r?\n/).length;
      leftovers.push(`${path.relative(ROOT, file).replaceAll(path.sep, "/")}:${line} -> ${match[0]}`);
    }
  }
}

console.log(`Limpeza v2: ${replacementsMade} substituições em ${changedFiles} arquivos.`);
if (leftovers.length) {
  console.error("Ainda restaram promessas bloqueadas:");
  for (const item of leftovers) console.error(`- ${item}`);
  process.exit(1);
}
