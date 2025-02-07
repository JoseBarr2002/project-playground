import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";

export const addressesTable = sqliteTable("addresses", {
  id: text("id").primaryKey(),
  addressType: text("address_type", {
    enum: ["physical", "billing", "mailing", "facility"]
  }).notNull(),
  addressLine1: text("address_line1").notNull(),
  addressLine2: text("address_line2"),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zip: text("zip").notNull(),
  phone: text("phone"),
  website: text("website"),
  isPrimary: text("is_primary").default("false"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
}); 