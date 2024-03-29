import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import fs from "fs";
import neo4j from 'neo4j-driver';
import path from "path";

dotenv.config();
const __dirname = path.resolve();
const typeDefs = fs.readFileSync(process.env.GRAPHQL_SCHEMA || path.join(__dirname, "src", "schema.graphql")).toString("utf-8");

const driver = neo4j.driver(
  process.env.NEO4J_URI || "bolt://localhost:7687",
  neo4j.auth.basic(
    process.env.NEO4J_USER || "neo4j",
    process.env.NEO4J_PASSWORD || "neo4j"
  )
);

const neoSchema = new Neo4jGraphQL({ typeDefs:[
  typeDefs
], driver });

const server = new ApolloServer({
    schema: await neoSchema.getSchema(),
    context: ({ req }) => ({ req }),
});

server.listen(process.env.GRAPHQL_LISTEN_PORT, "0.0.0.0").then(({ url }) => {
  console.log(`GraphQL API ready at ${url}`);
});
