import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { ConfigService } from './services/config-service.js';
import loginRouter from './routes/login.js';
import { ServicesContainer } from './services/services-container.js';
import { TokenService } from './services/token-service.js';

const app = express();

app.use(cookieParser());
app.use(express.json());

const configService = ServicesContainer.instance.bootstrap(
  ConfigService,
  process.env as Record<string, string>,
);
ServicesContainer.instance.bootstrap(TokenService, configService.jwtSecret, {
  algorithm: 'HS256',
});

app.use(
  '/login',
  cors({ origin: configService.corsWhitelist, credentials: true }),
  loginRouter,
);

app.listen(
  configService.port,
  configService.host,
  () =>
    `REST API server is listening on http://${configService.host}:${configService.port}`,
);
