import { Router } from 'express';
import { registerUser, login } from '../controllers/authController';

const authRouter = Router();
// Маршрут для регистрации пользователя
authRouter.post('/register', registerUser);
authRouter.post('/login', login);

export default authRouter;