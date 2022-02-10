require("dotenv").config();


// ~~ Imports ~~ // 

const express = require('express'); 
const cors = require('cors'); 
const app = express();  
const db = require ("./db");
const user = require ("./controllers/usercontroller.js");
const posts = require ("./controllers/postcontroller"); 
const topics = require ("./controllers/topicscontroller.js");
const admin = require("./controllers/admincontroller"); 
const philo = require("./controllers/philocontroller")




app.use(require("./middleware/headers"))
app.use(express.json()); 


app.use(cors())



// ~~ Controllers ~~ // 
app.use('/user', user); 
app.use('/posts', posts);
app.use('/topics', topics);
app.use('/admin', admin);
app.use('/philo', philo)
app.use('topics', topics)














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


