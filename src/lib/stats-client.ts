export interface RecentGeneration {
  channel: string;
  createdAt: string;
}

export interface StatsResponse {
  total: number;
  recent: RecentGeneration[];
}

let cachedStats: StatsResponse | null = null;
let cachedAt = 0;
let inFlight: Promise<StatsResponse> | null = null;

const CACHE_TTL_MS = 2_000;
const MAX_RECENT = 6;

function normalizeRecent(value: unknown): RecentGeneration[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === "object" && !Array.isArray(item))
    .flatMap((item) => {
      if (typeof item.channel !== "string" || typeof item.createdAt !== "string") return [];
      if (item.channel.length === 0 || item.channel.length > 40) return [];
      if (!Number.isFinite(Date.parse(item.createdAt))) return [];
      return [{ channel: item.channel, createdAt: item.createdAt }];
    })
    .slice(0, MAX_RECENT);
}

export async function loadStats(force = false): Promise<StatsResponse> {
  if (inFlight) return inFlight;

  if (!force && cachedStats && Date.now() - cachedAt < CACHE_TTL_MS) {
    return cachedStats;
  }

  inFlight = fetch("/api/generations", { cache: "no-store" })
    .then(async (response) => {
      if (!response.ok) throw new Error("Falha ao carregar estatísticas");
      const data = (await response.json()) as Partial<StatsResponse>;
      return {
        total: Number.isSafeInteger(data.total) && (data.total ?? -1) >= 0 ? (data.total as number) : 0,
        recent: normalizeRecent(data.recent),
      };
    })
    .then((data) => {
      cachedStats = data;
      cachedAt = Date.now();
      return data;
    })
    .finally(() => {
      inFlight = null;
    });

  return inFlight;
}

export function invalidateStatsCache() {
  cachedStats = null;
  cachedAt = 0;
}
