import { FormControl } from '@angular/forms';

export type PersonForm = {
  name: FormControl;
  surname: FormControl;
  birthday: FormControl;
  bio: FormControl;
  departments: FormControl;
  projects: FormControl;
  skills: FormControl;
  roles: FormControl;
  seniority: FormControl;
  rates: FormControl;
};
