import factory from "../factory.js";
import { createUserHandlers, getUserByIdHandlers } from "../handlers/user-handler.js";


const userRoutes = factory.createApp();

userRoutes.post('/users',...createUserHandlers);
userRoutes.get('/user/:user_id',...getUserByIdHandlers);

export default userRoutes;
