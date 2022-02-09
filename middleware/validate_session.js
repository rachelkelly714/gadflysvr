const jwt = require("jsonwebtoken");
const user = require("../db").import("../models/user");

const validateSession = (req, res, next) => {
  // REQUEST -> middleware -> controller -> RESPONSE
  const token = req.headers.authorization;
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    console.log("token: ", token);
    console.log("decoded: ", decoded);
    if (!err && decoded) {
      user.findOne({ where: { id: decoded.id } })
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
