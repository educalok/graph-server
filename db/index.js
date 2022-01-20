const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.0gexj.mongodb.net/blogdb?retryWrites=true&w=majority`);
  console.log('MongoDB Connected');
};

module.exports = {connectDB};
