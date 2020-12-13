import express from "express";
import mongoose from "mongoose";
import connectMongo from "connect-mongo";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema
  })
);

app.listen(4000, () => console.log("server started on port 4000"));
