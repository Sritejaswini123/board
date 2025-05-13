import factory from "../factory";
import { createUserHandlers , getUserByIdHandlers, getAllUsersHandlers,deleteUserByIdHandlers, updateUserByIdHandlers } from "../handlers/user-handler";


const userRoutes = factory.createApp();

userRoutes.post('/users',...createUserHandlers);
userRoutes.get('/users/:user_id',...getUserByIdHandlers);
userRoutes.get('/users', ...getAllUsersHandlers);
userRoutes.patch('/users/:user_id',...updateUserByIdHandlers);
userRoutes.delete('/users/:user_id',...deleteUserByIdHandlers);

export default userRoutes;

