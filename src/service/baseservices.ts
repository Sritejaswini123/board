import { count, eq } from "drizzle-orm";

import type { NewUser, User, UsersTable } from "../database/schemas/users.js";

import db from "../database/db.js";
import { users } from "../database/schemas/users.js";

type DBTable = UsersTable;
type NewDBRecord = NewUser;
type DBRecordRow = User;

export async function createUser<DBRecordRow>(table: DBTable, record: NewDBRecord) {
  const result = await db.insert(table).values(record).returning();
  return result[0];
}

export async function getRecordById<DBRecordRow>(table: DBTable, id: number) {
  const result = await db.select().from(table).where(eq(users.id, id));
  return result[0];
}

// get all users
export async function getAllRecords<DBRecordRow>(table: DBTable) {
  const result = await db.select().from(table);
  const totalCount = await db.select({ count: count() }).from(table).then(res => Number(res[0].count));

  return { result, totalCount };
}
// getPaginatedRecords
export async function getPaginatedRecords<DBRecordRow>(table: DBTable, limit: number, offset: number) {
  const result = await db.select().from(table).orderBy(users.id).limit(limit).offset(offset);
  return result;
}

// delete
export async function deleteRecordById<DBRecordRow>(table: DBTable, id: number) {
  const result = await db.delete(table).where(eq(users.id, id)).returning();
  return result[0];
}
