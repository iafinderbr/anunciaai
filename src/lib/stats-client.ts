export interface RecentGeneration {
  id: number;
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
        total: typeof data.total === "number" ? data.total : 0,
        recent: Array.isArray(data.recent) ? data.recent : [],
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
