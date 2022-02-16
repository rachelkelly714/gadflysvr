require("dotenv").config();

const express = require("express");
const router = express.Router();
const Philo = require("../models/philo");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const philovalidateJWT = require("../middleware/philovalidate_jwt")





//***************** //
// ~~** Register **~~ //
//***************** //

router.post("/register", philovalidateJWT, (req, res) => {
  const philoObj = {
    username: req.body.philo.username,
    password: bcrypt.hashSync(req.body.philo.password, 12),
    email: req.body.philo.email,
    role: req.body.philo.role
  };

  philo.create(philoObj)
    .then((created) => {
      const token = jwt.sign({ id: created.id }, process.env.JWT_SECRET, {
        expiresIn: "15d"
      });
      res.status(200).json({
        Philo: created,
        Message: "Registered!",
        SessionToken: token,
      });
    })

    .catch((err) => {
      res.status(500).json(err);
    });
});




//***************** //
// ~~** Login **~~ //
//****************//

router.post("/login", philovalidateJWT, async (req, res) => {
  try {
    const found = await Philo.findOne({
      where: {
        username: req.body.philo.username,
      },
    })

    if (!found) {
      res.status(404).json("Philosopher not found.")
    } else {
      let passwordCompare = await bcrypt.compare(
        req.body.philo.password,
        found.password
      )
      if (passwordCompare) {
        let token= jwt.sign({id: found.id}, process.env.JWT_SECRET, {expiresIn: '30d'})

        res.status(200).json({
          Philo: found,
          Message: "Philosopher logged in",
          SessionToken: token
        });
      } else {
        res.status(401).json({
          Message: "Password is incorrect. Please try again.",
        });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
