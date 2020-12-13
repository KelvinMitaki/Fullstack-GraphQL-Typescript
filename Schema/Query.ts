import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UserType } from "./User";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args, ctx, info) {
        return {
          email: "kevin@gmail.com",
          password: "kevinmitaki"
        };
      }
    }
  }
});

export { RootQuery };
