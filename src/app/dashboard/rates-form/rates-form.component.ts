import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { QueryRef, Apollo } from 'apollo-angular';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {  Subscription } from 'rxjs';
import { CreateRatesGQL, DeleteRatesDocument, Exact, InputMaybe, Person, Rate, RateWhere, RatesByPersonDocument, RatesByPersonGQL, RatesByPersonQuery, SkillsGQL, UpdateRatesDocument } from 'src/app/generated/graphql';
import { QLFilterBuilderService } from 'src/app/services/ql-filter-builder.service';

@Component({
  selector: 'app-rates-form',
  templateUrl: './rates-form.component.html',
  styleUrls: ['./rates-form.component.scss']
})
export class RatesFormComponent implements OnInit {
  @Input() person!: Person | any;
  ratesResponse: Rate[] | undefined = undefined;
  @Output() submitted = new EventEmitter();
  @Output() canceled = new EventEmitter();
  qlFilterService = new QLFilterBuilderService();
  ratesForm: FormGroup<{
    rates: FormArray<FormControl>;
  }> = this.fb.group({
    rates: this.fb.array([])
  });
  isLoading: boolean = false;
  queryRef: QueryRef<RatesByPersonQuery, Exact<{ where?: InputMaybe<RateWhere> | undefined; }>> | undefined = undefined;
  readonly subscription: Subscription = new Subscription();

  constructor(private apollo: Apollo, private sGQL: SkillsGQL, private ceGQL: CreateRatesGQL, private rGQL: RatesByPersonGQL, private notification: NzNotificationService, private fb: FormBuilder) {
  
  }

  ngOnInit(): void {
    this.apollo.query<{rates: Rate[]}>({query: RatesByPersonDocument, variables:{where: {person: {id: this.person.id}}}})
    .subscribe(({data}) => {
      this.ratesResponse = data.rates;
      this.setRates(data.rates);
      });
    this.queryRef = this.rGQL.watch({where: {person:{id: this.person.id}}}, {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    });
    this.subscription.add(
      this.queryRef.valueChanges.subscribe(({ data, loading, errors }) => {
        if(loading) {
          this.isLoading = loading;
        }
        if(errors) {
          errors.map(e => console.error(e));
          this.isLoading = false;
        }
        if(data && data.rates) {
          this.ratesForm.patchValue({rates: data.rates});
          this.isLoading = false;
        }
      })
    );

  }

  setRates(rates: Rate[]): void {
    const rateFormArray = this.ratesForm.get('rates') as FormArray;
    rates.forEach((rate) => {      
      const newRate = this.fb.group({
       ...rate
      });
      rateFormArray.push(newRate);
    });
  }

  get rates(): FormArray {
    return this.ratesForm.get('rates') as FormArray;
  }

  newRateGroup(): FormGroup {
    return this.fb.group({
      value: ["", [Validators.required]],
      validFrom: ["", [Validators.required]],
    })
  }

  addNewForm(){
    if(!this.rates) return;
    this.rates.push(this.newRateGroup());
  }

  deleteRate(idx: number, rate: AbstractControl<Rate,any>) {
    const id = rate.get("id")?.value;
    this.rates.removeAt(idx);
    this.apollo.mutate({mutation: DeleteRatesDocument, variables:{where: {id: id}}}).subscribe(() => {
      this.notification.create(
        'success',
        'Success',
        `Rate was successfully deleted.`
        );
        this.queryRef?.refetch();
      }, (error: any) => {
        this.notification.create(
          'error',
          'Error',
          `Error occured during edition of rate: ${error}`
          )
        });
    }

  submitRate(rate: AbstractControl<Rate,Rate>){
    let input = {
      person: {id:this.person.id},
      value: rate.get('value')?.value ?? '',
      validFrom: rate.get('validFrom')?.value ?? '',
    }
    const rateExists = this.ratesResponse?.find(e => e.id === rate.get("id")?.value);
    if(rateExists) {
      this.apollo.mutate({mutation: UpdateRatesDocument, variables: {
        where: {
          person: {
            id: this.person.id
          },
        id: rate.get("id")!.value
      },
      update: {
        value: input.value,
        validFrom: input.validFrom,
      }
    }}).subscribe(() => {
      this.queryRef?.refetch();
      this.notification.create(
        'success',
        'Success',
        `Rate for ${input.value} was successfully edited.`
      );
    }, (error: any) => {
      this.notification.create(
        'error',
        'Error',
        `Error occured during edition of rate: ${error}`
      )
    });
    return;
    }

    this.ceGQL.mutate({
      input: [
        {
          value: rate.get('value')?.value ?? 0,
          validFrom: rate.get('validFrom')?.value ?? '',
          person: {
            "connect": {
              "where": {
                "node": {
                  "id": this.person.id
                }
              }
            }
          },
        }
      ]
    }).subscribe(() => {
      this.queryRef?.refetch();
      this.notification.create(
        'success',
        'Success',
        `Rate was successfully added.`
      );
    }, (error: any) => {
      this.notification.create(
        'error',
        'Error',
        `${error}`
      )
    });

  }
    ngOnDestroy():void {
      this.subscription.unsubscribe();
    }

}
