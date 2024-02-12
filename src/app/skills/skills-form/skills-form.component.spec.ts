import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DepartmentsRoutingModule } from 'src/app/departments/departments-routing.module';
import { GraphQLModule } from 'src/app/graphql.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { SkillsListComponent } from '../skills-list/skills-list.component';
import { SkillsFormComponent } from './skills-form.component';

describe('SkillsFormComponent', () => {
  let component: SkillsFormComponent;
  let fixture: ComponentFixture<SkillsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsFormComponent],

      imports: [
        RouterTestingModule.withRoutes(
          [
            { path: 'skills', component: SkillsListComponent }
          ]
        ),
        NgZorroAntdModule,
        DepartmentsRoutingModule,
        BrowserModule,
        GraphQLModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SkillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
