import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { Overlay } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GraphQLModule } from 'src/app/graphql.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { RatesComponent } from '../rates.component';
import { RatesFormComponent } from './rates-form.component';

describe('RatesFormComponent', () => {
  let ratesFormComponent: RatesFormComponent;
  let ratesFormFixture: ComponentFixture<RatesFormComponent>;
  let ratesFixture: ComponentFixture<RatesComponent>;
  let fb: FormBuilder = new FormBuilder();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesFormComponent, RatesComponent ],
      imports: [ RouterTestingModule.withRoutes([]),
      AppRoutingModule,
      BrowserModule,
      GraphQLModule,
      HttpClientModule,
      HttpClientJsonpModule,
      ReactiveFormsModule,
      NgZorroAntdModule,
      BrowserAnimationsModule,
      ScrollingModule,
      DragDropModule,
    ],
    providers: [ApolloTestingModule, NzNotificationService, Overlay, FormBuilder, 
      {
        provide: ActivatedRoute,
        useValue: {
          params: of({
            id: "Zub",
          }),
        },
      },
    ]
    })
    .compileComponents();
    ratesFixture = TestBed.createComponent(RatesComponent);
    ratesFormFixture = TestBed.createComponent(RatesFormComponent);
    ratesFormComponent = ratesFormFixture.componentInstance;
    ratesFormComponent.person = {
      id: "Zub",
      name: "Michael",
      surname: "Zubenstein",
      departments: [],
      experiences: [
        {
          name: "Onwleo",
          description: "Large description",
          startedFrom: '2023-11-11T16:36:52.959Z',
          gainedAt: '2023-11-23T16:36:52.959Z',
        }
      ],
      projects: [],
    rates: [],
    roles: [],
    }
    ratesFormComponent.ratesForm = fb.group({
      rates: fb.array([])
    });
    ratesFormComponent.ratesForm.get("rates")?.value.push(ratesFormComponent.newRatesGroup())
    
    ratesFixture.detectChanges();
    ratesFormFixture.detectChanges();
  });

  it('should create', () => {
    expect(ratesFormComponent).toBeTruthy();
});
});
