const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.USER,
    process.env.PASSWORD, {
        dialect: process.env.DIALECT,
        host: process.env.HOST,
        port: process.env.DB_PORT,
    }
);

module.exports = sequelize;