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

declare module "express-session" {
  export interface Session {
    user?: { email: string; _id: string };
  }
}

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
    },
    login: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
      },
      async resolve(parent, args, ctx: Request) {
        const user = await User.findOne({ email: args.email });
        if (!user) {
          throw new Error("Invalid email or password");
        }
        const isMatch = await bcrypt.compare(args.password, user.password);
        if (!isMatch) {
          throw new Error("Invalid email or password");
        }
        ctx.session.user = user as typeof ctx.session.user;
        return user;
      }
    },
    logout: {
      type: UserType,
      async resolve(parent, args, ctx: Request) {
        const user = ctx.session.user;
        ctx.session.destroy(err => (err ? console.log(err) : null));
        return user;
      }
    }
  }
});

export { mutation };
