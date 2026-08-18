"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ResultPanel } from "@/components/generator/result-panel";
import { SavedProductControls } from "@/components/generator/saved-product-controls";
import { GENERATION_EVENT } from "@/components/live-stats";
import { EMPTY_INPUT, EXAMPLE_INPUT, generateAd, parseFeatures } from "@/lib/generator";
import { CHANNEL_LABEL, CHANNELS, TONES } from "@/lib/generator-data";
import type { Channel, GeneratedAd, GeneratorInput } from "@/lib/types";

type Status = "form" | "loading" | "result";
type FieldKey = "productName" | "category" | "features";

const LOADING_STEPS = [
  "Lendo as informações do seu produto",
  "Escrevendo título e descrição",
  "Selecionando benefícios e otimizando SEO",
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface GeneratorToolProps {
  lockedChannel?: Channel;
  initialInput?: GeneratorInput;
  exampleInput?: GeneratorInput;
  title?: string;
  subtitle?: string;
}

export function GeneratorTool({
  lockedChannel,
  initialInput,
  exampleInput = EXAMPLE_INPUT,
  title = "Crie seu anúncio",
  subtitle = "Preencha os campos abaixo. Leva menos de um minuto e o resultado sai personalizado.",
}: GeneratorToolProps = {}) {
  const [input, setInput] = useState<GeneratorInput>(
    () => initialInput ?? (lockedChannel ? { ...EMPTY_INPUT, channel: lockedChannel } : EMPTY_INPUT),
  );
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [status, setStatus] = useState<Status>("form");
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<GeneratedAd | null>(null);
  const [variant, setVariant] = useState(0);

  const anchorRef = useRef<HTMLDivElement>(null);
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);

  const update = useCallback((key: keyof GeneratorInput, value: string) => {
    setInput((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }, []);

  const applySavedProduct = useCallback(
    (nextInput: GeneratorInput) => {
      setInput(lockedChannel ? { ...nextInput, channel: lockedChannel } : nextInput);
      setErrors({});
    },
    [lockedChannel],
  );

  const persist = useCallback(async (data: GeneratorInput) => {
    try {
      const response = await fetch("/api/generations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ channel: data.channel }),
      });
      const payload = (await response.json().catch(() => null)) as { ok?: boolean } | null;
      if (response.ok && payload?.ok) window.dispatchEvent(new Event(GENERATION_EVENT));
    } catch {
      // A geração já aconteceu no navegador; telemetria não deve quebrar a experiência.
    }
  }, []);

  const runGeneration = useCallback(
    async (data: GeneratorInput, nextVariant: number, fast = false) => {
      setStatus("loading");
      setStep(0);
      anchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

      const pace = fast ? 260 : 520;
      for (let index = 1; index < LOADING_STEPS.length; index += 1) {
        await sleep(pace);
        if (!alive.current) return;
        setStep(index);
      }
      await sleep(pace + (fast ? 120 : 380));
      if (!alive.current) return;

      const generated = generateAd(data, nextVariant);
      setResult(generated);
      setStatus("result");
      void persist(data);
    },
    [persist],
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const nextErrors: Partial<Record<FieldKey, string>> = {};

      if (input.productName.trim().length < 2) nextErrors.productName = "Informe o nome do produto.";
      if (input.category.trim().length < 2) nextErrors.category = "Informe a categoria do produto.";
      if (input.features.trim().length < 10) {
        nextErrors.features = "Descreva pelo menos algumas características (mínimo 10 caracteres).";
      }

      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) {
        requestAnimationFrame(() => document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
        return;
      }

      setVariant(0);
      void runGeneration(input, 0);
    },
    [input, runGeneration],
  );

  const handleRegenerate = useCallback(() => {
    const next = variant + 1;
    setVariant(next);
    void runGeneration(input, next, true);
  }, [input, runGeneration, variant]);

  const handleEdit = useCallback(() => {
    setStatus("form");
    requestAnimationFrame(() => anchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, []);

  const featureCount = parseFeatures(input.features).length;

  return (
    <div ref={anchorRef} className="scroll-mt-24">
      {status === "form" ? (
        <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-line bg-white p-5 shadow-lift sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3>
              <p className="mt-1 text-sm text-muted">{subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setInput(lockedChannel ? { ...exampleInput, channel: lockedChannel } : exampleInput);
                setErrors({});
              }}
              className="rounded-lg border border-line-strong bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-brand-500 hover:text-brand-600"
            >
              Preencher com exemplo
            </button>
          </div>

          <SavedProductControls input={input} lockedChannel={lockedChannel} onApply={applySavedProduct} />

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="productName" className="mb-1.5 block text-sm font-medium text-ink">
                Nome do produto <span className="text-brand-600">*</span>
              </label>
              <input
                id="productName"
                name="productName"
                className="field"
                placeholder="Ex: Tênis masculino casual"
                value={input.productName}
                onChange={(event) => update("productName", event.target.value)}
                aria-invalid={Boolean(errors.productName)}
                aria-describedby={errors.productName ? "productName-error" : undefined}
                maxLength={120}
              />
              {errors.productName ? <p id="productName-error" className="mt-1.5 text-xs font-medium text-rose-600">{errors.productName}</p> : null}
            </div>

            <div>
              <label htmlFor="category" className="mb-1.5 block text-sm font-medium text-ink">
                Categoria <span className="text-brand-600">*</span>
              </label>
              <input
                id="category"
                name="category"
                className="field"
                placeholder="Ex: Calçados"
                value={input.category}
                onChange={(event) => update("category", event.target.value)}
                aria-invalid={Boolean(errors.category)}
                aria-describedby={errors.category ? "category-error" : undefined}
                maxLength={80}
              />
              {errors.category ? <p id="category-error" className="mt-1.5 text-xs font-medium text-rose-600">{errors.category}</p> : null}
            </div>

            <div>
              <label htmlFor="price" className="mb-1.5 block text-sm font-medium text-ink">
                Preço <span className="text-muted">(opcional)</span>
              </label>
              <input
                id="price"
                name="price"
                inputMode="decimal"
                className="field"
                placeholder="Ex: R$ 149,90"
                value={input.price}
                onChange={(event) => update("price", event.target.value)}
                maxLength={30}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="audience" className="mb-1.5 block text-sm font-medium text-ink">
                Público-alvo <span className="text-muted">(opcional)</span>
              </label>
              <input
                id="audience"
                name="audience"
                className="field"
                placeholder="Ex: Homens de 18 a 35 anos"
                value={input.audience}
                onChange={(event) => update("audience", event.target.value)}
                maxLength={120}
              />
            </div>

            <div className="sm:col-span-2">
              <div className="mb-1.5 flex items-baseline justify-between gap-2">
                <label htmlFor="features" className="block text-sm font-medium text-ink">
                  Características do produto <span className="text-brand-600">*</span>
                </label>
                <span className="text-xs text-muted">
                  {featureCount > 0
                    ? `${featureCount} característica${featureCount > 1 ? "s" : ""} detectada${featureCount > 1 ? "s" : ""}`
                    : "separe por vírgulas"}
                </span>
              </div>
              <textarea
                id="features"
                name="features"
                rows={4}
                className="field resize-y"
                placeholder="Ex: Leve, confortável, solado antiderrapante, disponível nas cores preto e branco..."
                value={input.features}
                onChange={(event) => update("features", event.target.value)}
                aria-invalid={Boolean(errors.features)}
                aria-describedby={errors.features ? "features-error" : undefined}
                maxLength={1200}
              />
              {errors.features ? <p id="features-error" className="mt-1.5 text-xs font-medium text-rose-600">{errors.features}</p> : null}
            </div>
          </div>

          {lockedChannel ? (
            <div className="mt-7 flex flex-wrap items-center gap-3 rounded-xl border border-line bg-canvas px-4 py-3">
              <span className="text-sm font-medium text-ink">Onde você vai vender?</span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-ink px-3 py-1.5 text-sm font-semibold text-white">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-500" />
                {CHANNEL_LABEL[lockedChannel]}
              </span>
              <span className="text-xs text-muted">{CHANNELS.find((channel) => channel.value === lockedChannel)?.hint}</span>
            </div>
          ) : (
            <fieldset className="mt-7">
              <legend className="mb-2.5 text-sm font-medium text-ink">Onde você vai vender?</legend>
              <div className="flex flex-wrap gap-2">
                {CHANNELS.map((channel) => {
                  const active = input.channel === channel.value;
                  return (
                    <label
                      key={channel.value}
                      className={`cursor-pointer rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand-500 ${
                        active
                          ? "border-ink bg-ink text-white"
                          : "border-line-strong bg-white text-ink-soft hover:border-brand-500 hover:text-brand-600"
                      }`}
                    >
                      <input
                        type="radio"
                        name="channel"
                        value={channel.value}
                        checked={active}
                        onChange={() => update("channel", channel.value)}
                        className="sr-only"
                      />
                      {channel.label}
                    </label>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-muted">{CHANNELS.find((channel) => channel.value === input.channel)?.hint}</p>
            </fieldset>
          )}

          <fieldset className="mt-6">
            <legend className="mb-2.5 text-sm font-medium text-ink">Tom do anúncio</legend>
            <div className="grid gap-2 sm:grid-cols-4">
              {TONES.map((tone) => {
                const active = input.tone === tone.value;
                return (
                  <label
                    key={tone.value}
                    className={`cursor-pointer rounded-xl border px-3.5 py-3 transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand-500 ${
                      active ? "border-brand-500 bg-brand-50" : "border-line-strong bg-white hover:border-line-strong hover:bg-canvas"
                    }`}
                  >
                    <input
                      type="radio"
                      name="tone"
                      value={tone.value}
                      checked={active}
                      onChange={() => update("tone", tone.value)}
                      className="sr-only"
                    />
                    <span className={`block text-sm font-semibold ${active ? "text-brand-700" : "text-ink"}`}>{tone.label}</span>
                    <span className="mt-0.5 block text-xs text-muted">{tone.hint}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <button type="submit" className="mt-8 w-full rounded-2xl bg-ink px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-600">
            ✨ Gerar anúncio
          </button>
          <p className="mt-3 text-center text-xs text-muted">Grátis, sem cadastro e sem cartão de crédito. Você recebe o resultado nesta mesma página.</p>
        </form>
      ) : null}

      {status === "loading" ? (
        <div className="rounded-3xl border border-line bg-white p-8 shadow-lift" role="status" aria-live="polite">
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-line loading-bar" />
          <h3 className="mt-6 text-xl font-semibold tracking-tight">Gerando seu anúncio…</h3>
          <p className="mt-1 text-sm text-muted">Estamos montando título, descrição, benefícios e SEO para {input.productName || "o seu produto"}.</p>
          <ul className="mt-6 space-y-3">
            {LOADING_STEPS.map((label, index) => {
              const done = index < step;
              const current = index === step;
              return (
                <li key={label} className="flex items-center gap-3 text-sm">
                  <span
                    className={`grid size-5 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
                      done ? "bg-emerald-100 text-emerald-700" : current ? "bg-brand-100 text-brand-700" : "bg-line text-muted"
                    }`}
                  >
                    {done ? "✓" : index + 1}
                  </span>
                  <span className={done || current ? "text-ink-soft" : "text-muted"}>{label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      {status === "result" && result ? (
        <ResultPanel result={result} input={input} onRegenerate={handleRegenerate} onEdit={handleEdit} />
      ) : null}
    </div>
  );
}
