const {GraphQLSchema, GraphQLObjectType} = require('graphql');

// Consultas
const {users, user, posts, post, comments, comment} = require('./queries');

// Mutaciones
const {register, login, createPost, addComment, updatePost, deletePost, updateComment, deleteComment} = require('./mutations');

// Definición de todos los tipos de consultas
const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'Queries',
  fields: {
    users,
    user,
    posts,
    post,
    comments,
    comment,
  },
});

// Definición de todos los tipos de mutaciones
const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'Mutations',
  fields: {
    register,
    login,
    createPost,
    addComment,
    updatePost,
    deletePost,
    updateComment,
    deleteComment,
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
