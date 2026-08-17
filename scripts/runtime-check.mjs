const BASE_URL = (process.env.BASE_URL ?? "http://127.0.0.1:3000").replace(/\/$/, "");
const PRODUCTION_URL = "https://anunciaai.vercel.app";
const ADSENSE_SCRIPT = "pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2381421388873161";
const ADS_TXT = "google.com, pub-2381421388873161, DIRECT, f08c47fec0942fa0";

const failures = [];

function fail(message) {
  failures.push(message);
}

function normalizeUrl(value) {
  return value.length > 1 && value.endsWith("/") ? value.slice(0, -1) : value;
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function extractTagAttribute(html, tagPattern, attribute) {
  const tag = html.match(tagPattern)?.[0];
  if (!tag) return null;
  const match = tag.match(new RegExp(`${attribute}=["']([^"']+)["']`, "i"));
  return match ? decodeHtml(match[1]) : null;
}

function hasFragmentTarget(html, fragment) {
  if (!fragment) return true;
  const decoded = decodeURIComponent(fragment);
  return (
    html.includes(`id="${decoded}"`) ||
    html.includes(`id='${decoded}'`) ||
    html.includes(`name="${decoded}"`) ||
    html.includes(`name='${decoded}'`)
  );
}

function checkJsonLd(route, html) {
  const scripts = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  let valid = 0;

  for (const [index, script] of scripts.entries()) {
    const raw = script[1].trim();
    if (!raw) {
      fail(`${route}: JSON-LD ${index + 1} vazio.`);
      continue;
    }

    try {
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") {
        fail(`${route}: JSON-LD ${index + 1} não contém objeto ou array.`);
        continue;
      }
      valid += 1;
    } catch {
      fail(`${route}: JSON-LD ${index + 1} inválido no HTML renderizado.`);
    }
  }

  return valid;
}

async function fetchText(pathname, init) {
  const response = await fetch(`${BASE_URL}${pathname}`, {
    redirect: "manual",
    ...init,
  });
  const text = await response.text();
  return { response, text };
}

function checkSecurityHeaders(response, route) {
  const expectedHeaders = [
    ["x-content-type-options", "nosniff"],
    ["x-frame-options", "DENY"],
    ["referrer-policy", "strict-origin-when-cross-origin"],
    ["origin-agent-cluster", "?1"],
  ];

  for (const [name, expected] of expectedHeaders) {
    const actual = response.headers.get(name);
    if (actual !== expected) {
      fail(`${route}: header ${name} esperado ${expected}, recebido ${actual ?? "ausente"}.`);
    }
  }

  const hsts = response.headers.get("strict-transport-security") ?? "";
  if (!hsts.includes("max-age=63072000")) {
    fail(`${route}: Strict-Transport-Security ausente ou inesperado.`);
  }

  const csp = response.headers.get("content-security-policy") ?? "";
  for (const directive of ["object-src 'none'", "base-uri 'none'", "frame-ancestors 'none'"]) {
    if (!csp.includes(directive)) {
      fail(`${route}: CSP sem diretiva obrigatória ${directive}.`);
    }
  }
}

function checkHtml(route, html, response) {
  if (response.status !== 200) {
    fail(`${route}: status ${response.status}, esperado 200.`);
    return;
  }

  checkSecurityHeaders(response, route);

  if (!/<html[^>]+lang=["']pt-BR["']/i.test(html)) {
    fail(`${route}: documento sem lang=pt-BR.`);
  }

  if (!/<main\b/i.test(html)) {
    fail(`${route}: HTML renderizado sem <main>.`);
  }

  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (h1Count !== 1) {
    fail(`${route}: esperado exatamente 1 H1, encontrado ${h1Count}.`);
  }

  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim() ?? "";
  if (!title) {
    fail(`${route}: <title> vazio ou ausente.`);
  }

  const description = extractTagAttribute(
    html,
    /<meta\b[^>]*name=["']description["'][^>]*>/i,
    "content",
  );
  if (!description) {
    fail(`${route}: meta description ausente.`);
  } else if (description.length > 160) {
    fail(`${route}: meta description renderizada com ${description.length} caracteres.`);
  }

  const canonical = extractTagAttribute(
    html,
    /<link\b[^>]*rel=["']canonical["'][^>]*>/i,
    "href",
  );
  const expectedCanonical = `${PRODUCTION_URL}${route === "/" ? "" : route}`;
  if (!canonical || normalizeUrl(canonical) !== normalizeUrl(expectedCanonical)) {
    fail(`${route}: canonical esperado ${expectedCanonical}, recebido ${canonical ?? "ausente"}.`);
  }

  const robots = extractTagAttribute(
    html,
    /<meta\b[^>]*name=["']robots["'][^>]*>/i,
    "content",
  );
  if (robots && /noindex/i.test(robots)) {
    fail(`${route}: página pública renderizada com noindex.`);
  }

  const ogUrl = extractTagAttribute(
    html,
    /<meta\b[^>]*property=["']og:url["'][^>]*>/i,
    "content",
  );
  if (ogUrl && normalizeUrl(ogUrl) !== normalizeUrl(expectedCanonical)) {
    fail(`${route}: og:url esperado ${expectedCanonical}, recebido ${ogUrl}.`);
  }
}

async function checkRenderedLinks(renderedPages) {
  const targets = new Map();

  for (const [sourceRoute, html] of renderedPages) {
    for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)) {
      const rawHref = decodeHtml(match[1].trim());
      if (!rawHref || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:") || rawHref.startsWith("javascript:")) {
        continue;
      }

      let targetUrl;
      try {
        targetUrl = new URL(rawHref, `${PRODUCTION_URL}${sourceRoute}`);
      } catch {
        fail(`${sourceRoute}: href inválido no HTML renderizado: ${rawHref}.`);
        continue;
      }

      if (targetUrl.origin !== PRODUCTION_URL) continue;
      if (targetUrl.pathname.startsWith("/api/")) continue;

      const route = targetUrl.pathname || "/";
      const fragment = targetUrl.hash ? targetUrl.hash.slice(1) : "";
      const key = `${route}#${fragment}`;
      if (!targets.has(key)) {
        targets.set(key, { route, fragment, sourceRoute, rawHref });
      }
    }
  }

  let checked = 0;
  for (const target of targets.values()) {
    let targetHtml = renderedPages.get(target.route);
    if (!targetHtml) {
      const { response, text } = await fetchText(target.route);
      if (response.status !== 200) {
        fail(`${target.sourceRoute}: link interno ${target.rawHref} retornou status ${response.status}.`);
        continue;
      }
      targetHtml = text;
      renderedPages.set(target.route, text);
    }

    if (target.fragment && !hasFragmentTarget(targetHtml, target.fragment)) {
      fail(`${target.sourceRoute}: âncora ${target.rawHref} aponta para fragmento inexistente.`);
      continue;
    }

    checked += 1;
  }

  return checked;
}

async function main() {
  const { response: sitemapResponse, text: sitemap } = await fetchText("/sitemap.xml");
  if (sitemapResponse.status !== 200) {
    fail(`/sitemap.xml: status ${sitemapResponse.status}, esperado 200.`);
  }

  const productionUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  if (productionUrls.length === 0) {
    fail("Sitemap sem URLs públicas.");
  }

  const uniqueUrls = new Set(productionUrls);
  if (uniqueUrls.size !== productionUrls.length) {
    fail("Sitemap contém URLs duplicadas.");
  }

  const routes = productionUrls.map((url) => {
    if (!url.startsWith(PRODUCTION_URL)) {
      fail(`Sitemap contém URL fora do domínio oficial: ${url}.`);
      return null;
    }
    return url.slice(PRODUCTION_URL.length) || "/";
  }).filter(Boolean);

  const renderedPages = new Map();
  let jsonLdCount = 0;

  console.log(`Auditoria runtime: ${routes.length} páginas públicas.`);
  for (const route of routes) {
    const { response, text } = await fetchText(route);
    renderedPages.set(route, text);
    checkHtml(route, text, response);
    jsonLdCount += checkJsonLd(route, text);
  }

  const checkedLinks = await checkRenderedLinks(renderedPages);
  console.log(`Links internos/âncoras validados: ${checkedLinks}. JSON-LD válido encontrado: ${jsonLdCount}.`);

  const homeHtml = renderedPages.get("/") ?? "";
  if (!homeHtml.includes(ADSENSE_SCRIPT)) {
    fail("Home sem script esperado do AdSense.");
  }

  const { response: adsResponse, text: adsText } = await fetchText("/ads.txt");
  if (adsResponse.status !== 200 || adsText.trim() !== ADS_TXT) {
    fail("ads.txt ausente ou diferente da autorização esperada do AdSense.");
  }

  const { response: robotsResponse, text: robotsText } = await fetchText("/robots.txt");
  if (robotsResponse.status !== 200) {
    fail(`/robots.txt: status ${robotsResponse.status}, esperado 200.`);
  }
  if (!robotsText.includes("Disallow: /api/")) {
    fail("robots.txt não bloqueia /api/.");
  }
  if (!robotsText.includes(`${PRODUCTION_URL}/sitemap.xml`)) {
    fail("robots.txt não referencia o sitemap oficial.");
  }

  const notFoundRoute = "/__auditoria-pagina-inexistente__";
  const { response: notFoundResponse, text: notFoundHtml } = await fetchText(notFoundRoute);
  if (notFoundResponse.status !== 404) {
    fail(`${notFoundRoute}: status ${notFoundResponse.status}, esperado 404.`);
  } else {
    checkSecurityHeaders(notFoundResponse, notFoundRoute);
    const notFoundRobots = extractTagAttribute(
      notFoundHtml,
      /<meta\b[^>]*name=["']robots["'][^>]*>/i,
      "content",
    );
    if (!notFoundRobots || !/noindex/i.test(notFoundRobots)) {
      fail(`${notFoundRoute}: página 404 sem noindex renderizado.`);
    }
    const notFoundH1Count = (notFoundHtml.match(/<h1\b/gi) ?? []).length;
    if (notFoundH1Count !== 1) {
      fail(`${notFoundRoute}: esperado exatamente 1 H1 na página 404, encontrado ${notFoundH1Count}.`);
    }
  }

  if (failures.length) {
    console.error("\nFalhas na auditoria runtime:");
    for (const message of failures) console.error(`- ${message}`);
    process.exit(1);
  }

  console.log("Runtime OK: HTML, canonicals, links, âncoras, JSON-LD, headers, sitemap, robots, AdSense e página 404 validados.");
}

main().catch((error) => {
  console.error("Falha inesperada na auditoria runtime:", error);
  process.exit(1);
});
