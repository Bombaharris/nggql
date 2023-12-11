import { TestBed } from '@angular/core/testing';

import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { DocumentNode } from 'graphql';
import { RolesDocument, RolesQuery } from '../generated/graphql';
import { RolesAdapterService } from './roles-adapter.service';

describe('RolesAdapterService', () => {
  let service: RolesAdapterService;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({  
      imports: [ApolloTestingModule],
      providers: [RolesAdapterService],
      });
      service = TestBed.inject(RolesAdapterService);
      apolloController = TestBed.inject(ApolloTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    apolloController.verify();
  });
  
  it('fetchValues of roles', (done) => {
    const query: DocumentNode = RolesDocument;
    const key = 'roles';

    const mockRoles = {
          data: {
          [key]: [
                {
                    "id": "1",
                    "name": "Frontend",
                },
            ]
        }
      };
     
      service.fetchValues<RolesQuery>(query, key).subscribe((result: RolesQuery['roles']) => {
      expect(result).toEqual(mockRoles.data[key]);
    });
    done();
    TestBed.inject(ApolloTestingController).expectOne(query).flush(mockRoles);
  });


});


