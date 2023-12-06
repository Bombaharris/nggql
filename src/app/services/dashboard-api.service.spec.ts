import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { DeletePersonsDocument, DeletePersonsGQL, DeletePersonsMutation, SkillsDocument, SkillsGQL } from '../generated/graphql';
import { DashboardApiService } from './dashboard-api.service';
import { DocumentNode } from 'graphql';



describe('DashboardApiService', () => {
  let service: DashboardApiService;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({  
      imports: [ApolloTestingModule],
      providers: [DashboardApiService, DeletePersonsGQL, SkillsGQL],
      });
      service = TestBed.inject(DashboardApiService);
      apolloController = TestBed.inject(ApolloTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    apolloController.verify();
  });
  
  it('fetchValuesForSearchBar', (done) => {
    const query: DocumentNode = SkillsDocument;
    const key = 'skills';

    const mockSkills = {
          data: {
          [key]: [
                {
                    "id": "Angular",
                    "name": "Angular",
                },
            ]
        }
      };
     
     service.fetchValuesForSearchBar(query, key).subscribe((result) => {
      expect(result).toEqual(mockSkills.data[key]);
    });
    done();
    TestBed.inject(ApolloTestingController).expectOne(query).flush(mockSkills);
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

