import { ConfigService } from './services/config-service.js';
import fs from 'fs';
import neo4j from 'neo4j-driver';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloServer } from 'apollo-server';
import cookieParser from 'cookie-parser';

const configService = new ConfigService(process.env as Record<string, string>);

const typeDefs = fs.readFileSync(configService.graphQlSchema).toString('utf-8');

const driver = neo4j.driver(
  configService.neo4j.uri,
  neo4j.auth.basic(configService.neo4j.user, configService.neo4j.password),
);

const neoSchema = new Neo4jGraphQL({
  typeDefs: [typeDefs],
  driver,
  features: {
    authorization: {
      key: configService.jwtSecret,
    },
  },
});

const cookieParserHandler = cookieParser();
const server = new ApolloServer({
  schema: await neoSchema.getSchema(),
  cors: {
    origin: configService.corsWhitelist,
    credentials: true,
  },
  context: ({ req, res }) => {
    cookieParserHandler(req, res, () => {});

    return {
      ...req,
      token:
        req.cookies[configService.tokenCookieName] ??
        req.header('Authorization'),
    };
  },
});

server.listen(configService.port, configService.host).then(({ url }) => {
  console.log(`GraphQL API ready at ${url}`);
});
