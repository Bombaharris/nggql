import { TestBed } from '@angular/core/testing';

import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { DocumentNode } from 'graphql';
import { SkillsDocument, SkillsQuery } from '../generated/graphql';
import { SkillsAdapterService } from './skills-adapter.service';

describe('RolesAdapterService', () => {
  let service: SkillsAdapterService;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({  
      imports: [ApolloTestingModule],
      providers: [SkillsAdapterService],
      });
      service = TestBed.inject(SkillsAdapterService);
      apolloController = TestBed.inject(ApolloTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    apolloController.verify();
  });
  
  it('fetchValues of skills', (done) => {
    const query: DocumentNode = SkillsDocument;
    const key = 'skills';

    const mockSkills = {
          data: {
          [key]: [
                {
                    "id": "1",
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
