const BASE_URL = (process.env.BASE_URL ?? "http://127.0.0.1:3000").replace(/\/$/, "");
const PRODUCTION_URL = "https://anunciaai.vercel.app";
const failures = [];

function fail(message) {
  failures.push(message);
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function visibleText(fragment) {
  return decodeHtml(fragment)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg\b[^>]*aria-hidden=["']true["'][^>]*>[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}=["']([^"']*)["']`, "i"));
  return match ? decodeHtml(match[1]) : null;
}

function hasAccessibleName(openingTag, innerHtml, idsToText) {
  const ariaLabel = attribute(openingTag, "aria-label");
  if (ariaLabel?.trim()) return true;

  const labelledBy = attribute(openingTag, "aria-labelledby");
  if (labelledBy) {
    const text = labelledBy
      .split(/\s+/)
      .map((id) => idsToText.get(id) ?? "")
      .join(" ")
      .trim();
    if (text) return true;
  }

  const title = attribute(openingTag, "title");
  if (title?.trim()) return true;

  if (visibleText(innerHtml)) return true;

  for (const img of innerHtml.matchAll(/<img\b[^>]*>/gi)) {
    const alt = attribute(img[0], "alt");
    if (alt?.trim()) return true;
  }

  const svgTitle = innerHtml.match(/<svg\b[^>]*>[\s\S]*?<title\b[^>]*>([\s\S]*?)<\/title>[\s\S]*?<\/svg>/i)?.[1];
  return Boolean(svgTitle && visibleText(svgTitle));
}

function collectIds(html, route) {
  const counts = new Map();
  const idsToText = new Map();

  for (const match of html.matchAll(/<([a-z][\w:-]*)\b[^>]*\sid=["']([^"']+)["'][^>]*>/gi)) {
    const id = decodeHtml(match[2]);
    counts.set(id, (counts.get(id) ?? 0) + 1);
  }

  for (const match of html.matchAll(/<([a-z][\w:-]*)\b([^>]*)\sid=["']([^"']+)["']([^>]*)>([\s\S]*?)<\/\1>/gi)) {
    const id = decodeHtml(match[3]);
    if (!idsToText.has(id)) idsToText.set(id, visibleText(match[5]));
  }

  for (const [id, count] of counts) {
    if (count > 1) fail(`${route}: id duplicado no HTML renderizado: ${id} (${count} ocorrências).`);
  }

  return { ids: new Set(counts.keys()), idsToText };
}

function checkAriaReferences(html, route, ids) {
  for (const name of ["aria-labelledby", "aria-describedby", "aria-controls"]) {
    const regex = new RegExp(`\\s${name}=["']([^"']+)["']`, "gi");
    for (const match of html.matchAll(regex)) {
      const references = decodeHtml(match[1]).trim().split(/\s+/).filter(Boolean);
      for (const id of references) {
        if (!ids.has(id)) fail(`${route}: ${name} aponta para id inexistente: ${id}.`);
      }
    }
  }
}

function checkImages(html, route) {
  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    if (attribute(match[0], "alt") === null) {
      fail(`${route}: imagem renderizada sem atributo alt.`);
    }
  }
}

function checkInteractiveNames(html, route, idsToText) {
  for (const match of html.matchAll(/<(button|a)\b([^>]*)>([\s\S]*?)<\/\1>/gi)) {
    const tagName = match[1].toLowerCase();
    const openingTag = `<${match[1]}${match[2]}>`;
    const innerHtml = match[3];

    if (tagName === "a" && !attribute(openingTag, "href")) continue;
    if (!hasAccessibleName(openingTag, innerHtml, idsToText)) {
      const href = tagName === "a" ? attribute(openingTag, "href") : null;
      fail(`${route}: ${tagName}${href ? ` para ${href}` : ""} sem nome acessível detectável.`);
    }
  }
}

function checkFormControls(html, route) {
  const labelledIds = new Set();
  const wrappedControls = new Set();

  for (const label of html.matchAll(/<label\b([^>]*)>([\s\S]*?)<\/label>/gi)) {
    const openingTag = `<label${label[1]}>`;
    const htmlFor = attribute(openingTag, "for");
    if (htmlFor) labelledIds.add(htmlFor);

    for (const control of label[2].matchAll(/<(input|select|textarea)\b[^>]*>/gi)) {
      wrappedControls.add(control[0]);
    }
  }

  for (const match of html.matchAll(/<(input|select|textarea)\b[^>]*>/gi)) {
    const tagName = match[1].toLowerCase();
    const openingTag = match[0];
    const type = (attribute(openingTag, "type") ?? "").toLowerCase();

    if (tagName === "input" && type === "hidden") continue;

    const ariaLabel = attribute(openingTag, "aria-label");
    const labelledBy = attribute(openingTag, "aria-labelledby");
    const title = attribute(openingTag, "title");
    const id = attribute(openingTag, "id");
    const value = attribute(openingTag, "value");
    const name = attribute(openingTag, "name");

    if (tagName === "input" && type === "radio" && !name?.trim()) {
      fail(`${route}: radio${id ? `#${id}` : ""} sem atributo name para agrupamento.`);
    }

    const namedByInputValue = tagName === "input" && ["button", "submit", "reset"].includes(type) && Boolean(value?.trim());
    const named =
      Boolean(ariaLabel?.trim()) ||
      Boolean(labelledBy?.trim()) ||
      Boolean(title?.trim()) ||
      Boolean(id && labelledIds.has(id)) ||
      wrappedControls.has(openingTag) ||
      namedByInputValue;

    if (!named) {
      fail(`${route}: campo ${tagName}${id ? `#${id}` : ""} sem rótulo acessível detectável.`);
    }
  }
}

function checkLandmarksAndSkipLink(html, route, ids) {
  const mainCount = (html.match(/<main\b/gi) ?? []).length;
  if (mainCount !== 1) {
    fail(`${route}: esperado exatamente um elemento main, encontrado ${mainCount}.`);
  }

  let skipLinkFound = false;
  for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const text = visibleText(match[2]);
    if (text !== "Pular para o conteúdo principal") continue;

    skipLinkFound = true;
    const openingTag = `<a${match[1]}>`;
    const href = attribute(openingTag, "href");
    if (!href?.startsWith("#") || href.length < 2) {
      fail(`${route}: link de salto não aponta para um fragmento local válido.`);
      continue;
    }

    const target = href.slice(1);
    if (!ids.has(target)) {
      fail(`${route}: link de salto aponta para id inexistente: ${target}.`);
    }
  }

  if (!skipLinkFound) {
    fail(`${route}: link "Pular para o conteúdo principal" não encontrado.`);
  }
}

function checkDocument(route, html) {
  const { ids, idsToText } = collectIds(html, route);
  checkAriaReferences(html, route, ids);
  checkImages(html, route);
  checkInteractiveNames(html, route, idsToText);
  checkFormControls(html, route);
  checkLandmarksAndSkipLink(html, route, ids);
}

async function fetchText(pathname) {
  const response = await fetch(`${BASE_URL}${pathname}`, { redirect: "manual" });
  return { response, text: await response.text() };
}

async function main() {
  const { response: sitemapResponse, text: sitemap } = await fetchText("/sitemap.xml");
  if (sitemapResponse.status !== 200) {
    fail(`/sitemap.xml: status ${sitemapResponse.status}, esperado 200.`);
  }

  const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => decodeHtml(match[1]))
    .map((url) => {
      if (!url.startsWith(PRODUCTION_URL)) {
        fail(`Sitemap contém URL fora do domínio oficial: ${url}.`);
        return null;
      }
      return url.slice(PRODUCTION_URL.length) || "/";
    })
    .filter(Boolean);

  console.log(`Acessibilidade runtime: ${routes.length} páginas públicas.`);
  for (const route of routes) {
    const { response, text } = await fetchText(route);
    if (response.status !== 200) {
      fail(`${route}: status ${response.status}, esperado 200.`);
      continue;
    }
    checkDocument(route, text);
  }

  const notFoundRoute = "/__auditoria-a11y-pagina-inexistente__";
  const { response: notFoundResponse, text: notFoundHtml } = await fetchText(notFoundRoute);
  if (notFoundResponse.status !== 404) {
    fail(`${notFoundRoute}: status ${notFoundResponse.status}, esperado 404.`);
  } else {
    checkDocument(notFoundRoute, notFoundHtml);
  }

  if (failures.length) {
    console.error("\nFalhas na auditoria de acessibilidade:");
    for (const message of failures) console.error(`- ${message}`);
    process.exit(1);
  }

  console.log("Acessibilidade OK: landmarks, link de salto, ids, referências ARIA, alt, nomes interativos, grupos de radio e rótulos de formulários validados.");
}

main().catch((error) => {
  console.error("Falha inesperada na auditoria de acessibilidade:", error);
  process.exit(1);
});
