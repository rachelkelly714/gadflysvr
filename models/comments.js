const {DataTypes} = require('sequelize'); 
const db = require('../db'); 



const Comments = db.define('GDFcomments', {

    textBox: {
        type: DataTypes.TEXT, 
    }, 

    userId: {
        type: DataTypes.STRING,
    }, 

    date: {
        type: DataTypes.DATE,
    },

    headline: {
        type: DataTypes.STRING

    }


})


module.exports = Comments; 