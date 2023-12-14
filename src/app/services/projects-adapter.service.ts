import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ProjectsWithAllDocument, ProjectsWithAllQuery } from '../generated/graphql';
import { ApolloClientService } from './apollo-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsAdapterService extends ApolloClientService {
  projects!: ProjectsWithAllQuery['projects'];

  constructor(apollo: Apollo) {
    super(apollo);
   }

   fetch(): Observable<ProjectsWithAllQuery['projects']> {
      const data = super.fetchValues<ProjectsWithAllQuery>(ProjectsWithAllDocument, 'projects')
      data.subscribe(projects => {this.projects = projects});
      return data;
    }
  }
 
