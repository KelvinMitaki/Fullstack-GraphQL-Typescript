import { Request } from "express";
import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { User } from "../model/User";
import { UserType } from "./User";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      async resolve(parent, args, ctx: Request, info) {
        return ctx.session.user;
      }
    }
  }
});

export { RootQuery };
