import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { PersonForm } from '../dashboard/person-form/models/person-form.model';
import { CreateExperiencesDocument, CreateExperiencesGQL, CreateExperiencesMutation, DeletePersonsDocument, DeletePersonsMutation, PersonsWithAllGQL, UpdatePeopleDocument, UpdatePeopleMutation } from '../generated/graphql';
import { PersonAdapterService } from './person-adapter.service';


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

  it('should create person when person does not exists', (done) => {
    const personId = 'MrGreen';
    const person: FormGroup<PersonForm> = new FormGroup({
      name: new FormControl("Ralph"),
      surname: new FormControl("Green"),
      birthday: new FormControl("1982-06-01"),
      departments: new FormControl({id: "Frontend", name:"Frontend"}),
      projects: new FormControl({id: "AngularProject", name: "AngularProject", duration: "year", startedFrom:"2020-02-02"}),
      skills: new FormControl({
        id: "Vue",
        name: "Vue"
      }),
      roles: new FormControl({
        id: "Frontend",
        name: "Frontend"
      }),
      seniority: new FormControl(["Vue"]),
      rates: new FormControl({id:"Senior", name:"Senior", value:"100", validFrom:"2022-01-01"})
    });

    const createPerson = {
      data: {
        updatePeople: {
          people: [
            {
              id: personId,
              name: '"Ralph"',
              surname: '"Green"',
              birthday: '1982-06-01',
              departments: [{id: "Frontend", name:"Frontend"}],
              location: {longitude: 0, latitude:0},
              projects: [{id: "AngularProject", name: "AngularProject", duration: "year", startedFrom:"2020-02-02"}],
              roles: [{
                id: "Frontend",
                name: "Frontend"
              }],
              seniority: null,
              rates: [{id:"Senior", name:"Senior", value:100, validFrom:"2022-01-01"}],
              skills: [{
                id: "Vue",
                name: "Vue"
              }],
            },
          ],
        },
      }, loading: false, error: null,
    };
    
    service.submitPerson<UpdatePeopleMutation>(person, personId).subscribe(r => {
      expect(r).toEqual(createPerson);
      done();
    });

    apolloController.expectOne(UpdatePeopleDocument).flush(createPerson);
    apolloController.verify();
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
              person: {name: 'MrGreen'}
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
              person: {"name": "MrGreen"}
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

  it('should remove person', (done) => {
    const personId = 'MrGreen';
    const mockMutationResult = {
      data: {
        deletePeople:{
          nodesDeleted: 1
        }
      },
    };
      service.removePerson<DeletePersonsMutation>(personId, DeletePersonsDocument).subscribe(r => {
        expect(r).toBeTruthy();
      });
      
      done();
      TestBed.inject(ApolloTestingController).expectOne(DeletePersonsDocument).flush(mockMutationResult);

  });
});