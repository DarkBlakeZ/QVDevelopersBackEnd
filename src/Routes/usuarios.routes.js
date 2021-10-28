import {Router} from 'express'

import {getUser, loginUser, createUser,  updateUser, deleteUser} from '../controllers/usuarios.controller'

const router = Router();

router.get('/user/:id?', getUser);

router.post('/loginUser', loginUser)

router.post('/user', createUser);

router.put('/user', updateUser);

router.delete('/user/:id?', deleteUser);

export default router



