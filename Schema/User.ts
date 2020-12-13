import { GraphQLObjectType, GraphQLString } from "graphql";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    email: { type: GraphQLString }
  }
});

export { UserType };
