import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "src", "app");
const SITEMAP_FILE = path.join(APP_DIR, "sitemap.ts");
const ROBOTS_FILE = path.join(APP_DIR, "robots.ts");
const LAYOUT_FILE = path.join(APP_DIR, "layout.tsx");
const SITE_FILE = path.join(ROOT, "src", "lib", "site.ts");
const SITE_HEADER_FILE = path.join(ROOT, "src", "components", "site-header.tsx");
const ADS_FILE = path.join(ROOT, "public", "ads.txt");
const HOME_GUIDES_FILE = path.join(ROOT, "src", "components", "sections", "guides-home.tsx");
const GUIDES_HUB_FILE = path.join(APP_DIR, "guias", "page.tsx");
const TOOLS_FILE = path.join(ROOT, "src", "components", "sections", "tools.tsx");
const FOOTER_FILE = path.join(ROOT, "src", "components", "sections", "pricing.tsx");

const failures = [];
const warnings = [];
const metadataTitles = new Map();

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function routeFromPage(file) {
  const relative = path.relative(APP_DIR, path.dirname(file)).replaceAll(path.sep, "/");
  return relative === "" ? "/" : `/${relative}`;
}

function normalizeInternalHref(href) {
  if (!href.startsWith("/") || href.startsWith("//")) return null;
  const withoutQuery = href.split("?")[0];
  const withoutHash = withoutQuery.split("#")[0];
  return withoutHash || "/";
}

function sourceReferencesRoute(source, route) {
  return source.includes(`"${route}"`) || source.includes(`'${route}'`);
}

function extractConstString(source, name) {
  return source.match(new RegExp(`const\\s+${name}\\s*=\\s*[\"'\`]([^\"'\`]+)[\"'\`]`, "s"))?.[1] ?? null;
}

const allFiles = walk(APP_DIR);
const publicPages = allFiles
  .filter((file) => file.endsWith(`${path.sep}page.tsx`) || file === path.join(APP_DIR, "page.tsx"))
  .filter((file) => !file.includes(`${path.sep}api${path.sep}`));

const routeToFile = new Map(publicPages.map((file) => [routeFromPage(file), file]));
const publicRoutes = new Set(routeToFile.keys());

const sitemapSource = read(SITEMAP_FILE);
const pathsMatch = sitemapSource.match(/const paths = \[(.*?)\];/s);
if (!pathsMatch) {
  fail("Não foi possível localizar o array `paths` em src/app/sitemap.ts.");
} else {
  const sitemapPaths = [...pathsMatch[1].matchAll(/["']([^"']*)["']/g)].map((match) => match[1]);
  const sitemapRoutes = new Set(sitemapPaths.map((item) => item || "/"));

  if (sitemapRoutes.size !== sitemapPaths.length) {
    fail("O sitemap contém uma ou mais rotas duplicadas.");
  }

  for (const route of publicRoutes) {
    if (!sitemapRoutes.has(route)) {
      fail(`Página pública fora do sitemap: ${route}`);
    }
  }

  for (const route of sitemapRoutes) {
    if (!publicRoutes.has(route)) {
      fail(`Rota do sitemap sem page.tsx correspondente: ${route}`);
    }
  }
}

for (const [route, file] of routeToFile) {
  const source = read(file);

  if (!source.includes("<h1")) {
    fail(`Página pública sem H1 próprio: ${route}`);
  }

  if (!source.includes("<main")) {
    warn(`Página sem elemento <main>: ${route}`);
  }

  if (route === "/") continue;

  if (!/export\s+const\s+metadata\s*:\s*Metadata\s*=/.test(source)) {
    fail(`Página sem metadata própria tipada: ${route}`);
  }

  if (!/\btitle\s*:/.test(source)) {
    fail(`Página sem título de metadata: ${route}`);
  }

  if (!/\bdescription\s*:/.test(source)) {
    fail(`Página sem description de metadata: ${route}`);
  }

  if (!source.includes("alternates") || !source.includes("canonical")) {
    fail(`Página sem canonical explícita: ${route}`);
  }

  if (/robots\s*:\s*\{[^}]*index\s*:\s*false/s.test(source)) {
    fail(`Página pública marcada como noindex: ${route}`);
  }

  const declaredPath = source.match(/const\s+PATH\s*=\s*["']([^"']+)["']/)?.[1];
  if (declaredPath && declaredPath !== route) {
    fail(`PATH declarado não corresponde à rota ${route}: ${declaredPath}`);
  }

  const metadataTitle = extractConstString(source, "TITLE");
  if (metadataTitle) {
    if (metadataTitle.length < 30) {
      warn(`Title possivelmente curto em ${route}: ${metadataTitle.length} caracteres.`);
    }
    if (metadataTitle.length > 60) {
      warn(`Title possivelmente longo em ${route}: ${metadataTitle.length} caracteres.`);
    }

    const routesForTitle = metadataTitles.get(metadataTitle) ?? [];
    routesForTitle.push(route);
    metadataTitles.set(metadataTitle, routesForTitle);
  }

  const metadataDescription = extractConstString(source, "DESCRIPTION");
  if (metadataDescription) {
    if (metadataDescription.length < 90) {
      warn(`Description possivelmente curta em ${route}: ${metadataDescription.length} caracteres.`);
    }
    if (metadataDescription.length > 160) {
      fail(`Description longa demais em ${route}: ${metadataDescription.length} caracteres.`);
    }
  }

  if (!source.includes("SiteHeader") || !source.includes("SiteFooter")) {
    warn(`Página sem SiteHeader/SiteFooter compartilhado: ${route}`);
  }
}

for (const [title, routes] of metadataTitles) {
  if (routes.length > 1) {
    warn(`Title duplicado (${routes.join(", ")}): ${title}`);
  }
}

const homeGuidesSource = read(HOME_GUIDES_FILE);
const guidesHubSource = read(GUIDES_HUB_FILE);
const toolsSource = read(TOOLS_FILE);
const footerSource = read(FOOTER_FILE);

const guideRoutes = [...publicRoutes].filter(
  (route) => route.startsWith("/como-") || route === "/seo-para-pagina-de-produto",
);
for (const route of guideRoutes) {
  if (!sourceReferencesRoute(homeGuidesSource, route)) {
    fail(`Guia sem link direto na seção de guias da home: ${route}`);
  }

  if (!sourceReferencesRoute(guidesHubSource, route)) {
    fail(`Guia ausente da central /guias: ${route}`);
  }

  const guideFile = routeToFile.get(route);
  const guideSource = guideFile ? read(guideFile) : "";
  if (!guideSource.includes("/gerador-")) {
    fail(`Guia sem caminho direto para uma ferramenta: ${route}`);
  }

  const publishedAt = extractConstString(guideSource, "PUBLISHED_AT");
  const updatedAt = extractConstString(guideSource, "UPDATED_AT");
  if (!publishedAt) {
    warn(`Guia sem PUBLISHED_AT verificável: ${route}`);
  } else {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(publishedAt)) {
      warn(`PUBLISHED_AT fora do padrão YYYY-MM-DD: ${route}`);
    }

    if (!guideSource.includes("datePublished: PUBLISHED_AT")) {
      warn(`Guia com PUBLISHED_AT, mas sem datePublished padronizado no Article: ${route}`);
    }

    const expectedModifiedConst = updatedAt ? "UPDATED_AT" : "PUBLISHED_AT";
    if (!guideSource.includes(`dateModified: ${expectedModifiedConst}`)) {
      warn(`Guia sem dateModified padronizado com ${expectedModifiedConst}: ${route}`);
    }

    if (!guideSource.includes("publishedTime:")) {
      warn(`Guia com PUBLISHED_AT, mas sem publishedTime no Open Graph: ${route}`);
    }
    if (!guideSource.includes("modifiedTime:")) {
      warn(`Guia com PUBLISHED_AT, mas sem modifiedTime no Open Graph: ${route}`);
    }
  }

  if (updatedAt && !/^\d{4}-\d{2}-\d{2}$/.test(updatedAt)) {
    warn(`UPDATED_AT fora do padrão YYYY-MM-DD: ${route}`);
  }
  if (publishedAt && updatedAt && updatedAt < publishedAt) {
    fail(`UPDATED_AT anterior a PUBLISHED_AT em ${route}.`);
  }

  if (!guideSource.includes('name: "Guias"') || !guideSource.includes('`${SITE_URL}/guias`')) {
    fail(`Guia sem /guias na trilha estruturada de BreadcrumbList: ${route}`);
  }
}

const generatorRoutes = [...publicRoutes].filter((route) => route.startsWith("/gerador-"));
for (const route of generatorRoutes) {
  if (!sourceReferencesRoute(toolsSource, route)) {
    fail(`Gerador sem link na seção principal de ferramentas: ${route}`);
  }
}

for (const route of ["/sobre", "/privacidade", "/termos"]) {
  if (!sourceReferencesRoute(footerSource, route)) {
    fail(`Página institucional sem link no rodapé: ${route}`);
  }
}

const layoutSource = read(LAYOUT_FILE);
const siteHeaderSource = read(SITE_HEADER_FILE);
if (!layoutSource.includes('href="#inicio-conteudo"')) {
  fail("O skip link global não aponta para #inicio-conteudo.");
}
if (!siteHeaderSource.includes('id="inicio-conteudo"')) {
  fail("O SiteHeader não fornece o alvo #inicio-conteudo para o skip link global.");
}

const siteSource = read(SITE_FILE);
if (!siteSource.includes("https://anunciaai.vercel.app")) {
  fail("SITE_URL não aponta para https://anunciaai.vercel.app.");
}

const robotsSource = read(ROBOTS_FILE);
if (!robotsSource.includes('disallow: "/api/"')) {
  fail("robots.ts não bloqueia /api/ para crawlers.");
}
if (!robotsSource.includes("/sitemap.xml")) {
  fail("robots.ts não referencia o sitemap.xml.");
}

const adsSource = read(ADS_FILE).trim();
const expectedAdsLine = "google.com, pub-2381421388873161, DIRECT, f08c47fec0942fa0";
if (adsSource !== expectedAdsLine) {
  fail("public/ads.txt não contém exatamente a autorização esperada do AdSense.");
}

const sourceFiles = [
  ...walk(path.join(ROOT, "src")).filter((file) => /\.(ts|tsx|js|jsx|mjs)$/.test(file)),
];

const forbiddenPatterns = [
  ["example.com", /example\.com/i],
  ["localhost:3000", /localhost:3000/i],
  ["FAQPage", /["']@type["']\s*:\s*["']FAQPage["']/],
  ["HowTo", /["']@type["']\s*:\s*["']HowTo["']/],
  ["link HTTP inseguro", /(?:href\s*=\s*["']|href\s*:\s*["'])http:\/\//i],
];

for (const file of sourceFiles) {
  const source = read(file);
  const relative = path.relative(ROOT, file).replaceAll(path.sep, "/");

  for (const [label, pattern] of forbiddenPatterns) {
    if (pattern.test(source)) {
      fail(`Padrão indesejado ${label} encontrado em ${relative}.`);
    }
  }

  const hrefRegex = /(?:href\s*=\s*["']|href\s*:\s*["'])(\/[^"']*)["']/g;
  for (const match of source.matchAll(hrefRegex)) {
    const route = normalizeInternalHref(match[1]);
    if (!route || route.startsWith("/api/")) continue;
    if (!publicRoutes.has(route)) {
      fail(`Link interno aponta para rota inexistente em ${relative}: ${match[1]}`);
    }
  }
}

if (warnings.length) {
  console.warn("\nAvisos de SEO:");
  for (const message of warnings) console.warn(`- ${message}`);
}

if (failures.length) {
  console.error("\nFalhas na auditoria de SEO:");
  for (const message of failures) console.error(`- ${message}`);
  process.exit(1);
}

console.log(
  `SEO OK: ${publicRoutes.size} páginas públicas, ${guideRoutes.length} guias e ${generatorRoutes.length} geradores com descoberta e conversão interna validadas.`,
);
