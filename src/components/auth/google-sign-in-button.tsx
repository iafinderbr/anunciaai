"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export function GoogleSignInButton({
  callbackURL = "/conta",
  label = "Continuar com Google",
  errorCallbackURL = "/entrar?erro=google",
  requestSignUp = false,
}: {
  callbackURL?: string;
  label?: string;
  errorCallbackURL?: string;
  requestSignUp?: boolean;
}) {
  const [pending, setPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSignIn() {
    if (pending) return;
    setPending(true);
    setErrorMessage(null);

    try {
      const result = await authClient.signIn.social({
        provider: "google",
        callbackURL,
        errorCallbackURL,
        requestSignUp,
      });

      if (result.error) {
        setErrorMessage(
          requestSignUp
            ? "Não foi possível criar a conta com Google. Tente novamente."
            : "Não foi possível entrar com Google. Se você ainda não tem conta, use Registrar-se.",
        );
        setPending(false);
      }
    } catch {
      setErrorMessage(
        requestSignUp
          ? "Não foi possível criar a conta com Google. Tente novamente."
          : "Não foi possível entrar com Google. Se você ainda não tem conta, use Registrar-se.",
      );
      setPending(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleSignIn}
        disabled={pending}
        className="interactive-lift flex w-full items-center justify-center gap-3 rounded-xl border border-line-strong bg-white px-4 py-3.5 text-sm font-semibold text-ink shadow-card hover:border-brand-300 hover:bg-brand-50 disabled:cursor-wait disabled:opacity-70"
      >
        <span aria-hidden="true" className="grid size-6 place-items-center rounded-full border border-line-strong bg-white text-xs font-bold text-[#4285f4]">
          G
        </span>
        {pending ? "Abrindo Google..." : label}
      </button>
      {errorMessage ? (
        <p role="alert" className="mt-3 text-center text-xs font-medium text-red-700">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
