import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/lib/auth";
import { ensureDatabaseSchema } from "@/db/ensure-schema";

const handler = toNextJsHandler(auth);

export async function GET(request: Request) {
  await ensureDatabaseSchema();
  return handler.GET(request);
}

export async function POST(request: Request) {
  await ensureDatabaseSchema();
  return handler.POST(request);
}
