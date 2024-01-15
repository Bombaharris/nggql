import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { RatesComponent } from './rates/rates.component';

const routes: Routes = [
  {
    path: '',
    component: PersonsComponent,
    children:[
      {
        path: ":id/experiences",
        component: ExperiencesComponent
      },
      {
        path: ":id/rates",
        component: RatesComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
