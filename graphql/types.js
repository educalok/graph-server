const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList} = require('graphql');
const {Post, Comment, User} = require('../models');

//Se definen los tipos de datos customizados, por ejemplo UserType y PostType

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
    //En la propiedad fields se pueden retornar los campos con una función anónima. Esto sirve para el caso de los posts que tienen un tipo de dato comment que se utiliza antes de ser instanciado, entonces la //solución es devolver esos campos como función
    id: {type: GraphQLID},
    title: {type: GraphQLString},
    body: {type: GraphQLString},
    author: {
      type: UserType,
      resolve(parent) {
        return User.findById(parent.authorId);
      },
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent) {
        return Comment.find({postId: parent.id});
      },
    },
  }),
});

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  description: 'comments type',
  fields: () => ({
    id: {type: GraphQLID},
    comment: {type: GraphQLString},
    user: {
      type: UserType,
      resolve(parent) {
        return User.findById(parent.userId);
      },
    },
    post: {
      type: PostType,
      resolve(parent) {
        return Post.findById(parent.postId);
      },
    },
  }),
});

module.exports = {
  UserType,
  PostType,
  CommentType,
};
