const dotenv = require('dotenv');

dotenv.config({path:".env"});

const Local = {
    PORT: Number(process.env.SERVER_PORT),

    DB_Name: String(process.env.DB_NAME),
    DB_User: String(process.env.DB_USER),
    DB_Password: String(process.env.DB_PASSWORD),
    DB_Host: String(process.env.DB_HOST),
    DB_Dialect: String(process.env.DB_DIALECT),
    DB_PORT: String(process.env.DB_PORT),
    
    Secret_Key: String(process.env.SECRET_KEY),   
}

module.exports = Local;