import path from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class ConfigService {
  host: string;
  port: string;
  graphQlSchema: string;
  neo4j: Record<'uri' | 'user' | 'password', string>;
  jwtSecret: string;
  tokenCookieName: string;
  corsWhitelist: string[];

  constructor(env: Record<string, string>) {
    this.host = env.HOST || '0.0.0.0';
    this.port = env.GRAPHQL_LISTEN_PORT;
    this.graphQlSchema =
      env.GRAPHQL_SCHEMA || path.join(__dirname, '..', 'schema.graphql');
    this.neo4j = {
      uri: env.NEO4J_URI || 'bolt://localhost:7687',
      user: env.NEO4J_USER || 'neo4j',
      password: env.NEO4J_PASSWORD || 'neo4j',
    };
    this.jwtSecret = env.JWT_SECRET || 'secret';
    this.tokenCookieName = 'nggql_token';
    this.corsWhitelist = ['http://localhost:4200'];
  }
}
