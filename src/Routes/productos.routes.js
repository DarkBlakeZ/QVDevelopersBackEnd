import {Router} from 'express'

import {getProduct, createProduct,  updateProduct, deleteProduct} from '../controllers/productos.controller'

const router = Router();

router.get('/product/:id?', getProduct);

router.post('/product', createProduct);

router.put('/product', updateProduct);

router.delete('/product/:id?', deleteProduct);

export default router

