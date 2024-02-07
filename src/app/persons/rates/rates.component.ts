import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { CreateRatesMutation, PersonWithAllTypeFragment, UpdateRatesMutation } from 'src/app/generated/graphql';
import { PersonAdapterService } from 'src/app/services/person-adapter.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrl: './rates.component.scss'
})
export class RatesComponent implements OnInit, OnDestroy {
    isLoading: boolean = false;
    editedPerson!: PersonWithAllTypeFragment | null | undefined;
    personId!: string;
    confirmModal: boolean = false;
    selectedRateId: string | undefined; 
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
      this.personAdapterService.personQueryRef?.valueChanges.subscribe(({ data, loading, errors }) => {
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

     get ratesList() {
      return this.editedPerson?.rates;
    }
  
    submitRates($event: AbstractControl<any,any>): void {
      this.isLoading = true;
      if(!this.selectedRateId) {
        this.personAdapterService.submitPersonRates<CreateRatesMutation>(this.personId, $event, true).subscribe(() => {
          
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
      this.selectedRateId = undefined;
      this.personAdapterService.submitPersonRates<UpdateRatesMutation>(this.personId, $event, false).subscribe(() => {
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
  
    removePersonsRate(id: string): void {
      this.personAdapterService.removePersonsRate(id).subscribe(() => {
        this.notification.create(
          'success',
          'Success',
          `Experience was successfully deleted.`
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
    }

    edit(id: string): void {
      this.selectedRateId = this.editedPerson?.rates.find(e => e.id === id)?.id;
    }

    cancelDelete() {
      this.confirmModal = false;
    }
  
    ngOnDestroy(): void {
      this.subscription?.unsubscribe();
    }
  
  }
