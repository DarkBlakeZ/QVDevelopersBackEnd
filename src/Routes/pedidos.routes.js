import {Router} from 'express'

import { getPedidos, createPedido, insertProductPedido, getTablePedido, deletePedido } from '../controllers/pedidos.controller'

const router = Router();

router.get('/pedidos/:id?', getPedidos);

router.post('/pedidos', createPedido);

router.get('/productsPedido/:id?', getTablePedido);

router.post('/pedidos/product', insertProductPedido);

router.delete('/pedido/:id', deletePedido);

export default router