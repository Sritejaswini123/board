import { z } from "zod";
 import { projectActivities } from "../database/schemas/tables.js";
export const vProjectActivity = z.object({
  project_name: z.string().min(1, { message: "Project name must be required" }),
  month: z.string().min(3, { message: " Month must be at least 3 characters" }),
date: z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Date must be in YYYY-MM-DD format" })
  .transform(val => new Date(val)),

  lines_of_code: z.string().regex(/^\d+$/, { message: "Lines must be numeric value only" }),
   project_url: z.string().url({ message: "Invalid project link" }),
  commit_link: z.string().url({ message: "Invalid commit link" }),
  commit_name: z.string().min(1, { message: "commit must be required" }),
  actions: z.string().min(1, { message: "Actions must be required" }),
});

export type ValidatedProjectActivity = z.infer<typeof vProjectActivity>;
