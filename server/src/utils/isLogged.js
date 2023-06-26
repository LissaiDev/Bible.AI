const jwt = require("jsonwebtoken");
const isLogged = (req) => {
  console.log(req.cookie);
  const { token } = req?.cookies;
  if (token) {
    return jwt.decode(token, process.env.JWT_SECRET);
  } else {
    return null;
  }
};

module.exports = isLogged;
