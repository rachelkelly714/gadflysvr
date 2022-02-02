require("dotenv").config();

const {Sequelize} = require('sequelize'); 

const sequelize = new Sequelize('GDFusers', 'postgres', process.env.GDFUSERS, {
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


sequelize.authenticate()
.then( () => {
    console.log("You got it boss!");
}) .catch((err) => {
    console.error("Unable to connect.", err)
});



  module.exports = sequelize; 