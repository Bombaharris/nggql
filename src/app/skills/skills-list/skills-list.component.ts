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

interface FeedItem {
  id: string;
  name: string;
  level: number;
  childrenCount: number;
  type?: string;
}

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrl: './skills-list.component.scss',
})
export class SkillsListComponent implements OnInit {
  feed: FeedItem[] = [];
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
      this.skillsAdapterService.skillsTreeQueryRef.valueChanges.subscribe(
        ({ data, loading, errors }) => {
          if (loading) {
            this.isLoading = loading;
          }
          if (errors) {
            errors.map((e) => console.error(e));
            this.isLoading = false;
          }
          if (data && data.skillGroups) {
            this.feed = data.skillGroups.map((skillGroup) => ({
              id: skillGroup.id,
              name: skillGroup.name,
              level: 0,
              childrenCount: skillGroup.childrenConnection.totalCount,
              type: skillGroup.__typename,
            }));
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

  async handleExpand(item: FeedItem, index: number, event: boolean) {
    if (event) {
      await this.fetchChildren(item, index);
    } else {
      this.removeChildrenOf(item, index);
    }
  }

  async fetchChildren(item: FeedItem, index: number) {
    this.isLoading = true;
    const result = await this.skillsAdapterService.skillsTreeQueryRef.fetchMore(
      { variables: { where: { id: item.id } } },
    );
    this.feed.splice(
      index + 1,
      0,
      ...result.data.skillGroups[0].children.map((skillGroup) => ({
        id: skillGroup.id,
        name: skillGroup.name,
        level: item.level + 1,
        childrenCount: 'childrenConnection' in skillGroup ? skillGroup.childrenConnection.totalCount : 0,
        type: skillGroup.__typename,
      })),
    );
    this.feed = [...this.feed];

    this.isLoading = false;
  }

  removeChildrenOf(item: FeedItem, index: number) {
    const startLevel = item.level;
    let currentIndex = index + 1;

    for (; currentIndex < this.feed.length; currentIndex++) {
      const child = this.feed[currentIndex];
      if (child.level === startLevel) {
        break;
      }
    }

    this.feed.splice(index + 1, currentIndex - index - 1);
    this.feed = [...this.feed];
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
      this.skillsAdapterService
        .checkSkillExists(name)
        .subscribe((skillExists) => {
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
          }
        });
    }

    this.clearForm();
  }
}
