const {DataTypes} = require('sequelize');
const db = require('../db');


const User = db.define('GDFusers', {
  id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
  },
    username: {
        type: DataTypes.STRING,
        allownull: false, 
        unique: true
    }, 
    email: {
        type: DataTypes.STRING, 
        allownull: false, 
        unique: true
    },

    password: {
        type: DataTypes.STRING, 
        allownull: false
    },

    role: {
        type: DataTypes.STRING, 
        enum: ['glaucon', "socrates", 'aristotle'], 
        defaultValue: "glaucon"
    }
  
})







module.exports = User; 