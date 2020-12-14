import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import connectMongo from "connect-mongo";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";

const app = express();

if (!process.env.MONGO_URI) {
  throw new Error("Mongo URI must be provided");
}
const MongoStore = connectMongo(session);
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

const sessionStore = new MongoStore({
  url: process.env.MONGO_URI,
  autoReconnect: true
});

// @ts-ignore
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.MONGO_URI,
    store: sessionStore,
    cookie: {
      sameSite: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
      secure: process.env.NODE_ENV === "production"
    }
  })
);

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema
  })
);

app.listen(4000, () => console.log("server started on port 4000"));
