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

// Detecta somente uso/atribuição real dessas variáveis. Menções em documentação
// ou nos próprios testes não devem virar falso positivo.
const PUBLIC_SECRET_USAGE = /(?:process\.env\.|^\s*)(NEXT_PUBLIC_(?:BETTER_AUTH_SECRET|GOOGLE_CLIENT_SECRET|FACEBOOK_CLIENT_SECRET|DATABASE_URL|GEMINI_API_KEY))\s*(?:=|\b)/gm;

const ALLOWED_POSTGRES_EXAMPLES = new Set([
  "postgresql://USER:PASSWORD@HOST:5432/DATABASE",
  "postgresql://usuario:senha@host:5432/banco",
  "postgresql://anunciaai:anunciaai@127.0.0.1:5432/anunciaai",
  "postgresql://postgres:postgres@127.0.0.1:5432/app_db",
]);

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

function checkWorkflowHardening(source, rel) {
  if (/^\s*runs-on:\s*ubuntu-latest\s*$/im.test(source)) {
    failures.push(`Runner mutável ubuntu-latest em ${rel}; fixe a versão principal do Ubuntu.`);
  }

  for (const match of source.matchAll(/^\s*uses:\s*([^\s#]+)(?:\s+#.*)?$/gim)) {
    const target = match[1];
    if (target.startsWith("./") || target.startsWith("docker://")) continue;

    const at = target.lastIndexOf("@");
    if (at <= 0) {
      failures.push(`GitHub Action sem referência explícita em ${rel}: ${target}`);
      continue;
    }

    const ref = target.slice(at + 1);
    if (!/^[0-9a-f]{40}$/i.test(ref)) {
      failures.push(`GitHub Action sem SHA imutável em ${rel}: ${target}`);
    }
  }

  // O checkout injeta uma credencial temporária do GITHUB_TOKEN no repositório
  // por padrão. Como nossos workflows são somente leitura, não há motivo para
  // manter essa credencial disponível aos passos seguintes.
  for (const match of source.matchAll(/^([ \t]*)uses:\s*actions\/checkout@[0-9a-f]{40}(?:\s+#.*)?$/gim)) {
    const start = match.index ?? 0;
    const tail = source.slice(start + match[0].length, start + match[0].length + 260);
    const nextStep = tail.search(/^\s*-\s+name:/m);
    const checkoutBlock = nextStep >= 0 ? tail.slice(0, nextStep) : tail;

    if (!/^\s*persist-credentials:\s*false\s*$/im.test(checkoutBlock)) {
      failures.push(`Checkout persiste GITHUB_TOKEN em ${rel}; configure persist-credentials: false.`);
    }
  }
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
    pattern.lastIndex = 0;
    if (pattern.test(source)) {
      failures.push(`Possível ${label} encontrado em ${rel}`);
    }
  }

  PUBLIC_SECRET_USAGE.lastIndex = 0;
  for (const match of source.matchAll(PUBLIC_SECRET_USAGE)) {
    failures.push(`Variável sensível exposta com prefixo público em ${rel}: ${match[1]}`);
  }

  // Connection strings reais quase sempre carregam usuário/senha. Permitimos
  // somente exemplos locais/fictícios exatos usados no repositório.
  const postgresUrls = source.match(/postgres(?:ql)?:\/\/[^\s`"')]+/gi) ?? [];
  for (const url of postgresUrls) {
    if (!ALLOWED_POSTGRES_EXAMPLES.has(url)) {
      failures.push(`Possível DATABASE_URL real encontrado em ${rel}`);
    }
  }

  // Tags de GitHub Actions são referências mutáveis. Workflows versionados no
  // repositório devem apontar para o SHA completo do commit da action. A versão
  // legível continua ao lado como comentário para facilitar manutenção.
  if (rel.startsWith(".github/workflows/") && /\.ya?ml$/i.test(rel)) {
    checkWorkflowHardening(source, rel);
  }
}

if (failures.length) {
  console.error("\nFalhas na auditoria de segurança:");
  for (const failure of [...new Set(failures)]) console.error(`- ${failure}`);
  console.error("\nRemova/rotacione credenciais expostas e corrija o hardening dos workflows antes de continuar.");
  process.exit(1);
}

console.log("Segurança OK: sem segredos conhecidos, sem secrets no bundle cliente, Actions fixadas em SHA, runner versionado e checkout sem credencial persistida.");
