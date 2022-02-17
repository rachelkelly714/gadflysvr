const jwt = require("jsonwebtoken");
const {Philo}  = require("../models/philo");

const philovalidateJWT = async (req, res, next) => {
  if (req.method == "OPTIONS") {
    next();
  } else if (
    req.headers.authorization &&
    req.headers.authorization.includes("Bearer")
  ) {
    const { authorization } = req.headers;
    const payload = authorization
      ? jwt.verify(
          authorization.includes("Bearer")
            ? authorization.split(" ")[1]
            : authorization,
          process.env.JWT_SECRET
        )
      : undefined;
    console.log("Philo Console Log: ", Philo);
    if (payload && role === 'Aristotle') {
      let foundPhilo = await Philo.findOne({
        where: {
          id: payload.id
        },
      });

      if (foundPhilo) {
        req.philo = foundPhilo;
        next();
      } else {
        res.status(400).send({
          message: "Not Authorized",
        });
      }
    } else {
      res.status(401).send({
        message: "Invalid token",
      });
    }
  } else {
    res.status(403).send({
      message: "Forbidden",
    });
  }
};

module.exports = philovalidateJWT;