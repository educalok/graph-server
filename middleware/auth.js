const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

const authenticate = (req, res, next) => {
  //Se extae el token del encabezado de la petición (Con el formato 'Bearer token', por lo cual se realiza un split dejando sólo el segundo campo).
  const token = req.headers.authorization?.split(' ')[1] || '';
  try {
    //Verificación del token, la cual debe utilizar la validación con la firma de la palabra secreta. Si no es válida, resulta en error y cae en el Catch.
    const verified = jwt.verify(token, JWT_SECRET);
    //Si la decodificación es correcta, se toman los datos del usuario y se guardan en el objeto request para ser usados en las mutaciones/queries
    req.verifiedUser = verified.user;
    next();
  } catch (error) {
    // console.error("error:", error);
    next();
  }
};
//En caso de la codificación exitosa o no, se llama al callback next para continuar con la ejecución del request.

module.exports = {
  authenticate,
};
