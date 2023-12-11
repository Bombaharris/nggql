import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { DeletePersonsDocument, DeletePersonsGQL, DeletePersonsMutation, SkillsDocument, SkillsGQL, SkillsQuery } from '../generated/graphql';
import { ApolloClientService } from './apollo-client.service';
import { DocumentNode } from 'graphql';



describe('ApolloClientService', () => {
  let service: ApolloClientService;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({  
      imports: [ApolloTestingModule],
      providers: [ApolloClientService, DeletePersonsGQL, SkillsGQL],
      });
      service = TestBed.inject(ApolloClientService);
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
     
     service.fetchValues<SkillsQuery>(query, key).subscribe((result: SkillsQuery['skills']) => {
      expect(result).toEqual(mockSkills.data[key]);
    });
    done();
    TestBed.inject(ApolloTestingController).expectOne(query).flush(mockSkills);
  });


});

