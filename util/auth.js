const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

//Creates a JWT token using the user's properties.
//Sets a secret key and the token's expiration time (1 day).
const createJWTToken = (user) => {
  return jwt.sign({ user }, JWT_SECRET, {
    expiresIn: '1d',
  });
};

module.exports = {
  createJWTToken,
};
