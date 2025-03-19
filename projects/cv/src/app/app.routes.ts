import { Routes } from '@angular/router';
import { authGuard } from 'shared';
import { GraphQLModule } from './graphql.module';

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
