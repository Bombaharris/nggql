import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { type Server } from 'node:http';
import type { Express } from 'express';
import neo4j from 'neo4j-driver';
import { Neo4jGraphQL } from '@neo4j/graphql';
import fs from 'fs';
import { ServicesContainer } from '../services/services-container.js';
import { ConfigService } from '../services/config-service.js';

export default async function bootstrapGraphQl(
  app: Express,
  httpServer: Server,
) {
  const configService = ServicesContainer.instance.get(ConfigService);

  const typeDefs = fs
    .readFileSync(configService.graphQl.schema)
    .toString('utf-8');

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

  const server = new ApolloServer({
    schema: await neoSchema.getSchema(),
    context: ({ req }) => ({
      ...req,
      token:
        req.cookies[configService.tokenCookieSettings.name] ??
        req.header('Authorization'),
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: configService.graphQl.path,
    cors: { origin: 'http://localhost:4200', credentials: true },
  });

  return server;
}
