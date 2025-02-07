import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";
import { customersTable } from "./customerTables";
import { invoicesTable } from "./financialTables";

export const paymentMethodsTable = sqliteTable("payment_methods", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type", {
    enum: ["credit", "debit", "ach", "cash", "check", "other"]
  }).notNull(),
  provider: text("provider").notNull(),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  displayName: text("display_name").notNull(),
  processingFeePercent: text("processing_fee_percent").default("0"),
  processingFeeFlat: int("processing_fee_flat").default(0),
  requiresBillingAddress: int("requires_billing_address", { mode: "boolean" }).default(true),
  autoPaymentEligible: int("auto_payment_eligible", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const storedPaymentMethodsTable = sqliteTable("stored_payment_methods", {
  id: text("id").primaryKey(),
  customerId: text("customer_id")
    .notNull()
    .references(() => customersTable.id, { onDelete: "cascade" }),
  paymentMethodId: text("payment_method_id")
    .notNull()
    .references(() => paymentMethodsTable.id),
  token: text("token").notNull(),
  lastFour: text("last_four"),
  expiryMonth: int("expiry_month"),
  expiryYear: int("expiry_year"),
  cardBrand: text("card_brand"),
  bankName: text("bank_name"),
  accountType: text("account_type", {
    enum: ["checking", "savings"]
  }),
  isDefault: int("is_default", { mode: "boolean" }).default(false),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  billingName: text("billing_name"),
  billingAddress: text("billing_address"),
  billingCity: text("billing_city"),
  billingState: text("billing_state"),
  billingZip: text("billing_zip"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
});

export const paymentTransactionsTable = sqliteTable("payment_transactions", {
  id: text("id").primaryKey(),
  customerId: text("customer_id")
    .notNull()
    .references(() => customersTable.id),
  invoiceId: text("invoice_id").references(() => invoicesTable.id),
  paymentMethodId: text("payment_method_id")
    .notNull()
    .references(() => paymentMethodsTable.id),
  storedPaymentMethodId: text("stored_payment_method_id")
    .references(() => storedPaymentMethodsTable.id),
  amount: int("amount").notNull(),
  processingFee: int("processing_fee").default(0),
  status: text("status", {
    enum: ["pending", "authorized", "captured", "failed", "voided", "refunded"]
  }).notNull(),
  gatewayTransactionId: text("gateway_transaction_id"),
  gatewayReference: text("gateway_reference"),
  errorCode: text("error_code"),
  errorMessage: text("error_message"),
  metadata: text("metadata"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  processedAt: text("processed_at"),
  createdBy: text("created_by").references(() => usersTable.id),
  voidedAt: text("voided_at"),
  voidedBy: text("voided_by").references(() => usersTable.id),
  voidReason: text("void_reason"),
});

export const gatewayResponsesTable = sqliteTable("gateway_responses", {
  id: text("id").primaryKey(),
  transactionId: text("transaction_id")
    .notNull()
    .references(() => paymentTransactionsTable.id),
  responseType: text("response_type", {
    enum: ["authorization", "capture", "void", "refund"]
  }).notNull(),
  isSuccess: int("is_success", { mode: "boolean" }).default(false),
  responseCode: text("response_code"),
  responseMessage: text("response_message"),
  rawResponse: text("raw_response"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
}); 