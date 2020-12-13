import { GraphQLObjectType, GraphQLString } from "graphql";
import { UserType } from "./User";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args, ctx, info) {
        return {
          firstName: "Kelvin",
          lastName: "mitaki",
          email: "kevin@gmail.com",
          password: "kevinmitaki"
        };
      }
    }
  }
});

export { RootQuery };