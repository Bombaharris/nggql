import { Router } from 'express';
import { ServicesContainer } from '../services/services-container.js';
import { TokenService } from '../services/token-service.js';
import { ConfigService } from '../services/config-service.js';
import type { TokenPayload } from '../types/token-payload.js';

const router = Router();

router.post('/', async (req, res) => {
  const tokenService = ServicesContainer.instance.get(
    TokenService<TokenPayload>,
  );
  const configService = ServicesContainer.instance.get(ConfigService);

  const { token } = req.body;
  const cookieToken = req.cookies[configService.tokenCookieSettings.name];
  let roles: string[] = [];

  if (
    !(await tokenService.validate(token)) ||
    (cookieToken && !(await tokenService.validate(cookieToken)))
  ) {
    res.sendStatus(401);
    return;
  }

  if (cookieToken) {
    const cookieRoles =
      (await tokenService.getPayload(cookieToken))?.roles ?? [];

    if (cookieRoles.sort() === roles.sort()) {
      res.sendStatus(204);
      return;
    }

    roles = cookieRoles;
  }

  const newToken = await tokenService.sign({ roles });

  res.cookie(configService.tokenCookieSettings.name, newToken, {
    httpOnly: true,
    maxAge: configService.tokenCookieSettings.maxAge,
    sameSite: 'lax',
  });

  res.json({ token: newToken });
});

export default router;
