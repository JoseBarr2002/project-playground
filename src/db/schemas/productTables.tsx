import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";
import { taxRatesTable } from "./taxTables";

export const productsTable = sqliteTable("products", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  retailPrice: int("retail_price").notNull().default(0),
  taxRateId: text("tax_rate_id").references(() => taxRatesTable.id),
  sku: text("sku").unique(),
  currentStock: int("current_stock").default(0),
  reorderPoint: int("reorder_point").default(0),
  reorderQuantity: int("reorder_quantity").default(0),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  isTaxable: int("is_taxable", { mode: "boolean" }).default(true),
  category: text("category"),
  vendorId: text("vendor_id"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const productInventoryTransactionsTable = sqliteTable("product_inventory_transactions", {
  id: text("id").primaryKey(),
  productId: text("product_id")
    .notNull()
    .references(() => productsTable.id, { onDelete: "cascade" }),
  transactionType: text("transaction_type", {
    enum: ["purchase", "sale", "adjustment", "return"]
  }).notNull(),
  quantity: int("quantity").notNull(),
  previousStock: int("previous_stock").notNull(),
  newStock: int("new_stock").notNull(),
  unitPrice: int("unit_price"),
  notes: text("notes"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
}); 