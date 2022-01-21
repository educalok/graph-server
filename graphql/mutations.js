const {GraphQLString, GraphQLID, GraphQLNonNull} = require('graphql');

const {createJWTToken} = require('../util/auth');
const {User} = require('../models');

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

module.exports = {register, login};
