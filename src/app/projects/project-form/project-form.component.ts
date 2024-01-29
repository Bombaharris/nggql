import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';
import {
  PersonsWithAllQuery,
  Project,
  ProjectPartFragment,
  SkillsQuery
} from 'src/app/generated/graphql';
import { PersonAdapterService } from 'src/app/services/person-adapter.service';
import { ProjectsAdapterService } from 'src/app/services/projects-adapter.service';
import { QLFilterBuilderService } from 'src/app/services/ql-filter-builder.service';
import { SkillsAdapterService } from 'src/app/services/skills-adapter.service';
import { durationValidator } from 'src/app/shared/directives/duration-validator.directive';
import { ProjectForm } from './models/project-form.model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss',
})
export class ProjectFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<AbstractControl<any, any>>();
  @Output() deleted = new EventEmitter<string>();
  @Output() canceled = new EventEmitter();
  project: ProjectPartFragment | null = null;
  isLoading: boolean = false;
  confirmModal: boolean = false;
  persons!: Observable<PersonsWithAllQuery['people']>;
  skills!: Observable<SkillsQuery['skills']>;
  qlFilterService = new QLFilterBuilderService();
  projectForm: FormGroup<ProjectForm> = new FormGroup({
    name: new FormControl(null, Validators.required),
    startedFrom: new FormControl(null, Validators.required),
    duration: new FormControl(null, durationValidator(/^P(([0-9]+Y)?([0-9]+M)?([0-9]+W)?([0-9]+D)?(T([0-9]+H)?([0-9]+M)?([0-9]+(\.?[0-9]+)?S)?))?$/)),
    skills: new FormControl(),
    persons: new FormControl(),
  });

  constructor(
    private skillsAdapterService: SkillsAdapterService,
    private personsAdapterService: PersonAdapterService,
    private projectAdapterService: ProjectsAdapterService,
  ) {
    this.project = this.projectAdapterService.editedProject;
    this.skills = this.skillsAdapterService.fetch();
    this.persons = this.personsAdapterService.fetch();
  }

  ngOnInit(): void {
    if (this.project) {
      this.projectForm.patchValue(this.project);
      this.projectForm
        .get('skills')
        ?.patchValue(this.project.skills.map((s) => s.id));
      this.projectForm
        .get('persons')
        ?.patchValue(this.project.persons.map((p) => p.id));
    }
  }

  resetForm(): void {
    this.projectForm.reset();
    this.project = null;
  }

  submit(): void {
    this.submitted.emit(this.projectForm);
    this.resetForm();
  }

  deleteProject(project: AbstractControl<Project, any>) {
    const id = project.get('id')?.value as string; //if no Id was found (empty form) just remove it from layout
    if (!id) return;
    this.deleted.emit(id);
  }

  cancel(): void {
    this.resetForm();
    this.canceled.emit();
  }
}
