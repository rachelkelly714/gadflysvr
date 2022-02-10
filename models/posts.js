const {DataTypes} = require('sequelize'); 
const db = require('../db'); 



const posts = db.define('GDFposts', {

    textBox: {
        type: DataTypes.TEXT, 
    }, 

    userId: {
        type: DataTypes.STRING,
    }, 

    date: {
        type: DataTypes.DATE,
    },

    headLine: {
        type: DataTypes.STRING

    }


})








module.exports = posts;