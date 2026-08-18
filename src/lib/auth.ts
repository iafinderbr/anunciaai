import { betterAuth } from "better-auth/minimal";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "@/db";
import { account, session, user, verification } from "@/db/schema";
import { SITE_URL } from "@/lib/site";

const secret = process.env.BETTER_AUTH_SECRET;
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!secret) {
  throw new Error("BETTER_AUTH_SECRET is required");
}

if (!googleClientId || !googleClientSecret) {
  throw new Error("GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are required");
}

export const auth = betterAuth({
  appName: "AnunciaAI",
  baseURL: process.env.BETTER_AUTH_URL || SITE_URL,
  secret,
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: { user, session, account, verification },
  }),
  account: {
    // O Better Auth armazena dados de conta OAuth no banco. Criptografar os
    // tokens reduz o impacto de uma eventual exposição isolada da base.
    encryptOAuthTokens: true,
  },
  socialProviders: {
    google: {
      clientId: googleClientId,
      clientSecret: googleClientSecret,
      scope: ["openid", "email", "profile"],
    },
  },
  user: {
    additionalFields: {
      plan: {
        type: "string",
        required: false,
        defaultValue: "free",
        input: false,
      },
      subscriptionStatus: {
        type: "string",
        required: false,
        defaultValue: "inactive",
        input: false,
      },
      subscriptionProvider: {
        type: "string",
        required: false,
        input: false,
      },
      externalSubscriptionId: {
        type: "string",
        required: false,
        input: false,
      },
    },
  },
});
