// src/middleware/auth.js
const jwt = require("jsonwebtoken");
const Local = require("../Environment/env");

const secret = Local.Secret_Key;

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.sendStatus(403);
  }

  if (!secret) {
    return res.status(500).json({ message: "Secret key is not defined!" });
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      return res.status(403).json({
        message: "Unauthorized Access",
        isUnAuthorized: true,
      });
    }

    req.user = user; 
    next();
  });
};

module.exports = { authenticateJWT };
