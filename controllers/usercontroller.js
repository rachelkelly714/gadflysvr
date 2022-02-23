require("dotenv").config();

const express = require("express");
const router = express.Router();
const {models} = require("../models"); 
const user = require("../models/user")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateJWT = require("../middleware/validate-session");
const { response } = require("express");



//***************** //
// ~~** Register **~~ //
//***************** //

router.post('/register', (req, res) => {
let {email, password} = req.body.user


      


  const passwordValidate = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?'_]).*$/;

 

if (!passwordValidate.test(password))
  return res.status(400).json({ message: 'Password must be at least 8 characters long, under 16 characters, and include a number and a symbol. ' });

  user.create({email, passwordhash: bcrypt.hashSync(password, 12)})
  .then((created) => { 
      const token = jwt.sign({id:created.id}, process.env.JWT_SECRET ,{expiresIn:'30d'})
      res.status(200).json({
          user: created,
          Message: 'Registered!',
          SessionToken: token
      })
  })

.catch(err => {
  res.status(500).json(err)
})

})

//***************** //
// ~~** Login **~~ //
//****************//
router.post('/login', async (request, res) => {
  let { email, password } = request.body.user;

  try {
      const found = await user.findOne({
          where: {
              email: email,
          },
      });

      if (found) {
          let passwordCompare = await bcrypt.compare(
              password,
              found.passwordhash
          );
          if (passwordCompare) {
              let token = jwt.sign(
                  { id: found.userId },
                  process.env.JWT_SECRET,
                  { expiresIn: "30d"}
              );

              res.status(200).json({
                  account: found.email,
                  message: 'Logged In!',
                  sessionToken: token,
              });
          } else {
              res.status(401).json({
                  Message: 'Password or Email is Incorrect.',
              });
          }
      } else {
          res.status(401).json({
              Message: 'Password or Email is Incorrect',
          });
      }
  } catch (error) {
      res.status(500).json({
          message: 'Login Failed',
      });
  }
});
      
module.exports = router;
