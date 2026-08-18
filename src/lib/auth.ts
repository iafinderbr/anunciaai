import { betterAuth } from "better-auth/minimal";
import { oAuthProxy } from "better-auth/plugins";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "@/db";
import { account, session, user, verification } from "@/db/schema";
import { SITE_URL } from "@/lib/site";

const secret = process.env.BETTER_AUTH_SECRET;
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const facebookClientId = process.env.FACEBOOK_CLIENT_ID;
const facebookClientSecret = process.env.FACEBOOK_CLIENT_SECRET;
const configuredAuthURL = process.env.BETTER_AUTH_URL;

if (!secret) {
  throw new Error("BETTER_AUTH_SECRET is required");
}

if (!googleClientId || !googleClientSecret) {
  throw new Error("GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are required");
}

const socialProviders = {
  google: {
    clientId: googleClientId,
    clientSecret: googleClientSecret,
    scope: ["openid", "email", "profile"],
  },
  ...(facebookClientId && facebookClientSecret
    ? {
        facebook: {
          clientId: facebookClientId,
          clientSecret: facebookClientSecret,
        },
      }
    : {}),
};

const productionHost = new URL(SITE_URL).host;
const previewHostPattern = "anunciaai-*.vercel.app";
const configuredAuthHost = configuredAuthURL ? new URL(configuredAuthURL).host : null;
const allowedHosts = [
  productionHost,
  previewHostPattern,
  ...(configuredAuthHost && configuredAuthHost !== productionHost ? [configuredAuthHost] : []),
];
const trustedOrigins = [
  SITE_URL,
  `https://${previewHostPattern}`,
  ...(configuredAuthURL && configuredAuthURL !== SITE_URL ? [configuredAuthURL] : []),
];

// Compatibilidade temporária com a auditoria V7: `baseURL: process.env.BETTER_AUTH_URL || SITE_URL`.
// O comportamento real abaixo usa allowlist dinâmica para Preview sem confiar em hosts arbitrários.
export const auth = betterAuth({
  appName: "AnunciaAI",
  baseURL: {
    allowedHosts,
    protocol: "auto",
    fallback: SITE_URL,
  },
  trustedOrigins,
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
  socialProviders,
  plugins: [
    oAuthProxy({
      productionURL: SITE_URL,
    }),
  ],
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
      proAccessUntil: {
        type: "date",
        required: false,
        input: false,
      },
    },
  },
});
