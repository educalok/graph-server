const mongoose = require('mongoose');
const {MONGODB_URI} = require('../config');

//Se define la conexión a la DB utilizando la librería Mongoose, la cual mapea una base de datos Mongo
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Mongodb connected');
  } catch (error) {
    console.error(error);
  }
};

module.exports = {connectDB};
