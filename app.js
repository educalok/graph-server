const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./graphql/schema');
const {authenticate} = require('./middleware/auth');

//Se crea el servidor
const app = express();

//Se define el middleware para ejecutarse en todos los requests
app.use(authenticate);

app.get('/', (req, res) => res.json({msg: 'Welcome. Go to /graphql'}));

//Se define la única ruta que necesita Graphql para realizar consultas y mutaciones
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

module.exports = app;
