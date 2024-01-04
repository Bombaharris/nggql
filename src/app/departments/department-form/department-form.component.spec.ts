import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { GraphQLModule } from 'src/app/graphql.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { DepartmentsListComponent } from '../departments-list/departments-list.component';
import { DepartmentsRoutingModule } from '../departments-routing.module';
import { DepartmentFormComponent } from './department-form.component';

describe('DepartmentFormComponent', () => {
  let component: DepartmentFormComponent;
  let fixture: ComponentFixture<DepartmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentFormComponent],
      imports: [
        RouterTestingModule.withRoutes(
          [
            {path: 'departments', component: DepartmentsListComponent}
          ]
          ),
          NgZorroAntdModule,
          DepartmentsRoutingModule,
          BrowserModule,
          GraphQLModule,
          BrowserAnimationsModule,
          ReactiveFormsModule,
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
