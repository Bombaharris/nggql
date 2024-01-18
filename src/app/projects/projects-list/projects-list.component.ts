import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { ProjectsAdapterService } from 'src/app/services/projects-adapter.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {
  projects!: ProjectsQuery['projects'];
  isFormVisible = false;
  isLoading = false;
  currentForm: "project" | null = null;
  isConfirmModal: boolean = false;
  readonly subscription: Subscription = new Subscription();

  constructor(
    private projectsAdapterService: ProjectsAdapterService,
    private notification: NzNotificationService
  ) {
    this.isLoading = true;
    this.subscription.add(
      this.projectsAdapterService?.projectsQueryRef?.valueChanges.subscribe(({ data, loading, errors }) => {
        if (loading) {
          this.isLoading = loading;
        }
        if (errors) {
          errors.map(e => console.error(e));
          this.isLoading = false;
        }
        if (data && data.projects) {
          this.projects = data.projects;
          this.isLoading = false;
        }
      })
    );
  }

  ngOnInit(): void {
    if (!this.projects) {
      this.projectsAdapterService.projectsQueryRef?.refetch();
    }
  }

  openForm(formType: "project" | null): void {
    this.isFormVisible = true;
    this.currentForm = formType;
  }

  clearForm(): void {
    this.isFormVisible = false;
    this.currentForm = null;
  }

  closeForm(projectForm?: FormGroup<ProjectForm>): void {
    const name = projectForm?.get('name')?.value.toUpperCase();
    if (projectForm && name) {
          this.projectsAdapterService.submitProject<CreateProjectsGQL>(name).subscribe(({ loading, errors }) => {
            if (loading) {
              this.isLoading = loading;
            }
            if (errors) {
              errors.map((error) => {
                console.error(error.message);
              })
            }
            this.notification.create(
              'success',
              'Success',
              `Project ${name} was successfully created.`
            );
            this.projectsAdapterService.projectsQueryRef?.refetch();
          }, (error: any) => {
            this.notification.create(
              'error',
              'Error',
              `${error}`
            )
          });
        
    }
  }
}
