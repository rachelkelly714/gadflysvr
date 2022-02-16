const {DataTypes} = require('sequelize');
const db = require('../db'); 

const Admin = db.define('GDFphilo', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
      username: {
          type: DataTypes.STRING,
          defaultValue: 'Socrates'
     
      
      }, 
      email: {
          type: DataTypes.STRING, 
          unique: true, 
          defaultValue: process.env.ADMINPSW
      },
  
    password: {
        type: DataTypes.STRING, 
        allowNull: false, 
        defaultValue: process.env.ADMINEML
    },


    role: {
        type: DataTypes.STRING,
        enum: ['glaucon', 'socrates', 'aristotle'],
        defaultVaule: 'socrates'
    }
  
 


})

module.exports = Admin; 