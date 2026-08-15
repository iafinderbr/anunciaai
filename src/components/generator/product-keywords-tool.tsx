"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/copy-button";

type Target = "todos" | "google" | "loja" | "mercado-livre" | "shopee";
type KeywordIntent = "Produto" | "Característica" | "Compra" | "Problema" | "Público";

interface KeywordInput {
  product: string;
  category: string;
  audience: string;
  features: string;
  target: Target;
}

interface KeywordItem {
  term: string;
  intent: KeywordIntent;
}

interface KeywordResult {
  primary: KeywordItem[];
  secondary: KeywordItem[];
  longTail: KeywordItem[];
  negatives: string[];
}

const EXAMPLE_INPUT: KeywordInput = {
  product: "Garrafa térmica de inox 1 litro",
  category: "Garrafas e acessórios",
  audience: "Pessoas que trabalham fora, treinam ou viajam",
  features: "Mantém 12h quente e 24h gelada, tampa antivazamento, sem BPA, resistente e fácil de levar",
  target: "todos",
};

const EMPTY_INPUT: KeywordInput = {
  product: "",
  category: "",
  audience: "",
  features: "",
  target: "todos",
};

const TARGETS: { value: Target; label: string; hint: string }[] = [
  { value: "todos", label: "Todos", hint: "Lista versátil para mais de um canal" },
  { value: "google", label: "Google", hint: "Buscas informativas e comerciais" },
  { value: "loja", label: "Loja virtual", hint: "SEO de categoria e página de produto" },
  { value: "mercado-livre", label: "Mercado Livre", hint: "Termos objetivos usados no marketplace" },
  { value: "shopee", label: "Shopee", hint: "Variações comerciais e de oferta" },
];

const INTENT_STYLES: Record<KeywordIntent, string> = {
  Produto: "bg-sky-50 text-sky-700",
  Característica: "bg-violet-50 text-violet-700",
  Compra: "bg-emerald-50 text-emerald-700",
  Problema: "bg-amber-50 text-amber-700",
  Público: "bg-rose-50 text-rose-700",
};

const STOP_WORDS = new Set([
  "a",
  "as",
  "com",
  "da",
  "das",
  "de",
  "do",
  "dos",
  "e",
  "em",
  "o",
  "os",
  "ou",
  "para",
  "por",
  "que",
  "um",
  "uma",
]);

function clean(value: string) {
  return value.replace(/\s+/g, " ").trim().replace(/[.,;:!?]+$/, "");
}

function lower(value: string) {
  return clean(value).toLocaleLowerCase("pt-BR");
}

function unique(items: KeywordItem[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = lower(item.term);
    if (key.length < 3 || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function parseList(value: string) {
  return value
    .split(/[,;\n|•]+/)
    .map((item) => lower(item))
    .filter((item) => item.length > 2)
    .slice(0, 10);
}

function compactProduct(value: string) {
  const words = lower(value)
    .split(" ")
    .filter((word) => word && !STOP_WORDS.has(word));
  return words.slice(0, 5).join(" ") || lower(value);
}

function shortFeature(value: string) {
  return value.split(" ").slice(0, 5).join(" ");
}

function shortAudience(value: string) {
  return lower(value)
    .replace(/^(pessoas|homens|mulheres|adultos|jovens)\s+que\s+/, "")
    .split(/,|\bou\b/)[0]
    .split(" ")
    .slice(0, 6)
    .join(" ");
}

function createKeywordResult(input: KeywordInput, variation: number): KeywordResult {
  const product = compactProduct(input.product);
  const category = lower(input.category);
  const features = parseList(input.features).map(shortFeature);
  const audience = shortAudience(input.audience);
  const f1 = features[variation % Math.max(features.length, 1)] || "alta qualidade";
  const f2 = features[(variation + 1) % Math.max(features.length, 1)] || "uso diário";
  const f3 = features[(variation + 2) % Math.max(features.length, 1)] || "bom custo benefício";

  const primary = unique([
    { term: product, intent: "Produto" },
    { term: category, intent: "Produto" },
    { term: `${product} ${f1}`, intent: "Característica" },
    { term: `comprar ${product}`, intent: "Compra" },
    { term: `${product} preço`, intent: "Compra" },
  ]).slice(0, 5);

  const channelSecondary: Record<Target, KeywordItem[]> = {
    todos: [
      { term: `${product} online`, intent: "Compra" },
      { term: `${product} promoção`, intent: "Compra" },
    ],
    google: [
      { term: `melhor ${product}`, intent: "Compra" },
      { term: `${product} vale a pena`, intent: "Compra" },
      { term: `como escolher ${product}`, intent: "Problema" },
    ],
    loja: [
      { term: `${category} comprar online`, intent: "Compra" },
      { term: `${product} entrega rápida`, intent: "Compra" },
      { term: `${product} original`, intent: "Produto" },
    ],
    "mercado-livre": [
      { term: `${product} mercado livre`, intent: "Compra" },
      { term: `${product} frete grátis`, intent: "Compra" },
      { term: `${product} pronta entrega`, intent: "Compra" },
    ],
    shopee: [
      { term: `${product} shopee`, intent: "Compra" },
      { term: `${product} promoção`, intent: "Compra" },
      { term: `${product} barato`, intent: "Compra" },
    ],
  };

  const secondary = unique([
    { term: `${product} ${f1}`, intent: "Característica" },
    { term: `${product} ${f2}`, intent: "Característica" },
    { term: `${product} ${f3}`, intent: "Característica" },
    { term: `${category} ${f1}`, intent: "Característica" },
    ...(audience ? [{ term: `${product} para ${audience}`, intent: "Público" as const }] : []),
    ...channelSecondary[input.target],
  ]).slice(0, 8);

  const channelLongTail: Record<Target, KeywordItem[]> = {
    todos: [
      { term: `onde comprar ${product} com bom preço`, intent: "Compra" },
      { term: `${product} de qualidade para uso diário`, intent: "Compra" },
    ],
    google: [
      { term: `qual o melhor ${product} para comprar`, intent: "Compra" },
      { term: `como escolher ${product} de qualidade`, intent: "Problema" },
      { term: `${product} vale a pena para uso diário`, intent: "Problema" },
    ],
    loja: [
      { term: `comprar ${product} online com entrega rápida`, intent: "Compra" },
      { term: `${product} original com garantia`, intent: "Compra" },
    ],
    "mercado-livre": [
      { term: `${product} pronta entrega no mercado livre`, intent: "Compra" },
      { term: `comprar ${product} com frete grátis`, intent: "Compra" },
    ],
    shopee: [
      { term: `${product} barato com cupom shopee`, intent: "Compra" },
      { term: `${product} promoção pronta entrega`, intent: "Compra" },
    ],
  };

  const longTail = unique([
    { term: `${product} com ${f1} e ${f2}`, intent: "Característica" },
    { term: `${product} ${f1} para uso diário`, intent: "Característica" },
    ...(audience
      ? [
          { term: `melhor ${product} para ${audience}`, intent: "Público" as const },
          { term: `${product} com ${f1} para ${audience}`, intent: "Público" as const },
        ]
      : []),
    ...channelLongTail[input.target],
  ]).slice(0, 8);

  const negatives = ["grátis", "download", "usado", "conserto", "manual pdf"].filter((term) => {
    const text = `${input.product} ${input.features}`.toLocaleLowerCase("pt-BR");
    return !text.includes(term);
  });

  return { primary, secondary, longTail, negatives };
}

function KeywordCard({
  index,
  title,
  hint,
  items,
}: {
  index: number;
  title: string;
  hint: string;
  items: KeywordItem[];
}) {
  const copyValue = items.map((item) => item.term).join("\n");
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-6 place-items-center rounded-md bg-brand-50 text-[11px] font-bold text-brand-700">
              {index}
            </span>
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink">{title}</h4>
          </div>
          <p className="mt-1.5 pl-8 text-xs text-muted">{hint}</p>
        </div>
        <CopyButton value={copyValue} label="Copiar seção" />
      </header>

      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item.term}
            className="flex items-center justify-between gap-3 rounded-xl border border-line bg-canvas px-3.5 py-3"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium text-ink-soft">{item.term}</p>
              <span
                className={`mt-1.5 inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${INTENT_STYLES[item.intent]}`}
              >
                {item.intent}
              </span>
            </div>
            <CopyButton value={item.term} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProductKeywordsTool() {
  const [input, setInput] = useState<KeywordInput>(EMPTY_INPUT);
  const [variation, setVariation] = useState(0);
  const [generated, setGenerated] = useState(false);
  const [error, setError] = useState("");
  const result = useMemo(() => createKeywordResult(input, variation), [input, variation]);

  const update = (key: keyof KeywordInput, value: string) => {
    setInput((current) => ({ ...current, [key]: value }));
    setError("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.product.trim().length < 3 || input.category.trim().length < 2 || input.features.trim().length < 10) {
      setError("Preencha o produto, a categoria e pelo menos alguns diferenciais.");
      return;
    }
    setVariation(0);
    setGenerated(true);
  };

  const allKeywords = [...result.primary, ...result.secondary, ...result.longTail]
    .map((item) => item.term)
    .join("\n");

  if (generated) {
    return (
      <div className="animate-fade-up space-y-4">
        <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                ✓ Estratégia pronta
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Suas palavras-chave estão organizadas</h3>
              <p className="mt-1.5 text-sm text-muted">
                Lista criada para <strong className="font-medium text-ink-soft">{input.product}</strong>. Use apenas os
                termos que descrevem o produto com verdade.
              </p>
            </div>
            <CopyButton value={allKeywords} label="Copiar tudo" size="md" variant="solid" />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setVariation((current) => current + 1)}
              className="rounded-xl border border-line-strong bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600"
            >
              Gerar novas variações
            </button>
            <button
              type="button"
              onClick={() => setGenerated(false)}
              className="rounded-xl border border-line-strong bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600"
            >
              Editar informações
            </button>
          </div>
        </div>

        <KeywordCard
          index={1}
          title="Palavras-chave principais"
          hint="Termos centrais para título, categoria e início da descrição"
          items={result.primary}
        />
        <KeywordCard
          index={2}
          title="Palavras-chave secundárias"
          hint="Variações com características, público e intenção comercial"
          items={result.secondary}
        />
        <KeywordCard
          index={3}
          title="Palavras-chave de cauda longa"
          hint="Buscas específicas que revelam melhor o que a pessoa procura"
          items={result.longTail}
        />

        <section className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink">
                Termos negativos para campanhas
              </h4>
              <p className="mt-1.5 text-xs text-muted">
                Sugestões para evitar cliques sem intenção de compra. Revise antes de usar em anúncios pagos.
              </p>
            </div>
            <CopyButton value={result.negatives.join("\n")} label="Copiar termos" />
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {result.negatives.map((term) => (
              <li key={term} className="rounded-full border border-line-strong bg-canvas px-3 py-1.5 text-xs text-muted">
                − {term}
              </li>
            ))}
          </ul>
        </section>

        <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800">
          Esta ferramenta gera ideias com base no seu briefing. Ela não informa volume de busca, concorrência ou
          tendência em tempo real.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-line bg-white p-5 shadow-lift sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Encontre palavras-chave para o produto</h3>
          <p className="mt-1 text-sm text-muted">Preencha o briefing e receba os termos separados por importância.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setInput(EXAMPLE_INPUT);
            setError("");
          }}
          className="rounded-lg border border-line-strong bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-brand-500 hover:text-brand-600"
        >
          Preencher com exemplo
        </button>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="sm:col-span-2 text-sm font-medium text-ink">
          Nome ou tipo de produto <span className="text-brand-600">*</span>
          <input
            className="field mt-1.5"
            value={input.product}
            onChange={(event) => update("product", event.target.value)}
            placeholder="Ex: Garrafa térmica de inox 1 litro"
            maxLength={120}
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Categoria <span className="text-brand-600">*</span>
          <input
            className="field mt-1.5"
            value={input.category}
            onChange={(event) => update("category", event.target.value)}
            placeholder="Ex: Garrafas e acessórios"
            maxLength={80}
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Público-alvo <span className="text-muted">(opcional)</span>
          <input
            className="field mt-1.5"
            value={input.audience}
            onChange={(event) => update("audience", event.target.value)}
            placeholder="Ex: Pessoas que treinam ou viajam"
            maxLength={140}
          />
        </label>
        <label className="sm:col-span-2 text-sm font-medium text-ink">
          Características e diferenciais <span className="text-brand-600">*</span>
          <textarea
            rows={4}
            className="field mt-1.5 resize-y"
            value={input.features}
            onChange={(event) => update("features", event.target.value)}
            placeholder="Ex: tampa antivazamento, aço inox, mantém gelada por 24 horas..."
            maxLength={1000}
          />
          <span className="mt-1.5 block text-xs font-normal text-muted">Separe as características por vírgulas.</span>
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-2.5 text-sm font-medium text-ink">Onde as palavras serão usadas?</legend>
        <div className="grid gap-2 sm:grid-cols-5">
          {TARGETS.map((target) => {
            const active = input.target === target.value;
            return (
              <label
                key={target.value}
                className={`cursor-pointer rounded-xl border px-3 py-3 transition-colors ${
                  active ? "border-brand-500 bg-brand-50" : "border-line-strong bg-white hover:border-brand-300"
                }`}
              >
                <input
                  type="radio"
                  name="target"
                  value={target.value}
                  checked={active}
                  onChange={() => update("target", target.value)}
                  className="sr-only"
                />
                <span className={`block text-sm font-semibold ${active ? "text-brand-700" : "text-ink"}`}>
                  {target.label}
                </span>
                <span className="mt-0.5 block text-[11px] leading-snug text-muted">{target.hint}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {error ? <p className="mt-5 text-sm font-medium text-rose-600">{error}</p> : null}

      <button
        type="submit"
        className="mt-8 w-full rounded-2xl bg-ink px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-600"
      >
        ✨ Gerar palavras-chave grátis
      </button>
      <p className="mt-3 text-center text-xs text-muted">Sem cadastro e sem cartão de crédito.</p>
    </form>
  );
}
