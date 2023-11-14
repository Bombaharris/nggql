import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ExperienceFormComponent } from './experience-form.component';
import { DashboardComponent } from '../dashboard.component';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Overlay } from '@angular/cdk/overlay';
import { FormBuilder } from '@angular/forms';

describe('ExperienceFormComponent', () => {
  let controller: ApolloTestingController;
  let component: ExperienceFormComponent;
  let dashboard: DashboardComponent;
  let fixture: ComponentFixture<ExperienceFormComponent>;
  let dashboardFixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceFormComponent, DashboardComponent ],
      imports: [ApolloTestingModule],
      providers: [NzNotificationService, Overlay, FormBuilder]
    })
    .compileComponents();
    controller = TestBed.inject(ApolloTestingController);
    dashboardFixture = TestBed.createComponent(DashboardComponent);
    fixture = TestBed.createComponent(ExperienceFormComponent);
    component = fixture.componentInstance;
    dashboard = dashboardFixture.componentInstance;
dashboard.openForm("experience");
  component.person = {
    id: "MrGreen",
    name: "Ralph",
    surname: "Green",
    departments: [],
    experiences: [],
    projects: [],
    rates: [],
    roles: [],
     skills: [],
  }
    dashboardFixture.detectChanges();
    fixture.detectChanges();
  });

 
  it('should create', () => {
    if(!dashboard || !dashboard.currentForm){
      expect(component).toBeFalsy();
    } else {
      expect(component).toBeTruthy();
    }
  });
});
