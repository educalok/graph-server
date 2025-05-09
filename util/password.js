const argon2 = require('argon2');

//Encrypts the password before saving it to the database
const encryptPassword = async (password) => {
  return await argon2.hash(password);
};

//Compares the hashed password from the database with the one entered by the user
const comparePassword = async (password, hash) => {
  return await argon2.verify(hash, password);
};

module.exports = {
  encryptPassword,
  comparePassword,
};