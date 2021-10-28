import express from 'express';
import config from './config';
import cors from 'cors'
import usersRoutes from './Routes/usuarios.routes';
import productRoutes from './Routes/productos.routes';
import pedidosRoutes from './Routes/pedidos.routes'

const app = express();
const port = config.port;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('port', port);

app.use(usersRoutes);
app.use(productRoutes);
app.use(pedidosRoutes);

export default app;