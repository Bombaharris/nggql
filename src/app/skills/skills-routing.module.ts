import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills.component';
import { SkillsListComponent } from './skills-list/skills-list.component';

const routes: Routes = [
  {
      path: '',
      component: SkillsComponent,
      children: [
        {
          path: '',
          component: SkillsListComponent
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
