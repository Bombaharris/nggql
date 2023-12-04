import { Injectable } from '@angular/core';
import { CreateExperiencesDocument, EditExperiencesDocument, Exact, InputMaybe, PersonWhere, PersonsWithAllGQL, PersonsWithAllQuery } from '../generated/graphql';
import { Apollo, MutationResult } from 'apollo-angular';
import { QLFilterBuilderService } from './ql-filter-builder.service';
import { AbstractControl } from '@angular/forms';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core/types';

@Injectable({
  providedIn: 'root'
})
export class PersonAdapterService {
  personQueryRef: QueryRef<PersonsWithAllQuery, Exact<{ where?: InputMaybe<PersonWhere> | undefined; }>> | undefined = undefined;

  constructor(
    private apollo: Apollo, 
    private qlFilterService: QLFilterBuilderService, 
    private pGQL: PersonsWithAllGQL
  ) {
  }

   setPersonQueryRef(personId: string): void {
    this.personQueryRef = this.pGQL.watch({where:{id: personId}}, {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    });
   }

   refetch(personId: string): Promise<ApolloQueryResult<PersonsWithAllQuery>> | undefined {
    return this.personQueryRef?.refetch({where: {id: personId}});
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
}
