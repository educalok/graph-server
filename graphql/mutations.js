const {GraphQLString, GraphQLID, GraphQLNonNull} = require('graphql');

const {createJWTToken} = require('../util/auth');
const {User, Post} = require('../models');
const {PostType} = require('./types');

const register = {
  type: GraphQLString,
  description: 'Register a new user',
  args: {
    username: {type: new GraphQLNonNull(GraphQLString)},
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)},
    displayName: {type: new GraphQLNonNull(GraphQLString)},
  },

  async resolve(_, {username, email, password, displayName}) {
    const user = new User({username, email, password, displayName});
    await user.save();

    const token = createJWTToken({
      _id: user._id,
      email: user.email,
      displayName: user.displayName,
    });

    return token;
  },
};

const login = {
  type: GraphQLString,
  args: {
    email: {type: GraphQLString},
    password: {type: GraphQLString},
  },
  async resolve(_, args) {
    const user = await User.findOne({email: args.email}).select('+password');
    if (!user || args.password !== user.password) {
      throw new Error('Invalid credentials');
    }

    const token = createJWTToken({
      _id: user._id,
      email: user.email,
      displayName: user.displayName,
    });

    return token;
  },
};

const createPost = {
  type: PostType,
  description: 'create a new blog post',
  args: {
    title: {type: new GraphQLNonNull(GraphQLString)},
    body: {type: new GraphQLNonNull(GraphQLString)},
  },
  /* async resolve(_, args, {verifiedUser}) { */
  async resolve(_, args) {
    /*    if (!verifiedUser) throw new Error('You must be logged in to do that');

    const userFound = await User.findById(verifiedUser._id);
    if (!userFound) throw new Error('Unauthorized'); */

    const post = new Post({
      authorId: '61ea0caa39f40dfe4b77d97a',
      title: args.title,
      body: args.body,
    });

    return post.save();
  },
};

module.exports = {register, login, createPost};
