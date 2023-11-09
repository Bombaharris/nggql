import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date, represented as a 'yyyy-mm-dd' string */
  Date: any;
  /** A duration, represented as an ISO 8601 duration string */
  Duration: any;
};

export type CreateDepartmentsMutationResponse = {
  __typename?: 'CreateDepartmentsMutationResponse';
  departments: Array<Department>;
  info: CreateInfo;
};

export type CreateExperiencesMutationResponse = {
  __typename?: 'CreateExperiencesMutationResponse';
  experiences: Array<Experience>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreatePeopleMutationResponse = {
  __typename?: 'CreatePeopleMutationResponse';
  info: CreateInfo;
  people: Array<Person>;
};

export type CreatePersonsToProjectsMutationResponse = {
  __typename?: 'CreatePersonsToProjectsMutationResponse';
  info: CreateInfo;
  personsToProjects: Array<PersonsToProject>;
};

export type CreateProjectsMutationResponse = {
  __typename?: 'CreateProjectsMutationResponse';
  info: CreateInfo;
  projects: Array<Project>;
};

export type CreateQueryPsMutationResponse = {
  __typename?: 'CreateQueryPSMutationResponse';
  info: CreateInfo;
  queryPS: Array<QueryP>;
};

export type CreateRatesMutationResponse = {
  __typename?: 'CreateRatesMutationResponse';
  info: CreateInfo;
  rates: Array<Rate>;
};

export type CreateRolesMutationResponse = {
  __typename?: 'CreateRolesMutationResponse';
  info: CreateInfo;
  roles: Array<Role>;
};

export type CreateScoresMutationResponse = {
  __typename?: 'CreateScoresMutationResponse';
  info: CreateInfo;
  scores: Array<Score>;
};

export type CreateSkillsMutationResponse = {
  __typename?: 'CreateSkillsMutationResponse';
  info: CreateInfo;
  skills: Array<Skill>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type Department = {
  __typename?: 'Department';
  id: Scalars['ID'];
  manager?: Maybe<Person>;
  managerAggregate?: Maybe<DepartmentPersonManagerAggregationSelection>;
  managerConnection: DepartmentManagerConnection;
  name: Scalars['String'];
  persons: Array<Person>;
  personsAggregate?: Maybe<DepartmentPersonPersonsAggregationSelection>;
  personsConnection: DepartmentPersonsConnection;
};


export type DepartmentManagerArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type DepartmentManagerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonWhere>;
};


export type DepartmentManagerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DepartmentManagerConnectionSort>>;
  where?: InputMaybe<DepartmentManagerConnectionWhere>;
};


export type DepartmentPersonsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type DepartmentPersonsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonWhere>;
};


export type DepartmentPersonsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DepartmentPersonsConnectionSort>>;
  where?: InputMaybe<DepartmentPersonsConnectionWhere>;
};

export type DepartmentAggregateSelection = {
  __typename?: 'DepartmentAggregateSelection';
  count: Scalars['Int'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type DepartmentConnectInput = {
  manager?: InputMaybe<DepartmentManagerConnectFieldInput>;
  persons?: InputMaybe<Array<DepartmentPersonsConnectFieldInput>>;
};

export type DepartmentConnectOrCreateInput = {
  manager?: InputMaybe<DepartmentManagerConnectOrCreateFieldInput>;
  persons?: InputMaybe<Array<DepartmentPersonsConnectOrCreateFieldInput>>;
};

export type DepartmentConnectOrCreateWhere = {
  node: DepartmentUniqueWhere;
};

export type DepartmentConnectWhere = {
  node: DepartmentWhere;
};

export type DepartmentCreateInput = {
  manager?: InputMaybe<DepartmentManagerFieldInput>;
  name: Scalars['String'];
  persons?: InputMaybe<DepartmentPersonsFieldInput>;
};

export type DepartmentDeleteInput = {
  manager?: InputMaybe<DepartmentManagerDeleteFieldInput>;
  persons?: InputMaybe<Array<DepartmentPersonsDeleteFieldInput>>;
};

export type DepartmentDisconnectInput = {
  manager?: InputMaybe<DepartmentManagerDisconnectFieldInput>;
  persons?: InputMaybe<Array<DepartmentPersonsDisconnectFieldInput>>;
};

export type DepartmentEdge = {
  __typename?: 'DepartmentEdge';
  cursor: Scalars['String'];
  node: Department;
};

export type DepartmentManagerAggregateInput = {
  AND?: InputMaybe<Array<DepartmentManagerAggregateInput>>;
  NOT?: InputMaybe<DepartmentManagerAggregateInput>;
  OR?: InputMaybe<Array<DepartmentManagerAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DepartmentManagerNodeAggregationWhereInput>;
};

export type DepartmentManagerConnectFieldInput = {
  connect?: InputMaybe<PersonConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<PersonConnectWhere>;
};

export type DepartmentManagerConnectOrCreateFieldInput = {
  onCreate: DepartmentManagerConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type DepartmentManagerConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
};

export type DepartmentManagerConnection = {
  __typename?: 'DepartmentManagerConnection';
  edges: Array<DepartmentManagerRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DepartmentManagerConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type DepartmentManagerConnectionWhere = {
  AND?: InputMaybe<Array<DepartmentManagerConnectionWhere>>;
  NOT?: InputMaybe<DepartmentManagerConnectionWhere>;
  OR?: InputMaybe<Array<DepartmentManagerConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
};

export type DepartmentManagerCreateFieldInput = {
  node: PersonCreateInput;
};

export type DepartmentManagerDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<DepartmentManagerConnectionWhere>;
};

export type DepartmentManagerDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<DepartmentManagerConnectionWhere>;
};

export type DepartmentManagerFieldInput = {
  connect?: InputMaybe<DepartmentManagerConnectFieldInput>;
  connectOrCreate?: InputMaybe<DepartmentManagerConnectOrCreateFieldInput>;
  create?: InputMaybe<DepartmentManagerCreateFieldInput>;
};

export type DepartmentManagerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DepartmentManagerNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DepartmentManagerNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DepartmentManagerNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  surname_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  surname_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type DepartmentManagerRelationship = {
  __typename?: 'DepartmentManagerRelationship';
  cursor: Scalars['String'];
  node: Person;
};

export type DepartmentManagerUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type DepartmentManagerUpdateFieldInput = {
  connect?: InputMaybe<DepartmentManagerConnectFieldInput>;
  connectOrCreate?: InputMaybe<DepartmentManagerConnectOrCreateFieldInput>;
  create?: InputMaybe<DepartmentManagerCreateFieldInput>;
  delete?: InputMaybe<DepartmentManagerDeleteFieldInput>;
  disconnect?: InputMaybe<DepartmentManagerDisconnectFieldInput>;
  update?: InputMaybe<DepartmentManagerUpdateConnectionInput>;
  where?: InputMaybe<DepartmentManagerConnectionWhere>;
};

export type DepartmentOnCreateInput = {
  name: Scalars['String'];
};

export type DepartmentOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more DepartmentSort objects to sort Departments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DepartmentSort>>;
};

export type DepartmentPersonManagerAggregationSelection = {
  __typename?: 'DepartmentPersonManagerAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DepartmentPersonManagerNodeAggregateSelection>;
};

export type DepartmentPersonManagerNodeAggregateSelection = {
  __typename?: 'DepartmentPersonManagerNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  surname: StringAggregateSelectionNonNullable;
};

export type DepartmentPersonPersonsAggregationSelection = {
  __typename?: 'DepartmentPersonPersonsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DepartmentPersonPersonsNodeAggregateSelection>;
};

export type DepartmentPersonPersonsNodeAggregateSelection = {
  __typename?: 'DepartmentPersonPersonsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  surname: StringAggregateSelectionNonNullable;
};

export type DepartmentPersonsAggregateInput = {
  AND?: InputMaybe<Array<DepartmentPersonsAggregateInput>>;
  NOT?: InputMaybe<DepartmentPersonsAggregateInput>;
  OR?: InputMaybe<Array<DepartmentPersonsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DepartmentPersonsNodeAggregationWhereInput>;
};

export type DepartmentPersonsConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<PersonConnectWhere>;
};

export type DepartmentPersonsConnectOrCreateFieldInput = {
  onCreate: DepartmentPersonsConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type DepartmentPersonsConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
};

export type DepartmentPersonsConnection = {
  __typename?: 'DepartmentPersonsConnection';
  edges: Array<DepartmentPersonsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DepartmentPersonsConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type DepartmentPersonsConnectionWhere = {
  AND?: InputMaybe<Array<DepartmentPersonsConnectionWhere>>;
  NOT?: InputMaybe<DepartmentPersonsConnectionWhere>;
  OR?: InputMaybe<Array<DepartmentPersonsConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
};

export type DepartmentPersonsCreateFieldInput = {
  node: PersonCreateInput;
};

export type DepartmentPersonsDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<DepartmentPersonsConnectionWhere>;
};

export type DepartmentPersonsDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<DepartmentPersonsConnectionWhere>;
};

export type DepartmentPersonsFieldInput = {
  connect?: InputMaybe<Array<DepartmentPersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DepartmentPersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DepartmentPersonsCreateFieldInput>>;
};

export type DepartmentPersonsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DepartmentPersonsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DepartmentPersonsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DepartmentPersonsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  surname_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  surname_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type DepartmentPersonsRelationship = {
  __typename?: 'DepartmentPersonsRelationship';
  cursor: Scalars['String'];
  node: Person;
};

export type DepartmentPersonsUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type DepartmentPersonsUpdateFieldInput = {
  connect?: InputMaybe<Array<DepartmentPersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DepartmentPersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DepartmentPersonsCreateFieldInput>>;
  delete?: InputMaybe<Array<DepartmentPersonsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DepartmentPersonsDisconnectFieldInput>>;
  update?: InputMaybe<DepartmentPersonsUpdateConnectionInput>;
  where?: InputMaybe<DepartmentPersonsConnectionWhere>;
};

export type DepartmentRelationInput = {
  manager?: InputMaybe<DepartmentManagerCreateFieldInput>;
  persons?: InputMaybe<Array<DepartmentPersonsCreateFieldInput>>;
};

/** Fields to sort Departments by. The order in which sorts are applied is not guaranteed when specifying many fields in one DepartmentSort object. */
export type DepartmentSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type DepartmentUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type DepartmentUpdateInput = {
  manager?: InputMaybe<DepartmentManagerUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  persons?: InputMaybe<Array<DepartmentPersonsUpdateFieldInput>>;
};

export type DepartmentWhere = {
  AND?: InputMaybe<Array<DepartmentWhere>>;
  NOT?: InputMaybe<DepartmentWhere>;
  OR?: InputMaybe<Array<DepartmentWhere>>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  manager?: InputMaybe<PersonWhere>;
  managerAggregate?: InputMaybe<DepartmentManagerAggregateInput>;
  managerConnection?: InputMaybe<DepartmentManagerConnectionWhere>;
  managerConnection_NOT?: InputMaybe<DepartmentManagerConnectionWhere>;
  manager_NOT?: InputMaybe<PersonWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  personsAggregate?: InputMaybe<DepartmentPersonsAggregateInput>;
  /** Return Departments where all of the related DepartmentPersonsConnections match this filter */
  personsConnection_ALL?: InputMaybe<DepartmentPersonsConnectionWhere>;
  /** Return Departments where none of the related DepartmentPersonsConnections match this filter */
  personsConnection_NONE?: InputMaybe<DepartmentPersonsConnectionWhere>;
  /** Return Departments where one of the related DepartmentPersonsConnections match this filter */
  personsConnection_SINGLE?: InputMaybe<DepartmentPersonsConnectionWhere>;
  /** Return Departments where some of the related DepartmentPersonsConnections match this filter */
  personsConnection_SOME?: InputMaybe<DepartmentPersonsConnectionWhere>;
  /** Return Departments where all of the related People match this filter */
  persons_ALL?: InputMaybe<PersonWhere>;
  /** Return Departments where none of the related People match this filter */
  persons_NONE?: InputMaybe<PersonWhere>;
  /** Return Departments where one of the related People match this filter */
  persons_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Departments where some of the related People match this filter */
  persons_SOME?: InputMaybe<PersonWhere>;
};

export type DepartmentsConnection = {
  __typename?: 'DepartmentsConnection';
  edges: Array<DepartmentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DurationAggregateSelectionNonNullable = {
  __typename?: 'DurationAggregateSelectionNonNullable';
  max: Scalars['Duration'];
  min: Scalars['Duration'];
};

export type Experience = {
  __typename?: 'Experience';
  description: Scalars['String'];
  gainedAt: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
  person?: Maybe<Person>;
  personAggregate?: Maybe<ExperiencePersonPersonAggregationSelection>;
  personConnection: ExperiencePersonConnection;
  skills: Array<Skill>;
  skillsAggregate?: Maybe<ExperienceSkillSkillsAggregationSelection>;
  skillsConnection: ExperienceSkillsConnection;
  startedFrom: Scalars['Date'];
};


export type ExperiencePersonArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type ExperiencePersonAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonWhere>;
};


export type ExperiencePersonConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ExperiencePersonConnectionSort>>;
  where?: InputMaybe<ExperiencePersonConnectionWhere>;
};


export type ExperienceSkillsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<SkillOptions>;
  where?: InputMaybe<SkillWhere>;
};


export type ExperienceSkillsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SkillWhere>;
};


export type ExperienceSkillsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ExperienceSkillsConnectionSort>>;
  where?: InputMaybe<ExperienceSkillsConnectionWhere>;
};

export type ExperienceAggregateSelection = {
  __typename?: 'ExperienceAggregateSelection';
  count: Scalars['Int'];
  description: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ExperienceConnectInput = {
  person?: InputMaybe<ExperiencePersonConnectFieldInput>;
  skills?: InputMaybe<Array<ExperienceSkillsConnectFieldInput>>;
};

export type ExperienceConnectOrCreateInput = {
  person?: InputMaybe<ExperiencePersonConnectOrCreateFieldInput>;
  skills?: InputMaybe<Array<ExperienceSkillsConnectOrCreateFieldInput>>;
};

export type ExperienceConnectOrCreateWhere = {
  node: ExperienceUniqueWhere;
};

export type ExperienceConnectWhere = {
  node: ExperienceWhere;
};

export type ExperienceCreateInput = {
  description: Scalars['String'];
  gainedAt: Scalars['Date'];
  name: Scalars['String'];
  person?: InputMaybe<ExperiencePersonFieldInput>;
  skills?: InputMaybe<ExperienceSkillsFieldInput>;
  startedFrom: Scalars['Date'];
};

export type ExperienceDeleteInput = {
  person?: InputMaybe<ExperiencePersonDeleteFieldInput>;
  skills?: InputMaybe<Array<ExperienceSkillsDeleteFieldInput>>;
};

export type ExperienceDisconnectInput = {
  person?: InputMaybe<ExperiencePersonDisconnectFieldInput>;
  skills?: InputMaybe<Array<ExperienceSkillsDisconnectFieldInput>>;
};

export type ExperienceEdge = {
  __typename?: 'ExperienceEdge';
  cursor: Scalars['String'];
  node: Experience;
};

export type ExperienceOnCreateInput = {
  description: Scalars['String'];
  gainedAt: Scalars['Date'];
  name: Scalars['String'];
  startedFrom: Scalars['Date'];
};

export type ExperienceOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ExperienceSort objects to sort Experiences by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ExperienceSort>>;
};

export type ExperiencePersonAggregateInput = {
  AND?: InputMaybe<Array<ExperiencePersonAggregateInput>>;
  NOT?: InputMaybe<ExperiencePersonAggregateInput>;
  OR?: InputMaybe<Array<ExperiencePersonAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ExperiencePersonNodeAggregationWhereInput>;
};

export type ExperiencePersonConnectFieldInput = {
  connect?: InputMaybe<PersonConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<PersonConnectWhere>;
};

export type ExperiencePersonConnectOrCreateFieldInput = {
  onCreate: ExperiencePersonConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type ExperiencePersonConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
};

export type ExperiencePersonConnection = {
  __typename?: 'ExperiencePersonConnection';
  edges: Array<ExperiencePersonRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExperiencePersonConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type ExperiencePersonConnectionWhere = {
  AND?: InputMaybe<Array<ExperiencePersonConnectionWhere>>;
  NOT?: InputMaybe<ExperiencePersonConnectionWhere>;
  OR?: InputMaybe<Array<ExperiencePersonConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
};

export type ExperiencePersonCreateFieldInput = {
  node: PersonCreateInput;
};

export type ExperiencePersonDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<ExperiencePersonConnectionWhere>;
};

export type ExperiencePersonDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<ExperiencePersonConnectionWhere>;
};

export type ExperiencePersonFieldInput = {
  connect?: InputMaybe<ExperiencePersonConnectFieldInput>;
  connectOrCreate?: InputMaybe<ExperiencePersonConnectOrCreateFieldInput>;
  create?: InputMaybe<ExperiencePersonCreateFieldInput>;
};

export type ExperiencePersonNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ExperiencePersonNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ExperiencePersonNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ExperiencePersonNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  surname_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  surname_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type ExperiencePersonPersonAggregationSelection = {
  __typename?: 'ExperiencePersonPersonAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ExperiencePersonPersonNodeAggregateSelection>;
};

export type ExperiencePersonPersonNodeAggregateSelection = {
  __typename?: 'ExperiencePersonPersonNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  surname: StringAggregateSelectionNonNullable;
};

export type ExperiencePersonRelationship = {
  __typename?: 'ExperiencePersonRelationship';
  cursor: Scalars['String'];
  node: Person;
};

export type ExperiencePersonUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type ExperiencePersonUpdateFieldInput = {
  connect?: InputMaybe<ExperiencePersonConnectFieldInput>;
  connectOrCreate?: InputMaybe<ExperiencePersonConnectOrCreateFieldInput>;
  create?: InputMaybe<ExperiencePersonCreateFieldInput>;
  delete?: InputMaybe<ExperiencePersonDeleteFieldInput>;
  disconnect?: InputMaybe<ExperiencePersonDisconnectFieldInput>;
  update?: InputMaybe<ExperiencePersonUpdateConnectionInput>;
  where?: InputMaybe<ExperiencePersonConnectionWhere>;
};

export type ExperienceRelationInput = {
  person?: InputMaybe<ExperiencePersonCreateFieldInput>;
  skills?: InputMaybe<Array<ExperienceSkillsCreateFieldInput>>;
};

export type ExperienceSkillSkillsAggregationSelection = {
  __typename?: 'ExperienceSkillSkillsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ExperienceSkillSkillsNodeAggregateSelection>;
};

export type ExperienceSkillSkillsNodeAggregateSelection = {
  __typename?: 'ExperienceSkillSkillsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ExperienceSkillsAggregateInput = {
  AND?: InputMaybe<Array<ExperienceSkillsAggregateInput>>;
  NOT?: InputMaybe<ExperienceSkillsAggregateInput>;
  OR?: InputMaybe<Array<ExperienceSkillsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ExperienceSkillsNodeAggregationWhereInput>;
};

export type ExperienceSkillsConnectFieldInput = {
  connect?: InputMaybe<Array<SkillConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<SkillConnectWhere>;
};

export type ExperienceSkillsConnectOrCreateFieldInput = {
  onCreate: ExperienceSkillsConnectOrCreateFieldInputOnCreate;
  where: SkillConnectOrCreateWhere;
};

export type ExperienceSkillsConnectOrCreateFieldInputOnCreate = {
  node: SkillOnCreateInput;
};

export type ExperienceSkillsConnection = {
  __typename?: 'ExperienceSkillsConnection';
  edges: Array<ExperienceSkillsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExperienceSkillsConnectionSort = {
  node?: InputMaybe<SkillSort>;
};

export type ExperienceSkillsConnectionWhere = {
  AND?: InputMaybe<Array<ExperienceSkillsConnectionWhere>>;
  NOT?: InputMaybe<ExperienceSkillsConnectionWhere>;
  OR?: InputMaybe<Array<ExperienceSkillsConnectionWhere>>;
  node?: InputMaybe<SkillWhere>;
};

export type ExperienceSkillsCreateFieldInput = {
  node: SkillCreateInput;
};

export type ExperienceSkillsDeleteFieldInput = {
  delete?: InputMaybe<SkillDeleteInput>;
  where?: InputMaybe<ExperienceSkillsConnectionWhere>;
};

export type ExperienceSkillsDisconnectFieldInput = {
  disconnect?: InputMaybe<SkillDisconnectInput>;
  where?: InputMaybe<ExperienceSkillsConnectionWhere>;
};

export type ExperienceSkillsFieldInput = {
  connect?: InputMaybe<Array<ExperienceSkillsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ExperienceSkillsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ExperienceSkillsCreateFieldInput>>;
};

export type ExperienceSkillsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ExperienceSkillsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ExperienceSkillsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ExperienceSkillsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type ExperienceSkillsRelationship = {
  __typename?: 'ExperienceSkillsRelationship';
  cursor: Scalars['String'];
  node: Skill;
};

export type ExperienceSkillsUpdateConnectionInput = {
  node?: InputMaybe<SkillUpdateInput>;
};

export type ExperienceSkillsUpdateFieldInput = {
  connect?: InputMaybe<Array<ExperienceSkillsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ExperienceSkillsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ExperienceSkillsCreateFieldInput>>;
  delete?: InputMaybe<Array<ExperienceSkillsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ExperienceSkillsDisconnectFieldInput>>;
  update?: InputMaybe<ExperienceSkillsUpdateConnectionInput>;
  where?: InputMaybe<ExperienceSkillsConnectionWhere>;
};

/** Fields to sort Experiences by. The order in which sorts are applied is not guaranteed when specifying many fields in one ExperienceSort object. */
export type ExperienceSort = {
  description?: InputMaybe<SortDirection>;
  gainedAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  startedFrom?: InputMaybe<SortDirection>;
};

export type ExperienceUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ExperienceUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  gainedAt?: InputMaybe<Scalars['Date']>;
  name?: InputMaybe<Scalars['String']>;
  person?: InputMaybe<ExperiencePersonUpdateFieldInput>;
  skills?: InputMaybe<Array<ExperienceSkillsUpdateFieldInput>>;
  startedFrom?: InputMaybe<Scalars['Date']>;
};

export type ExperienceWhere = {
  AND?: InputMaybe<Array<ExperienceWhere>>;
  NOT?: InputMaybe<ExperienceWhere>;
  OR?: InputMaybe<Array<ExperienceWhere>>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<Scalars['String']>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  gainedAt?: InputMaybe<Scalars['Date']>;
  gainedAt_GT?: InputMaybe<Scalars['Date']>;
  gainedAt_GTE?: InputMaybe<Scalars['Date']>;
  gainedAt_IN?: InputMaybe<Array<Scalars['Date']>>;
  gainedAt_LT?: InputMaybe<Scalars['Date']>;
  gainedAt_LTE?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  person?: InputMaybe<PersonWhere>;
  personAggregate?: InputMaybe<ExperiencePersonAggregateInput>;
  personConnection?: InputMaybe<ExperiencePersonConnectionWhere>;
  personConnection_NOT?: InputMaybe<ExperiencePersonConnectionWhere>;
  person_NOT?: InputMaybe<PersonWhere>;
  skillsAggregate?: InputMaybe<ExperienceSkillsAggregateInput>;
  /** Return Experiences where all of the related ExperienceSkillsConnections match this filter */
  skillsConnection_ALL?: InputMaybe<ExperienceSkillsConnectionWhere>;
  /** Return Experiences where none of the related ExperienceSkillsConnections match this filter */
  skillsConnection_NONE?: InputMaybe<ExperienceSkillsConnectionWhere>;
  /** Return Experiences where one of the related ExperienceSkillsConnections match this filter */
  skillsConnection_SINGLE?: InputMaybe<ExperienceSkillsConnectionWhere>;
  /** Return Experiences where some of the related ExperienceSkillsConnections match this filter */
  skillsConnection_SOME?: InputMaybe<ExperienceSkillsConnectionWhere>;
  /** Return Experiences where all of the related Skills match this filter */
  skills_ALL?: InputMaybe<SkillWhere>;
  /** Return Experiences where none of the related Skills match this filter */
  skills_NONE?: InputMaybe<SkillWhere>;
  /** Return Experiences where one of the related Skills match this filter */
  skills_SINGLE?: InputMaybe<SkillWhere>;
  /** Return Experiences where some of the related Skills match this filter */
  skills_SOME?: InputMaybe<SkillWhere>;
  startedFrom?: InputMaybe<Scalars['Date']>;
  startedFrom_GT?: InputMaybe<Scalars['Date']>;
  startedFrom_GTE?: InputMaybe<Scalars['Date']>;
  startedFrom_IN?: InputMaybe<Array<Scalars['Date']>>;
  startedFrom_LT?: InputMaybe<Scalars['Date']>;
  startedFrom_LTE?: InputMaybe<Scalars['Date']>;
};

export type ExperiencesConnection = {
  __typename?: 'ExperiencesConnection';
  edges: Array<ExperienceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FloatAggregateSelectionNonNullable = {
  __typename?: 'FloatAggregateSelectionNonNullable';
  average: Scalars['Float'];
  max: Scalars['Float'];
  min: Scalars['Float'];
  sum: Scalars['Float'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID'];
  shortest: Scalars['ID'];
};

export type IntAggregateSelectionNullable = {
  __typename?: 'IntAggregateSelectionNullable';
  average?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDepartments: CreateDepartmentsMutationResponse;
  createExperiences: CreateExperiencesMutationResponse;
  createPeople: CreatePeopleMutationResponse;
  createPersonsToProjects: CreatePersonsToProjectsMutationResponse;
  createProjects: CreateProjectsMutationResponse;
  createQueryPS: CreateQueryPsMutationResponse;
  createRates: CreateRatesMutationResponse;
  createRoles: CreateRolesMutationResponse;
  createScores: CreateScoresMutationResponse;
  createSkills: CreateSkillsMutationResponse;
  deleteDepartments: DeleteInfo;
  deleteExperiences: DeleteInfo;
  deletePeople: DeleteInfo;
  deletePersonsToProjects: DeleteInfo;
  deleteProjects: DeleteInfo;
  deleteQueryPS: DeleteInfo;
  deleteRates: DeleteInfo;
  deleteRoles: DeleteInfo;
  deleteScores: DeleteInfo;
  deleteSkills: DeleteInfo;
  updateDepartments: UpdateDepartmentsMutationResponse;
  updateExperiences: UpdateExperiencesMutationResponse;
  updatePeople: UpdatePeopleMutationResponse;
  updatePersonsToProjects: UpdatePersonsToProjectsMutationResponse;
  updateProjects: UpdateProjectsMutationResponse;
  updateQueryPS: UpdateQueryPsMutationResponse;
  updateRates: UpdateRatesMutationResponse;
  updateRoles: UpdateRolesMutationResponse;
  updateScores: UpdateScoresMutationResponse;
  updateSkills: UpdateSkillsMutationResponse;
};


export type MutationCreateDepartmentsArgs = {
  input: Array<DepartmentCreateInput>;
};


export type MutationCreateExperiencesArgs = {
  input: Array<ExperienceCreateInput>;
};


export type MutationCreatePeopleArgs = {
  input: Array<PersonCreateInput>;
};


export type MutationCreatePersonsToProjectsArgs = {
  input: Array<PersonsToProjectCreateInput>;
};


export type MutationCreateProjectsArgs = {
  input: Array<ProjectCreateInput>;
};


export type MutationCreateQueryPsArgs = {
  input: Array<QueryPCreateInput>;
};


export type MutationCreateRatesArgs = {
  input: Array<RateCreateInput>;
};


export type MutationCreateRolesArgs = {
  input: Array<RoleCreateInput>;
};


export type MutationCreateScoresArgs = {
  input: Array<ScoreCreateInput>;
};


export type MutationCreateSkillsArgs = {
  input: Array<SkillCreateInput>;
};


export type MutationDeleteDepartmentsArgs = {
  delete?: InputMaybe<DepartmentDeleteInput>;
  where?: InputMaybe<DepartmentWhere>;
};


export type MutationDeleteExperiencesArgs = {
  delete?: InputMaybe<ExperienceDeleteInput>;
  where?: InputMaybe<ExperienceWhere>;
};


export type MutationDeletePeopleArgs = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<PersonWhere>;
};


export type MutationDeletePersonsToProjectsArgs = {
  where?: InputMaybe<PersonsToProjectWhere>;
};


export type MutationDeleteProjectsArgs = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ProjectWhere>;
};


export type MutationDeleteQueryPsArgs = {
  where?: InputMaybe<QueryPWhere>;
};


export type MutationDeleteRatesArgs = {
  delete?: InputMaybe<RateDeleteInput>;
  where?: InputMaybe<RateWhere>;
};


export type MutationDeleteRolesArgs = {
  where?: InputMaybe<RoleWhere>;
};


export type MutationDeleteScoresArgs = {
  where?: InputMaybe<ScoreWhere>;
};


export type MutationDeleteSkillsArgs = {
  delete?: InputMaybe<SkillDeleteInput>;
  where?: InputMaybe<SkillWhere>;
};


export type MutationUpdateDepartmentsArgs = {
  connect?: InputMaybe<DepartmentConnectInput>;
  connectOrCreate?: InputMaybe<DepartmentConnectOrCreateInput>;
  create?: InputMaybe<DepartmentRelationInput>;
  delete?: InputMaybe<DepartmentDeleteInput>;
  disconnect?: InputMaybe<DepartmentDisconnectInput>;
  update?: InputMaybe<DepartmentUpdateInput>;
  where?: InputMaybe<DepartmentWhere>;
};


export type MutationUpdateExperiencesArgs = {
  connect?: InputMaybe<ExperienceConnectInput>;
  connectOrCreate?: InputMaybe<ExperienceConnectOrCreateInput>;
  create?: InputMaybe<ExperienceRelationInput>;
  delete?: InputMaybe<ExperienceDeleteInput>;
  disconnect?: InputMaybe<ExperienceDisconnectInput>;
  update?: InputMaybe<ExperienceUpdateInput>;
  where?: InputMaybe<ExperienceWhere>;
};


export type MutationUpdatePeopleArgs = {
  connect?: InputMaybe<PersonConnectInput>;
  connectOrCreate?: InputMaybe<PersonConnectOrCreateInput>;
  create?: InputMaybe<PersonRelationInput>;
  delete?: InputMaybe<PersonDeleteInput>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
  update?: InputMaybe<PersonUpdateInput>;
  where?: InputMaybe<PersonWhere>;
};


export type MutationUpdatePersonsToProjectsArgs = {
  update?: InputMaybe<PersonsToProjectUpdateInput>;
  where?: InputMaybe<PersonsToProjectWhere>;
};


export type MutationUpdateProjectsArgs = {
  connect?: InputMaybe<ProjectConnectInput>;
  connectOrCreate?: InputMaybe<ProjectConnectOrCreateInput>;
  create?: InputMaybe<ProjectRelationInput>;
  delete?: InputMaybe<ProjectDeleteInput>;
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  update?: InputMaybe<ProjectUpdateInput>;
  where?: InputMaybe<ProjectWhere>;
};


export type MutationUpdateQueryPsArgs = {
  update?: InputMaybe<QueryPUpdateInput>;
  where?: InputMaybe<QueryPWhere>;
};


export type MutationUpdateRatesArgs = {
  connect?: InputMaybe<RateConnectInput>;
  connectOrCreate?: InputMaybe<RateConnectOrCreateInput>;
  create?: InputMaybe<RateRelationInput>;
  delete?: InputMaybe<RateDeleteInput>;
  disconnect?: InputMaybe<RateDisconnectInput>;
  update?: InputMaybe<RateUpdateInput>;
  where?: InputMaybe<RateWhere>;
};


export type MutationUpdateRolesArgs = {
  update?: InputMaybe<RoleUpdateInput>;
  where?: InputMaybe<RoleWhere>;
};


export type MutationUpdateScoresArgs = {
  update?: InputMaybe<ScoreUpdateInput>;
  where?: InputMaybe<ScoreWhere>;
};


export type MutationUpdateSkillsArgs = {
  connect?: InputMaybe<SkillConnectInput>;
  connectOrCreate?: InputMaybe<SkillConnectOrCreateInput>;
  create?: InputMaybe<SkillRelationInput>;
  delete?: InputMaybe<SkillDeleteInput>;
  disconnect?: InputMaybe<SkillDisconnectInput>;
  update?: InputMaybe<SkillUpdateInput>;
  where?: InputMaybe<SkillWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PeopleConnection = {
  __typename?: 'PeopleConnection';
  edges: Array<PersonEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Person = {
  __typename?: 'Person';
  birthday?: Maybe<Scalars['Date']>;
  departments: Array<Department>;
  departmentsAggregate?: Maybe<PersonDepartmentDepartmentsAggregationSelection>;
  departmentsConnection: PersonDepartmentsConnection;
  experiences: Array<Experience>;
  experiencesAggregate?: Maybe<PersonExperienceExperiencesAggregationSelection>;
  experiencesConnection: PersonExperiencesConnection;
  id: Scalars['ID'];
  location?: Maybe<Point>;
  name: Scalars['String'];
  projects: Array<Project>;
  projectsAggregate?: Maybe<PersonProjectProjectsAggregationSelection>;
  projectsConnection: PersonProjectsConnection;
  rates: Array<Rate>;
  ratesAggregate?: Maybe<PersonRateRatesAggregationSelection>;
  ratesConnection: PersonRatesConnection;
  roles: Array<Role>;
  rolesAggregate?: Maybe<PersonRoleRolesAggregationSelection>;
  rolesConnection: PersonRolesConnection;
  seniority?: Maybe<Seniority>;
  skills: Array<Skill>;
  skillsAggregate?: Maybe<PersonSkillSkillsAggregationSelection>;
  skillsConnection: PersonSkillsConnection;
  surname: Scalars['String'];
};


export type PersonDepartmentsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<DepartmentOptions>;
  where?: InputMaybe<DepartmentWhere>;
};


export type PersonDepartmentsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DepartmentWhere>;
};


export type PersonDepartmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonDepartmentsConnectionSort>>;
  where?: InputMaybe<PersonDepartmentsConnectionWhere>;
};


export type PersonExperiencesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ExperienceOptions>;
  where?: InputMaybe<ExperienceWhere>;
};


export type PersonExperiencesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ExperienceWhere>;
};


export type PersonExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonExperiencesConnectionSort>>;
  where?: InputMaybe<PersonExperiencesConnectionWhere>;
};


export type PersonProjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type PersonProjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ProjectWhere>;
};


export type PersonProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonProjectsConnectionSort>>;
  where?: InputMaybe<PersonProjectsConnectionWhere>;
};


export type PersonRatesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RateOptions>;
  where?: InputMaybe<RateWhere>;
};


export type PersonRatesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RateWhere>;
};


export type PersonRatesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonRatesConnectionSort>>;
  where?: InputMaybe<PersonRatesConnectionWhere>;
};


export type PersonRolesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RoleOptions>;
  where?: InputMaybe<RoleWhere>;
};


export type PersonRolesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RoleWhere>;
};


export type PersonRolesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonRolesConnectionSort>>;
  where?: InputMaybe<PersonRolesConnectionWhere>;
};


export type PersonSkillsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<SkillOptions>;
  where?: InputMaybe<SkillWhere>;
};


export type PersonSkillsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SkillWhere>;
};


export type PersonSkillsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonSkillsConnectionSort>>;
  where?: InputMaybe<PersonSkillsConnectionWhere>;
};

export type PersonAggregateSelection = {
  __typename?: 'PersonAggregateSelection';
  count: Scalars['Int'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  surname: StringAggregateSelectionNonNullable;
};

export type PersonConnectInput = {
  departments?: InputMaybe<Array<PersonDepartmentsConnectFieldInput>>;
  experiences?: InputMaybe<Array<PersonExperiencesConnectFieldInput>>;
  projects?: InputMaybe<Array<PersonProjectsConnectFieldInput>>;
  rates?: InputMaybe<Array<PersonRatesConnectFieldInput>>;
  roles?: InputMaybe<Array<PersonRolesConnectFieldInput>>;
  skills?: InputMaybe<Array<PersonSkillsConnectFieldInput>>;
};

export type PersonConnectOrCreateInput = {
  departments?: InputMaybe<Array<PersonDepartmentsConnectOrCreateFieldInput>>;
  experiences?: InputMaybe<Array<PersonExperiencesConnectOrCreateFieldInput>>;
  projects?: InputMaybe<Array<PersonProjectsConnectOrCreateFieldInput>>;
  rates?: InputMaybe<Array<PersonRatesConnectOrCreateFieldInput>>;
  roles?: InputMaybe<Array<PersonRolesConnectOrCreateFieldInput>>;
  skills?: InputMaybe<Array<PersonSkillsConnectOrCreateFieldInput>>;
};

export type PersonConnectOrCreateWhere = {
  node: PersonUniqueWhere;
};

export type PersonConnectWhere = {
  node: PersonWhere;
};

export type PersonCreateInput = {
  birthday?: InputMaybe<Scalars['Date']>;
  departments?: InputMaybe<PersonDepartmentsFieldInput>;
  experiences?: InputMaybe<PersonExperiencesFieldInput>;
  location?: InputMaybe<PointInput>;
  name: Scalars['String'];
  projects?: InputMaybe<PersonProjectsFieldInput>;
  rates?: InputMaybe<PersonRatesFieldInput>;
  roles?: InputMaybe<PersonRolesFieldInput>;
  seniority?: InputMaybe<Seniority>;
  skills?: InputMaybe<PersonSkillsFieldInput>;
  surname: Scalars['String'];
};

export type PersonDeleteInput = {
  departments?: InputMaybe<Array<PersonDepartmentsDeleteFieldInput>>;
  experiences?: InputMaybe<Array<PersonExperiencesDeleteFieldInput>>;
  projects?: InputMaybe<Array<PersonProjectsDeleteFieldInput>>;
  rates?: InputMaybe<Array<PersonRatesDeleteFieldInput>>;
  roles?: InputMaybe<Array<PersonRolesDeleteFieldInput>>;
  skills?: InputMaybe<Array<PersonSkillsDeleteFieldInput>>;
};

export type PersonDepartmentDepartmentsAggregationSelection = {
  __typename?: 'PersonDepartmentDepartmentsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonDepartmentDepartmentsNodeAggregateSelection>;
};

export type PersonDepartmentDepartmentsNodeAggregateSelection = {
  __typename?: 'PersonDepartmentDepartmentsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type PersonDepartmentsAggregateInput = {
  AND?: InputMaybe<Array<PersonDepartmentsAggregateInput>>;
  NOT?: InputMaybe<PersonDepartmentsAggregateInput>;
  OR?: InputMaybe<Array<PersonDepartmentsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonDepartmentsNodeAggregationWhereInput>;
};

export type PersonDepartmentsConnectFieldInput = {
  connect?: InputMaybe<Array<DepartmentConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<DepartmentConnectWhere>;
};

export type PersonDepartmentsConnectOrCreateFieldInput = {
  onCreate: PersonDepartmentsConnectOrCreateFieldInputOnCreate;
  where: DepartmentConnectOrCreateWhere;
};

export type PersonDepartmentsConnectOrCreateFieldInputOnCreate = {
  node: DepartmentOnCreateInput;
};

export type PersonDepartmentsConnection = {
  __typename?: 'PersonDepartmentsConnection';
  edges: Array<PersonDepartmentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonDepartmentsConnectionSort = {
  node?: InputMaybe<DepartmentSort>;
};

export type PersonDepartmentsConnectionWhere = {
  AND?: InputMaybe<Array<PersonDepartmentsConnectionWhere>>;
  NOT?: InputMaybe<PersonDepartmentsConnectionWhere>;
  OR?: InputMaybe<Array<PersonDepartmentsConnectionWhere>>;
  node?: InputMaybe<DepartmentWhere>;
};

export type PersonDepartmentsCreateFieldInput = {
  node: DepartmentCreateInput;
};

export type PersonDepartmentsDeleteFieldInput = {
  delete?: InputMaybe<DepartmentDeleteInput>;
  where?: InputMaybe<PersonDepartmentsConnectionWhere>;
};

export type PersonDepartmentsDisconnectFieldInput = {
  disconnect?: InputMaybe<DepartmentDisconnectInput>;
  where?: InputMaybe<PersonDepartmentsConnectionWhere>;
};

export type PersonDepartmentsFieldInput = {
  connect?: InputMaybe<Array<PersonDepartmentsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonDepartmentsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonDepartmentsCreateFieldInput>>;
};

export type PersonDepartmentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonDepartmentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonDepartmentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PersonDepartmentsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type PersonDepartmentsRelationship = {
  __typename?: 'PersonDepartmentsRelationship';
  cursor: Scalars['String'];
  node: Department;
};

export type PersonDepartmentsUpdateConnectionInput = {
  node?: InputMaybe<DepartmentUpdateInput>;
};

export type PersonDepartmentsUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonDepartmentsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonDepartmentsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonDepartmentsCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonDepartmentsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonDepartmentsDisconnectFieldInput>>;
  update?: InputMaybe<PersonDepartmentsUpdateConnectionInput>;
  where?: InputMaybe<PersonDepartmentsConnectionWhere>;
};

export type PersonDisconnectInput = {
  departments?: InputMaybe<Array<PersonDepartmentsDisconnectFieldInput>>;
  experiences?: InputMaybe<Array<PersonExperiencesDisconnectFieldInput>>;
  projects?: InputMaybe<Array<PersonProjectsDisconnectFieldInput>>;
  rates?: InputMaybe<Array<PersonRatesDisconnectFieldInput>>;
  roles?: InputMaybe<Array<PersonRolesDisconnectFieldInput>>;
  skills?: InputMaybe<Array<PersonSkillsDisconnectFieldInput>>;
};

export type PersonEdge = {
  __typename?: 'PersonEdge';
  cursor: Scalars['String'];
  node: Person;
};

export type PersonExperienceExperiencesAggregationSelection = {
  __typename?: 'PersonExperienceExperiencesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonExperienceExperiencesNodeAggregateSelection>;
};

export type PersonExperienceExperiencesNodeAggregateSelection = {
  __typename?: 'PersonExperienceExperiencesNodeAggregateSelection';
  description: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type PersonExperiencesAggregateInput = {
  AND?: InputMaybe<Array<PersonExperiencesAggregateInput>>;
  NOT?: InputMaybe<PersonExperiencesAggregateInput>;
  OR?: InputMaybe<Array<PersonExperiencesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonExperiencesNodeAggregationWhereInput>;
};

export type PersonExperiencesConnectFieldInput = {
  connect?: InputMaybe<Array<ExperienceConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<ExperienceConnectWhere>;
};

export type PersonExperiencesConnectOrCreateFieldInput = {
  onCreate: PersonExperiencesConnectOrCreateFieldInputOnCreate;
  where: ExperienceConnectOrCreateWhere;
};

export type PersonExperiencesConnectOrCreateFieldInputOnCreate = {
  node: ExperienceOnCreateInput;
};

export type PersonExperiencesConnection = {
  __typename?: 'PersonExperiencesConnection';
  edges: Array<PersonExperiencesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonExperiencesConnectionSort = {
  node?: InputMaybe<ExperienceSort>;
};

export type PersonExperiencesConnectionWhere = {
  AND?: InputMaybe<Array<PersonExperiencesConnectionWhere>>;
  NOT?: InputMaybe<PersonExperiencesConnectionWhere>;
  OR?: InputMaybe<Array<PersonExperiencesConnectionWhere>>;
  node?: InputMaybe<ExperienceWhere>;
};

export type PersonExperiencesCreateFieldInput = {
  node: ExperienceCreateInput;
};

export type PersonExperiencesDeleteFieldInput = {
  delete?: InputMaybe<ExperienceDeleteInput>;
  where?: InputMaybe<PersonExperiencesConnectionWhere>;
};

export type PersonExperiencesDisconnectFieldInput = {
  disconnect?: InputMaybe<ExperienceDisconnectInput>;
  where?: InputMaybe<PersonExperiencesConnectionWhere>;
};

export type PersonExperiencesFieldInput = {
  connect?: InputMaybe<Array<PersonExperiencesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonExperiencesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonExperiencesCreateFieldInput>>;
};

export type PersonExperiencesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonExperiencesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonExperiencesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PersonExperiencesNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type PersonExperiencesRelationship = {
  __typename?: 'PersonExperiencesRelationship';
  cursor: Scalars['String'];
  node: Experience;
};

export type PersonExperiencesUpdateConnectionInput = {
  node?: InputMaybe<ExperienceUpdateInput>;
};

export type PersonExperiencesUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonExperiencesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonExperiencesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonExperiencesCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonExperiencesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonExperiencesDisconnectFieldInput>>;
  update?: InputMaybe<PersonExperiencesUpdateConnectionInput>;
  where?: InputMaybe<PersonExperiencesConnectionWhere>;
};

export type PersonOnCreateInput = {
  birthday?: InputMaybe<Scalars['Date']>;
  location?: InputMaybe<PointInput>;
  name: Scalars['String'];
  seniority?: InputMaybe<Seniority>;
  surname: Scalars['String'];
};

export type PersonOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more PersonSort objects to sort People by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PersonSort>>;
};

export type PersonProjectProjectsAggregationSelection = {
  __typename?: 'PersonProjectProjectsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonProjectProjectsNodeAggregateSelection>;
};

export type PersonProjectProjectsNodeAggregateSelection = {
  __typename?: 'PersonProjectProjectsNodeAggregateSelection';
  duration: DurationAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type PersonProjectsAggregateInput = {
  AND?: InputMaybe<Array<PersonProjectsAggregateInput>>;
  NOT?: InputMaybe<PersonProjectsAggregateInput>;
  OR?: InputMaybe<Array<PersonProjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonProjectsNodeAggregationWhereInput>;
};

export type PersonProjectsConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type PersonProjectsConnectOrCreateFieldInput = {
  onCreate: PersonProjectsConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type PersonProjectsConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type PersonProjectsConnection = {
  __typename?: 'PersonProjectsConnection';
  edges: Array<PersonProjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonProjectsConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type PersonProjectsConnectionWhere = {
  AND?: InputMaybe<Array<PersonProjectsConnectionWhere>>;
  NOT?: InputMaybe<PersonProjectsConnectionWhere>;
  OR?: InputMaybe<Array<PersonProjectsConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
};

export type PersonProjectsCreateFieldInput = {
  node: ProjectCreateInput;
};

export type PersonProjectsDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<PersonProjectsConnectionWhere>;
};

export type PersonProjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<PersonProjectsConnectionWhere>;
};

export type PersonProjectsFieldInput = {
  connect?: InputMaybe<Array<PersonProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonProjectsCreateFieldInput>>;
};

export type PersonProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonProjectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonProjectsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PersonProjectsNodeAggregationWhereInput>>;
  duration_AVERAGE_EQUAL?: InputMaybe<Scalars['Duration']>;
  duration_AVERAGE_GT?: InputMaybe<Scalars['Duration']>;
  duration_AVERAGE_GTE?: InputMaybe<Scalars['Duration']>;
  duration_AVERAGE_LT?: InputMaybe<Scalars['Duration']>;
  duration_AVERAGE_LTE?: InputMaybe<Scalars['Duration']>;
  duration_MAX_EQUAL?: InputMaybe<Scalars['Duration']>;
  duration_MAX_GT?: InputMaybe<Scalars['Duration']>;
  duration_MAX_GTE?: InputMaybe<Scalars['Duration']>;
  duration_MAX_LT?: InputMaybe<Scalars['Duration']>;
  duration_MAX_LTE?: InputMaybe<Scalars['Duration']>;
  duration_MIN_EQUAL?: InputMaybe<Scalars['Duration']>;
  duration_MIN_GT?: InputMaybe<Scalars['Duration']>;
  duration_MIN_GTE?: InputMaybe<Scalars['Duration']>;
  duration_MIN_LT?: InputMaybe<Scalars['Duration']>;
  duration_MIN_LTE?: InputMaybe<Scalars['Duration']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type PersonProjectsRelationship = {
  __typename?: 'PersonProjectsRelationship';
  cursor: Scalars['String'];
  node: Project;
};

export type PersonProjectsUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type PersonProjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonProjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonProjectsDisconnectFieldInput>>;
  update?: InputMaybe<PersonProjectsUpdateConnectionInput>;
  where?: InputMaybe<PersonProjectsConnectionWhere>;
};

export type PersonRateRatesAggregationSelection = {
  __typename?: 'PersonRateRatesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonRateRatesNodeAggregateSelection>;
};

export type PersonRateRatesNodeAggregateSelection = {
  __typename?: 'PersonRateRatesNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  value: FloatAggregateSelectionNonNullable;
};

export type PersonRatesAggregateInput = {
  AND?: InputMaybe<Array<PersonRatesAggregateInput>>;
  NOT?: InputMaybe<PersonRatesAggregateInput>;
  OR?: InputMaybe<Array<PersonRatesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonRatesNodeAggregationWhereInput>;
};

export type PersonRatesConnectFieldInput = {
  connect?: InputMaybe<Array<RateConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<RateConnectWhere>;
};

export type PersonRatesConnectOrCreateFieldInput = {
  onCreate: PersonRatesConnectOrCreateFieldInputOnCreate;
  where: RateConnectOrCreateWhere;
};

export type PersonRatesConnectOrCreateFieldInputOnCreate = {
  node: RateOnCreateInput;
};

export type PersonRatesConnection = {
  __typename?: 'PersonRatesConnection';
  edges: Array<PersonRatesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonRatesConnectionSort = {
  node?: InputMaybe<RateSort>;
};

export type PersonRatesConnectionWhere = {
  AND?: InputMaybe<Array<PersonRatesConnectionWhere>>;
  NOT?: InputMaybe<PersonRatesConnectionWhere>;
  OR?: InputMaybe<Array<PersonRatesConnectionWhere>>;
  node?: InputMaybe<RateWhere>;
};

export type PersonRatesCreateFieldInput = {
  node: RateCreateInput;
};

export type PersonRatesDeleteFieldInput = {
  delete?: InputMaybe<RateDeleteInput>;
  where?: InputMaybe<PersonRatesConnectionWhere>;
};

export type PersonRatesDisconnectFieldInput = {
  disconnect?: InputMaybe<RateDisconnectInput>;
  where?: InputMaybe<PersonRatesConnectionWhere>;
};

export type PersonRatesFieldInput = {
  connect?: InputMaybe<Array<PersonRatesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonRatesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonRatesCreateFieldInput>>;
};

export type PersonRatesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonRatesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonRatesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PersonRatesNodeAggregationWhereInput>>;
  value_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  value_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  value_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  value_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  value_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  value_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  value_MAX_GT?: InputMaybe<Scalars['Float']>;
  value_MAX_GTE?: InputMaybe<Scalars['Float']>;
  value_MAX_LT?: InputMaybe<Scalars['Float']>;
  value_MAX_LTE?: InputMaybe<Scalars['Float']>;
  value_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  value_MIN_GT?: InputMaybe<Scalars['Float']>;
  value_MIN_GTE?: InputMaybe<Scalars['Float']>;
  value_MIN_LT?: InputMaybe<Scalars['Float']>;
  value_MIN_LTE?: InputMaybe<Scalars['Float']>;
  value_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  value_SUM_GT?: InputMaybe<Scalars['Float']>;
  value_SUM_GTE?: InputMaybe<Scalars['Float']>;
  value_SUM_LT?: InputMaybe<Scalars['Float']>;
  value_SUM_LTE?: InputMaybe<Scalars['Float']>;
};

export type PersonRatesRelationship = {
  __typename?: 'PersonRatesRelationship';
  cursor: Scalars['String'];
  node: Rate;
};

export type PersonRatesUpdateConnectionInput = {
  node?: InputMaybe<RateUpdateInput>;
};

export type PersonRatesUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonRatesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonRatesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonRatesCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonRatesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonRatesDisconnectFieldInput>>;
  update?: InputMaybe<PersonRatesUpdateConnectionInput>;
  where?: InputMaybe<PersonRatesConnectionWhere>;
};

export type PersonRelationInput = {
  departments?: InputMaybe<Array<PersonDepartmentsCreateFieldInput>>;
  experiences?: InputMaybe<Array<PersonExperiencesCreateFieldInput>>;
  projects?: InputMaybe<Array<PersonProjectsCreateFieldInput>>;
  rates?: InputMaybe<Array<PersonRatesCreateFieldInput>>;
  roles?: InputMaybe<Array<PersonRolesCreateFieldInput>>;
  skills?: InputMaybe<Array<PersonSkillsCreateFieldInput>>;
};

export type PersonRoleRolesAggregationSelection = {
  __typename?: 'PersonRoleRolesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonRoleRolesNodeAggregateSelection>;
};

export type PersonRoleRolesNodeAggregateSelection = {
  __typename?: 'PersonRoleRolesNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type PersonRolesAggregateInput = {
  AND?: InputMaybe<Array<PersonRolesAggregateInput>>;
  NOT?: InputMaybe<PersonRolesAggregateInput>;
  OR?: InputMaybe<Array<PersonRolesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonRolesNodeAggregationWhereInput>;
};

export type PersonRolesConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<RoleConnectWhere>;
};

export type PersonRolesConnectOrCreateFieldInput = {
  onCreate: PersonRolesConnectOrCreateFieldInputOnCreate;
  where: RoleConnectOrCreateWhere;
};

export type PersonRolesConnectOrCreateFieldInputOnCreate = {
  node: RoleOnCreateInput;
};

export type PersonRolesConnection = {
  __typename?: 'PersonRolesConnection';
  edges: Array<PersonRolesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonRolesConnectionSort = {
  node?: InputMaybe<RoleSort>;
};

export type PersonRolesConnectionWhere = {
  AND?: InputMaybe<Array<PersonRolesConnectionWhere>>;
  NOT?: InputMaybe<PersonRolesConnectionWhere>;
  OR?: InputMaybe<Array<PersonRolesConnectionWhere>>;
  node?: InputMaybe<RoleWhere>;
};

export type PersonRolesCreateFieldInput = {
  node: RoleCreateInput;
};

export type PersonRolesDeleteFieldInput = {
  where?: InputMaybe<PersonRolesConnectionWhere>;
};

export type PersonRolesDisconnectFieldInput = {
  where?: InputMaybe<PersonRolesConnectionWhere>;
};

export type PersonRolesFieldInput = {
  connect?: InputMaybe<Array<PersonRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonRolesCreateFieldInput>>;
};

export type PersonRolesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonRolesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonRolesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PersonRolesNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type PersonRolesRelationship = {
  __typename?: 'PersonRolesRelationship';
  cursor: Scalars['String'];
  node: Role;
};

export type PersonRolesUpdateConnectionInput = {
  node?: InputMaybe<RoleUpdateInput>;
};

export type PersonRolesUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonRolesCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonRolesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonRolesDisconnectFieldInput>>;
  update?: InputMaybe<PersonRolesUpdateConnectionInput>;
  where?: InputMaybe<PersonRolesConnectionWhere>;
};

export type PersonSkillSkillsAggregationSelection = {
  __typename?: 'PersonSkillSkillsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonSkillSkillsNodeAggregateSelection>;
};

export type PersonSkillSkillsNodeAggregateSelection = {
  __typename?: 'PersonSkillSkillsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type PersonSkillsAggregateInput = {
  AND?: InputMaybe<Array<PersonSkillsAggregateInput>>;
  NOT?: InputMaybe<PersonSkillsAggregateInput>;
  OR?: InputMaybe<Array<PersonSkillsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonSkillsNodeAggregationWhereInput>;
};

export type PersonSkillsConnectFieldInput = {
  connect?: InputMaybe<Array<SkillConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<SkillConnectWhere>;
};

export type PersonSkillsConnectOrCreateFieldInput = {
  onCreate: PersonSkillsConnectOrCreateFieldInputOnCreate;
  where: SkillConnectOrCreateWhere;
};

export type PersonSkillsConnectOrCreateFieldInputOnCreate = {
  node: SkillOnCreateInput;
};

export type PersonSkillsConnection = {
  __typename?: 'PersonSkillsConnection';
  edges: Array<PersonSkillsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonSkillsConnectionSort = {
  node?: InputMaybe<SkillSort>;
};

export type PersonSkillsConnectionWhere = {
  AND?: InputMaybe<Array<PersonSkillsConnectionWhere>>;
  NOT?: InputMaybe<PersonSkillsConnectionWhere>;
  OR?: InputMaybe<Array<PersonSkillsConnectionWhere>>;
  node?: InputMaybe<SkillWhere>;
};

export type PersonSkillsCreateFieldInput = {
  node: SkillCreateInput;
};

export type PersonSkillsDeleteFieldInput = {
  delete?: InputMaybe<SkillDeleteInput>;
  where?: InputMaybe<PersonSkillsConnectionWhere>;
};

export type PersonSkillsDisconnectFieldInput = {
  disconnect?: InputMaybe<SkillDisconnectInput>;
  where?: InputMaybe<PersonSkillsConnectionWhere>;
};

export type PersonSkillsFieldInput = {
  connect?: InputMaybe<Array<PersonSkillsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonSkillsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonSkillsCreateFieldInput>>;
};

export type PersonSkillsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonSkillsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonSkillsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PersonSkillsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type PersonSkillsRelationship = {
  __typename?: 'PersonSkillsRelationship';
  cursor: Scalars['String'];
  node: Skill;
};

export type PersonSkillsUpdateConnectionInput = {
  node?: InputMaybe<SkillUpdateInput>;
};

export type PersonSkillsUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonSkillsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonSkillsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonSkillsCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonSkillsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonSkillsDisconnectFieldInput>>;
  update?: InputMaybe<PersonSkillsUpdateConnectionInput>;
  where?: InputMaybe<PersonSkillsConnectionWhere>;
};

/** Fields to sort People by. The order in which sorts are applied is not guaranteed when specifying many fields in one PersonSort object. */
export type PersonSort = {
  birthday?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  location?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  seniority?: InputMaybe<SortDirection>;
  surname?: InputMaybe<SortDirection>;
};

export type PersonUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PersonUpdateInput = {
  birthday?: InputMaybe<Scalars['Date']>;
  departments?: InputMaybe<Array<PersonDepartmentsUpdateFieldInput>>;
  experiences?: InputMaybe<Array<PersonExperiencesUpdateFieldInput>>;
  location?: InputMaybe<PointInput>;
  name?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Array<PersonProjectsUpdateFieldInput>>;
  rates?: InputMaybe<Array<PersonRatesUpdateFieldInput>>;
  roles?: InputMaybe<Array<PersonRolesUpdateFieldInput>>;
  seniority?: InputMaybe<Seniority>;
  skills?: InputMaybe<Array<PersonSkillsUpdateFieldInput>>;
  surname?: InputMaybe<Scalars['String']>;
};

export type PersonWhere = {
  AND?: InputMaybe<Array<PersonWhere>>;
  NOT?: InputMaybe<PersonWhere>;
  OR?: InputMaybe<Array<PersonWhere>>;
  birthday?: InputMaybe<Scalars['Date']>;
  birthday_GT?: InputMaybe<Scalars['Date']>;
  birthday_GTE?: InputMaybe<Scalars['Date']>;
  birthday_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  birthday_LT?: InputMaybe<Scalars['Date']>;
  birthday_LTE?: InputMaybe<Scalars['Date']>;
  departmentsAggregate?: InputMaybe<PersonDepartmentsAggregateInput>;
  /** Return People where all of the related PersonDepartmentsConnections match this filter */
  departmentsConnection_ALL?: InputMaybe<PersonDepartmentsConnectionWhere>;
  /** Return People where none of the related PersonDepartmentsConnections match this filter */
  departmentsConnection_NONE?: InputMaybe<PersonDepartmentsConnectionWhere>;
  /** Return People where one of the related PersonDepartmentsConnections match this filter */
  departmentsConnection_SINGLE?: InputMaybe<PersonDepartmentsConnectionWhere>;
  /** Return People where some of the related PersonDepartmentsConnections match this filter */
  departmentsConnection_SOME?: InputMaybe<PersonDepartmentsConnectionWhere>;
  /** Return People where all of the related Departments match this filter */
  departments_ALL?: InputMaybe<DepartmentWhere>;
  /** Return People where none of the related Departments match this filter */
  departments_NONE?: InputMaybe<DepartmentWhere>;
  /** Return People where one of the related Departments match this filter */
  departments_SINGLE?: InputMaybe<DepartmentWhere>;
  /** Return People where some of the related Departments match this filter */
  departments_SOME?: InputMaybe<DepartmentWhere>;
  experiencesAggregate?: InputMaybe<PersonExperiencesAggregateInput>;
  /** Return People where all of the related PersonExperiencesConnections match this filter */
  experiencesConnection_ALL?: InputMaybe<PersonExperiencesConnectionWhere>;
  /** Return People where none of the related PersonExperiencesConnections match this filter */
  experiencesConnection_NONE?: InputMaybe<PersonExperiencesConnectionWhere>;
  /** Return People where one of the related PersonExperiencesConnections match this filter */
  experiencesConnection_SINGLE?: InputMaybe<PersonExperiencesConnectionWhere>;
  /** Return People where some of the related PersonExperiencesConnections match this filter */
  experiencesConnection_SOME?: InputMaybe<PersonExperiencesConnectionWhere>;
  /** Return People where all of the related Experiences match this filter */
  experiences_ALL?: InputMaybe<ExperienceWhere>;
  /** Return People where none of the related Experiences match this filter */
  experiences_NONE?: InputMaybe<ExperienceWhere>;
  /** Return People where one of the related Experiences match this filter */
  experiences_SINGLE?: InputMaybe<ExperienceWhere>;
  /** Return People where some of the related Experiences match this filter */
  experiences_SOME?: InputMaybe<ExperienceWhere>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<PointInput>;
  location_DISTANCE?: InputMaybe<PointDistance>;
  location_GT?: InputMaybe<PointDistance>;
  location_GTE?: InputMaybe<PointDistance>;
  location_IN?: InputMaybe<Array<InputMaybe<PointInput>>>;
  location_LT?: InputMaybe<PointDistance>;
  location_LTE?: InputMaybe<PointDistance>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  projectsAggregate?: InputMaybe<PersonProjectsAggregateInput>;
  /** Return People where all of the related PersonProjectsConnections match this filter */
  projectsConnection_ALL?: InputMaybe<PersonProjectsConnectionWhere>;
  /** Return People where none of the related PersonProjectsConnections match this filter */
  projectsConnection_NONE?: InputMaybe<PersonProjectsConnectionWhere>;
  /** Return People where one of the related PersonProjectsConnections match this filter */
  projectsConnection_SINGLE?: InputMaybe<PersonProjectsConnectionWhere>;
  /** Return People where some of the related PersonProjectsConnections match this filter */
  projectsConnection_SOME?: InputMaybe<PersonProjectsConnectionWhere>;
  /** Return People where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return People where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return People where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return People where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
  ratesAggregate?: InputMaybe<PersonRatesAggregateInput>;
  /** Return People where all of the related PersonRatesConnections match this filter */
  ratesConnection_ALL?: InputMaybe<PersonRatesConnectionWhere>;
  /** Return People where none of the related PersonRatesConnections match this filter */
  ratesConnection_NONE?: InputMaybe<PersonRatesConnectionWhere>;
  /** Return People where one of the related PersonRatesConnections match this filter */
  ratesConnection_SINGLE?: InputMaybe<PersonRatesConnectionWhere>;
  /** Return People where some of the related PersonRatesConnections match this filter */
  ratesConnection_SOME?: InputMaybe<PersonRatesConnectionWhere>;
  /** Return People where all of the related Rates match this filter */
  rates_ALL?: InputMaybe<RateWhere>;
  /** Return People where none of the related Rates match this filter */
  rates_NONE?: InputMaybe<RateWhere>;
  /** Return People where one of the related Rates match this filter */
  rates_SINGLE?: InputMaybe<RateWhere>;
  /** Return People where some of the related Rates match this filter */
  rates_SOME?: InputMaybe<RateWhere>;
  rolesAggregate?: InputMaybe<PersonRolesAggregateInput>;
  /** Return People where all of the related PersonRolesConnections match this filter */
  rolesConnection_ALL?: InputMaybe<PersonRolesConnectionWhere>;
  /** Return People where none of the related PersonRolesConnections match this filter */
  rolesConnection_NONE?: InputMaybe<PersonRolesConnectionWhere>;
  /** Return People where one of the related PersonRolesConnections match this filter */
  rolesConnection_SINGLE?: InputMaybe<PersonRolesConnectionWhere>;
  /** Return People where some of the related PersonRolesConnections match this filter */
  rolesConnection_SOME?: InputMaybe<PersonRolesConnectionWhere>;
  /** Return People where all of the related Roles match this filter */
  roles_ALL?: InputMaybe<RoleWhere>;
  /** Return People where none of the related Roles match this filter */
  roles_NONE?: InputMaybe<RoleWhere>;
  /** Return People where one of the related Roles match this filter */
  roles_SINGLE?: InputMaybe<RoleWhere>;
  /** Return People where some of the related Roles match this filter */
  roles_SOME?: InputMaybe<RoleWhere>;
  seniority?: InputMaybe<Seniority>;
  seniority_IN?: InputMaybe<Array<InputMaybe<Seniority>>>;
  skillsAggregate?: InputMaybe<PersonSkillsAggregateInput>;
  /** Return People where all of the related PersonSkillsConnections match this filter */
  skillsConnection_ALL?: InputMaybe<PersonSkillsConnectionWhere>;
  /** Return People where none of the related PersonSkillsConnections match this filter */
  skillsConnection_NONE?: InputMaybe<PersonSkillsConnectionWhere>;
  /** Return People where one of the related PersonSkillsConnections match this filter */
  skillsConnection_SINGLE?: InputMaybe<PersonSkillsConnectionWhere>;
  /** Return People where some of the related PersonSkillsConnections match this filter */
  skillsConnection_SOME?: InputMaybe<PersonSkillsConnectionWhere>;
  /** Return People where all of the related Skills match this filter */
  skills_ALL?: InputMaybe<SkillWhere>;
  /** Return People where none of the related Skills match this filter */
  skills_NONE?: InputMaybe<SkillWhere>;
  /** Return People where one of the related Skills match this filter */
  skills_SINGLE?: InputMaybe<SkillWhere>;
  /** Return People where some of the related Skills match this filter */
  skills_SOME?: InputMaybe<SkillWhere>;
  surname?: InputMaybe<Scalars['String']>;
  surname_CONTAINS?: InputMaybe<Scalars['String']>;
  surname_ENDS_WITH?: InputMaybe<Scalars['String']>;
  surname_IN?: InputMaybe<Array<Scalars['String']>>;
  surname_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type PersonWithScore = Person | Score;

export type PersonsToProject = {
  __typename?: 'PersonsToProject';
  people?: Maybe<Array<Maybe<PersonWithScore>>>;
};

export type PersonsToProjectAggregateSelection = {
  __typename?: 'PersonsToProjectAggregateSelection';
  count: Scalars['Int'];
};

export type PersonsToProjectCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']>;
};

export type PersonsToProjectEdge = {
  __typename?: 'PersonsToProjectEdge';
  cursor: Scalars['String'];
  node: PersonsToProject;
};

export type PersonsToProjectOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type PersonsToProjectUpdateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']>;
};

export type PersonsToProjectWhere = {
  AND?: InputMaybe<Array<PersonsToProjectWhere>>;
  NOT?: InputMaybe<PersonsToProjectWhere>;
  OR?: InputMaybe<Array<PersonsToProjectWhere>>;
};

export type PersonsToProjectsConnection = {
  __typename?: 'PersonsToProjectsConnection';
  edges: Array<PersonsToProjectEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Point = {
  __typename?: 'Point';
  crs: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  srid: Scalars['Int'];
};

export type PointDistance = {
  /** The distance in metres to be used when comparing two points */
  distance: Scalars['Float'];
  point: PointInput;
};

export type PointInput = {
  height?: InputMaybe<Scalars['Float']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Project = {
  __typename?: 'Project';
  duration: Scalars['Duration'];
  id: Scalars['ID'];
  name: Scalars['String'];
  persons: Array<Person>;
  personsAggregate?: Maybe<ProjectPersonPersonsAggregationSelection>;
  personsConnection: ProjectPersonsConnection;
  skills: Array<Skill>;
  skillsAggregate?: Maybe<ProjectSkillSkillsAggregationSelection>;
  skillsConnection: ProjectSkillsConnection;
  startedFrom: Scalars['Date'];
};


export type ProjectPersonsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type ProjectPersonsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonWhere>;
};


export type ProjectPersonsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ProjectPersonsConnectionSort>>;
  where?: InputMaybe<ProjectPersonsConnectionWhere>;
};


export type ProjectSkillsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<SkillOptions>;
  where?: InputMaybe<SkillWhere>;
};


export type ProjectSkillsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SkillWhere>;
};


export type ProjectSkillsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ProjectSkillsConnectionSort>>;
  where?: InputMaybe<ProjectSkillsConnectionWhere>;
};

export type ProjectAggregateSelection = {
  __typename?: 'ProjectAggregateSelection';
  count: Scalars['Int'];
  duration: DurationAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ProjectConnectInput = {
  persons?: InputMaybe<Array<ProjectPersonsConnectFieldInput>>;
  skills?: InputMaybe<Array<ProjectSkillsConnectFieldInput>>;
};

export type ProjectConnectOrCreateInput = {
  persons?: InputMaybe<Array<ProjectPersonsConnectOrCreateFieldInput>>;
  skills?: InputMaybe<Array<ProjectSkillsConnectOrCreateFieldInput>>;
};

export type ProjectConnectOrCreateWhere = {
  node: ProjectUniqueWhere;
};

export type ProjectConnectWhere = {
  node: ProjectWhere;
};

export type ProjectCreateInput = {
  duration: Scalars['Duration'];
  name: Scalars['String'];
  persons?: InputMaybe<ProjectPersonsFieldInput>;
  skills?: InputMaybe<ProjectSkillsFieldInput>;
  startedFrom: Scalars['Date'];
};

export type ProjectDeleteInput = {
  persons?: InputMaybe<Array<ProjectPersonsDeleteFieldInput>>;
  skills?: InputMaybe<Array<ProjectSkillsDeleteFieldInput>>;
};

export type ProjectDisconnectInput = {
  persons?: InputMaybe<Array<ProjectPersonsDisconnectFieldInput>>;
  skills?: InputMaybe<Array<ProjectSkillsDisconnectFieldInput>>;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  cursor: Scalars['String'];
  node: Project;
};

export type ProjectOnCreateInput = {
  duration: Scalars['Duration'];
  name: Scalars['String'];
  startedFrom: Scalars['Date'];
};

export type ProjectOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ProjectSort objects to sort Projects by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProjectSort>>;
};

export type ProjectPersonPersonsAggregationSelection = {
  __typename?: 'ProjectPersonPersonsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ProjectPersonPersonsNodeAggregateSelection>;
};

export type ProjectPersonPersonsNodeAggregateSelection = {
  __typename?: 'ProjectPersonPersonsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  surname: StringAggregateSelectionNonNullable;
};

export type ProjectPersonsAggregateInput = {
  AND?: InputMaybe<Array<ProjectPersonsAggregateInput>>;
  NOT?: InputMaybe<ProjectPersonsAggregateInput>;
  OR?: InputMaybe<Array<ProjectPersonsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ProjectPersonsNodeAggregationWhereInput>;
};

export type ProjectPersonsConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<PersonConnectWhere>;
};

export type ProjectPersonsConnectOrCreateFieldInput = {
  onCreate: ProjectPersonsConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type ProjectPersonsConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
};

export type ProjectPersonsConnection = {
  __typename?: 'ProjectPersonsConnection';
  edges: Array<ProjectPersonsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectPersonsConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type ProjectPersonsConnectionWhere = {
  AND?: InputMaybe<Array<ProjectPersonsConnectionWhere>>;
  NOT?: InputMaybe<ProjectPersonsConnectionWhere>;
  OR?: InputMaybe<Array<ProjectPersonsConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
};

export type ProjectPersonsCreateFieldInput = {
  node: PersonCreateInput;
};

export type ProjectPersonsDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<ProjectPersonsConnectionWhere>;
};

export type ProjectPersonsDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<ProjectPersonsConnectionWhere>;
};

export type ProjectPersonsFieldInput = {
  connect?: InputMaybe<Array<ProjectPersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectPersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectPersonsCreateFieldInput>>;
};

export type ProjectPersonsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectPersonsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectPersonsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectPersonsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  surname_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  surname_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type ProjectPersonsRelationship = {
  __typename?: 'ProjectPersonsRelationship';
  cursor: Scalars['String'];
  node: Person;
};

export type ProjectPersonsUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type ProjectPersonsUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectPersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectPersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectPersonsCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectPersonsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectPersonsDisconnectFieldInput>>;
  update?: InputMaybe<ProjectPersonsUpdateConnectionInput>;
  where?: InputMaybe<ProjectPersonsConnectionWhere>;
};

export type ProjectRelationInput = {
  persons?: InputMaybe<Array<ProjectPersonsCreateFieldInput>>;
  skills?: InputMaybe<Array<ProjectSkillsCreateFieldInput>>;
};

export type ProjectSkillSkillsAggregationSelection = {
  __typename?: 'ProjectSkillSkillsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ProjectSkillSkillsNodeAggregateSelection>;
};

export type ProjectSkillSkillsNodeAggregateSelection = {
  __typename?: 'ProjectSkillSkillsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ProjectSkillsAggregateInput = {
  AND?: InputMaybe<Array<ProjectSkillsAggregateInput>>;
  NOT?: InputMaybe<ProjectSkillsAggregateInput>;
  OR?: InputMaybe<Array<ProjectSkillsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ProjectSkillsNodeAggregationWhereInput>;
};

export type ProjectSkillsConnectFieldInput = {
  connect?: InputMaybe<Array<SkillConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<SkillConnectWhere>;
};

export type ProjectSkillsConnectOrCreateFieldInput = {
  onCreate: ProjectSkillsConnectOrCreateFieldInputOnCreate;
  where: SkillConnectOrCreateWhere;
};

export type ProjectSkillsConnectOrCreateFieldInputOnCreate = {
  node: SkillOnCreateInput;
};

export type ProjectSkillsConnection = {
  __typename?: 'ProjectSkillsConnection';
  edges: Array<ProjectSkillsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectSkillsConnectionSort = {
  node?: InputMaybe<SkillSort>;
};

export type ProjectSkillsConnectionWhere = {
  AND?: InputMaybe<Array<ProjectSkillsConnectionWhere>>;
  NOT?: InputMaybe<ProjectSkillsConnectionWhere>;
  OR?: InputMaybe<Array<ProjectSkillsConnectionWhere>>;
  node?: InputMaybe<SkillWhere>;
};

export type ProjectSkillsCreateFieldInput = {
  node: SkillCreateInput;
};

export type ProjectSkillsDeleteFieldInput = {
  delete?: InputMaybe<SkillDeleteInput>;
  where?: InputMaybe<ProjectSkillsConnectionWhere>;
};

export type ProjectSkillsDisconnectFieldInput = {
  disconnect?: InputMaybe<SkillDisconnectInput>;
  where?: InputMaybe<ProjectSkillsConnectionWhere>;
};

export type ProjectSkillsFieldInput = {
  connect?: InputMaybe<Array<ProjectSkillsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectSkillsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectSkillsCreateFieldInput>>;
};

export type ProjectSkillsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectSkillsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectSkillsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectSkillsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type ProjectSkillsRelationship = {
  __typename?: 'ProjectSkillsRelationship';
  cursor: Scalars['String'];
  node: Skill;
};

export type ProjectSkillsUpdateConnectionInput = {
  node?: InputMaybe<SkillUpdateInput>;
};

export type ProjectSkillsUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectSkillsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectSkillsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectSkillsCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectSkillsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectSkillsDisconnectFieldInput>>;
  update?: InputMaybe<ProjectSkillsUpdateConnectionInput>;
  where?: InputMaybe<ProjectSkillsConnectionWhere>;
};

/** Fields to sort Projects by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProjectSort object. */
export type ProjectSort = {
  duration?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  startedFrom?: InputMaybe<SortDirection>;
};

export type ProjectUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ProjectUpdateInput = {
  duration?: InputMaybe<Scalars['Duration']>;
  name?: InputMaybe<Scalars['String']>;
  persons?: InputMaybe<Array<ProjectPersonsUpdateFieldInput>>;
  skills?: InputMaybe<Array<ProjectSkillsUpdateFieldInput>>;
  startedFrom?: InputMaybe<Scalars['Date']>;
};

export type ProjectWhere = {
  AND?: InputMaybe<Array<ProjectWhere>>;
  NOT?: InputMaybe<ProjectWhere>;
  OR?: InputMaybe<Array<ProjectWhere>>;
  duration?: InputMaybe<Scalars['Duration']>;
  duration_GT?: InputMaybe<Scalars['Duration']>;
  duration_GTE?: InputMaybe<Scalars['Duration']>;
  duration_IN?: InputMaybe<Array<Scalars['Duration']>>;
  duration_LT?: InputMaybe<Scalars['Duration']>;
  duration_LTE?: InputMaybe<Scalars['Duration']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  personsAggregate?: InputMaybe<ProjectPersonsAggregateInput>;
  /** Return Projects where all of the related ProjectPersonsConnections match this filter */
  personsConnection_ALL?: InputMaybe<ProjectPersonsConnectionWhere>;
  /** Return Projects where none of the related ProjectPersonsConnections match this filter */
  personsConnection_NONE?: InputMaybe<ProjectPersonsConnectionWhere>;
  /** Return Projects where one of the related ProjectPersonsConnections match this filter */
  personsConnection_SINGLE?: InputMaybe<ProjectPersonsConnectionWhere>;
  /** Return Projects where some of the related ProjectPersonsConnections match this filter */
  personsConnection_SOME?: InputMaybe<ProjectPersonsConnectionWhere>;
  /** Return Projects where all of the related People match this filter */
  persons_ALL?: InputMaybe<PersonWhere>;
  /** Return Projects where none of the related People match this filter */
  persons_NONE?: InputMaybe<PersonWhere>;
  /** Return Projects where one of the related People match this filter */
  persons_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Projects where some of the related People match this filter */
  persons_SOME?: InputMaybe<PersonWhere>;
  skillsAggregate?: InputMaybe<ProjectSkillsAggregateInput>;
  /** Return Projects where all of the related ProjectSkillsConnections match this filter */
  skillsConnection_ALL?: InputMaybe<ProjectSkillsConnectionWhere>;
  /** Return Projects where none of the related ProjectSkillsConnections match this filter */
  skillsConnection_NONE?: InputMaybe<ProjectSkillsConnectionWhere>;
  /** Return Projects where one of the related ProjectSkillsConnections match this filter */
  skillsConnection_SINGLE?: InputMaybe<ProjectSkillsConnectionWhere>;
  /** Return Projects where some of the related ProjectSkillsConnections match this filter */
  skillsConnection_SOME?: InputMaybe<ProjectSkillsConnectionWhere>;
  /** Return Projects where all of the related Skills match this filter */
  skills_ALL?: InputMaybe<SkillWhere>;
  /** Return Projects where none of the related Skills match this filter */
  skills_NONE?: InputMaybe<SkillWhere>;
  /** Return Projects where one of the related Skills match this filter */
  skills_SINGLE?: InputMaybe<SkillWhere>;
  /** Return Projects where some of the related Skills match this filter */
  skills_SOME?: InputMaybe<SkillWhere>;
  startedFrom?: InputMaybe<Scalars['Date']>;
  startedFrom_GT?: InputMaybe<Scalars['Date']>;
  startedFrom_GTE?: InputMaybe<Scalars['Date']>;
  startedFrom_IN?: InputMaybe<Array<Scalars['Date']>>;
  startedFrom_LT?: InputMaybe<Scalars['Date']>;
  startedFrom_LTE?: InputMaybe<Scalars['Date']>;
};

export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  edges: Array<ProjectEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  departments: Array<Department>;
  departmentsAggregate: DepartmentAggregateSelection;
  departmentsConnection: DepartmentsConnection;
  experiences: Array<Experience>;
  experiencesAggregate: ExperienceAggregateSelection;
  experiencesConnection: ExperiencesConnection;
  people: Array<Person>;
  peopleAggregate: PersonAggregateSelection;
  peopleConnection: PeopleConnection;
  personsToProjects: Array<PersonsToProject>;
  personsToProjectsAggregate: PersonsToProjectAggregateSelection;
  personsToProjectsConnection: PersonsToProjectsConnection;
  projects: Array<Project>;
  projectsAggregate: ProjectAggregateSelection;
  projectsConnection: ProjectsConnection;
  queryPS: Array<QueryP>;
  queryPSAggregate: QueryPAggregateSelection;
  queryPSConnection: QueryPsConnection;
  rates: Array<Rate>;
  ratesAggregate: RateAggregateSelection;
  ratesConnection: RatesConnection;
  roles: Array<Role>;
  rolesAggregate: RoleAggregateSelection;
  rolesConnection: RolesConnection;
  scores: Array<Score>;
  scoresAggregate: ScoreAggregateSelection;
  scoresConnection: ScoresConnection;
  skills: Array<Skill>;
  skillsAggregate: SkillAggregateSelection;
  skillsConnection: SkillsConnection;
};


export type QueryDepartmentsArgs = {
  options?: InputMaybe<DepartmentOptions>;
  where?: InputMaybe<DepartmentWhere>;
};


export type QueryDepartmentsAggregateArgs = {
  where?: InputMaybe<DepartmentWhere>;
};


export type QueryDepartmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DepartmentSort>>>;
  where?: InputMaybe<DepartmentWhere>;
};


export type QueryExperiencesArgs = {
  options?: InputMaybe<ExperienceOptions>;
  where?: InputMaybe<ExperienceWhere>;
};


export type QueryExperiencesAggregateArgs = {
  where?: InputMaybe<ExperienceWhere>;
};


export type QueryExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ExperienceSort>>>;
  where?: InputMaybe<ExperienceWhere>;
};


export type QueryPeopleArgs = {
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type QueryPeopleAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
};


export type QueryPeopleConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<PersonSort>>>;
  where?: InputMaybe<PersonWhere>;
};


export type QueryPersonsToProjectsArgs = {
  options?: InputMaybe<PersonsToProjectOptions>;
  where?: InputMaybe<PersonsToProjectWhere>;
};


export type QueryPersonsToProjectsAggregateArgs = {
  where?: InputMaybe<PersonsToProjectWhere>;
};


export type QueryPersonsToProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonsToProjectWhere>;
};


export type QueryProjectsArgs = {
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type QueryProjectsAggregateArgs = {
  where?: InputMaybe<ProjectWhere>;
};


export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ProjectSort>>>;
  where?: InputMaybe<ProjectWhere>;
};


export type QueryQueryPsArgs = {
  options?: InputMaybe<QueryPOptions>;
  where?: InputMaybe<QueryPWhere>;
};


export type QueryQueryPsAggregateArgs = {
  where?: InputMaybe<QueryPWhere>;
};


export type QueryQueryPsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryPWhere>;
};


export type QueryRatesArgs = {
  options?: InputMaybe<RateOptions>;
  where?: InputMaybe<RateWhere>;
};


export type QueryRatesAggregateArgs = {
  where?: InputMaybe<RateWhere>;
};


export type QueryRatesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<RateSort>>>;
  where?: InputMaybe<RateWhere>;
};


export type QueryRolesArgs = {
  options?: InputMaybe<RoleOptions>;
  where?: InputMaybe<RoleWhere>;
};


export type QueryRolesAggregateArgs = {
  where?: InputMaybe<RoleWhere>;
};


export type QueryRolesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<RoleSort>>>;
  where?: InputMaybe<RoleWhere>;
};


export type QueryScoresArgs = {
  options?: InputMaybe<ScoreOptions>;
  where?: InputMaybe<ScoreWhere>;
};


export type QueryScoresAggregateArgs = {
  where?: InputMaybe<ScoreWhere>;
};


export type QueryScoresConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ScoreSort>>>;
  where?: InputMaybe<ScoreWhere>;
};


export type QuerySkillsArgs = {
  options?: InputMaybe<SkillOptions>;
  where?: InputMaybe<SkillWhere>;
};


export type QuerySkillsAggregateArgs = {
  where?: InputMaybe<SkillWhere>;
};


export type QuerySkillsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<SkillSort>>>;
  where?: InputMaybe<SkillWhere>;
};

export type QueryP = {
  __typename?: 'QueryP';
  people?: Maybe<Array<Maybe<Person>>>;
};

export type QueryPAggregateSelection = {
  __typename?: 'QueryPAggregateSelection';
  count: Scalars['Int'];
};

export type QueryPCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']>;
};

export type QueryPEdge = {
  __typename?: 'QueryPEdge';
  cursor: Scalars['String'];
  node: QueryP;
};

export type QueryPOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type QueryPsConnection = {
  __typename?: 'QueryPSConnection';
  edges: Array<QueryPEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type QueryPUpdateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']>;
};

export type QueryPWhere = {
  AND?: InputMaybe<Array<QueryPWhere>>;
  NOT?: InputMaybe<QueryPWhere>;
  OR?: InputMaybe<Array<QueryPWhere>>;
};

export type Rate = {
  __typename?: 'Rate';
  id: Scalars['ID'];
  person: Person;
  personAggregate?: Maybe<RatePersonPersonAggregationSelection>;
  personConnection: RatePersonConnection;
  validFrom: Scalars['Date'];
  value: Scalars['Float'];
};


export type RatePersonArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type RatePersonAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonWhere>;
};


export type RatePersonConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RatePersonConnectionSort>>;
  where?: InputMaybe<RatePersonConnectionWhere>;
};

export type RateAggregateSelection = {
  __typename?: 'RateAggregateSelection';
  count: Scalars['Int'];
  id: IdAggregateSelectionNonNullable;
  value: FloatAggregateSelectionNonNullable;
};

export type RateConnectInput = {
  person?: InputMaybe<RatePersonConnectFieldInput>;
};

export type RateConnectOrCreateInput = {
  person?: InputMaybe<RatePersonConnectOrCreateFieldInput>;
};

export type RateConnectOrCreateWhere = {
  node: RateUniqueWhere;
};

export type RateConnectWhere = {
  node: RateWhere;
};

export type RateCreateInput = {
  person?: InputMaybe<RatePersonFieldInput>;
  validFrom: Scalars['Date'];
  value: Scalars['Float'];
};

export type RateDeleteInput = {
  person?: InputMaybe<RatePersonDeleteFieldInput>;
};

export type RateDisconnectInput = {
  person?: InputMaybe<RatePersonDisconnectFieldInput>;
};

export type RateEdge = {
  __typename?: 'RateEdge';
  cursor: Scalars['String'];
  node: Rate;
};

export type RateOnCreateInput = {
  validFrom: Scalars['Date'];
  value: Scalars['Float'];
};

export type RateOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more RateSort objects to sort Rates by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RateSort>>;
};

export type RatePersonAggregateInput = {
  AND?: InputMaybe<Array<RatePersonAggregateInput>>;
  NOT?: InputMaybe<RatePersonAggregateInput>;
  OR?: InputMaybe<Array<RatePersonAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RatePersonNodeAggregationWhereInput>;
};

export type RatePersonConnectFieldInput = {
  connect?: InputMaybe<PersonConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<PersonConnectWhere>;
};

export type RatePersonConnectOrCreateFieldInput = {
  onCreate: RatePersonConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type RatePersonConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
};

export type RatePersonConnection = {
  __typename?: 'RatePersonConnection';
  edges: Array<RatePersonRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RatePersonConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type RatePersonConnectionWhere = {
  AND?: InputMaybe<Array<RatePersonConnectionWhere>>;
  NOT?: InputMaybe<RatePersonConnectionWhere>;
  OR?: InputMaybe<Array<RatePersonConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
};

export type RatePersonCreateFieldInput = {
  node: PersonCreateInput;
};

export type RatePersonDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<RatePersonConnectionWhere>;
};

export type RatePersonDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<RatePersonConnectionWhere>;
};

export type RatePersonFieldInput = {
  connect?: InputMaybe<RatePersonConnectFieldInput>;
  connectOrCreate?: InputMaybe<RatePersonConnectOrCreateFieldInput>;
  create?: InputMaybe<RatePersonCreateFieldInput>;
};

export type RatePersonNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RatePersonNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RatePersonNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RatePersonNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  surname_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  surname_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type RatePersonPersonAggregationSelection = {
  __typename?: 'RatePersonPersonAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RatePersonPersonNodeAggregateSelection>;
};

export type RatePersonPersonNodeAggregateSelection = {
  __typename?: 'RatePersonPersonNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  surname: StringAggregateSelectionNonNullable;
};

export type RatePersonRelationship = {
  __typename?: 'RatePersonRelationship';
  cursor: Scalars['String'];
  node: Person;
};

export type RatePersonUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type RatePersonUpdateFieldInput = {
  connect?: InputMaybe<RatePersonConnectFieldInput>;
  connectOrCreate?: InputMaybe<RatePersonConnectOrCreateFieldInput>;
  create?: InputMaybe<RatePersonCreateFieldInput>;
  delete?: InputMaybe<RatePersonDeleteFieldInput>;
  disconnect?: InputMaybe<RatePersonDisconnectFieldInput>;
  update?: InputMaybe<RatePersonUpdateConnectionInput>;
  where?: InputMaybe<RatePersonConnectionWhere>;
};

export type RateRelationInput = {
  person?: InputMaybe<RatePersonCreateFieldInput>;
};

/** Fields to sort Rates by. The order in which sorts are applied is not guaranteed when specifying many fields in one RateSort object. */
export type RateSort = {
  id?: InputMaybe<SortDirection>;
  validFrom?: InputMaybe<SortDirection>;
  value?: InputMaybe<SortDirection>;
};

export type RateUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type RateUpdateInput = {
  person?: InputMaybe<RatePersonUpdateFieldInput>;
  validFrom?: InputMaybe<Scalars['Date']>;
  value?: InputMaybe<Scalars['Float']>;
  value_ADD?: InputMaybe<Scalars['Float']>;
  value_DIVIDE?: InputMaybe<Scalars['Float']>;
  value_MULTIPLY?: InputMaybe<Scalars['Float']>;
  value_SUBTRACT?: InputMaybe<Scalars['Float']>;
};

export type RateWhere = {
  AND?: InputMaybe<Array<RateWhere>>;
  NOT?: InputMaybe<RateWhere>;
  OR?: InputMaybe<Array<RateWhere>>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  person?: InputMaybe<PersonWhere>;
  personAggregate?: InputMaybe<RatePersonAggregateInput>;
  personConnection?: InputMaybe<RatePersonConnectionWhere>;
  personConnection_NOT?: InputMaybe<RatePersonConnectionWhere>;
  person_NOT?: InputMaybe<PersonWhere>;
  validFrom?: InputMaybe<Scalars['Date']>;
  validFrom_GT?: InputMaybe<Scalars['Date']>;
  validFrom_GTE?: InputMaybe<Scalars['Date']>;
  validFrom_IN?: InputMaybe<Array<Scalars['Date']>>;
  validFrom_LT?: InputMaybe<Scalars['Date']>;
  validFrom_LTE?: InputMaybe<Scalars['Date']>;
  value?: InputMaybe<Scalars['Float']>;
  value_GT?: InputMaybe<Scalars['Float']>;
  value_GTE?: InputMaybe<Scalars['Float']>;
  value_IN?: InputMaybe<Array<Scalars['Float']>>;
  value_LT?: InputMaybe<Scalars['Float']>;
  value_LTE?: InputMaybe<Scalars['Float']>;
};

export type RatesConnection = {
  __typename?: 'RatesConnection';
  edges: Array<RateEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type RoleAggregateSelection = {
  __typename?: 'RoleAggregateSelection';
  count: Scalars['Int'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type RoleConnectOrCreateWhere = {
  node: RoleUniqueWhere;
};

export type RoleConnectWhere = {
  node: RoleWhere;
};

export type RoleCreateInput = {
  name: Scalars['String'];
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  cursor: Scalars['String'];
  node: Role;
};

export type RoleOnCreateInput = {
  name: Scalars['String'];
};

export type RoleOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more RoleSort objects to sort Roles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RoleSort>>;
};

/** Fields to sort Roles by. The order in which sorts are applied is not guaranteed when specifying many fields in one RoleSort object. */
export type RoleSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type RoleUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type RoleUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type RoleWhere = {
  AND?: InputMaybe<Array<RoleWhere>>;
  NOT?: InputMaybe<RoleWhere>;
  OR?: InputMaybe<Array<RoleWhere>>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type RolesConnection = {
  __typename?: 'RolesConnection';
  edges: Array<RoleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Score = {
  __typename?: 'Score';
  score?: Maybe<Scalars['Int']>;
};

export type ScoreAggregateSelection = {
  __typename?: 'ScoreAggregateSelection';
  count: Scalars['Int'];
  score: IntAggregateSelectionNullable;
};

export type ScoreCreateInput = {
  score?: InputMaybe<Scalars['Int']>;
};

export type ScoreEdge = {
  __typename?: 'ScoreEdge';
  cursor: Scalars['String'];
  node: Score;
};

export type ScoreOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ScoreSort objects to sort Scores by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ScoreSort>>;
};

/** Fields to sort Scores by. The order in which sorts are applied is not guaranteed when specifying many fields in one ScoreSort object. */
export type ScoreSort = {
  score?: InputMaybe<SortDirection>;
};

export type ScoreUpdateInput = {
  score?: InputMaybe<Scalars['Int']>;
  score_DECREMENT?: InputMaybe<Scalars['Int']>;
  score_INCREMENT?: InputMaybe<Scalars['Int']>;
};

export type ScoreWhere = {
  AND?: InputMaybe<Array<ScoreWhere>>;
  NOT?: InputMaybe<ScoreWhere>;
  OR?: InputMaybe<Array<ScoreWhere>>;
  score?: InputMaybe<Scalars['Int']>;
  score_GT?: InputMaybe<Scalars['Int']>;
  score_GTE?: InputMaybe<Scalars['Int']>;
  score_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  score_LT?: InputMaybe<Scalars['Int']>;
  score_LTE?: InputMaybe<Scalars['Int']>;
};

export type ScoresConnection = {
  __typename?: 'ScoresConnection';
  edges: Array<ScoreEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum Seniority {
  Junior = 'JUNIOR',
  Regular = 'REGULAR',
  Senior = 'SENIOR'
}

export type Skill = {
  __typename?: 'Skill';
  experiences: Array<Experience>;
  experiencesAggregate?: Maybe<SkillExperienceExperiencesAggregationSelection>;
  experiencesConnection: SkillExperiencesConnection;
  id: Scalars['ID'];
  name: Scalars['String'];
  persons: Array<Person>;
  personsAggregate?: Maybe<SkillPersonPersonsAggregationSelection>;
  personsConnection: SkillPersonsConnection;
};


export type SkillExperiencesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ExperienceOptions>;
  where?: InputMaybe<ExperienceWhere>;
};


export type SkillExperiencesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ExperienceWhere>;
};


export type SkillExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SkillExperiencesConnectionSort>>;
  where?: InputMaybe<SkillExperiencesConnectionWhere>;
};


export type SkillPersonsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type SkillPersonsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonWhere>;
};


export type SkillPersonsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SkillPersonsConnectionSort>>;
  where?: InputMaybe<SkillPersonsConnectionWhere>;
};

export type SkillAggregateSelection = {
  __typename?: 'SkillAggregateSelection';
  count: Scalars['Int'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type SkillConnectInput = {
  experiences?: InputMaybe<Array<SkillExperiencesConnectFieldInput>>;
  persons?: InputMaybe<Array<SkillPersonsConnectFieldInput>>;
};

export type SkillConnectOrCreateInput = {
  experiences?: InputMaybe<Array<SkillExperiencesConnectOrCreateFieldInput>>;
  persons?: InputMaybe<Array<SkillPersonsConnectOrCreateFieldInput>>;
};

export type SkillConnectOrCreateWhere = {
  node: SkillUniqueWhere;
};

export type SkillConnectWhere = {
  node: SkillWhere;
};

export type SkillCreateInput = {
  experiences?: InputMaybe<SkillExperiencesFieldInput>;
  name: Scalars['String'];
  persons?: InputMaybe<SkillPersonsFieldInput>;
};

export type SkillDeleteInput = {
  experiences?: InputMaybe<Array<SkillExperiencesDeleteFieldInput>>;
  persons?: InputMaybe<Array<SkillPersonsDeleteFieldInput>>;
};

export type SkillDisconnectInput = {
  experiences?: InputMaybe<Array<SkillExperiencesDisconnectFieldInput>>;
  persons?: InputMaybe<Array<SkillPersonsDisconnectFieldInput>>;
};

export type SkillEdge = {
  __typename?: 'SkillEdge';
  cursor: Scalars['String'];
  node: Skill;
};

export type SkillExperienceExperiencesAggregationSelection = {
  __typename?: 'SkillExperienceExperiencesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<SkillExperienceExperiencesNodeAggregateSelection>;
};

export type SkillExperienceExperiencesNodeAggregateSelection = {
  __typename?: 'SkillExperienceExperiencesNodeAggregateSelection';
  description: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type SkillExperiencesAggregateInput = {
  AND?: InputMaybe<Array<SkillExperiencesAggregateInput>>;
  NOT?: InputMaybe<SkillExperiencesAggregateInput>;
  OR?: InputMaybe<Array<SkillExperiencesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<SkillExperiencesNodeAggregationWhereInput>;
};

export type SkillExperiencesConnectFieldInput = {
  connect?: InputMaybe<Array<ExperienceConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<ExperienceConnectWhere>;
};

export type SkillExperiencesConnectOrCreateFieldInput = {
  onCreate: SkillExperiencesConnectOrCreateFieldInputOnCreate;
  where: ExperienceConnectOrCreateWhere;
};

export type SkillExperiencesConnectOrCreateFieldInputOnCreate = {
  node: ExperienceOnCreateInput;
};

export type SkillExperiencesConnection = {
  __typename?: 'SkillExperiencesConnection';
  edges: Array<SkillExperiencesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SkillExperiencesConnectionSort = {
  node?: InputMaybe<ExperienceSort>;
};

export type SkillExperiencesConnectionWhere = {
  AND?: InputMaybe<Array<SkillExperiencesConnectionWhere>>;
  NOT?: InputMaybe<SkillExperiencesConnectionWhere>;
  OR?: InputMaybe<Array<SkillExperiencesConnectionWhere>>;
  node?: InputMaybe<ExperienceWhere>;
};

export type SkillExperiencesCreateFieldInput = {
  node: ExperienceCreateInput;
};

export type SkillExperiencesDeleteFieldInput = {
  delete?: InputMaybe<ExperienceDeleteInput>;
  where?: InputMaybe<SkillExperiencesConnectionWhere>;
};

export type SkillExperiencesDisconnectFieldInput = {
  disconnect?: InputMaybe<ExperienceDisconnectInput>;
  where?: InputMaybe<SkillExperiencesConnectionWhere>;
};

export type SkillExperiencesFieldInput = {
  connect?: InputMaybe<Array<SkillExperiencesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SkillExperiencesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SkillExperiencesCreateFieldInput>>;
};

export type SkillExperiencesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SkillExperiencesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SkillExperiencesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SkillExperiencesNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type SkillExperiencesRelationship = {
  __typename?: 'SkillExperiencesRelationship';
  cursor: Scalars['String'];
  node: Experience;
};

export type SkillExperiencesUpdateConnectionInput = {
  node?: InputMaybe<ExperienceUpdateInput>;
};

export type SkillExperiencesUpdateFieldInput = {
  connect?: InputMaybe<Array<SkillExperiencesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SkillExperiencesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SkillExperiencesCreateFieldInput>>;
  delete?: InputMaybe<Array<SkillExperiencesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SkillExperiencesDisconnectFieldInput>>;
  update?: InputMaybe<SkillExperiencesUpdateConnectionInput>;
  where?: InputMaybe<SkillExperiencesConnectionWhere>;
};

export type SkillOnCreateInput = {
  name: Scalars['String'];
};

export type SkillOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more SkillSort objects to sort Skills by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SkillSort>>;
};

export type SkillPersonPersonsAggregationSelection = {
  __typename?: 'SkillPersonPersonsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<SkillPersonPersonsNodeAggregateSelection>;
};

export type SkillPersonPersonsNodeAggregateSelection = {
  __typename?: 'SkillPersonPersonsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  surname: StringAggregateSelectionNonNullable;
};

export type SkillPersonsAggregateInput = {
  AND?: InputMaybe<Array<SkillPersonsAggregateInput>>;
  NOT?: InputMaybe<SkillPersonsAggregateInput>;
  OR?: InputMaybe<Array<SkillPersonsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<SkillPersonsNodeAggregationWhereInput>;
};

export type SkillPersonsConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean'];
  where?: InputMaybe<PersonConnectWhere>;
};

export type SkillPersonsConnectOrCreateFieldInput = {
  onCreate: SkillPersonsConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type SkillPersonsConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
};

export type SkillPersonsConnection = {
  __typename?: 'SkillPersonsConnection';
  edges: Array<SkillPersonsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SkillPersonsConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type SkillPersonsConnectionWhere = {
  AND?: InputMaybe<Array<SkillPersonsConnectionWhere>>;
  NOT?: InputMaybe<SkillPersonsConnectionWhere>;
  OR?: InputMaybe<Array<SkillPersonsConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
};

export type SkillPersonsCreateFieldInput = {
  node: PersonCreateInput;
};

export type SkillPersonsDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<SkillPersonsConnectionWhere>;
};

export type SkillPersonsDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<SkillPersonsConnectionWhere>;
};

export type SkillPersonsFieldInput = {
  connect?: InputMaybe<Array<SkillPersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SkillPersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SkillPersonsCreateFieldInput>>;
};

export type SkillPersonsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SkillPersonsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SkillPersonsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SkillPersonsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  surname_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']>;
  surname_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']>;
  surname_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  surname_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']>;
  surname_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']>;
};

export type SkillPersonsRelationship = {
  __typename?: 'SkillPersonsRelationship';
  cursor: Scalars['String'];
  node: Person;
};

export type SkillPersonsUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type SkillPersonsUpdateFieldInput = {
  connect?: InputMaybe<Array<SkillPersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SkillPersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SkillPersonsCreateFieldInput>>;
  delete?: InputMaybe<Array<SkillPersonsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SkillPersonsDisconnectFieldInput>>;
  update?: InputMaybe<SkillPersonsUpdateConnectionInput>;
  where?: InputMaybe<SkillPersonsConnectionWhere>;
};

export type SkillRelationInput = {
  experiences?: InputMaybe<Array<SkillExperiencesCreateFieldInput>>;
  persons?: InputMaybe<Array<SkillPersonsCreateFieldInput>>;
};

/** Fields to sort Skills by. The order in which sorts are applied is not guaranteed when specifying many fields in one SkillSort object. */
export type SkillSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type SkillUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type SkillUpdateInput = {
  experiences?: InputMaybe<Array<SkillExperiencesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
  persons?: InputMaybe<Array<SkillPersonsUpdateFieldInput>>;
};

export type SkillWhere = {
  AND?: InputMaybe<Array<SkillWhere>>;
  NOT?: InputMaybe<SkillWhere>;
  OR?: InputMaybe<Array<SkillWhere>>;
  experiencesAggregate?: InputMaybe<SkillExperiencesAggregateInput>;
  /** Return Skills where all of the related SkillExperiencesConnections match this filter */
  experiencesConnection_ALL?: InputMaybe<SkillExperiencesConnectionWhere>;
  /** Return Skills where none of the related SkillExperiencesConnections match this filter */
  experiencesConnection_NONE?: InputMaybe<SkillExperiencesConnectionWhere>;
  /** Return Skills where one of the related SkillExperiencesConnections match this filter */
  experiencesConnection_SINGLE?: InputMaybe<SkillExperiencesConnectionWhere>;
  /** Return Skills where some of the related SkillExperiencesConnections match this filter */
  experiencesConnection_SOME?: InputMaybe<SkillExperiencesConnectionWhere>;
  /** Return Skills where all of the related Experiences match this filter */
  experiences_ALL?: InputMaybe<ExperienceWhere>;
  /** Return Skills where none of the related Experiences match this filter */
  experiences_NONE?: InputMaybe<ExperienceWhere>;
  /** Return Skills where one of the related Experiences match this filter */
  experiences_SINGLE?: InputMaybe<ExperienceWhere>;
  /** Return Skills where some of the related Experiences match this filter */
  experiences_SOME?: InputMaybe<ExperienceWhere>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  personsAggregate?: InputMaybe<SkillPersonsAggregateInput>;
  /** Return Skills where all of the related SkillPersonsConnections match this filter */
  personsConnection_ALL?: InputMaybe<SkillPersonsConnectionWhere>;
  /** Return Skills where none of the related SkillPersonsConnections match this filter */
  personsConnection_NONE?: InputMaybe<SkillPersonsConnectionWhere>;
  /** Return Skills where one of the related SkillPersonsConnections match this filter */
  personsConnection_SINGLE?: InputMaybe<SkillPersonsConnectionWhere>;
  /** Return Skills where some of the related SkillPersonsConnections match this filter */
  personsConnection_SOME?: InputMaybe<SkillPersonsConnectionWhere>;
  /** Return Skills where all of the related People match this filter */
  persons_ALL?: InputMaybe<PersonWhere>;
  /** Return Skills where none of the related People match this filter */
  persons_NONE?: InputMaybe<PersonWhere>;
  /** Return Skills where one of the related People match this filter */
  persons_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Skills where some of the related People match this filter */
  persons_SOME?: InputMaybe<PersonWhere>;
};

export type SkillsConnection = {
  __typename?: 'SkillsConnection';
  edges: Array<SkillEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String'];
  shortest: Scalars['String'];
};

export type UpdateDepartmentsMutationResponse = {
  __typename?: 'UpdateDepartmentsMutationResponse';
  departments: Array<Department>;
  info: UpdateInfo;
};

export type UpdateExperiencesMutationResponse = {
  __typename?: 'UpdateExperiencesMutationResponse';
  experiences: Array<Experience>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type UpdatePeopleMutationResponse = {
  __typename?: 'UpdatePeopleMutationResponse';
  info: UpdateInfo;
  people: Array<Person>;
};

export type UpdatePersonsToProjectsMutationResponse = {
  __typename?: 'UpdatePersonsToProjectsMutationResponse';
  info: UpdateInfo;
  personsToProjects: Array<PersonsToProject>;
};

export type UpdateProjectsMutationResponse = {
  __typename?: 'UpdateProjectsMutationResponse';
  info: UpdateInfo;
  projects: Array<Project>;
};

export type UpdateQueryPsMutationResponse = {
  __typename?: 'UpdateQueryPSMutationResponse';
  info: UpdateInfo;
  queryPS: Array<QueryP>;
};

export type UpdateRatesMutationResponse = {
  __typename?: 'UpdateRatesMutationResponse';
  info: UpdateInfo;
  rates: Array<Rate>;
};

export type UpdateRolesMutationResponse = {
  __typename?: 'UpdateRolesMutationResponse';
  info: UpdateInfo;
  roles: Array<Role>;
};

export type UpdateScoresMutationResponse = {
  __typename?: 'UpdateScoresMutationResponse';
  info: UpdateInfo;
  scores: Array<Score>;
};

export type UpdateSkillsMutationResponse = {
  __typename?: 'UpdateSkillsMutationResponse';
  info: UpdateInfo;
  skills: Array<Skill>;
};

export type CreatePeopleMutationVariables = Exact<{
  input: Array<PersonCreateInput> | PersonCreateInput;
}>;


export type CreatePeopleMutation = { __typename?: 'Mutation', createPeople: { __typename?: 'CreatePeopleMutationResponse', people: Array<{ __typename?: 'Person', id: string, name: string, surname: string, seniority?: Seniority | null, birthday?: any | null }> } };

export type CreateRatesMutationVariables = Exact<{
  input: Array<RateCreateInput> | RateCreateInput;
}>;


export type CreateRatesMutation = { __typename?: 'Mutation', createRates: { __typename?: 'CreateRatesMutationResponse', rates: Array<{ __typename?: 'Rate', id: string, validFrom: any, value: number, person: { __typename?: 'Person', id: string } }> } };

export type DeletePersonsMutationVariables = Exact<{
  where?: InputMaybe<PersonWhere>;
}>;


export type DeletePersonsMutation = { __typename?: 'Mutation', deletePeople: { __typename?: 'DeleteInfo', nodesDeleted: number } };

export type DeleteRatesMutationVariables = Exact<{
  where?: InputMaybe<RateWhere>;
}>;


export type DeleteRatesMutation = { __typename?: 'Mutation', deleteRates: { __typename?: 'DeleteInfo', nodesDeleted: number } };

export type DepartmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type DepartmentsQuery = { __typename?: 'Query', departments: Array<{ __typename?: 'Department', id: string, name: string, manager?: { __typename?: 'Person', id: string } | null }> };

export type PersonWithAllTypeFragment = { __typename?: 'Person', id: string, name: string, surname: string, birthday?: any | null, seniority?: Seniority | null, location?: { __typename?: 'Point', longitude: number, latitude: number } | null, skills: Array<{ __typename?: 'Skill', id: string, name: string }>, roles: Array<{ __typename?: 'Role', id: string, name: string }>, rates: Array<{ __typename?: 'Rate', id: string, value: number, validFrom: any }>, departments: Array<{ __typename?: 'Department', id: string, name: string, manager?: { __typename?: 'Person', name: string, surname: string } | null }>, projects: Array<{ __typename?: 'Project', id: string, name: string, duration: any, startedFrom: any }> };

export type PersonsWithAllQueryVariables = Exact<{
  where?: InputMaybe<PersonWhere>;
}>;


export type PersonsWithAllQuery = { __typename?: 'Query', people: Array<{ __typename?: 'Person', id: string, name: string, surname: string, birthday?: any | null, seniority?: Seniority | null, location?: { __typename?: 'Point', longitude: number, latitude: number } | null, skills: Array<{ __typename?: 'Skill', id: string, name: string }>, roles: Array<{ __typename?: 'Role', id: string, name: string }>, rates: Array<{ __typename?: 'Rate', id: string, value: number, validFrom: any }>, departments: Array<{ __typename?: 'Department', id: string, name: string, manager?: { __typename?: 'Person', name: string, surname: string } | null }>, projects: Array<{ __typename?: 'Project', id: string, name: string, duration: any, startedFrom: any }> }> };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, name: string }> };

export type ProjectsWithAllQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsWithAllQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, name: string, duration: any, startedFrom: any, skills: Array<{ __typename?: 'Skill', id: string, name: string }>, persons: Array<{ __typename?: 'Person', id: string, name: string }> }> };

export type RatesByPersonQueryVariables = Exact<{
  where?: InputMaybe<RateWhere>;
}>;


export type RatesByPersonQuery = { __typename?: 'Query', rates: Array<{ __typename?: 'Rate', id: string, validFrom: any, value: number }> };

export type SkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type SkillsQuery = { __typename?: 'Query', skills: Array<{ __typename?: 'Skill', id: string, name: string }> };

export type RolesQueryVariables = Exact<{ [key: string]: never; }>;


export type RolesQuery = { __typename?: 'Query', roles: Array<{ __typename?: 'Role', id: string, name: string }> };

export type UpdatePeopleMutationVariables = Exact<{
  where?: InputMaybe<PersonWhere>;
  update?: InputMaybe<PersonUpdateInput>;
}>;


export type UpdatePeopleMutation = { __typename?: 'Mutation', updatePeople: { __typename?: 'UpdatePeopleMutationResponse', people: Array<{ __typename?: 'Person', id: string, name: string, surname: string, birthday?: any | null, seniority?: Seniority | null, location?: { __typename?: 'Point', longitude: number, latitude: number } | null, skills: Array<{ __typename?: 'Skill', id: string, name: string }>, roles: Array<{ __typename?: 'Role', id: string, name: string }>, rates: Array<{ __typename?: 'Rate', id: string, value: number, validFrom: any }>, departments: Array<{ __typename?: 'Department', id: string, name: string, manager?: { __typename?: 'Person', name: string, surname: string } | null }>, projects: Array<{ __typename?: 'Project', id: string, name: string, duration: any, startedFrom: any }> }> } };

export type UpdateRatesMutationVariables = Exact<{
  where?: InputMaybe<RateWhere>;
  update?: InputMaybe<RateUpdateInput>;
}>;


export type UpdateRatesMutation = { __typename?: 'Mutation', updateRates: { __typename?: 'UpdateRatesMutationResponse', rates: Array<{ __typename?: 'Rate', id: string, validFrom: any, value: number, person: { __typename?: 'Person', id: string, name: string } }> } };

export const PersonWithAllTypeFragmentDoc = gql`
    fragment PersonWithAllType on Person {
  id
  name
  surname
  location {
    longitude
    latitude
  }
  skills {
    id
    name
  }
  roles {
    id
    name
  }
  birthday
  seniority
  rates {
    id
    value
    validFrom
  }
  departments {
    id
    name
    manager {
      name
      surname
    }
  }
  projects {
    id
    name
    duration
    startedFrom
  }
}
    `;
export const CreatePeopleDocument = gql`
    mutation CreatePeople($input: [PersonCreateInput!]!) {
  createPeople(input: $input) {
    people {
      id
      name
      surname
      seniority
      birthday
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePeopleGQL extends Apollo.Mutation<CreatePeopleMutation, CreatePeopleMutationVariables> {
    document = CreatePeopleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateRatesDocument = gql`
    mutation CreateRates($input: [RateCreateInput!]!) {
  createRates(input: $input) {
    rates {
      id
      validFrom
      value
      person {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRatesGQL extends Apollo.Mutation<CreateRatesMutation, CreateRatesMutationVariables> {
    document = CreateRatesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeletePersonsDocument = gql`
    mutation DeletePersons($where: PersonWhere) {
  deletePeople(where: $where) {
    nodesDeleted
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePersonsGQL extends Apollo.Mutation<DeletePersonsMutation, DeletePersonsMutationVariables> {
    document = DeletePersonsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteRatesDocument = gql`
    mutation DeleteRates($where: RateWhere) {
  deleteRates(where: $where) {
    nodesDeleted
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteRatesGQL extends Apollo.Mutation<DeleteRatesMutation, DeleteRatesMutationVariables> {
    document = DeleteRatesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DepartmentsDocument = gql`
    query Departments {
  departments {
    id
    name
    manager {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DepartmentsGQL extends Apollo.Query<DepartmentsQuery, DepartmentsQueryVariables> {
    document = DepartmentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PersonsWithAllDocument = gql`
    query PersonsWithAll($where: PersonWhere) {
  people(where: $where) {
    ...PersonWithAllType
  }
}
    ${PersonWithAllTypeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PersonsWithAllGQL extends Apollo.Query<PersonsWithAllQuery, PersonsWithAllQueryVariables> {
    document = PersonsWithAllDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProjectsDocument = gql`
    query Projects {
  projects {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProjectsGQL extends Apollo.Query<ProjectsQuery, ProjectsQueryVariables> {
    document = ProjectsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProjectsWithAllDocument = gql`
    query ProjectsWithAll {
  projects {
    id
    name
    duration
    skills {
      id
      name
    }
    startedFrom
    persons {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProjectsWithAllGQL extends Apollo.Query<ProjectsWithAllQuery, ProjectsWithAllQueryVariables> {
    document = ProjectsWithAllDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RatesByPersonDocument = gql`
    query RatesByPerson($where: RateWhere) {
  rates(where: $where) {
    id
    validFrom
    value
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RatesByPersonGQL extends Apollo.Query<RatesByPersonQuery, RatesByPersonQueryVariables> {
    document = RatesByPersonDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SkillsDocument = gql`
    query Skills {
  skills {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SkillsGQL extends Apollo.Query<SkillsQuery, SkillsQueryVariables> {
    document = SkillsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RolesDocument = gql`
    query Roles {
  roles {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RolesGQL extends Apollo.Query<RolesQuery, RolesQueryVariables> {
    document = RolesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePeopleDocument = gql`
    mutation UpdatePeople($where: PersonWhere, $update: PersonUpdateInput) {
  updatePeople(where: $where, update: $update) {
    people {
      id
      name
      surname
      location {
        longitude
        latitude
      }
      skills {
        id
        name
      }
      roles {
        id
        name
      }
      birthday
      seniority
      rates {
        id
        value
        validFrom
      }
      departments {
        id
        name
        manager {
          name
          surname
        }
      }
      projects {
        id
        name
        duration
        startedFrom
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePeopleGQL extends Apollo.Mutation<UpdatePeopleMutation, UpdatePeopleMutationVariables> {
    document = UpdatePeopleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateRatesDocument = gql`
    mutation UpdateRates($where: RateWhere, $update: RateUpdateInput) {
  updateRates(where: $where, update: $update) {
    rates {
      id
      validFrom
      value
      person {
        id
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateRatesGQL extends Apollo.Mutation<UpdateRatesMutation, UpdateRatesMutationVariables> {
    document = UpdateRatesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }