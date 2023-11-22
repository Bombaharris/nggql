import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Event } from '@angular/router';
import { Apollo, QueryRef } from 'apollo-angular';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { CreateExperiencesGQL, EditExperiencesDocument, Exact, Experience, ExperiencesByPersonGQL, InputMaybe, PersonWhere, PersonWithAllTypeFragment, PersonsWithAllGQL, PersonsWithAllQuery, SkillsGQL } from 'src/app/generated/graphql';
import { QLFilterBuilderService } from 'src/app/services/ql-filter-builder.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  editedPerson!: PersonWithAllTypeFragment | null | undefined;
  personQueryRef: QueryRef<PersonsWithAllQuery, Exact<{ where?: InputMaybe<PersonWhere> | undefined; }>> | undefined = undefined;
  personId!: string | undefined;
  qlFilterService = new QLFilterBuilderService();
  experiencesResponse: Experience[] | undefined = undefined;
  readonly subscription: Subscription = new Subscription();

 constructor(
    private pGQL: PersonsWithAllGQL, private route: ActivatedRoute, private apollo: Apollo, private ceGQL: CreateExperiencesGQL, private notification: NzNotificationService
    ) { 
      this.subscription.add(
        this.route.params.subscribe(params => {
        this.personId = params['id'];
      }));
      this.personQueryRef = this.pGQL.watch({where:{id: this.personId}}, {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all'
      });
    }

  ngOnInit(): void {
    this.personQueryRef?.valueChanges.subscribe(({ data, loading, errors }) => {
      if(loading) {
        this.isLoading = loading;
      }
      if(errors) {
        errors.map(e => console.error(e));
        this.isLoading = false;
      }
      if(data && data.people) {
        this.editedPerson = data.people.find(p => p.id === this.personId);
        this.isLoading = false;
      }
    })    
  }

  submitExperience($event: AbstractControl<any,any>): void {
    this.isLoading = true;
    const experience = $event;
    let input = {
      person: {id: this.personId},
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
            id: this.personId
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
    this.isLoading = false;
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
                  "id": this.personId
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
    this.isLoading = false;
    
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }


}
