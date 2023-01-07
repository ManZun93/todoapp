const {Sequelize} = require('sequelize');

//crear instancia con parametros de configuracion de nuestra base de datos 
//un objeto de configuracion -> credenciales de base de datos
const db = new Sequelize({
  database: "todoapp",
  username: "postgres",
  host: "localhost", //127.0.0.1
  port: "5432",
  password: "root",
  dialect: "postgres" //la base que estamos usando 

});

module.exports = db;