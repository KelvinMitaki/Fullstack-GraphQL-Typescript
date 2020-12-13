import { GraphQLSchema } from "graphql";
import { RootQuery } from "./Query";

const schema = new GraphQLSchema({
  query: RootQuery
});

export { schema };
