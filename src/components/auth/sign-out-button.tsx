"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export function SignOutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSignOut() {
    if (pending) return;
    setPending(true);

    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/entrar");
          router.refresh();
        },
      },
    });

    setPending(false);
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={pending}
      className="rounded-xl border border-line-strong bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-700 disabled:cursor-wait disabled:opacity-60"
    >
      {pending ? "Saindo..." : "Sair da conta"}
    </button>
  );
}
