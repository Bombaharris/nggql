import { Component, OnInit } from '@angular/core';
import { ContentSectionComponent } from './content-section/content-section.component';
import { DottedListComponent } from './dotted-list/dotted-list.component';
import { PersonViewAdapterService } from '../services/person-view-adapter.service';
import {
  AsyncPipe,
  formatDate,
  NgForOf,
  NgIf,
  UpperCasePipe,
} from '@angular/common';
import { CvQueryQuery } from '../../../../../src/app/generated/graphql';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { Size } from '../shared/types/size';
import { CvDateRangePipe } from '../../../../../src/app/shared/pipes/cv-date';
import {
  ExperienceView,
  ExperienceViewBuilder,
} from './builders/experience-view-builder';
import { SplitPipe } from '../shared/pipes/split-pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv-view',
  standalone: true,
  imports: [
    ContentSectionComponent,
    DottedListComponent,
    AsyncPipe,
    NgForOf,
    NgIf,
    SplitPipe,
    UpperCasePipe,
  ],
  templateUrl: './cv-view.component.html',
  styleUrl: './cv-view.component.scss',
  providers: [CvDateRangePipe, ExperienceViewBuilder],
})
export class CvViewComponent implements OnInit {
  person?: CvQueryQuery['people'][number];
  skills$: Observable<{ key: string; values: string[] }[]>;
  experience: ExperienceView[] = [];
  experienceCount: number = 0;
  role = '';
  isLoading = true;
  private receivedObservablesCount = new BehaviorSubject(0);

  constructor(
    public personViewAdapter: PersonViewAdapterService,
    cvDateRange: CvDateRangePipe,
    experienceViewBuilder: ExperienceViewBuilder,
    private route: ActivatedRoute,
  ) {
    this.receivedObservablesCount.subscribe((count) => {
      if (count >= 3) {
        this.isLoading = false;
        this.receivedObservablesCount.next(0);
      }
    });

    this.personViewAdapter.person$.subscribe((person) => {
      this.person = person;

      if (person.roles.length > 0) {
        this.role = person.roles[0].name;
      }

      experienceViewBuilder
        .add('WIODĄCE PROJEKTY', person.projectExperience)
        .title((item) => item.name)
        .subtitle(
          (item) =>
            `${item.role}, ${cvDateRange.transform([
              item.startedFrom,
              item.gainedAt,
            ])}`,
        )
        .description()
        .skills();

      experienceViewBuilder
        .add('DOŚWIADCZENIE ZAWODOWE', person.experience)
        .title((item) => item.role)
        .subtitle(
          (item) =>
            `${item.institution}, ${cvDateRange.transform([
              item.startedFrom,
              item.gainedAt,
            ])}`,
        )
        .description()
        .skills();

      experienceViewBuilder
        .add('EDUKACJA', person.education)
        .title((item) => item.name)
        .subtitle(
          (item) =>
            `${item.institution}, ${cvDateRange.transform([
              item.startedFrom,
              item.gainedAt,
            ])}`,
        );

      experienceViewBuilder
        .add('KURSY', person.courses)
        .title((item) => `${item.name} - ${item.institution}`)
        .subtitle((item) => formatDate(item.startedFrom, 'yyyy', 'en-US'))
        .description();

      this.experience = experienceViewBuilder.build();
      this.receivedObservablesCount.next(
        this.receivedObservablesCount.value + 1,
      );
    });

    this.skills$ = this.personViewAdapter.skillGroups$.pipe(
      map((skillGroup) =>
        skillGroup.map((item) => ({
          ...item,
          values: item.values.map((value) => value.name),
        })),
      ),
      tap(() =>
        this.receivedObservablesCount.next(
          this.receivedObservablesCount.value + 1,
        ),
      ),
    );

    this.personViewAdapter.experienceCount$.subscribe((count) => {
      this.experienceCount = Math.round(count);
      this.receivedObservablesCount.next(
        this.receivedObservablesCount.value + 1,
      );
    });
  }

  async ngOnInit(): Promise<void> {
    this.route.params.pipe(pluck('id')).subscribe(async (id) => {
      await this.personViewAdapter.fetch(id);
    });
  }

  get languages() {
    return this.person?.languages.map((l) => l.name) ?? [];
  }

  protected readonly Size = Size;
}
