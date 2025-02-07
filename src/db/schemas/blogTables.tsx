import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./userTables";

export const blogPostsTable = sqliteTable("blog_posts", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  summary: text("summary"),
  body: text("body").notNull(),
  metaKeywords: text("meta_keywords"),
  metaDescription: text("meta_description"),
  status: text("status", {
    enum: ["draft", "published", "archived"]
  }).notNull().default("draft"),
  publishedAt: text("published_at"),
  featuredImageUrl: text("featured_image_url"),
  isFeatured: int("is_featured", { mode: "boolean" }).default(false),
  viewCount: int("view_count").default(0),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
  lastUpdatedBy: text("last_updated_by").references(() => usersTable.id),
});

export const blogCategoriesTable = sqliteTable("blog_categories", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
});

export const blogPostCategoriesTable = sqliteTable("blog_post_categories", {
  postId: text("post_id")
    .notNull()
    .references(() => blogPostsTable.id, { onDelete: "cascade" }),
  categoryId: text("category_id")
    .notNull()
    .references(() => blogCategoriesTable.id, { onDelete: "cascade" }),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const blogPostRevisionsTable = sqliteTable("blog_post_revisions", {
  id: text("id").primaryKey(),
  postId: text("post_id")
    .notNull()
    .references(() => blogPostsTable.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  body: text("body").notNull(),
  summary: text("summary"),
  metaKeywords: text("meta_keywords"),
  metaDescription: text("meta_description"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  createdBy: text("created_by").references(() => usersTable.id),
}); 