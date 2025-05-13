import { eq } from "drizzle-orm";
import db from "../database/db";
import { users, type NewUser } from "../database/schemas/users";
import { deleteRecordById, getAllRecords, getRecordById } from "./base-db-services";




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
export const getAllUsers = async (page_no: number, page_size: number) => {
  return await getAllRecords(page_no,page_size,users);
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