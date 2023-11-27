import { Injectable } from '@angular/core';
import { CreateExperiencesGQL, EditExperiencesDocument, Exact, Experience, InputMaybe, PersonWhere, PersonWithAllTypeFragment, PersonsWithAllGQL, PersonsWithAllQuery } from '../generated/graphql';
import { Apollo, MutationResult } from 'apollo-angular';
import { QLFilterBuilderService } from './ql-filter-builder.service';
import { AbstractControl } from '@angular/forms';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonAdapterService {
  experiencesResponse: Experience[] | undefined = undefined;
  personQueryRef: QueryRef<PersonsWithAllQuery, Exact<{ where?: InputMaybe<PersonWhere> | undefined; }>> | undefined = undefined;
  editedPerson!: PersonWithAllTypeFragment | null | undefined;
  
  constructor(
    private apollo: Apollo, 
    private qlFilterService: QLFilterBuilderService, 
    private ceGQL: CreateExperiencesGQL, 
    private pGQL: PersonsWithAllGQL
  ) {
  }

   setPersonQueryRef(personId: string): void {
    this.personQueryRef = this.pGQL.watch({where:{id: personId}}, {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    });
   }
  
  updatePersonExperiences(personId: string, $event: AbstractControl<any,any>): Observable<MutationResult<unknown>> {
    const experience = $event;
    let input = {
      person: {id: personId},
      name: experience.get('name')?.value ?? '',
      description: experience.get('description')?.value ?? '',
      startedFrom: experience.get('startedFrom')?.value ?? '',
      gainedAt: experience.get('gainedAt')?.value ?? '',
      skills: experience.get('skills')!.value ?? ''
    }
    const experienceExists = this.experiencesResponse?.find(e => e.id === experience.get("id")?.value);
    if(experienceExists) {
      return this.apollo.mutate({mutation: EditExperiencesDocument, variables: {
        where: {
          person: {
            id: personId
          },
        id: experience.get("id")!.value
      },
      update: {
        name: input.name,
        description: input.description,
        startedFrom: input.startedFrom,
        gainedAt: input.gainedAt,
        skills: [{
          disconnect: this.qlFilterService.connectWhere('id_NOT_IN', '') as any,
          connect: this.qlFilterService.connectWhere('id', input.skills ?? '') as any
        }],
      }
    }})
    }
    
    return this.ceGQL.mutate({
      input: [
        {
          name: experience.get('name')?.value ?? '',
          description: experience.get('description')?.value ?? '',
          startedFrom: experience.get('startedFrom')?.value ?? '',
          gainedAt: experience.get('gainedAt')?.value ?? '',
          skills: {
            connect: this.qlFilterService.connectWhere('id', experience.get('skills')?.value ?? '') as any
          },
          person: {
            "connect": {
              "where": {
                "node": {
                  "id": personId
                }
              }
            }
          },
        }
      ]
    })
  }
}
