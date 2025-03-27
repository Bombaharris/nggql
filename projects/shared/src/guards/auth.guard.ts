import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface CreateAuthGuardProps {
  loginUrl: string;
  unauthorizedUrl: string;
}

export const createAuthGuard = ({
  loginUrl,
  unauthorizedUrl,
}: CreateAuthGuardProps) => {
  return (async (route: any) => {
    const { token } = route.queryParams;
    const router = inject(Router);

    if (!token) {
      return router.parseUrl(unauthorizedUrl);
    }

    const client = inject(HttpClient);

    try {
      await client
        .post(loginUrl, { token }, { withCredentials: true })
        .toPromise();
    } catch (_) {
      return router.parseUrl(unauthorizedUrl);
    }

    return true;
  }) satisfies CanActivateFn;
};
