import { FormControl } from '@angular/forms';

export type ProjectForm = {
  name: FormControl;
  startedFrom: FormControl;
  duration: FormControl;
  skills: FormControl;
  persons: FormControl;
};
