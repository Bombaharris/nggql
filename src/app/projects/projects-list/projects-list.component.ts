import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import {
  CreateProjectsMutation,
  ProjectPartFragment,
  ProjectsWithAllQuery,
  UpdateProjectsGQL,
} from 'src/app/generated/graphql';
import { ProjectsAdapterService } from 'src/app/services/projects-adapter.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent implements OnInit, OnDestroy {
  editedProject: ProjectPartFragment | null = null;
  projects!: ProjectsWithAllQuery['projects'];
  isFormVisible = false;
  isLoading = false;
  currentForm: 'project' | null = null;
  isConfirmModal: boolean = false;
  readonly subscription: Subscription = new Subscription();

  constructor(
    private projectsAdapterService: ProjectsAdapterService,
    private notification: NzNotificationService,
  ) {
    this.isLoading = true;
    this.subscription.add(
      this.projectsAdapterService?.projectsQueryRef?.valueChanges.subscribe(
        ({ data, loading, errors }) => {
          if (loading) {
            this.isLoading = loading;
          }
          if (errors) {
            errors.map((e) => console.error(e));
            this.isLoading = false;
          }
          if (data && data.projects) {
            this.projects = data.projects;
            this.isLoading = false;
          }
        },
      ),
    );
  }

  ngOnInit(): void {
    if (!this.projects) {
      this.projectsAdapterService.projectsQueryRef?.refetch();
    }
  }

  openForm(
    formType: 'project' | null,
    project?: ProjectPartFragment | null,
  ): void {
    this.isFormVisible = true;
    this.currentForm = formType;
    if (project) {
      this.editedProject = project;
      this.projectsAdapterService.setEditedProject(project);
    }
  }

  clearForm(): void {
    this.isFormVisible = false;
    this.currentForm = null;
    this.editedProject = null;
    this.projectsAdapterService.setEditedProject(null);
  }

  closeForm(projectForm?: AbstractControl<any, any>): void {
    if (projectForm) {
      const name = projectForm.get('name')?.value;
      if (this.editedProject) {
        this.projectsAdapterService
          .submitProject<UpdateProjectsGQL>(projectForm, this.editedProject.id)
          .subscribe(
            () => {
              this.notification.create(
                'success',
                'Success',
                `User ${name} was successfully edited.`,
              );
              this.projectsAdapterService.projectsQueryRef?.refetch();
            },
            (error: any) => {
              this.notification.create('error', 'Error', `${error}`);
            },
          );
        this.clearForm();
        return;
      }

      this.projectsAdapterService
        .submitProject<CreateProjectsMutation>(projectForm)
        .subscribe(
          () => {
            this.notification.create(
              'success',
              'Success',
              `User ${name} was successfully created.`,
            );
            this.projectsAdapterService.projectsQueryRef?.refetch();
          },
          (error: any) => {
            this.notification.create('error', 'Error', `${error}`);
          },
        );
    }
    this.clearForm();
  }

  removeProject(project: ProjectPartFragment): void {
    this.isConfirmModal = true;
    this.projectsAdapterService.removeProject(project.id).subscribe(
      () => {
        this.projectsAdapterService.projectsQueryRef?.refetch();
      },
      (error) => {
        this.notification.create(
          'error',
          'Error',
          `Error occured during removal: ${error}`,
        );
      },
      () => {
        this.notification.create(
          'success',
          'Success',
          `${project.name} was successfully removed.`,
        );
      },
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
