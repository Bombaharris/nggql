import { Routes } from '@angular/router';
import { createAuthGuard } from 'shared';
import { GraphQLModule } from './graphql.module';
import { environment } from '../environments/environment';

const authGuard = createAuthGuard({
  loginUrl: new URL('/login', environment.restApiUrl).href,
  unauthorizedUrl: '/unauthorized',
});

export const routes: Routes = [
  {
    path: 'persons',
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    loadChildren: () => import('./cv-view/routes'),
    providers: [GraphQLModule],
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./unauthorized/unauthorized.component').then(
        (m) => m.UnauthorizedComponent,
      ),
  },
];
