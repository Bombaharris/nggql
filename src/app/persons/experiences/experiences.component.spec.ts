import { ComponentFixture, TestBed,  } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Overlay } from '@angular/cdk/overlay';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { ExperienceFormComponent } from './experience-form/experience-form.component';
import { ExperiencesComponent } from './experiences.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GraphQLModule } from 'src/app/graphql.module';
import { CustomDatePipe } from 'src/app/pipes/custom-date.pipe';

describe('ExperiencesComponent', () => {
  let experiencesComponent: ExperiencesComponent;
  let experienceFormComponent: ExperienceFormComponent;
  let experiencesFixture: ComponentFixture<ExperiencesComponent>;
  let experienceFormFixture: ComponentFixture<ExperienceFormComponent>;
  let fb = new FormBuilder();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesComponent, ExperienceFormComponent, CustomDatePipe ],
      imports: [ RouterTestingModule.withRoutes(
        [
          {path: 'persons/:id/experiences', component: ExperiencesComponent}
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
    experiencesFixture = TestBed.createComponent(ExperiencesComponent);
    experienceFormFixture = TestBed.createComponent(ExperienceFormComponent);
    experienceFormComponent = experienceFormFixture.componentInstance;
    experiencesComponent = experiencesFixture.componentInstance;
    experienceFormComponent.person = {
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
    experienceFormComponent.experienceForm = fb.group({
      experiences: fb.array([])
    });
    experienceFormComponent.addNewForm();
    experiencesFixture.detectChanges();
    experienceFormFixture.detectChanges();
  });

  it('should create', () => {
    expect(experiencesComponent).toBeTruthy();
  });

});
