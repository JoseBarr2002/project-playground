import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";

export const unitTypesTable = sqliteTable("unit_types", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  length: int("length").notNull().default(0),
  width: int("width").notNull().default(0),
  height: int("height").notNull().default(0),
  agreementId: text("agreement_id"),
  price: int("price").notNull().default(0),
  reservationPrice: int("reservation_price").notNull().default(0),
  setupFee: int("setup_fee").notNull().default(0),
  setupFeeName: text("setup_fee_name"),
  deposit: int("deposit").notNull().default(0),
  rentTaxRate: int("rent_tax_rate", { mode: "boolean" }).default(false),
  setupFeeTaxRate: int("setup_fee_tax_rate", { mode: "boolean" }).default(false),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const unitsTable = sqliteTable("units", {
  id: text("id").primaryKey(),
  nameOrNumber: text("name_or_number").notNull(),
  unitTypeId: text("unit_type_id")
    .notNull()
    .references(() => unitTypesTable.id, { onDelete: "restrict" }),
  assignCustomerAccessCode: int("assign_customer_access_code", { mode: "boolean" }).default(true),
  notes: text("notes"),
  unitStatus: text("unit_status", {
    enum: ["available", "occupied", "reserved", "maintenance", "inactive"]
  }).notNull(),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const unitCustomFieldsTable = sqliteTable("unit_custom_fields", {
  id: text("id").primaryKey(),
  unitId: text("unit_id")
    .notNull()
    .references(() => unitsTable.id, { onDelete: "cascade" }),
  fieldName: text("field_name").notNull(),
  fieldValue: text("field_value"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
}); 