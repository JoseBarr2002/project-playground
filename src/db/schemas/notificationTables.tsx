import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const notificationTypesTable = sqliteTable("notification_types", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  category: text("category", {
    enum: ["payment", "account", "lease", "maintenance", "system"]
  }).notNull(),
  isActive: int("is_active", { mode: "boolean" }).default(true),
});

export const notificationPreferencesTable = sqliteTable("notification_preferences", {
  id: text("id").primaryKey(),
  notificationTypeId: text("notification_type_id")
    .notNull()
    .references(() => notificationTypesTable.id),
  emailEnabled: int("email_enabled", { mode: "boolean" }).default(true),
  smsEnabled: int("sms_enabled", { mode: "boolean" }).default(true),
  printEnabled: int("print_enabled", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
}); 