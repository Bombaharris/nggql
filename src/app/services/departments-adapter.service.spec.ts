import { TestBed } from '@angular/core/testing';

import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { DocumentNode } from 'graphql';
import { DepartmentsDocument, DepartmentsQuery } from '../generated/graphql';
import { DepartmentsAdapterService } from './departments-adapter.service';

describe('DepartmentsAdapterService', () => {
  let service: DepartmentsAdapterService;
  let apolloController: ApolloTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({  
      imports: [ApolloTestingModule],
      providers: [DepartmentsAdapterService],
      })
      .compileComponents();
      service = TestBed.inject(DepartmentsAdapterService);
      apolloController = TestBed.inject(ApolloTestingController);
      
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    apolloController.verify();
  });
  
  it('fetchValues of departments', (done) => {
    const query: DocumentNode = DepartmentsDocument;
    const key = 'departments';

    const mockDepartments = {
          data: {
          [key]: [
                {
                    "id": "Frontend",
                    "name": "Frontend",
                    "manager": {
                      "id": "MrGreen",
                    }
                },
            ]
        }
      };
     
     service.fetchValues<DepartmentsQuery>(query, key).subscribe((result: DepartmentsQuery['departments']) => {
      expect(result).toEqual(mockDepartments.data[key]);
    });
    done();
    TestBed.inject(ApolloTestingController).expectOne(query).flush(mockDepartments);
  });




});

