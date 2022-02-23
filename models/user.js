const {DataTypes} = require('sequelize');
const db = require('../db');


const user = db.define('GDFusers', {
  id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
  },
    email: {
        type: DataTypes.STRING,
        allownull: false, 
        unique: false,
        require: true
    }, 

    password: {
        type: DataTypes.STRING, 
        allownull: false
    },

    // role: {
    //     type: DataTypes.STRING, 
    //     enum: ['glaucon', 'socrates', 'aristotle'], 
    //     defaultValue: "glaucon"
    // }
  
})







module.exports = user; 