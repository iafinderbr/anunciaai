import { index, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

/**
 * Registro mínimo de cada geração usado pelo contador público e pela faixa de
 * atividade recente. Na versão atual, somente canal e horário carregam dados
 * úteis; as demais colunas são legadas e recebem valores neutros para manter
 * compatibilidade com o banco existente sem armazenar o conteúdo do produto.
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
