import { Injectable } from '@angular/core';
import { CreateExperiencesDocument, CreateExperiencesGQL, CreateExperiencesMutation, EditExperiencesDocument, EditExperiencesMutation, Exact, Experience, ExperienceDataFragment, InputMaybe, PersonWhere, PersonWithAllTypeFragment, PersonsWithAllGQL, PersonsWithAllQuery } from '../generated/graphql';
import { Apollo, MutationResult } from 'apollo-angular';
import { QLFilterBuilderService } from './ql-filter-builder.service';
import { AbstractControl } from '@angular/forms';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';

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

   createPersonExperience(personId: string, $event: AbstractControl<any,any>): Observable<MutationResult<CreateExperiencesMutation>>  {
    const experience = $event;
      const input = [
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
      
    return this.apollo.mutate({mutation: CreateExperiencesDocument, variables: {input}}) as Observable<MutationResult<CreateExperiencesMutation>>;
   }
  
    updatePersonExperiences(personId: string, $event: AbstractControl<any,any>): Observable<MutationResult<EditExperiencesMutation>> {
      const experience = $event;
      let input = {
        person: {id: personId},
        name: experience.get('name')?.value ?? '',
        description: experience.get('description')?.value ?? '',
        startedFrom: experience.get('startedFrom')?.value ?? '',
        gainedAt: experience.get('gainedAt')?.value ?? '',
        skills: experience.get('skills')!.value ?? ''
      }
      const variables = {
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
    }

      return this.apollo.mutate({mutation: EditExperiencesDocument, variables: variables}) as Observable<MutationResult<EditExperiencesMutation>>;
  }

  // submitPersonExperience<T>(personId: string, $event: AbstractControl<any, any>, isCreate: boolean): Observable<MutationResult<T>> {
  //   const experience = $event;
  //   const input: any = {
  //     person:  {
  //       connect: {
  //         where: {
  //           node: {
  //             id: personId
  //           }
  //         }
  //       }
  //     },
  //     name: experience.get('name')?.value ?? '',
  //     description: experience.get('description')?.value ?? '',
  //     startedFrom: experience.get('startedFrom')?.value ?? '',
  //     gainedAt: experience.get('gainedAt')?.value ?? '',
  //   };
  //   if (!isCreate) {
  //     input.skills = {
  //       disconnect: this.qlFilterService.connectWhere('id_NOT_IN', '') as any,
  //       connect: this.qlFilterService.connectWhere('id', experience.get('skills')?.value ?? '') as any
  //     };
  //   } else {
  //     input.skills = {
  //       connect: this.qlFilterService.connectWhere('id', experience.get('skills')?.value ?? '') as any
  //     };
  //   }
  
  //   const mutationDocument = isCreate ? CreateExperiencesDocument : EditExperiencesDocument;
  //   const variables = isCreate ? { input } : { where:{ id: experience.get('id')?.value }, update: input };
  //   return this.apollo.mutate({ mutation: mutationDocument, variables }) as Observable<MutationResult<T>>;
  // }
}
