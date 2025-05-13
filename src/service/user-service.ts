import db from "../database/db.js";
import { eq } from "drizzle-orm";
import { users, type NewUser, type User, type UsersTable } from "../database/schemas/users.js";
import { getRecordById , getAllRecords, deleteRecordById, updateRecordById} from "./base-db-services.js";




//save user 
export const createUser=async (userData: NewUser)=>{
    const  user =await db.insert(users).values(userData).returning();
    return user[0];
  }
//get user by id
  export const getUserById =(userId: number) => {
    return  getRecordById(users, userId);
  };


  //checks users existing or not
export const isUserExist=async(email:string)=>{
   const existingUser=await db
      .select()
      .from(users)
      .where(eq(users.email,email))
      .limit(1);
  return existingUser;
}

  //get all users 
export const getAllUsers = async (page_no:number) => {
  return await getAllRecords(page_no,users);
}

//delete user by id
export const deleteUserById = async (userId: number) => {
  return await deleteRecordById(users, userId);
};
  

// export const updateUser=async(userData: UsersTable,userId: number)=>{
//   return await updateRecord<User>(userData,userId);
// }
  


// export const updateuser=async(userData:NewUser,user_id:number)=>{
// return updateRecordById()
// }