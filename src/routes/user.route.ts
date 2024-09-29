import { Router } from 'express'
import { PostController } from '../controllers/PostController';


const userRoutes = Router();

userRoutes.get('/', new PostController().getPosts);



export default userRoutes;