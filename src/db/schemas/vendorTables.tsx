import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";

export const vendorsTable = sqliteTable("vendors", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  contactPerson: text("contact_person"),
  email: text("email"),
  phone: text("phone"),
  address: text("address"),
  city: text("city"),
  state: text("state"),
  zip: text("zip"),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  notes: text("notes"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
}); 