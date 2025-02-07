import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
  id: text("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  phoneNumber: text("phone_number").notNull(),
  passwordHash: text("password_hash").notNull(),
  homePage: text("home_page", {
    enum: ["Dashboard", "Site Map", "Grid View", "List View", "All Customers", "Reports"]
  }).notNull().default("Dashboard"),
  role: text("role", {
    enum: ["Manager", "Sales Associate"]
  }).notNull(),
  isOwner: int("is_owner", { mode: "boolean" }).default(false),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  lastLogin: text("last_login"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
}); 