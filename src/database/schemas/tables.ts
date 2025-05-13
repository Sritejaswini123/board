import { date, index, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const projectActivities = pgTable("project_activities", {
  id: serial().primaryKey(),

  project_name: text().notNull(),
  month: text().notNull(),
  date: date({ mode: "date" }).notNull(),

  time: timestamp().notNull().defaultNow(),
  lines_of_code: text().notNull(),

  project_url: text().notNull(),
  commit_link: text().notNull(),
  commit_name: text().notNull(),
  actions: text().notNull(),

  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
  deleted_at: timestamp(),

}, t => [
  index("project_name_idx").on(t.project_name),

]);

export type Projecttable = typeof projectActivities;
export type projectActivities = typeof projectActivities.$inferSelect;

export type NewprojectActivities = typeof projectActivities .$inferInsert;
