import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";

export const websiteImagesTable = sqliteTable("website_images", {
  id: text("id").primaryKey(),
  filename: text("filename").notNull(),
  filePath: text("file_path").notNull(),
  fileSize: int("file_size").notNull(),
  mimeType: text("mime_type").notNull(),
  title: text("title").notNull(),
  altText: text("alt_text"),
  width: int("width"),
  height: int("height"),
  seoTitle: text("seo_title"),
  description: text("description"),
  usageCount: int("usage_count").default(0),
  lastUsedAt: text("last_used_at"),
  tags: text("tags"),
  folder: text("folder").default("general"),
  originalFilename: text("original_filename"),
  hash: text("hash"),
  isActive: int("is_active", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const websiteImageUsageTable = sqliteTable("website_image_usage", {
  id: text("id").primaryKey(),
  imageId: text("image_id")
    .notNull()
    .references(() => websiteImagesTable.id, { onDelete: "cascade" }),
  usageType: text("usage_type", {
    enum: ["page", "blog_post", "gallery", "header", "background"]
  }).notNull(),
  referenceId: text("reference_id").notNull(),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
}); 