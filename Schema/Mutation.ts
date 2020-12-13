import { Request } from "express";
import bcrypt from "bcrypt";
import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql";
import { User } from "../model/User";
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
      async resolve(parent, args, ctx: Request) {
        const emailExist = await User.findOne({ email: args.email });
        if (emailExist) {
          throw new Error("email already exists");
        }
        args.password = await bcrypt.hash(args.password, 10);
        const user = User.build({
          email: args.email,
          password: args.password
        });
        await user.save();
        // @ts-ignore
        ctx.session.user = user;
        return user;
      }
    }
  }
});

export { mutation };
