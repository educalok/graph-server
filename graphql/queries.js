const {GraphQLList, GraphQLID, GraphQLString} = require('graphql');

const {UserType} = require('./types');
const {User} = require('../models');

const users = {
  type: new GraphQLList(UserType),
  description: 'Returns the list of users in DB',
  resolve() {
    return User.find();
  },
};

const user = {
  type: UserType,
  description: 'Returns a user by id',
  args: {
    id: {type: GraphQLID},
  },
  resolve(_, args) {
    return User.findById(args.id);
  },
};

module.exports = {users, user};
