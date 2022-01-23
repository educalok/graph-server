const {config} = require('dotenv');
config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/blogdb',
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'somesecretkey',
};
