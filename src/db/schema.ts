import {
  bigint,
  boolean,
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

/**
 * Registro mínimo de cada geração usado pelo contador público e pela faixa de
 * atividade recente. Somente canal e horário carregam dados úteis; as demais
 * colunas são legadas e recebem valores neutros para não armazenar conteúdo.
 */
export const generations = pgTable(
  "generations",
  {
    id: serial("id").primaryKey(),
    productName: text("product_name").notNull(),
    category: text("category").notNull(),
    audience: text("audience"),
    price: text("price"),
    channel: text("channel").notNull(),
    tone: text("tone").notNull(),
    titlePreview: text("title_preview"),
    featureCount: integer("feature_count").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("generations_created_at_idx").on(table.createdAt)],
);

export const user = pgTable(
  "user",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    emailVerified: boolean("email_verified").notNull().default(false),
    image: text("image"),
    plan: text("plan").notNull().default("free"),
    subscriptionStatus: text("subscription_status").notNull().default("inactive"),
    subscriptionProvider: text("subscription_provider"),
    externalSubscriptionId: text("external_subscription_id"),
    proAccessUntil: timestamp("pro_access_until", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("user_email_unique").on(table.email),
    index("user_plan_idx").on(table.plan),
    index("user_pro_access_until_idx").on(table.proAccessUntil),
    uniqueIndex("user_external_subscription_unique").on(table.externalSubscriptionId),
  ],
);

/**
 * Cada Checkout Pix pago pode conceder acesso uma única vez. O id da sessão é
 * a chave primária para que reenvios do mesmo webhook nunca somem dias de novo.
 */
export const proAccessGrant = pgTable(
  "pro_access_grant",
  {
    checkoutSessionId: text("checkout_session_id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    provider: text("provider").notNull().default("stripe-pix"),
    accessDays: integer("access_days").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("pro_access_grant_user_created_idx").on(table.userId, table.createdAt)],
);

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    token: text("token").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("session_token_unique").on(table.token),
    index("session_user_id_idx").on(table.userId),
    index("session_expires_at_idx").on(table.expiresAt),
  ],
);

export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at", { withTimezone: true }),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at", { withTimezone: true }),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("account_user_id_idx").on(table.userId),
    uniqueIndex("account_provider_account_unique").on(table.providerId, table.accountId),
  ],
);

export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

/**
 * Rate limit do Better Auth persistido no PostgreSQL. Em ambiente serverless,
 * isso mantém o contador consistente entre instâncias diferentes da aplicação.
 */
export const rateLimit = pgTable(
  "rate_limit",
  {
    id: text("id").primaryKey(),
    key: text("key").notNull(),
    count: integer("count").notNull(),
    lastRequest: bigint("last_request", { mode: "number" }).notNull(),
  },
  (table) => [index("rate_limit_key_idx").on(table.key)],
);

/**
 * Histórico opt-in. Diferente do contador anônimo, esta tabela só recebe
 * conteúdo quando um usuário autenticado clica explicitamente em salvar.
 */
export const savedGeneration = pgTable(
  "saved_generation",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    productName: text("product_name").notNull(),
    channel: text("channel").notNull(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("saved_generation_user_created_idx").on(table.userId, table.createdAt),
    index("saved_generation_user_idx").on(table.userId),
  ],
);

/**
 * Biblioteca de produtos da conta. O usuário escolhe explicitamente quando
 * salvar os dados de um produto para reutilizá-los em outros geradores.
 */
export const savedProduct = pgTable(
  "saved_product",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    productName: text("product_name").notNull(),
    category: text("category").notNull(),
    price: text("price").notNull().default(""),
    audience: text("audience").notNull().default(""),
    features: text("features").notNull(),
    channel: text("channel").notNull(),
    tone: text("tone").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("saved_product_user_updated_idx").on(table.userId, table.updatedAt),
    index("saved_product_user_idx").on(table.userId),
  ],
);

export type Generation = typeof generations.$inferSelect;
export type NewGeneration = typeof generations.$inferInsert;
export type User = typeof user.$inferSelect;
export type ProAccessGrant = typeof proAccessGrant.$inferSelect;
export type Session = typeof session.$inferSelect;
export type Account = typeof account.$inferSelect;
export type RateLimit = typeof rateLimit.$inferSelect;
export type SavedGeneration = typeof savedGeneration.$inferSelect;
export type NewSavedGeneration = typeof savedGeneration.$inferInsert;
export type SavedProduct = typeof savedProduct.$inferSelect;
export type NewSavedProduct = typeof savedProduct.$inferInsert;
