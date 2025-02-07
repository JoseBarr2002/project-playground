import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";
import { customersTable } from "./customerTables";
import { unitTypesTable } from "./unitTables";

export const waitingListTable = sqliteTable("waiting_list", {
  id: text("id").primaryKey(),
  customerId: text("customer_id").references(() => customersTable.id),
  name: text("name").notNull(),
  email: text("email").notNull(),
  cellPhone: text("cell_phone").notNull(),
  acceptsTextMessages: int("accepts_text_messages", { mode: "boolean" }).default(false),
  isNewCustomer: int("is_new_customer", { mode: "boolean" }).default(true),
  desiredUnitTypeId: text("desired_unit_type_id")
    .notNull()
    .references(() => unitTypesTable.id),
  desiredMoveInDate: text("desired_move_in_date").notNull(),
  notes: text("notes"),
  status: text("status", {
    enum: ["active", "contacted", "converted", "cancelled", "expired"]
  }).notNull().default("active"),
  position: int("position"),
  lastContactedAt: text("last_contacted_at"),
  contactAttempts: int("contact_attempts").default(0),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const waitingListContactsTable = sqliteTable("waiting_list_contacts", {
  id: text("id").primaryKey(),
  waitingListId: text("waiting_list_id")
    .notNull()
    .references(() => waitingListTable.id, { onDelete: "cascade" }),
  contactType: text("contact_type", {
    enum: ["email", "phone", "text", "in_person"]
  }).notNull(),
  contactResult: text("contact_result", {
    enum: ["successful", "no_answer", "left_message", "wrong_number", "bounced_email"]
  }).notNull(),
  notes: text("notes"),
  contactedAt: text("contacted_at").default("CURRENT_TIMESTAMP"),
  contactedBy: text("contacted_by")
    .notNull()
    .references(() => usersTable.id),
}); 