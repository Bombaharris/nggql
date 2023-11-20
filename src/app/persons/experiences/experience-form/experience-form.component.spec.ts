import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ExperienceFormComponent } from './experience-form.component';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Overlay } from '@angular/cdk/overlay';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PersonsComponent } from '../../persons.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { of } from 'rxjs';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GraphQLModule } from 'src/app/graphql.module';

describe('ExperienceFormComponent', () => {
  let controller: ApolloTestingController;
  let component: ExperienceFormComponent;
  let persons: PersonsComponent;
  let fixture: ComponentFixture<ExperienceFormComponent>;
  let personsFixture: ComponentFixture<PersonsComponent>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceFormComponent, PersonsComponent ],
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
      providers: [NzNotificationService, Overlay, FormBuilder, 
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              bookId: 2,
            }),
          },
        },
      ]
    })
    .compileComponents();
    personsFixture = TestBed.createComponent(PersonsComponent);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute)
    fixture = TestBed.createComponent(ExperienceFormComponent);
    component = fixture.componentInstance;
    persons = personsFixture.componentInstance;
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
 
    personsFixture.detectChanges();
    fixture.detectChanges();
  });

 
  it('should create', () => {

    
      expect(component).toBeTruthy();

  });
});
