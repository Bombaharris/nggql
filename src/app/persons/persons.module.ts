import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsComponent } from './persons.component';
import { ExperienceFormComponent } from './experiences/experience-form/experience-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { ExperiencesComponent } from './experiences/experiences.component';
import { RatesFormComponent } from './rates/rates-form/rates-form.component';
import { RatesComponent } from './rates/rates.component';


@NgModule({
  declarations: [
    PersonsComponent, ExperienceFormComponent, ExperiencesComponent, RatesFormComponent, RatesComponent
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ]
})
export class PersonsModule { }
