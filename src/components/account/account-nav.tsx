import Link from "next/link";

const items = [
  { href: "/conta", label: "Visão geral", key: "overview" },
  { href: "/conta/historico", label: "Histórico", key: "history" },
  { href: "/conta/produtos", label: "Produtos", key: "products" },
  { href: "/conta/plano", label: "Plano", key: "plan" },
  { href: "/ferramentas", label: "Ferramentas", key: "tools" },
] as const;

type AccountNavKey = (typeof items)[number]["key"];

export function AccountNav({ active }: { active: AccountNavKey }) {
  return (
    <nav
      aria-label="Navegação da conta"
      className="flex gap-1 overflow-x-auto rounded-2xl border border-line bg-white p-1.5 shadow-card"
    >
      {items.map((item) => {
        const isActive = item.key === active;
        return (
          <Link
            key={item.key}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
              isActive
                ? "bg-ink text-white"
                : "text-ink-soft hover:bg-canvas hover:text-brand-700"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
