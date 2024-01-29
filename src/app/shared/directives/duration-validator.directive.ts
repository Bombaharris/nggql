import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function durationValidator(regExp: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const incorrect = !regExp.test(control.value);
      return incorrect ? { incorrect: true } : null;
    };
  }