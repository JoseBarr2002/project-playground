import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";
import { unitTypesTable } from "./unitTables";

export const feesTable = sqliteTable("fees", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  amount: int("amount").notNull().default(0),
  feeType: text("fee_type", {
    enum: ["one_time", "recurring", "conditional", "service"]
  }).notNull(),
  frequency: text("frequency", {
    enum: ["once", "daily", "weekly", "monthly", "annually", "per_occurrence"]
  }),
  isTaxable: int("is_taxable", { mode: "boolean" }).default(false),
  isMandatory: int("is_mandatory", { mode: "boolean" }).default(false),
  isRefundable: int("is_refundable", { mode: "boolean" }).default(false),
  applyToNewRentals: int("apply_to_new_rentals", { mode: "boolean" }).default(true),
  conditions: text("conditions"),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const unitTypeFeesTable = sqliteTable("unit_type_fees", {
  unitTypeId: text("unit_type_id")
    .notNull()
    .references(() => unitTypesTable.id, { onDelete: "cascade" }),
  feeId: text("fee_id")
    .notNull()
    .references(() => feesTable.id, { onDelete: "cascade" }),
  overrideAmount: int("override_amount"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
}); 