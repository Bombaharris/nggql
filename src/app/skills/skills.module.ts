import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { SkillsComponent } from './skills.component';
import { SkillsFormComponent } from './skills-form/skills-form.component';
import { SkillsListComponent } from './skills-list/skills-list.component';


@NgModule({
  declarations: [SkillsComponent, SkillsFormComponent, SkillsListComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ]
})
export class SkillsModule { }
