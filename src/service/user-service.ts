import type { NewUser } from "../database/schemas/users.js";

import db from "../database/db.js";
import { users } from "../database/schemas/users.js";
import { deleteRecordById, getAllRecords, getPaginatedRecords, getRecordById } from "./baseservices.js";
// save user
export async function createUser(userData: NewUser) {
  const user = await db.insert(users).values(userData).returning();
  return user[0];
}
// get user by id
export async function getUserById(userId: number) {
  return await getRecordById(users, userId);
}
// get all users
export async function getAllUsers() {
  return await getAllRecords(users);
}

export async function getUserPaginated(limit: number, offset: number) {
  return await getPaginatedRecords(users, limit, offset);
}

// delete user by id
export async function deleteUserById(userId: number) {
  return await deleteRecordById(users, userId);
}
