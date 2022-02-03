const {DataTypes} = require('sequelize');
const db = require('../db')

const user = db.define('GDFusers', {
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

module.exports = user; 