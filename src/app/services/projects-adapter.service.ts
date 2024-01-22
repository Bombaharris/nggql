import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Apollo, MutationResult, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  CreateProjectsDocument,
  DeleteProjectsDocument,
  DeleteProjectsMutation,
  Exact,
  ProjectPartFragment,
  ProjectsWithAllDocument,
  ProjectsWithAllGQL,
  ProjectsWithAllQuery,
  UpdateProjectsDocument,
} from '../generated/graphql';
import { ApolloClientService } from './apollo-client.service';
import { QLFilterBuilderService } from './ql-filter-builder.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsAdapterService extends ApolloClientService {
  projects!: ProjectsWithAllQuery['projects'];
  projectsQueryRef:
    | QueryRef<ProjectsWithAllQuery, Exact<{ [key: string]: never }>>
    | undefined = undefined;
  editedProject: ProjectPartFragment | null = null;

  constructor(
    apollo: Apollo,
    private qlFilterService: QLFilterBuilderService,
    private pGQL: ProjectsWithAllGQL,
  ) {
    super(apollo);
    this.projectsQueryRef = this.pGQL.watch(
      {},
      {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',
      },
    );
  }

  fetch(): Observable<ProjectsWithAllQuery['projects']> {
    const data = super.fetchValues<ProjectsWithAllQuery>(
      ProjectsWithAllDocument,
      'projects',
    );
    data.subscribe((projects) => {
      this.projects = projects;
    });
    return data;
  }

  setEditedProject(project: ProjectPartFragment | null): void {
    this.editedProject = project;
  }

  submitProject<T>(
    $event: AbstractControl<any, any>,
    projectId?: string,
  ): Observable<MutationResult<T>> {
    const project = $event;
    const input: any = {
      name: project.get('name')?.value,
      startedFrom: project.get('startedFrom')?.value,
      duration: project.get('duration')?.value,
      skills: {
        connect: this.qlFilterService.connectWhere(
          'id',
          project.get('skills')?.value,
        ),
      },
      persons: {
        connect: this.qlFilterService.connectWhere(
          'id',
          project.get('persons')?.value,
        ),
      },
    };

    const mutation = !projectId
      ? CreateProjectsDocument
      : UpdateProjectsDocument;
    const variables = !projectId
      ? { input }
      : { where: { id: projectId }, update: input };
    if (!projectId) {
      // Create a new person
      return super._apollo.mutate<T>({
        mutation,
        variables,
      });
    } else {
      input.skills.disconnect = this.qlFilterService.connectWhere(
        'id_NOT_IN',
        '',
      );
      input.persons.disconnect = this.qlFilterService.connectWhere(
        'id_NOT_IN',
        '',
      );
      // Update an existing project
      return super._apollo.mutate<T>({
        mutation,
        variables,
      });
    }
  }

  removeProject(
    id: string,
  ): Observable<MutationResult<DeleteProjectsMutation>> {
    return super._apollo.mutate<DeleteProjectsMutation>({
      mutation: DeleteProjectsDocument,
      variables: { where: { id: id } },
    });
  }
}
