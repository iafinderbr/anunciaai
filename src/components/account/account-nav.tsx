import Link from "next/link";

type AccountNavKey = "overview" | "history" | "products" | "pro" | "plan" | "tools";

const items: ReadonlyArray<{
  href: string;
  label: string;
  activeKeys: readonly AccountNavKey[];
}> = [
  { href: "/conta", label: "Início", activeKeys: ["overview"] },
  { href: "/conta/historico", label: "Biblioteca", activeKeys: ["history", "products"] },
  { href: "/conta/plano", label: "Planos", activeKeys: ["plan", "pro"] },
  { href: "/ferramentas", label: "Ferramentas", activeKeys: ["tools"] },
];

export function AccountNav({ active }: { active: AccountNavKey }) {
  return (
    <nav
      aria-label="Navegação da conta"
      className="scrollbar-none flex gap-7 overflow-x-auto border-y border-white/[0.09] bg-[#0f1013] px-1 sm:gap-9"
    >
      {items.map((item) => {
        const isActive = item.activeKeys.includes(active);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`relative shrink-0 py-3.5 text-[13px] font-semibold transition-colors ${
              isActive ? "text-white" : "text-white/40 hover:text-white/76"
            }`}
          >
            {item.label}
            {isActive ? <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-500" /> : null}
          </Link>
        );
      })}
    </nav>
  );
}
