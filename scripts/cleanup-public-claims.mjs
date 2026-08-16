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
  [/\bDeixe a IA criar\b/g, "Gere uma primeira versão"],
  [/\bDeixe a IA escrever\b/g, "Gere uma primeira versão"],
  [/\bDeixe a IA\b/g, "Use a ferramenta para"],
  [/\bA IA cria\b/g, "A ferramenta cria"],
  [/\bA IA transforma\b/g, "A ferramenta transforma"],
  [/\bA IA organiza\b/g, "A ferramenta organiza"],
  [/\bA IA gera\b/g, "A ferramenta gera"],
  [/\bA IA\b/g, "A ferramenta"],
  [/\ba IA\b/g, "a ferramenta"],
  [/\bcom inteligência artificial\b/gi, "com a ferramenta"],
  [/\binteligência artificial\b/gi, "automação de conteúdo"],
  [/\bcom IA grátis\b/gi, "com o gerador gratuito"],
  [/\bcom IA gratuita\b/gi, "com a ferramenta gratuita"],
  [/\bcom IA\b/gi, "com a ferramenta"],
  [/\bcriado com IA\b/gi, "organizado pela ferramenta"],
  [/\bgerado pela IA\b/gi, "gerado pela ferramenta"],
  [/\btexto da IA\b/gi, "texto gerado"],

  [/\bpronto para publicar\b/gi, "para revisar antes de publicar"],
  [/\bpronta para publicar\b/gi, "para revisar antes de publicar"],
  [/\bprontos para publicar\b/gi, "para revisar antes de publicar"],
  [/\bprontas para publicar\b/gi, "para revisar antes de publicar"],
  [/\bcopie e publique\b/gi, "copie, revise e adapte"],
  [/\bgerar, copiar e publicar\b/gi, "gerar, revisar e adaptar"],

  [/\bfórmula que converte\b/gi, "estrutura clara"],
  [/\btítulos que vendem\b/gi, "títulos claros"],
  [/\btítulo que vende\b/gi, "título claro"],
  [/\bbenefícios que vendem\b/gi, "benefícios bem explicados"],
  [/\btexto que converte\b/gi, "texto claro"],

  [/\branq(?:uear|ueia|ueie) no Google\b/gi, "ser compreendido por mecanismos de busca"],
  [/\bmelhorar o ranking\b/gi, "melhorar a clareza do conteúdo"],
  [/\bsubir no Google\b/gi, "melhorar a clareza para mecanismos de busca"],

  [/\bdentro do limite do canal\b/gi, "em um formato de referência para o canal"],
  [/\bno limite de cada canal\b/gi, "em um formato de referência para cada canal"],
  [/\blimite certo de cada canal\b/gi, "formato de referência para cada canal"],
  [/\bMercado Livre aceita até 60 caracteres\b/gi, "O Mercado Livre pode aplicar regras diferentes conforme a categoria e o fluxo de publicação"],
  [/\bMercado Livre permite até 60 caracteres\b/gi, "O Mercado Livre pode aplicar regras diferentes conforme a categoria e o fluxo de publicação"],
  [/\blimite de 60 caracteres do Mercado Livre\b/gi, "preview editorial usado para títulos do Mercado Livre"],
  [/\b60 caracteres no Mercado Livre\b/gi, "um preview editorial no Mercado Livre"],
  [/\b60 caracteres para Mercado Livre\b/gi, "um preview editorial para Mercado Livre"],

  [/\bEm apenas 30 segundos\b/gi, "Em poucos passos"],
  [/\bEm 30 segundos\b/gi, "Em poucos passos"],
  [/\bpronto em 30 segundos\b/gi, "organizado em poucos passos"],
  [/\bpronta em 30 segundos\b/gi, "organizada em poucos passos"],
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

console.log(`Limpeza concluída: ${replacementsMade} substituições em ${changedFiles} arquivos.`);
