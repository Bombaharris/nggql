import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { CreateExperiencesMutation, EditExperiencesMutation, PersonWithAllTypeFragment } from 'src/app/generated/graphql';
import { PersonAdapterService } from 'src/app/services/person-adapter.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  editedPerson!: PersonWithAllTypeFragment | null | undefined;
  personId!: string;
  readonly subscription: Subscription = new Subscription();

 constructor(
    private personAdapterService: PersonAdapterService, 
    private route: ActivatedRoute,
    private notification: NzNotificationService
    ) { 
      this.subscription.add(
        this.route.params.subscribe(params => {
        this.personId = params['id'];
      }));
      this.personAdapterService.setPersonQueryRef(this.personId);
    }

  ngOnInit(): void {
    this.personAdapterService.personsQueryRef?.valueChanges.subscribe(({ data, loading, errors }) => {
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
    const experienceExists = $event.get("id")?.value;
    if(!experienceExists) {
      this.personAdapterService.submitPersonExperience<CreateExperiencesMutation>(this.personId, $event, true).subscribe(() => {
        
      this.notification.create(
        'success',
        'Success',
        `Experience for ${this.editedPerson?.name} was successfully created.`
        );
        this.personAdapterService?.refetch(this.personId)?.then(res => {
          this.editedPerson = res.data.people[0];
        });
      }, (error: any) => {
        this.notification.create(
          'error',
          'Error',
          `Error occured during creation of experience: ${error}`
        )
      });
     
      return;
    }
    this.personAdapterService.submitPersonExperience<EditExperiencesMutation>(this.personId, $event, false).subscribe(() => {
      this.notification.create(
        'success',
        'Success',
        `Experience for ${this.editedPerson?.name} was successfully changed.`
      );
      this.personAdapterService?.refetch(this.personId)?.then(res => {
        this.editedPerson = res.data.people[0];
      });
    }, (error: any) => {
      this.notification.create(
        'error',
        'Error',
        `Error occured during edition of experience: ${error}`
      )
    });
   
    this.isLoading = false;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
