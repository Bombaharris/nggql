import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsComponent } from './persons.component';
import { ExperienceFormComponent } from './experiences/experience-form/experience-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CustomDatePipe } from '../pipes/custom-date.pipe';


@NgModule({
  declarations: [
    PersonsComponent, ExperienceFormComponent, ExperiencesComponent, CustomDatePipe
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ]
})
export class PersonsModule { }
