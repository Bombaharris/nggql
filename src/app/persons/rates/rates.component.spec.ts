import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesComponent } from './rates.component';
import { RatesFormComponent } from './rates-form/rates-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Overlay } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GraphQLModule } from 'src/app/graphql.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';

describe('RatesComponent', () => {
  let ratesComponent: RatesComponent;
  let ratesFormComponent: RatesFormComponent;
  let ratesFixture: ComponentFixture<RatesComponent>;
  let ratesFormFixture: ComponentFixture<RatesFormComponent>;
  let fb = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ RatesComponent, RatesFormComponent ],
    imports: [ RouterTestingModule.withRoutes(
      [
        {path: 'persons/:id/rates', component: RatesComponent}
      ], {
        
      }
      ),
      NgZorroAntdModule,
      ReactiveFormsModule,
      AppRoutingModule,
      BrowserModule,
      GraphQLModule,
      HttpClientModule,
      HttpClientJsonpModule,
      BrowserAnimationsModule,
      ScrollingModule,
      DragDropModule,
    ],
    providers: [FormBuilder, Overlay, NzNotificationService,
    ],
  })
    .compileComponents();
    ratesFixture = TestBed.createComponent(RatesComponent);
    ratesFormFixture = TestBed.createComponent(RatesFormComponent);
    ratesFormComponent = ratesFormFixture.componentInstance;
    ratesComponent = ratesFixture.componentInstance;
    ratesFormComponent.person = {
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
    ratesFormComponent.ratesForm = fb.group({
      rates: fb.array([])
    });
    ratesFormComponent.addNewForm();
    ratesFixture.detectChanges();
    ratesFormFixture.detectChanges();
  });

  it('should create', () => {
    expect(ratesComponent).toBeTruthy();
  });
});
