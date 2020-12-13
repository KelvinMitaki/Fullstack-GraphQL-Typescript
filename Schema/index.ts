import { GraphQLSchema } from "graphql";
import { mutation } from "./Mutation";
import { RootQuery } from "./Query";

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation
});

export { schema };
