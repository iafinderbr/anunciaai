"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export function GoogleSignInButton() {
  const [pending, setPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSignIn() {
    if (pending) return;
    setPending(true);
    setErrorMessage(null);

    try {
      const result = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/conta",
        errorCallbackURL: "/entrar?erro=google",
      });

      if (result.error) {
        setErrorMessage("Não foi possível iniciar o login com Google. Tente novamente.");
        setPending(false);
      }
    } catch {
      setErrorMessage("Não foi possível iniciar o login com Google. Tente novamente.");
      setPending(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleSignIn}
        disabled={pending}
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-line-strong bg-white px-4 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-brand-400 hover:bg-brand-50 disabled:cursor-wait disabled:opacity-70"
      >
        <span aria-hidden="true" className="grid size-6 place-items-center rounded-full border border-line-strong text-xs font-bold">
          G
        </span>
        {pending ? "Abrindo Google..." : "Continuar com Google"}
      </button>
      {errorMessage ? (
        <p role="alert" className="mt-3 text-center text-xs font-medium text-red-700">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
