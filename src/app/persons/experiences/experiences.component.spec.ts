import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Overlay } from '@angular/cdk/overlay';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { ExperienceFormComponent } from './experience-form/experience-form.component';
import { ExperiencesComponent } from './experiences.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GraphQLModule } from 'src/app/graphql.module';
import { ExperienceType } from '../../generated/graphql';
import { CvDateModule } from '../../shared/pipes/cv-date.module';
import createSpyObj = jasmine.createSpyObj;

describe('ExperiencesComponent', () => {
  let experiencesComponent: ExperiencesComponent;
  let experienceFormComponent: ExperienceFormComponent;
  let experiencesFixture: ComponentFixture<ExperiencesComponent>;
  let experienceFormFixture: ComponentFixture<ExperienceFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperiencesComponent, ExperienceFormComponent],
      imports: [
        RouterTestingModule.withRoutes(
          [
            {
              path: 'persons/:id/experiences',
              component: ExperiencesComponent,
            },
          ],
          {},
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
        CvDateModule,
      ],
      providers: [FormBuilder, Overlay, NzNotificationService],
    }).compileComponents();
    experiencesFixture = TestBed.createComponent(ExperiencesComponent);
    experienceFormFixture = TestBed.createComponent(ExperienceFormComponent);
    experienceFormComponent = experienceFormFixture.componentInstance;
    experiencesComponent = experiencesFixture.componentInstance;
    experienceFormComponent.experienceType = ExperienceType.Default;
    experienceFormComponent.experienceData = [];
    experienceFormComponent.addNewForm();
    experiencesFixture.detectChanges();
    experienceFormFixture.detectChanges();
  });

  it('should create', () => {
    expect(experiencesComponent).toBeTruthy();
  });

  it('should return experience by type', () => {
    experiencesComponent.editedPerson = createSpyObj('Person', [], {
      experience: [{ id: 'a' }],
      education: [{ id: 'b' }],
      hobby: [{ id: 'c' }],
      projectExperience: [{ id: 'd' }],
      courses: [{ id: 'e' }],
    });

    expect(
      experiencesComponent.getExperienceByType(ExperienceType.Default),
    ).toEqual([{ id: 'a' }]);

    expect(
      experiencesComponent.getExperienceByType(ExperienceType.Education),
    ).toEqual([{ id: 'b' }]);

    expect(
      experiencesComponent.getExperienceByType(ExperienceType.Hobby),
    ).toEqual([{ id: 'c' }]);

    expect(
      experiencesComponent.getExperienceByType(ExperienceType.Project),
    ).toEqual([{ id: 'd' }]);

    expect(
      experiencesComponent.getExperienceByType(ExperienceType.Course),
    ).toEqual([{ id: 'e' }]);
  });
});
