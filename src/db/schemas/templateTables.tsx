import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";
import { customersTable } from "./customerTables";
import { letterTemplatesTable } from "./communicationTables";

export const templateLetterSendsTable = sqliteTable("template_letter_sends", {
  id: text("id").primaryKey(),
  templateId: text("template_id")
    .notNull()
    .references(() => letterTemplatesTable.id),
  sendType: text("send_type", {
    enum: ["email", "sms", "postcard", "batch", "individual"]
  }).notNull(),
  filterCriteria: text("filter_criteria"),
  totalRecipients: int("total_recipients").notNull().default(0),
  successfulSends: int("successful_sends").default(0),
  failedSends: int("failed_sends").default(0),
  startedAt: text("started_at").default("CURRENT_TIMESTAMP"),
  completedAt: text("completed_at"),
  status: text("status", {
    enum: ["pending", "in_progress", "completed", "failed"]
  }).notNull(),
  createdBy: text("created_by")
    .notNull()
    .references(() => usersTable.id),
});

export const templateLetterSendRecordsTable = sqliteTable("template_letter_send_records", {
  id: text("id").primaryKey(),
  batchId: text("batch_id")
    .notNull()
    .references(() => templateLetterSendsTable.id),
  customerId: text("customer_id")
    .notNull()
    .references(() => customersTable.id),
  email: text("email"),
  phone: text("phone"),
  unitNumber: text("unit_number"),
  lockedOutDate: text("locked_out_date"),
  auctionDate: text("auction_date"),
  sentAt: text("sent_at").default("CURRENT_TIMESTAMP"),
  status: text("status", {
    enum: ["success", "failed"]
  }).notNull(),
  errorMessage: text("error_message"),
}); 