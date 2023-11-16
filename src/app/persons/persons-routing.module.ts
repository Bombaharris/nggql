import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons.component';

const routes: Routes = [
  {
    path: '',
    component: PersonsComponent,
  },
  {
    path: ':id/experiences',
    loadChildren: () => import('../experiences/experiences.module').then(m => m.ExperiencesModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
