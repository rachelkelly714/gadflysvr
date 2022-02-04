require("dotenv").config();


// ~~ Imports ~~ // 

const express = require('express'); 
const cors = require('cors'); 
const app = express();  
const db = require ("./db");
let posts = require('./controllers/postcontroller');
let user = require('./controllers/usercontroller');








// ~~ Controllers ~~ // 

app.use(express.json()); 
app.use(cors())
app.use('/posts', posts);
app.use('/user', user); 














// ~~ Port ~~ // 

db.authenticate()
  .then(() => db.sync()) // => {force: true} to drop tables
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log('[Server:] App is listening on a secret port. :) ')
    );
  })
  .catch((err) => {
    console.log("[Server: ] Server Crashed");
    console.error(err);
  });


