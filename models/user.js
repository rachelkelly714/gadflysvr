module.exports = (Sequelize, DataTypes) = require('sequelize');
const sequelize = new Sequelize('sqlite::memory') 

const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allownull: false, 
        unique: true
    }, 
    email: {
        type: DataTypes.STRING, 
        allownull: true, 
        unique: true
    },

    password: {
        type: DataTypes.STRING, 
        allownull: false
    },
    

    
})

