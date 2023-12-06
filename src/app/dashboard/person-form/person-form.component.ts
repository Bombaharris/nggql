import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable } from 'rxjs';
import { CreatePeopleGQL, Department, DepartmentsQuery, Person, PersonCreateInput, PersonUpdateInput, Project, ProjectsWithAllQuery, Role, RolesQuery, Seniority, Skill, SkillsQuery, UpdatePeopleGQL } from '../../generated/graphql';
import { QLFilterBuilderService } from '../../services/ql-filter-builder.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html'
})
export class PersonFormComponent implements OnInit {
  @Input() person!: Person | any;
  @Output() submitted = new EventEmitter();
  @Output() canceled = new EventEmitter();
  @Input() deps$: Observable<DepartmentsQuery['departments']> = new Observable();
  @Input() projects$: Observable<ProjectsWithAllQuery['projects']> = new Observable();
  @Input() skills$: Observable<SkillsQuery['skills']> = new Observable();
  @Input() roles$: Observable<RolesQuery['roles']> = new Observable();
  seniority = Object.values(Seniority);
  personForm = new FormGroup({
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
    private qlFilterService: QLFilterBuilderService,
    private createPGQL: CreatePeopleGQL,
    private updatePGQL: UpdatePeopleGQL,
    private notification: NzNotificationService
  ) {
 
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
    if (this.person) {
      let input: PersonUpdateInput = {
        name: this.personForm.get('name')?.value as any,
        surname: this.personForm.get('surname')?.value as any,
        birthday: this.personForm.get('birthday')?.value as any,
        seniority: this.personForm.get('seniority')?.value as any,
        skills: [{
          disconnect: this.qlFilterService.connectWhere('id_NOT_IN', '') as any,
          connect: this.qlFilterService.connectWhere('id', this.personForm.get('skills')?.value) as any
        }],
        projects: [{
          disconnect: this.qlFilterService.connectWhere('id_NOT_IN', '') as any,
          connect: this.qlFilterService.connectWhere('id', this.personForm.get('projects')?.value) as any
        }],
        departments: [{
          disconnect: this.qlFilterService.connectWhere('id_NOT_IN', '') as any,
          connect: this.qlFilterService.connectWhere('id', this.personForm.get('departments')?.value) as any
        }],
        roles: [{
          disconnect: this.qlFilterService.connectWhere('id_NOT_IN', '') as any,
          connect: this.qlFilterService.connectWhere('id', this.personForm.get('roles')?.value) as any
        }],
      };
      this.updatePGQL.mutate({
        where: {
          id: this.person.id
        },
        update: input
      }).subscribe(() => {
        this.submitted.emit();
        this.notification.create(
          'success',
          'Success',
          `User ${input.name} ${input.surname} was successfully edited.`
        );
        this.resetForm();
      }, (error: any) => {
        this.notification.create(
          'error',
          'Error',
          `${error}`
        )
      });
    } else {
      let input: PersonCreateInput = {
        name: this.personForm.get('name')?.value as any,
        surname: this.personForm.get('surname')?.value as any,
        birthday: this.personForm.get('birthday')?.value as any,
        skills: {
          connect: this.qlFilterService.connectWhere('id', this.personForm.get('skills')?.value) as any
        },
        projects: {
          connect: this.qlFilterService.connectWhere('id', this.personForm.get('projects')?.value) as any
        },
        departments: {
          connect: this.qlFilterService.connectWhere('id', this.personForm.get('departments')?.value) as any
        },
        roles: {
          connect: this.qlFilterService.connectWhere('id', this.personForm.get('roles')?.value) as any
        },
        seniority: this.personForm.get('seniority')?.value as any
    };
      this.createPGQL.mutate({ input }).subscribe(() => {
        this.submitted.emit();
        this.notification.create(
          'success',
          'Success',
          `User ${input.name} ${input.surname} was successfully added.`
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
}
