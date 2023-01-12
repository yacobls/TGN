import {Sequelize} from "sequelize";

const db = new Sequelize('teknogar', 'root', 'Teknog@r2022',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;