import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { SkillsQuery, PersonsWithAllQuery, Project } from 'src/app/generated/graphql';
import { ProjectFormType } from 'src/app/projects/project-form/models/project-form.model';
import { PersonAdapterService } from 'src/app/services/person-adapter.service';
import { QLFilterBuilderService } from 'src/app/services/ql-filter-builder.service';
import { SkillsAdapterService } from 'src/app/services/skills-adapter.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent implements OnChanges {
  @Output() submitted = new EventEmitter<AbstractControl<any,any>>();
  @Output() deleted = new EventEmitter<string>();
  @Output() canceled = new EventEmitter();
  isLoading: boolean = false;
  confirmModal: boolean = false;
  skills: SkillsQuery['skills'];
  persons!: PersonsWithAllQuery['people'] | null;
  qlFilterService = new QLFilterBuilderService();
  projectForm: ProjectFormType = this.fb.group({
    projects: this.fb.array([])
  });
  constructor(
    private skillsAdapterService: SkillsAdapterService, 
    private fb: FormBuilder,
    private personsAdapterService: PersonAdapterService
    ) {
    this.skills = this.skillsAdapterService.skills;
    this.persons = this.personsAdapterService.people;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes || !changes.person || !changes.person.currentValue) return;
    this.rebuildFormGroup(changes.person.currentValue.projects);
  }

  private rebuildFormGroup(projects: Project[]): void {
    const workProjectsFormArray = this.projectForm.get('projects') as FormArray;
    const e = projects.map(exp => ({...exp, skills: exp.skills.map(s => s.id)})).sort((a,b) => {
      const dB = new Date(b.startedFrom).getTime();
      const dA = new Date(a.startedFrom).getTime();
      return dB - dA;
    });
    workProjectsFormArray.clear();
    e.forEach((project) => {      
      const newWorkProject = this.fb.group({
       ...project,
        skills: [project.skills]
      });
      //check if project already exists, if not omit it
      if(workProjectsFormArray.controls.find(w => w.get('id')?.value === newWorkProject.get('id')?.value)) return;
      workProjectsFormArray.push(newWorkProject);
    });
  }

  get projects(): FormArray {
    return this.projectForm.get('projects') as FormArray;
  }

  newProjectGroup(): FormGroup {
    return this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      startedFrom: ["", [Validators.required]],
      gainedAt: ["", [Validators.required]],
       skills: [],
    })
  }

  addNewForm() {
    if(!this.projects) return;
    this.projects.push(this.newProjectGroup());
  }

  submitNewProject(project: AbstractControl<any,any>): void {
    this.submitted.emit(project);
  }
  

  deleteProject(idx: number, project: AbstractControl<Project,any>) {
    const id = project.get("id")?.value as string;
    this.projects.removeAt(idx);
    //if no Id was found (empty form) just remove it from layout
    if(!id) return;
    this.deleted.emit(id);

    }

  cancelDelete() {
    this.confirmModal = false;
  }
}
