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
const header = read("src/components/site-header.tsx");
const toolsHub = read("src/app/ferramentas/page.tsx");
const channelShowcase = read("src/components/channel-showcase.tsx");
const channelDock = read("src/components/channel-side-dock.tsx");

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
  const source = read(routeFile(route));
  requireText(source, '<main id="topo">', `${route} precisa manter o main#topo usado pelo layout de aquisição.`);
  requireText(source, 'id="ferramenta"', `${route} precisa manter a âncora #ferramenta dentro da landing.`);
  requireText(source, "<SiteHeader", `${route} perdeu o cabeçalho compartilhado.`);
  requireText(source, "<SiteFooter", `${route} perdeu o rodapé compartilhado.`);
}

for (const route of guidePaths) {
  const source = read(routeFile(route));
  requireText(source, '<main id="ferramenta">', `${route} precisa manter o main#ferramenta usado pelo layout editorial.`);
  requireText(source, "<article>", `${route} precisa manter a estrutura semântica de artigo.`);
  requireText(source, "<SiteHeader", `${route} perdeu o cabeçalho compartilhado.`);
  requireText(source, "<SiteFooter", `${route} perdeu o rodapé compartilhado.`);
}

requireText(guideHub, 'id="guias-titulo"', "/guias perdeu o identificador principal usado pelo acabamento editorial.");
requireText(globals, "main#topo > section:first-child:has(#ferramenta)", "CSS perdeu o escopo profissional das landing pages dos geradores.");
requireText(globals, "main#ferramenta > article", "CSS perdeu o escopo editorial dos guias.");
requireText(globals, "main#topo:has(#guias-titulo)", "CSS perdeu o escopo visual do hub de guias.");
requireText(globals, "--color-canvas: #f7f7f5", "O sistema visual perdeu a paleta neutra definida para o produto.");
requireText(header, 'id="inicio-conteudo"', "O cabeçalho perdeu o alvo acessível do skip link.");
requireText(header, "ChannelSideDock", "O shell público perdeu a navegação lateral por canal.");
requireText(header, 'pathname === "/"', "A Home precisa exibir a navegação lateral por canal.");
requireText(header, 'pathname === "/ferramentas"', "A biblioteca precisa manter a navegação lateral por canal.");
requireText(toolsHub, 'id="geradores"', "/ferramentas perdeu a biblioteca de geradores.");
requireText(channelDock, "data-channel-side-dock", "A dock lateral precisa manter um marcador estável para auditoria visual.");
requireText(channelDock, "Abrir gerador", "A dock lateral precisa abrir contexto antes de navegar para o canal.");
requireText(channelShowcase, "ChannelCompactBar", "Telas menores perderam o fallback compacto de canais.");

for (const href of [
  "/gerador-de-anuncios-mercado-livre",
  "/gerador-de-anuncios-shopee",
  "/gerador-de-legendas-para-instagram",
  "/gerador-de-anuncios-olx",
  "/gerador-de-anuncios-facebook-marketplace",
  "/gerador-de-anuncios-para-loja-virtual",
]) {
  requireText(channelShowcase, href, `Navegação lateral perdeu o canal ${href}.`);
}

if (failures.length) {
  console.error("\nFalhas na auditoria de UI pública:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `UI OK: ${generatorPaths.length} landings, ${guidePaths.length} guias, navegação lateral de 6 canais, /guias e /ferramentas preservam o sistema visual compartilhado.`,
);
