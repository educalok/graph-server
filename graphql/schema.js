const { GraphQLSchema, GraphQLObjectType } = require('graphql');

// Queries
const { users, user, posts, post, comments, comment } = require('./queries');

// Mutations
const { register, login, createPost, addComment, updatePost, deletePost, updateComment, deleteComment } = require('./mutations');

// Definition of all query types
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

// Definition of all mutation types
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
