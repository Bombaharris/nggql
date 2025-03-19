import cors from 'cors';
import bootstrapExpress from './bootstrap/bootstrap-express.js';
import bootstrapGraphQl from './bootstrap/bootstrap-graphql.js';
import loginRouter from './routes/login.js';
import bootstrapServices from './bootstrap/bootstrap-services.js';
import { ServicesContainer } from './services/services-container.js';
import { ConfigService } from './services/config-service.js';

bootstrapServices();
const { app, httpServer } = bootstrapExpress();
const server = await bootstrapGraphQl(app, httpServer);

const configService = ServicesContainer.instance.get(ConfigService);

app.use(
  '/login',
  cors({ origin: configService.corsWhitelist, credentials: true }),
  loginRouter,
);

httpServer.listen(configService.port, configService.host, () => {
  console.log(
    `GraphQL API ready at http://${configService.host}:${configService.port}${server.graphqlPath}`,
  );
});
