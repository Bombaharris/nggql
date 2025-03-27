import { inject, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { createAuthGuard } from 'shared';
import { environment } from '../environments/environment';

const authGuard = createAuthGuard({
  loginUrl: new URL('/login', environment.restApiUrl).href,
  unauthorizedUrl: '/unauthorized',
});

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [authGuard, () => inject(Router).parseUrl('/dashboard')],
    children: [],
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'persons',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./persons/persons.module').then((m) => m.PersonsModule),
  },
  {
    path: 'departments',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./departments/departments.module').then(
        (m) => m.DepartmentsModule,
      ),
  },
  {
    path: 'projects',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'skills',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./unauthorized/unauthorized.component').then(
        (m) => m.UnauthorizedComponent,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
