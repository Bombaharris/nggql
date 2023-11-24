import { Injectable } from '@angular/core';
import { CreateExperiencesGQL, EditExperiencesDocument, Exact, Experience, InputMaybe, PersonWhere, PersonWithAllTypeFragment, PersonsWithAllGQL, PersonsWithAllQuery } from '../generated/graphql';
import { Apollo } from 'apollo-angular';
import { QLFilterBuilderService } from './ql-filter-builder.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AbstractControl } from '@angular/forms';
import { QueryRef } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class PersonAdapterService {
  experiencesResponse: Experience[] | undefined = undefined;
  personQueryRef: QueryRef<PersonsWithAllQuery, Exact<{ where?: InputMaybe<PersonWhere> | undefined; }>> | undefined = undefined;
  editedPerson!: PersonWithAllTypeFragment | null | undefined;
  isLoading: boolean = false;
  
  constructor(
    private apollo: Apollo, private qlFilterService: QLFilterBuilderService, private notification: NzNotificationService, private ceGQL: CreateExperiencesGQL, private pGQL: PersonsWithAllGQL
  ) {
  }

   setPersonQueryRef(personId: string): void {
    this.personQueryRef = this.pGQL.watch({where:{id: personId}}, {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    });
   }
  
  updatePersonExperiences(personId: string, $event: AbstractControl<any,any>): void {
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
      this.apollo.mutate({mutation: EditExperiencesDocument, variables: {
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
    }}).subscribe(({}) => {
      this.notification.create(
        'success',
        'Success',
        `Experience for ${input.name} was successfully edited.`
      );
    }, (error: any) => {
      this.notification.create(
        'error',
        'Error',
        `Error occured during edition of experience: ${error}`
      )
    });
    return;
    }
    
    this.ceGQL.mutate({
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
    }).subscribe(() => {
      this.notification.create(
        'success',
        'Success',
        `Experience for ${input.name} was successfully added.`
      );
    }, (error: any) => {
      this.notification.create(
        'error',
        'Error',
        `${error}`
      )
    });    
  }
}
