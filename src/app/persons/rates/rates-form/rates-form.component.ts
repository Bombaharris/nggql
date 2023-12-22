import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QLFilterBuilderService } from 'src/app/services/ql-filter-builder.service';
import { SkillsAdapterService } from 'src/app/services/skills-adapter.service';
import { Person, Rate, SkillsQuery } from '../../../generated/graphql';

type RateFormType = FormGroup<{
  rates: FormArray<FormControl>;
}>

@Component({
  selector: 'app-rates-form',
  templateUrl: './rates-form.component.html',
  styleUrls: ['./rates-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatesFormComponent implements OnInit, OnChanges {
  @Input() person!: Person | any;
  @Output() submitted = new EventEmitter<AbstractControl<any,any>>();
  @Output() deleted = new EventEmitter<string>();
  @Output() canceled = new EventEmitter();
  isLoading: boolean = false;
  confirmModal: boolean = false;
  qlFilterService = new QLFilterBuilderService();
  ratesForm: RateFormType = this.fb.group({
    rates: this.fb.array([])
  });
  ratesResponse: Rate[] | undefined = undefined;

  constructor( private fb: FormBuilder) {
}
  ngOnInit(): void {
    if(!this.person) return;
    this.ratesForm.patchValue({rates: this.person.rates});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes || !changes.person || !changes.person.currentValue) return;
    this.rebuildFormGroup(changes.person.currentValue.experiences);
  }

  private rebuildFormGroup(rates: Rate[]): void {
    const ratesFormArray = this.ratesForm.get('rates') as FormArray;
    ratesFormArray.clear();
    rates.forEach((rate) => {      
      const newRate = this.fb.group({
       ...rate,
      });
      //check if experience already exists, if not omit it
      if(ratesFormArray.controls.find(w => w.get('id')?.value === newRate.get('id')?.value)) return;
      ratesFormArray.push(newRate);
    });
  }

  get ratesList(): FormArray {
    return this.ratesForm.get('rates') as FormArray;
  }

  newRatesGroup(): FormGroup {
    return this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      startedFrom: ["", [Validators.required]],
      gainedAt: ["", [Validators.required]],
       skills: [],
    })
  }

  addNewForm() {
    if(!this.ratesList) return;
    this.ratesList.push(this.newRatesGroup());
  }

  submitNewRate(rate: AbstractControl<any,any>): void {
    this.submitted.emit(rate);
  }

  deleteRate(idx: number, rate: AbstractControl<Rate,any>) {
    const id = rate.get("id")?.value as string;
    this.ratesList.removeAt(idx);
    //if no Id was found (empty form) just remove it from layout
    if(!id) return;
    this.deleted.emit(id);

    }

  cancelDelete() {
    this.confirmModal = false;
  }

}
