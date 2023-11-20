import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo, QueryRef } from 'apollo-angular';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateExperiencesGQL, DeleteExperiencesDocument, EditExperiencesDocument, Exact, Experience, ExperienceDataFragment, ExperienceWhere,  ExperiencesByPersonGQL, ExperiencesByPersonQuery, InputMaybe, Person, SkillsGQL, SkillsQuery } from '../../../generated/graphql';
import { QLFilterBuilderService } from 'src/app/services/ql-filter-builder.service';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnDestroy, OnChanges {
  @Input() person!: Person | any;
  confirmModal: boolean = false;
  experiencesResponse: Experience[] | undefined = undefined;
  @Output() submitted = new EventEmitter();
  @Output() canceled = new EventEmitter();
  skills$: Observable<SkillsQuery['skills']>;
  qlFilterService = new QLFilterBuilderService();
  experienceForm: FormGroup<{
    experiences: FormArray<FormControl>;
  }> = this.fb.group({
    experiences: this.fb.array([])
  });
  isLoading: boolean = false;
  queryRef: QueryRef<ExperiencesByPersonQuery, Exact<{ where?: InputMaybe<ExperienceWhere> | undefined; }>> | undefined = undefined;
  readonly subscription: Subscription = new Subscription();

  constructor(private apollo: Apollo, private sGQL: SkillsGQL, private ceGQL: CreateExperiencesGQL, private rGQL: ExperiencesByPersonGQL, private notification: NzNotificationService, private fb: FormBuilder) {
    this.skills$ = this.sGQL.watch().valueChanges.pipe(map((result) => result.data.skills));
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes || !changes.person || !changes.person.currentValue) return;

    this.queryRef = this.rGQL.watch({where: {person: {id: changes.person.currentValue.id}}}, {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    });
    this.setWorkExperiences(changes.person.currentValue.experiences );
  
    this.subscription.add(
      this.queryRef?.valueChanges.subscribe(({ data, loading, errors }) => {
        if(loading) {
          this.isLoading = loading;
        }
        if(errors) {
          errors.map(e => console.error(e));
          this.isLoading = false;
        }
        if(data && data.experiences) {
          this.experienceForm.patchValue({experiences: data.experiences.map((e: ExperienceDataFragment) => ({...e, skills: e.skills.map(s => s.id)}))});
          this.isLoading = false;
        }
      })
    );
    
  }

  ngOnInit(): void {
    if(!this.person || !this.person.id) return;
    this.queryRef = this.rGQL.watch({where: {person:{id: this.person?.id ?? ''}}}, {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    });
    this.setWorkExperiences(this.person.experiences);
    this.subscription.add(
      this.queryRef?.valueChanges.subscribe(({ data, loading, errors }) => {
        if(loading) {
          this.isLoading = loading;
        }
        if(errors) {
          errors.map(e => console.error(e));
          this.isLoading = false;
        }
        if(data && data.experiences) {
          this.experienceForm.patchValue({experiences: data.experiences.map((e: ExperienceDataFragment) => ({...e, skills: e.skills.map(s => s.id)}))});
          this.isLoading = false;
        }
      })
    );
    
  }

  setWorkExperiences(experiences: Experience[]): void {
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
        this.submitted.emit();
      }, (error: any) => {
        this.notification.create(
          'error',
          'Error',
          `Error occured during edition of experience: ${error}`
          )
        });
    }
  
  submitExperience(experience: AbstractControl<Experience,Experience>){
    let input = {
      person: {id:this.person.id},
      name: experience.get('name')?.value ?? '',
      description: experience.get('description')?.value ?? '',
      startedFrom: experience.get('startedFrom')?.value ?? '',
      gainedAt: experience.get('gainedAt')?.value ?? '',
      skills: experience.get('skills')!.value ?? ''
    }
    const experienceExists = this.experiencesResponse?.find(e => e.id === experience.get("id")?.value);
    if(experienceExists) {
      this.apollo.mutate({mutation: EditExperiencesDocument, variables: {
        where: {
          person: {
            id: this.person.id
          },
        id: experience.get("id")!.value
      },
      update: {
        name: input.name,
        description: input.description,
        startedFrom: input.startedFrom,
        gainedAt: input.gainedAt,
        skills: [{
          disconnect: this.qlFilterService.connectWhere('id_NOT_IN', '') as any,
          connect: this.qlFilterService.connectWhere('id', input.skills ?? '') as any
        }],
      }
    }}).subscribe(({}) => {
      this.submitted.emit();
      this.notification.create(
        'success',
        'Success',
        `Experience for ${input.name} was successfully edited.`
      );
    }, (error: any) => {
      this.notification.create(
        'error',
        'Error',
        `Error occured during edition of experience: ${error}`
      )
    });
    return;
    }
    
    this.ceGQL.mutate({
      input: [
        {
          name: experience.get('name')?.value ?? '',
          description: experience.get('description')?.value ?? '',
          startedFrom: experience.get('startedFrom')?.value ?? '',
          gainedAt: experience.get('gainedAt')?.value ?? '',
          skills: {
            connect: this.qlFilterService.connectWhere('id', experience.get('skills')?.value ?? '') as any
          },
          person: {
            "connect": {
              "where": {
                "node": {
                  "id": this.person.id
                }
              }
            }
          },
        }
      ]
    }).subscribe(() => {
      this.submitted.emit();
      this.notification.create(
        'success',
        'Success',
        `Experience for ${input.name} was successfully added.`
      );
    }, (error: any) => {
      this.notification.create(
        'error',
        'Error',
        `${error}`
      )
    });
    
  }

  cancelDelete(){
    this.confirmModal = false;
  }

    ngOnDestroy():void {
      this.subscription.unsubscribe();
    }
}
