import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ReadableDurationPipe } from "../shared/readable-duration.pipe";


@NgModule({
    declarations: [
        ProjectsComponent, ProjectsListComponent, ProjectFormComponent
    ],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        ReadableDurationPipe
    ]
})
export class ProjectsModule { }
