import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentTransferComponent } from './department-transfer/department-transfer.component';


@NgModule({
  declarations: [
    DepartmentsComponent, DepartmentFormComponent, DepartmentsListComponent, DepartmentTransferComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ]
})
export class DepartmentsModule { }
