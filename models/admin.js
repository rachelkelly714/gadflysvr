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
     
      
      }, 
      email: {
          type: DataTypes.STRING, 
          unique: true
      },
  
    //   password: {
    //       type: DataTypes.STRING, 
    //       allownull: false
    //   },
  
    //   isAdmin: {
    //       type: DataTypes.BOOLEAN,
    //       defaultValue: true, 
      
    //   },


    role: {
        type: DataTypes.STRING,
        enum: ['glaucon', 'socrates', 'aristotle'],
        defaultVaule: 'socrates'
    }
  
 


})

module.exports = Admin; 