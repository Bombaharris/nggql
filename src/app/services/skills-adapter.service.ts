import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Apollo, MutationResult, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  CreateSkillsDocument,
  Exact,
  InputMaybe,
  SkillOptions,
  SkillPartFragment,
  SkillsWithLimitDocument,
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
          offset: 1
        }
      },
      {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',
      },
    );
  }

  fetch(): Observable<SkillsWithLimitQuery['skills']> {
    const data = super.fetchValues<SkillsWithLimitQuery>(SkillsWithLimitDocument, 'skills');
    data.subscribe((skills) => this.skills = skills);
    return data;
  }

  fetchMore(variables: SkillsWithLimitQueryVariables): void {
    this.skillsQueryRef?.fetchMore({ variables }).then((skills) => skills.data);
  }

  submitSkill<T>(
    $event: AbstractControl<any, any>,
  ): Observable<MutationResult<T>> {
    const skill = $event;
    const input: any = {
      name: skill.get('name')?.value,
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
