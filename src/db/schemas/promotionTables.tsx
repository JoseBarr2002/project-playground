import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";
import { customersTable } from "./customerTables";
import { rentalsTable } from "./rentalTables";
import { unitTypesTable } from "./unitTables";

export const promotionsTable = sqliteTable("promotions", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  startDate: text("start_date"),
  endDate: text("end_date"),
  isManual: int("is_manual", { mode: "boolean" }).default(true),
  promoCode: text("promo_code"),
  isAutomatic: int("is_automatic", { mode: "boolean" }).default(false),
  discountType: text("discount_type", {
    enum: ["percentage", "fixed_amount", "free_months"]
  }).notNull(),
  discountValue: int("discount_value").notNull(),
  billingCyclesToApply: int("billing_cycles_to_apply").default(1),
  applyImmediately: int("apply_immediately", { mode: "boolean" }).default(true),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const promotionUnitTypesTable = sqliteTable("promotion_unit_types", {
  promotionId: text("promotion_id")
    .notNull()
    .references(() => promotionsTable.id, { onDelete: "cascade" }),
  unitTypeId: text("unit_type_id")
    .notNull()
    .references(() => unitTypesTable.id, { onDelete: "cascade" }),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
});

export const promotionUsageTable = sqliteTable("promotion_usage", {
  id: text("id").primaryKey(),
  promotionId: text("promotion_id")
    .notNull()
    .references(() => promotionsTable.id),
  customerId: text("customer_id")
    .notNull()
    .references(() => customersTable.id),
  rentalId: text("rental_id")
    .notNull()
    .references(() => rentalsTable.id),
  appliedAt: text("applied_at").default("CURRENT_TIMESTAMP"),
  discountAmount: int("discount_amount").notNull(),
  createdBy: text("created_by").references(() => usersTable.id),
});

export const rentalPlansTable = sqliteTable("rental_plans", {
  id: text("id").primaryKey(),
  unitTypeId: text("unit_type_id")
    .notNull()
    .references(() => unitTypesTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  monthlyRate: int("monthly_rate").notNull(),
  setupFee: int("setup_fee").default(0),
  depositRequired: int("deposit_required", { mode: "boolean" }).default(false),
  depositAmount: int("deposit_amount").default(0),
  chargeSetupFee: int("charge_setup_fee", { mode: "boolean" }).default(false),
  setupFeeTaxRateId: text("setup_fee_tax_rate_id"),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
}); 