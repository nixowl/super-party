import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core"
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm"

export const users = pgTable("users", {
  id: varchar("id", { length: 255 }).primaryKey().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const tokens = pgTable("tokens", {
  hash: varchar("hash", { length: 255 }).notNull(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  expiry: timestamp("expiry").notNull().defaultNow(),
  scope: varchar("scope", { length: 255 }).notNull(),
})

export const posts = pgTable("posts", {
  id: varchar("id", { length: 255 }).primaryKey().notNull(),
  content: varchar("body", { length: 255 }).notNull(),
  userId: varchar("user_id", { length: 255 }).references(() => users.id, {onDelete: "cascade"}).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export type UserType = InferSelectModel<typeof users>
export type UserInsertType = InferInsertModel<typeof users>

export type TokenInsertType = InferInsertModel<typeof tokens>
export type TokenType = InferSelectModel<typeof tokens>

export type PostType = InferSelectModel<typeof posts>
export type PostInsertType = InferInsertModel<typeof posts>