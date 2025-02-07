import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";
import { customersTable } from "./customerTables";

export const customFieldsTable = sqliteTable("custom_fields", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  fieldType: text("field_type", {
    enum: ["text", "number", "date", "boolean", "select", "multi_select"]
  }).notNull(),
  options: text("options"),
  requiredOnSignup: int("required_on_signup", { mode: "boolean" }).default(false),
  showOnSignup: int("show_on_signup", { mode: "boolean" }).default(false),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  displayOrder: int("display_order").default(0),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const customFieldValuesTable = sqliteTable("custom_field_values", {
  id: text("id").primaryKey(),
  customFieldId: text("custom_field_id")
    .notNull()
    .references(() => customFieldsTable.id, { onDelete: "cascade" }),
  customerId: text("customer_id")
    .notNull()
    .references(() => customersTable.id, { onDelete: "cascade" }),
  value: text("value").notNull(),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const rateManagementSettingsTable = sqliteTable("rate_management_settings", {
  id: text("id").primaryKey(),
  isEnabled: int("is_enabled", { mode: "boolean" }).default(false),
  reminderDayOfMonth: int("reminder_day_of_month").default(0),
  roundUnitTypePriceToDollar: int("round_unit_type_price_to_dollar", { mode: "boolean" }).default(false),
  roundRentalPriceToDollar: int("round_rental_price_to_dollar", { mode: "boolean" }).default(false),
  advanceNoticeDays: int("advance_notice_days").default(0),
  allowExceedStreetRate: int("allow_exceed_street_rate", { mode: "boolean" }).default(false),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const proratingOptionsTable = sqliteTable("prorating_options", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  prorateType: text("prorate_type", {
    enum: ["none", "first_month", "first_and_last", "first_next_full"]
  }).notNull(),
  calculationMethod: text("calculation_method", {
    enum: ["daily_rate", "fixed_daily_rate", "percentage"]
  }).notNull(),
  isDefault: int("is_default", { mode: "boolean" }).default(false),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
}); 