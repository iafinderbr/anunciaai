import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const failures = [];

function read(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function routeFile(route) {
  return `src/app${route}/page.tsx`;
}

function requireText(source, text, message) {
  if (!source.includes(text)) failures.push(message);
}

const sitemap = read("src/app/sitemap.ts");
const globals = read("src/app/globals.css");
const guideHub = read("src/app/guias/page.tsx");

const publicPaths = [...sitemap.matchAll(/^\s*"(\/[^\"]*)",?\s*$/gm)].map((match) => match[1]);
const generatorPaths = publicPaths.filter((route) => route.startsWith("/gerador-"));
const guidePaths = publicPaths.filter(
  (route) => route.startsWith("/como-") || route === "/seo-para-pagina-de-produto",
);

if (generatorPaths.length !== 10) {
  failures.push(`Esperados 10 geradores públicos para a auditoria visual; encontrados ${generatorPaths.length}.`);
}

if (guidePaths.length !== 27) {
  failures.push(`Esperados 27 guias públicos para a auditoria visual; encontrados ${guidePaths.length}.`);
}

for (const route of generatorPaths) {
  const file = routeFile(route);
  const source = read(file);

  requireText(source, '<main id="topo">', `${route} precisa manter o main#topo usado pelo acabamento visual.`);
  requireText(source, 'id="ferramenta"', `${route} precisa manter a âncora #ferramenta dentro da landing.`);
  requireText(source, "<SiteHeader", `${route} perdeu o cabeçalho compartilhado.`);
  requireText(source, "<SiteFooter", `${route} perdeu o rodapé compartilhado.`);
}

for (const route of guidePaths) {
  const file = routeFile(route);
  const source = read(file);

  requireText(source, '<main id="ferramenta">', `${route} precisa manter o main#ferramenta usado pelo layout editorial.`);
  requireText(source, "<article>", `${route} precisa manter a estrutura semântica de artigo.`);
  requireText(source, "<SiteHeader", `${route} perdeu o cabeçalho compartilhado.`);
  requireText(source, "<SiteFooter", `${route} perdeu o rodapé compartilhado.`);
}

requireText(guideHub, 'id="guias-titulo"', "/guias perdeu o identificador principal usado pelo acabamento visual.");
requireText(
  globals,
  "main#topo:has(> section:first-child #ferramenta)",
  "CSS perdeu o escopo das landing pages dos geradores.",
);
requireText(globals, "main#ferramenta > article", "CSS perdeu o escopo editorial dos guias.");
requireText(globals, "main#topo:has(#guias-titulo)", "CSS perdeu o escopo visual do hub de guias.");

if (failures.length) {
  console.error("\nFalhas na auditoria de UI pública:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `UI OK: ${generatorPaths.length} landing pages de geradores, ${guidePaths.length} guias e o hub /guias mantêm a estrutura visual compartilhada.`,
);
