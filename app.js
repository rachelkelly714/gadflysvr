require("dotenv").config();

let express = require('express'); 
let app = express();  
















app.listen(process.env.PORT, function(){
    console.log("App is listening on a secret port :) .");
});

console.log(process.env.PORT)
