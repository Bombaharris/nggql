import { ComponentFixture, TestBed,  } from '@angular/core/testing';

import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Overlay } from '@angular/cdk/overlay';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { ExperienceFormComponent } from './experience-form/experience-form.component';
import { ExperiencesComponent } from './experiences.component';

describe('ExperiencesComponent', () => {
  let component: ExperiencesComponent;
  let experienceFormComponent: ExperienceFormComponent;
  let fixture: ComponentFixture<ExperiencesComponent>;
  let experienceFormFixture: ComponentFixture<ExperienceFormComponent>;
  let controller: ApolloTestingController;
  let router: Router;  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesComponent, ExperienceFormComponent ],
      imports: [ RouterTestingModule.withRoutes(
        [
          {path: 'Experiences/:id/experiences', component: ExperiencesComponent}
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
    fixture = TestBed.createComponent(ExperiencesComponent);
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
