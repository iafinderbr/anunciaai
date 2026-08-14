"use client";

import type { ReactNode } from "react";
import { CopyButton } from "@/components/copy-button";
import type { Channel, GeneratedAd, GeneratorInput } from "@/lib/types";

const TITLE_LIMIT: Record<Channel, number> = {
  "mercado-livre": 60,
  shopee: 100,
  "loja-virtual": 70,
  instagram: 65,
  olx: 65,
  outro: 70,
};

function Section({
  index,
  title,
  hint,
  copyValue,
  children,
}: {
  index: number;
  title: string;
  hint?: string;
  copyValue: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
      <header className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-6 place-items-center rounded-md bg-brand-50 text-[11px] font-bold text-brand-700">
              {index}
            </span>
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink">{title}</h4>
          </div>
          {hint ? <p className="mt-1.5 pl-8 text-xs text-muted">{hint}</p> : null}
        </div>
        <CopyButton value={copyValue} />
      </header>
      {children}
    </section>
  );
}

export function buildFullText(result: GeneratedAd): string {
  return [
    `TÍTULO DO PRODUTO\n${result.title}`,
    `DESCRIÇÃO\n${result.description}`,
    `PRINCIPAIS BENEFÍCIOS\n${result.benefits.map((benefit) => `• ${benefit}`).join("\n")}`,
    `CARACTERÍSTICAS\n${result.specsText}`,
    `ANÚNCIO\n${result.adCopy}`,
    `SEO\nTítulo SEO: ${result.seoTitle}\nMeta description: ${result.metaDescription}\nPalavras-chave: ${result.keywords.join(", ")}`,
  ].join("\n\n———\n\n");
}

interface ResultPanelProps {
  result: GeneratedAd;
  input: GeneratorInput;
  onRegenerate: () => void;
  onEdit: () => void;
}

export function ResultPanel({ result, input, onRegenerate, onEdit }: ResultPanelProps) {
  const limit = TITLE_LIMIT[input.channel];
  const titleLength = result.title.length;
  const withinLimit = titleLength <= limit;

  return (
    <div className="animate-fade-up space-y-4">
      <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Concluído
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">Seu anúncio está pronto</h3>
            <p className="mt-1.5 text-sm text-muted">
              Conteúdo gerado para <strong className="font-medium text-ink-soft">{result.channelLabel}</strong> com tom{" "}
              <strong className="font-medium text-ink-soft">{result.toneLabel.toLowerCase()}</strong>. Copie seção por
              seção ou tudo de uma vez.
            </p>
          </div>
          <CopyButton value={buildFullText(result)} label="Copiar tudo" size="md" variant="solid" />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onRegenerate}
            className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M16.5 10a6.5 6.5 0 1 1-1.9-4.6" strokeLinecap="round" />
              <path d="M16.5 3v3.5H13" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Gerar novamente
          </button>
          <button
            type="button"
            onClick={onEdit}
            className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-600"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 16h3l8-8-3-3-8 8v3Z" strokeLinejoin="round" />
              <path d="M12.5 4.5 15.5 7.5" strokeLinecap="round" />
            </svg>
            Editar informações
          </button>
        </div>
      </div>

      <Section
        index={1}
        title="Título do produto"
        hint={`${titleLength} caracteres — limite recomendado para ${result.channelLabel}: ${limit}`}
        copyValue={result.title}
      >
        <p className="text-lg font-semibold leading-snug text-ink">{result.title}</p>
        <p className={`mt-2 text-xs font-medium ${withinLimit ? "text-emerald-600" : "text-amber-600"}`}>
          {withinLimit ? "✓ Dentro do limite do canal" : "! Acima do limite recomendado — corte alguma palavra"}
        </p>

        {result.titleAlternatives.length > 0 ? (
          <div className="mt-4 border-t border-line pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Variações</p>
            <ul className="mt-2 space-y-2">
              {result.titleAlternatives.map((alternative) => (
                <li
                  key={alternative}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-canvas px-3 py-2.5"
                >
                  <span className="text-sm text-ink-soft">{alternative}</span>
                  <CopyButton value={alternative} />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Section>

      <Section
        index={2}
        title="Descrição"
        hint={`${result.description.length} caracteres, prontos para colar no anúncio`}
        copyValue={result.description}
      >
        <div className="max-h-96 overflow-y-auto whitespace-pre-wrap rounded-xl bg-canvas p-4 text-[15px] leading-relaxed text-ink-soft">
          {result.description}
        </div>
      </Section>

      <Section index={3} title="Principais benefícios" copyValue={result.benefits.map((b) => `• ${b}`).join("\n")}>
        <ul className="space-y-2.5">
          {result.benefits.map((benefit) => (
            <li key={benefit} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
              <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-[11px] font-bold text-brand-600">
                ✓
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </Section>

      <Section index={4} title="Características" copyValue={result.specsText}>
        <dl className="divide-y divide-line overflow-hidden rounded-xl border border-line">
          {result.specs.map((spec) => (
            <div key={spec.label} className="grid gap-1 bg-white px-4 py-3 sm:grid-cols-[minmax(0,180px)_1fr] sm:gap-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-muted">{spec.label}</dt>
              <dd className="text-sm text-ink-soft">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section
        index={5}
        title="Anúncio"
        hint="Versão persuasiva pronta para publicar ou impulsionar"
        copyValue={result.adCopy}
      >
        <div className="max-h-96 overflow-y-auto whitespace-pre-wrap rounded-xl bg-canvas p-4 text-[15px] leading-relaxed text-ink-soft">
          {result.adCopy}
        </div>
      </Section>

      <Section
        index={6}
        title="SEO"
        hint="Otimizado para busca no Google e dentro do marketplace"
        copyValue={`Título SEO: ${result.seoTitle}\nMeta description: ${result.metaDescription}\nPalavras-chave: ${result.keywords.join(", ")}`}
      >
        <div className="space-y-3">
          <div className="rounded-xl bg-canvas p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                Título SEO · {result.seoTitle.length}/60
              </p>
              <CopyButton value={result.seoTitle} />
            </div>
            <p className="mt-2 text-[15px] font-medium text-[#1a0dab]">{result.seoTitle}</p>
          </div>

          <div className="rounded-xl bg-canvas p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                Meta description · {result.metaDescription.length}/158
              </p>
              <CopyButton value={result.metaDescription} />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{result.metaDescription}</p>
          </div>

          <div className="rounded-xl bg-canvas p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Palavras-chave</p>
              <CopyButton value={result.keywords.join(", ")} />
            </div>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {result.keywords.map((keyword) => (
                <li
                  key={keyword}
                  className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-xs text-ink-soft"
                >
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
