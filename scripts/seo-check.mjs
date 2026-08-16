import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "src", "app");
const SITEMAP_FILE = path.join(APP_DIR, "sitemap.ts");
const ROBOTS_FILE = path.join(APP_DIR, "robots.ts");
const SITE_FILE = path.join(ROOT, "src", "lib", "site.ts");
const ADS_FILE = path.join(ROOT, "public", "ads.txt");

const failures = [];
const warnings = [];

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
  if (route === "/") continue;
  const source = read(file);

  if (!source.includes("alternates") || !source.includes("canonical")) {
    fail(`Página sem canonical explícita: ${route}`);
  }

  if (/robots\s*:\s*\{[^}]*index\s*:\s*false/s.test(source)) {
    fail(`Página pública marcada como noindex: ${route}`);
  }

  if (!source.includes("SiteHeader") || !source.includes("SiteFooter")) {
    warn(`Página sem SiteHeader/SiteFooter compartilhado: ${route}`);
  }
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

console.log(`SEO OK: ${publicRoutes.size} páginas públicas, sitemap e links internos consistentes.`);
