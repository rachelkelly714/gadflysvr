const express = require('express');
const router = express.Router(); 
const user = require('../models/user');


router.post('/create', function(req, res){
      
       const userModel = {
        username: 'questioner',
        email: 'user@email.com' ,
        password: 'password1234', 
        isAdmin: false , 
        isPhilo:  false , 
       }


        user.create(userModel)
   .then((
       res.send('User/Create endpoint')
   ))
});







module.exports= router; 