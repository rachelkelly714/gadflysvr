require("dotenv").config();

const {Sequelize} = require('sequelize'); 

const db = new Sequelize('Gadfly', 'postgres', process.env.GDSV, {
    host: 'localhost',
    dialect: 'postgres'

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