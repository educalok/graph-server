const bcrypt = require('bcryptjs');

//Función que encripta el password a guardar en la base de datos
const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

//Función que compara el password encriptado traido de la base de datos con el ingresado por el usario
const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = {
  encryptPassword,
  comparePassword,
};
