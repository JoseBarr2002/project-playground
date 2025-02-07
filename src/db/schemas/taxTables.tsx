import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";

export const taxRatesTable = sqliteTable("tax_rates", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  rate: text("rate").notNull(),
  description: text("description"),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  appliesTo: text("applies_to", {
    enum: ["rent", "fees", "merchandise", "insurance", "all"]
  }).notNull(),
  effectiveFrom: text("effective_from"),
  effectiveUntil: text("effective_until"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
}); 