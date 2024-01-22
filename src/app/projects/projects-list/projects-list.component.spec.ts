import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { GraphQLModule } from 'src/app/graphql.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { ProjectsListComponent } from './projects-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsRoutingModule } from '../projects-routing.module';

describe('ProjectsListComponent', () => {
  let component: ProjectsListComponent;
  let fixture: ComponentFixture<ProjectsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProjectsListComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [
            {path: 'projects', component: ProjectsListComponent}
          ]
          ),
        NgZorroAntdModule,
        ProjectsRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        GraphQLModule,
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
