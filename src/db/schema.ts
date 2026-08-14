import { index, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

/**
 * Registro leve de cada anúncio gerado na ferramenta.
 * Serve para o contador público ("anúncios gerados") e para a
 * lista de últimos produtos processados na landing page.
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

export type Generation = typeof generations.$inferSelect;
export type NewGeneration = typeof generations.$inferInsert;
