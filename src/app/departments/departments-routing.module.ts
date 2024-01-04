import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments.component';
import { DepartmentTransferComponent } from './department-transfer/department-transfer.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentsComponent,
    children: [
      {
        path: '',
        component: DepartmentsListComponent
      },
      {
        path: ':departmentId/transfer',
        component: DepartmentTransferComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
