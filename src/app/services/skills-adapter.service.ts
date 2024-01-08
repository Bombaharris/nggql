import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Apollo, MutationResult, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  CreateSkillsDocument,
  Exact,
  SkillPartFragment,
  SkillsDocument,
  SkillsGQL,
  SkillsQuery,
} from '../generated/graphql';
import { ApolloClientService } from './apollo-client.service';

@Injectable({
  providedIn: 'root',
})
export class SkillsAdapterService extends ApolloClientService {
  skills!: SkillsQuery['skills'];
  skillsQueryRef:
    | QueryRef<SkillsQuery, Exact<{ [key: string]: never }>>
    | undefined = undefined;
  editedSkill: SkillPartFragment | null = null;

  constructor(
    apollo: Apollo,
    private sGQL: SkillsGQL,
  ) {
    super(apollo);
    this.skillsQueryRef = this.sGQL.watch(
      {},
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
