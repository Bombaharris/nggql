import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo, QueryRef } from 'apollo-angular';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeleteExperiencesDocument, Exact, Experience, ExperienceDataFragment, ExperienceWhere,  ExperiencesByPersonGQL, ExperiencesByPersonQuery, InputMaybe, Person, SkillsGQL, SkillsQuery } from '../../../generated/graphql';
import { QLFilterBuilderService } from 'src/app/services/ql-filter-builder.service';

type ExperienceFormType = FormGroup<{
  experiences: FormArray<FormControl>;
}>
@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnChanges {
  @Input() person!: Person | any;
  @Output() submitted = new EventEmitter<AbstractControl<any,any>>();
  @Output() canceled = new EventEmitter();
  isLoading: boolean = false;
  confirmModal: boolean = false;
  skills$: Observable<SkillsQuery['skills']>;
  qlFilterService = new QLFilterBuilderService();
  experienceForm: ExperienceFormType = this.fb.group({
    experiences: this.fb.array([])
  });
  experienceQueryRef: QueryRef<ExperiencesByPersonQuery, Exact<{ where?: InputMaybe<ExperienceWhere> | undefined; }>> | undefined = undefined;

  constructor(private apollo: Apollo, private sGQL: SkillsGQL, private rGQL: ExperiencesByPersonGQL, private notification: NzNotificationService, private fb: FormBuilder) {
    this.skills$ = this.sGQL.watch().valueChanges.pipe(map((result) => result.data.skills));
  }

  ngOnInit(): void {
    this.refetch(this.person.experiences);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes || !changes.person || !changes.person.currentValue) return;
    this.refetch(changes.person.currentValue.experiences );
  }

  private refetch(experiences: Experience[]): void {
    const workExperiencesFormArray = this.experienceForm.get('experiences') as FormArray;
    const e = experiences.map(e => ({...e, skills: e.skills.map(s => s.id)}));
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
    this.submitted.emit(experience)
  }
  

  deleteExperience(idx: number, experience: AbstractControl<Experience,any>) {
    const id = experience.get("id")?.value;
    this.experiences.removeAt(idx);
    //if no Id was found (empty form) just remove it from layout
    if(!id) return;
    this.apollo.mutate({mutation: DeleteExperiencesDocument, variables:{where: {id: id}}}).subscribe(() => {
      this.notification.create(
        'success',
        'Success',
        `Experience was successfully deleted.`
        );
        this.submitted.emit(this.experienceForm);
      }, (error: any) => {
        this.notification.create(
          'error',
          'Error',
          `Error occured during edition of experience: ${error}`
          )
        });
    }

  cancelDelete(){
    this.confirmModal = false;
  }
}
