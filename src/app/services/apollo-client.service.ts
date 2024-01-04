import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApolloClientService {
  
  constructor(
    private apollo: Apollo,
  ) {
  }

  get _apollo() {
    return this.apollo;
  }
   fetchValues<T>(query: DocumentNode, key: string):  Observable<T[Exclude<keyof T, "__typename">]> {
    const k = key as keyof Omit<T, "__typename">;
    return this.apollo.watchQuery<T>({query}).valueChanges
      .pipe(
        map((result) => result.data[k])
      );
   }

  }
