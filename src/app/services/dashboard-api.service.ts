import { Injectable } from '@angular/core';
import { DepartmentsQuery, Exact, InputMaybe, PersonWhere, PersonsWithAllGQL, PersonsWithAllQuery, ProjectsWithAllQuery, RolesQuery, SkillsQuery } from '../generated/graphql';
import { Apollo, MutationResult, QueryRef, TypedDocumentNode } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DocumentNode } from 'graphql';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {
  personsQueryRef: QueryRef<PersonsWithAllQuery, Exact<{ where?: InputMaybe<PersonWhere> | undefined; }>>;
  
  constructor(
    private pGQL: PersonsWithAllGQL,
    private apollo: Apollo,
  ) {
    this.personsQueryRef = this.pGQL.watch({}, {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    });
   }

   fetchValuesForSearchBar<T>(query: DocumentNode, key: string):  Observable<T[Exclude<keyof T, "__typename">]> {
    const k = key as keyof Omit<T, "__typename">;
    return this.apollo.watchQuery<T>({query}).valueChanges
      .pipe(
        map((result) => result.data[k]),
      );
   }

   removePerson<T>(id: string, document: DocumentNode): Observable<MutationResult<T>> {
    return this.apollo.mutate<T>({mutation: document, context:{where: {id}}});
   }

  }
