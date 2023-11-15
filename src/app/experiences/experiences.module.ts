import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceFormComponent } from './experience-form/experience-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { ExperiencesComponent } from './experiences.component';
import { ExperiencesRoutingModule } from './experiences-routing.module';

@NgModule({
  declarations: [ 
    ExperienceFormComponent, ExperiencesComponent,
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ]
})
export class ExperiencesModule { }
