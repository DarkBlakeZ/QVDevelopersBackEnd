import sql from 'mssql';

const dbSettings = {
    user: process.env.user,
    password: process.env.password,
    server: process.env.server,
    database: process.env.database,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export const getConnection = async() => {
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }catch(err){
        console.error(err);
    }
    
}

export { sql };