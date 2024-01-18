import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Exact, InputMaybe, ProjectsQuery, ProjectsWithAllDocument, ProjectsWithAllQuery } from '../generated/graphql';
import { ApolloClientService } from './apollo-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsAdapterService extends ApolloClientService {
  projects!: ProjectsWithAllQuery['projects'];
  projectsQueryRef:
    | QueryRef<ProjectsQuery, Exact<{ options?: InputMaybe<ProjectsOptions> | undefined; }>>
    | undefined = undefined;
  editedProject: ProjectPartFragment | null = null;

  constructor(apollo: Apollo) {
    super(apollo);
   
   }

   fetch(): Observable<ProjectsWithAllQuery['projects']> {
      const data = super.fetchValues<ProjectsWithAllQuery>(ProjectsWithAllDocument, 'projects')
      data.subscribe(projects => {this.projects = projects});
      return data;
    }

    
  }
 
