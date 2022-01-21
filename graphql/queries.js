const {GraphQLList} = require('graphql');

const {UserType} = require('./types');
const {User} = require('../models');

const users = {
  type: new GraphQLList(UserType),
  description: 'Returns the list of users in DB',
  resolve() {
    return User.find();
  },
};

module.exports = {users};
