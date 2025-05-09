const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');

const connectDB = async () => {
  try {
    console.log(MONGODB_URI);
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log(error.cause);
    // If the connection fails, exit the process with an error code
    process.exit(1);
  }
};

module.exports = { connectDB };
