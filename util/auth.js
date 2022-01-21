const jwt = require('jsonwebtoken');

const createJWTToken = (user) => {
  return jwt.sign({user}, 'sarasa123', {expiresIn: '1h'});
};

module.exports = {createJWTToken};
