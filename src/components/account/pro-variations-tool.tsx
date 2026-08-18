"use client";

import { useState } from "react";
import { CopyButton } from "@/components/copy-button";
import { generateAd } from "@/lib/generator";
import type { Channel, GeneratedAd, GeneratorInput, Tone } from "@/lib/types";

const CHANNELS: Array<{ value: Channel; label: string }> = [
  { value: "mercado-livre", label: "Mercado Livre" },
  { value: "shopee", label: "Shopee" },
  { value: "olx", label: "OLX" },
  { value: "facebook-marketplace", label: "Facebook Marketplace" },
  { value: "instagram", label: "Instagram" },
  { value: "loja-virtual", label: "Loja virtual" },
];

const TONES: Array<{ value: Tone; label: string }> = [
  { value: "profissional", label: "Profissional" },
  { value: "persuasivo", label: "Persuasivo" },
  { value: "simples", label: "Simples" },
  { value: "premium", label: "Premium" },
];

const EMPTY_INPUT: GeneratorInput = {
  productName: "",
  category: "",
  price: "",
  audience: "",
  features: "",
  channel: "mercado-livre",
  tone: "profissional",
};

function versionText(result: GeneratedAd): string {
  return `${result.title}\n\n${result.description}\n\n${result.adCopy}`;
}

export function ProVariationsTool() {
  const [input, setInput] = useState<GeneratorInput>(EMPTY_INPUT);
  const [results, setResults] = useState<GeneratedAd[]>([]);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof GeneratorInput>(key: K, value: GeneratorInput[K]) {
    setInput((current) => ({ ...current, [key]: value }));
  }

  function generate() {
    if (input.productName.trim().length < 3 || input.features.trim().length < 3) {
      setError("Informe o nome do produto e pelo menos uma característica real para gerar as versões.");
      return;
    }

    setError(null);
    setResults([0, 1, 2].map((variant) => generateAd(input, variant)));
  }

  return (
    <div className="grid gap-8 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="border border-line bg-white p-6 lg:p-7 xl:sticky xl:top-24 xl:self-start">
        <div className="border-b border-line pb-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">Pro · Variações</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">Três abordagens do mesmo produto.</h2>
          <p className="mt-3 text-sm leading-6 text-muted">Use os mesmos dados para comparar versões diferentes antes de escolher a melhor direção.</p>
        </div>

        <div className="mt-6 grid gap-5">
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Produto
            <input value={input.productName} onChange={(event) => update("productName", event.target.value)} maxLength={160} className="min-h-11 border border-line-strong bg-white px-3.5 text-sm font-normal outline-none transition-colors focus:border-brand-500" placeholder="Ex.: Fone JBL Tune 510BT" />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-ink">
            Categoria
            <input value={input.category} onChange={(event) => update("category", event.target.value)} maxLength={120} className="min-h-11 border border-line-strong bg-white px-3.5 text-sm font-normal outline-none transition-colors focus:border-brand-500" placeholder="Ex.: Fones de ouvido" />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-ink">
            Características reais
            <textarea value={input.features} onChange={(event) => update("features", event.target.value)} maxLength={3000} rows={6} className="border border-line-strong bg-white px-3.5 py-3 text-sm font-normal leading-6 outline-none transition-colors focus:border-brand-500" placeholder="Bluetooth 5.0; USB-C; dobrável; microfone integrado" />
          </label>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Canal
              <select value={input.channel} onChange={(event) => update("channel", event.target.value as Channel)} className="min-h-11 border border-line-strong bg-white px-3.5 text-sm font-normal outline-none focus:border-brand-500">
                {CHANNELS.map((channel) => <option key={channel.value} value={channel.value}>{channel.label}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Tom
              <select value={input.tone} onChange={(event) => update("tone", event.target.value as Tone)} className="min-h-11 border border-line-strong bg-white px-3.5 text-sm font-normal outline-none focus:border-brand-500">
                {TONES.map((tone) => <option key={tone.value} value={tone.value}>{tone.label}</option>)}
              </select>
            </label>
          </div>

          <button type="button" onClick={generate} className="min-h-12 bg-[#111216] px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
            Gerar 3 versões
          </button>
          {error ? <p role="alert" className="text-xs font-medium leading-5 text-rose-700">{error}</p> : null}
        </div>
      </section>

      <section aria-live="polite" className="min-w-0">
        {results.length === 0 ? (
          <div className="grid min-h-[520px] place-items-center border border-dashed border-line-strong bg-[#f7f7f4] p-8 text-center">
            <div className="max-w-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Laboratório Pro</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink">Compare três versões lado a lado.</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Preencha os dados ao lado. O recurso usa somente as informações fornecidas por você e mantém a revisão final sob seu controle.</p>
            </div>
          </div>
        ) : (
          <div className="grid gap-4">
            {results.map((result, index) => (
              <article key={result.variant} className="border border-line bg-white">
                <header className="flex items-center justify-between gap-5 border-b border-line px-5 py-4 sm:px-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-700">Versão 0{index + 1}</p>
                    <p className="mt-1 text-xs text-muted">{result.channelLabel} · {result.toneLabel}</p>
                  </div>
                  <CopyButton value={versionText(result)} label="Copiar versão" />
                </header>
                <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Título</p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.03em] text-ink">{result.title}</h3>
                    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Alternativas</p>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-ink-soft">
                      {result.titleAlternatives.map((title) => <li key={title}>— {title}</li>)}
                    </ul>
                  </div>
                  <div className="border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Descrição</p>
                    <p className="mt-2 whitespace-pre-line text-sm leading-7 text-ink-soft">{result.description}</p>
                    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Copy</p>
                    <p className="mt-2 whitespace-pre-line text-sm leading-7 text-ink-soft">{result.adCopy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
