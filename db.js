//conecting sql

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "postgres",
    "sarvadhisolution",
    null,
    {
        host: "localhost",
        dialect: "postgres",
        port: 5432,
        logging: false, // give the log of query that perfrom if we write false that dont show and logging default parameter is console.log
    }
);
module.exports = sequelize;

//after write the console.log as logging the output getting like this
//sarvadhisolution@Sarvadhis-MacBook-Pro sequelize % node index.js
//Executing (default): SELECT 1+1 AS result
//postgreSQL connected successfully!