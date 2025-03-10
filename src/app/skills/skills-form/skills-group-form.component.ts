import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillGroupFormModel } from './models/skill-group-form.model';
import { SkillsAdapterService } from '../../services/skills-adapter.service';
import { SkillDataDocument, SkillDataQuery } from '../../generated/graphql';
import {
  LabeledValue,
  SkillFormBaseDirective,
} from './skill-form-base.directive';
import { QLFilterBuilderService } from '../../services/ql-filter-builder.service';

@Component({
  selector: 'app-skill-groups-form',
  templateUrl: './skills-group-form.component.html',
})
export class SkillGroupsFormComponent
  extends SkillFormBaseDirective
  implements OnInit
{
  skillForm: FormGroup<SkillGroupFormModel> = new FormGroup({
    name: new FormControl(null, Validators.required),
    parents: new FormControl(),
    children: new FormControl(),
  });
  groups: LabeledValue[] = [];
  skills: LabeledValue[] = [];

  @Input() skillId?: string | null = null;
  private editedParents: any[] = [];
  private editedSkillChildren: any[] = [];
  private editedSkillGroupChildren: any[] = [];

  constructor(
    private skillsAdapterService: SkillsAdapterService,
    private qlFilterService: QLFilterBuilderService,
  ) {
    super();

    this.subscription.add(
      this.skillsAdapterService
        .getAllSkillGroups()
        .valueChanges.subscribe(({ data }) => {
          this.groups = data.skillGroups.map((item) => ({
            value: item.id,
            label: item.name,
          }));
        }),
    );

    this.subscription.add(
      this.skillsAdapterService.skillsQueryRef?.valueChanges.subscribe(
        ({ data }) => {
          this.skills = data.skills.map((item) => ({
            value: item.id,
            label: item.name,
          }));
        },
      ),
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
          groupId: this.skillId,
        },
      })
      .subscribe(({ data }) => {
        const skillGroup = data.skillGroups[0];

        this.editedParents = skillGroup.parents.map((item) => item.name);
        this.editedSkillChildren = skillGroup.childrenSkills
          .map((item) => 'name' in item && item.name)
          .filter(Boolean);
        this.editedSkillGroupChildren = skillGroup.childrenGroups
          .map((item) => 'name' in item && item.name)
          .filter(Boolean);

        const patchedValue = {
          name: skillGroup.name,
          parents: this.editedParents,
          children: [
            ...this.editedSkillChildren,
            ...this.editedSkillGroupChildren,
          ],
        };

        this.skillForm.patchValue(patchedValue);
      });
  }

  onSubmit() {
    const values = this.skillForm.value;

    if (this.skillId) {
      const observable = this.skillsAdapterService.updateGroup(this.skillId, {
        name: values.name,
        // @ts-ignore
        parents: this.qlFilterService.updateArrayFieldQuery(
          this.editedParents,
          values.parents,
          'id',
        ),
        children: {
          // @ts-ignore
          Skill: this.qlFilterService.updateArrayFieldQuery(
            this.editedSkillChildren,
            values.children,
            'id',
          ),
          // @ts-ignore
          SkillGroup: this.qlFilterService.updateArrayFieldQuery(
            this.editedSkillGroupChildren,
            values.children,
            'id',
          ),
        },
      });
      this.submitted.emit(observable);
      return;
    }

    const observable = this.skillsAdapterService.createGroup({
      name: values.name,
      parents: {
        // @ts-ignore
        connect: this.qlFilterService.connectWhere('id', values.parents)
      },
      children: {
        Skill: {
          // @ts-ignore
          connect: this.qlFilterService.connectWhere('id', values.children),
        },
        SkillGroup: {
          // @ts-ignore
          connect: this.qlFilterService.connectWhere('id', values.children)
        }
      }
    });
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
