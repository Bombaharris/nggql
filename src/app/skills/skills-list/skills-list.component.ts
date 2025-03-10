import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import {
  SkillsTreeQuery,
  SkillsWithLimitQuery,
} from 'src/app/generated/graphql';
import { SkillsAdapterService } from 'src/app/services/skills-adapter.service';
import { MutationResult } from 'apollo-angular';
import { QlResponseMessageBuilderService } from '../../services/ql-response-message-builder.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import handleResponse from '../../shared/operators/handle-response';
import { throttleTime } from 'rxjs/operators';

export type SkillFormType = 'Skill' | 'SkillGroup';

interface ListItem {
  id: string;
  name: string;
  level: number;
  childrenCount: number;
  type?: SkillFormType;
  parentId: string | null;
}

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrl: './skills-list.component.scss',
})
export class SkillsListComponent implements OnInit {
  listItems: ListItem[] = [];
  private loadingSubject = new BehaviorSubject(false);
  isLoading: Observable<boolean>;
  error = new Subject<string>();
  currentForm: SkillFormType | null = null;
  skillId?: string | null = null;
  skills!: SkillsWithLimitQuery['skills'];
  readonly subscription: Subscription = new Subscription();

  constructor(
    private skillsAdapterService: SkillsAdapterService,
    private notification: NzNotificationService,
    private qlResponseMessageBuilder: QlResponseMessageBuilderService,
  ) {
    this.isLoading = this.loadingSubject.pipe(
      throttleTime(150, undefined, { leading: true, trailing: true }),
    );

    this.error.subscribe((error) => this.notification.error('Error', error));

    this.loadingSubject.next(true);
    this.subscription.add(
      this.skillsAdapterService.skillsTreeQueryRef.valueChanges
        .pipe(handleResponse(this.loadingSubject, this.error))
        .subscribe(({ data }: MutationResult<SkillsTreeQuery>) => {
          if (data && data.skillGroups) {
            this.listItems = [...data.skillGroups, ...data.skills].map(
              (skillGroup) => this.skillGroupQLToListItem(skillGroup),
            );
          }
        }),
    );
  }

  get isFormVisible() {
    return this.currentForm !== null;
  }

  get drawerTitle() {
    return '${action} ${type}'
      .replace('${action}', this.skillId ? 'Edit' : 'Create')
      .replace(
        '${type}',
        this.currentForm === 'SkillGroup' ? 'skill group' : 'skill',
      );
  }

  ngOnInit(): void {
    if (!this.skills) {
      this.skillsAdapterService.skillsQueryRef.refetch();
    }
  }

  async handleExpand(item: ListItem, index: number, event: boolean) {
    if (event) {
      await this.fetchChildren(item, index);
    } else {
      this.removeChildrenOf(item, index);
    }
  }

  async fetchChildren(item: ListItem, index: number) {
    this.loadingSubject.next(true);

    const result = await this.skillsAdapterService.skillsTreeQueryRef.fetchMore(
      { variables: { where: { id: item.id } } },
    );
    this.listItems.splice(
      index + 1,
      0,
      ...result.data.skillGroups[0].children.map((skillGroup) =>
        this.skillGroupQLToListItem(skillGroup, item),
      ),
    );
    this.listItems = [...this.listItems];

    this.loadingSubject.next(false);
  }

  removeChildrenOf(item: ListItem, index: number) {
    const startLevel = item.level;
    let currentIndex = index + 1;

    for (; currentIndex < this.listItems.length; currentIndex++) {
      const child = this.listItems[currentIndex];
      if (child.level === startLevel) {
        break;
      }
    }

    this.listItems.splice(index + 1, currentIndex - index - 1);
    this.listItems = [...this.listItems];
  }

  openForm(formType: SkillFormType | null, skillId?: string | null): void {
    this.skillId = skillId;
    this.currentForm = formType;
  }

  closeForm(): void {
    this.skillId = null;
    this.currentForm = null;
  }

  handleSubmitted(observable: Observable<MutationResult>) {
    this.loadingSubject.next(true);

    observable
      .pipe(handleResponse(this.loadingSubject, this.error))
      .subscribe(({ data }) => {
        this.skillsAdapterService.skillsTreeQueryRef.refetch();
        this.notification.create(
          'success',
          'Success',
          this.qlResponseMessageBuilder.buildMessage(
            data.createSkills?.info ??
              data.createSkillGroups?.info ??
              data.updateSkills?.info ??
              data.updateSkillGroups?.info ??
              data.deleteSkills ??
              data.deleteSkillGroups,
            ['skill', 'skills'],
          ),
        );
      });
  }

  removeSkill(skill: ListItem) {
    if (!skill.type) return;

    this.handleSubmitted(
      {
        Skill: () => this.skillsAdapterService.deleteSkill(skill.id),
        SkillGroup: () => this.skillsAdapterService.deleteGroup(skill.id),
      }[skill.type](),
    );
  }

  handleDrop({ previousIndex, currentIndex }: CdkDragDrop<ListItem[]>) {
    const item = this.listItems[previousIndex];
    const newParentId = this.listItems[currentIndex].parentId;

    this.loadingSubject.next(true);

    this.skillsAdapterService
      .updateAssignmentToParents(
        item.type!,
        item.id,
        [item.parentId].filter(Boolean),
        [newParentId].filter(Boolean),
      )
      .pipe(handleResponse(this.loadingSubject, this.error))
      .subscribe(({ data }) => {
        this.skillsAdapterService.skillsTreeQueryRef.refetch();
        this.notification.create(
          'success',
          'Success',
          data?.updateSkillGroups.info
            ? this.qlResponseMessageBuilder.buildUpdatedMessage(
                data?.updateSkillGroups.info,
                ['skill', 'skills'],
              )
            : '',
        );
      });
  }

  private skillGroupQLToListItem(
    skillGroup:
      | SkillsTreeQuery['skillGroups'][number]
      | SkillsTreeQuery['skillGroups'][number]['children'][number],
    parentItem?: ListItem,
  ) {
    return {
      id: skillGroup.id,
      name: skillGroup.name,
      level: parentItem ? parentItem.level + 1 : 0,
      childrenCount:
        'childrenConnection' in skillGroup
          ? skillGroup.childrenConnection.totalCount
          : 0,
      type: skillGroup.__typename,
      parentId: parentItem?.id ?? null,
    };
  }
}
