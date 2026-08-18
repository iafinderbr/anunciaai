import Link from "next/link";

const items = [
  { href: "/conta", label: "Visão geral", key: "overview" },
  { href: "/conta/historico", label: "Histórico", key: "history" },
  { href: "/conta/produtos", label: "Produtos", key: "products" },
  { href: "/conta/pro", label: "Pro", key: "pro" },
  { href: "/conta/plano", label: "Outros modos", key: "plan" },
  { href: "/ferramentas", label: "Ferramentas", key: "tools" },
] as const;

type AccountNavKey = (typeof items)[number]["key"];

export function AccountNav({ active }: { active: AccountNavKey }) {
  return (
    <nav
      aria-label="Navegação da conta"
      className="scrollbar-none flex gap-6 overflow-x-auto border-y border-white/[0.09] bg-[#0f1013] px-1 sm:gap-8"
    >
      {items.map((item) => {
        const isActive = item.key === active;
        return (
          <Link
            key={item.key}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`relative shrink-0 py-4 text-[13px] font-semibold transition-colors ${
              isActive ? "text-white" : "text-white/42 hover:text-white/76"
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
