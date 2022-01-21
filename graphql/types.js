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

module.exports = {
  UserType,
};
