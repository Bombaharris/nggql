import express from 'express';
import cookieParser from 'cookie-parser';
import * as http from 'node:http';

export default function bootstrapExpress() {
  const app = express();
  const httpServer = http.createServer(app);

  app.use(cookieParser());
  app.use(express.json());

  return { app, httpServer };
}
