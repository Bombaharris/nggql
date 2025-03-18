import { Router } from 'express';
import { ServicesContainer } from '../services/services-container.js';
import { TokenService } from '../services/token-service.js';
import { ConfigService } from '../services/config-service.js';

const router = Router();

router.post('/', async (req, res) => {
  const { token } = req.body;
  const tokenService = ServicesContainer.instance.get(TokenService);
  const configService = ServicesContainer.instance.get(ConfigService);

  if (!(await tokenService.validate(token))) {
    res.sendStatus(401);
    return;
  }

  if (req.cookies.nggql_token) {
    if (!(await tokenService.validate(req.cookies.nggql_token))) {
      res.sendStatus(401);
      return;
    }

    res.sendStatus(204);
    return;
  }

  const newToken = await tokenService.sign({ roles: ['admin'] });

  res.cookie(configService.tokenCookieSettings.name, newToken, {
    httpOnly: true,
    maxAge: configService.tokenCookieSettings.maxAge,
    sameSite: 'lax',
  });

  res.json({ token: newToken });
});

export default router;
