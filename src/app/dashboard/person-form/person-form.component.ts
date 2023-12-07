import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable } from 'rxjs';
import { CreatePeopleGQL, Department, DepartmentsQuery, Person, Project, ProjectsWithAllQuery, Role, RolesQuery, Seniority, Skill, SkillsQuery, UpdatePeopleGQL } from '../../generated/graphql';
import { PersonAdapterService } from './../../services/person-adapter.service';

export type PersonForm = {
    name: FormControl,
    surname: FormControl,
    birthday: FormControl,
    departments: FormControl,
    projects: FormControl,
    skills: FormControl,
    roles: FormControl,
    seniority: FormControl,
    rates: FormControl
}
@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html'
})
export class PersonFormComponent implements OnInit {
  person!: Person | any;
  @Output() submitted = new EventEmitter();
  @Output() canceled = new EventEmitter();
  @Input() deps$: Observable<DepartmentsQuery['departments']> = new Observable();
  @Input() projects$: Observable<ProjectsWithAllQuery['projects']> = new Observable();
  @Input() skills$: Observable<SkillsQuery['skills']> = new Observable();
  @Input() roles$: Observable<RolesQuery['roles']> = new Observable();
  seniority = Object.values(Seniority);
  personForm: FormGroup<PersonForm> = new FormGroup({
    name: new FormControl(null, Validators.required),
    surname: new FormControl(null, Validators.required),
    birthday: new FormControl(),
    departments: new FormControl(),
    projects: new FormControl(),
    skills: new FormControl(),
    roles: new FormControl(),
    seniority: new FormControl(),
    rates: new FormControl()
  });

  constructor(
    private personAdapterService: PersonAdapterService,
    private notification: NzNotificationService
  ) {
      this.person = personAdapterService.editedPerson;
  }

  ngOnInit(): void {
    if (this.person) {
      this.personForm.patchValue(this.person);
      this.personForm.get('skills')?.patchValue(this.person.skills.map((s: Skill) => s.id));
      this.personForm.get('projects')?.patchValue(this.person.projects.map((p: Project) => p.id));
      this.personForm.get('departments')?.patchValue(this.person.departments.map((d: Department) => d.id));
      this.personForm.get('roles')?.patchValue(this.person.roles.map((r: Role) => r.id));
    }
  }

  cancel(): void {
    this.resetForm();
    this.canceled.emit();
  }

  resetForm(): void {
    this.personForm.reset();
    this.person = null;
  }

  submit(): void {
    if(this.person){
    this.personAdapterService.submitPerson<UpdatePeopleGQL>(this.personForm, this.person.id).subscribe(() => {
        this.submitted.emit();
        this.notification.create(
          'success',
          'Success',
          `User ${this.person?.name} ${this.person.surname} was successfully edited.`
        );
        this.resetForm();
      }, (error: any) => {
        this.notification.create(
          'error',
          'Error',
          `${error}`
        )
      });
      return;
    }

    this.personAdapterService.submitPerson<CreatePeopleGQL>(this.personForm).subscribe(() => {
        this.submitted.emit();
        this.notification.create(
          'success',
          'Success',
          `User ${this.personForm.get('name')?.value} ${this.personForm.get('surname')?.value} was successfully added.`
        );
        this.resetForm();
      }, (error: any) => {
        this.notification.create(
          'error',
          'Error',
          `${error}`
        )
      });
    }
}
