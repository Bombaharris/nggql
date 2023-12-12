import { TestBed } from '@angular/core/testing';

import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { DocumentNode } from 'graphql';
import { ProjectsDocument, ProjectsQuery } from '../generated/graphql';
import { ProjectsAdapterService } from './projects-adapter.service';

describe('ProjectsAdapterService', () => {
  let service: ProjectsAdapterService;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({  
      imports: [ApolloTestingModule],
      providers: [ProjectsAdapterService],
      });
      service = TestBed.inject(ProjectsAdapterService);
      apolloController = TestBed.inject(ApolloTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    apolloController.verify();
  });
  
  it('fetchValues of projects', (done) => {
    const query: DocumentNode = ProjectsDocument;
    const key = 'projects';

    const mockProjects = {
          data: {
          [key]: [
                {
                    "id": "1",
                    "name": "Frontend",
                },
            ]
        }
      };
     
     service.fetchValues<ProjectsQuery>(query, key).subscribe((result: ProjectsQuery['projects']) => {
      expect(result).toEqual(mockProjects.data[key]);
    });
    done();
    TestBed.inject(ApolloTestingController).expectOne(query).flush(mockProjects);
  });


});

