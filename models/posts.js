const {DataTypes} = require('sequelize'); 
const db = require('../db'); 



const Posts = db.define('GDFposts', {

    textBox: {
        type: DataTypes.STRING, 
    }, 

    userId: {
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4,
        primaryKey: false 
    }, 

    date: {
        type: DataTypes.DATE,
    },

    headline: {
        type: DataTypes.STRING

    }


})




module.exports = Posts;