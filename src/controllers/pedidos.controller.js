import { getConnection, sql } from "../database/connection";

export const getPedidos = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request().query(`exec Traer_Pedidos ${id || 0}`);

    res.json(result.recordset);
};

export const createPedido = async (req, res) => {
    const { idUser } = req.body;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idUsuario", sql.BigInt, idUser)
        .query(`exec Crear_Pedido @idUsuario`);

    res.json(result.recordset);
};

export const insertProductPedido = async (req, res) => {
    const { idPedido, idProduct, cantidad } = req.body;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idPedido", sql.BigInt, idPedido)
        .input("idProduct", sql.BigInt, idProduct)
        .input("cantidad", sql.Int, cantidad)
        .query(`exec Insertar_Producto @idPedido, @idProduct, @cantidad`);

    res.json(result.recordset);
};

export const getTablePedido = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request().query(`exec Listar_Pedidos ${id || 0}`);

    res.json(result.recordset);
    
};

export const deletePedido = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request().query(`exec Eliminar_Producto_Pedido ${id}`);

    res.json(result.recordset);
}
