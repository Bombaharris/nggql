import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { Overlay } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GraphQLModule } from 'src/app/graphql.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { DashboardComponent } from '../dashboard.component';
import { RatesFormComponent } from './rates-form.component';

describe('RatesFormComponent', () => {
  let dashboard: DashboardComponent;
  let ratesComponent: RatesFormComponent;
  let ratesFormFixture: ComponentFixture<RatesFormComponent>;
  let dashboardFixture: ComponentFixture<DashboardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesFormComponent, DashboardComponent ],
      imports: [AppRoutingModule,
        BrowserModule,
        GraphQLModule,
        HttpClientModule,
        HttpClientJsonpModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        BrowserAnimationsModule,
        ScrollingModule,
        DragDropModule,],
      providers: [NzNotificationService, Overlay, FormBuilder]
    })
    .compileComponents();

    ratesFormFixture = TestBed.createComponent(RatesFormComponent);
    ratesComponent = ratesFormFixture.componentInstance;
    dashboardFixture = TestBed.createComponent(DashboardComponent);
    dashboard = dashboardFixture.componentInstance;
    ratesComponent.isLoading = false;
    ratesComponent.ratesForm.get("rates")?.value.push(ratesComponent.addNewForm())
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
    dashboard.openForm("rates", ratesComponent.person);
    dashboardFixture.detectChanges();
    ratesFormFixture.detectChanges();
  });

  it('should create', () => {
      expect(ratesComponent).toBeTruthy();
  });
});
