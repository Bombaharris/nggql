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
  /** A date and time, represented as an ISO-8601 string */
  DateTime: any;
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

export type CreatePostsMutationResponse = {
  __typename?: 'CreatePostsMutationResponse';
  info: CreateInfo;
  posts: Array<Post>;
};

export type DateTimeAggregateSelection = {
  __typename?: 'DateTimeAggregateSelection';
  max?: Maybe<Scalars['DateTime']>;
  min?: Maybe<Scalars['DateTime']>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type IdAggregateSelection = {
  __typename?: 'IDAggregateSelection';
  longest?: Maybe<Scalars['ID']>;
  shortest?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPeople: CreatePeopleMutationResponse;
  createPosts: CreatePostsMutationResponse;
  deletePeople: DeleteInfo;
  deletePosts: DeleteInfo;
  updatePeople: UpdatePeopleMutationResponse;
  updatePosts: UpdatePostsMutationResponse;
};


export type MutationCreatePeopleArgs = {
  input: Array<PersonCreateInput>;
};


export type MutationCreatePostsArgs = {
  input: Array<PostCreateInput>;
};


export type MutationDeletePeopleArgs = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<PersonWhere>;
};


export type MutationDeletePostsArgs = {
  delete?: InputMaybe<PostDeleteInput>;
  where?: InputMaybe<PostWhere>;
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


export type MutationUpdatePostsArgs = {
  connect?: InputMaybe<PostConnectInput>;
  connectOrCreate?: InputMaybe<PostConnectOrCreateInput>;
  create?: InputMaybe<PostRelationInput>;
  delete?: InputMaybe<PostDeleteInput>;
  disconnect?: InputMaybe<PostDisconnectInput>;
  update?: InputMaybe<PostUpdateInput>;
  where?: InputMaybe<PostWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  birthday?: Maybe<Scalars['Date']>;
  friends: Array<Person>;
  friendsAggregate?: Maybe<PersonPersonFriendsAggregationSelection>;
  friendsConnection: PersonFriendsConnection;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Point>;
  name: Scalars['String'];
  posts: Array<Post>;
  postsAggregate?: Maybe<PersonPostPostsAggregationSelection>;
  postsConnection: PersonPostsConnection;
};


export type PersonFriendsArgs = {
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type PersonFriendsAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
};


export type PersonFriendsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonFriendsConnectionSort>>;
  where?: InputMaybe<PersonFriendsConnectionWhere>;
};


export type PersonPostsArgs = {
  options?: InputMaybe<PostOptions>;
  where?: InputMaybe<PostWhere>;
};


export type PersonPostsAggregateArgs = {
  where?: InputMaybe<PostWhere>;
};


export type PersonPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonPostsConnectionSort>>;
  where?: InputMaybe<PersonPostsConnectionWhere>;
};

export type PersonAggregateSelection = {
  __typename?: 'PersonAggregateSelection';
  count: Scalars['Int'];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type PersonConnectInput = {
  friends?: InputMaybe<Array<PersonFriendsConnectFieldInput>>;
  posts?: InputMaybe<Array<PersonPostsConnectFieldInput>>;
};

export type PersonConnectOrCreateInput = {
  friends?: InputMaybe<Array<PersonFriendsConnectOrCreateFieldInput>>;
  posts?: InputMaybe<Array<PersonPostsConnectOrCreateFieldInput>>;
};

export type PersonConnectOrCreateWhere = {
  node: PersonUniqueWhere;
};

export type PersonConnectWhere = {
  node: PersonWhere;
};

export type PersonCreateInput = {
  birthday?: InputMaybe<Scalars['Date']>;
  friends?: InputMaybe<PersonFriendsFieldInput>;
  location?: InputMaybe<PointInput>;
  name: Scalars['String'];
  posts?: InputMaybe<PersonPostsFieldInput>;
};

export type PersonDeleteInput = {
  friends?: InputMaybe<Array<PersonFriendsDeleteFieldInput>>;
  posts?: InputMaybe<Array<PersonPostsDeleteFieldInput>>;
};

export type PersonDisconnectInput = {
  friends?: InputMaybe<Array<PersonFriendsDisconnectFieldInput>>;
  posts?: InputMaybe<Array<PersonPostsDisconnectFieldInput>>;
};

export type PersonFriendsAggregateInput = {
  AND?: InputMaybe<Array<PersonFriendsAggregateInput>>;
  OR?: InputMaybe<Array<PersonFriendsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonFriendsNodeAggregationWhereInput>;
};

export type PersonFriendsConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>;
  where?: InputMaybe<PersonConnectWhere>;
};

export type PersonFriendsConnectOrCreateFieldInput = {
  onCreate: PersonFriendsConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type PersonFriendsConnectOrCreateFieldInputOnCreate = {
  node: PersonCreateInput;
};

export type PersonFriendsConnection = {
  __typename?: 'PersonFriendsConnection';
  edges: Array<PersonFriendsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonFriendsConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type PersonFriendsConnectionWhere = {
  AND?: InputMaybe<Array<PersonFriendsConnectionWhere>>;
  OR?: InputMaybe<Array<PersonFriendsConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
  node_NOT?: InputMaybe<PersonWhere>;
};

export type PersonFriendsCreateFieldInput = {
  node: PersonCreateInput;
};

export type PersonFriendsDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<PersonFriendsConnectionWhere>;
};

export type PersonFriendsDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<PersonFriendsConnectionWhere>;
};

export type PersonFriendsFieldInput = {
  connect?: InputMaybe<Array<PersonFriendsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonFriendsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonFriendsCreateFieldInput>>;
};

export type PersonFriendsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonFriendsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonFriendsNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type PersonFriendsRelationship = {
  __typename?: 'PersonFriendsRelationship';
  cursor: Scalars['String'];
  node: Person;
};

export type PersonFriendsUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type PersonFriendsUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonFriendsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonFriendsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonFriendsCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonFriendsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonFriendsDisconnectFieldInput>>;
  update?: InputMaybe<PersonFriendsUpdateConnectionInput>;
  where?: InputMaybe<PersonFriendsConnectionWhere>;
};

export type PersonOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more PersonSort objects to sort People by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<PersonSort>>>;
};

export type PersonPersonFriendsAggregationSelection = {
  __typename?: 'PersonPersonFriendsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonPersonFriendsNodeAggregateSelection>;
};

export type PersonPersonFriendsNodeAggregateSelection = {
  __typename?: 'PersonPersonFriendsNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type PersonPostPostsAggregationSelection = {
  __typename?: 'PersonPostPostsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonPostPostsNodeAggregateSelection>;
};

export type PersonPostPostsNodeAggregateSelection = {
  __typename?: 'PersonPostPostsNodeAggregateSelection';
  content: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
};

export type PersonPostsAggregateInput = {
  AND?: InputMaybe<Array<PersonPostsAggregateInput>>;
  OR?: InputMaybe<Array<PersonPostsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonPostsNodeAggregationWhereInput>;
};

export type PersonPostsConnectFieldInput = {
  connect?: InputMaybe<Array<PostConnectInput>>;
  where?: InputMaybe<PostConnectWhere>;
};

export type PersonPostsConnectOrCreateFieldInput = {
  onCreate: PersonPostsConnectOrCreateFieldInputOnCreate;
  where: PostConnectOrCreateWhere;
};

export type PersonPostsConnectOrCreateFieldInputOnCreate = {
  node: PostCreateInput;
};

export type PersonPostsConnection = {
  __typename?: 'PersonPostsConnection';
  edges: Array<PersonPostsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonPostsConnectionSort = {
  node?: InputMaybe<PostSort>;
};

export type PersonPostsConnectionWhere = {
  AND?: InputMaybe<Array<PersonPostsConnectionWhere>>;
  OR?: InputMaybe<Array<PersonPostsConnectionWhere>>;
  node?: InputMaybe<PostWhere>;
  node_NOT?: InputMaybe<PostWhere>;
};

export type PersonPostsCreateFieldInput = {
  node: PostCreateInput;
};

export type PersonPostsDeleteFieldInput = {
  delete?: InputMaybe<PostDeleteInput>;
  where?: InputMaybe<PersonPostsConnectionWhere>;
};

export type PersonPostsDisconnectFieldInput = {
  disconnect?: InputMaybe<PostDisconnectInput>;
  where?: InputMaybe<PersonPostsConnectionWhere>;
};

export type PersonPostsFieldInput = {
  connect?: InputMaybe<Array<PersonPostsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonPostsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonPostsCreateFieldInput>>;
};

export type PersonPostsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonPostsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonPostsNodeAggregationWhereInput>>;
  content_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  content_EQUAL?: InputMaybe<Scalars['String']>;
  content_GT?: InputMaybe<Scalars['Int']>;
  content_GTE?: InputMaybe<Scalars['Int']>;
  content_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  content_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  content_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  content_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  content_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  content_LT?: InputMaybe<Scalars['Int']>;
  content_LTE?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type PersonPostsRelationship = {
  __typename?: 'PersonPostsRelationship';
  cursor: Scalars['String'];
  node: Post;
};

export type PersonPostsUpdateConnectionInput = {
  node?: InputMaybe<PostUpdateInput>;
};

export type PersonPostsUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonPostsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonPostsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonPostsCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonPostsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonPostsDisconnectFieldInput>>;
  update?: InputMaybe<PersonPostsUpdateConnectionInput>;
  where?: InputMaybe<PersonPostsConnectionWhere>;
};

export type PersonRelationInput = {
  friends?: InputMaybe<Array<PersonFriendsCreateFieldInput>>;
  posts?: InputMaybe<Array<PersonPostsCreateFieldInput>>;
};

/** Fields to sort People by. The order in which sorts are applied is not guaranteed when specifying many fields in one PersonSort object. */
export type PersonSort = {
  birthday?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  location?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type PersonUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PersonUpdateInput = {
  birthday?: InputMaybe<Scalars['Date']>;
  friends?: InputMaybe<Array<PersonFriendsUpdateFieldInput>>;
  location?: InputMaybe<PointInput>;
  name?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Array<PersonPostsUpdateFieldInput>>;
};

export type PersonWhere = {
  AND?: InputMaybe<Array<PersonWhere>>;
  OR?: InputMaybe<Array<PersonWhere>>;
  birthday?: InputMaybe<Scalars['Date']>;
  birthday_GT?: InputMaybe<Scalars['Date']>;
  birthday_GTE?: InputMaybe<Scalars['Date']>;
  birthday_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  birthday_LT?: InputMaybe<Scalars['Date']>;
  birthday_LTE?: InputMaybe<Scalars['Date']>;
  birthday_NOT?: InputMaybe<Scalars['Date']>;
  birthday_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  friends?: InputMaybe<PersonWhere>;
  friendsAggregate?: InputMaybe<PersonFriendsAggregateInput>;
  friendsConnection?: InputMaybe<PersonFriendsConnectionWhere>;
  friendsConnection_NOT?: InputMaybe<PersonFriendsConnectionWhere>;
  friends_NOT?: InputMaybe<PersonWhere>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<PointInput>;
  location_DISTANCE?: InputMaybe<PointDistance>;
  location_GT?: InputMaybe<PointDistance>;
  location_GTE?: InputMaybe<PointDistance>;
  location_IN?: InputMaybe<Array<InputMaybe<PointInput>>>;
  location_LT?: InputMaybe<PointDistance>;
  location_LTE?: InputMaybe<PointDistance>;
  location_NOT?: InputMaybe<PointInput>;
  location_NOT_IN?: InputMaybe<Array<InputMaybe<PointInput>>>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostWhere>;
  postsAggregate?: InputMaybe<PersonPostsAggregateInput>;
  postsConnection?: InputMaybe<PersonPostsConnectionWhere>;
  postsConnection_NOT?: InputMaybe<PersonPostsConnectionWhere>;
  posts_NOT?: InputMaybe<PostWhere>;
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

export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creator: Person;
  creatorAggregate?: Maybe<PostPersonCreatorAggregationSelection>;
  creatorConnection: PostCreatorConnection;
  id?: Maybe<Scalars['ID']>;
};


export type PostCreatorArgs = {
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type PostCreatorAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
};


export type PostCreatorConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PostCreatorConnectionSort>>;
  where?: InputMaybe<PostCreatorConnectionWhere>;
};

export type PostAggregateSelection = {
  __typename?: 'PostAggregateSelection';
  content: StringAggregateSelection;
  count: Scalars['Int'];
  createdAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
};

export type PostConnectInput = {
  creator?: InputMaybe<PostCreatorConnectFieldInput>;
};

export type PostConnectOrCreateInput = {
  creator?: InputMaybe<PostCreatorConnectOrCreateFieldInput>;
};

export type PostConnectOrCreateWhere = {
  node: PostUniqueWhere;
};

export type PostConnectWhere = {
  node: PostWhere;
};

export type PostCreateInput = {
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creator?: InputMaybe<PostCreatorFieldInput>;
};

export type PostCreatorAggregateInput = {
  AND?: InputMaybe<Array<PostCreatorAggregateInput>>;
  OR?: InputMaybe<Array<PostCreatorAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PostCreatorNodeAggregationWhereInput>;
};

export type PostCreatorConnectFieldInput = {
  connect?: InputMaybe<PersonConnectInput>;
  where?: InputMaybe<PersonConnectWhere>;
};

export type PostCreatorConnectOrCreateFieldInput = {
  onCreate: PostCreatorConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type PostCreatorConnectOrCreateFieldInputOnCreate = {
  node: PersonCreateInput;
};

export type PostCreatorConnection = {
  __typename?: 'PostCreatorConnection';
  edges: Array<PostCreatorRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PostCreatorConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type PostCreatorConnectionWhere = {
  AND?: InputMaybe<Array<PostCreatorConnectionWhere>>;
  OR?: InputMaybe<Array<PostCreatorConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
  node_NOT?: InputMaybe<PersonWhere>;
};

export type PostCreatorCreateFieldInput = {
  node: PersonCreateInput;
};

export type PostCreatorDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<PostCreatorConnectionWhere>;
};

export type PostCreatorDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<PostCreatorConnectionWhere>;
};

export type PostCreatorFieldInput = {
  connect?: InputMaybe<PostCreatorConnectFieldInput>;
  connectOrCreate?: InputMaybe<PostCreatorConnectOrCreateFieldInput>;
  create?: InputMaybe<PostCreatorCreateFieldInput>;
};

export type PostCreatorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PostCreatorNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PostCreatorNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type PostCreatorRelationship = {
  __typename?: 'PostCreatorRelationship';
  cursor: Scalars['String'];
  node: Person;
};

export type PostCreatorUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type PostCreatorUpdateFieldInput = {
  connect?: InputMaybe<PostCreatorConnectFieldInput>;
  connectOrCreate?: InputMaybe<PostCreatorConnectOrCreateFieldInput>;
  create?: InputMaybe<PostCreatorCreateFieldInput>;
  delete?: InputMaybe<PostCreatorDeleteFieldInput>;
  disconnect?: InputMaybe<PostCreatorDisconnectFieldInput>;
  update?: InputMaybe<PostCreatorUpdateConnectionInput>;
  where?: InputMaybe<PostCreatorConnectionWhere>;
};

export type PostDeleteInput = {
  creator?: InputMaybe<PostCreatorDeleteFieldInput>;
};

export type PostDisconnectInput = {
  creator?: InputMaybe<PostCreatorDisconnectFieldInput>;
};

export type PostOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more PostSort objects to sort Posts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<PostSort>>>;
};

export type PostPersonCreatorAggregationSelection = {
  __typename?: 'PostPersonCreatorAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PostPersonCreatorNodeAggregateSelection>;
};

export type PostPersonCreatorNodeAggregateSelection = {
  __typename?: 'PostPersonCreatorNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type PostRelationInput = {
  creator?: InputMaybe<PostCreatorCreateFieldInput>;
};

/** Fields to sort Posts by. The order in which sorts are applied is not guaranteed when specifying many fields in one PostSort object. */
export type PostSort = {
  content?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
};

export type PostUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PostUpdateInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator?: InputMaybe<PostCreatorUpdateFieldInput>;
};

export type PostWhere = {
  AND?: InputMaybe<Array<PostWhere>>;
  OR?: InputMaybe<Array<PostWhere>>;
  content?: InputMaybe<Scalars['String']>;
  content_CONTAINS?: InputMaybe<Scalars['String']>;
  content_ENDS_WITH?: InputMaybe<Scalars['String']>;
  content_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content_NOT?: InputMaybe<Scalars['String']>;
  content_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  content_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  content_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  content_STARTS_WITH?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  creator?: InputMaybe<PersonWhere>;
  creatorAggregate?: InputMaybe<PostCreatorAggregateInput>;
  creatorConnection?: InputMaybe<PostCreatorConnectionWhere>;
  creatorConnection_NOT?: InputMaybe<PostCreatorConnectionWhere>;
  creator_NOT?: InputMaybe<PersonWhere>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  people: Array<Person>;
  peopleAggregate: PersonAggregateSelection;
  peopleCount: Scalars['Int'];
  posts: Array<Post>;
  postsAggregate: PostAggregateSelection;
  postsCount: Scalars['Int'];
};


export type QueryPeopleArgs = {
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type QueryPeopleAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
};


export type QueryPeopleCountArgs = {
  where?: InputMaybe<PersonWhere>;
};


export type QueryPostsArgs = {
  options?: InputMaybe<PostOptions>;
  where?: InputMaybe<PostWhere>;
};


export type QueryPostsAggregateArgs = {
  where?: InputMaybe<PostWhere>;
};


export type QueryPostsCountArgs = {
  where?: InputMaybe<PostWhere>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest?: Maybe<Scalars['String']>;
  shortest?: Maybe<Scalars['String']>;
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

export type UpdatePostsMutationResponse = {
  __typename?: 'UpdatePostsMutationResponse';
  info: UpdateInfo;
  posts: Array<Post>;
};

export type PersonsWithFriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type PersonsWithFriendsQuery = { __typename?: 'Query', people: Array<{ __typename?: 'Person', id?: string | null, name: string, friends: Array<{ __typename?: 'Person', id?: string | null, name: string }> }> };

export const PersonsWithFriendsDocument = gql`
    query PersonsWithFriends {
  people {
    id
    name
    friends {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PersonsWithFriendsGQL extends Apollo.Query<PersonsWithFriendsQuery, PersonsWithFriendsQueryVariables> {
    document = PersonsWithFriendsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }