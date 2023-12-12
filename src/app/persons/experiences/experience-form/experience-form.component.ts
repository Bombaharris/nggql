import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QueryRef } from 'apollo-angular';
import { QLFilterBuilderService } from 'src/app/services/ql-filter-builder.service';
import { SkillsAdapterService } from 'src/app/services/skills-adapter.service';
import { Exact, Experience, ExperienceWhere, ExperiencesByPersonQuery, InputMaybe, Person, SkillsQuery } from '../../../generated/graphql';

type ExperienceFormType = FormGroup<{
  experiences: FormArray<FormControl>;
}>
@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceFormComponent implements OnInit, OnChanges {
  @Input() person!: Person | any;
  @Output() submitted = new EventEmitter<AbstractControl<any,any>>();
  @Output() deleted = new EventEmitter<string>();
  @Output() canceled = new EventEmitter();
  isLoading: boolean = false;
  confirmModal: boolean = false;
  skills: SkillsQuery['skills'];
  qlFilterService = new QLFilterBuilderService();
  experienceForm: ExperienceFormType = this.fb.group({
    experiences: this.fb.array([])
  });
  experienceQueryRef: QueryRef<ExperiencesByPersonQuery, Exact<{ where?: InputMaybe<ExperienceWhere> | undefined; }>> | undefined = undefined;

  constructor(
    private skillsAdapterService: SkillsAdapterService, 
    private fb: FormBuilder) {
    this.skills = this.skillsAdapterService.skills;
  }

  ngOnInit(): void {
    if(!this.person) return;
    this.experienceForm.patchValue({experiences: this.person.experiences});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes || !changes.person || !changes.person.currentValue) return;
    this.rebuildFormGroup(changes.person.currentValue.experiences);
  }

  private rebuildFormGroup(experiences: Experience[]): void {
    const workExperiencesFormArray = this.experienceForm.get('experiences') as FormArray;
    const e = experiences.map(e => ({...e, skills: e.skills.map(s => s.id)})).sort((a,b) => {
      const dB = new Date(b.startedFrom).getTime();
      const dA = new Date(a.startedFrom).getTime();
      return dB - dA;
    });
    workExperiencesFormArray.clear();
    e.forEach((experience) => {      
      const newWorkExperience = this.fb.group({
       ...experience,
        skills: [experience.skills]
      });
      //check if experience already exists, if not omit it
      if(workExperiencesFormArray.controls.find(w => w.get('id')?.value === newWorkExperience.get('id')?.value)) return;
      workExperiencesFormArray.push(newWorkExperience);
    });
  }

  get experiences(): FormArray {
    return this.experienceForm.get('experiences') as FormArray;
  }

  newExperienceGroup(): FormGroup {
    return this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      startedFrom: ["", [Validators.required]],
      gainedAt: ["", [Validators.required]],
       skills: [],
    })
  }

  addNewForm(){
    if(!this.experiences) return;
    this.experiences.push(this.newExperienceGroup());
  }

  submitNewExperience(experience: AbstractControl<any,any>): void {
    this.submitted.emit(experience);
  }
  

  deleteExperience(idx: number, experience: AbstractControl<Experience,any>) {
    const id = experience.get("id")?.value as string;
    this.experiences.removeAt(idx);
    //if no Id was found (empty form) just remove it from layout
    if(!id) return;
    this.deleted.emit(id);

    }

  cancelDelete(){
    this.confirmModal = false;
  }
}
