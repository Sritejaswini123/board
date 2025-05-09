import db from "../database/db.js";
import { users, type NewUser } from "../database/schemas/users.js";
import { getRecordById } from "./base-db-services.js";

//save user
export const createUser=async (userData: NewUser)=>{
<<<<<<< Updated upstream
  const  user =await db.insert(users).values(userData).returning();
  return user[0];
}
  

  export const getUserById = async (userId: number,) => {
    return await getRecordById(users, userId);
  };
  
=======
    const  user =await db.insert(users).values(userData).returning();
    return user[0];
  }



//get user by id
  export const getUserById = async (userId: number) => {
    return await getRecordById(users, userId);
};



//get all users 
export const getAllUsers = async () => {
  return await getAllRecords(users);
}

//delete user by id
export const deleteUserById = async (userId: number) => {
  return await deleteRecordById(users, userId);
};
  
  

>>>>>>> Stashed changes
