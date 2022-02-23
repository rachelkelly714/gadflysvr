const {DataTypes} = require('sequelize'); 
const db = require('../db');



const Topics = db.define('GDFtopics', {

     topicBox: {
         type: DataTypes.STRING,
         unique: true
     },

     topicsId: {
         type: DataTypes.STRING, 
         primaryKey: true
     }



} )



module.exports = Topics; 