const {DataTypes} = require('sequelize'); 
const db = require('../db');



const Topics = db.define('GDFtopics', {

     topicBox: {
         type: DataTypes.STRING
     }



} )



module.exports = Topics; 