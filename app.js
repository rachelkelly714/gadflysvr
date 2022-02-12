require("dotenv").config();


// ~~ Imports ~~ // 

const express = require('express'); 
const cors = require('cors'); 
const app = express();  
const db = require ("./db");
// const user = require ("./controllers/usercontroller.js");
// const posts = require ("./controllers/postcontroller.js"); 
// const topics = require ("./controllers/topicscontroller.js");
// const admin = require("./controllers/admincontroller.js"); 
// const philo = require("./controllers/philocontroller.js")

const controllers = require("./controllers")

const {
user,
philo,
posts, 
topics, 
admin, 
comments
} = controllers; 

app.use(require("./middleware/headers"))
app.use(express.json()); 


app.use(cors())


// ~~ Controllers ~~ // 
app.use('/user', user); 
app.use('/posts', posts);
app.use('/topics', topics);
app.use('/admin', admin);
app.use('/philo', philo)
app.use('/topics', topics)














// ~~ Port ~~ // 

db.authenticate()
  .then(() => db.sync({force: true})) // => {force: true} to drop tables
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log('[Server:] App is listening on a secret port. :) ')
    );
  })
  .catch((err) => {
    console.log("[Server: ] Server Crashed", err);
  });


