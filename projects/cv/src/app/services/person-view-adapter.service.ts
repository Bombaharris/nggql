import { Injectable } from '@angular/core';
import {
  CvQueryGQL,
  CvQueryQuery,
  CvQueryQueryVariables,
  PersonWhere,
} from '../../../../../src/app/generated/graphql';
import { QueryRef } from 'apollo-angular';
import { map, mergeMap, scan } from 'rxjs/operators';

const MS_IN_YEAR = 1000 * 3600 * 24 * 365;

@Injectable({
  providedIn: 'root',
})
export class PersonViewAdapterService {
  private cvQueryRef: QueryRef<CvQueryQuery, CvQueryQueryVariables>;

  constructor(private cvQuery: CvQueryGQL) {
    this.cvQueryRef = this.cvQuery.watch(
      {},
      {
        fetchPolicy: 'standby',
        errorPolicy: 'all',
      },
    );
  }

  async fetch(id?: PersonWhere['id']) {
    return await this.cvQueryRef.setVariables({ where: { id } });
  }

  get person$() {
    return this.cvQueryRef.valueChanges.pipe(map(({ data }) => data.people[0]));
  }

  get skillGroups$() {
    return this.person$.pipe(
      mergeMap((person) => person?.skills),
      scan(
        (acc, current) => {
          const key = current.groups[0].name ?? 'unknown';
          const currentValues = acc[key];

          if (currentValues) {
            currentValues.push(current);
          }

          return {
            ...acc,
            [key]: currentValues ?? [current],
          };
        },
        {} as Record<string, CvQueryQuery['people'][number]['skills']>,
      ),
      map((value) =>
        Object.entries(value)
          .map(([key, values]) => ({ key, values }))
          .flat(),
      ),
    );
  }

  get experienceCount$() {
    return this.person$.pipe(
      map((person) =>
        person.experience.reduce((acc, exp) => {
          const startedFrom = new Date(exp.startedFrom).valueOf();
          const gainedAt = exp.gainedAt
            ? new Date(exp.gainedAt).valueOf()
            : new Date().valueOf();

          return acc + (gainedAt - startedFrom) / MS_IN_YEAR;
        }, 0),
      ),
    );
  }
}
