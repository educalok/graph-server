const app = require('./app');
const { connectDB } = require('./db');
const { PORT } = require('./config');

// Executes the database connection method
connectDB();

// Sets the port number for the Express server
app.listen(PORT);

console.log('Server on port', PORT);
