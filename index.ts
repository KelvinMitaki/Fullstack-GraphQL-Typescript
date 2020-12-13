import express from "express";
import mongoose from "mongoose";
import connectMongo from "connect-mongo";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";

const app = express();

if (!process.env.MONGO_URI) {
  throw new Error("Mongo URI must be provided");
}

const mongooseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connected to db");
  } catch (error) {
    console.log({ error });
  }
};

mongooseConnect();

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema
  })
);

app.listen(4000, () => console.log("server started on port 4000"));
