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
};

export type CreateGenresMutationResponse = {
  __typename?: 'CreateGenresMutationResponse';
  genres: Array<Genre>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreateMoviesMutationResponse = {
  __typename?: 'CreateMoviesMutationResponse';
  info: CreateInfo;
  movies: Array<Movie>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type FloatAggregateSelection = {
  __typename?: 'FloatAggregateSelection';
  average: Scalars['Float'];
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type Genre = {
  __typename?: 'Genre';
  movies?: Maybe<Array<Maybe<Movie>>>;
  moviesConnection: GenreMoviesConnection;
  name?: Maybe<Scalars['String']>;
};


export type GenreMoviesArgs = {
  options?: Maybe<MovieOptions>;
  where?: Maybe<MovieWhere>;
};


export type GenreMoviesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GenreMoviesConnectionSort>>;
  where?: Maybe<GenreMoviesConnectionWhere>;
};

export type GenreAggregateSelection = {
  __typename?: 'GenreAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelection;
};

export type GenreConnectInput = {
  movies?: Maybe<Array<GenreMoviesConnectFieldInput>>;
};

export type GenreConnectWhere = {
  node: GenreWhere;
};

export type GenreCreateInput = {
  movies?: Maybe<GenreMoviesFieldInput>;
  name?: Maybe<Scalars['String']>;
};

export type GenreDeleteInput = {
  movies?: Maybe<Array<GenreMoviesDeleteFieldInput>>;
};

export type GenreDisconnectInput = {
  movies?: Maybe<Array<GenreMoviesDisconnectFieldInput>>;
};

export type GenreMoviesAggregateInput = {
  AND?: Maybe<Array<GenreMoviesAggregateInput>>;
  OR?: Maybe<Array<GenreMoviesAggregateInput>>;
  count?: Maybe<Scalars['Int']>;
  count_GT?: Maybe<Scalars['Int']>;
  count_GTE?: Maybe<Scalars['Int']>;
  count_LT?: Maybe<Scalars['Int']>;
  count_LTE?: Maybe<Scalars['Int']>;
  node?: Maybe<GenreMoviesNodeAggregationWhereInput>;
};

export type GenreMoviesConnectFieldInput = {
  connect?: Maybe<Array<MovieConnectInput>>;
  where?: Maybe<MovieConnectWhere>;
};

export type GenreMoviesConnection = {
  __typename?: 'GenreMoviesConnection';
  edges: Array<GenreMoviesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GenreMoviesConnectionSort = {
  node?: Maybe<MovieSort>;
};

export type GenreMoviesConnectionWhere = {
  AND?: Maybe<Array<GenreMoviesConnectionWhere>>;
  OR?: Maybe<Array<GenreMoviesConnectionWhere>>;
  node?: Maybe<MovieWhere>;
  node_NOT?: Maybe<MovieWhere>;
};

export type GenreMoviesCreateFieldInput = {
  node: MovieCreateInput;
};

export type GenreMoviesDeleteFieldInput = {
  delete?: Maybe<MovieDeleteInput>;
  where?: Maybe<GenreMoviesConnectionWhere>;
};

export type GenreMoviesDisconnectFieldInput = {
  disconnect?: Maybe<MovieDisconnectInput>;
  where?: Maybe<GenreMoviesConnectionWhere>;
};

export type GenreMoviesFieldInput = {
  connect?: Maybe<Array<GenreMoviesConnectFieldInput>>;
  create?: Maybe<Array<GenreMoviesCreateFieldInput>>;
};

export type GenreMoviesNodeAggregationWhereInput = {
  AND?: Maybe<Array<GenreMoviesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<GenreMoviesNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: Maybe<Scalars['Float']>;
  description_AVERAGE_GT?: Maybe<Scalars['Float']>;
  description_AVERAGE_GTE?: Maybe<Scalars['Float']>;
  description_AVERAGE_LT?: Maybe<Scalars['Float']>;
  description_AVERAGE_LTE?: Maybe<Scalars['Float']>;
  description_EQUAL?: Maybe<Scalars['String']>;
  description_GT?: Maybe<Scalars['Int']>;
  description_GTE?: Maybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: Maybe<Scalars['Int']>;
  description_LONGEST_GT?: Maybe<Scalars['Int']>;
  description_LONGEST_GTE?: Maybe<Scalars['Int']>;
  description_LONGEST_LT?: Maybe<Scalars['Int']>;
  description_LONGEST_LTE?: Maybe<Scalars['Int']>;
  description_LT?: Maybe<Scalars['Int']>;
  description_LTE?: Maybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: Maybe<Scalars['Int']>;
  description_SHORTEST_GT?: Maybe<Scalars['Int']>;
  description_SHORTEST_GTE?: Maybe<Scalars['Int']>;
  description_SHORTEST_LT?: Maybe<Scalars['Int']>;
  description_SHORTEST_LTE?: Maybe<Scalars['Int']>;
  genre_AVERAGE_EQUAL?: Maybe<Scalars['Float']>;
  genre_AVERAGE_GT?: Maybe<Scalars['Float']>;
  genre_AVERAGE_GTE?: Maybe<Scalars['Float']>;
  genre_AVERAGE_LT?: Maybe<Scalars['Float']>;
  genre_AVERAGE_LTE?: Maybe<Scalars['Float']>;
  genre_EQUAL?: Maybe<Scalars['String']>;
  genre_GT?: Maybe<Scalars['Int']>;
  genre_GTE?: Maybe<Scalars['Int']>;
  genre_LONGEST_EQUAL?: Maybe<Scalars['Int']>;
  genre_LONGEST_GT?: Maybe<Scalars['Int']>;
  genre_LONGEST_GTE?: Maybe<Scalars['Int']>;
  genre_LONGEST_LT?: Maybe<Scalars['Int']>;
  genre_LONGEST_LTE?: Maybe<Scalars['Int']>;
  genre_LT?: Maybe<Scalars['Int']>;
  genre_LTE?: Maybe<Scalars['Int']>;
  genre_SHORTEST_EQUAL?: Maybe<Scalars['Int']>;
  genre_SHORTEST_GT?: Maybe<Scalars['Int']>;
  genre_SHORTEST_GTE?: Maybe<Scalars['Int']>;
  genre_SHORTEST_LT?: Maybe<Scalars['Int']>;
  genre_SHORTEST_LTE?: Maybe<Scalars['Int']>;
  homepage_AVERAGE_EQUAL?: Maybe<Scalars['Float']>;
  homepage_AVERAGE_GT?: Maybe<Scalars['Float']>;
  homepage_AVERAGE_GTE?: Maybe<Scalars['Float']>;
  homepage_AVERAGE_LT?: Maybe<Scalars['Float']>;
  homepage_AVERAGE_LTE?: Maybe<Scalars['Float']>;
  homepage_EQUAL?: Maybe<Scalars['String']>;
  homepage_GT?: Maybe<Scalars['Int']>;
  homepage_GTE?: Maybe<Scalars['Int']>;
  homepage_LONGEST_EQUAL?: Maybe<Scalars['Int']>;
  homepage_LONGEST_GT?: Maybe<Scalars['Int']>;
  homepage_LONGEST_GTE?: Maybe<Scalars['Int']>;
  homepage_LONGEST_LT?: Maybe<Scalars['Int']>;
  homepage_LONGEST_LTE?: Maybe<Scalars['Int']>;
  homepage_LT?: Maybe<Scalars['Int']>;
  homepage_LTE?: Maybe<Scalars['Int']>;
  homepage_SHORTEST_EQUAL?: Maybe<Scalars['Int']>;
  homepage_SHORTEST_GT?: Maybe<Scalars['Int']>;
  homepage_SHORTEST_GTE?: Maybe<Scalars['Int']>;
  homepage_SHORTEST_LT?: Maybe<Scalars['Int']>;
  homepage_SHORTEST_LTE?: Maybe<Scalars['Int']>;
  imageUrl_AVERAGE_EQUAL?: Maybe<Scalars['Float']>;
  imageUrl_AVERAGE_GT?: Maybe<Scalars['Float']>;
  imageUrl_AVERAGE_GTE?: Maybe<Scalars['Float']>;
  imageUrl_AVERAGE_LT?: Maybe<Scalars['Float']>;
  imageUrl_AVERAGE_LTE?: Maybe<Scalars['Float']>;
  imageUrl_EQUAL?: Maybe<Scalars['String']>;
  imageUrl_GT?: Maybe<Scalars['Int']>;
  imageUrl_GTE?: Maybe<Scalars['Int']>;
  imageUrl_LONGEST_EQUAL?: Maybe<Scalars['Int']>;
  imageUrl_LONGEST_GT?: Maybe<Scalars['Int']>;
  imageUrl_LONGEST_GTE?: Maybe<Scalars['Int']>;
  imageUrl_LONGEST_LT?: Maybe<Scalars['Int']>;
  imageUrl_LONGEST_LTE?: Maybe<Scalars['Int']>;
  imageUrl_LT?: Maybe<Scalars['Int']>;
  imageUrl_LTE?: Maybe<Scalars['Int']>;
  imageUrl_SHORTEST_EQUAL?: Maybe<Scalars['Int']>;
  imageUrl_SHORTEST_GT?: Maybe<Scalars['Int']>;
  imageUrl_SHORTEST_GTE?: Maybe<Scalars['Int']>;
  imageUrl_SHORTEST_LT?: Maybe<Scalars['Int']>;
  imageUrl_SHORTEST_LTE?: Maybe<Scalars['Int']>;
  imdbRating_AVERAGE_EQUAL?: Maybe<Scalars['Float']>;
  imdbRating_AVERAGE_GT?: Maybe<Scalars['Float']>;
  imdbRating_AVERAGE_GTE?: Maybe<Scalars['Float']>;
  imdbRating_AVERAGE_LT?: Maybe<Scalars['Float']>;
  imdbRating_AVERAGE_LTE?: Maybe<Scalars['Float']>;
  imdbRating_EQUAL?: Maybe<Scalars['Float']>;
  imdbRating_GT?: Maybe<Scalars['Float']>;
  imdbRating_GTE?: Maybe<Scalars['Float']>;
  imdbRating_LT?: Maybe<Scalars['Float']>;
  imdbRating_LTE?: Maybe<Scalars['Float']>;
  imdbRating_MAX_EQUAL?: Maybe<Scalars['Float']>;
  imdbRating_MAX_GT?: Maybe<Scalars['Float']>;
  imdbRating_MAX_GTE?: Maybe<Scalars['Float']>;
  imdbRating_MAX_LT?: Maybe<Scalars['Float']>;
  imdbRating_MAX_LTE?: Maybe<Scalars['Float']>;
  imdbRating_MIN_EQUAL?: Maybe<Scalars['Float']>;
  imdbRating_MIN_GT?: Maybe<Scalars['Float']>;
  imdbRating_MIN_GTE?: Maybe<Scalars['Float']>;
  imdbRating_MIN_LT?: Maybe<Scalars['Float']>;
  imdbRating_MIN_LTE?: Maybe<Scalars['Float']>;
  runtime_AVERAGE_EQUAL?: Maybe<Scalars['Float']>;
  runtime_AVERAGE_GT?: Maybe<Scalars['Float']>;
  runtime_AVERAGE_GTE?: Maybe<Scalars['Float']>;
  runtime_AVERAGE_LT?: Maybe<Scalars['Float']>;
  runtime_AVERAGE_LTE?: Maybe<Scalars['Float']>;
  runtime_EQUAL?: Maybe<Scalars['Int']>;
  runtime_GT?: Maybe<Scalars['Int']>;
  runtime_GTE?: Maybe<Scalars['Int']>;
  runtime_LT?: Maybe<Scalars['Int']>;
  runtime_LTE?: Maybe<Scalars['Int']>;
  runtime_MAX_EQUAL?: Maybe<Scalars['Int']>;
  runtime_MAX_GT?: Maybe<Scalars['Int']>;
  runtime_MAX_GTE?: Maybe<Scalars['Int']>;
  runtime_MAX_LT?: Maybe<Scalars['Int']>;
  runtime_MAX_LTE?: Maybe<Scalars['Int']>;
  runtime_MIN_EQUAL?: Maybe<Scalars['Int']>;
  runtime_MIN_GT?: Maybe<Scalars['Int']>;
  runtime_MIN_GTE?: Maybe<Scalars['Int']>;
  runtime_MIN_LT?: Maybe<Scalars['Int']>;
  runtime_MIN_LTE?: Maybe<Scalars['Int']>;
  studio_AVERAGE_EQUAL?: Maybe<Scalars['Float']>;
  studio_AVERAGE_GT?: Maybe<Scalars['Float']>;
  studio_AVERAGE_GTE?: Maybe<Scalars['Float']>;
  studio_AVERAGE_LT?: Maybe<Scalars['Float']>;
  studio_AVERAGE_LTE?: Maybe<Scalars['Float']>;
  studio_EQUAL?: Maybe<Scalars['String']>;
  studio_GT?: Maybe<Scalars['Int']>;
  studio_GTE?: Maybe<Scalars['Int']>;
  studio_LONGEST_EQUAL?: Maybe<Scalars['Int']>;
  studio_LONGEST_GT?: Maybe<Scalars['Int']>;
  studio_LONGEST_GTE?: Maybe<Scalars['Int']>;
  studio_LONGEST_LT?: Maybe<Scalars['Int']>;
  studio_LONGEST_LTE?: Maybe<Scalars['Int']>;
  studio_LT?: Maybe<Scalars['Int']>;
  studio_LTE?: Maybe<Scalars['Int']>;
  studio_SHORTEST_EQUAL?: Maybe<Scalars['Int']>;
  studio_SHORTEST_GT?: Maybe<Scalars['Int']>;
  studio_SHORTEST_GTE?: Maybe<Scalars['Int']>;
  studio_SHORTEST_LT?: Maybe<Scalars['Int']>;
  studio_SHORTEST_LTE?: Maybe<Scalars['Int']>;
  tagline_AVERAGE_EQUAL?: Maybe<Scalars['Float']>;
  tagline_AVERAGE_GT?: Maybe<Scalars['Float']>;
  tagline_AVERAGE_GTE?: Maybe<Scalars['Float']>;
  tagline_AVERAGE_LT?: Maybe<Scalars['Float']>;
  tagline_AVERAGE_LTE?: Maybe<Scalars['Float']>;
  tagline_EQUAL?: Maybe<Scalars['String']>;
  tagline_GT?: Maybe<Scalars['Int']>;
  tagline_GTE?: Maybe<Scalars['Int']>;
  tagline_LONGEST_EQUAL?: Maybe<Scalars['Int']>;
  tagline_LONGEST_GT?: Maybe<Scalars['Int']>;
  tagline_LONGEST_GTE?: Maybe<Scalars['Int']>;
  tagline_LONGEST_LT?: Maybe<Scalars['Int']>;
  tagline_LONGEST_LTE?: Maybe<Scalars['Int']>;
  tagline_LT?: Maybe<Scalars['Int']>;
  tagline_LTE?: Maybe<Scalars['Int']>;
  tagline_SHORTEST_EQUAL?: Maybe<Scalars['Int']>;
  tagline_SHORTEST_GT?: Maybe<Scalars['Int']>;
  tagline_SHORTEST_GTE?: Maybe<Scalars['Int']>;
  tagline_SHORTEST_LT?: Maybe<Scalars['Int']>;
  tagline_SHORTEST_LTE?: Maybe<Scalars['Int']>;
  title_AVERAGE_EQUAL?: Maybe<Scalars['Float']>;
  title_AVERAGE_GT?: Maybe<Scalars['Float']>;
  title_AVERAGE_GTE?: Maybe<Scalars['Float']>;
  title_AVERAGE_LT?: Maybe<Scalars['Float']>;
  title_AVERAGE_LTE?: Maybe<Scalars['Float']>;
  title_EQUAL?: Maybe<Scalars['String']>;
  title_GT?: Maybe<Scalars['Int']>;
  title_GTE?: Maybe<Scalars['Int']>;
  title_LONGEST_EQUAL?: Maybe<Scalars['Int']>;
  title_LONGEST_GT?: Maybe<Scalars['Int']>;
  title_LONGEST_GTE?: Maybe<Scalars['Int']>;
  title_LONGEST_LT?: Maybe<Scalars['Int']>;
  title_LONGEST_LTE?: Maybe<Scalars['Int']>;
  title_LT?: Maybe<Scalars['Int']>;
  title_LTE?: Maybe<Scalars['Int']>;
  title_SHORTEST_EQUAL?: Maybe<Scalars['Int']>;
  title_SHORTEST_GT?: Maybe<Scalars['Int']>;
  title_SHORTEST_GTE?: Maybe<Scalars['Int']>;
  title_SHORTEST_LT?: Maybe<Scalars['Int']>;
  title_SHORTEST_LTE?: Maybe<Scalars['Int']>;
  trailer_AVERAGE_EQUAL?: Maybe<Scalars['Float']>;
  trailer_AVERAGE_GT?: Maybe<Scalars['Float']>;
  trailer_AVERAGE_GTE?: Maybe<Scalars['Float']>;
  trailer_AVERAGE_LT?: Maybe<Scalars['Float']>;
  trailer_AVERAGE_LTE?: Maybe<Scalars['Float']>;
  trailer_EQUAL?: Maybe<Scalars['String']>;
  trailer_GT?: Maybe<Scalars['Int']>;
  trailer_GTE?: Maybe<Scalars['Int']>;
  trailer_LONGEST_EQUAL?: Maybe<Scalars['Int']>;
  trailer_LONGEST_GT?: Maybe<Scalars['Int']>;
  trailer_LONGEST_GTE?: Maybe<Scalars['Int']>;
  trailer_LONGEST_LT?: Maybe<Scalars['Int']>;
  trailer_LONGEST_LTE?: Maybe<Scalars['Int']>;
  trailer_LT?: Maybe<Scalars['Int']>;
  trailer_LTE?: Maybe<Scalars['Int']>;
  trailer_SHORTEST_EQUAL?: Maybe<Scalars['Int']>;
  trailer_SHORTEST_GT?: Maybe<Scalars['Int']>;
  trailer_SHORTEST_GTE?: Maybe<Scalars['Int']>;
  trailer_SHORTEST_LT?: Maybe<Scalars['Int']>;
  trailer_SHORTEST_LTE?: Maybe<Scalars['Int']>;
  year_AVERAGE_EQUAL?: Maybe<Scalars['Float']>;
  year_AVERAGE_GT?: Maybe<Scalars['Float']>;
  year_AVERAGE_GTE?: Maybe<Scalars['Float']>;
  year_AVERAGE_LT?: Maybe<Scalars['Float']>;
  year_AVERAGE_LTE?: Maybe<Scalars['Float']>;
  year_EQUAL?: Maybe<Scalars['Int']>;
  year_GT?: Maybe<Scalars['Int']>;
  year_GTE?: Maybe<Scalars['Int']>;
  year_LT?: Maybe<Scalars['Int']>;
  year_LTE?: Maybe<Scalars['Int']>;
  year_MAX_EQUAL?: Maybe<Scalars['Int']>;
  year_MAX_GT?: Maybe<Scalars['Int']>;
  year_MAX_GTE?: Maybe<Scalars['Int']>;
  year_MAX_LT?: Maybe<Scalars['Int']>;
  year_MAX_LTE?: Maybe<Scalars['Int']>;
  year_MIN_EQUAL?: Maybe<Scalars['Int']>;
  year_MIN_GT?: Maybe<Scalars['Int']>;
  year_MIN_GTE?: Maybe<Scalars['Int']>;
  year_MIN_LT?: Maybe<Scalars['Int']>;
  year_MIN_LTE?: Maybe<Scalars['Int']>;
};

export type GenreMoviesRelationship = {
  __typename?: 'GenreMoviesRelationship';
  cursor: Scalars['String'];
  node: Movie;
};

export type GenreMoviesUpdateConnectionInput = {
  node?: Maybe<MovieUpdateInput>;
};

export type GenreMoviesUpdateFieldInput = {
  connect?: Maybe<Array<GenreMoviesConnectFieldInput>>;
  create?: Maybe<Array<GenreMoviesCreateFieldInput>>;
  delete?: Maybe<Array<GenreMoviesDeleteFieldInput>>;
  disconnect?: Maybe<Array<GenreMoviesDisconnectFieldInput>>;
  update?: Maybe<GenreMoviesUpdateConnectionInput>;
  where?: Maybe<GenreMoviesConnectionWhere>;
};

export type GenreOptions = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  /** Specify one or more GenreSort objects to sort Genres by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<GenreSort>>>;
};

export type GenreRelationInput = {
  movies?: Maybe<Array<GenreMoviesCreateFieldInput>>;
};

/** Fields to sort Genres by. The order in which sorts are applied is not guaranteed when specifying many fields in one GenreSort object. */
export type GenreSort = {
  name?: Maybe<SortDirection>;
};

export type GenreUpdateInput = {
  movies?: Maybe<Array<GenreMoviesUpdateFieldInput>>;
  name?: Maybe<Scalars['String']>;
};

export type GenreWhere = {
  AND?: Maybe<Array<GenreWhere>>;
  OR?: Maybe<Array<GenreWhere>>;
  movies?: Maybe<MovieWhere>;
  moviesAggregate?: Maybe<GenreMoviesAggregateInput>;
  moviesConnection?: Maybe<GenreMoviesConnectionWhere>;
  moviesConnection_NOT?: Maybe<GenreMoviesConnectionWhere>;
  movies_NOT?: Maybe<MovieWhere>;
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
};

export type IntAggregateSelection = {
  __typename?: 'IntAggregateSelection';
  average: Scalars['Float'];
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type Movie = {
  __typename?: 'Movie';
  description: Scalars['String'];
  genre?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  genresConnection: MovieGenresConnection;
  homepage: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  imdbRating?: Maybe<Scalars['Float']>;
  runtime?: Maybe<Scalars['Int']>;
  studio?: Maybe<Scalars['String']>;
  tagline: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};


export type MovieGenresArgs = {
  options?: Maybe<GenreOptions>;
  where?: Maybe<GenreWhere>;
};


export type MovieGenresConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<MovieGenresConnectionSort>>;
  where?: Maybe<MovieGenresConnectionWhere>;
};

export type MovieAggregateSelection = {
  __typename?: 'MovieAggregateSelection';
  count: Scalars['Int'];
  description: StringAggregateSelection;
  genre: StringAggregateSelection;
  homepage: StringAggregateSelection;
  imageUrl: StringAggregateSelection;
  imdbRating: FloatAggregateSelection;
  runtime: IntAggregateSelection;
  studio: StringAggregateSelection;
  tagline: StringAggregateSelection;
  title: StringAggregateSelection;
  trailer: StringAggregateSelection;
  year: IntAggregateSelection;
};

export type MovieConnectInput = {
  genres?: Maybe<Array<MovieGenresConnectFieldInput>>;
};

export type MovieConnectWhere = {
  node: MovieWhere;
};

export type MovieCreateInput = {
  description: Scalars['String'];
  genre?: Maybe<Scalars['String']>;
  genres?: Maybe<MovieGenresFieldInput>;
  homepage: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  imdbRating?: Maybe<Scalars['Float']>;
  runtime?: Maybe<Scalars['Int']>;
  studio?: Maybe<Scalars['String']>;
  tagline: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type MovieDeleteInput = {
  genres?: Maybe<Array<MovieGenresDeleteFieldInput>>;
};

export type MovieDisconnectInput = {
  genres?: Maybe<Array<MovieGenresDisconnectFieldInput>>;
};

export type MovieGenresAggregateInput = {
  AND?: Maybe<Array<MovieGenresAggregateInput>>;
  OR?: Maybe<Array<MovieGenresAggregateInput>>;
  count?: Maybe<Scalars['Int']>;
  count_GT?: Maybe<Scalars['Int']>;
  count_GTE?: Maybe<Scalars['Int']>;
  count_LT?: Maybe<Scalars['Int']>;
  count_LTE?: Maybe<Scalars['Int']>;
  node?: Maybe<MovieGenresNodeAggregationWhereInput>;
};

export type MovieGenresConnectFieldInput = {
  connect?: Maybe<Array<GenreConnectInput>>;
  where?: Maybe<GenreConnectWhere>;
};

export type MovieGenresConnection = {
  __typename?: 'MovieGenresConnection';
  edges: Array<MovieGenresRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MovieGenresConnectionSort = {
  node?: Maybe<GenreSort>;
};

export type MovieGenresConnectionWhere = {
  AND?: Maybe<Array<MovieGenresConnectionWhere>>;
  OR?: Maybe<Array<MovieGenresConnectionWhere>>;
  node?: Maybe<GenreWhere>;
  node_NOT?: Maybe<GenreWhere>;
};

export type MovieGenresCreateFieldInput = {
  node: GenreCreateInput;
};

export type MovieGenresDeleteFieldInput = {
  delete?: Maybe<GenreDeleteInput>;
  where?: Maybe<MovieGenresConnectionWhere>;
};

export type MovieGenresDisconnectFieldInput = {
  disconnect?: Maybe<GenreDisconnectInput>;
  where?: Maybe<MovieGenresConnectionWhere>;
};

export type MovieGenresFieldInput = {
  connect?: Maybe<Array<MovieGenresConnectFieldInput>>;
  create?: Maybe<Array<MovieGenresCreateFieldInput>>;
};

export type MovieGenresNodeAggregationWhereInput = {
  AND?: Maybe<Array<MovieGenresNodeAggregationWhereInput>>;
  OR?: Maybe<Array<MovieGenresNodeAggregationWhereInput>>;
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

export type MovieGenresRelationship = {
  __typename?: 'MovieGenresRelationship';
  cursor: Scalars['String'];
  node: Genre;
};

export type MovieGenresUpdateConnectionInput = {
  node?: Maybe<GenreUpdateInput>;
};

export type MovieGenresUpdateFieldInput = {
  connect?: Maybe<Array<MovieGenresConnectFieldInput>>;
  create?: Maybe<Array<MovieGenresCreateFieldInput>>;
  delete?: Maybe<Array<MovieGenresDeleteFieldInput>>;
  disconnect?: Maybe<Array<MovieGenresDisconnectFieldInput>>;
  update?: Maybe<MovieGenresUpdateConnectionInput>;
  where?: Maybe<MovieGenresConnectionWhere>;
};

export type MovieOptions = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  /** Specify one or more MovieSort objects to sort Movies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<MovieSort>>>;
};

export type MovieRelationInput = {
  genres?: Maybe<Array<MovieGenresCreateFieldInput>>;
};

/** Fields to sort Movies by. The order in which sorts are applied is not guaranteed when specifying many fields in one MovieSort object. */
export type MovieSort = {
  description?: Maybe<SortDirection>;
  genre?: Maybe<SortDirection>;
  homepage?: Maybe<SortDirection>;
  imageUrl?: Maybe<SortDirection>;
  imdbRating?: Maybe<SortDirection>;
  runtime?: Maybe<SortDirection>;
  studio?: Maybe<SortDirection>;
  tagline?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  trailer?: Maybe<SortDirection>;
  year?: Maybe<SortDirection>;
};

export type MovieUpdateInput = {
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<MovieGenresUpdateFieldInput>>;
  homepage?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  imdbRating?: Maybe<Scalars['Float']>;
  runtime?: Maybe<Scalars['Int']>;
  studio?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type MovieWhere = {
  AND?: Maybe<Array<MovieWhere>>;
  OR?: Maybe<Array<MovieWhere>>;
  description?: Maybe<Scalars['String']>;
  description_CONTAINS?: Maybe<Scalars['String']>;
  description_ENDS_WITH?: Maybe<Scalars['String']>;
  description_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_NOT?: Maybe<Scalars['String']>;
  description_NOT_CONTAINS?: Maybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  description_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  description_STARTS_WITH?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  genre_CONTAINS?: Maybe<Scalars['String']>;
  genre_ENDS_WITH?: Maybe<Scalars['String']>;
  genre_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  genre_NOT?: Maybe<Scalars['String']>;
  genre_NOT_CONTAINS?: Maybe<Scalars['String']>;
  genre_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  genre_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  genre_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  genre_STARTS_WITH?: Maybe<Scalars['String']>;
  genres?: Maybe<GenreWhere>;
  genresAggregate?: Maybe<MovieGenresAggregateInput>;
  genresConnection?: Maybe<MovieGenresConnectionWhere>;
  genresConnection_NOT?: Maybe<MovieGenresConnectionWhere>;
  genres_NOT?: Maybe<GenreWhere>;
  homepage?: Maybe<Scalars['String']>;
  homepage_CONTAINS?: Maybe<Scalars['String']>;
  homepage_ENDS_WITH?: Maybe<Scalars['String']>;
  homepage_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  homepage_NOT?: Maybe<Scalars['String']>;
  homepage_NOT_CONTAINS?: Maybe<Scalars['String']>;
  homepage_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  homepage_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  homepage_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  homepage_STARTS_WITH?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  imageUrl_CONTAINS?: Maybe<Scalars['String']>;
  imageUrl_ENDS_WITH?: Maybe<Scalars['String']>;
  imageUrl_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  imageUrl_NOT?: Maybe<Scalars['String']>;
  imageUrl_NOT_CONTAINS?: Maybe<Scalars['String']>;
  imageUrl_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  imageUrl_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  imageUrl_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  imageUrl_STARTS_WITH?: Maybe<Scalars['String']>;
  imdbRating?: Maybe<Scalars['Float']>;
  imdbRating_GT?: Maybe<Scalars['Float']>;
  imdbRating_GTE?: Maybe<Scalars['Float']>;
  imdbRating_IN?: Maybe<Array<Maybe<Scalars['Float']>>>;
  imdbRating_LT?: Maybe<Scalars['Float']>;
  imdbRating_LTE?: Maybe<Scalars['Float']>;
  imdbRating_NOT?: Maybe<Scalars['Float']>;
  imdbRating_NOT_IN?: Maybe<Array<Maybe<Scalars['Float']>>>;
  runtime?: Maybe<Scalars['Int']>;
  runtime_GT?: Maybe<Scalars['Int']>;
  runtime_GTE?: Maybe<Scalars['Int']>;
  runtime_IN?: Maybe<Array<Maybe<Scalars['Int']>>>;
  runtime_LT?: Maybe<Scalars['Int']>;
  runtime_LTE?: Maybe<Scalars['Int']>;
  runtime_NOT?: Maybe<Scalars['Int']>;
  runtime_NOT_IN?: Maybe<Array<Maybe<Scalars['Int']>>>;
  studio?: Maybe<Scalars['String']>;
  studio_CONTAINS?: Maybe<Scalars['String']>;
  studio_ENDS_WITH?: Maybe<Scalars['String']>;
  studio_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  studio_NOT?: Maybe<Scalars['String']>;
  studio_NOT_CONTAINS?: Maybe<Scalars['String']>;
  studio_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  studio_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  studio_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  studio_STARTS_WITH?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  tagline_CONTAINS?: Maybe<Scalars['String']>;
  tagline_ENDS_WITH?: Maybe<Scalars['String']>;
  tagline_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagline_NOT?: Maybe<Scalars['String']>;
  tagline_NOT_CONTAINS?: Maybe<Scalars['String']>;
  tagline_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  tagline_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagline_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  tagline_STARTS_WITH?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_CONTAINS?: Maybe<Scalars['String']>;
  title_ENDS_WITH?: Maybe<Scalars['String']>;
  title_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_NOT?: Maybe<Scalars['String']>;
  title_NOT_CONTAINS?: Maybe<Scalars['String']>;
  title_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  title_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  title_STARTS_WITH?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  trailer_CONTAINS?: Maybe<Scalars['String']>;
  trailer_ENDS_WITH?: Maybe<Scalars['String']>;
  trailer_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  trailer_NOT?: Maybe<Scalars['String']>;
  trailer_NOT_CONTAINS?: Maybe<Scalars['String']>;
  trailer_NOT_ENDS_WITH?: Maybe<Scalars['String']>;
  trailer_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  trailer_NOT_STARTS_WITH?: Maybe<Scalars['String']>;
  trailer_STARTS_WITH?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  year_GT?: Maybe<Scalars['Int']>;
  year_GTE?: Maybe<Scalars['Int']>;
  year_IN?: Maybe<Array<Maybe<Scalars['Int']>>>;
  year_LT?: Maybe<Scalars['Int']>;
  year_LTE?: Maybe<Scalars['Int']>;
  year_NOT?: Maybe<Scalars['Int']>;
  year_NOT_IN?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGenres: CreateGenresMutationResponse;
  createMovies: CreateMoviesMutationResponse;
  deleteGenres: DeleteInfo;
  deleteMovies: DeleteInfo;
  updateGenres: UpdateGenresMutationResponse;
  updateMovies: UpdateMoviesMutationResponse;
};


export type MutationCreateGenresArgs = {
  input: Array<GenreCreateInput>;
};


export type MutationCreateMoviesArgs = {
  input: Array<MovieCreateInput>;
};


export type MutationDeleteGenresArgs = {
  delete?: Maybe<GenreDeleteInput>;
  where?: Maybe<GenreWhere>;
};


export type MutationDeleteMoviesArgs = {
  delete?: Maybe<MovieDeleteInput>;
  where?: Maybe<MovieWhere>;
};


export type MutationUpdateGenresArgs = {
  connect?: Maybe<GenreConnectInput>;
  create?: Maybe<GenreRelationInput>;
  delete?: Maybe<GenreDeleteInput>;
  disconnect?: Maybe<GenreDisconnectInput>;
  update?: Maybe<GenreUpdateInput>;
  where?: Maybe<GenreWhere>;
};


export type MutationUpdateMoviesArgs = {
  connect?: Maybe<MovieConnectInput>;
  create?: Maybe<MovieRelationInput>;
  delete?: Maybe<MovieDeleteInput>;
  disconnect?: Maybe<MovieDisconnectInput>;
  update?: Maybe<MovieUpdateInput>;
  where?: Maybe<MovieWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  genres: Array<Genre>;
  genresAggregate: GenreAggregateSelection;
  genresCount: Scalars['Int'];
  movies: Array<Movie>;
  moviesAggregate: MovieAggregateSelection;
  moviesCount: Scalars['Int'];
};


export type QueryGenresArgs = {
  options?: Maybe<GenreOptions>;
  where?: Maybe<GenreWhere>;
};


export type QueryGenresAggregateArgs = {
  where?: Maybe<GenreWhere>;
};


export type QueryGenresCountArgs = {
  where?: Maybe<GenreWhere>;
};


export type QueryMoviesArgs = {
  options?: Maybe<MovieOptions>;
  where?: Maybe<MovieWhere>;
};


export type QueryMoviesAggregateArgs = {
  where?: Maybe<MovieWhere>;
};


export type QueryMoviesCountArgs = {
  where?: Maybe<MovieWhere>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest: Scalars['String'];
  shortest: Scalars['String'];
};

export type UpdateGenresMutationResponse = {
  __typename?: 'UpdateGenresMutationResponse';
  genres: Array<Genre>;
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

export type UpdateMoviesMutationResponse = {
  __typename?: 'UpdateMoviesMutationResponse';
  info: UpdateInfo;
  movies: Array<Movie>;
};

export type MovieQueryVariables = Exact<{ [key: string]: never; }>;


export type MovieQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', imdbRating?: number | null | undefined, title?: string | null | undefined, year?: number | null | undefined }> };

export const MovieDocument = gql`
    query Movie {
  movies {
    imdbRating
    title
    year
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MovieGQL extends Apollo.Query<MovieQuery, MovieQueryVariables> {
    document = MovieDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }