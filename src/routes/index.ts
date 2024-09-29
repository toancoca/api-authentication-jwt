import { Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware'
import productRoutes from './product.route';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import postRoutes from './post.route';


const routes = Router();

routes.use('/api/auth', authRoutes);

routes.use(authMiddleware);

routes.use('/api/products', productRoutes);
routes.use('/api/posts', postRoutes);
routes.use('/api/users', userRoutes);

export default routes
