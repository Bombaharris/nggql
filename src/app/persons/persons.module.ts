import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsComponent } from './persons.component';
import { ExperienceFormComponent } from './experience-form/experience-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';


@NgModule({
  declarations: [
    PersonsComponent, ExperienceFormComponent
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ]
})
export class PersonsModule { }
