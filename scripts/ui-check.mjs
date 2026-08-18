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

function forbidText(source, text, message) {
  if (source.includes(text)) failures.push(message);
}

const sitemap = read("src/app/sitemap.ts");
const globals = read("src/app/globals.css");
const darkSystem = read("src/app/professional-dark.css");
const darkPages = read("src/app/professional-dark-pages.css");
const accountDark = read("src/app/account-dark.css");
const generatorDark = read("src/app/generator-dark.css");
const finalPolish = read("src/app/final-polish.css");
const layout = read("src/app/layout.tsx");
const guideHub = read("src/app/guias/page.tsx");
const header = read("src/components/site-header.tsx");
const toolsHub = read("src/app/ferramentas/page.tsx");
const loginPage = read("src/app/entrar/page.tsx");
const accountOverview = read("src/app/conta/page.tsx");
const accountLoading = read("src/app/conta/loading.tsx");
const accountNav = read("src/components/account/account-nav.tsx");
const proVariations = read("src/components/account/pro-variations-tool.tsx");
const generatorGate = read("src/components/auth/generator-access-gate.tsx");
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
requireText(globals, "main#topo > section:first-child:has(#ferramenta)", "CSS perdeu o escopo base das landing pages dos geradores.");
requireText(globals, "main#ferramenta > article", "CSS perdeu o escopo editorial base dos guias.");
requireText(globals, "main#topo:has(#guias-titulo)", "CSS perdeu o escopo base do hub de guias.");
requireText(globals, "--color-canvas: #f7f7f5", "O sistema de superfícies claras/formulários perdeu sua paleta neutra de apoio.");

for (const cssImport of [
  './professional-dark.css',
  './professional-dark-pages.css',
  './account-dark.css',
  './generator-dark.css',
  './final-polish.css',
]) {
  requireText(layout, cssImport, `Layout deixou de carregar ${cssImport}.`);
}
if (layout.indexOf('./final-polish.css') < layout.indexOf('./generator-dark.css')) {
  failures.push("final-polish.css precisa carregar depois do tema do gerador para fechar a cascata visual.");
}
requireText(layout, 'themeColor: "#0c0d0f"', "Tema do navegador precisa acompanhar o shell grafite.");

for (const required of [
  "--public-black: #0b0c0e",
  "--public-panel: #131418",
  "main#topo > section:first-child:has(#ferramenta)",
  "main#ferramenta > article",
  "main#topo:has(#guias-titulo)",
  "main#ferramenta:not(:has(> article))",
  "background: #101114",
]) {
  requireText(darkSystem, required, `Sistema visual escuro incompleto: ${required}.`);
}
for (const required of [
  "main#topo:has(> section#ferramenta)",
  "main:has(> section#geradores)",
  "background: #0b0c0e",
]) {
  requireText(darkPages, required, `Home/Ferramentas perderam o tratamento grafite: ${required}.`);
}
for (const required of [
  'main:has(nav[aria-label="Navegação da conta"])',
  "background: #0d0e11",
  "background: #15161a",
  "border-radius: 6px",
]) {
  requireText(accountDark, required, `Área autenticada perdeu o acabamento profissional: ${required}.`);
}
for (const required of [
  "#ferramenta:not(main)",
  "--generator-bg: #0d0e11",
  "width: 100vw",
  "background: var(--generator-bg)",
  "background: #0b0c0f",
  "--generator-orange: #f1662a",
  "button.bg-ink",
  "color-scheme: dark",
]) {
  requireText(generatorDark, required, `Fluxo de criação perdeu o tema grafite integral: ${required}.`);
}
requireText(
  generatorDark,
  "Guias editoriais também usam `main#ferramenta`",
  "Tema do gerador precisa continuar explicitamente isolado dos guias editoriais.",
);

for (const required of [
  "Acabamento final do sistema visual",
  "background: #111216 !important",
  'aside[aria-label="Prévia do workspace AnunciaAI"]',
  'rounded-[10px]',
  "border-radius: 5px !important",
  "background: #17181c !important",
  "outline-color: #f1662a",
]) {
  requireText(finalPolish, required, `Acabamento profissional final incompleto: ${required}.`);
}

requireText(header, 'id="inicio-conteudo"', "O cabeçalho perdeu o alvo acessível do skip link.");
requireText(header, "ChannelSideDock", "O shell público perdeu a navegação lateral por canal.");
requireText(header, 'pathname === "/"', "A Home precisa exibir a navegação lateral por canal.");
requireText(header, 'pathname === "/ferramentas"', "A biblioteca precisa manter a navegação lateral por canal.");
requireText(header, 'bg-[#0c0d0f]/95', "Cabeçalho público voltou a uma superfície clara/menos corporativa.");
requireText(header, "bg-brand-500", "Cabeçalho precisa reservar laranja para a ação principal.");

requireText(loginPage, 'bg-[#0d0e11]', "Login voltou a usar uma página predominantemente clara.");
requireText(loginPage, "Entre no seu workspace.", "Login perdeu a linguagem de produto/workspace definida.");
requireText(loginPage, 'border-l-2 border-brand-500', "Login perdeu a hierarquia editorial laranja discreta.");
requireText(accountOverview, 'bg-[#0d0e11]', "Visão geral da conta voltou para uma superfície clara.");
requireText(accountOverview, 'grid gap-px overflow-hidden border border-white/[0.08]', "Métricas da conta perderam a grade reta definida.");
requireText(accountLoading, "sm:grid-cols-3", "Loading da conta deixou de acompanhar as três métricas do workspace enxuto.");
forbidText(accountLoading, "xl:grid-cols-4", "Loading da conta voltou ao desenho antigo de quatro métricas.");
requireText(accountNav, 'border-y border-white/[0.09]', "Navegação da conta voltou a usar um cartão arredondado.");
requireText(accountNav, 'h-[2px] bg-brand-500', "Navegação da conta perdeu o marcador ativo discreto.");

for (const required of [
  'bg-[#121316]',
  'bg-[#0b0c0f]',
  "bg-brand-500",
  'bg-[#101114]',
  "border-white/[0.09]",
]) {
  requireText(proVariations, required, `Laboratório Pro perdeu o tema grafite nativo: ${required}.`);
}
forbidText(proVariations, 'bg-[#f7f7f4]', "Laboratório Pro voltou a usar empty state claro.");

requireText(generatorGate, 'bg-[#121316] text-white', "Gate de acesso dos geradores voltou a uma superfície clara.");
requireText(generatorGate, "Entre para usar este gerador.", "Gate dos geradores perdeu a linguagem objetiva definida.");
requireText(generatorGate, 'divide-y divide-white/[0.08]', "Gate dos geradores voltou a listar benefícios como pills/cards.");

requireText(toolsHub, 'id="geradores"', "/ferramentas perdeu a biblioteca de geradores.");
requireText(channelDock, "data-channel-side-dock", "A navegação lateral precisa manter um marcador estável para auditoria visual.");
requireText(channelDock, 'bottom-0 left-0 top-[72px]', "Canais deixaram de usar a rail lateral integrada ao produto.");
requireText(channelDock, 'w-[58px]', "Rail lateral perdeu a largura compacta definida.");
requireText(channelDock, "Abrir gerador", "A rail lateral precisa abrir contexto antes de navegar para o canal.");
requireText(channelDock, "bg-brand-500", "Canal ativo precisa manter um marcador laranja discreto.");
requireText(channelShowcase, "ChannelCompactBar", "Telas menores perderam o fallback compacto de canais.");
requireText(channelShowcase, "divide-x", "Canais compactos precisam manter separação reta no mobile.");

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
  console.error("\nFalhas na auditoria de UI:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `UI OK: ${generatorPaths.length} landings, ${guidePaths.length} guias, shell grafite, acabamento final protegido, fluxo de criação integralmente escuro, Pro nativamente escuro, gates/login/workspace profissionais e navegação de 6 canais preservados.`,
);
