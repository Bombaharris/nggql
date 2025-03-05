import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import {
  CreateExperiencesMutation,
  EditExperiencesMutation,
  ExperienceType,
  PersonWithAllTypeFragment,
} from 'src/app/generated/graphql';
import { PersonAdapterService } from 'src/app/services/person-adapter.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  editedPerson!: PersonWithAllTypeFragment | null | undefined;
  personId!: string;
  readonly subscription: Subscription = new Subscription();

  readonly experienceTypeTitlesMap = {
    [ExperienceType.Default]: 'Experience',
    [ExperienceType.Project]: 'Projects',
    [ExperienceType.Education]: 'Education',
    [ExperienceType.Course]: 'Courses',
    [ExperienceType.Hobby]: 'Hobbies',
  };
  readonly experienceTypeData: {type: ExperienceType, title: string}[];

  constructor(
    private personAdapterService: PersonAdapterService,
    private route: ActivatedRoute,
    private notification: NzNotificationService,
    private router: Router,
  ) {
    this.subscription.add(
      this.route.params.subscribe((params) => {
        this.personId = params['id'];
      }),
    );
    this.personAdapterService.setPersonQueryRef(this.personId);

    this.experienceTypeData = Object.entries(this.experienceTypeTitlesMap).map(([key, value]) => ({
      type: key as ExperienceType,
      title: value,
    }));
  }

  ngOnInit(): void {
    this.personAdapterService.personQueryRef?.valueChanges.subscribe(
      ({ data, loading, errors }) => {
        if (loading) {
          this.isLoading = loading;
        }
        if (errors) {
          errors.map((e) => console.error(e));
          this.isLoading = false;
        }
        if (data && data.people) {
          this.editedPerson = data.people.find((p) => p.id === this.personId);
          this.isLoading = false;
        }
      },
    );
  }

  getExperienceByType(type: ExperienceType) {
    return {
      [ExperienceType.Default]: () => this.editedPerson?.experience,
      [ExperienceType.Education]: () => this.editedPerson?.education,
      [ExperienceType.Hobby]: () => this.editedPerson?.hobby,
      [ExperienceType.Project]: () => this.editedPerson?.projectExperience,
      [ExperienceType.Course]: () => this.editedPerson?.courses,
    }[type]() ?? [];
  }

  submitExperience($event: AbstractControl<any, any>, experienceType: ExperienceType): void {
    this.isLoading = true;
    const experienceExists = $event.get('id')?.value;
    if (!experienceExists) {
      this.personAdapterService
        .submitPersonExperience<CreateExperiencesMutation>(
          this.personId,
          experienceType,
          $event,
          true,
        )
        .subscribe(
          () => {
            this.notification.create(
              'success',
              'Success',
              `Experience for ${this.editedPerson?.name} was successfully created.`,
            );
            this.personAdapterService?.refetch(this.personId)?.then((res) => {
              this.editedPerson = res.data.people[0];
            });
          },
          (error: any) => {
            this.notification.create(
              'error',
              'Error',
              `Error occured during creation of experience: ${error}`,
            );
          },
        );

      return;
    }
    this.personAdapterService
      .submitPersonExperience<EditExperiencesMutation>(
        this.personId,
        experienceType,
        $event,
        false,
      )
      .subscribe(
        () => {
          this.notification.create(
            'success',
            'Success',
            `Experience for ${this.editedPerson?.name} was successfully changed.`,
          );
          this.personAdapterService?.refetch(this.personId)?.then((res) => {
            this.editedPerson = res.data.people[0];
          });
        },
        (error: any) => {
          this.notification.create(
            'error',
            'Error',
            `Error occured during edition of experience: ${error}`,
          );
        },
      );

    this.isLoading = false;
  }

  removePersonsExperience(id: string): void {
    this.personAdapterService.removePersonsExperience(id).subscribe(
      () => {
        this.notification.create(
          'success',
          'Success',
          `Experience was successfully deleted.`,
        );
      },
      (error: any) => {
        this.notification.create(
          'error',
          'Error',
          `Error occured during edition of experience: ${error}`,
        );
      },
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
