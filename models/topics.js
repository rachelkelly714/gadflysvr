const {DataTypes} = require('sequelize'); 
const db = require('../db');



const Topics = db.define('GDFtopics', {

     topicBox: {
         type: DataTypes.STRING
     },

     topicsId: {
         type: DataTypes.STRING, 
         primaryKey: true
     }



} )



module.exports = Topics; 