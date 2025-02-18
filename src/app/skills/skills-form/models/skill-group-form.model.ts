import { FormControl } from '@angular/forms';

export type SkillGroupFormModel = {
  name: FormControl;
  parents: FormControl;
  children: FormControl;
};
