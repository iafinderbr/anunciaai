"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
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
    <section className="border-t border-line px-5 py-6 first:border-t-0 sm:px-7 sm:py-7">
      <div className="grid gap-5 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-8">
        <header className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-start justify-between gap-3 lg:block">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-600">0{index}</span>
              <h4 className="mt-1.5 text-sm font-semibold text-ink">{title}</h4>
              {hint ? <p className="mt-1.5 text-xs leading-5 text-muted">{hint}</p> : null}
            </div>
            <div className="shrink-0 lg:mt-4">
              <CopyButton value={copyValue} />
            </div>
          </div>
        </header>
        <div className="min-w-0">{children}</div>
      </div>
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
  const productKey = JSON.stringify(input);
  const { data: session } = authClient.useSession();
  const [savingContent, setSavingContent] = useState<string | null>(null);
  const [savedContent, setSavedContent] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<{ key: string; message: string } | null>(null);
  const [savingProduct, setSavingProduct] = useState(false);
  const [savedProductKey, setSavedProductKey] = useState<string | null>(null);
  const [productError, setProductError] = useState<string | null>(null);
  const isSaving = savingContent === fullText;
  const isSaved = savedContent === fullText;
  const isProductSaved = savedProductKey === productKey;
  const visibleError = saveError?.key === fullText ? saveError.message : null;

  async function handleSave() {
    if (!session || isSaving || isSaved) return;

    const contentKey = fullText;
    setSavingContent(contentKey);
    setSaveError(null);

    try {
      const response = await fetch("/api/account/history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: input.productName,
          channel: input.channel,
          title: result.title,
          content: contentKey,
        }),
      });

      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (response.ok) {
        setSavedContent(contentKey);
        return;
      }

      setSaveError({
        key: contentKey,
        message:
          payload?.error === "history_limit"
            ? "Seu histórico chegou ao limite de 100 itens. Apague um item para salvar outro."
            : response.status === 401
              ? "Sua sessão expirou. Entre novamente para salvar."
              : response.status === 429
                ? "Muitas alterações em pouco tempo. Aguarde um minuto e tente novamente."
                : "Não foi possível salvar agora. Tente novamente.",
      });
    } catch {
      setSaveError({ key: contentKey, message: "Não foi possível salvar agora. Tente novamente." });
    } finally {
      setSavingContent((current) => (current === contentKey ? null : current));
    }
  }

  async function handleSaveProduct() {
    if (!session || savingProduct || isProductSaved) return;
    setSavingProduct(true);
    setProductError(null);

    try {
      const response = await fetch("/api/account/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (response.ok) {
        setSavedProductKey(productKey);
        return;
      }
      setProductError(
        payload?.error === "product_limit"
          ? "Sua biblioteca chegou ao limite atual de 20 produtos. Exclua um para salvar outro."
          : response.status === 401
            ? "Sua sessão expirou. Entre novamente para salvar o produto."
            : response.status === 429
              ? "Muitas alterações em pouco tempo. Aguarde um minuto e tente novamente."
              : "Não foi possível salvar o produto agora.",
      );
    } catch {
      setProductError("Não foi possível salvar o produto agora.");
    } finally {
      setSavingProduct(false);
    }
  }

  const secondaryActionClass =
    "interactive-lift inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-line-strong bg-white px-3.5 py-2 text-sm font-semibold text-ink-soft hover:border-brand-300 hover:text-brand-700";

  return (
    <div className="animate-fade-up space-y-4">
      <div className="surface-premium overflow-hidden rounded-[1.45rem]">
        <div className="grid gap-6 bg-ink px-5 py-6 text-white sm:px-7 sm:py-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Concluído
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold text-white/55">{result.channelLabel}</span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold text-white/55">{result.toneLabel}</span>
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">Seu anúncio está pronto para revisão</h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
              O conteúdo foi organizado em seis blocos. Revise especificações, preço e regras do canal antes de publicar.
            </p>
          </div>
          <CopyButton value={fullText} label="Copiar anúncio completo" size="md" variant="solid" className="w-full justify-center lg:w-auto" />
        </div>

        <div className="border-b border-line bg-white px-5 py-4 sm:px-7">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap gap-2">
              {session ? (
                isSaved ? (
                  <Link href="/conta/historico" className="interactive-lift inline-flex min-h-10 items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-sm font-semibold text-emerald-700 hover:border-emerald-300">
                    <span aria-hidden="true">✓</span> Salvo no histórico
                  </Link>
                ) : (
                  <button type="button" onClick={handleSave} disabled={isSaving} className="interactive-lift inline-flex min-h-10 items-center gap-2 rounded-xl border border-brand-200 bg-brand-50 px-3.5 py-2 text-sm font-semibold text-brand-700 hover:border-brand-400 disabled:cursor-wait disabled:opacity-70">
                    {isSaving ? "Salvando..." : "Salvar no histórico"}
                  </button>
                )
              ) : (
                <Link href="/entrar" className="interactive-lift inline-flex min-h-10 items-center gap-2 rounded-xl border border-brand-200 bg-brand-50 px-3.5 py-2 text-sm font-semibold text-brand-700 hover:border-brand-400">
                  Entrar para salvar
                </Link>
              )}

              {session ? (
                isProductSaved ? (
                  <Link href="/conta/produtos" className="interactive-lift inline-flex min-h-10 items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-sm font-semibold text-emerald-700 hover:border-emerald-300">
                    <span aria-hidden="true">✓</span> Produto salvo
                  </Link>
                ) : (
                  <button type="button" onClick={handleSaveProduct} disabled={savingProduct} className={secondaryActionClass + " disabled:cursor-wait disabled:opacity-60"}>
                    {savingProduct ? "Salvando produto..." : "Salvar produto"}
                  </button>
                )
              ) : null}
            </div>

            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={onRegenerate} className={secondaryActionClass}>
                <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M16.5 10a6.5 6.5 0 1 1-1.9-4.6" strokeLinecap="round" />
                  <path d="M16.5 3v3.5H13" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Gerar novamente
              </button>
              <button type="button" onClick={onEdit} className={secondaryActionClass}>
                <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 16h3l8-8-3-3-8 8v3Z" strokeLinejoin="round" />
                  <path d="M12.5 4.5 15.5 7.5" strokeLinecap="round" />
                </svg>
                Editar informações
              </button>
            </div>
          </div>

          {isSaved ? (
            <p role="status" className="mt-3 text-xs font-medium text-emerald-700">Resultado salvo na sua conta.</p>
          ) : visibleError ? (
            <p role="alert" className="mt-3 text-xs font-medium text-rose-700">{visibleError}</p>
          ) : null}
          {isProductSaved ? (
            <p role="status" className="mt-2 text-xs font-medium text-emerald-700">Produto salvo na sua biblioteca privada.</p>
          ) : productError ? (
            <p role="alert" className="mt-2 text-xs font-medium text-rose-700">{productError}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 bg-canvas/55 px-5 py-3.5 text-[11px] leading-5 text-muted sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <span>Salvar é opcional. Nada entra no histórico ou na biblioteca sem sua ação.</span>
          <span className="shrink-0 font-semibold text-ink-soft">6 blocos de conteúdo</span>
        </div>
      </div>

      <div className="surface-premium overflow-hidden rounded-[1.45rem]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-white px-5 py-4 sm:px-7 sm:py-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-600">Documento de saída</p>
            <p className="mt-1 text-sm text-muted">Revise cada bloco e copie apenas o que quiser usar.</p>
          </div>
          <span className="rounded-full border border-line-strong bg-canvas px-2.5 py-1 text-[10px] font-semibold text-muted">AnunciaAI · Resultado</span>
        </div>

        <Section
          index={1}
          title="Título do produto"
          hint={`${titleLength} caracteres · referência editorial até ${previewTarget}`}
          copyValue={result.title}
        >
          <div className="rounded-xl border border-line bg-canvas/50 p-4 sm:p-5">
            <p className="text-lg font-semibold leading-snug text-ink sm:text-xl">{result.title}</p>
            <p className={`mt-3 inline-flex items-center gap-1.5 text-xs font-medium ${withinTarget ? "text-emerald-700" : "text-amber-700"}`}>
              <span aria-hidden="true" className={`size-1.5 rounded-full ${withinTarget ? "bg-emerald-500" : "bg-amber-500"}`} />
              {withinTarget
                ? "Dentro da referência editorial usada neste gerador"
                : "Acima da referência editorial — considere encurtar antes de publicar"}
            </p>
          </div>

          {result.titleAlternatives.length > 0 ? (
            <div className="mt-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">Outras variações</p>
              <ul className="mt-2 divide-y divide-line rounded-xl border border-line bg-white px-4">
                {result.titleAlternatives.map((alternative) => (
                  <li key={alternative} className="flex flex-wrap items-center justify-between gap-3 py-3.5">
                    <span className="min-w-0 flex-1 text-sm leading-6 text-ink-soft">{alternative}</span>
                    <CopyButton value={alternative} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Section>

        <Section index={2} title="Descrição" hint={`${result.description.length} caracteres · primeira versão para revisar`} copyValue={result.description}>
          <div className="max-h-[28rem] overflow-y-auto whitespace-pre-wrap rounded-xl border border-line bg-white p-4 text-[15px] leading-7 text-ink-soft sm:p-5">{result.description}</div>
        </Section>

        <Section index={3} title="Principais benefícios" copyValue={result.benefits.map((b) => `• ${b}`).join("\n")}>
          <ul className="divide-y divide-line rounded-xl border border-line bg-white px-4 sm:px-5">
            {result.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 py-3.5 text-[15px] leading-6 text-ink-soft">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </Section>

        <Section index={4} title="Características" copyValue={result.specsText}>
          <dl className="divide-y divide-line rounded-xl border border-line bg-white px-4 sm:px-5">
            {result.specs.map((spec) => (
              <div key={spec.label} className="grid gap-1 py-3.5 sm:grid-cols-[minmax(0,180px)_1fr] sm:gap-4">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted">{spec.label}</dt>
                <dd className="text-sm leading-6 text-ink-soft">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section index={5} title="Anúncio" hint="Versão persuasiva para revisar e adaptar antes de publicar" copyValue={result.adCopy}>
          <div className="max-h-[28rem] overflow-y-auto whitespace-pre-wrap rounded-xl border border-line bg-white p-4 text-[15px] leading-7 text-ink-soft sm:p-5">{result.adCopy}</div>
        </Section>

        <Section index={6} title="SEO" hint="Sugestões editoriais de título, descrição e termos relacionados" copyValue={`Título SEO: ${result.seoTitle}\nMeta description: ${result.metaDescription}\nPalavras-chave: ${result.keywords.join(", ")}`}>
          <div className="divide-y divide-line rounded-xl border border-line bg-white px-4 sm:px-5">
            <div className="py-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">Título SEO · {result.seoTitle.length} caracteres</p>
                <CopyButton value={result.seoTitle} />
              </div>
              <p className="mt-2 text-[15px] font-semibold leading-6 text-ink">{result.seoTitle}</p>
            </div>

            <div className="py-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">Meta description · {result.metaDescription.length} caracteres</p>
                <CopyButton value={result.metaDescription} />
              </div>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{result.metaDescription}</p>
            </div>

            <div className="py-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">Palavras-chave sugeridas</p>
                <CopyButton value={result.keywords.join(", ")} />
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {result.keywords.map((keyword) => (
                  <li key={keyword} className="rounded-full border border-line-strong bg-canvas px-2.5 py-1 text-xs text-ink-soft">{keyword}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
