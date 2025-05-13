// import { eq } from "drizzle-orm";

// import type { NewprojectActivities } from "../database/schemas/tables.js";

// import { PROJECT_ACTIVITY_CREATED, PROJECT_ACTIVITY_DELETED, PROJECT_ACTIVITY_FOUND, PROJECT_ACTIVITY_NOT_FOUND } from "../constants/app-messages.js";
// import { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR, OK } from "../constants/http-status-codes.js";
// import { db } from "../database/db.js";
// import { projectActivities } from "../database/schemas/tables.js";
// import factory from "../factory.js";
// import { sendResponse } from "../utils/send-response.js";
// import { vProjectActivity } from "../validations/table-validations.js";

// export const createProjectActivityHandlers = factory.createHandlers(async (c) => {
//   try {
//     const reqBody = await c.req.json();
//     const validatedData = vProjectActivity.parse(reqBody);
//     const result = await db.insert(projectActivities).values(validatedData as NewprojectActivities).returning();
//     return sendResponse(c, CREATED, PROJECT_ACTIVITY_CREATED, result[0]);
//   }
//   catch (error) {
//     return sendResponse(c, BAD_REQUEST, PROJECT_ACTIVITY_NOT_FOUND, error);
//   }
// });

// export const getAllProjectActivitiesHandlers = factory.createHandlers(async (c) => {
//   try {
//     const result = await db.select().from(projectActivities);
//     return sendResponse(c, OK, PROJECT_ACTIVITY_FOUND, result);
//   }
//   catch (error) {
//     return sendResponse(c, INTERNAL_SERVER_ERROR, PROJECT_ACTIVITY_NOT_FOUND);
//   }
// });

// export const getProjectActivityByIdHandlers = factory.createHandlers(async (c) => {
//   try {
//     const id = Number(c.req.param("id"));
//     const result = await db.select().from(projectActivities).where(eq(projectActivities.id, id));
//     return sendResponse(c, OK, PROJECT_ACTIVITY_FOUND, result[0]);
//   }
//   catch (error) {
//     return sendResponse(c, INTERNAL_SERVER_ERROR, PROJECT_ACTIVITY_NOT_FOUND);
//   }
// });

// export const deleteProjectActivityByIdHandlers = factory.createHandlers(async (c) => {
//   try {
//     const id = Number(c.req.param("id"));
//     const result = await db.delete(projectActivities).where(eq(projectActivities.id, id)).returning();
//     return sendResponse(c, OK, PROJECT_ACTIVITY_DELETED, result[0]);
//   }
//   catch (error) {
//     return sendResponse(c, INTERNAL_SERVER_ERROR, PROJECT_ACTIVITY_NOT_FOUND);
//   }
// });
