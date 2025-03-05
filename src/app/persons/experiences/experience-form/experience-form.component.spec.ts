import { DragDropModule } from '@angular/cdk/drag-drop';
import { Overlay } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
import { ExperiencesComponent } from '../experiences.component';
import { ExperienceFormComponent } from './experience-form.component';
import { ExperienceType } from '../../../generated/graphql';
import { CvDateModule } from '../../../shared/pipes/cv-date.module';

describe('ExperienceFormComponent', () => {
  let experienceFormComponent: ExperienceFormComponent;
  let experienceFormFixture: ComponentFixture<ExperienceFormComponent>;
  let experiencesFixture: ComponentFixture<ExperiencesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceFormComponent, ExperiencesComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
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
        CvDateModule,
      ],
      providers: [
        ApolloTestingModule,
        NzNotificationService,
        Overlay,
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: 'Zub',
            }),
          },
        },
      ],
    }).compileComponents();
    experiencesFixture = TestBed.createComponent(ExperiencesComponent);
    experienceFormFixture = TestBed.createComponent(ExperienceFormComponent);
    experienceFormComponent = experienceFormFixture.componentInstance;
    experienceFormComponent.experienceType = ExperienceType.Default;
    experienceFormComponent.experienceData = [
      {
        name: 'Frontend Developer',
        institution: 'Onwelo',
        description: 'Large description',
        startedFrom: '2023-11-11T16:36:52.959Z',
        gainedAt: '2023-11-23T16:36:52.959Z',
      },
    ];

    experiencesFixture.detectChanges();
    experienceFormFixture.detectChanges();
  });

  it('should create', () => {
    expect(experienceFormComponent).toBeTruthy();
  });
});
