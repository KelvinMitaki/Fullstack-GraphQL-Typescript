import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UserType } from "./User";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args, ctx) {}
    }
  }
});

export { mutation };
