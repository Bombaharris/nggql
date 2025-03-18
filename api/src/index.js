import { Neo4jGraphQL } from "@neo4j/graphql";
import dotenv from "dotenv";
import fs from "fs";
import neo4j from "neo4j-driver";
import path from "path";
import express from "express";
import * as http from "node:http";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import Token from "./token.js";
import cookieParser from "cookie-parser";

dotenv.config();
const __dirname = path.resolve();
const typeDefs = fs
  .readFileSync(
    process.env.GRAPHQL_SCHEMA || path.join(__dirname, "src", "schema.graphql"),
  )
  .toString("utf-8");

const driver = neo4j.driver(
  process.env.NEO4J_URI || "bolt://localhost:7687",
  neo4j.auth.basic(
    process.env.NEO4J_USER || "neo4j",
    process.env.NEO4J_PASSWORD || "neo4j",
  ),
);

const neoSchema = new Neo4jGraphQL({
  typeDefs: [typeDefs],
  driver,
  features: {
    authorization: {
      key: process.env.JWT_SECRET || "secret",
    },
  },
});

const app = express();
app.use(cookieParser());
const httpServer = http.createServer(app);
const server = new ApolloServer({
  schema: await neoSchema.getSchema(),
  context: ({ req }) => ({
    ...req,
    token: req.cookies.nggql_token ?? req.header("Authorization"),
  }),
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();
server.applyMiddleware({
  app,
  path: "/graphql",
  cors: { origin: "http://localhost:4200", credentials: true },
});

app.use(express.json());
const tokenService = new Token(process.env.JWT_SECRET || "secret", {
  algorithm: "HS256",
});
app.options(
  "/login",
  cors({ origin: "http://localhost:4200", credentials: true }),
);
app.post(
  "/login",
  cors({ origin: "http://localhost:4200", credentials: true }),
  async (req, res) => {
    const { token } = req.body;

    if (!(await tokenService.validate(token))) {
      res.sendStatus(401);
      return;
    }

    if (req.cookies.nggql_token) {
      res.sendStatus(204);
      return;
    }

    const newToken = await tokenService.sign({ roles: ["admin"] });

    res.cookie("nggql_token", newToken, {
      httpOnly: true,
      maxAge: 31536000000,
      sameSite: "lax",
    });

    res.json({ token: newToken });
  },
);

httpServer.listen(process.env.GRAPHQL_LISTEN_PORT, "0.0.0.0", () => {
  console.log(`GraphQL API ready at ${server.graphqlPath}`);
});
