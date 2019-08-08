require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 4000;

const app = new GraphQLServer({ schema });

app.express.use(logger("dev"));

app.start({ port: PORT }, () =>
  console.log(`Server running : http://localhost:${PORT}`)
);
