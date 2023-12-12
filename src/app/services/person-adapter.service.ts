import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { Apollo, MutationResult, QueryRef } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { PersonForm } from '../dashboard/person-form/models/person-form.model';
import { CreateExperiencesDocument, CreatePeopleDocument, DeleteExperiencesDocument, DeleteExperiencesMutation, EditExperiencesDocument, Exact, InputMaybe, PersonWhere, PersonWithAllTypeFragment, PersonsWithAllGQL, PersonsWithAllQuery, UpdatePeopleDocument } from '../generated/graphql';
import { QLFilterBuilderService } from './ql-filter-builder.service';

@Injectable({
  providedIn: 'root'
})
export class PersonAdapterService {
  personsQueryRef: QueryRef<PersonsWithAllQuery, Exact<{ where?: InputMaybe<PersonWhere> | undefined; }>> | undefined = undefined;
  editedPerson: PersonWithAllTypeFragment | null = null;

  constructor(
    private apollo: Apollo, 
    private qlFilterService: QLFilterBuilderService, 
    private pGQL: PersonsWithAllGQL
  ) {
    this.personsQueryRef = this.pGQL.watch({}, {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    });
  }
  
  setPersonQueryRef(personId: string): void {
    this.personsQueryRef = this.pGQL.watch({where:{id: personId}}, {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    });
  }
  
  refetch(personId: string): Promise<ApolloQueryResult<PersonsWithAllQuery>> | undefined {
    return this.personsQueryRef?.refetch({where: {id: personId}});
  }
  
  setEditedPerson(person: PersonWithAllTypeFragment | null): void {
    this.editedPerson = person;
  }

  submitPerson<T>(
    personForm: FormGroup<PersonForm>,
    personId?: string,
  ): Observable<MutationResult<T>> {
    const input: any = {
      name: personForm.get('name')?.value,
      surname: personForm.get('surname')?.value,
      birthday: personForm.get('birthday')?.value,
      seniority: personForm.get('seniority')?.value,
      skills: {
        connect: this.qlFilterService.connectWhere('id', personForm.get('skills')?.value),
      },
      projects: {
        connect: this.qlFilterService.connectWhere('id', personForm.get('projects')?.value),
      },
      departments: {
        connect: this.qlFilterService.connectWhere('id', personForm.get('departments')?.value),
      },
      roles: {
        connect: this.qlFilterService.connectWhere('id', personForm.get('roles')?.value),
      },
    };
    
    const mutation = !personId ? CreatePeopleDocument : UpdatePeopleDocument;
    const variables = !personId ? { input } : { where: { id: personId }, update: input };
    if (!personId) {
      // Create a new person
      return this.apollo.mutate<T>({
        mutation,
        variables
      });
    } else {
      input.skills.disconnect = this.qlFilterService.connectWhere('id_NOT_IN', '');
      input.projects.disconnect = this.qlFilterService.connectWhere('id_NOT_IN', '');
      input.departments.disconnect = this.qlFilterService.connectWhere('id_NOT_IN', '');
      input.roles.disconnect = this.qlFilterService.connectWhere('id_NOT_IN', '');
      // Update an existing person
      return this.apollo.mutate<T>({
        mutation,
        variables
      });
    }
  }

  removePerson<T>(id: string, document: DocumentNode): Observable<MutationResult<T>> {
    return this.apollo.mutate<T>({mutation: document, context:{where: {id}}});
   }

  submitPersonExperience<T>(personId: string, $event: AbstractControl<any, any>, isCreate: boolean): Observable<MutationResult<T>> {
    const experience = $event;
    const input: any = {
      person:  {
        connect: {
          where: {
            node: {
              id: personId
            }
          }
        }
      },
      name: experience.get('name')?.value ?? '',
      description: experience.get('description')?.value ?? '',
      startedFrom: experience.get('startedFrom')?.value ?? '',
      gainedAt: experience.get('gainedAt')?.value ?? '',
    };
    if (!isCreate) {
      input.skills = {
        disconnect: this.qlFilterService.connectWhere('id_NOT_IN', '') as any,
        connect: this.qlFilterService.connectWhere('id', experience.get('skills')?.value ?? '') as any
      };
    } else {
      input.skills = {
        connect: this.qlFilterService.connectWhere('id', experience.get('skills')?.value ?? '') as any
      };
    }
  
    const mutationDocument = isCreate ? CreateExperiencesDocument : EditExperiencesDocument;
    const variables = isCreate ? { input } : { where:{ id: experience.get('id')?.value }, update: input };
    return this.apollo.mutate({ mutation: mutationDocument, variables }) as Observable<MutationResult<T>>;
  }

  removePersonsExperience(id: string): Observable<MutationResult<DeleteExperiencesMutation>> {
    return this.apollo.mutate<DeleteExperiencesMutation>({mutation: DeleteExperiencesDocument, variables:{where: {id: id}}});
  }
}
