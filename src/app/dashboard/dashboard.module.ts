import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { PersonFormComponent } from './person-form/person-form.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PersonCardComponent,
    PersonFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ]
})
export class DashboardModule {
}
