const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./graphql/schema');
const {authenticate} = require('./middleware/auth');

//Se crea el servidor
const app = express();

//Se define el middleware para ejecutarse en todos los requests
app.use(authenticate);

//Ruta opcional en el root del dominio que devuelve un mensaje
app.get('/', (req, res) => res.json({msg: 'Welcome. Go to /graphql'}));

//Se monta el servidor graphqlHTTP en el endpoint /graphql. Se le asigna un schema y establece la
//propiedad graphiql para visualizar la herramienta de consultas/mutaciones provista por Graph.
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

module.exports = app;
