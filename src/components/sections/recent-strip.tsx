import { desc } from "drizzle-orm";
import { db } from "@/db";
import { ensureDatabaseSchema } from "@/db/ensure-schema";
import { generations } from "@/db/schema";
import { CHANNEL_LABEL } from "@/lib/generator-data";
import type { Channel } from "@/lib/types";

function timeAgo(date: Date): string {
  const diff = Date.now() - date.getTime();
  const minutes = Math.round(diff / 60000);
  if (minutes < 1) return "agora mesmo";
  if (minutes < 60) return `há ${minutes} min`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `há ${hours}h`;
  const days = Math.round(hours / 24);
  return days === 1 ? "ontem" : `há ${days} dias`;
}

export async function RecentStrip() {
  let rows: { id: number; channel: string; createdAt: Date }[] = [];

  try {
    await ensureDatabaseSchema();
    rows = await db
      .select({
        id: generations.id,
        channel: generations.channel,
        createdAt: generations.createdAt,
      })
      .from(generations)
      .orderBy(desc(generations.createdAt))
      .limit(6);
  } catch {
    rows = [];
  }

  if (rows.length === 0) return null;

  return (
    <section aria-labelledby="recentes-titulo" className="container-page pb-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-white p-5 shadow-card">
        <h2 id="recentes-titulo" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          Gerados recentemente
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {rows.map((row) => (
            <li
              key={row.id}
              className="flex items-center gap-2 rounded-full border border-line bg-canvas px-3 py-1.5 text-xs text-ink-soft"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-brand-500" />
              <span className="font-medium text-ink">Anúncio gerado</span>
              <span className="text-muted">
                {CHANNEL_LABEL[row.channel as Channel] ?? "Outros canais"} · {timeAgo(new Date(row.createdAt))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
