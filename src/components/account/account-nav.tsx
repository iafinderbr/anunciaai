import Link from "next/link";

const items = [
  { href: "/conta", label: "Visão geral", key: "overview" },
  { href: "/conta/historico", label: "Histórico", key: "history" },
  { href: "/conta/produtos", label: "Produtos", key: "products" },
  { href: "/conta/pro", label: "Pro", key: "pro" },
  { href: "/conta/plano", label: "Plano", key: "plan" },
  { href: "/ferramentas", label: "Ferramentas", key: "tools" },
] as const;

type AccountNavKey = (typeof items)[number]["key"];

export function AccountNav({ active }: { active: AccountNavKey }) {
  return (
    <nav
      aria-label="Navegação da conta"
      className="scrollbar-none flex gap-1 overflow-x-auto rounded-2xl border border-line bg-canvas/70 p-1.5 shadow-card"
    >
      {items.map((item) => {
        const isActive = item.key === active;
        return (
          <Link
            key={item.key}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`interactive-lift shrink-0 rounded-xl px-3.5 py-2.5 text-sm font-semibold ${
              isActive
                ? "border border-line-strong bg-white text-ink shadow-card"
                : "border border-transparent text-ink-soft hover:bg-white hover:text-brand-700"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
