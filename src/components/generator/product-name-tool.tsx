"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/copy-button";
import { NAMES_EXAMPLE_INPUT } from "@/lib/names-content";
import type { GeneratorInput, Tone } from "@/lib/types";

const TONES: { value: Tone; label: string; hint: string }[] = [
  { value: "profissional", label: "Profissional", hint: "Confiável e direto" },
  { value: "persuasivo", label: "Marcante", hint: "Forte e comercial" },
  { value: "simples", label: "Simples", hint: "Claro e fácil" },
  { value: "premium", label: "Premium", hint: "Elegante e exclusivo" },
];

const PREFIXES: Record<Tone, string[]> = {
  profissional: ["Nexo", "Prisma", "Atlas", "Vértice", "Núcleo", "Ponto"],
  persuasivo: ["Viva", "Impulso", "Brava", "Voa", "Forte", "Mais"],
  simples: ["Leve", "Claro", "Fácil", "Bem", "Puro", "Jeito"],
  premium: ["Auré", "Vitta", "Élan", "Nobre", "Lumi", "Orbe"],
};

const SUFFIXES = ["va", "ly", "on", "ia", "eo", "um", "ar", "is"];

function cleanWord(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9 ]/g, " ").trim();
}

function title(value: string) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : "Produto";
}

function generateNames(input: GeneratorInput, round: number) {
  const productWords = cleanWord(input.productName).split(/\s+/).filter((word) => word.length > 3);
  const categoryWords = cleanWord(input.category).split(/\s+/).filter((word) => word.length > 3);
  const featureWords = cleanWord(input.features).split(/\s+/).filter((word) => word.length > 4);
  const base = title(productWords[0] || categoryWords[0] || "Produto");
  const category = title(categoryWords[0] || "Studio");
  const feature = title(featureWords[(round + 2) % Math.max(featureWords.length, 1)] || "Viva");
  const prefixes = PREFIXES[input.tone];
  const rotate = <T,>(items: T[], offset: number) => items[(round + offset) % items.length];
  const stem = base.slice(0, Math.max(3, Math.min(5, base.length)));

  return [
    { name: `${stem}${rotate(SUFFIXES, 0)}`, style: "Autoral", reason: `Nome curto inspirado em “${base}”, criado para ter sonoridade própria.` },
    { name: `${rotate(prefixes, 1)}${category}`, style: "Composto", reason: `Une uma sensação ${input.tone === "premium" ? "sofisticada" : "marcante"} à categoria do produto.` },
    { name: `${feature}${rotate(SUFFIXES, 2)}`, style: "Conceitual", reason: `Transforma um diferencial do briefing em um nome compacto e memorável.` },
    { name: `${rotate(prefixes, 3)} ${base}`, style: "Descritivo", reason: "Explica a proposta com clareza e continua fácil de falar e lembrar." },
    { name: `${stem}${rotate(prefixes, 4).toLowerCase()}`, style: "Moderno", reason: "Combinação contemporânea, adequada para embalagem, loja e redes sociais." },
    { name: `${rotate(prefixes, 5)} & ${category}`, style: "Marca-linha", reason: "Uma direção flexível para crescer com novos produtos da mesma linha." },
    { name: `${base} ${rotate(["Lab", "Casa", "Co.", "Essencial", "Original", "Studio"], 1)}`, style: "Comercial", reason: "Mantém o tipo de produto reconhecível e adiciona personalidade de marca." },
    { name: `${rotate(prefixes, 0)}${rotate(SUFFIXES, 5)}`, style: "Abstrato", reason: "Nome amplo e sonoro, útil para uma marca que poderá expandir de categoria." },
  ];
}

export function ProductNameTool() {
  const [input, setInput] = useState(NAMES_EXAMPLE_INPUT);
  const [round, setRound] = useState(0);
  const [generated, setGenerated] = useState(false);
  const [error, setError] = useState("");
  const names = useMemo(() => generateNames(input, round), [input, round]);
  const update = (key: keyof GeneratorInput, value: string) => setInput((current) => ({ ...current, [key]: value }));
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input.productName.trim().length < 3 || input.category.trim().length < 2 || input.features.trim().length < 10) {
      setError("Preencha a ideia do produto, a categoria e pelo menos alguns diferenciais.");
      return;
    }
    setError("");
    setGenerated(true);
  };

  if (generated) {
    return <div className="animate-fade-up space-y-4">
      <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">✓ Ideias prontas</span>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">8 nomes para o seu produto</h3>
        <p className="mt-1.5 text-sm text-muted">Salve seus favoritos e pesquise marca, domínio e redes sociais antes de escolher.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <button type="button" onClick={() => setRound((value) => value + 1)} className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">Gerar novas ideias</button>
          <button type="button" onClick={() => setGenerated(false)} className="rounded-xl border border-line-strong px-4 py-2.5 text-sm font-semibold hover:border-brand-500 hover:text-brand-600">Editar informações</button>
          <CopyButton value={names.map((item) => `${item.name} — ${item.reason}`).join("\n")} label="Copiar tudo" size="md" />
        </div>
      </div>
      <ol className="grid gap-4 sm:grid-cols-2">
        {names.map((item, index) => <li key={`${item.name}-${index}`} className="rounded-2xl border border-line bg-white p-5 shadow-card">
          <div className="flex items-start justify-between gap-3"><div><span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-600">{item.style}</span><h4 className="mt-1 text-xl font-semibold">{item.name}</h4></div><CopyButton value={item.name} /></div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.reason}</p>
        </li>)}
      </ol>
    </div>;
  }

  return <form onSubmit={submit} className="rounded-3xl border border-line bg-white p-5 shadow-lift sm:p-8">
    <div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="text-xl font-semibold sm:text-2xl">Crie nomes para o seu produto</h3><p className="mt-1 text-sm text-muted">Dê um briefing curto e receba ideias em estilos diferentes.</p></div><button type="button" onClick={() => setInput(NAMES_EXAMPLE_INPUT)} className="rounded-lg border border-line-strong px-3 py-1.5 text-xs font-semibold hover:border-brand-500 hover:text-brand-600">Preencher com exemplo</button></div>
    <div className="mt-6 grid gap-5 sm:grid-cols-2">
      <label className="sm:col-span-2 text-sm font-medium">Ideia ou tipo de produto <span className="text-brand-600">*</span><input className="field mt-1.5" value={input.productName} onChange={(e) => update("productName", e.target.value)} placeholder="Ex: Garrafa térmica para rotina e viagens" /></label>
      <label className="text-sm font-medium">Categoria <span className="text-brand-600">*</span><input className="field mt-1.5" value={input.category} onChange={(e) => update("category", e.target.value)} placeholder="Ex: Casa e bem-estar" /></label>
      <label className="text-sm font-medium">Público-alvo <span className="text-muted">(opcional)</span><input className="field mt-1.5" value={input.audience} onChange={(e) => update("audience", e.target.value)} placeholder="Ex: Pessoas que treinam e viajam" /></label>
      <label className="sm:col-span-2 text-sm font-medium">Diferenciais e sensações <span className="text-brand-600">*</span><textarea rows={4} className="field mt-1.5 resize-y" value={input.features} onChange={(e) => update("features", e.target.value)} placeholder="Ex: resistente, moderna, prática, sem vazamentos..." /></label>
    </div>
    <fieldset className="mt-6"><legend className="mb-2.5 text-sm font-medium">Estilo dos nomes</legend><div className="grid gap-2 sm:grid-cols-4">{TONES.map((tone) => <label key={tone.value} className={`cursor-pointer rounded-xl border px-3.5 py-3 ${input.tone === tone.value ? "border-brand-500 bg-brand-50" : "border-line-strong"}`}><input type="radio" className="sr-only" checked={input.tone === tone.value} onChange={() => update("tone", tone.value)} /><span className="block text-sm font-semibold">{tone.label}</span><span className="text-xs text-muted">{tone.hint}</span></label>)}</div></fieldset>
    {error ? <p className="mt-5 text-sm font-medium text-rose-600">{error}</p> : null}
    <button type="submit" className="mt-8 w-full rounded-2xl bg-ink px-6 py-4 font-semibold text-white hover:bg-brand-600">✨ Gerar nomes grátis</button><p className="mt-3 text-center text-xs text-muted">Sem cadastro e sem cartão de crédito.</p>
  </form>;
}
