const jwt = require("jsonwebtoken");
require("dotenv").config();

function authentication(req, res, next) {
  const token = req.headers?.authorization;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded) {
        req.body.userID = decoded.userID;
        next();
      } else {
        res.status(400).send({ msg: "Error Occurred" });
      }
    });
  } else res.status(400).send({ msg: "Login First" });
}

module.exports = { authentication };
