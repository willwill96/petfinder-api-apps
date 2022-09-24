export type Maybe<T> = T;
export type InputMaybe<T> = T;
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

export type Address = {
  address1: Maybe<Scalars['String']>;
  address2: Maybe<Scalars['String']>;
  city: Maybe<Scalars['String']>;
  country: Maybe<Scalars['String']>;
  postcode: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
};

export type Adoption = {
  policy: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export enum AgeListItem {
  ADULT = 'ADULT',
  BABY = 'BABY',
  SENIOR = 'SENIOR',
  YOUNG = 'YOUNG'
}

export type Animal = {
  age: Maybe<Scalars['String']>;
  attributes: Maybe<Attributes>;
  breeds: Maybe<Breeds2>;
  coat: Maybe<Scalars['String']>;
  colors: Maybe<Colors2>;
  contact: Maybe<Contact>;
  description: Maybe<Scalars['String']>;
  /** Distance in miles to location provided in query. Null if not provided */
  distance: Maybe<Scalars['Float']>;
  environment: Maybe<Environment>;
  gender: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  links: Maybe<Links3>;
  name: Maybe<Scalars['String']>;
  organization: Maybe<Organization>;
  photos: Maybe<Array<Maybe<Photo>>>;
  publishedAt: Maybe<Scalars['String']>;
  size: Maybe<Scalars['String']>;
  species: Maybe<Scalars['String']>;
  /** Adoption status */
  status: Maybe<Scalars['String']>;
  tags: Maybe<Array<Maybe<Scalars['String']>>>;
  type: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type AnimalBreed = {
  links: Maybe<Links2>;
  name: Maybe<Scalars['String']>;
};

export type AnimalType = {
  coats: Maybe<Array<Maybe<Scalars['String']>>>;
  colors: Maybe<Array<Maybe<Scalars['String']>>>;
  genders: Maybe<Array<Maybe<Scalars['String']>>>;
  links: Maybe<Links>;
  name: Maybe<Scalars['String']>;
};

export type Animals = {
  animals: Maybe<Array<Maybe<Animal>>>;
  pagination: Maybe<Pagination>;
};

export type Attributes = {
  declawed: Maybe<Scalars['Boolean']>;
  houseTrained: Maybe<Scalars['Boolean']>;
  shotsCurrent: Maybe<Scalars['Boolean']>;
  spayedNeutered: Maybe<Scalars['Boolean']>;
  specialNeeds: Maybe<Scalars['Boolean']>;
};

export type Breeds2 = {
  mixed: Maybe<Scalars['Boolean']>;
  primary: Maybe<Scalars['String']>;
  secondary: Maybe<Scalars['String']>;
  unknown: Maybe<Scalars['Boolean']>;
};

export enum CoatListItem {
  CURLY = 'CURLY',
  HAIRLESS = 'HAIRLESS',
  LONG = 'LONG',
  MEDIUM = 'MEDIUM',
  SHORT = 'SHORT',
  WIRE = 'WIRE'
}

export type Colors2 = {
  primary: Maybe<Scalars['String']>;
  secondary: Maybe<Scalars['String']>;
  tertiary: Maybe<Scalars['String']>;
};

export type Contact = {
  address: Maybe<Address>;
  email: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
};

export type Environment = {
  cats: Maybe<Scalars['Boolean']>;
  children: Maybe<Scalars['Boolean']>;
  dogs: Maybe<Scalars['Boolean']>;
};

export enum GenderListItem {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
  UNKNOWN = 'UNKNOWN'
}

export type Hours = {
  friday: Maybe<Scalars['String']>;
  monday: Maybe<Scalars['String']>;
  saturday: Maybe<Scalars['String']>;
  sunday: Maybe<Scalars['String']>;
  thursday: Maybe<Scalars['String']>;
  tuesday: Maybe<Scalars['String']>;
  wednesday: Maybe<Scalars['String']>;
};

export type Link = {
  /** Relative URL to linked resource */
  href: Maybe<Scalars['String']>;
};

export type LinkNullable = {
  /** Relative URL to linked resource */
  href: Maybe<Scalars['String']>;
};

export type Links = {
  breeds: Maybe<Link>;
  self: Maybe<Link>;
};

export type Links2 = {
  type: Maybe<Link>;
};

export type Links3 = {
  organization: Maybe<Link>;
  self: Maybe<Link>;
  type: Maybe<Link>;
};

export type Links4 = {
  next: Maybe<LinkNullable>;
  previous: Maybe<LinkNullable>;
};

export type Links5 = {
  animals: Maybe<Link>;
  self: Maybe<Link>;
};

export type Organization = {
  address: Maybe<Address>;
  adoption: Maybe<Adoption>;
  /** Distance in miles to location provided in query. Null if not provided */
  distance: Maybe<Scalars['Float']>;
  email: Maybe<Scalars['String']>;
  hours: Maybe<Hours>;
  id: Maybe<Scalars['ID']>;
  links: Maybe<Links5>;
  missionStatement: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  photos: Maybe<Array<Maybe<Photo>>>;
  socialMedia: Maybe<SocialMedia>;
  url: Maybe<Scalars['String']>;
  website: Maybe<Scalars['String']>;
};

export type Organizations = {
  organizations: Maybe<Array<Maybe<Organization>>>;
  pagination: Maybe<Pagination>;
};

export type Pagination = {
  countPerPage: Maybe<Scalars['Int']>;
  currentPage: Maybe<Scalars['Int']>;
  links: Maybe<Links4>;
  totalCount: Maybe<Scalars['Int']>;
  totalPages: Maybe<Scalars['Int']>;
};

export type Photo = {
  full: Maybe<Scalars['String']>;
  large: Maybe<Scalars['String']>;
  medium: Maybe<Scalars['String']>;
  small: Maybe<Scalars['String']>;
};

export type Query = {
  /**
   * Get Animal
   *
   * Equivalent to GET /animals/{id}
   */
  animal: Maybe<Animal>;
  /**
   * Get Animals
   *
   * Equivalent to GET /animals
   */
  animals: Maybe<Animals>;
  /**
   * Get Organization
   *
   * Equivalent to GET /organizations/{id}
   */
  organization: Maybe<Organization>;
  /**
   * Get Organizations
   *
   * Equivalent to GET /organizations
   */
  organizations: Maybe<Organizations>;
  /**
   * Get Animal Type
   *
   * Equivalent to GET /types/{type}
   */
  type: Maybe<Type>;
  /**
   * Get Animal Breeds
   *
   * Equivalent to GET /types/{type}/breeds
   */
  typeBreeds: Maybe<TypeBreeds>;
  /**
   * Get Animal Types
   *
   * Equivalent to GET /types
   */
  types: Maybe<Types>;
};


export type QueryAnimalArgs = {
  id: Scalars['ID'];
};


export type QueryAnimalsArgs = {
  age?: InputMaybe<Array<InputMaybe<AgeListItem>>>;
  breed?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  coat?: InputMaybe<Array<InputMaybe<CoatListItem>>>;
  color?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  distance?: InputMaybe<Scalars['Int']>;
  gender?: InputMaybe<Array<InputMaybe<GenderListItem>>>;
  limit?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Array<InputMaybe<SizeListItem>>>;
  sort?: InputMaybe<Sort>;
  status?: InputMaybe<Status>;
  type?: InputMaybe<Type2>;
};


export type QueryOrganizationArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationsArgs = {
  country?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Sort2>;
  state?: InputMaybe<Scalars['String']>;
};


export type QueryTypeArgs = {
  type: Scalars['String'];
};


export type QueryTypeBreedsArgs = {
  type: Scalars['String'];
};

export enum SizeListItem {
  EXTRA_LARGE = 'EXTRA_LARGE',
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL'
}

export type SocialMedia = {
  facebook: Maybe<Scalars['String']>;
  instagram: Maybe<Scalars['String']>;
  pinterest: Maybe<Scalars['String']>;
  twitter: Maybe<Scalars['String']>;
  youtube: Maybe<Scalars['String']>;
};

export enum Sort {
  DISTANCE = 'DISTANCE',
  RANDOM = 'RANDOM',
  RECENT = 'RECENT',
  _DISTANCE = '_DISTANCE',
  _RECENT = '_RECENT'
}

export enum Sort2 {
  COUNTRY = 'COUNTRY',
  DISTANCE = 'DISTANCE',
  NAME = 'NAME',
  STATE = 'STATE',
  _COUNTRY = '_COUNTRY',
  _DISTANCE = '_DISTANCE',
  _NAME = '_NAME',
  _STATE = '_STATE'
}

export enum Status {
  ADOPTABLE = 'ADOPTABLE',
  ADOPTED = 'ADOPTED',
  FOUND = 'FOUND'
}

export type Type = {
  type: Maybe<AnimalType>;
};

export enum Type2 {
  BARNYARD = 'BARNYARD',
  BIRD = 'BIRD',
  CAT = 'CAT',
  DOG = 'DOG',
  HORSE = 'HORSE',
  RABBIT = 'RABBIT',
  SCALES_FINS_OTHER = 'SCALES_FINS_OTHER',
  SMALL_FURRY = 'SMALL_FURRY'
}

export type TypeBreeds = {
  breeds: Maybe<Array<Maybe<AnimalBreed>>>;
};

export type Types = {
  types: Maybe<Array<Maybe<AnimalType>>>;
};
