import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesFormComponent } from './rates-form.component';
import { Overlay } from '@angular/cdk/overlay';
import { FormBuilder } from '@angular/forms';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DashboardComponent } from '../dashboard.component';

describe('RatesFormComponent', () => {
  let controller: ApolloTestingController;
  let dashboard: DashboardComponent;
  let ratesComponent: RatesFormComponent;
  let fixture: ComponentFixture<RatesFormComponent>;
  let dashboardFixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesFormComponent, DashboardComponent ],
      imports: [ApolloTestingModule],
      providers: [NzNotificationService, Overlay, FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatesFormComponent);
    ratesComponent = fixture.componentInstance;
    controller = TestBed.inject(ApolloTestingController);
    dashboardFixture = TestBed.createComponent(DashboardComponent);
    dashboard = dashboardFixture.componentInstance;
    dashboard.openForm("experience");
    ratesComponent.person = {
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
      expect(ratesComponent).toBeFalsy();
    } else {
      expect(ratesComponent).toBeTruthy();
    }
  });
});
