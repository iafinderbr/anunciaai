"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/copy-button";

type Target = "todos" | "google" | "loja" | "mercado-livre" | "shopee";
type KeywordSource = "Produto" | "Categoria" | "Característica" | "Público" | "Canal";

interface KeywordInput {
  product: string;
  category: string;
  audience: string;
  features: string;
  target: Target;
}

interface KeywordItem {
  term: string;
  source: KeywordSource;
}

interface KeywordResult {
  primary: KeywordItem[];
  secondary: KeywordItem[];
  longTail: KeywordItem[];
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
  { value: "todos", label: "Geral", hint: "Combinações neutras para revisar e adaptar" },
  { value: "google", label: "Google", hint: "Sugestões para conteúdo e página de produto" },
  { value: "loja", label: "Loja virtual", hint: "Combinações para categoria e página de produto" },
  { value: "mercado-livre", label: "Mercado Livre", hint: "Termos com produto, categoria e características" },
  { value: "shopee", label: "Shopee", hint: "Termos com produto, categoria e características" },
];

const SOURCE_STYLES: Record<KeywordSource, string> = {
  Produto: "bg-sky-50 text-sky-700",
  Categoria: "bg-cyan-50 text-cyan-700",
  Característica: "bg-violet-50 text-violet-700",
  Público: "bg-rose-50 text-rose-700",
  Canal: "bg-amber-50 text-amber-700",
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
  return words.slice(0, 6).join(" ") || lower(value);
}

function shortFeature(value: string) {
  return value.split(" ").slice(0, 6).join(" ");
}

function shortAudience(value: string) {
  return lower(value)
    .split(/,|\bou\b/)[0]
    .split(" ")
    .slice(0, 7)
    .join(" ");
}

function channelTerms(target: Target, product: string): KeywordItem[] {
  if (target === "mercado-livre") {
    return [{ term: `${product} mercado livre`, source: "Canal" }];
  }
  if (target === "shopee") {
    return [{ term: `${product} shopee`, source: "Canal" }];
  }
  return [];
}

function createKeywordResult(input: KeywordInput, variation: number): KeywordResult {
  const product = compactProduct(input.product);
  const category = lower(input.category);
  const features = parseList(input.features).map(shortFeature);
  const audience = shortAudience(input.audience);
  const safeFeature = (offset: number) =>
    features.length > 0 ? features[(variation + offset) % features.length] : "";
  const f1 = safeFeature(0);
  const f2 = safeFeature(1);
  const f3 = safeFeature(2);

  const primary = unique([
    { term: product, source: "Produto" },
    { term: category, source: "Categoria" },
    { term: `${product} ${category}`, source: "Categoria" },
    ...(f1 ? [{ term: `${product} ${f1}`, source: "Característica" as const }] : []),
    ...channelTerms(input.target, product),
  ]).slice(0, 6);

  const secondary = unique([
    ...(f1 ? [{ term: `${product} ${f1}`, source: "Característica" as const }] : []),
    ...(f2 ? [{ term: `${product} ${f2}`, source: "Característica" as const }] : []),
    ...(f3 ? [{ term: `${product} ${f3}`, source: "Característica" as const }] : []),
    ...(f1 ? [{ term: `${category} ${f1}`, source: "Característica" as const }] : []),
    ...(audience ? [{ term: `${product} para ${audience}`, source: "Público" as const }] : []),
    ...channelTerms(input.target, product),
  ]).slice(0, 8);

  const longTail = unique([
    ...(f1 && f2
      ? [{ term: `${product} ${f1} ${f2}`, source: "Característica" as const }]
      : []),
    ...(f1
      ? [{ term: `${product} ${category} ${f1}`, source: "Característica" as const }]
      : []),
    ...(f2
      ? [{ term: `${product} ${category} ${f2}`, source: "Característica" as const }]
      : []),
    ...(audience && f1
      ? [{ term: `${product} ${f1} para ${audience}`, source: "Público" as const }]
      : []),
    ...(audience
      ? [{ term: `${product} para ${audience}`, source: "Público" as const }]
      : []),
    ...channelTerms(input.target, product).map((item) => ({
      ...item,
      term: f1 ? `${item.term} ${f1}` : item.term,
    })),
  ]).slice(0, 8);

  return { primary, secondary, longTail };
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
                className={`mt-1.5 inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${SOURCE_STYLES[item.source]}`}
              >
                {item.source}
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
                ✓ Sugestões organizadas
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Combinações para revisar</h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-6 text-muted">
                Os termos abaixo são montados somente a partir do produto, categoria, público, canal e características que você informou. O AnunciaAI não consulta volume de busca, tendências, concorrência nem dados internos do Google ou dos marketplaces.
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
              Gerar outras combinações
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
          title="Termos principais"
          hint="Produto, categoria e combinação central para você avaliar"
          items={result.primary}
        />
        <KeywordCard
          index={2}
          title="Combinações com características"
          hint="Variações montadas a partir dos diferenciais que você informou"
          items={result.secondary}
        />
        <KeywordCard
          index={3}
          title="Combinações específicas"
          hint="Termos mais longos que juntam produto, características, público ou canal"
          items={result.longTail}
        />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-white p-5 shadow-lift sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Crie sugestões de palavras-chave</h3>
          <p className="mt-1.5 text-sm text-muted">
            Informe o produto e receba combinações derivadas dos dados fornecidos para revisar.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setInput(EXAMPLE_INPUT);
            setGenerated(false);
            setError("");
          }}
          className="rounded-xl border border-line-strong bg-white px-3 py-2 text-xs font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600"
        >
          Preencher exemplo
        </button>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Nome do produto <span className="text-brand-600">*</span>
          <input
            value={input.product}
            onChange={(event) => update("product", event.target.value)}
            className="field mt-1.5"
            placeholder="Ex: Garrafa térmica de inox 1 litro"
          />
        </label>

        <label className="text-sm font-medium text-ink">
          Categoria <span className="text-brand-600">*</span>
          <input
            value={input.category}
            onChange={(event) => update("category", event.target.value)}
            className="field mt-1.5"
            placeholder="Ex: Garrafas e acessórios"
          />
        </label>

        <label className="text-sm font-medium text-ink sm:col-span-2">
          Público <span className="text-xs font-normal text-muted">(opcional)</span>
          <input
            value={input.audience}
            onChange={(event) => update("audience", event.target.value)}
            className="field mt-1.5"
            placeholder="Ex: Pessoas que trabalham fora, treinam ou viajam"
          />
        </label>

        <label className="text-sm font-medium text-ink sm:col-span-2">
          Características e diferenciais <span className="text-brand-600">*</span>
          <textarea
            value={input.features}
            onChange={(event) => update("features", event.target.value)}
            className="field mt-1.5 min-h-28 resize-y"
            placeholder="Ex: mantém 12h quente, tampa antivazamento, sem BPA..."
          />
        </label>
      </div>

      <fieldset className="mt-7">
        <legend className="text-sm font-medium text-ink">Onde você pretende usar as sugestões?</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-5">
          {TARGETS.map((target) => {
            const active = input.target === target.value;
            return (
              <label
                key={target.value}
                className={`cursor-pointer rounded-xl border px-3 py-3 text-center transition-colors ${
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
                <span className="block text-xs font-semibold text-ink">{target.label}</span>
                <span className="mt-1 block text-[10px] leading-4 text-muted">{target.hint}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 rounded-xl border border-line bg-canvas p-4 text-xs leading-5 text-muted">
        Esta ferramenta não mede volume de pesquisa, posição, dificuldade, CPC ou tendências. As sugestões são combinações dos dados fornecidos e devem ser validadas antes do uso.
      </div>

      {error ? <p className="mt-5 text-sm font-medium text-rose-600">{error}</p> : null}

      <button
        type="submit"
        className="mt-8 w-full rounded-2xl bg-ink px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-600"
      >
        Gerar sugestões grátis
      </button>
      <p className="mt-3 text-center text-xs text-muted">Sem cadastro e sem cartão de crédito.</p>
    </form>
  );
}
