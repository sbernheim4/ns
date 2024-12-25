import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) and, if it has a timezone, [RFC
   * 3339](https://datatracker.ietf.org/doc/html/rfc3339) standards. Input values
   * that do not conform to both ISO 8601 and RFC 3339 may be coerced, which may lead
   * to unexpected results.
   */
  Datetime: { input: any; output: any; }
};

/** All input for the create `EventType` mutation. */
export type CreateEventTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `EventType` to be created by this mutation. */
  eventType: EventTypeInput;
};

/** The output of our create `EventType` mutation. */
export type CreateEventTypePayload = {
  __typename?: 'CreateEventTypePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `EventType` that was created by this mutation. */
  eventType?: Maybe<EventType>;
  /** An edge for our `EventType`. May be used by Relay 1. */
  eventTypeEdge?: Maybe<EventTypeEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `EventType` mutation. */
export type CreateEventTypePayloadEventTypeEdgeArgs = {
  orderBy?: Array<EventTypeOrderBy>;
};

/** All input for the create `FlywaySchemaHistory` mutation. */
export type CreateFlywaySchemaHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `FlywaySchemaHistory` to be created by this mutation. */
  flywaySchemaHistory: FlywaySchemaHistoryInput;
};

/** The output of our create `FlywaySchemaHistory` mutation. */
export type CreateFlywaySchemaHistoryPayload = {
  __typename?: 'CreateFlywaySchemaHistoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `FlywaySchemaHistory` that was created by this mutation. */
  flywaySchemaHistory?: Maybe<FlywaySchemaHistory>;
  /** An edge for our `FlywaySchemaHistory`. May be used by Relay 1. */
  flywaySchemaHistoryEdge?: Maybe<FlywaySchemaHistoryEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `FlywaySchemaHistory` mutation. */
export type CreateFlywaySchemaHistoryPayloadFlywaySchemaHistoryEdgeArgs = {
  orderBy?: Array<FlywaySchemaHistoryOrderBy>;
};

/** All input for the create `Notification` mutation. */
export type CreateNotificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Notification` to be created by this mutation. */
  notification: NotificationInput;
};

/** The output of our create `Notification` mutation. */
export type CreateNotificationPayload = {
  __typename?: 'CreateNotificationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Notification` that was created by this mutation. */
  notification?: Maybe<Notification>;
  /** An edge for our `Notification`. May be used by Relay 1. */
  notificationEdge?: Maybe<NotificationEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Notification` mutation. */
export type CreateNotificationPayloadNotificationEdgeArgs = {
  orderBy?: Array<NotificationOrderBy>;
};

/** All input for the create `UserGroup` mutation. */
export type CreateUserGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `UserGroup` to be created by this mutation. */
  userGroup: UserGroupInput;
};

/** All input for the create `UserGroupMembership` mutation. */
export type CreateUserGroupMembershipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `UserGroupMembership` to be created by this mutation. */
  userGroupMembership: UserGroupMembershipInput;
};

/** The output of our create `UserGroupMembership` mutation. */
export type CreateUserGroupMembershipPayload = {
  __typename?: 'CreateUserGroupMembershipPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `UserGroupMembership` that was created by this mutation. */
  userGroupMembership?: Maybe<UserGroupMembership>;
  /** An edge for our `UserGroupMembership`. May be used by Relay 1. */
  userGroupMembershipEdge?: Maybe<UserGroupMembershipEdge>;
};


/** The output of our create `UserGroupMembership` mutation. */
export type CreateUserGroupMembershipPayloadUserGroupMembershipEdgeArgs = {
  orderBy?: Array<UserGroupMembershipOrderBy>;
};

/** The output of our create `UserGroup` mutation. */
export type CreateUserGroupPayload = {
  __typename?: 'CreateUserGroupPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `UserGroup` that was created by this mutation. */
  userGroup?: Maybe<UserGroup>;
  /** An edge for our `UserGroup`. May be used by Relay 1. */
  userGroupEdge?: Maybe<UserGroupEdge>;
};


/** The output of our create `UserGroup` mutation. */
export type CreateUserGroupPayloadUserGroupEdgeArgs = {
  orderBy?: Array<UserGroupOrderBy>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UserEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Array<UserOrderBy>;
};

/** All input for the `deleteEventTypeByName` mutation. */
export type DeleteEventTypeByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** All input for the `deleteEventTypeByRowId` mutation. */
export type DeleteEventTypeByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['Int']['input'];
};

/** All input for the `deleteEventType` mutation. */
export type DeleteEventTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `EventType` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `EventType` mutation. */
export type DeleteEventTypePayload = {
  __typename?: 'DeleteEventTypePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedEventTypeId?: Maybe<Scalars['ID']['output']>;
  /** The `EventType` that was deleted by this mutation. */
  eventType?: Maybe<EventType>;
  /** An edge for our `EventType`. May be used by Relay 1. */
  eventTypeEdge?: Maybe<EventTypeEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `EventType` mutation. */
export type DeleteEventTypePayloadEventTypeEdgeArgs = {
  orderBy?: Array<EventTypeOrderBy>;
};

/** All input for the `deleteFlywaySchemaHistoryByInstalledRank` mutation. */
export type DeleteFlywaySchemaHistoryByInstalledRankInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  installedRank: Scalars['Int']['input'];
};

/** All input for the `deleteFlywaySchemaHistory` mutation. */
export type DeleteFlywaySchemaHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `FlywaySchemaHistory` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `FlywaySchemaHistory` mutation. */
export type DeleteFlywaySchemaHistoryPayload = {
  __typename?: 'DeleteFlywaySchemaHistoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedFlywaySchemaHistoryId?: Maybe<Scalars['ID']['output']>;
  /** The `FlywaySchemaHistory` that was deleted by this mutation. */
  flywaySchemaHistory?: Maybe<FlywaySchemaHistory>;
  /** An edge for our `FlywaySchemaHistory`. May be used by Relay 1. */
  flywaySchemaHistoryEdge?: Maybe<FlywaySchemaHistoryEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `FlywaySchemaHistory` mutation. */
export type DeleteFlywaySchemaHistoryPayloadFlywaySchemaHistoryEdgeArgs = {
  orderBy?: Array<FlywaySchemaHistoryOrderBy>;
};

/** All input for the `deleteNotificationByRowId` mutation. */
export type DeleteNotificationByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['Int']['input'];
};

/** All input for the `deleteNotification` mutation. */
export type DeleteNotificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Notification` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Notification` mutation. */
export type DeleteNotificationPayload = {
  __typename?: 'DeleteNotificationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedNotificationId?: Maybe<Scalars['ID']['output']>;
  /** The `Notification` that was deleted by this mutation. */
  notification?: Maybe<Notification>;
  /** An edge for our `Notification`. May be used by Relay 1. */
  notificationEdge?: Maybe<NotificationEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Notification` mutation. */
export type DeleteNotificationPayloadNotificationEdgeArgs = {
  orderBy?: Array<NotificationOrderBy>;
};

/** All input for the `deleteUserByEmail` mutation. */
export type DeleteUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

/** All input for the `deleteUserGroupByEmail` mutation. */
export type DeleteUserGroupByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

/** All input for the `deleteUserGroupByName` mutation. */
export type DeleteUserGroupByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** All input for the `deleteUserGroup` mutation. */
export type DeleteUserGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `UserGroup` to be deleted. */
  id: Scalars['ID']['input'];
};

/** All input for the `deleteUserGroupMembershipByRowId` mutation. */
export type DeleteUserGroupMembershipByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['Int']['input'];
};

/** All input for the `deleteUserGroupMembershipByUserEmailAndGroupEmail` mutation. */
export type DeleteUserGroupMembershipByUserEmailAndGroupEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupEmail: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
};

/** All input for the `deleteUserGroupMembership` mutation. */
export type DeleteUserGroupMembershipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `UserGroupMembership` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `UserGroupMembership` mutation. */
export type DeleteUserGroupMembershipPayload = {
  __typename?: 'DeleteUserGroupMembershipPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserGroupMembershipId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `UserGroupMembership` that was deleted by this mutation. */
  userGroupMembership?: Maybe<UserGroupMembership>;
  /** An edge for our `UserGroupMembership`. May be used by Relay 1. */
  userGroupMembershipEdge?: Maybe<UserGroupMembershipEdge>;
};


/** The output of our delete `UserGroupMembership` mutation. */
export type DeleteUserGroupMembershipPayloadUserGroupMembershipEdgeArgs = {
  orderBy?: Array<UserGroupMembershipOrderBy>;
};

/** The output of our delete `UserGroup` mutation. */
export type DeleteUserGroupPayload = {
  __typename?: 'DeleteUserGroupPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserGroupId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `UserGroup` that was deleted by this mutation. */
  userGroup?: Maybe<UserGroup>;
  /** An edge for our `UserGroup`. May be used by Relay 1. */
  userGroupEdge?: Maybe<UserGroupEdge>;
};


/** The output of our delete `UserGroup` mutation. */
export type DeleteUserGroupPayloadUserGroupEdgeArgs = {
  orderBy?: Array<UserGroupOrderBy>;
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UserEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Array<UserOrderBy>;
};

export type EventType = Node & {
  __typename?: 'EventType';
  description?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rowId: Scalars['Int']['output'];
};

/**
 * A condition to be used against `EventType` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type EventTypeCondition = {
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of `EventType` values. */
export type EventTypeConnection = {
  __typename?: 'EventTypeConnection';
  /** A list of edges which contains the `EventType` and cursor to aid in pagination. */
  edges: Array<Maybe<EventTypeEdge>>;
  /** A list of `EventType` objects. */
  nodes: Array<Maybe<EventType>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `EventType` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `EventType` edge in the connection. */
export type EventTypeEdge = {
  __typename?: 'EventTypeEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `EventType` at the end of the edge. */
  node?: Maybe<EventType>;
};

/** An input for mutations affecting `EventType` */
export type EventTypeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  rowId?: InputMaybe<Scalars['Int']['input']>;
};

/** Methods to use when ordering `EventType`. */
export enum EventTypeOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC'
}

/** Represents an update to a `EventType`. Fields that are set will be updated. */
export type EventTypePatch = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['Int']['input']>;
};

export type FlywaySchemaHistory = Node & {
  __typename?: 'FlywaySchemaHistory';
  checksum?: Maybe<Scalars['Int']['output']>;
  description: Scalars['String']['output'];
  executionTime: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  installedBy: Scalars['String']['output'];
  installedOn: Scalars['Datetime']['output'];
  installedRank: Scalars['Int']['output'];
  script: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  version?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `FlywaySchemaHistory` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type FlywaySchemaHistoryCondition = {
  /** Checks for equality with the object’s `installedRank` field. */
  installedRank?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `success` field. */
  success?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A connection to a list of `FlywaySchemaHistory` values. */
export type FlywaySchemaHistoryConnection = {
  __typename?: 'FlywaySchemaHistoryConnection';
  /** A list of edges which contains the `FlywaySchemaHistory` and cursor to aid in pagination. */
  edges: Array<Maybe<FlywaySchemaHistoryEdge>>;
  /** A list of `FlywaySchemaHistory` objects. */
  nodes: Array<Maybe<FlywaySchemaHistory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FlywaySchemaHistory` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `FlywaySchemaHistory` edge in the connection. */
export type FlywaySchemaHistoryEdge = {
  __typename?: 'FlywaySchemaHistoryEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `FlywaySchemaHistory` at the end of the edge. */
  node?: Maybe<FlywaySchemaHistory>;
};

/** An input for mutations affecting `FlywaySchemaHistory` */
export type FlywaySchemaHistoryInput = {
  checksum?: InputMaybe<Scalars['Int']['input']>;
  description: Scalars['String']['input'];
  executionTime: Scalars['Int']['input'];
  installedBy: Scalars['String']['input'];
  installedOn?: InputMaybe<Scalars['Datetime']['input']>;
  installedRank: Scalars['Int']['input'];
  script: Scalars['String']['input'];
  success: Scalars['Boolean']['input'];
  type: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `FlywaySchemaHistory`. */
export enum FlywaySchemaHistoryOrderBy {
  InstalledRankAsc = 'INSTALLED_RANK_ASC',
  InstalledRankDesc = 'INSTALLED_RANK_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SuccessAsc = 'SUCCESS_ASC',
  SuccessDesc = 'SUCCESS_DESC'
}

/** Represents an update to a `FlywaySchemaHistory`. Fields that are set will be updated. */
export type FlywaySchemaHistoryPatch = {
  checksum?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  executionTime?: InputMaybe<Scalars['Int']['input']>;
  installedBy?: InputMaybe<Scalars['String']['input']>;
  installedOn?: InputMaybe<Scalars['Datetime']['input']>;
  installedRank?: InputMaybe<Scalars['Int']['input']>;
  script?: InputMaybe<Scalars['String']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `EventType`. */
  createEventType?: Maybe<CreateEventTypePayload>;
  /** Creates a single `FlywaySchemaHistory`. */
  createFlywaySchemaHistory?: Maybe<CreateFlywaySchemaHistoryPayload>;
  /** Creates a single `Notification`. */
  createNotification?: Maybe<CreateNotificationPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `UserGroup`. */
  createUserGroup?: Maybe<CreateUserGroupPayload>;
  /** Creates a single `UserGroupMembership`. */
  createUserGroupMembership?: Maybe<CreateUserGroupMembershipPayload>;
  /** Deletes a single `EventType` using its globally unique id. */
  deleteEventType?: Maybe<DeleteEventTypePayload>;
  /** Deletes a single `EventType` using a unique key. */
  deleteEventTypeByName?: Maybe<DeleteEventTypePayload>;
  /** Deletes a single `EventType` using a unique key. */
  deleteEventTypeByRowId?: Maybe<DeleteEventTypePayload>;
  /** Deletes a single `FlywaySchemaHistory` using its globally unique id. */
  deleteFlywaySchemaHistory?: Maybe<DeleteFlywaySchemaHistoryPayload>;
  /** Deletes a single `FlywaySchemaHistory` using a unique key. */
  deleteFlywaySchemaHistoryByInstalledRank?: Maybe<DeleteFlywaySchemaHistoryPayload>;
  /** Deletes a single `Notification` using its globally unique id. */
  deleteNotification?: Maybe<DeleteNotificationPayload>;
  /** Deletes a single `Notification` using a unique key. */
  deleteNotificationByRowId?: Maybe<DeleteNotificationPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByEmail?: Maybe<DeleteUserPayload>;
  /** Deletes a single `UserGroup` using its globally unique id. */
  deleteUserGroup?: Maybe<DeleteUserGroupPayload>;
  /** Deletes a single `UserGroup` using a unique key. */
  deleteUserGroupByEmail?: Maybe<DeleteUserGroupPayload>;
  /** Deletes a single `UserGroup` using a unique key. */
  deleteUserGroupByName?: Maybe<DeleteUserGroupPayload>;
  /** Deletes a single `UserGroupMembership` using its globally unique id. */
  deleteUserGroupMembership?: Maybe<DeleteUserGroupMembershipPayload>;
  /** Deletes a single `UserGroupMembership` using a unique key. */
  deleteUserGroupMembershipByRowId?: Maybe<DeleteUserGroupMembershipPayload>;
  /** Deletes a single `UserGroupMembership` using a unique key. */
  deleteUserGroupMembershipByUserEmailAndGroupEmail?: Maybe<DeleteUserGroupMembershipPayload>;
  /** Updates a single `EventType` using its globally unique id and a patch. */
  updateEventType?: Maybe<UpdateEventTypePayload>;
  /** Updates a single `EventType` using a unique key and a patch. */
  updateEventTypeByName?: Maybe<UpdateEventTypePayload>;
  /** Updates a single `EventType` using a unique key and a patch. */
  updateEventTypeByRowId?: Maybe<UpdateEventTypePayload>;
  /** Updates a single `FlywaySchemaHistory` using its globally unique id and a patch. */
  updateFlywaySchemaHistory?: Maybe<UpdateFlywaySchemaHistoryPayload>;
  /** Updates a single `FlywaySchemaHistory` using a unique key and a patch. */
  updateFlywaySchemaHistoryByInstalledRank?: Maybe<UpdateFlywaySchemaHistoryPayload>;
  /** Updates a single `Notification` using its globally unique id and a patch. */
  updateNotification?: Maybe<UpdateNotificationPayload>;
  /** Updates a single `Notification` using a unique key and a patch. */
  updateNotificationByRowId?: Maybe<UpdateNotificationPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByEmail?: Maybe<UpdateUserPayload>;
  /** Updates a single `UserGroup` using its globally unique id and a patch. */
  updateUserGroup?: Maybe<UpdateUserGroupPayload>;
  /** Updates a single `UserGroup` using a unique key and a patch. */
  updateUserGroupByEmail?: Maybe<UpdateUserGroupPayload>;
  /** Updates a single `UserGroup` using a unique key and a patch. */
  updateUserGroupByName?: Maybe<UpdateUserGroupPayload>;
  /** Updates a single `UserGroupMembership` using its globally unique id and a patch. */
  updateUserGroupMembership?: Maybe<UpdateUserGroupMembershipPayload>;
  /** Updates a single `UserGroupMembership` using a unique key and a patch. */
  updateUserGroupMembershipByRowId?: Maybe<UpdateUserGroupMembershipPayload>;
  /** Updates a single `UserGroupMembership` using a unique key and a patch. */
  updateUserGroupMembershipByUserEmailAndGroupEmail?: Maybe<UpdateUserGroupMembershipPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventTypeArgs = {
  input: CreateEventTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFlywaySchemaHistoryArgs = {
  input: CreateFlywaySchemaHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateNotificationArgs = {
  input: CreateNotificationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserGroupArgs = {
  input: CreateUserGroupInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserGroupMembershipArgs = {
  input: CreateUserGroupMembershipInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventTypeArgs = {
  input: DeleteEventTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventTypeByNameArgs = {
  input: DeleteEventTypeByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventTypeByRowIdArgs = {
  input: DeleteEventTypeByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFlywaySchemaHistoryArgs = {
  input: DeleteFlywaySchemaHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFlywaySchemaHistoryByInstalledRankArgs = {
  input: DeleteFlywaySchemaHistoryByInstalledRankInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteNotificationArgs = {
  input: DeleteNotificationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteNotificationByRowIdArgs = {
  input: DeleteNotificationByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByEmailArgs = {
  input: DeleteUserByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserGroupArgs = {
  input: DeleteUserGroupInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserGroupByEmailArgs = {
  input: DeleteUserGroupByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserGroupByNameArgs = {
  input: DeleteUserGroupByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserGroupMembershipArgs = {
  input: DeleteUserGroupMembershipInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserGroupMembershipByRowIdArgs = {
  input: DeleteUserGroupMembershipByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserGroupMembershipByUserEmailAndGroupEmailArgs = {
  input: DeleteUserGroupMembershipByUserEmailAndGroupEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventTypeArgs = {
  input: UpdateEventTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventTypeByNameArgs = {
  input: UpdateEventTypeByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventTypeByRowIdArgs = {
  input: UpdateEventTypeByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFlywaySchemaHistoryArgs = {
  input: UpdateFlywaySchemaHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFlywaySchemaHistoryByInstalledRankArgs = {
  input: UpdateFlywaySchemaHistoryByInstalledRankInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateNotificationArgs = {
  input: UpdateNotificationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateNotificationByRowIdArgs = {
  input: UpdateNotificationByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByEmailArgs = {
  input: UpdateUserByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserGroupArgs = {
  input: UpdateUserGroupInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserGroupByEmailArgs = {
  input: UpdateUserGroupByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserGroupByNameArgs = {
  input: UpdateUserGroupByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserGroupMembershipArgs = {
  input: UpdateUserGroupMembershipInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserGroupMembershipByRowIdArgs = {
  input: UpdateUserGroupMembershipByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserGroupMembershipByUserEmailAndGroupEmailArgs = {
  input: UpdateUserGroupMembershipByUserEmailAndGroupEmailInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
};

export type Notification = Node & {
  __typename?: 'Notification';
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  eventId: Scalars['Int']['output'];
  /** Reads a single `EventType` that is related to this `Notification`. */
  eventTypeByEventId?: Maybe<EventType>;
  groupEmail?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  notificationType: Scalars['String']['output'];
  rowId: Scalars['Int']['output'];
  /** Reads a single `User` that is related to this `Notification`. */
  userByUserEmail?: Maybe<User>;
  userEmail?: Maybe<Scalars['String']['output']>;
  /** Reads a single `UserGroup` that is related to this `Notification`. */
  userGroupByGroupEmail?: Maybe<UserGroup>;
};

/**
 * A condition to be used against `Notification` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type NotificationCondition = {
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of `Notification` values. */
export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  /** A list of edges which contains the `Notification` and cursor to aid in pagination. */
  edges: Array<Maybe<NotificationEdge>>;
  /** A list of `Notification` objects. */
  nodes: Array<Maybe<Notification>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Notification` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Notification` edge in the connection. */
export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Notification` at the end of the edge. */
  node?: Maybe<Notification>;
};

/** An input for mutations affecting `Notification` */
export type NotificationInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  eventId: Scalars['Int']['input'];
  groupEmail?: InputMaybe<Scalars['String']['input']>;
  notificationType: Scalars['String']['input'];
  rowId?: InputMaybe<Scalars['Int']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `Notification`. */
export enum NotificationOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC'
}

/** Represents an update to a `Notification`. Fields that are set will be updated. */
export type NotificationPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  groupEmail?: InputMaybe<Scalars['String']['input']>;
  notificationType?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['Int']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `EventType`. */
  allEventTypes?: Maybe<EventTypeConnection>;
  /** Reads and enables pagination through a set of `FlywaySchemaHistory`. */
  allFlywaySchemaHistories?: Maybe<FlywaySchemaHistoryConnection>;
  /** Reads and enables pagination through a set of `Notification`. */
  allNotifications?: Maybe<NotificationConnection>;
  /** Reads and enables pagination through a set of `UserGroupMembership`. */
  allUserGroupMemberships?: Maybe<UserGroupMembershipConnection>;
  /** Reads and enables pagination through a set of `UserGroup`. */
  allUserGroups?: Maybe<UserGroupConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UserConnection>;
  /** Reads a single `EventType` using its globally unique `ID`. */
  eventType?: Maybe<EventType>;
  /** Get a single `EventType`. */
  eventTypeByName?: Maybe<EventType>;
  /** Get a single `EventType`. */
  eventTypeByRowId?: Maybe<EventType>;
  /** Reads a single `FlywaySchemaHistory` using its globally unique `ID`. */
  flywaySchemaHistory?: Maybe<FlywaySchemaHistory>;
  /** Get a single `FlywaySchemaHistory`. */
  flywaySchemaHistoryByInstalledRank?: Maybe<FlywaySchemaHistory>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  id: Scalars['ID']['output'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads a single `Notification` using its globally unique `ID`. */
  notification?: Maybe<Notification>;
  /** Get a single `Notification`. */
  notificationByRowId?: Maybe<Notification>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  /** Get a single `User`. */
  userByEmail?: Maybe<User>;
  /** Reads a single `UserGroup` using its globally unique `ID`. */
  userGroup?: Maybe<UserGroup>;
  /** Get a single `UserGroup`. */
  userGroupByEmail?: Maybe<UserGroup>;
  /** Get a single `UserGroup`. */
  userGroupByName?: Maybe<UserGroup>;
  /** Reads a single `UserGroupMembership` using its globally unique `ID`. */
  userGroupMembership?: Maybe<UserGroupMembership>;
  /** Get a single `UserGroupMembership`. */
  userGroupMembershipByRowId?: Maybe<UserGroupMembership>;
  /** Get a single `UserGroupMembership`. */
  userGroupMembershipByUserEmailAndGroupEmail?: Maybe<UserGroupMembership>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllEventTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<EventTypeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventTypeOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFlywaySchemaHistoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<FlywaySchemaHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FlywaySchemaHistoryOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllNotificationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<NotificationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NotificationOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUserGroupMembershipsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserGroupMembershipCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserGroupMembershipOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUserGroupsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserGroupCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserGroupOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryEventTypeArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEventTypeByNameArgs = {
  name: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEventTypeByRowIdArgs = {
  rowId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFlywaySchemaHistoryArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFlywaySchemaHistoryByInstalledRankArgs = {
  installedRank: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNotificationArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNotificationByRowIdArgs = {
  rowId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserGroupArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserGroupByEmailArgs = {
  email: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserGroupByNameArgs = {
  name: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserGroupMembershipArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserGroupMembershipByRowIdArgs = {
  rowId: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserGroupMembershipByUserEmailAndGroupEmailArgs = {
  groupEmail: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
};

/** All input for the `updateEventTypeByName` mutation. */
export type UpdateEventTypeByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `EventType` being updated. */
  eventTypePatch: EventTypePatch;
  name: Scalars['String']['input'];
};

/** All input for the `updateEventTypeByRowId` mutation. */
export type UpdateEventTypeByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `EventType` being updated. */
  eventTypePatch: EventTypePatch;
  rowId: Scalars['Int']['input'];
};

/** All input for the `updateEventType` mutation. */
export type UpdateEventTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `EventType` being updated. */
  eventTypePatch: EventTypePatch;
  /** The globally unique `ID` which will identify a single `EventType` to be updated. */
  id: Scalars['ID']['input'];
};

/** The output of our update `EventType` mutation. */
export type UpdateEventTypePayload = {
  __typename?: 'UpdateEventTypePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `EventType` that was updated by this mutation. */
  eventType?: Maybe<EventType>;
  /** An edge for our `EventType`. May be used by Relay 1. */
  eventTypeEdge?: Maybe<EventTypeEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `EventType` mutation. */
export type UpdateEventTypePayloadEventTypeEdgeArgs = {
  orderBy?: Array<EventTypeOrderBy>;
};

/** All input for the `updateFlywaySchemaHistoryByInstalledRank` mutation. */
export type UpdateFlywaySchemaHistoryByInstalledRankInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `FlywaySchemaHistory` being updated. */
  flywaySchemaHistoryPatch: FlywaySchemaHistoryPatch;
  installedRank: Scalars['Int']['input'];
};

/** All input for the `updateFlywaySchemaHistory` mutation. */
export type UpdateFlywaySchemaHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `FlywaySchemaHistory` being updated. */
  flywaySchemaHistoryPatch: FlywaySchemaHistoryPatch;
  /** The globally unique `ID` which will identify a single `FlywaySchemaHistory` to be updated. */
  id: Scalars['ID']['input'];
};

/** The output of our update `FlywaySchemaHistory` mutation. */
export type UpdateFlywaySchemaHistoryPayload = {
  __typename?: 'UpdateFlywaySchemaHistoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `FlywaySchemaHistory` that was updated by this mutation. */
  flywaySchemaHistory?: Maybe<FlywaySchemaHistory>;
  /** An edge for our `FlywaySchemaHistory`. May be used by Relay 1. */
  flywaySchemaHistoryEdge?: Maybe<FlywaySchemaHistoryEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `FlywaySchemaHistory` mutation. */
export type UpdateFlywaySchemaHistoryPayloadFlywaySchemaHistoryEdgeArgs = {
  orderBy?: Array<FlywaySchemaHistoryOrderBy>;
};

/** All input for the `updateNotificationByRowId` mutation. */
export type UpdateNotificationByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Notification` being updated. */
  notificationPatch: NotificationPatch;
  rowId: Scalars['Int']['input'];
};

/** All input for the `updateNotification` mutation. */
export type UpdateNotificationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Notification` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Notification` being updated. */
  notificationPatch: NotificationPatch;
};

/** The output of our update `Notification` mutation. */
export type UpdateNotificationPayload = {
  __typename?: 'UpdateNotificationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Notification` that was updated by this mutation. */
  notification?: Maybe<Notification>;
  /** An edge for our `Notification`. May be used by Relay 1. */
  notificationEdge?: Maybe<NotificationEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Notification` mutation. */
export type UpdateNotificationPayloadNotificationEdgeArgs = {
  orderBy?: Array<NotificationOrderBy>;
};

/** All input for the `updateUserByEmail` mutation. */
export type UpdateUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUserGroupByEmail` mutation. */
export type UpdateUserGroupByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `UserGroup` being updated. */
  userGroupPatch: UserGroupPatch;
};

/** All input for the `updateUserGroupByName` mutation. */
export type UpdateUserGroupByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `UserGroup` being updated. */
  userGroupPatch: UserGroupPatch;
};

/** All input for the `updateUserGroup` mutation. */
export type UpdateUserGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `UserGroup` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `UserGroup` being updated. */
  userGroupPatch: UserGroupPatch;
};

/** All input for the `updateUserGroupMembershipByRowId` mutation. */
export type UpdateUserGroupMembershipByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `UserGroupMembership` being updated. */
  userGroupMembershipPatch: UserGroupMembershipPatch;
};

/** All input for the `updateUserGroupMembershipByUserEmailAndGroupEmail` mutation. */
export type UpdateUserGroupMembershipByUserEmailAndGroupEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupEmail: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `UserGroupMembership` being updated. */
  userGroupMembershipPatch: UserGroupMembershipPatch;
};

/** All input for the `updateUserGroupMembership` mutation. */
export type UpdateUserGroupMembershipInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `UserGroupMembership` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `UserGroupMembership` being updated. */
  userGroupMembershipPatch: UserGroupMembershipPatch;
};

/** The output of our update `UserGroupMembership` mutation. */
export type UpdateUserGroupMembershipPayload = {
  __typename?: 'UpdateUserGroupMembershipPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `UserGroupMembership` that was updated by this mutation. */
  userGroupMembership?: Maybe<UserGroupMembership>;
  /** An edge for our `UserGroupMembership`. May be used by Relay 1. */
  userGroupMembershipEdge?: Maybe<UserGroupMembershipEdge>;
};


/** The output of our update `UserGroupMembership` mutation. */
export type UpdateUserGroupMembershipPayloadUserGroupMembershipEdgeArgs = {
  orderBy?: Array<UserGroupMembershipOrderBy>;
};

/** The output of our update `UserGroup` mutation. */
export type UpdateUserGroupPayload = {
  __typename?: 'UpdateUserGroupPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `UserGroup` that was updated by this mutation. */
  userGroup?: Maybe<UserGroup>;
  /** An edge for our `UserGroup`. May be used by Relay 1. */
  userGroupEdge?: Maybe<UserGroupEdge>;
};


/** The output of our update `UserGroup` mutation. */
export type UpdateUserGroupPayloadUserGroupEdgeArgs = {
  orderBy?: Array<UserGroupOrderBy>;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UserEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Array<UserOrderBy>;
};

export type User = Node & {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  email: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `UserGroupMembership`. */
  userGroupMembershipsByUserEmail: UserGroupMembershipConnection;
};


export type UserUserGroupMembershipsByUserEmailArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserGroupMembershipCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserGroupMembershipOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `User` values. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<Maybe<UserEdge>>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

export type UserGroup = Node & {
  __typename?: 'UserGroup';
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  email: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/**
 * A condition to be used against `UserGroup` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type UserGroupCondition = {
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `UserGroup` values. */
export type UserGroupConnection = {
  __typename?: 'UserGroupConnection';
  /** A list of edges which contains the `UserGroup` and cursor to aid in pagination. */
  edges: Array<Maybe<UserGroupEdge>>;
  /** A list of `UserGroup` objects. */
  nodes: Array<Maybe<UserGroup>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserGroup` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `UserGroup` edge in the connection. */
export type UserGroupEdge = {
  __typename?: 'UserGroupEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `UserGroup` at the end of the edge. */
  node?: Maybe<UserGroup>;
};

/** An input for mutations affecting `UserGroup` */
export type UserGroupInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UserGroupMembership = Node & {
  __typename?: 'UserGroupMembership';
  groupEmail: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  rowId: Scalars['Int']['output'];
  /** Reads a single `User` that is related to this `UserGroupMembership`. */
  userByUserEmail?: Maybe<User>;
  userEmail: Scalars['String']['output'];
  /** Reads a single `UserGroup` that is related to this `UserGroupMembership`. */
  userGroupByGroupEmail?: Maybe<UserGroup>;
};

/**
 * A condition to be used against `UserGroupMembership` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type UserGroupMembershipCondition = {
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `userEmail` field. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `UserGroupMembership` values. */
export type UserGroupMembershipConnection = {
  __typename?: 'UserGroupMembershipConnection';
  /** A list of edges which contains the `UserGroupMembership` and cursor to aid in pagination. */
  edges: Array<Maybe<UserGroupMembershipEdge>>;
  /** A list of `UserGroupMembership` objects. */
  nodes: Array<Maybe<UserGroupMembership>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserGroupMembership` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `UserGroupMembership` edge in the connection. */
export type UserGroupMembershipEdge = {
  __typename?: 'UserGroupMembershipEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `UserGroupMembership` at the end of the edge. */
  node?: Maybe<UserGroupMembership>;
};

/** An input for mutations affecting `UserGroupMembership` */
export type UserGroupMembershipInput = {
  groupEmail: Scalars['String']['input'];
  rowId?: InputMaybe<Scalars['Int']['input']>;
  userEmail: Scalars['String']['input'];
};

/** Methods to use when ordering `UserGroupMembership`. */
export enum UserGroupMembershipOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC',
  UserEmailAsc = 'USER_EMAIL_ASC',
  UserEmailDesc = 'USER_EMAIL_DESC'
}

/** Represents an update to a `UserGroupMembership`. Fields that are set will be updated. */
export type UserGroupMembershipPatch = {
  groupEmail?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['Int']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `UserGroup`. */
export enum UserGroupOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Represents an update to a `UserGroup`. Fields that are set will be updated. */
export type UserGroupPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** Methods to use when ordering `User`. */
export enum UserOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Node: ( EventType ) | ( FlywaySchemaHistory ) | ( Notification ) | ( Omit<Query, 'node' | 'query'> & { node?: Maybe<_RefType['Node']>, query: _RefType['Query'] } ) | ( User ) | ( UserGroup ) | ( UserGroupMembership );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateEventTypeInput: CreateEventTypeInput;
  CreateEventTypePayload: ResolverTypeWrapper<Omit<CreateEventTypePayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  CreateFlywaySchemaHistoryInput: CreateFlywaySchemaHistoryInput;
  CreateFlywaySchemaHistoryPayload: ResolverTypeWrapper<Omit<CreateFlywaySchemaHistoryPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  CreateNotificationInput: CreateNotificationInput;
  CreateNotificationPayload: ResolverTypeWrapper<Omit<CreateNotificationPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  CreateUserGroupInput: CreateUserGroupInput;
  CreateUserGroupMembershipInput: CreateUserGroupMembershipInput;
  CreateUserGroupMembershipPayload: ResolverTypeWrapper<Omit<CreateUserGroupMembershipPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  CreateUserGroupPayload: ResolverTypeWrapper<Omit<CreateUserGroupPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  CreateUserInput: CreateUserInput;
  CreateUserPayload: ResolverTypeWrapper<Omit<CreateUserPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']['output']>;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']['output']>;
  DeleteEventTypeByNameInput: DeleteEventTypeByNameInput;
  DeleteEventTypeByRowIdInput: DeleteEventTypeByRowIdInput;
  DeleteEventTypeInput: DeleteEventTypeInput;
  DeleteEventTypePayload: ResolverTypeWrapper<Omit<DeleteEventTypePayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  DeleteFlywaySchemaHistoryByInstalledRankInput: DeleteFlywaySchemaHistoryByInstalledRankInput;
  DeleteFlywaySchemaHistoryInput: DeleteFlywaySchemaHistoryInput;
  DeleteFlywaySchemaHistoryPayload: ResolverTypeWrapper<Omit<DeleteFlywaySchemaHistoryPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  DeleteNotificationByRowIdInput: DeleteNotificationByRowIdInput;
  DeleteNotificationInput: DeleteNotificationInput;
  DeleteNotificationPayload: ResolverTypeWrapper<Omit<DeleteNotificationPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  DeleteUserByEmailInput: DeleteUserByEmailInput;
  DeleteUserGroupByEmailInput: DeleteUserGroupByEmailInput;
  DeleteUserGroupByNameInput: DeleteUserGroupByNameInput;
  DeleteUserGroupInput: DeleteUserGroupInput;
  DeleteUserGroupMembershipByRowIdInput: DeleteUserGroupMembershipByRowIdInput;
  DeleteUserGroupMembershipByUserEmailAndGroupEmailInput: DeleteUserGroupMembershipByUserEmailAndGroupEmailInput;
  DeleteUserGroupMembershipInput: DeleteUserGroupMembershipInput;
  DeleteUserGroupMembershipPayload: ResolverTypeWrapper<Omit<DeleteUserGroupMembershipPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  DeleteUserGroupPayload: ResolverTypeWrapper<Omit<DeleteUserGroupPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  DeleteUserInput: DeleteUserInput;
  DeleteUserPayload: ResolverTypeWrapper<Omit<DeleteUserPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  EventType: ResolverTypeWrapper<EventType>;
  EventTypeCondition: EventTypeCondition;
  EventTypeConnection: ResolverTypeWrapper<EventTypeConnection>;
  EventTypeEdge: ResolverTypeWrapper<EventTypeEdge>;
  EventTypeInput: EventTypeInput;
  EventTypeOrderBy: EventTypeOrderBy;
  EventTypePatch: EventTypePatch;
  FlywaySchemaHistory: ResolverTypeWrapper<FlywaySchemaHistory>;
  FlywaySchemaHistoryCondition: FlywaySchemaHistoryCondition;
  FlywaySchemaHistoryConnection: ResolverTypeWrapper<FlywaySchemaHistoryConnection>;
  FlywaySchemaHistoryEdge: ResolverTypeWrapper<FlywaySchemaHistoryEdge>;
  FlywaySchemaHistoryInput: FlywaySchemaHistoryInput;
  FlywaySchemaHistoryOrderBy: FlywaySchemaHistoryOrderBy;
  FlywaySchemaHistoryPatch: FlywaySchemaHistoryPatch;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Node']>;
  Notification: ResolverTypeWrapper<Notification>;
  NotificationCondition: NotificationCondition;
  NotificationConnection: ResolverTypeWrapper<NotificationConnection>;
  NotificationEdge: ResolverTypeWrapper<NotificationEdge>;
  NotificationInput: NotificationInput;
  NotificationOrderBy: NotificationOrderBy;
  NotificationPatch: NotificationPatch;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateEventTypeByNameInput: UpdateEventTypeByNameInput;
  UpdateEventTypeByRowIdInput: UpdateEventTypeByRowIdInput;
  UpdateEventTypeInput: UpdateEventTypeInput;
  UpdateEventTypePayload: ResolverTypeWrapper<Omit<UpdateEventTypePayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  UpdateFlywaySchemaHistoryByInstalledRankInput: UpdateFlywaySchemaHistoryByInstalledRankInput;
  UpdateFlywaySchemaHistoryInput: UpdateFlywaySchemaHistoryInput;
  UpdateFlywaySchemaHistoryPayload: ResolverTypeWrapper<Omit<UpdateFlywaySchemaHistoryPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  UpdateNotificationByRowIdInput: UpdateNotificationByRowIdInput;
  UpdateNotificationInput: UpdateNotificationInput;
  UpdateNotificationPayload: ResolverTypeWrapper<Omit<UpdateNotificationPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  UpdateUserByEmailInput: UpdateUserByEmailInput;
  UpdateUserGroupByEmailInput: UpdateUserGroupByEmailInput;
  UpdateUserGroupByNameInput: UpdateUserGroupByNameInput;
  UpdateUserGroupInput: UpdateUserGroupInput;
  UpdateUserGroupMembershipByRowIdInput: UpdateUserGroupMembershipByRowIdInput;
  UpdateUserGroupMembershipByUserEmailAndGroupEmailInput: UpdateUserGroupMembershipByUserEmailAndGroupEmailInput;
  UpdateUserGroupMembershipInput: UpdateUserGroupMembershipInput;
  UpdateUserGroupMembershipPayload: ResolverTypeWrapper<Omit<UpdateUserGroupMembershipPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  UpdateUserGroupPayload: ResolverTypeWrapper<Omit<UpdateUserGroupPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  UpdateUserInput: UpdateUserInput;
  UpdateUserPayload: ResolverTypeWrapper<Omit<UpdateUserPayload, 'query'> & { query?: Maybe<ResolversTypes['Query']> }>;
  User: ResolverTypeWrapper<User>;
  UserCondition: UserCondition;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserGroup: ResolverTypeWrapper<UserGroup>;
  UserGroupCondition: UserGroupCondition;
  UserGroupConnection: ResolverTypeWrapper<UserGroupConnection>;
  UserGroupEdge: ResolverTypeWrapper<UserGroupEdge>;
  UserGroupInput: UserGroupInput;
  UserGroupMembership: ResolverTypeWrapper<UserGroupMembership>;
  UserGroupMembershipCondition: UserGroupMembershipCondition;
  UserGroupMembershipConnection: ResolverTypeWrapper<UserGroupMembershipConnection>;
  UserGroupMembershipEdge: ResolverTypeWrapper<UserGroupMembershipEdge>;
  UserGroupMembershipInput: UserGroupMembershipInput;
  UserGroupMembershipOrderBy: UserGroupMembershipOrderBy;
  UserGroupMembershipPatch: UserGroupMembershipPatch;
  UserGroupOrderBy: UserGroupOrderBy;
  UserGroupPatch: UserGroupPatch;
  UserInput: UserInput;
  UserOrderBy: UserOrderBy;
  UserPatch: UserPatch;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateEventTypeInput: CreateEventTypeInput;
  CreateEventTypePayload: Omit<CreateEventTypePayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  CreateFlywaySchemaHistoryInput: CreateFlywaySchemaHistoryInput;
  CreateFlywaySchemaHistoryPayload: Omit<CreateFlywaySchemaHistoryPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  CreateNotificationInput: CreateNotificationInput;
  CreateNotificationPayload: Omit<CreateNotificationPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  CreateUserGroupInput: CreateUserGroupInput;
  CreateUserGroupMembershipInput: CreateUserGroupMembershipInput;
  CreateUserGroupMembershipPayload: Omit<CreateUserGroupMembershipPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  CreateUserGroupPayload: Omit<CreateUserGroupPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  CreateUserInput: CreateUserInput;
  CreateUserPayload: Omit<CreateUserPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  Cursor: Scalars['Cursor']['output'];
  Datetime: Scalars['Datetime']['output'];
  DeleteEventTypeByNameInput: DeleteEventTypeByNameInput;
  DeleteEventTypeByRowIdInput: DeleteEventTypeByRowIdInput;
  DeleteEventTypeInput: DeleteEventTypeInput;
  DeleteEventTypePayload: Omit<DeleteEventTypePayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  DeleteFlywaySchemaHistoryByInstalledRankInput: DeleteFlywaySchemaHistoryByInstalledRankInput;
  DeleteFlywaySchemaHistoryInput: DeleteFlywaySchemaHistoryInput;
  DeleteFlywaySchemaHistoryPayload: Omit<DeleteFlywaySchemaHistoryPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  DeleteNotificationByRowIdInput: DeleteNotificationByRowIdInput;
  DeleteNotificationInput: DeleteNotificationInput;
  DeleteNotificationPayload: Omit<DeleteNotificationPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  DeleteUserByEmailInput: DeleteUserByEmailInput;
  DeleteUserGroupByEmailInput: DeleteUserGroupByEmailInput;
  DeleteUserGroupByNameInput: DeleteUserGroupByNameInput;
  DeleteUserGroupInput: DeleteUserGroupInput;
  DeleteUserGroupMembershipByRowIdInput: DeleteUserGroupMembershipByRowIdInput;
  DeleteUserGroupMembershipByUserEmailAndGroupEmailInput: DeleteUserGroupMembershipByUserEmailAndGroupEmailInput;
  DeleteUserGroupMembershipInput: DeleteUserGroupMembershipInput;
  DeleteUserGroupMembershipPayload: Omit<DeleteUserGroupMembershipPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  DeleteUserGroupPayload: Omit<DeleteUserGroupPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  DeleteUserInput: DeleteUserInput;
  DeleteUserPayload: Omit<DeleteUserPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  EventType: EventType;
  EventTypeCondition: EventTypeCondition;
  EventTypeConnection: EventTypeConnection;
  EventTypeEdge: EventTypeEdge;
  EventTypeInput: EventTypeInput;
  EventTypePatch: EventTypePatch;
  FlywaySchemaHistory: FlywaySchemaHistory;
  FlywaySchemaHistoryCondition: FlywaySchemaHistoryCondition;
  FlywaySchemaHistoryConnection: FlywaySchemaHistoryConnection;
  FlywaySchemaHistoryEdge: FlywaySchemaHistoryEdge;
  FlywaySchemaHistoryInput: FlywaySchemaHistoryInput;
  FlywaySchemaHistoryPatch: FlywaySchemaHistoryPatch;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Node: ResolversInterfaceTypes<ResolversParentTypes>['Node'];
  Notification: Notification;
  NotificationCondition: NotificationCondition;
  NotificationConnection: NotificationConnection;
  NotificationEdge: NotificationEdge;
  NotificationInput: NotificationInput;
  NotificationPatch: NotificationPatch;
  PageInfo: PageInfo;
  Query: {};
  String: Scalars['String']['output'];
  UpdateEventTypeByNameInput: UpdateEventTypeByNameInput;
  UpdateEventTypeByRowIdInput: UpdateEventTypeByRowIdInput;
  UpdateEventTypeInput: UpdateEventTypeInput;
  UpdateEventTypePayload: Omit<UpdateEventTypePayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  UpdateFlywaySchemaHistoryByInstalledRankInput: UpdateFlywaySchemaHistoryByInstalledRankInput;
  UpdateFlywaySchemaHistoryInput: UpdateFlywaySchemaHistoryInput;
  UpdateFlywaySchemaHistoryPayload: Omit<UpdateFlywaySchemaHistoryPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  UpdateNotificationByRowIdInput: UpdateNotificationByRowIdInput;
  UpdateNotificationInput: UpdateNotificationInput;
  UpdateNotificationPayload: Omit<UpdateNotificationPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  UpdateUserByEmailInput: UpdateUserByEmailInput;
  UpdateUserGroupByEmailInput: UpdateUserGroupByEmailInput;
  UpdateUserGroupByNameInput: UpdateUserGroupByNameInput;
  UpdateUserGroupInput: UpdateUserGroupInput;
  UpdateUserGroupMembershipByRowIdInput: UpdateUserGroupMembershipByRowIdInput;
  UpdateUserGroupMembershipByUserEmailAndGroupEmailInput: UpdateUserGroupMembershipByUserEmailAndGroupEmailInput;
  UpdateUserGroupMembershipInput: UpdateUserGroupMembershipInput;
  UpdateUserGroupMembershipPayload: Omit<UpdateUserGroupMembershipPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  UpdateUserGroupPayload: Omit<UpdateUserGroupPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  UpdateUserInput: UpdateUserInput;
  UpdateUserPayload: Omit<UpdateUserPayload, 'query'> & { query?: Maybe<ResolversParentTypes['Query']> };
  User: User;
  UserCondition: UserCondition;
  UserConnection: UserConnection;
  UserEdge: UserEdge;
  UserGroup: UserGroup;
  UserGroupCondition: UserGroupCondition;
  UserGroupConnection: UserGroupConnection;
  UserGroupEdge: UserGroupEdge;
  UserGroupInput: UserGroupInput;
  UserGroupMembership: UserGroupMembership;
  UserGroupMembershipCondition: UserGroupMembershipCondition;
  UserGroupMembershipConnection: UserGroupMembershipConnection;
  UserGroupMembershipEdge: UserGroupMembershipEdge;
  UserGroupMembershipInput: UserGroupMembershipInput;
  UserGroupMembershipPatch: UserGroupMembershipPatch;
  UserGroupPatch: UserGroupPatch;
  UserInput: UserInput;
  UserPatch: UserPatch;
};

export type CreateEventTypePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateEventTypePayload'] = ResolversParentTypes['CreateEventTypePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventType?: Resolver<Maybe<ResolversTypes['EventType']>, ParentType, ContextType>;
  eventTypeEdge?: Resolver<Maybe<ResolversTypes['EventTypeEdge']>, ParentType, ContextType, RequireFields<CreateEventTypePayloadEventTypeEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateFlywaySchemaHistoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateFlywaySchemaHistoryPayload'] = ResolversParentTypes['CreateFlywaySchemaHistoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flywaySchemaHistory?: Resolver<Maybe<ResolversTypes['FlywaySchemaHistory']>, ParentType, ContextType>;
  flywaySchemaHistoryEdge?: Resolver<Maybe<ResolversTypes['FlywaySchemaHistoryEdge']>, ParentType, ContextType, RequireFields<CreateFlywaySchemaHistoryPayloadFlywaySchemaHistoryEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateNotificationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateNotificationPayload'] = ResolversParentTypes['CreateNotificationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notification?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType>;
  notificationEdge?: Resolver<Maybe<ResolversTypes['NotificationEdge']>, ParentType, ContextType, RequireFields<CreateNotificationPayloadNotificationEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserGroupMembershipPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserGroupMembershipPayload'] = ResolversParentTypes['CreateUserGroupMembershipPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userGroupMembership?: Resolver<Maybe<ResolversTypes['UserGroupMembership']>, ParentType, ContextType>;
  userGroupMembershipEdge?: Resolver<Maybe<ResolversTypes['UserGroupMembershipEdge']>, ParentType, ContextType, RequireFields<CreateUserGroupMembershipPayloadUserGroupMembershipEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserGroupPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserGroupPayload'] = ResolversParentTypes['CreateUserGroupPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userGroup?: Resolver<Maybe<ResolversTypes['UserGroup']>, ParentType, ContextType>;
  userGroupEdge?: Resolver<Maybe<ResolversTypes['UserGroupEdge']>, ParentType, ContextType, RequireFields<CreateUserGroupPayloadUserGroupEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserPayload'] = ResolversParentTypes['CreateUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UserEdge']>, ParentType, ContextType, RequireFields<CreateUserPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export type DeleteEventTypePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteEventTypePayload'] = ResolversParentTypes['DeleteEventTypePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedEventTypeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  eventType?: Resolver<Maybe<ResolversTypes['EventType']>, ParentType, ContextType>;
  eventTypeEdge?: Resolver<Maybe<ResolversTypes['EventTypeEdge']>, ParentType, ContextType, RequireFields<DeleteEventTypePayloadEventTypeEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteFlywaySchemaHistoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteFlywaySchemaHistoryPayload'] = ResolversParentTypes['DeleteFlywaySchemaHistoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedFlywaySchemaHistoryId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  flywaySchemaHistory?: Resolver<Maybe<ResolversTypes['FlywaySchemaHistory']>, ParentType, ContextType>;
  flywaySchemaHistoryEdge?: Resolver<Maybe<ResolversTypes['FlywaySchemaHistoryEdge']>, ParentType, ContextType, RequireFields<DeleteFlywaySchemaHistoryPayloadFlywaySchemaHistoryEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteNotificationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteNotificationPayload'] = ResolversParentTypes['DeleteNotificationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedNotificationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  notification?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType>;
  notificationEdge?: Resolver<Maybe<ResolversTypes['NotificationEdge']>, ParentType, ContextType, RequireFields<DeleteNotificationPayloadNotificationEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserGroupMembershipPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserGroupMembershipPayload'] = ResolversParentTypes['DeleteUserGroupMembershipPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedUserGroupMembershipId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userGroupMembership?: Resolver<Maybe<ResolversTypes['UserGroupMembership']>, ParentType, ContextType>;
  userGroupMembershipEdge?: Resolver<Maybe<ResolversTypes['UserGroupMembershipEdge']>, ParentType, ContextType, RequireFields<DeleteUserGroupMembershipPayloadUserGroupMembershipEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserGroupPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserGroupPayload'] = ResolversParentTypes['DeleteUserGroupPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedUserGroupId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userGroup?: Resolver<Maybe<ResolversTypes['UserGroup']>, ParentType, ContextType>;
  userGroupEdge?: Resolver<Maybe<ResolversTypes['UserGroupEdge']>, ParentType, ContextType, RequireFields<DeleteUserGroupPayloadUserGroupEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserPayload'] = ResolversParentTypes['DeleteUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedUserId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UserEdge']>, ParentType, ContextType, RequireFields<DeleteUserPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventType'] = ResolversParentTypes['EventType']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rowId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventTypeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventTypeConnection'] = ResolversParentTypes['EventTypeConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['EventTypeEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['EventType']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventTypeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventTypeEdge'] = ResolversParentTypes['EventTypeEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['EventType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlywaySchemaHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['FlywaySchemaHistory'] = ResolversParentTypes['FlywaySchemaHistory']> = {
  checksum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  executionTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  installedBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  installedOn?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  installedRank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  script?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlywaySchemaHistoryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FlywaySchemaHistoryConnection'] = ResolversParentTypes['FlywaySchemaHistoryConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['FlywaySchemaHistoryEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['FlywaySchemaHistory']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlywaySchemaHistoryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FlywaySchemaHistoryEdge'] = ResolversParentTypes['FlywaySchemaHistoryEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['FlywaySchemaHistory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createEventType?: Resolver<Maybe<ResolversTypes['CreateEventTypePayload']>, ParentType, ContextType, RequireFields<MutationCreateEventTypeArgs, 'input'>>;
  createFlywaySchemaHistory?: Resolver<Maybe<ResolversTypes['CreateFlywaySchemaHistoryPayload']>, ParentType, ContextType, RequireFields<MutationCreateFlywaySchemaHistoryArgs, 'input'>>;
  createNotification?: Resolver<Maybe<ResolversTypes['CreateNotificationPayload']>, ParentType, ContextType, RequireFields<MutationCreateNotificationArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  createUserGroup?: Resolver<Maybe<ResolversTypes['CreateUserGroupPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserGroupArgs, 'input'>>;
  createUserGroupMembership?: Resolver<Maybe<ResolversTypes['CreateUserGroupMembershipPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserGroupMembershipArgs, 'input'>>;
  deleteEventType?: Resolver<Maybe<ResolversTypes['DeleteEventTypePayload']>, ParentType, ContextType, RequireFields<MutationDeleteEventTypeArgs, 'input'>>;
  deleteEventTypeByName?: Resolver<Maybe<ResolversTypes['DeleteEventTypePayload']>, ParentType, ContextType, RequireFields<MutationDeleteEventTypeByNameArgs, 'input'>>;
  deleteEventTypeByRowId?: Resolver<Maybe<ResolversTypes['DeleteEventTypePayload']>, ParentType, ContextType, RequireFields<MutationDeleteEventTypeByRowIdArgs, 'input'>>;
  deleteFlywaySchemaHistory?: Resolver<Maybe<ResolversTypes['DeleteFlywaySchemaHistoryPayload']>, ParentType, ContextType, RequireFields<MutationDeleteFlywaySchemaHistoryArgs, 'input'>>;
  deleteFlywaySchemaHistoryByInstalledRank?: Resolver<Maybe<ResolversTypes['DeleteFlywaySchemaHistoryPayload']>, ParentType, ContextType, RequireFields<MutationDeleteFlywaySchemaHistoryByInstalledRankArgs, 'input'>>;
  deleteNotification?: Resolver<Maybe<ResolversTypes['DeleteNotificationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteNotificationArgs, 'input'>>;
  deleteNotificationByRowId?: Resolver<Maybe<ResolversTypes['DeleteNotificationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteNotificationByRowIdArgs, 'input'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'input'>>;
  deleteUserByEmail?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserByEmailArgs, 'input'>>;
  deleteUserGroup?: Resolver<Maybe<ResolversTypes['DeleteUserGroupPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserGroupArgs, 'input'>>;
  deleteUserGroupByEmail?: Resolver<Maybe<ResolversTypes['DeleteUserGroupPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserGroupByEmailArgs, 'input'>>;
  deleteUserGroupByName?: Resolver<Maybe<ResolversTypes['DeleteUserGroupPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserGroupByNameArgs, 'input'>>;
  deleteUserGroupMembership?: Resolver<Maybe<ResolversTypes['DeleteUserGroupMembershipPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserGroupMembershipArgs, 'input'>>;
  deleteUserGroupMembershipByRowId?: Resolver<Maybe<ResolversTypes['DeleteUserGroupMembershipPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserGroupMembershipByRowIdArgs, 'input'>>;
  deleteUserGroupMembershipByUserEmailAndGroupEmail?: Resolver<Maybe<ResolversTypes['DeleteUserGroupMembershipPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserGroupMembershipByUserEmailAndGroupEmailArgs, 'input'>>;
  updateEventType?: Resolver<Maybe<ResolversTypes['UpdateEventTypePayload']>, ParentType, ContextType, RequireFields<MutationUpdateEventTypeArgs, 'input'>>;
  updateEventTypeByName?: Resolver<Maybe<ResolversTypes['UpdateEventTypePayload']>, ParentType, ContextType, RequireFields<MutationUpdateEventTypeByNameArgs, 'input'>>;
  updateEventTypeByRowId?: Resolver<Maybe<ResolversTypes['UpdateEventTypePayload']>, ParentType, ContextType, RequireFields<MutationUpdateEventTypeByRowIdArgs, 'input'>>;
  updateFlywaySchemaHistory?: Resolver<Maybe<ResolversTypes['UpdateFlywaySchemaHistoryPayload']>, ParentType, ContextType, RequireFields<MutationUpdateFlywaySchemaHistoryArgs, 'input'>>;
  updateFlywaySchemaHistoryByInstalledRank?: Resolver<Maybe<ResolversTypes['UpdateFlywaySchemaHistoryPayload']>, ParentType, ContextType, RequireFields<MutationUpdateFlywaySchemaHistoryByInstalledRankArgs, 'input'>>;
  updateNotification?: Resolver<Maybe<ResolversTypes['UpdateNotificationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateNotificationArgs, 'input'>>;
  updateNotificationByRowId?: Resolver<Maybe<ResolversTypes['UpdateNotificationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateNotificationByRowIdArgs, 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
  updateUserByEmail?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserByEmailArgs, 'input'>>;
  updateUserGroup?: Resolver<Maybe<ResolversTypes['UpdateUserGroupPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserGroupArgs, 'input'>>;
  updateUserGroupByEmail?: Resolver<Maybe<ResolversTypes['UpdateUserGroupPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserGroupByEmailArgs, 'input'>>;
  updateUserGroupByName?: Resolver<Maybe<ResolversTypes['UpdateUserGroupPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserGroupByNameArgs, 'input'>>;
  updateUserGroupMembership?: Resolver<Maybe<ResolversTypes['UpdateUserGroupMembershipPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserGroupMembershipArgs, 'input'>>;
  updateUserGroupMembershipByRowId?: Resolver<Maybe<ResolversTypes['UpdateUserGroupMembershipPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserGroupMembershipByRowIdArgs, 'input'>>;
  updateUserGroupMembershipByUserEmailAndGroupEmail?: Resolver<Maybe<ResolversTypes['UpdateUserGroupMembershipPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserGroupMembershipByUserEmailAndGroupEmailArgs, 'input'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'EventType' | 'FlywaySchemaHistory' | 'Notification' | 'Query' | 'User' | 'UserGroup' | 'UserGroupMembership', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type NotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  eventId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  eventTypeByEventId?: Resolver<Maybe<ResolversTypes['EventType']>, ParentType, ContextType>;
  groupEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  notificationType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rowId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userByUserEmail?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userGroupByGroupEmail?: Resolver<Maybe<ResolversTypes['UserGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationConnection'] = ResolversParentTypes['NotificationConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['NotificationEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Notification']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationEdge'] = ResolversParentTypes['NotificationEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allEventTypes?: Resolver<Maybe<ResolversTypes['EventTypeConnection']>, ParentType, ContextType, RequireFields<QueryAllEventTypesArgs, 'orderBy'>>;
  allFlywaySchemaHistories?: Resolver<Maybe<ResolversTypes['FlywaySchemaHistoryConnection']>, ParentType, ContextType, RequireFields<QueryAllFlywaySchemaHistoriesArgs, 'orderBy'>>;
  allNotifications?: Resolver<Maybe<ResolversTypes['NotificationConnection']>, ParentType, ContextType, RequireFields<QueryAllNotificationsArgs, 'orderBy'>>;
  allUserGroupMemberships?: Resolver<Maybe<ResolversTypes['UserGroupMembershipConnection']>, ParentType, ContextType, RequireFields<QueryAllUserGroupMembershipsArgs, 'orderBy'>>;
  allUserGroups?: Resolver<Maybe<ResolversTypes['UserGroupConnection']>, ParentType, ContextType, RequireFields<QueryAllUserGroupsArgs, 'orderBy'>>;
  allUsers?: Resolver<Maybe<ResolversTypes['UserConnection']>, ParentType, ContextType, RequireFields<QueryAllUsersArgs, 'orderBy'>>;
  eventType?: Resolver<Maybe<ResolversTypes['EventType']>, ParentType, ContextType, RequireFields<QueryEventTypeArgs, 'id'>>;
  eventTypeByName?: Resolver<Maybe<ResolversTypes['EventType']>, ParentType, ContextType, RequireFields<QueryEventTypeByNameArgs, 'name'>>;
  eventTypeByRowId?: Resolver<Maybe<ResolversTypes['EventType']>, ParentType, ContextType, RequireFields<QueryEventTypeByRowIdArgs, 'rowId'>>;
  flywaySchemaHistory?: Resolver<Maybe<ResolversTypes['FlywaySchemaHistory']>, ParentType, ContextType, RequireFields<QueryFlywaySchemaHistoryArgs, 'id'>>;
  flywaySchemaHistoryByInstalledRank?: Resolver<Maybe<ResolversTypes['FlywaySchemaHistory']>, ParentType, ContextType, RequireFields<QueryFlywaySchemaHistoryByInstalledRankArgs, 'installedRank'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>;
  notification?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<QueryNotificationArgs, 'id'>>;
  notificationByRowId?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<QueryNotificationByRowIdArgs, 'rowId'>>;
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  userByEmail?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByEmailArgs, 'email'>>;
  userGroup?: Resolver<Maybe<ResolversTypes['UserGroup']>, ParentType, ContextType, RequireFields<QueryUserGroupArgs, 'id'>>;
  userGroupByEmail?: Resolver<Maybe<ResolversTypes['UserGroup']>, ParentType, ContextType, RequireFields<QueryUserGroupByEmailArgs, 'email'>>;
  userGroupByName?: Resolver<Maybe<ResolversTypes['UserGroup']>, ParentType, ContextType, RequireFields<QueryUserGroupByNameArgs, 'name'>>;
  userGroupMembership?: Resolver<Maybe<ResolversTypes['UserGroupMembership']>, ParentType, ContextType, RequireFields<QueryUserGroupMembershipArgs, 'id'>>;
  userGroupMembershipByRowId?: Resolver<Maybe<ResolversTypes['UserGroupMembership']>, ParentType, ContextType, RequireFields<QueryUserGroupMembershipByRowIdArgs, 'rowId'>>;
  userGroupMembershipByUserEmailAndGroupEmail?: Resolver<Maybe<ResolversTypes['UserGroupMembership']>, ParentType, ContextType, RequireFields<QueryUserGroupMembershipByUserEmailAndGroupEmailArgs, 'groupEmail' | 'userEmail'>>;
};

export type UpdateEventTypePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateEventTypePayload'] = ResolversParentTypes['UpdateEventTypePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventType?: Resolver<Maybe<ResolversTypes['EventType']>, ParentType, ContextType>;
  eventTypeEdge?: Resolver<Maybe<ResolversTypes['EventTypeEdge']>, ParentType, ContextType, RequireFields<UpdateEventTypePayloadEventTypeEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateFlywaySchemaHistoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateFlywaySchemaHistoryPayload'] = ResolversParentTypes['UpdateFlywaySchemaHistoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flywaySchemaHistory?: Resolver<Maybe<ResolversTypes['FlywaySchemaHistory']>, ParentType, ContextType>;
  flywaySchemaHistoryEdge?: Resolver<Maybe<ResolversTypes['FlywaySchemaHistoryEdge']>, ParentType, ContextType, RequireFields<UpdateFlywaySchemaHistoryPayloadFlywaySchemaHistoryEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateNotificationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateNotificationPayload'] = ResolversParentTypes['UpdateNotificationPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notification?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType>;
  notificationEdge?: Resolver<Maybe<ResolversTypes['NotificationEdge']>, ParentType, ContextType, RequireFields<UpdateNotificationPayloadNotificationEdgeArgs, 'orderBy'>>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserGroupMembershipPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserGroupMembershipPayload'] = ResolversParentTypes['UpdateUserGroupMembershipPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userGroupMembership?: Resolver<Maybe<ResolversTypes['UserGroupMembership']>, ParentType, ContextType>;
  userGroupMembershipEdge?: Resolver<Maybe<ResolversTypes['UserGroupMembershipEdge']>, ParentType, ContextType, RequireFields<UpdateUserGroupMembershipPayloadUserGroupMembershipEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserGroupPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserGroupPayload'] = ResolversParentTypes['UpdateUserGroupPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userGroup?: Resolver<Maybe<ResolversTypes['UserGroup']>, ParentType, ContextType>;
  userGroupEdge?: Resolver<Maybe<ResolversTypes['UserGroupEdge']>, ParentType, ContextType, RequireFields<UpdateUserGroupPayloadUserGroupEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserPayload'] = ResolversParentTypes['UpdateUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UserEdge']>, ParentType, ContextType, RequireFields<UpdateUserPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userGroupMembershipsByUserEmail?: Resolver<ResolversTypes['UserGroupMembershipConnection'], ParentType, ContextType, RequireFields<UserUserGroupMembershipsByUserEmailArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['UserEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroup'] = ResolversParentTypes['UserGroup']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupConnection'] = ResolversParentTypes['UserGroupConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['UserGroupEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['UserGroup']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupEdge'] = ResolversParentTypes['UserGroupEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['UserGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupMembershipResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupMembership'] = ResolversParentTypes['UserGroupMembership']> = {
  groupEmail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rowId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userByUserEmail?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userEmail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userGroupByGroupEmail?: Resolver<Maybe<ResolversTypes['UserGroup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupMembershipConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupMembershipConnection'] = ResolversParentTypes['UserGroupMembershipConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['UserGroupMembershipEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['UserGroupMembership']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupMembershipEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupMembershipEdge'] = ResolversParentTypes['UserGroupMembershipEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['UserGroupMembership']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CreateEventTypePayload?: CreateEventTypePayloadResolvers<ContextType>;
  CreateFlywaySchemaHistoryPayload?: CreateFlywaySchemaHistoryPayloadResolvers<ContextType>;
  CreateNotificationPayload?: CreateNotificationPayloadResolvers<ContextType>;
  CreateUserGroupMembershipPayload?: CreateUserGroupMembershipPayloadResolvers<ContextType>;
  CreateUserGroupPayload?: CreateUserGroupPayloadResolvers<ContextType>;
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  Datetime?: GraphQLScalarType;
  DeleteEventTypePayload?: DeleteEventTypePayloadResolvers<ContextType>;
  DeleteFlywaySchemaHistoryPayload?: DeleteFlywaySchemaHistoryPayloadResolvers<ContextType>;
  DeleteNotificationPayload?: DeleteNotificationPayloadResolvers<ContextType>;
  DeleteUserGroupMembershipPayload?: DeleteUserGroupMembershipPayloadResolvers<ContextType>;
  DeleteUserGroupPayload?: DeleteUserGroupPayloadResolvers<ContextType>;
  DeleteUserPayload?: DeleteUserPayloadResolvers<ContextType>;
  EventType?: EventTypeResolvers<ContextType>;
  EventTypeConnection?: EventTypeConnectionResolvers<ContextType>;
  EventTypeEdge?: EventTypeEdgeResolvers<ContextType>;
  FlywaySchemaHistory?: FlywaySchemaHistoryResolvers<ContextType>;
  FlywaySchemaHistoryConnection?: FlywaySchemaHistoryConnectionResolvers<ContextType>;
  FlywaySchemaHistoryEdge?: FlywaySchemaHistoryEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  NotificationConnection?: NotificationConnectionResolvers<ContextType>;
  NotificationEdge?: NotificationEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdateEventTypePayload?: UpdateEventTypePayloadResolvers<ContextType>;
  UpdateFlywaySchemaHistoryPayload?: UpdateFlywaySchemaHistoryPayloadResolvers<ContextType>;
  UpdateNotificationPayload?: UpdateNotificationPayloadResolvers<ContextType>;
  UpdateUserGroupMembershipPayload?: UpdateUserGroupMembershipPayloadResolvers<ContextType>;
  UpdateUserGroupPayload?: UpdateUserGroupPayloadResolvers<ContextType>;
  UpdateUserPayload?: UpdateUserPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserGroup?: UserGroupResolvers<ContextType>;
  UserGroupConnection?: UserGroupConnectionResolvers<ContextType>;
  UserGroupEdge?: UserGroupEdgeResolvers<ContextType>;
  UserGroupMembership?: UserGroupMembershipResolvers<ContextType>;
  UserGroupMembershipConnection?: UserGroupMembershipConnectionResolvers<ContextType>;
  UserGroupMembershipEdge?: UserGroupMembershipEdgeResolvers<ContextType>;
};

