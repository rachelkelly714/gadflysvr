require("dotenv").config();

const express = require("express");
const router = express.Router();
const user = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateJWT = require("../middleware/validate_jwt");

//***************** //
// ~~** Register **~~ //
//***************** //

router.post("/register", validateJWT, (req, res) => {
  const userObj = {
    username: req.body.user.username,
    password: bcrypt.hashSync(req.body.user.password, 12),
    email: req.body.user.email,
  };

  user
    .create(userObj)
    .then((created) => {
      const token = jwt.sign({ id: created.id }, process.env.JWT_SECRET, {
        expiresIn: "15d",
      });
      res.status(200).json({
        User: created,
        Message: "Registered!",
        SessionToken: token,
      });
    })

    .catch((err) => {
      res.status(500).json(err, 
        "Message: 500 Error ISE");
    });
});

//***************** //
// ~~** Login **~~ //
//****************//

router.post("/login", validateJWT, async (req, res) => {
  try {
    const found = await user.findOne({
      where: {
        username: req.body.user.username,
      },
    });

    if (!found) {
      res.status(404).json("User not found.");
    } else {
      let passwordCompare = await bcrypt.compare(
        req.body.user.password,
        found.password
      );
      if (passwordCompare) {
        let token = jwt.sign({ id: found.id }, process.env.JWT_SECRET, {
          expiresIn: "30d",
        });

        res.status(200).json({
          User: found,
          Message: "User logged in",
          SessionToken: token,
        });
      } else {
        res.status(401).json({
          Message: "Password is incorrect. Please try again.",
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      err, 
      Message: "505 ISE"});
  }
});

module.exports = router;
