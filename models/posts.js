const {DataTypes} = require('sequelize'); 
const db = require('../db'); 



const Posts = db.define('GDFposts', {

    textBox: {
        type: DataTypes.STRING, 
    }, 

    postId: {
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }, 

    date: {
        type: DataTypes.DATE,
    },

    headline: {
        type: DataTypes.STRING

    },

    author: { 
        type: DataTypes.STRING
    }


})




module.exports = Posts;