import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { User } from "../model/User";
import { UserType } from "./User";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      async resolve(parent, args, ctx, info) {
        const user = await User.findOne({ _id: args.id });
        return user;
      }
    }
  }
});

export { RootQuery };
