import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ExperienceFormComponent } from './experience-form.component';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Overlay } from '@angular/cdk/overlay';
import { FormBuilder } from '@angular/forms';
import { PersonsComponent } from '../persons.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { of } from 'rxjs';

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
      imports: [ApolloTestingModule, RouterTestingModule.withRoutes([])],
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
    controller = TestBed.inject(ApolloTestingController);
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

    if(!component || !component.person || !component.person.id){
      expect(component).toBeFalsy();
    } else {
      expect(component).toBeTruthy();
    }
  });
});
