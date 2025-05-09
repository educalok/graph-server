const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const { authenticate } = require('./middleware/auth');

const app = express();

// Apply global authentication middleware
app.use(authenticate);

// Root route with basic info
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome. Go to /graphql' });
});

// Ensure schema is defined before using it
if (!schema) {
  throw new Error('GraphQL schema is not defined');
}

// Mount GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV !== 'production',
  })
);

// Global error handler
app.use(( res) => {
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
