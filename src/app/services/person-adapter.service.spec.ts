import { TestBed } from '@angular/core/testing';
import { PersonAdapterService } from './person-adapter.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateExperiencesDocument, CreateExperiencesGQL, CreateExperiencesMutation, EditExperiencesDocument, PersonsWithAllGQL } from '../generated/graphql';

describe('PersonAdapterService', () => {
  let service: PersonAdapterService;
  let apolloController: ApolloTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [PersonAdapterService, CreateExperiencesGQL, PersonsWithAllGQL],
    });
    service = TestBed.inject(PersonAdapterService);
    apolloController = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    apolloController.verify();
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should create person experience when experiences does not exists', (done) => {
    const personId = 'MrGreen';
    const experienceId = '2';
    const experience = new FormGroup({
      id: new FormControl(experienceId),
      name: new FormControl('Created Experience'),
      description: new FormControl('Created Description'),
      startedFrom: new FormControl('2022-01-01'),
      gainedAt: new FormControl('2022-12-31'),
      skills: new FormControl('skill1,skill2'),
    });

    const createExperience = {
      data: {
        createExperiences: {
          experiences: [
            {
              id: experienceId,
              name: 'Created Experience',
              description: 'Created Description',
              startedFrom: '2022-01-01',
              gainedAt: '2022-12-31',
              skills: [],
            },
          ],
        },
      }, loading: false, error: null
    };
    
    service.submitPersonExperience<CreateExperiencesMutation>(personId, experience, true).subscribe(r => {
      expect(r).toEqual(createExperience);
      done();
    });

    apolloController.expectOne(CreateExperiencesDocument).flush(createExperience);
    apolloController.verify();
  });

  it('should edit person experience when experiences exists', (done) => {
    const personId = 'MrGreen';
    const experienceId = '2';
    const experience = new FormGroup({
      id: new FormControl(experienceId),
      name: new FormControl('Updated Experience'),
      description: new FormControl('Updated Description'),
      startedFrom: new FormControl('2022-01-01'),
      gainedAt: new FormControl('2022-12-31'),
      skills: new FormControl('skill1,skill2'),
    });

    const createExperience = {
      data: {
        createExperiences: {
          experiences: [
            {
              id: experienceId,
              name: 'Updated Experience',
              description: 'Updated Description',
              startedFrom: '2022-01-01',
              gainedAt: '2022-12-31',
              skills: [],
            },
          ],
        },
      }, loading: false, error: null
    };
    
    service.submitPersonExperience<CreateExperiencesMutation>(personId, experience, true).subscribe(r => {
      expect(r).toEqual(createExperience);
      done();
    });

    apolloController.expectOne(CreateExperiencesDocument).flush(createExperience);
    apolloController.verify();
  });
});