"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface CopyButtonProps {
  value: string;
  label?: string;
  size?: "sm" | "md";
  variant?: "outline" | "solid";
  className?: string;
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // segue para o fallback
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export function CopyButton({
  value,
  label = "Copiar",
  size = "sm",
  variant = "outline",
  className = "",
}: CopyButtonProps) {
  const [state, setState] = useState<"idle" | "done" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    const ok = await copyToClipboard(value);
    setState(ok ? "done" : "error");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2000);
  }, [value]);

  const base =
    "inline-flex shrink-0 items-center gap-1.5 rounded-lg font-medium transition-colors duration-150 disabled:opacity-50";
  const sizing = size === "sm" ? "px-2.5 py-1.5 text-xs" : "px-3.5 py-2 text-sm";
  const skin =
    variant === "solid"
      ? "bg-ink text-white hover:bg-ink-soft"
      : "border border-line-strong bg-white text-ink-soft hover:border-brand-500 hover:text-brand-600";

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`${base} ${sizing} ${skin} ${className}`}
      aria-live="polite"
    >
      {state === "done" ? (
        <>
          <svg aria-hidden="true" viewBox="0 0 20 20" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M4 10.5 8 14.5 16 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Copiado!
        </>
      ) : state === "error" ? (
        "Tente novamente"
      ) : (
        <>
          <svg aria-hidden="true" viewBox="0 0 20 20" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.7">
            <rect x="7" y="7" width="9" height="10" rx="2" />
            <path d="M13 4.5H6a2 2 0 0 0-2 2v7.5" strokeLinecap="round" />
          </svg>
          {label}
        </>
      )}
    </button>
  );
}
