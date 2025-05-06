import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const todolist = pgTable("todolist", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
});
