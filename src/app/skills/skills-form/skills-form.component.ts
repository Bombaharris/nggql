import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillForm } from './models/skill-form.model';
import { SkillsAdapterService } from '../../services/skills-adapter.service';
import { SkillDataDocument, SkillDataQuery } from '../../generated/graphql';
import {
  LabeledValue,
  SkillFormBaseDirective,
} from './skill-form-base.directive';
import { EMPTY, merge } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
})
export class SkillsFormComponent
  extends SkillFormBaseDirective
  implements OnInit
{
  skillForm: FormGroup<SkillForm> = new FormGroup({
    name: new FormControl(null, Validators.required),
    groups: new FormControl(),
  });
  groups: LabeledValue[] = [];

  @Input() skillId?: string | null = null;
  private editedGroups: any[] = [];

  constructor(private skillsAdapterService: SkillsAdapterService) {
    super();

    this.subscription.add(
      this.skillsAdapterService
        .getLowestSkillGroups()
        .valueChanges.subscribe(({ data }) => {
          this.groups = data.skillGroups.map((item) => ({
            value: item.id,
            label: item.name,
          }));
        }),
    );
  }

  ngOnInit() {
    if (!this.skillId) {
      return;
    }

    this.skillsAdapterService._apollo
      .query<SkillDataQuery>({
        query: SkillDataDocument,
        variables: {
          skillId: this.skillId,
        },
      })
      .subscribe(({ data }) => {
        const skill = data.skills[0];
        this.editedGroups = skill.groups.map((item) => item.name);

        const valuePatch = {
          name: skill.name,
          groups: this.editedGroups,
        };

        this.skillForm.patchValue(valuePatch);
      });
  }

  onSubmit() {
    const values = this.skillForm.value;

    if (this.skillId) {
      const observable = merge(
        this.skillsAdapterService.updateSkill(this.skillId, {
          name: values.name,
        }),
        this.skillsAdapterService.updateAssignmentToParents(
          'Skill',
          this.skillId,
          this.editedGroups,
          values.groups,
        ),
      );
      this.submitted.emit(observable);
      return;
    }

    const observable = merge(
      this.skillsAdapterService.createSkill(values.name),
      this.skillsAdapterService.createSkill(values.name).pipe(
        mergeMap(({ data }) => {
          const id = data?.createSkills.skills[0].id;

          if (id) {
            return this.skillsAdapterService.updateAssignmentToParents(
              'Skill',
              id,
              [],
              values.groups,
            );
          }

          return EMPTY;
        }),
      ),
    );

    this.submitted.emit(observable);
  }

  cancel(): void {
    this.resetForm();
    this.canceled.emit();
  }

  resetForm(): void {
    this.skillForm.reset();
    this.skillId = null;
  }
}
