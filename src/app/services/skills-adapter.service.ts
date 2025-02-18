import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { Apollo, QueryRef } from 'apollo-angular';
import { merge, Observable, partition } from 'rxjs';
import {
  CreateSkillGroupsDocument,
  CreateSkillGroupsMutation,
  CreateSkillGroupsMutationVariables,
  CreateSkillsDocument,
  CreateSkillsMutation,
  CreateSkillsMutationVariables,
  DeleteSkillGroupsDocument,
  DeleteSkillGroupsMutation,
  DeleteSkillGroupsMutationVariables,
  DeleteSkillsDocument,
  DeleteSkillsMutation,
  DeleteSkillsMutationVariables,
  Exact,
  FindSkillDocument,
  FindSkillQuery,
  InputMaybe,
  SkillGroupCreateInput,
  SkillGroupsGQL,
  SkillGroupsQuery,
  SkillGroupsQueryVariables,
  SkillOptions,
  SkillsTreeGQL,
  SkillsTreeQuery,
  SkillsTreeQueryVariables,
  SkillsWithLimitGQL,
  SkillsWithLimitQuery,
  UpdateSkillDocument,
  UpdateSkillGroupsDocument,
  UpdateSkillGroupsMutationResponse,
  UpdateSkillGroupsMutationVariables,
  UpdateSkillMutation,
  UpdateSkillMutationVariables,
} from '../generated/graphql';
import { ApolloClientService } from './apollo-client.service';
import { map, mergeAll, single } from 'rxjs/operators';
import { QLFilterBuilderService } from './ql-filter-builder.service';
import { TypedDocumentNode } from '@apollo/client/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsAdapterService extends ApolloClientService {
  skillsQueryRef: QueryRef<
    SkillsWithLimitQuery,
    Exact<{ options?: InputMaybe<SkillOptions> | undefined }>
  >;
  skillsTreeQueryRef: QueryRef<SkillsTreeQuery, SkillsTreeQueryVariables>;

  private allSkillGroupsRef?: QueryRef<
    SkillGroupsQuery,
    SkillGroupsQueryVariables
  >;
  private lowestSkillGroupsRef?: QueryRef<
    SkillGroupsQuery,
    SkillGroupsQueryVariables
  >;

  constructor(
    apollo: Apollo,
    private ssGQl: SkillsWithLimitGQL,
    private skillsTreeGQl: SkillsTreeGQL,
    private skillGroupsGQl: SkillGroupsGQL,
    private qlFilterService: QLFilterBuilderService,
  ) {
    super(apollo);
    this.skillsQueryRef = this.ssGQl.watch(
      {},
      {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',
      },
    );

    this.skillsTreeQueryRef = this.skillsTreeGQl.watch(
      {
        where: {
          parentsAggregate: {
            count: 0,
          },
        },
      },
      {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',
      },
    );
  }

  getAllSkillGroups() {
    if (!this.allSkillGroupsRef) {
      this.allSkillGroupsRef = this.skillGroupsGQl.watch(
        {},
        {
          fetchPolicy: 'cache-and-network',
          errorPolicy: 'all',
        },
      );
    }

    return this.allSkillGroupsRef;
  }

  getLowestSkillGroups() {
    if (!this.lowestSkillGroupsRef) {
      this.lowestSkillGroupsRef = this.skillGroupsGQl.watch(
        {
          where: {
            children_SOME: {
              Skill: {
                NOT: { id: null },
              },
            },
          },
        },
        {
          fetchPolicy: 'cache-and-network',
          errorPolicy: 'all',
        },
      );
    }

    return this.lowestSkillGroupsRef;
  }

  getAllSkills() {
    return this.skillsQueryRef?.valueChanges.pipe(
      map(({ data }) => data.skills),
    );
  }

  findSkill(name: string): Observable<ApolloQueryResult<FindSkillQuery>> {
    return super._apollo.query<FindSkillQuery>({
      query: FindSkillDocument,
      variables: { where: { name } },
    });
  }

  checkSkillExists(name: string): Observable<boolean> {
    return this.findSkill(name).pipe(
      single(),
      map(
        (result: ApolloQueryResult<FindSkillQuery>) =>
          result.data.findSkill && result.data.findSkill.length > 0,
      ),
    );
  }

  createSkill(name: string) {
    return this.safeCreate<CreateSkillsMutation, CreateSkillsMutationVariables>(
      name,
      CreateSkillsDocument,
      { input: { name } },
    );
  }

  updateSkill(id: string, variables: UpdateSkillMutationVariables['update']) {
    return super._apollo.mutate<
      UpdateSkillMutation,
      UpdateSkillMutationVariables
    >({
      mutation: UpdateSkillDocument,
      variables: {
        where: { id },
        update: variables,
      },
    });
  }

  deleteSkill(id: string) {
    return super._apollo.mutate<
      DeleteSkillsMutation,
      DeleteSkillsMutationVariables
    >({
      mutation: DeleteSkillsDocument,
      variables: { where: { id } },
    });
  }

  createGroup(input: SkillGroupCreateInput) {
    return this.safeCreate<
      CreateSkillGroupsMutation,
      CreateSkillGroupsMutationVariables
    >(input.name, CreateSkillGroupsDocument, { input });
  }

  updateGroup(
    id: string | string[],
    variables: UpdateSkillGroupsMutationVariables['update'],
  ) {
    return super._apollo.mutate<
      UpdateSkillGroupsMutationResponse,
      UpdateSkillGroupsMutationVariables
    >({
      mutation: UpdateSkillGroupsDocument,
      variables: {
        where: Array.isArray(id) ? { id_IN: id } : { id },
        update: variables,
      },
    });
  }

  updateAssignmentToParents(
    type: 'Skill' | 'SkillGroup',
    skillId: string,
    oldAssignments: any[],
    newAssignments: any[],
  ) {
    const { connect, disconnect } =
      this.qlFilterService.toConnectAndDisconnectQuery(
        oldAssignments,
        newAssignments,
      );

    return merge(
      this.updateGroup(connect, {
        children: {
          [type]: {
            connect: this.qlFilterService.connectWhere('id', skillId),
          },
        },
      }),

      this.updateGroup(disconnect, {
        children: {
          [type]: {
            disconnect: this.qlFilterService.connectWhere('id', skillId),
          },
        },
      }),
    );
  }

  deleteGroup(id: string) {
    return super._apollo.mutate<
      DeleteSkillGroupsMutation,
      DeleteSkillGroupsMutationVariables
    >({
      mutation: DeleteSkillGroupsDocument,
      variables: { where: { id } },
    });
  }

  private safeCreate<T, V>(
    name: string,
    mutation: TypedDocumentNode<unknown, unknown>,
    variables: V,
  ) {
    const [trueObservable, falseObservable] = partition(
      this.checkSkillExists(name),
      Boolean,
    );

    return merge(
      trueObservable.pipe(
        map(() => {
          throw Error('');
        }),
        mergeAll(),
      ),
      falseObservable.pipe(
        map(() =>
          super._apollo.mutate<T, V>({
            mutation,
            variables,
          }),
        ),
        mergeAll(),
      ),
    );
  }
}
