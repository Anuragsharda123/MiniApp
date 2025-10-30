const { Sequelize } = require('sequelize');
const Local =  require('../Environment/env');

const DIA = Local.DB_Dialect;
const DB = Local.DB_Name;
const USER = Local.DB_User;
const PASS = Local.DB_Password;
const HOST = Local.DB_Host;
const PORT = Local.DB_PORT ?? 5432;

const sequelize = new Sequelize({
    host: HOST,
    port: PORT,
    username: USER,
    password: PASS,
    database: DB,
    dialect: DIA,
    logging: false
});

module.exports = sequelize;