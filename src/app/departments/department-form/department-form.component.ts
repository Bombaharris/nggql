import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentPartFragment, Person } from 'src/app/generated/graphql';
import { DepartmentsAdapterService } from 'src/app/services/departments-adapter.service';
import { PersonAdapterService } from 'src/app/services/person-adapter.service';
import { DepartmentForm } from './models/department-form.model';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrl: './department-form.component.scss'
})
export class DepartmentFormComponent {
  people!: Person[] | any;
  department: DepartmentPartFragment | null = null;
  @Output() submitted: EventEmitter<FormGroup<DepartmentForm>> = new EventEmitter();
  @Output() canceled = new EventEmitter();
  departmentForm: FormGroup<DepartmentForm> = new FormGroup({
    name: new FormControl(null, Validators.required),
    manager: new FormControl(),
  });

  constructor(
    private personAdapterService: PersonAdapterService,
    private departmentsAdapterService: DepartmentsAdapterService,
  ) {
      personAdapterService.personsQueryRef?.valueChanges.subscribe(result => {
        this.people = result.data.people;
      });
      this.department = departmentsAdapterService.editedDepartment;
  }

  ngOnInit(): void {
    if (this.department) {
      this.departmentForm.patchValue(this.department);
      this.departmentForm.get('manager')?.patchValue(this.department.manager?.id);
    }
  }

  cancel(): void {
    this.resetForm();
    this.canceled.emit();
  }

  resetForm(): void {
    this.departmentForm.reset();
    this.department = null;
  }

  submit(): void {
    this.submitted.emit(this.departmentForm);
    this.resetForm();
  }
}
