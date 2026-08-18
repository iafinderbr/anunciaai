"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { CopyButton } from "@/components/copy-button";
import { authClient } from "@/lib/auth-client";
import type { Channel, GeneratedAd, GeneratorInput } from "@/lib/types";

// Metas editoriais usadas pelo próprio gerador para manter títulos legíveis.
// Não representam limites oficiais ou universais das plataformas.
const TITLE_PREVIEW_TARGET: Record<Channel, number> = {
  "mercado-livre": 80,
  shopee: 100,
  "loja-virtual": 70,
  instagram: 65,
  olx: 65,
  "facebook-marketplace": 65,
  outro: 70,
};

type SaveStatus = "idle" | "saving" | "saved" | "error";

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
  const previewTarget = TITLE_PREVIEW_TARGET[input.channel];
  const titleLength = result.title.length;
  const withinTarget = titleLength <= previewTarget;
  const fullText = buildFullText(result);
  const { data: session } = authClient.useSession();
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  useEffect(() => {
    setSaveStatus("idle");
    setSaveMessage(null);
  }, [fullText]);

  async function handleSave() {
    if (!session || saveStatus === "saving" || saveStatus === "saved") return;

    setSaveStatus("saving");
    setSaveMessage(null);

    try {
      const response = await fetch("/api/account/history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: input.productName,
          channel: input.channel,
          title: result.title,
          content: fullText,
        }),
      });

      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (response.ok) {
        setSaveStatus("saved");
        setSaveMessage("Resultado salvo na sua conta.");
        return;
      }

      setSaveStatus("error");
      setSaveMessage(
        payload?.error === "history_limit"
          ? "Seu histórico chegou ao limite de 100 itens. Apague um item para salvar outro."
          : response.status === 401
            ? "Sua sessão expirou. Entre novamente para salvar."
            : "Não foi possível salvar agora. Tente novamente.",
      );
    } catch {
      setSaveStatus("error");
      setSaveMessage("Não foi possível salvar agora. Tente novamente.");
    }
  }

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
              <strong className="font-medium text-ink-soft">{result.toneLabel.toLowerCase()}</strong>. Revise as informações e copie seção por seção ou tudo de uma vez.
            </p>
          </div>
          <CopyButton value={fullText} label="Copiar tudo" size="md" variant="solid" />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {session ? (
            saveStatus === "saved" ? (
              <Link
                href="/conta/historico"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-colors hover:border-emerald-300"
              >
                ✓ Salvo no histórico
              </Link>
            ) : (
              <button
                type="button"
                onClick={handleSave}
                disabled={saveStatus === "saving"}
                className="inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-400 disabled:cursor-wait disabled:opacity-70"
              >
                {saveStatus === "saving" ? "Salvando..." : "Salvar no histórico"}
              </button>
            )
          ) : (
            <Link
              href="/entrar"
              className="inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-400"
            >
              Entrar para salvar
            </Link>
          )}

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

        {saveMessage ? (
          <p
            role={saveStatus === "error" ? "alert" : "status"}
            className={`mt-3 text-xs font-medium ${saveStatus === "error" ? "text-rose-700" : "text-emerald-700"}`}
          >
            {saveMessage}
          </p>
        ) : null}

        <p className="mt-3 text-xs leading-5 text-muted">
          Salvar é opcional. O conteúdo do produto só é enviado ao servidor quando você usa este botão estando conectado.
        </p>
      </div>

      <Section
        index={1}
        title="Título do produto"
        hint={`${titleLength} caracteres — referência editorial do AnunciaAI para ${result.channelLabel}: até ${previewTarget}`}
        copyValue={result.title}
      >
        <p className="text-lg font-semibold leading-snug text-ink">{result.title}</p>
        <p className={`mt-2 text-xs font-medium ${withinTarget ? "text-emerald-600" : "text-amber-600"}`}>
          {withinTarget
            ? "✓ dentro da referência editorial usada neste gerador"
            : "! Acima da referência editorial — considere encurtar antes de publicar"}
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
        hint={`${result.description.length} caracteres — primeira versão para revisar e adaptar antes de publicar`}
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
        hint="Versão persuasiva para revisar e adaptar antes de publicar"
        copyValue={result.adCopy}
      >
        <div className="max-h-96 overflow-y-auto whitespace-pre-wrap rounded-xl bg-canvas p-4 text-[15px] leading-relaxed text-ink-soft">
          {result.adCopy}
        </div>
      </Section>

      <Section
        index={6}
        title="SEO"
        hint="Sugestões editoriais de título, descrição e termos relacionados ao produto informado"
        copyValue={`Título SEO: ${result.seoTitle}\nMeta description: ${result.metaDescription}\nPalavras-chave: ${result.keywords.join(", ")}`}
      >
        <div className="space-y-3">
          <div className="rounded-xl bg-canvas p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                Título SEO · {result.seoTitle.length} caracteres
              </p>
              <CopyButton value={result.seoTitle} />
            </div>
            <p className="mt-2 text-[15px] font-medium text-[#1a0dab]">{result.seoTitle}</p>
          </div>

          <div className="rounded-xl bg-canvas p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                Meta description · {result.metaDescription.length} caracteres
              </p>
              <CopyButton value={result.metaDescription} />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{result.metaDescription}</p>
          </div>

          <div className="rounded-xl bg-canvas p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Palavras-chave sugeridas</p>
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
