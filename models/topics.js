const {DataTypes} = require('sequelize'); 
const db = require('../db');
const User = require('../models/user'); 
const Posts = require('../models/posts')


const topics = db.define('GDFtopics', {

     topicBox: {
         type: DataTypes.STRING
     }



} )



module.exports = topics; 