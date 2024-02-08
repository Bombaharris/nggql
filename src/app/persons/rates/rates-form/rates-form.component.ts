import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

export type RateFormType = {
  value: FormControl,
  validFrom: FormControl,
  id: string | undefined
}

@Component({
  selector: 'app-rates-form',
  templateUrl: './rates-form.component.html',
  styleUrls: ['./rates-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatesFormComponent implements OnChanges {
  @Input() rateId: string | undefined;
  @Input() rates: {id: string; value: number; validFrom: Date}[] | undefined;
  @Output() submitted = new EventEmitter<AbstractControl<any,any>>();
  @Output() deleted = new EventEmitter<string>();
  ratesForm: FormGroup<{
    id: FormControl<string>;
    value: FormControl<number>;
    validFrom: FormControl<Date>;
  }>;

  constructor( private fb: NonNullableFormBuilder) {
    this.ratesForm = this.fb.group({
      id: ['', [Validators.required]],
      value: [0, [Validators.required]],
      validFrom: [new Date(), [Validators.required]],
    });
}

 ngOnChanges(changes: SimpleChanges): void {
   if(this.rateId !== undefined) {
    const selectedRate = this.rates?.find(e => e.id === this.rateId);
    this.ratesForm.patchValue({
      id: selectedRate?.id,
      value: selectedRate?.value,
      validFrom: selectedRate?.validFrom
    })
   }
 }

  submitNewRate(rate: AbstractControl<any,any>): void {
    this.submitted.emit(rate);
    this.resetForm();
  }
  
  resetForm(): void {
    this.ratesForm.reset();
  }

}
