import { Component } from '@angular/core';
import { DepartmentsQuery } from '../generated/graphql';
import { Subscription } from 'rxjs';
import { DepartmentsAdapterService } from '../services/departments-adapter.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent {
  isFormVisible = false;
  isLoading = false;
  currentForm: "department" | null = null;
  expandSet = new Set<string>();
  departments!: DepartmentsQuery['departments'];
  editedDepartment!: DepartmentsQuery['departments'] | null;
  isConfirmModal: boolean = false;
  readonly subscription: Subscription = new Subscription();

  constructor(
    private departmentsAdapterService: DepartmentsAdapterService,
    private notification: NzNotificationService
  ) {
    this.subscription.add(
      this.departmentsAdapterService?.departmentsQueryRef?.valueChanges.subscribe(({ data, loading, errors }) => {
        if(loading) {
          this.isLoading = loading;
        }
        if(errors) {
          errors.map(e => console.error(e));
          this.isLoading = false;
        }
        if(data && data.departments) {
          this.departments = data.departments;
          this.isLoading = false;
        }
      })
    );
  }

  
  removeDepartment(department: DepartmentsQuery['departments']): void {
    this.isConfirmModal = true;
    if(!department) return;
    this.departmentsAdapterService.removeDepartment<DeleteDepartments>(department.id, DeleteDepartmentsDocument).subscribe(
      () => {
        this.departmentsAdapterService.departmentsQueryRef?.refetch();
      }, 
      (error: any) => {
        this.notification.create(
        'error',
        'Error',
        `Error occured during removal: ${error}`
      )
    }, 
    () => {
      this.notification.create(
        'success',
        'Success',
        `${department.name} was successfully removed.`
        )
      });
    }

    openForm(formType: "department" | null, department?: DepartmentsQuery['departments']): void {
      this.isFormVisible = true;
      this.currentForm = formType;
      if(department) {
        this.editedDepartment = department;
        this.departmentsAdapterService.setEditedDepartment(department);
      }
    }

    clearForm(): void {
      this.isFormVisible = false;
      this.currentForm = null;
      this.editedDepartment = null;
      this.departmentsAdapterService.setEditedDepartment(null);
    }

    closeForm(departmentForm?: FormGroup<DepartmentForm>): void {
      if(departmentForm) {
        const name = departmentForm.get('name')?.value;
        const manager = departmentForm.get('manager')?.value;
        if(this.editedDepartment) {
        this.departmentsAdapterService.submitDepartment<UpdateDepartmentsGQL>(departmentForm, this.editedDepartment.id).subscribe(() => {
          this.notification.create(
            'success',
            'Success',
            `Department ${name} was successfully edited.`
            );
        }, (error: any) => {
          this.notification.create(
            'error',
            'Error',
            `${error}`
          )
        });
        this.clearForm();
        return;
      }
  
      this.departmentsAdapterService.submitDepartment<CreateDepartmentsGQL>(departmentForm).subscribe(() => {
        this.notification.create(
          'success',
          'Success',
          `Department ${name} was successfully created.`
          );
          this.departmentsAdapterService.departmentsQueryRef?.refetch();
      }, (error: any) => {
          this.notification.create(
            'error',
            'Error',
            `${error}`
          )
        });
      }   
      this.clearForm();
    }

}
