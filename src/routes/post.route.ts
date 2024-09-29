import { Router } from 'express'
import { PostController } from '../controllers/PostController';


const postRoutes = Router();

postRoutes.get('/', new PostController().getPosts);
postRoutes.post('/create', new PostController().create);



export default postRoutes;