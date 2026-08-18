import Link from "next/link";
import { SignOutButton } from "@/components/auth/sign-out-button";

const planNames = {
  free: "Grátis",
  pro: "Pro",
  premium: "Premium",
} as const;

type AccountPlan = keyof typeof planNames;

export function AccountShellHeader({
  name,
  email,
  plan,
}: {
  name: string;
  email: string;
  plan: AccountPlan;
}) {
  return (
    <header className="flex flex-col gap-5 border-b border-white/[0.09] pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-300">Conta</p>
        <p className="mt-2 truncate text-2xl font-semibold tracking-[-0.045em] text-white sm:text-[1.7rem]">{name}</p>
        <p className="mt-1 truncate text-sm text-white/34">{email}</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:justify-end">
        <Link href="/conta/plano" className="inline-flex items-center gap-2 text-xs font-semibold text-white/52 transition-colors hover:text-white">
          <span className="size-1.5 bg-emerald-400" aria-hidden="true" />
          Plano {planNames[plan]}
        </Link>
        <div className="[&_button]:rounded-none [&_button]:border-white/[0.10] [&_button]:bg-transparent [&_button]:px-3.5 [&_button]:py-2.5 [&_button]:text-xs [&_button]:text-white/58 hover:[&_button]:text-white">
          <SignOutButton />
        </div>
      </div>
    </header>
  );
}
