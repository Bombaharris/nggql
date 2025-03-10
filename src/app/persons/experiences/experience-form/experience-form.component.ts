import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';
import { SkillsAdapterService } from 'src/app/services/skills-adapter.service';
import {
  DefaultExperienceFragment,
  EducationOrCourseExperienceFragment,
  ExperienceType,
  ProjectExperienceFragment,
  SkillsQuery,
} from '../../../generated/graphql';
import { Observable } from 'rxjs';
import { Experience } from '../../../shared/models/experience';
import { ExperienceFormBuilder } from '../experience-form-builder/experience-form-builder';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExperienceFormBuilder],
})
export class ExperienceFormComponent implements OnChanges {
  @Input() experienceData: Experience[] = [];
  @Input() experienceType: ExperienceType = ExperienceType.Default;
  @Output() submitted = new EventEmitter<AbstractControl<any, any>>();
  @Output() deleted = new EventEmitter<string>();
  @Output() canceled = new EventEmitter();
  isLoading: boolean = false;
  confirmModal: boolean = false;
  skills: Observable<SkillsQuery['skills']>;

  constructor(
    private skillsAdapterService: SkillsAdapterService,
    public efb: ExperienceFormBuilder,
  ) {
    this.skills = this.skillsAdapterService.getAllSkills();
  }

  get experienceForm() {
    return this.efb.form;
  }

  get experiences(): FormArray {
    return this.experienceForm.get('experiences') as FormArray;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.experienceData.currentValue.length === changes.experienceData.previousValue?.length) return;

    this.experienceData.forEach(() => {
      this.efb.add().buildByType(this.experienceType);
    });
    this.efb.form.patchValue({ experiences: this.mapExperiencesToFormValues() });
  }

  addNewForm() {
    if (!this.experiences) return;
    this.efb.add().buildByType(this.experienceType);
  }

  submitNewExperience(experience: AbstractControl<any, any>): void {
    this.submitted.emit(experience);
  }

  deleteExperience(idx: number, experience: AbstractControl<Experience, any>) {
    const id = experience.get('id')?.value as string;
    if (!id) return;
    this.experiences.removeAt(idx);
    //if no Id was found (empty form) just remove it from layout
    this.deleted.emit(id);
  }

  cancelDelete() {
    this.confirmModal = false;
  }

  private mapExperiencesToFormValues() {
    if (this.experienceType === ExperienceType.Hobby) {
      return this.experienceData;
    }

    return (
      this.experienceData as (
        | DefaultExperienceFragment
        | ProjectExperienceFragment
        | EducationOrCourseExperienceFragment
        )[]
    )
      .map((experience) => ({
        ...experience,
        skills: experience.skills.map((s) => s.name),
      }))
      .sort((a, b) => {
        const dB = new Date(b.startedFrom).getTime();
        const dA = new Date(a.startedFrom).getTime();
        return dB - dA;
      });
  }

  protected readonly ExperienceType = ExperienceType;
}
