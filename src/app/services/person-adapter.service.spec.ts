import { TestBed } from '@angular/core/testing';
import { PersonAdapterService } from './person-adapter.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateExperiencesGQL, EditExperiencesDocument, PersonsWithAllGQL } from '../generated/graphql';

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

  it('should update person experiences when experience exists', (done) => {
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

    const updateExperiences = {
      data: {
        updateExperiences: {
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
    
    service.updatePersonExperiences(personId, experience).subscribe(r => {
      expect(r).toEqual(updateExperiences);
      done();
    });

    apolloController.expectOne(EditExperiencesDocument).flush(updateExperiences);
    apolloController.verify();
  });
});