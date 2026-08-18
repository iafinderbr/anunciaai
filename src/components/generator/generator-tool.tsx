"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GeneratorAccessGate } from "@/components/auth/generator-access-gate";
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
  subtitle = "Informe os dados essenciais do produto e gere uma primeira versão para revisar.",
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
    <GeneratorAccessGate>
      <div ref={anchorRef} className="scroll-mt-24">
        {status === "form" ? (
          <form onSubmit={handleSubmit} noValidate className="surface-premium overflow-hidden rounded-[1.45rem]">
            <div className="border-b border-line bg-white px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-600">Workspace de criação</p>
                    <span className="rounded-full border border-line bg-canvas px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-muted">Plano Grátis</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">{title}</h3>
                  <p className="mt-1.5 max-w-lg text-sm leading-6 text-muted">{subtitle}</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setInput(lockedChannel ? { ...exampleInput, channel: lockedChannel } : exampleInput);
                    setErrors({});
                  }}
                  className="interactive-lift inline-flex min-h-10 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-white px-3.5 py-2 text-xs font-semibold text-ink-soft hover:border-brand-300 hover:text-brand-700"
                >
                  Usar exemplo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 border-b border-line bg-canvas/55 text-[10px] font-semibold uppercase tracking-[0.09em] text-muted">
              <div className="flex items-center gap-2 border-r border-line px-4 py-3 sm:px-6">
                <span className="grid size-5 place-items-center rounded-full bg-ink text-[9px] text-white">1</span>
                <span className="hidden sm:inline">Produto</span>
              </div>
              <div className="flex items-center gap-2 border-r border-line px-4 py-3 sm:px-6">
                <span className="grid size-5 place-items-center rounded-full border border-line-strong bg-white text-[9px] text-ink-soft">2</span>
                <span className="hidden sm:inline">Publicação</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 sm:px-6">
                <span className="grid size-5 place-items-center rounded-full border border-line-strong bg-white text-[9px] text-ink-soft">3</span>
                <span className="hidden sm:inline">Resultado</span>
              </div>
            </div>

            <div className="px-5 pb-6 pt-1 sm:px-7 sm:pb-7">
              <SavedProductControls input={input} lockedChannel={lockedChannel} onApply={applySavedProduct} />

              <div className="mt-7 flex items-end justify-between gap-4 border-b border-line pb-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.11em] text-brand-600">01 · Produto</p>
                  <p className="mt-1 text-sm font-semibold text-ink">Informações essenciais</p>
                </div>
                <p className="hidden text-xs text-muted sm:block">Campos com * são obrigatórios</p>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="productName" className="mb-1.5 block text-sm font-semibold text-ink">
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
                  <label htmlFor="category" className="mb-1.5 block text-sm font-semibold text-ink">
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
                  <label htmlFor="price" className="mb-1.5 block text-sm font-semibold text-ink">
                    Preço <span className="font-normal text-muted">(opcional)</span>
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
                  <label htmlFor="audience" className="mb-1.5 block text-sm font-semibold text-ink">
                    Público-alvo <span className="font-normal text-muted">(opcional)</span>
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
                    <label htmlFor="features" className="block text-sm font-semibold text-ink">
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

              <div className="mt-8 border-t border-line pt-6">
                <div className="mb-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.11em] text-brand-600">02 · Publicação</p>
                  <p className="mt-1 text-sm font-semibold text-ink">Defina canal e estilo</p>
                </div>

                {lockedChannel ? (
                  <div className="flex flex-wrap items-center gap-3 rounded-xl border border-line bg-canvas/65 px-4 py-3.5">
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Canal</span>
                    <span className="inline-flex items-center gap-2 rounded-lg bg-ink px-3 py-1.5 text-sm font-semibold text-white">
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-500" />
                      {CHANNEL_LABEL[lockedChannel]}
                    </span>
                    <span className="text-xs text-muted">{CHANNELS.find((channel) => channel.value === lockedChannel)?.hint}</span>
                  </div>
                ) : (
                  <fieldset>
                    <legend className="mb-3 text-sm font-semibold text-ink">Onde você vai vender?</legend>
                    <div className="flex flex-wrap gap-2">
                      {CHANNELS.map((channel) => {
                        const active = input.channel === channel.value;
                        return (
                          <label
                            key={channel.value}
                            className={`cursor-pointer rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-all duration-150 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand-500 ${
                              active
                                ? "border-ink bg-ink text-white shadow-card"
                                : "border-line-strong bg-white text-ink-soft hover:border-brand-300 hover:bg-brand-50/40 hover:text-brand-700"
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
                    <p className="mt-2.5 text-xs leading-5 text-muted">{CHANNELS.find((channel) => channel.value === input.channel)?.hint}</p>
                  </fieldset>
                )}

                <fieldset className="mt-6">
                  <legend className="mb-3 text-sm font-semibold text-ink">Tom do anúncio</legend>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {TONES.map((tone) => {
                      const active = input.tone === tone.value;
                      return (
                        <label
                          key={tone.value}
                          className={`cursor-pointer rounded-xl border px-3.5 py-3.5 transition-all duration-150 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand-500 ${
                            active
                              ? "border-ink bg-ink shadow-card"
                              : "border-line-strong bg-canvas/45 hover:border-brand-200 hover:bg-white"
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
                          <span className={`block text-sm font-semibold ${active ? "text-white" : "text-ink"}`}>{tone.label}</span>
                          <span className={`mt-1 block text-xs leading-5 ${active ? "text-white/58" : "text-muted"}`}>{tone.hint}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs leading-5 text-muted">
                    <p className="font-semibold text-ink-soft">Pronto para gerar</p>
                    <p>Revise os dados do produto antes de continuar.</p>
                  </div>
                  <button type="submit" className="interactive-lift group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white shadow-card hover:bg-brand-600 sm:w-auto sm:min-w-48">
                    Gerar anúncio
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                  </button>
                </div>
                <p className="mt-3 text-xs leading-5 text-muted sm:text-right">Incluído no plano Grátis da sua conta.</p>
              </div>
            </div>
          </form>
        ) : null}

        {status === "loading" ? (
          <div className="surface-premium overflow-hidden rounded-[1.45rem]" role="status" aria-live="polite">
            <div className="relative h-1 w-full overflow-hidden bg-line loading-bar" />
            <div className="grid lg:grid-cols-[minmax(0,1fr)_250px]">
              <div className="p-6 sm:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-600">Gerando conteúdo</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">Preparando seu anúncio…</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                  Estamos organizando título, descrição, benefícios e SEO para <strong className="font-semibold text-ink-soft">{input.productName || "o seu produto"}</strong>.
                </p>

                <ul className="mt-7 divide-y divide-line border-y border-line">
                  {LOADING_STEPS.map((label, index) => {
                    const done = index < step;
                    const current = index === step;
                    return (
                      <li key={label} className="flex items-center gap-3 py-3.5 text-sm">
                        <span
                          className={`grid size-7 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
                            done ? "bg-emerald-100 text-emerald-700" : current ? "bg-brand-100 text-brand-700" : "bg-canvas text-muted"
                          }`}
                        >
                          {done ? "✓" : index + 1}
                        </span>
                        <span className={done || current ? "font-medium text-ink-soft" : "text-muted"}>{label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <aside className="border-t border-line bg-canvas/60 p-5 sm:p-6 lg:border-l lg:border-t-0" aria-label="Resumo da geração">
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">Resumo</p>
                <dl className="mt-4 divide-y divide-line text-xs">
                  <div className="py-3 first:pt-0">
                    <dt className="text-muted">Canal</dt>
                    <dd className="mt-1 font-semibold text-ink">{CHANNEL_LABEL[input.channel]}</dd>
                  </div>
                  <div className="py-3">
                    <dt className="text-muted">Produto</dt>
                    <dd className="mt-1 line-clamp-2 font-semibold text-ink">{input.productName || "Seu produto"}</dd>
                  </div>
                  <div className="py-3 last:pb-0">
                    <dt className="text-muted">Características</dt>
                    <dd className="mt-1 font-semibold text-ink">{featureCount || 0} detectadas</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        ) : null}

        {status === "result" && result ? (
          <ResultPanel result={result} input={input} onRegenerate={handleRegenerate} onEdit={handleEdit} />
        ) : null}
      </div>
    </GeneratorAccessGate>
  );
}
