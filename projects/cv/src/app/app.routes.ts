import { Routes } from '@angular/router';
import { GraphQLModule } from './graphql.module';

export const routes: Routes = [
  {
    path: 'persons',
    loadChildren: () => import('./cv-view/routes'),
    providers: [GraphQLModule],
  },
];
