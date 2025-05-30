const { GraphQLList, GraphQLID, GraphQLNonNull } = require('graphql');
const { UserType, PostType, CommentType } = require('./types');
const { User, Post, Comment } = require('../models');

const users = {
  type: new GraphQLList(UserType),
  description: 'Retrieves a list of users',
  resolve: () => User.find(),
};

const user = {
  type: UserType,
  description: 'Retrieves a single user',
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (_, { id }) => User.findById(id),
};

const posts = {
  type: new GraphQLList(PostType),
  description: 'Retrieves a list of posts',
  resolve: () => Post.find(),
};

const post = {
  type: PostType,
  description: 'Retrieves a single post',
  args: { id: { type: GraphQLID } },
  resolve: (_, { id }) => Post.findById(id),
};

const comments = {
  type: new GraphQLList(CommentType),
  description: 'Retrieves a list of comments',
  resolve: () => Comment.find(),
};

const comment = {
  type: CommentType,
  description: 'Retrieves a single comment',
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (_, { id }) => Comment.findById(id),
};

module.exports = { users, user, posts, post, comments, comment };
