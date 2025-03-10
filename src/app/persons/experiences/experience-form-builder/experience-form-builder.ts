import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ExperienceType } from '../../../generated/graphql';

type ExperienceFormType = FormGroup<{
  experiences: FormArray;
}>;

const formTypeToBuildMethods = {
  [ExperienceType.Default]: [
    'buildCommon',
    'buildRole',
    'buildInstitution',
    'buildDescription',
  ],
  [ExperienceType.Education]: [
    'buildCommon',
    'buildName',
    'buildDescription',
    'buildInstitution',
  ],
  [ExperienceType.Hobby]: ['buildName'],
  [ExperienceType.Project]: [
    'buildCommon',
    'buildName',
    'buildDescription',
    'buildRole',
  ],
  [ExperienceType.Course]: [
    'buildCommon',
    'buildName',
    'buildDescription',
    'buildInstitution',
  ],
} as const;

@Injectable()
export class ExperienceFormBuilder {
  form: ExperienceFormType = this.fb.group({
    experiences: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  get experiencesField(): FormArray {
    return this.form.get('experiences') as FormArray;
  }

  get lastGroup(): FormGroup {
    return this.experiencesField.at(-1) as FormGroup;
  }

  isVisible(name: string) {
    return !!this.lastGroup.get(name);
  }

  add() {
    this.experiencesField.push(
      this.fb.group({
        id: new FormControl(''),
      }),
    );
    return this;
  }

  buildCommon() {
    this.lastGroup.addControl('gainedAt', new FormControl(''));
    this.lastGroup.addControl('startedFrom', new FormControl(''));
    this.lastGroup.addControl('skills', new FormControl([]));
    return this;
  }

  buildName() {
    this.lastGroup.addControl('name', new FormControl(''));
    return this;
  }

  buildRole() {
    this.lastGroup.addControl('role', new FormControl(''));
    return this;
  }

  buildInstitution() {
    this.lastGroup.addControl('institution', new FormControl(''));
    return this;
  }

  buildDescription() {
    this.lastGroup.addControl('description', new FormControl(''));
    return this;
  }

  buildByType(formType: ExperienceType) {
    const methods = formTypeToBuildMethods[formType];

    for (const method of methods) {
      this[method]();
    }
  }
}
