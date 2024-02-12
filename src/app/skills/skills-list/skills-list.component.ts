import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import {
  CreateSkillsGQL,
  SkillsWithLimitQuery,
} from 'src/app/generated/graphql';
import { SkillsAdapterService } from 'src/app/services/skills-adapter.service';
import { SkillForm } from '../skills-form/models/skill-form.model';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrl: './skills-list.component.scss',
})
export class SkillsListComponent implements OnInit {
  pageIndex = 0;
  pageSize = 10;
  total = 0;
  feed!: SkillsWithLimitQuery['skills'];
  isFormVisible = false;
  isLoading = false;
  currentForm: 'skill' | null = null;
  skills!: SkillsWithLimitQuery['skills'];
  isConfirmModal: boolean = false;
  readonly subscription: Subscription = new Subscription();

  constructor(
    private skillsAdapterService: SkillsAdapterService,
    private notification: NzNotificationService,
  ) {
    this.isLoading = true;
    this.subscription.add(
      this.skillsAdapterService?.skillsQueryRef?.valueChanges.subscribe(
        ({ data, loading, errors }) => {
          if (loading) {
            this.isLoading = loading;
          }
          if (errors) {
            errors.map((e) => console.error(e));
            this.isLoading = false;
          }
          if (data && data.skills) {
            this.feed = data.skills;
            this.total = data.skillsAggregate.count;
            this.isLoading = false;
          }
        },
      ),
    );
  }

  ngOnInit(): void {
    if (!this.skills) {
      this.skillsAdapterService.skillsQueryRef?.refetch();
    }
  }

  async fetchMore(reset: boolean = false) {
    this.isLoading = true;
    if (reset) {
      this.pageIndex = 0;
    }
    await this.skillsAdapterService.skillsQueryRef
      ?.fetchMore({
        variables: {
          options: {
            limit: this.pageSize,
            offset: this.pageIndex * this.pageSize - this.pageSize,
          },
        },
      })
      .then((result) => {
        this.feed = result.data.skills;
      });
    this.isLoading = false;
  }

  openForm(formType: 'skill' | null): void {
    this.isFormVisible = true;
    this.currentForm = formType;
  }

  clearForm(): void {
    this.isFormVisible = false;
    this.currentForm = null;
  }

  closeForm(skillForm?: FormGroup<SkillForm>): void {
    const name = skillForm?.get('name')?.value;
    if (skillForm && name) {
    this.skillsAdapterService.checkSkillExists(name).subscribe((skillExists) => {
        if (skillExists && skillExists.length > 0) {
          this.notification.create(
            'error',
            'Error',
            `Skill ${name} already exists`,
          );
          return;
        } else {
          this.skillsAdapterService
            .submitSkill<CreateSkillsGQL>(name)
            .subscribe(
              ({ loading, errors }) => {
                if (loading) {
                  this.isLoading = loading;
                }
                if (errors) {
                  errors.map((error) => {
                    console.error(error.message);
                  });
                }
                this.notification.create(
                  'success',
                  'Success',
                  `Skill ${name} was successfully created.`,
                );
                this.skillsAdapterService.skillsQueryRef?.refetch();
              },
              (error: any) => {
                this.notification.create('error', 'Error', `${error}`);
              },
            );
        }})
        }

    this.clearForm();
  }
}
