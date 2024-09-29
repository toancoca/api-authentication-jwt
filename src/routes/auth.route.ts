import { Router } from 'express'
import { AuthController } from '../controllers/AuthController';


const authRoutes = Router();

authRoutes.post('/login', new AuthController().login);
authRoutes.post('/register', new AuthController().register);



export default authRoutes;