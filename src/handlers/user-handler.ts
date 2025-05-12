import type { NewUser, User } from "../database/schemas/users.js";

import { USER_CREATED, USER_DELETEED, USER_FOUND, USER_ID_REQUIRED, USER_NOT_FOUND } from "../constants/app-messages.js";
import { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK } from "../constants/http-status-codes.js";
import { UNPROCESSABLE_ENTITY } from "../constants/http-status-phrases.js";
import { users } from "../database/schemas/users.js";
import factory from "../factory.js";
import { createUser } from "../service/baseservices.js";
import { deleteUserById, getAllUsers, getUserById, getUserPaginated } from "../service/user-service.js";
import { sendResponse } from "../utils/send-response.js";
import { vCreateUser } from "../validations/user-validations.js";

export const createUserHandlers = factory.createHandlers(async (c) => {
  try {
    const reqBody = await c.req.json();
    const validUserReq = vCreateUser.parse(reqBody);
    const userData: NewUser = {
      ...validUserReq,
    };
    const user = await createUser<User>(users, userData);
    return sendResponse(c, CREATED, USER_CREATED, user);
  }
  catch (error) {
    return c.json(UNPROCESSABLE_ENTITY, NOT_FOUND);
  }
},
);

export const getUserByIdHandlers = factory.createHandlers(async (c) => {
  try {
    const userId = Number(c.req.param("user_id"));
    if (!userId) {
      return sendResponse(c, BAD_REQUEST, USER_ID_REQUIRED);
    }
    const user = await getUserById(userId);
    return sendResponse(c, OK, USER_FOUND, user);
  }
  catch (error) {
    return sendResponse(c, INTERNAL_SERVER_ERROR, USER_NOT_FOUND);
  }
});

// get all users
export const getAllUsersHandlers = factory.createHandlers(async (c) => {
  try {
    const { result, totalCount } = await getAllUsers();
    return sendResponse(c, OK, USER_FOUND, { totalUsers: totalCount, users: result });
  }
  catch (error) {
    return sendResponse(c, INTERNAL_SERVER_ERROR, USER_NOT_FOUND);
  }
});

// pageination
export const getUsersPaginationHandlers = factory.createHandlers(async (c) => {
  try {
    const limit = Number.parseInt(c.req.query("limit") || "10"); // converts a string into an integer.
    const offset = Number.parseInt(c.req.query("offset") || "0"); // default offset is 0
    const result = await getUserPaginated(limit, offset);
    return sendResponse(c, OK, USER_FOUND, { users: result, limit, offset });
  }
  catch (error) {
    return sendResponse(c, INTERNAL_SERVER_ERROR, USER_NOT_FOUND);
  }
});

// delete user by id
export const deleteUserByIdHandlers = factory.createHandlers(async (c) => {
  try {
    const userId = Number(c.req.param("user_id"));
    const deletedUser = await deleteUserById(userId);
    return sendResponse(c, OK, USER_DELETEED, deletedUser);
  }
  catch (error) {
    return sendResponse(c, INTERNAL_SERVER_ERROR, USER_NOT_FOUND);
  }
});
