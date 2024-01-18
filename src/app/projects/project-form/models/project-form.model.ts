import { FormArray, FormControl, FormGroup } from "@angular/forms"

export type ProjectFormType = FormGroup<{
    projects: FormArray<FormControl>;
  }>
