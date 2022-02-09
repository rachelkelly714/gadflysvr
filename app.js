require("dotenv").config();


// ~~ Imports ~~ // 

const express = require('express'); 
const cors = require('cors'); 
const app = express();  
const db = require ("./db");




const controllers = require("./controllers");





// ~~ Controllers ~~ // 
app.use(require("./middleware/headers"))
app.use(express.json()); 
app.use(cors())
app.use('/posts', controllers.postcontroller);
app.use('/user', controllers.usercontroller); 














// ~~ Port ~~ // 

db.authenticate()
  .then(() => db.sync()) // => {force: true} to drop tables
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log('[Server:] App is listening on a secret port. :) ')
    );
  })
  .catch((err) => {
    console.log("[Server: ] Server Crashed", err);
  });


