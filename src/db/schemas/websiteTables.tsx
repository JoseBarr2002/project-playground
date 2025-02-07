import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";

export const websitePagesTable = sqliteTable("website_pages", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content"),
  metaDescription: text("meta_description"),
  metaKeywords: text("meta_keywords"),
  isPublished: int("is_published", { mode: "boolean" }).default(false),
  pageOrder: int("page_order").default(0),
  parentPageId: text("parent_page_id").references(() => websitePagesTable.id),
  template: text("template", {
    enum: ["default", "home", "contact", "map", "availability"]
  }),
  tabName: text("tab_name"),
  tabVisibility: text("tab_visibility", {
    enum: ["show_in_main_menu", "show_in_footer", "hidden"]
  }).default("hidden"),
  footerButtonText: text("footer_button_text"),
  loginFormLinkText: text("login_form_link_text"),
  widgetsEnabled: int("widgets_enabled", { mode: "boolean" }).default(false),
  lastPublishedAt: text("last_published_at"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const websiteSettingsTable = sqliteTable("website_settings", {
  id: text("id").primaryKey(),
  settingKey: text("setting_key").notNull().unique(),
  settingValue: text("setting_value"),
  settingGroup: text("setting_group", {
    enum: ["general", "seo", "social", "analytics", "navigation", "appearance"]
  }).notNull(),
  description: text("description"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  updatedBy: text("updated_by").references(() => usersTable.id),
});

export const websiteNavigationTable = sqliteTable("website_navigation", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  linkType: text("link_type", {
    enum: ["page", "external"]
  }).notNull(),
  pageId: text("page_id").references(() => websitePagesTable.id),
  externalUrl: text("external_url"),
  displaySection: text("display_section", {
    enum: ["main_menu", "more_dropdown", "hidden"]
  }).default("main_menu"),
  position: int("position").default(0),
  parentId: text("parent_id").references(() => websiteNavigationTable.id),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
}); 