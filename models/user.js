const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('postgres::memory') 

const User = sequelize.define('GDFusers', {
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

    isAdmin: {
        type: DataTypes.BOOLEAN,
        allownull:  false
    },

    isPhilo:  {
        type: DataTypes.BOOLEAN,
        allownull: false
    },
 // return User, do i need this?
})

