import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    _id: { type: GraphQLID }
  }
});

export { UserType };
