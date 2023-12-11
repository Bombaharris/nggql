import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exact, InputMaybe, PersonWhere, PersonsWithAllGQL, PersonsWithAllQuery } from '../generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class ApolloClientService {
  
  constructor(
    private apollo: Apollo,
  ) {
  }

   fetchValues<T>(query: DocumentNode, key: string):  Observable<T[Exclude<keyof T, "__typename">]> {
    const k = key as keyof Omit<T, "__typename">;
    return this.apollo.watchQuery<T>({query}).valueChanges
      .pipe(
        map((result) => result.data[k])
      );
   }

  }
