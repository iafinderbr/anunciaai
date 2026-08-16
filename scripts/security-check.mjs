import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const failures = [];

const SKIP_DIRS = new Set([".git", ".next", "node_modules", ".vercel"]);
const TEXT_EXTENSIONS = new Set([
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".ts",
  ".tsx",
  ".json",
  ".yml",
  ".yaml",
  ".md",
  ".txt",
  ".css",
  ".html",
  ".toml",
]);

const SECRET_PATTERNS = [
  ["chave privada PEM", /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
  ["GitHub token clássico", /\bgh[pousr]_[A-Za-z0-9]{30,}\b/],
  ["GitHub fine-grained token", /\bgithub_pat_[A-Za-z0-9_]{30,}\b/],
  ["OpenAI secret key", /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/],
  ["Stripe live secret key", /\bsk_live_[A-Za-z0-9]{16,}\b/],
  ["AWS access key", /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/],
  ["Google API key", /\bAIza[0-9A-Za-z_-]{30,}\b/],
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory() && SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }

  return files;
}

function relative(file) {
  return path.relative(ROOT, file).replaceAll(path.sep, "/");
}

for (const file of walk(ROOT)) {
  const rel = relative(file);
  const basename = path.basename(file);

  if (basename.startsWith(".env") && basename !== ".env.example") {
    failures.push(`Arquivo de ambiente não permitido no repositório: ${rel}`);
    continue;
  }

  const extension = path.extname(file).toLocaleLowerCase("en-US");
  if (!TEXT_EXTENSIONS.has(extension) && basename !== ".env.example") continue;

  let source;
  try {
    source = fs.readFileSync(file, "utf8");
  } catch {
    continue;
  }

  for (const [label, pattern] of SECRET_PATTERNS) {
    if (pattern.test(source)) {
      failures.push(`Possível ${label} encontrado em ${rel}`);
    }
  }

  // Connection strings reais quase sempre carregam usuário/senha. Permitimos
  // apenas exemplos declaradamente fictícios usados na documentação e no CI.
  const postgresUrls = source.match(/postgres(?:ql)?:\/\/[^\s`"')]+/gi) ?? [];
  for (const url of postgresUrls) {
    const allowedExample =
      /postgresql:\/\/(?:USER:PASSWORD@HOST|usuario:senha@host|anunciaai:anunciaai@127\.0\.0\.1):5432\/(?:DATABASE|banco|anunciaai)/i.test(
        url,
      );
    if (!allowedExample) {
      failures.push(`Possível DATABASE_URL real encontrado em ${rel}`);
    }
  }
}

if (failures.length) {
  console.error("\nFalhas na auditoria de segredos:");
  for (const failure of [...new Set(failures)]) console.error(`- ${failure}`);
  console.error("\nRemova a credencial do Git e faça a rotação do segredo antes de continuar.");
  process.exit(1);
}

console.log("Segurança OK: nenhum padrão conhecido de segredo versionado foi detectado.");
