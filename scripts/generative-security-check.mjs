import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const providerPath = path.join(ROOT, "src", "lib", "gemini-provider.ts");
const routePath = path.join(ROOT, "src", "app", "api", "generate", "route.ts");

const provider = fs.readFileSync(providerPath, "utf8");
const route = fs.readFileSync(routePath, "utf8");
const combined = `${provider}\n${route}`;
const failures = [];

function requirePattern(label, source, pattern) {
  if (!source.includes(pattern)) failures.push(`Proteção ausente: ${label}`);
}

function forbidPattern(label, source, pattern) {
  if (pattern.test(source)) failures.push(`Padrão proibido: ${label}`);
}

requirePattern("chave somente no servidor", provider, "process.env.GEMINI_API_KEY");
requirePattern("flag explícita de ativação", provider, 'process.env.ANUNCIAAI_GENERATIVE_ENABLED === "true"');
requirePattern("timeout da chamada externa", provider, "AbortController");
requirePattern("timeout com limpeza", provider, "clearTimeout(timeout)");
requirePattern("resposta JSON", provider, 'responseMimeType: "application/json"');
requirePattern("filtro de alegações não sustentadas", provider, "hasUnsupportedClaims");
requirePattern("checagem de números inventados", provider, "numberTokens");
requirePattern("falha segura do provedor", provider, "return null;");

requirePattern("endpoint desativado sem flag + chave", route, "if (!isGeminiEnabled())");
requirePattern("validação de mesma origem", route, "sameOrigin(request)");
requirePattern("rate limit", route, "RATE_LIMIT_MAX");
requirePattern("limite de payload", route, "MAX_BODY_BYTES");
requirePattern("validação de Content-Type", route, 'startsWith("application/json")');
requirePattern("validação de canal", route, "CHANNELS.has");
requirePattern("validação de tom", route, "TONES.has");
requirePattern("no-store", route, '"Cache-Control": "no-store"');

forbidPattern("chave exposta como NEXT_PUBLIC", combined, /NEXT_PUBLIC_[A-Z0-9_]*(?:GEMINI|GOOGLE|GENERATIVE)/i);
forbidPattern("chave literal do Google", combined, /AIza[0-9A-Za-z_-]{20,}/);
forbidPattern("conteúdo do produto enviado para console", combined, /console\.(?:log|info|debug)\s*\([^)]*(?:input|productName|features|audience)/s);

if (failures.length) {
  console.error("\nFalhas na guarda do backend generativo:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Backend generativo OK: chave, ativação, validação, rate limit, timeout e filtros de saída permanecem protegidos.");
