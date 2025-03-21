export class ConfigService {
  host: string;
  port: number;
  jwtSecret: string;
  tokenCookieSettings: { name: string; maxAge: number };
  corsWhitelist: string[];

  constructor(env: Record<string, string>) {
    this.host = env.HOST || '0.0.0.0';
    this.port = Number(env.PORT) || 4100;
    this.jwtSecret = env.JWT_SECRET || 'secret';
    this.tokenCookieSettings = {
      name: 'nggql_token',
      maxAge: 31536000000,
    };
    this.corsWhitelist = ['http://localhost:4200'];
  }
}
