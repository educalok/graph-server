const jwt = require('jsonwebtoken');
const {JWT_EXPIRES_IN, JWT_SECRET} = require('../config');

//Utilizando la librería jsonwebtoken se crea la codificación del token con la información
//de las propiedades de un usuario. Se establece una palabra secreta y se le indica
//el tiempo de vida del token (1 día).
const createJWTToken = (user) => {
  return jwt.sign({user}, JWT_SECRET, {
    expiresIn: '1d',
  });
};

module.exports = {
  createJWTToken,
};
