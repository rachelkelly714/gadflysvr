const express = require("express");
const router = express.Router();
const user = require("../models/user");

router.post("/create", async (req, res) => {
  try {
    const userModel = await {
      username: req.body.user.username,
      email: req.body.user.email,
      password: req.body.user.password,
      isAdmin: false,
      isPhilo: false,
    };

    user.create(userModel)

      .then(res.send("User/Create endpoint"))
  } catch (err) {
    console.log("Create endpoint crashed", err)
  };
});

module.exports = router;
