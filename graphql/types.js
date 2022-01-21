//Archivo en el que se pueden definir tipos de datos customs

const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList} = require('graphql');

//Tipo de dato User, el mismo contará con los siguientes campos
const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User type',
  fields: () => ({
    id: {type: GraphQLID},
    username: {type: GraphQLString},
    email: {type: GraphQLString},
    displayName: {type: GraphQLString},
  }),
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Post Type',
  fields: () => ({
    id: {type: GraphQLID},
    title: {type: GraphQLString},
    body: {type: GraphQLString},
    author: {
      type: UserType,
      resolve(parent) {
        return User.findById(parent.authorId);
      },
    },
  }),
});

module.exports = {
  UserType,
  PostType,
};
