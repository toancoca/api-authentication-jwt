import { Router } from 'express'
import { ProductController } from '../controllers/ProductController';


const productRoutes = Router();

productRoutes.get('/', new ProductController().getProducts);
productRoutes.post('/create', new ProductController().create);



export default productRoutes;