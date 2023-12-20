import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';


@NgModule({
  declarations: [
    DepartmentsComponent, DepartmentFormComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ]
})
export class DepartmentsModule { }
