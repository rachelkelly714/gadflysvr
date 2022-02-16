require("dotenv").config();

// ~~ Imports ~~ //

const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");
const controllers = require("./controllers");
const { user, philo, posts, topics, admin, comments } = controllers;
const {adminCreate} = require('./middleware/roleAuth')

app.use(require("./middleware/headers"));
app.use(express.json());

app.use(cors());

// ~~ Controllers ~~ //
app.use("/user", user);
app.use("/posts", posts);
app.use("/topics", topics);
app.use("/admin", admin);
app.use("/philo", philo);
app.use("/topics", topics);
app.use("/comments", comments);

// ~~ Port ~~ //

db.authenticate()
  .then(() => db.sync()) // {force: true} to drop tables
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log("[Server:] App is listening on a secret port. :) ")
    );
  })
  .catch((err) => {
    console.log("[Server: ] Server Crashed", err);
  });
