import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
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
  delete?: Maybe<PersonDeleteInput>;
  where?: Maybe<PersonWhere>;
};


export type MutationDeletePostsArgs = {
  delete?: Maybe<PostDeleteInput>;
  where?: Maybe<PostWhere>;
};


export type MutationUpdatePeopleArgs = {
  connect?: Maybe<PersonConnectInput>;
  connectOrCreate?: Maybe<PersonConnectOrCreateInput>;
  create?: Maybe<PersonRelationInput>;
  delete?: Maybe<PersonDeleteInput>;
  disconnect?: Maybe<PersonDisconnectInput>;
  update?: Maybe<PersonUpdateInput>;
  where?: Maybe<PersonWhere>;
};


export type MutationUpdatePostsArgs = {
  connect?: Maybe<PostConnectInput>;
  connectOrCreate?: Maybe<PostConnectOrCreateInput>;
  create?: Maybe<PostRelationInput>;
  delete?: Maybe<PostDeleteInput>;
  disconnect?: Maybe<PostDisconnectInput>;
  update?: Maybe<PostUpdateInput>;
  where?: Maybe<PostWhere>;
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
  options?: Maybe<PersonOptions>;
  where?: Maybe<PersonWhere>;
};


export type PersonFriendsAggregateArgs = {
  where?: Maybe<PersonWhere>;
};


export type PersonFriendsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<PersonFriendsConnectionSort>>;
  where?: Maybe<PersonFriendsConnectionWhere>;
};


export type PersonPostsArgs = {
  options?: Maybe<PostOptions>;
  where?: Maybe<PostWhere>;
};


export type PersonPostsAggregateArgs = {
  where?: Maybe<PostWhere>;
};


export type PersonPostsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<PersonPostsConnectionSort>>;
  where?: Maybe<PersonPostsConnectionWhere>;
};

export type PersonAggregateSelection = {
  __typename?: 'PersonAggregateSelection';
  count: Scalars['Int'];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type PersonConnectInput = {
  friends?: Maybe<Array<PersonFriendsConnectFieldInput>>;
  posts?: Maybe<Array<PersonPostsConnectFieldInput>>;
};

export type PersonConnectOrCreateInput = {
  friends?: Maybe<Array<PersonFriendsConnectOrCreateFieldInput>>;
  posts?: Maybe<Array<PersonPostsConnectOrCreateFieldInput>>;
};

export type PersonConnectOrCreateWhere = {
  node: PersonUniqueWhere;
};

export type PersonConnectWhere = {
  node: PersonWhere;
};

export type PersonCreateInput = {
  birthday?: Maybe<Scalars['Date']>;
  friends?: Maybe<PersonFriendsFieldInput>;
  location?: Maybe<PointInput>;
  name: Scalars['String'];
  posts?: Maybe<PersonPostsFieldInput>;
};

export type PersonDeleteInput = {
  friends?: Maybe<Array<PersonFriendsDeleteFieldInput>>;
  posts?: Maybe<Array<PersonPostsDeleteFieldInput>>;
};

export type PersonDisconnectInput = {
  friends?: Maybe<Array<PersonFriendsDisconnectFieldInput>>;
  posts?: Maybe<Array<PersonPostsDisconnectFieldInput>>;
};

export type PersonFriendsAggregateInput = {
  AND?: Maybe<Array<PersonFriendsAggregateInput>>;
  OR?: Maybe<Array<PersonFriendsAggregateInput>>;
  count?: Maybe<Scalars['Int']>;
  count_GT?: Maybe<Scalars['Int']>;
  count_GTE?: Maybe<Scalars['Int']>;
  count_LT?: Maybe<Scalars['Int']>;
  count_LTE?: Maybe<Scalars['Int']>;
  node?: Maybe<PersonFriendsNodeAggregationWhereInput>;
};

export type PersonFriendsConnectFieldInput = {
  connect?: Maybe<Array<PersonConnectInput>>;
  where?: Maybe<PersonConnectWhere>;
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
  node?: Maybe<PersonSort>;
};

export type PersonFriendsConnectionWhere = {
  AND?: Maybe<Array<PersonFriendsConnectionWhere>>;
  OR?: Maybe<Array<PersonFriendsConnectionWhere>>;
  node?: Maybe<PersonWhere>;
  node_NOT?: Maybe<PersonWhere>;
};

export type PersonFriendsCreateFieldInput = {
  node: PersonCreateInput;
};

export type PersonFriendsDeleteFieldInput = {
  delete?: Maybe<PersonDeleteInput>;
  where?: Maybe<PersonFriendsConnectionWhere>;
};

export type PersonFriendsDisconnectFieldInput = {
  disconnect?: Maybe<PersonDisconnectInput>;
  where?: Maybe<PersonFriendsConnectionWhere>;
};

export type PersonFriendsFieldInput = {
  connect?: Maybe<Array<PersonFriendsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<PersonFriendsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<PersonFriendsCreateFieldInput>>;
};

export type PersonFriendsNodeAggregationWhereInput = {
  AND?: Maybe<Array<PersonFriendsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<PersonFriendsNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: Maybe<Scalars['Float']>;
  name_AVERAGE_GT?: Maybe<Scalars['Float']>;
  name_AVERAGE_GTE?: Maybe<Scalars['Float']>;
  name_AVERAGE_LT?: Maybe<Scalars['Float']>;
  name_AVERAGE_LTE?: Maybe<Scalars['Float']>;
  name_EQUAL?: Maybe<Scalars['String']>;
  name_GT?: Maybe<Scalars['Int']>;
  name_GTE?: Maybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: Maybe<Scalars['Int']>;
  name_LONGEST_GT?: Maybe<Scalars['Int']>;
  name_LONGEST_GTE?: Maybe<Scalars['Int']>;
  name_LONGEST_LT?: Maybe<Scalars['Int']>;
  name_LONGEST_LTE?: Maybe<Scalars['Int']>;
  name_LT?: Maybe<Scalars['Int']>;
  name_LTE?: Maybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: Maybe<Scalars['Int']>;
  name_SHORTEST_GT?: Maybe<Scalars['Int']>;
  name_SHORTEST_GTE?: Maybe<Scalars['Int']>;
  name_SHORTEST_LT?: Maybe<Scalars['Int']>;
  name_SHORTEST_LTE?: Maybe<Scalars['Int']>;
};

export type PersonFriendsRelationship = {
  __typename?: 'PersonFriendsRelationship';
  cursor: Scalars['String'];
  node: Person;
};

export type PersonFriendsUpdateConnectionInput = {
  node?: Maybe<PersonUpdateInput>;
};

export type PersonFriendsUpdateFieldInput = {
  connect?: Maybe<Array<PersonFriendsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<PersonFriendsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<PersonFriendsCreateFieldInput>>;
  delete?: Maybe<Array<PersonFriendsDeleteFieldInput>>;
  disconnect?: Maybe<Array<PersonFriendsDisconnectFieldInput>>;
  update?: Maybe<PersonFriendsUpdateConnectionInput>;
  where?: Maybe<PersonFriendsConnectionWhere>;
};

export type PersonOptions = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  /** Specify one or more PersonSort objects to sort People by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<PersonSort>>>;
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
  AND?: Maybe<Array<PersonPostsAggregateInput>>;
  OR?: Maybe<Array<PersonPostsAggregateInput>>;
  count?: Maybe<Scalars['Int']>;
  count_GT?: Maybe<Scalars['Int']>;
  count_GTE?: Maybe<Scalars['Int']>;
  count_LT?: Maybe<Scalars['Int']>;
  count_LTE?: Maybe<Scalars['Int']>;
  node?: Maybe<PersonPostsNodeAggregationWhereInput>;
};

export type PersonPostsConnectFieldInput = {
  connect?: Maybe<Array<PostConnectInput>>;
  where?: Maybe<PostConnectWhere>;
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
  node?: Maybe<PostSort>;
};

export type PersonPostsConnectionWhere = {
  AND?: Maybe<Array<PersonPostsConnectionWhere>>;
  OR?: Maybe<Array<PersonPostsConnectionWhere>>;
  node?: Maybe<PostWhere>;
  node_NOT?: Maybe<PostWhere>;
};

export type PersonPostsCreateFieldInput = {
  node: PostCreateInput;
};

export type PersonPostsDeleteFieldInput = {
  delete?: Maybe<PostDeleteInput>;
  where?: Maybe<PersonPostsConnectionWhere>;
};

export type PersonPostsDisconnectFieldInput = {
  disconnect?: Maybe<PostDisconnectInput>;
  where?: Maybe<PersonPostsConnectionWhere>;
};

export type PersonPostsFieldInput = {
  connect?: Maybe<Array<PersonPostsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<PersonPostsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<PersonPostsCreateFieldInput>>;
};

export type PersonPostsNodeAggregationWhereInput = {
  AND?: Maybe<Array<PersonPostsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<PersonPostsNodeAggregationWhereInput>>;
  content_AVERAGE_EQUAL?: Maybe<Scalars['Float']>;
  content_AVERAGE_GT?: Maybe<Scalars['Float']>;
  content_AVERAGE_GTE?: Maybe<Scalars['Float']>;
  content_AVERAGE_LT?: Maybe<Scalars['Float']>;
  content_AVERAGE_LTE?: Maybe<Scalars['Float']>;
  content_EQUAL?: Maybe<Scalars['String']>;
  content_GT?: Maybe<Scalars['Int']>;
  content_GTE?: Maybe<Scalars['Int']>;
  content_LONGEST_EQUAL?: Maybe<Scalars['Int']>;
  content_LONGEST_GT?: Maybe<Scalars['Int']>;
  content_LONGEST_GTE?: Maybe<Scalars['Int']>;
  content_LONGEST_LT?: Maybe<Scalars['Int']>;
  content_LONGEST_LTE?: Maybe<Scalars['Int']>;
  content_LT?: Maybe<Scalars['Int']>;
  content_LTE?: Maybe<Scalars['Int']>;
  content_SHORTEST_EQUAL?: Maybe<Scalars['Int']>;
  content_SHORTEST_GT?: Maybe<Scalars['Int']>;
  content_SHORTEST_GTE?: Maybe<Scalars['Int']>;
  content_SHORTEST_LT?: Maybe<Scalars['Int']>;
  content_SHORTEST_LTE?: Maybe<Scalars['Int']>;
  createdAt_EQUAL?: Maybe<Scalars['DateTime']>;
  createdAt_GT?: Maybe<Scalars['DateTime']>;
  createdAt_GTE?: Maybe<Scalars['DateTime']>;
  createdAt_LT?: Maybe<Scalars['DateTime']>;
  createdAt_LTE?: Maybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: Maybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: Maybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: Maybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: Maybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: Maybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: Maybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: Maybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: Maybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: Maybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: Maybe<Scalars['DateTime']>;
  id_EQUAL?: Maybe<Scalars['ID']>;
};

export type PersonPostsRelationship = {
  __typename?: 'PersonPostsRelationship';
  cursor: Scalars['String'];
  node: Post;
};

export type PersonPostsUpdateConnectionInput = {
  node?: Maybe<PostUpdateInput>;
};

export type PersonPostsUpdateFieldInput = {
  connect?: Maybe<Array<PersonPostsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<PersonPostsConnectOrCreateFieldInput>>;
  create?: Maybe<Array<PersonPostsCreateFieldInput>>;
  delete?: Maybe<Array<PersonPostsDeleteFieldInput>>;
  disconnect?: Maybe<Array<PersonPostsDisconnectFieldInput>>;
  update?: Maybe<PersonPostsUpdateConnectionInput>;
  where?: Maybe<PersonPostsConnectionWhere>;
};

export type PersonRelationInput = {
  friends?: Maybe<Array<PersonFriendsCreateFieldInput>>;
  posts?: Maybe<Array<PersonPostsCreateFieldInput>>;
};

/** Fields to sort People by. The order in which sorts are applied is not guaranteed when specifying many fields in one PersonSort object. */
export type PersonSort = {
  birthday?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  location?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
};

export type PersonUniqueWhere = {
  id?: Maybe<Scalars['ID']>;
};

export type PersonUpdateInput = {
  birthday?: Maybe<Scalars['Date']>;
  friends?: Maybe<Array<PersonFriendsUpdateFieldInput>>;
  location?: Maybe<PointInput>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<PersonPostsUpdateFieldInput>>;
};

export type PersonWhere = {
  AND?: Maybe<Array<PersonWhere>>;
  OR?: Maybe<Array<PersonWhere>>;
  birthday?: Maybe<Scalars['Date']>;
  birthday_GT?: Maybe<Scalars['Date']>;
  birthday_GTE?: Maybe<Scalars['Date']>;
  birthday_IN?: Maybe<Array<Maybe<Scalars['Date']>>>;
  birthday_LT?: Maybe<Scalars['Date']>;
  birthday_LTE?: Maybe<Scalars['Date']>;
  birthday_NOT?: Maybe<Scalars['Date']>;
  birthday_NOT_IN?: Maybe<Array<Maybe<Scalars['Date']>>>;
  friends?: Maybe<PersonWhere>;
  friendsAggregate?: Maybe<PersonFriendsAggregateInput>;
  friendsConnection?: Maybe<PersonFriendsConnectionWhere>;
  friendsConnection_NOT?: Maybe<PersonFriendsConnectionWhere>;
  friends_NOT?: Maybe<PersonWhere>;
  id?: Maybe<Scalars['ID']>;
  id_CONTAINS?: Maybe<Scalars['ID']>;
  id_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT?: Maybe<Scalars['ID']>;
  id_NOT_CONTAINS?: Maybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_STARTS_WITH?: Maybe<Scalars['ID']>;
  location?: Maybe<PointInput>;
  location_DISTANCE?: Maybe<PointDistance>;
  location_GT?: Maybe<PointDistance>;
  location_GTE?: Maybe<PointDistance>;
  location_IN?: Maybe<Array<Maybe<PointInput>>>;
  location_LT?: Maybe<PointDistance>;
  location_LTE?: Maybe<PointDistance>;
  location_NOT?: Maybe<PointInput>;
  location_NOT_IN?: Maybe<Array<Maybe<PointInput>>>;
  name?: Maybe<Scalars['String']>;
  name_CONTAINS?: Maybe<Scalars['String']>;
  name_ENDS_WITH?: Maybe<Scalars['String']>;
  name_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT?: Maybe<Scalars['String']>;
  name_NOT_CONTAINS?: Maybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  name_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  name_STARTS_WITH?: Maybe<Scalars['String']>;
  posts?: Maybe<PostWhere>;
  postsAggregate?: Maybe<PersonPostsAggregateInput>;
  postsConnection?: Maybe<PersonPostsConnectionWhere>;
  postsConnection_NOT?: Maybe<PersonPostsConnectionWhere>;
  posts_NOT?: Maybe<PostWhere>;
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
  height?: Maybe<Scalars['Float']>;
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
  options?: Maybe<PersonOptions>;
  where?: Maybe<PersonWhere>;
};


export type PostCreatorAggregateArgs = {
  where?: Maybe<PersonWhere>;
};


export type PostCreatorConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<PostCreatorConnectionSort>>;
  where?: Maybe<PostCreatorConnectionWhere>;
};

export type PostAggregateSelection = {
  __typename?: 'PostAggregateSelection';
  content: StringAggregateSelection;
  count: Scalars['Int'];
  createdAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
};

export type PostConnectInput = {
  creator?: Maybe<PostCreatorConnectFieldInput>;
};

export type PostConnectOrCreateInput = {
  creator?: Maybe<PostCreatorConnectOrCreateFieldInput>;
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
  creator?: Maybe<PostCreatorFieldInput>;
};

export type PostCreatorAggregateInput = {
  AND?: Maybe<Array<PostCreatorAggregateInput>>;
  OR?: Maybe<Array<PostCreatorAggregateInput>>;
  count?: Maybe<Scalars['Int']>;
  count_GT?: Maybe<Scalars['Int']>;
  count_GTE?: Maybe<Scalars['Int']>;
  count_LT?: Maybe<Scalars['Int']>;
  count_LTE?: Maybe<Scalars['Int']>;
  node?: Maybe<PostCreatorNodeAggregationWhereInput>;
};

export type PostCreatorConnectFieldInput = {
  connect?: Maybe<PersonConnectInput>;
  where?: Maybe<PersonConnectWhere>;
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
  node?: Maybe<PersonSort>;
};

export type PostCreatorConnectionWhere = {
  AND?: Maybe<Array<PostCreatorConnectionWhere>>;
  OR?: Maybe<Array<PostCreatorConnectionWhere>>;
  node?: Maybe<PersonWhere>;
  node_NOT?: Maybe<PersonWhere>;
};

export type PostCreatorCreateFieldInput = {
  node: PersonCreateInput;
};

export type PostCreatorDeleteFieldInput = {
  delete?: Maybe<PersonDeleteInput>;
  where?: Maybe<PostCreatorConnectionWhere>;
};

export type PostCreatorDisconnectFieldInput = {
  disconnect?: Maybe<PersonDisconnectInput>;
  where?: Maybe<PostCreatorConnectionWhere>;
};

export type PostCreatorFieldInput = {
  connect?: Maybe<PostCreatorConnectFieldInput>;
  connectOrCreate?: Maybe<PostCreatorConnectOrCreateFieldInput>;
  create?: Maybe<PostCreatorCreateFieldInput>;
};

export type PostCreatorNodeAggregationWhereInput = {
  AND?: Maybe<Array<PostCreatorNodeAggregationWhereInput>>;
  OR?: Maybe<Array<PostCreatorNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: Maybe<Scalars['Float']>;
  name_AVERAGE_GT?: Maybe<Scalars['Float']>;
  name_AVERAGE_GTE?: Maybe<Scalars['Float']>;
  name_AVERAGE_LT?: Maybe<Scalars['Float']>;
  name_AVERAGE_LTE?: Maybe<Scalars['Float']>;
  name_EQUAL?: Maybe<Scalars['String']>;
  name_GT?: Maybe<Scalars['Int']>;
  name_GTE?: Maybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: Maybe<Scalars['Int']>;
  name_LONGEST_GT?: Maybe<Scalars['Int']>;
  name_LONGEST_GTE?: Maybe<Scalars['Int']>;
  name_LONGEST_LT?: Maybe<Scalars['Int']>;
  name_LONGEST_LTE?: Maybe<Scalars['Int']>;
  name_LT?: Maybe<Scalars['Int']>;
  name_LTE?: Maybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: Maybe<Scalars['Int']>;
  name_SHORTEST_GT?: Maybe<Scalars['Int']>;
  name_SHORTEST_GTE?: Maybe<Scalars['Int']>;
  name_SHORTEST_LT?: Maybe<Scalars['Int']>;
  name_SHORTEST_LTE?: Maybe<Scalars['Int']>;
};

export type PostCreatorRelationship = {
  __typename?: 'PostCreatorRelationship';
  cursor: Scalars['String'];
  node: Person;
};

export type PostCreatorUpdateConnectionInput = {
  node?: Maybe<PersonUpdateInput>;
};

export type PostCreatorUpdateFieldInput = {
  connect?: Maybe<PostCreatorConnectFieldInput>;
  connectOrCreate?: Maybe<PostCreatorConnectOrCreateFieldInput>;
  create?: Maybe<PostCreatorCreateFieldInput>;
  delete?: Maybe<PostCreatorDeleteFieldInput>;
  disconnect?: Maybe<PostCreatorDisconnectFieldInput>;
  update?: Maybe<PostCreatorUpdateConnectionInput>;
  where?: Maybe<PostCreatorConnectionWhere>;
};

export type PostDeleteInput = {
  creator?: Maybe<PostCreatorDeleteFieldInput>;
};

export type PostDisconnectInput = {
  creator?: Maybe<PostCreatorDisconnectFieldInput>;
};

export type PostOptions = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  /** Specify one or more PostSort objects to sort Posts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<PostSort>>>;
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
  creator?: Maybe<PostCreatorCreateFieldInput>;
};

/** Fields to sort Posts by. The order in which sorts are applied is not guaranteed when specifying many fields in one PostSort object. */
export type PostSort = {
  content?: Maybe<SortDirection>;
  createdAt?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
};

export type PostUniqueWhere = {
  id?: Maybe<Scalars['ID']>;
};

export type PostUpdateInput = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<PostCreatorUpdateFieldInput>;
};

export type PostWhere = {
  AND?: Maybe<Array<PostWhere>>;
  OR?: Maybe<Array<PostWhere>>;
  content?: Maybe<Scalars['String']>;
  content_CONTAINS?: Maybe<Scalars['String']>;
  content_ENDS_WITH?: Maybe<Scalars['String']>;
  content_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  content_NOT?: Maybe<Scalars['String']>;
  content_NOT_CONTAINS?: Maybe<Scalars['String']>;
  content_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  content_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  content_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  content_STARTS_WITH?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_GT?: Maybe<Scalars['DateTime']>;
  createdAt_GTE?: Maybe<Scalars['DateTime']>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_LT?: Maybe<Scalars['DateTime']>;
  createdAt_LTE?: Maybe<Scalars['DateTime']>;
  createdAt_NOT?: Maybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  creator?: Maybe<PersonWhere>;
  creatorAggregate?: Maybe<PostCreatorAggregateInput>;
  creatorConnection?: Maybe<PostCreatorConnectionWhere>;
  creatorConnection_NOT?: Maybe<PostCreatorConnectionWhere>;
  creator_NOT?: Maybe<PersonWhere>;
  id?: Maybe<Scalars['ID']>;
  id_CONTAINS?: Maybe<Scalars['ID']>;
  id_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT?: Maybe<Scalars['ID']>;
  id_NOT_CONTAINS?: Maybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: Maybe<Scalars['ID']>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: Maybe<Scalars['ID']>;
  id_STARTS_WITH?: Maybe<Scalars['ID']>;
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
  options?: Maybe<PersonOptions>;
  where?: Maybe<PersonWhere>;
};


export type QueryPeopleAggregateArgs = {
  where?: Maybe<PersonWhere>;
};


export type QueryPeopleCountArgs = {
  where?: Maybe<PersonWhere>;
};


export type QueryPostsArgs = {
  options?: Maybe<PostOptions>;
  where?: Maybe<PostWhere>;
};


export type QueryPostsAggregateArgs = {
  where?: Maybe<PostWhere>;
};


export type QueryPostsCountArgs = {
  where?: Maybe<PostWhere>;
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


export type PersonsWithFriendsQuery = { __typename?: 'Query', people: Array<{ __typename?: 'Person', id?: string | null | undefined, name: string, friends: Array<{ __typename?: 'Person', id?: string | null | undefined, name: string }> }> };

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