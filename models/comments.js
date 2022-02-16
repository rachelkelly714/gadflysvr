const {DataTypes} = require('sequelize'); 
const db = require('../db'); 



const Comments = db.define('GDFcomments', {

    textBox: {
        type: DataTypes.TEXT, 
    }, 

    author: { 
        type: DataTypes.STRING, 
    },

    commentId: {
        type: DataTypes.STRING,
        primaryKey: true
    }, 



    date: {
        type: DataTypes.DATE,
    },

   


})


module.exports = Comments; 