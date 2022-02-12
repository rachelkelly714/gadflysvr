require("dotenv").config();

const {Sequelize} = require('sequelize'); 

const db = new Sequelize('NewTbls', 'postgres', process.env.GDSV, {
  dialect: 'postgres',
  host: 'localhost',

}); 




// async () => {
//     try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }






  module.exports = db; 