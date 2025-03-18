import { ServicesContainer } from '../services/services-container.js';
import { TokenService } from '../services/token-service.js';
import { ConfigService } from '../services/config-service.js';

export default function bootstrapServices() {
  const servicesContainer = ServicesContainer.instance;

  const configService = servicesContainer.bootstrap(
    ConfigService,
    process.env as Record<string, string>,
  );

  servicesContainer.bootstrap(TokenService, configService.jwtSecret, {
    algorithm: 'HS256',
  });
}
