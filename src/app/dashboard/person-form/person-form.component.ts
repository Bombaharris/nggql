import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsAdapterService } from 'src/app/services/projects-adapter.service';
import { RolesAdapterService } from 'src/app/services/roles-adapter.service';
import { SkillsAdapterService } from 'src/app/services/skills-adapter.service';
import { Department, DepartmentsQuery, Person, Project, ProjectsWithAllQuery, Role, RolesQuery, Seniority, Skill, SkillsQuery } from '../../generated/graphql';
import { DepartmentsAdapterService } from './../../services/departments-adapter.service';
import { PersonAdapterService } from './../../services/person-adapter.service';
import { PersonForm } from './models/person-form.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html'
})
export class PersonFormComponent implements OnInit {
  person!: Person | any;
  @Output() submitted: EventEmitter<FormGroup<PersonForm>> = new EventEmitter();
  @Output() canceled = new EventEmitter();
  departments!: DepartmentsQuery['departments'];
  projects!: ProjectsWithAllQuery['projects'];
  skills!: SkillsQuery['skills'];
  roles!: RolesQuery['roles'];
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
    private departmentsAdapterService: DepartmentsAdapterService,
    private skillsAdapterService: SkillsAdapterService,
    private rolesAdapterService: RolesAdapterService,
    private projectsAdapterService: ProjectsAdapterService,
  ) {
      this.person = personAdapterService.editedPerson;
      this.departments = this.departmentsAdapterService.departments;
      this.skills = this.skillsAdapterService.skills;
      this.roles = this.rolesAdapterService.roles;
      this.projects = this.projectsAdapterService.projects;
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
    this.submitted.emit(this.personForm);
    this.resetForm();
  }
}
