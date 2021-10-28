import { getConnection, sql } from "../database/connection";


export const getProduct = async (req, res) => {

    const { id } = req.params

    const pool = await getConnection()
    const result = await pool.request().query(`exec Traer_Productos ${ id || 0 }`)


    res.json(result.recordset);

}


export const createProduct = async (req, res) => {
    
    const { descripcion, valor} = req.body

    const pool = await getConnection()
    const result = await pool.request()
    .input('descripcion',sql.VarChar , descripcion)
    .input('valor',sql.Money , valor)
    .query(`exec Crear_Producto @descripcion, @valor`)
    if(result.rowsAffected[0] > 0) {
        res.json({
            message: "Producto creado correctamente"
        })
    }else{
        res.json({
            message: "Error al crear el producto"
        })
    }

}

export const updateProduct = async (req, res) => {
    const { id, descripcion, valor } = req.body

        const pool = await getConnection()
        const result = await pool.request()
        .input('ID', sql.BigInt , id)
        .input('Descripcion',sql.VarChar , descripcion)
        .input('Valor',sql.Money , valor)
        .query(`exec Actualizar_Producto @ID, @Descripcion, @Valor`)
        if(result.rowsAffected[0] > 0) {
            res.json({
                message: "Producto actualizado correctamente"
            })
        }else{
            res.json({
                message: "Error al actualizar el producto"
            })
        }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params

    try{
        if(id){
        const pool = await getConnection()
        const result = await pool.request()
        .input('ID', sql.BigInt , id)
        .query(`exec Eliminar_Producto @ID`)
        if(result.rowsAffected[0] > 0) {
            res.json({
                message: "Producto eliminado correctamente"
            })
        }else{
            res.status(400).json({
                message: "Error al eliminar el producto"
            })
        }
    }else{
        res.status(400).json({
            message: "Error al eliminar el producto se necesita un /id"
        })
    }
    }catch(err){
        res.status(400).json({
            message: "Este producto ya esta relacionado a un pedido, no puede ser eliminado",
            err
        })
    }
    
}