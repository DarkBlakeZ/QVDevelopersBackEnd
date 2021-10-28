import { getConnection, sql } from "../database/connection";

export const getUser = async (req, res) => {

    const { id } = req.params

    const pool = await getConnection()
    const result = await pool.request().query(`exec Traer_Usuarios ${ id || 0 }`)


    res.json(result.recordset);

}

export const loginUser = async (req, res) => {
    
        const { usuario, password } = req.body
    
        const pool = await getConnection()
        const result = await pool.request()
        .input('usuario', sql.VarChar, usuario)
        .input('password', sql.VarChar, password)
        .query(`exec Login_Usuario @usuario, @password`)
    
        res.json(result.recordset);
    
}

export const createUser = async (req, res) => {
    
        const { usuario, password, nombre } = req.body

        const pool = await getConnection()
        const result = await pool.request()
        .input('usuario',sql.VarChar , usuario)
        .input('password',sql.VarChar , password)
        .input('nombre',sql.VarChar , nombre)
        .query(`exec Crear_Usuario @usuario, @password, @nombre `)
        if(result.rowsAffected[0] > 0) {
            res.json({
                message: "Usuario creado correctamente"
            })
        }else{
            res.json({
                message: "Error al crear el usuario"
            })
        }
    
}


export const updateUser = async (req, res) => {
    const { id, usuario, password, nombre } = req.body

        const pool = await getConnection()
        const result = await pool.request()
        .input('ID', sql.BigInt , id)
        .input('usuario',sql.VarChar , usuario)
        .input('password',sql.VarChar , password)
        .input('nombre',sql.VarChar , nombre)
        .query(`exec Actualizar_Usuario @ID, @usuario, @password, @nombre `)
        if(result.rowsAffected[0] > 0) {
            res.json({
                message: "Usuario actualizado correctamente"
            })
        }else{
            res.json({
                message: "Error al actualizar el usuario"
            })
        }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params

    if(id){
        const pool = await getConnection()
        const result = await pool.request()
        .input('ID', sql.BigInt , id)
        .query(`exec Eliminar_Usuario @ID`)
        if(result.rowsAffected[0] > 0) {
            res.json({
                message: "Usuario eliminado correctamente"
            })
        }else{
            res.status(400).json({
                message: "Error al eliminar el usuario"
            })
        }
    }else{
        res.status(400).json({
            message: "Error al eliminar el usuario se necesita un /id"
        })
    }
}