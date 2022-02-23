require("dotenv").config();

const {Sequelize} = require('sequelize'); 

const db = new Sequelize('Gadfly', 'postgres', process.env.GDSV, {
  dialect: 'postgres',
  host: 'localhost',

}); 










  module.exports = db; 