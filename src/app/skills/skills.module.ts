import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { SkillsComponent } from './skills.component';
import { SkillsFormComponent } from './skills-form/skills-form.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillGroupsFormComponent } from './skills-form/skills-group-form.component';
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    SkillsComponent,
    SkillsFormComponent,
    SkillGroupsFormComponent,
    SkillsListComponent,
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    CdkDrag,
    CdkDropList
  ],
})
export class SkillsModule {}
