import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const authGuard: CanActivateFn = async (route, state) => {
  const { token } = route.queryParams;
  const router = inject(Router);

  if (!token) {
    return router.parseUrl('/unauthorized');
  }

  const client = inject(HttpClient);

  try {
    await client
      .post('http://localhost:4000/login', { token }, { withCredentials: true })
      .toPromise();
  } catch (_) {
    return router.parseUrl('/unauthorized');
  }

  return true;
};
