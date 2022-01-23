const app = require('./app');
const {connectDB} = require('./db');
const {PORT} = require('./config');

//Se ejecuta el método de conexión a la base de datos
connectDB();

//Se establece el número de puerto del servidor Express
app.listen(PORT);

console.log('Server on port', PORT);
