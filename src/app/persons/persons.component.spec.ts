import { ComponentFixture, TestBed,  } from '@angular/core/testing';

import { PersonsComponent } from './persons.component';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { ExperienceFormComponent } from './experience-form/experience-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Overlay } from '@angular/cdk/overlay';

describe('PersonsComponent', () => {
  let component: PersonsComponent;
  let experienceFormComponent: ExperienceFormComponent;
  let fixture: ComponentFixture<PersonsComponent>;
  let experienceFormFixture: ComponentFixture<ExperienceFormComponent>;
  let controller: ApolloTestingController;
  let router: Router;  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsComponent, ExperienceFormComponent ],
      imports: [ RouterTestingModule.withRoutes(
        [
          {path: 'persons/:id/experiences', component: PersonsComponent}
        ], {
          
        }
        ),
        ApolloTestingModule,
        NgZorroAntdModule,
        ReactiveFormsModule
      ],
      providers: [ApolloTestingModule, FormBuilder, Overlay, NzNotificationService],
    })
    .compileComponents();
    controller = TestBed.inject(ApolloTestingController);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(PersonsComponent);
    experienceFormFixture = TestBed.createComponent(ExperienceFormComponent);
    router.initialNavigation();
    component = fixture.componentInstance;
    experienceFormComponent = experienceFormFixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
