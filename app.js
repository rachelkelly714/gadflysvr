require("dotenv").config();

const express = require('express'); 
const app = express();  
const sequelize = require ("./db");
let posts = require('./controllers/postcontroller');
let User = require('./controllers/usercontroller');




sequelize.sync(); 






app.use('/posts', posts);
















app.listen(process.env.PORT, function(req, res){
    console.log("App is listening on a secret port :) .");
});


