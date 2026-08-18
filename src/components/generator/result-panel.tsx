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
      <header className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <span className="mt-0.5 text-xs font-semibold tabular-nums text-brand-600">0{index}</span>
          <div>
            <h4 className="text-sm font-semibold text-ink">{title}</h4>
            {hint ? <p className="mt-1 text-xs leading-5 text-muted">{hint}</p> : null}
          </div>
        </div>
        <CopyButton value={copyValue} />
      </header>
      <div className="sm:pl-8">{children}</div>
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

  return (
    <div className="animate-fade-up space-y-4">
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
        <div className="grid gap-5 bg-ink px-5 py-6 sm:px-7 sm:py-7 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Concluído
            </div>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Seu anúncio está pronto</h3>
            <p className="mt-2 text-sm leading-6 text-white/62">
              Conteúdo preparado para <strong className="font-semibold text-white/85">{result.channelLabel}</strong> com tom{" "}
              <strong className="font-semibold text-white/85">{result.toneLabel.toLowerCase()}</strong>. Revise os dados e use apenas o que fizer sentido para a publicação.
            </p>
          </div>
          <CopyButton value={fullText} label="Copiar tudo" size="md" variant="solid" />
        </div>

        <div className="px-5 py-4 sm:px-7">
          <div className="flex flex-wrap gap-2">
            {session ? (
              isSaved ? (
                <Link href="/conta/historico" className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-sm font-semibold text-emerald-700 transition-colors hover:border-emerald-300">
                  ✓ Salvo no histórico
                </Link>
              ) : (
                <button type="button" onClick={handleSave} disabled={isSaving} className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-brand-50 px-3.5 py-2 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-400 disabled:cursor-wait disabled:opacity-70">
                  {isSaving ? "Salvando..." : "Salvar no histórico"}
                </button>
              )
            ) : (
              <Link href="/entrar" className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-brand-50 px-3.5 py-2 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-400">
                Entrar para salvar
              </Link>
            )}

            {session ? (
              isProductSaved ? (
                <Link href="/conta/produtos" className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-sm font-semibold text-emerald-700 transition-colors hover:border-emerald-300">
                  ✓ Produto salvo
                </Link>
              ) : (
                <button type="button" onClick={handleSaveProduct} disabled={savingProduct} className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-white px-3.5 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700 disabled:cursor-wait disabled:opacity-70">
                  {savingProduct ? "Salvando produto..." : "Salvar produto"}
                </button>
              )
            ) : null}

            <button type="button" onClick={onRegenerate} className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-white px-3.5 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700">
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M16.5 10a6.5 6.5 0 1 1-1.9-4.6" strokeLinecap="round" />
                <path d="M16.5 3v3.5H13" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Gerar novamente
            </button>
            <button type="button" onClick={onEdit} className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-white px-3.5 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700">
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 16h3l8-8-3-3-8 8v3Z" strokeLinejoin="round" />
                <path d="M12.5 4.5 15.5 7.5" strokeLinecap="round" />
              </svg>
              Editar informações
            </button>
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

          <p className="mt-3 text-[11px] leading-5 text-muted">
            Salvar é opcional. O conteúdo e os dados do produto só são enviados ao servidor quando você usa um dos botões de salvar estando conectado.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-canvas/60 px-5 py-4 sm:px-7">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-600">Resultado completo</p>
            <p className="mt-1 text-sm text-muted">Seis blocos prontos para revisar, copiar e adaptar.</p>
          </div>
          <span className="rounded-full border border-line-strong bg-white px-2.5 py-1 text-[10px] font-semibold text-muted">6 blocos</span>
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
            <div className="mt-5 border-t border-line pt-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">Variações</p>
              <ul className="mt-2 divide-y divide-line border-y border-line">
                {result.titleAlternatives.map((alternative) => (
                  <li key={alternative} className="flex flex-wrap items-center justify-between gap-2 py-3">
                    <span className="text-sm text-ink-soft">{alternative}</span>
                    <CopyButton value={alternative} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Section>

        <Section index={2} title="Descrição" hint={`${result.description.length} caracteres — primeira versão para revisar e adaptar antes de publicar`} copyValue={result.description}>
          <div className="max-h-96 overflow-y-auto whitespace-pre-wrap border-l-2 border-line pl-4 text-[15px] leading-7 text-ink-soft">{result.description}</div>
        </Section>

        <Section index={3} title="Principais benefícios" copyValue={result.benefits.map((b) => `• ${b}`).join("\n")}>
          <ul className="divide-y divide-line border-y border-line">
            {result.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 py-3 text-[15px] leading-6 text-ink-soft">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </Section>

        <Section index={4} title="Características" copyValue={result.specsText}>
          <dl className="divide-y divide-line border-y border-line">
            {result.specs.map((spec) => (
              <div key={spec.label} className="grid gap-1 py-3 sm:grid-cols-[minmax(0,180px)_1fr] sm:gap-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-muted">{spec.label}</dt>
                <dd className="text-sm text-ink-soft">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section index={5} title="Anúncio" hint="Versão persuasiva para revisar e adaptar antes de publicar" copyValue={result.adCopy}>
          <div className="max-h-96 overflow-y-auto whitespace-pre-wrap border-l-2 border-line pl-4 text-[15px] leading-7 text-ink-soft">{result.adCopy}</div>
        </Section>

        <Section index={6} title="SEO" hint="Sugestões editoriais de título, descrição e termos relacionados ao produto informado" copyValue={`Título SEO: ${result.seoTitle}\nMeta description: ${result.metaDescription}\nPalavras-chave: ${result.keywords.join(", ")}`}>
          <div className="divide-y divide-line border-y border-line">
            <div className="py-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">Título SEO · {result.seoTitle.length} caracteres</p>
                <CopyButton value={result.seoTitle} />
              </div>
              <p className="mt-2 text-[15px] font-semibold text-ink">{result.seoTitle}</p>
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
