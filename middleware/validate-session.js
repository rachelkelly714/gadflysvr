const jwt = require("jsonwebtoken");
const User = require("../db").import("../models/user");

const validateSession = (req, res, next) => {
 
  const token = req.headers.authorization;
  
  jwt.verify(token, 'secret', (err, decoded) => {
    console.log("token: ", token);
    console.log("decoded: ", decoded);
    if (!err && decoded) {
      User.findOne({ where: { id: decoded.id } })
        .then((user) => {
          console.log("user: ", user);
          if (!user) throw "err";
          req.user = user;
         
          return next();
     
        })
        .catch((err) => next(err));
    } else {
      req.errors = err;
      return res.status(500).send("Not Authorized");
    }
  });
};
module.exports = validateSession;