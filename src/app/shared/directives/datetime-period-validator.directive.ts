import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
export function dateTimePeriodValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === null || control.value === undefined || control.value === '') {
      return control.value === '' ? { incorrect: true } : null;
    }
    const correct = /^P(?:([0-9]+Y)?([0-9]+M)?([0-9]+W)?([0-9]+D)?)(?:T([0-9]+H)?([0-9]+M)?([0-9]+(\.?[0-9]+)?S)?)?$/.test(control.value);
    return correct ? null : { incorrect: true };
  };
}