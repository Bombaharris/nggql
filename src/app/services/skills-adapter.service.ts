import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { Apollo, MutationResult, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  CreateSkillsDocument,
  Exact,
  FindSkillDocument,
  FindSkillQuery,
  InputMaybe,
  SkillOptions,
  SkillPartFragment,
  SkillsDocument,
  SkillsQuery,
  SkillsWithLimitGQL,
  SkillsWithLimitQuery,
  SkillsWithLimitQueryVariables
} from '../generated/graphql';
import { ApolloClientService } from './apollo-client.service';

@Injectable({
  providedIn: 'root',
})
export class SkillsAdapterService extends ApolloClientService {
  skills!: SkillsWithLimitQuery['skills'];
  skillsQueryRef:
    | QueryRef<SkillsWithLimitQuery, Exact<{ options?: InputMaybe<SkillOptions> | undefined; }>>
    | undefined = undefined;
  editedSkill: SkillPartFragment | null = null;

  constructor(
    apollo: Apollo,
    private ssGQl: SkillsWithLimitGQL
  ) {
    super(apollo);
    this.skillsQueryRef = this.ssGQl.watch(
      {
        options: {
          limit: 10,
          offset: 0
        }
      },
      {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',
      },
    );
  }

  fetch(): Observable<SkillsQuery['skills']> {
    const data = super.fetchValues<SkillsQuery>(SkillsDocument, 'skills');
    data.subscribe((skills) => this.skills = skills);
    return data;
  }

  fetchMore(variables: SkillsWithLimitQueryVariables): void {
    this.skillsQueryRef?.fetchMore({ variables }).then((skills) => skills.data);
  }

  findSkill(name: string): Observable<ApolloQueryResult<FindSkillQuery>> {
    return super._apollo.query<FindSkillQuery>({ query: FindSkillDocument, variables: { where: { name_CONTAINS: name } } });
  }

  submitSkill<T>(
    name: string,
  ): Observable<MutationResult<T>> {
    const input: any = {
      name,
    };

    const mutation = CreateSkillsDocument;
    const variables = { input };
    // Create a new person
    return super._apollo.mutate<T>({
      mutation,
      variables,
    });
  }
}
