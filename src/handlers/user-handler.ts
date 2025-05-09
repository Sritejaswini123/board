<<<<<<< Updated upstream
import { USER_CREATED, USER_FOUND, USER_ID_REQUIRED, USER_NOT_FOUND } from "../constants copy/app-messages.js";
import { INTERNAL_SERVER_ERROR } from "../constants copy/http-status-codes.js";
import { BAD_REQUEST, CREATED, NOT_FOUND, OK } from "../constants/http-status-codes.js";
import { UNPROCESSABLE_ENTITY } from "../constants/http-status-phrases.js";
import { type NewUser, type User, users } from "../database/schemas/users.js";
import factory from "../factory.js";
import { createUser, getUserById } from "../service/user-service.js";
=======

import { ZodError } from "zod";
import { USER_CREATED, USER_DELETEED, USER_FOUND, USER_ID_REQUIRED, USER_NOT_FOUND } from "../constants/app-messages.js";
import { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR, OK } from "../constants/http-status-codes.js";
import { UNPROCESSABLE_ENTITY } from "../constants/http-status-phrases.js";
import { type NewUser, type User, users } from "../database/schemas/users.js";
import factory from "../factory.js";
import { saveRecord } from "../service/baseservices.js";
import { deleteUserById, getAllUsers, getUserById } from "../service/user-service.js";
>>>>>>> Stashed changes
import { sendResponse } from "../utils/send-response.js";
import { vCreateUser } from "../validations/user-validations.js";


//save user
export const createUserHandlers = factory.createHandlers(async (c) => {
  try {
    const reqBody = await c.req.json();
    const validUserReq = vCreateUser.parse(reqBody);
    const userData: NewUser = {
      ...validUserReq
    }
<<<<<<< Updated upstream
    const user = await createUser<User>(users,userData);
=======
    const user = await saveRecord<User>(users, userData);
>>>>>>> Stashed changes
    return sendResponse(c, CREATED, USER_CREATED, user);
  } catch (error) {

    if (error instanceof ZodError) {
      const errorMessage = error.issues[0]?.message;
      return c.json({ message: errorMessage, UNPROCESSABLE_ENTITY });
    }

  }
},
);


export const getUserByIdHandlers = factory.createHandlers(async (c) => {
  try {
    const userId = Number(c.req.param('id'));

    if (!userId) {
      return sendResponse(c, BAD_REQUEST, USER_ID_REQUIRED);
    }
    const user = await getUserById(userId);

   return sendResponse(c, OK, USER_FOUND, user);
  } catch (error) {
    return sendResponse(c, INTERNAL_SERVER_ERROR, USER_NOT_FOUND);
  }
});



<<<<<<< Updated upstream
=======
//get all users
export const getAllUsersHandlers = factory.createHandlers(async (c) => {
  try {

    const usersData = await getAllUsers();
    return sendResponse(c, OK, USER_FOUND, usersData);
  } catch (error) {
    return sendResponse(c, INTERNAL_SERVER_ERROR, USER_NOT_FOUND);
  }
});




//delete user by id
export const deleteUserByIdHandlers = factory.createHandlers(async (c) => {
  try {
    const userId = Number(c.req.param('user_id'));

    const deletedUser = await deleteUserById(userId);

    return sendResponse(c, OK, USER_DELETEED, deletedUser);

  } catch (error) {

    return sendResponse(c, INTERNAL_SERVER_ERROR, USER_NOT_FOUND);
  }

});
>>>>>>> Stashed changes
