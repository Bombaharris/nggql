import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesFormComponent } from './rates-form.component';
import { Overlay } from '@angular/cdk/overlay';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DashboardComponent } from '../dashboard.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GraphQLModule } from 'src/app/graphql.module';

describe('RatesFormComponent', () => {
  let controller: ApolloTestingController;
  let dashboard: DashboardComponent;
  let ratesComponent: RatesFormComponent;
  let ratesFormFixture: ComponentFixture<RatesFormComponent>;
  let dashboardFixture: ComponentFixture<DashboardComponent>;
  let fb: FormBuilder;
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
