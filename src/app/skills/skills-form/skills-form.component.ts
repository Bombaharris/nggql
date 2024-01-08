import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillsQuery } from 'src/app/generated/graphql';
import { SkillForm } from './models/skill-form.model';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrl: './skills-form.component.scss',
})
export class SkillsFormComponent {
  skill: SkillsQuery['skills'] | null = null;
  @Output() submitted: EventEmitter<FormGroup<SkillForm>> = new EventEmitter();
  @Output() canceled = new EventEmitter();
  skillForm: FormGroup<SkillForm> = new FormGroup({
    name: new FormControl(null, Validators.required),
  });

  constructor() {}

  cancel(): void {
    this.resetForm();
    this.canceled.emit();
  }

  resetForm(): void {
    this.skillForm.reset();
    this.skill = null;
  }

  submit(): void {
    this.submitted.emit(this.skillForm);
    this.resetForm();
  }
}
