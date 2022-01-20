const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const schema = require('./graphql/schema');
const {connectDB} = require('./db');

//Se conecta a la base de datos
connectDB();

//Se crea el servidor
const app = express();

//Se define la única ruta que necesita Graphql para realizar consultas y mutaciones
app.use('/graphql', graphqlHTTP({schema, graphiql: true}));

//Se define el puerto 3000
app.listen(3000);
console.log('Server is running on port 3000');
