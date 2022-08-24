import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Error = {
  __typename?: 'Error';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: UserResponse;
  register: UserResponse;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  organization: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  profession: Scalars['String'];
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['Float'];
  message: Scalars['String'];
  orderingPhysician: OrderingPhysician;
  orderingPhysicianUuid: Scalars['String'];
  radiologist: Radiologist;
  radiologistUuid: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['Float'];
  message: Scalars['String'];
  mrn: Scalars['String'];
  orderingPhysician: OrderingPhysician;
  orderingPhysicianUuid: Scalars['String'];
  priority: Scalars['String'];
  radiologist: Radiologist;
  radiologistUuid: Scalars['String'];
  status: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type OrderingPhysician = {
  __typename?: 'OrderingPhysician';
  createdAt: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Float'];
  lastName: Scalars['String'];
  notifications?: Maybe<Array<Notification>>;
  orders?: Maybe<Array<Order>>;
  organization: Scalars['String'];
  phone: Scalars['String'];
  profession: Scalars['String'];
  radiologistContact?: Maybe<Radiologist>;
  updatedAt: Scalars['String'];
  uuid: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  readContacts: Array<OrderingPhysician>;
  readOrders: Array<Order>;
  readUser: UserQuery;
  readUsers: Array<User>;
};


export type QueryReadContactsArgs = {
  uuid: Scalars['String'];
};


export type QueryReadOrdersArgs = {
  profession: Scalars['String'];
  uuid: Scalars['String'];
};


export type QueryReadUserArgs = {
  id: Scalars['Int'];
};

export type Radiologist = {
  __typename?: 'Radiologist';
  contacts?: Maybe<Array<OrderingPhysician>>;
  createdAt: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Float'];
  lastName: Scalars['String'];
  notifications: Array<Notification>;
  orders?: Maybe<Array<Order>>;
  organization: Scalars['String'];
  phone: Scalars['String'];
  profession: Scalars['String'];
  updatedAt: Scalars['String'];
  uuid: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Float'];
  profession: Scalars['String'];
  updatedAt: Scalars['String'];
  uuid: Scalars['String'];
};

export type UserQuery = {
  __typename?: 'UserQuery';
  doctor?: Maybe<Radiologist>;
  user: User;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  error?: Maybe<Error>;
  user?: Maybe<User>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', error?: { __typename?: 'Error', field: string, message: string } | null, user?: { __typename?: 'User', id: number } | null } };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  profession: Scalars['String'];
  organization: Scalars['String'];
  phone: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', error?: { __typename?: 'Error', field: string, message: string } | null, user?: { __typename?: 'User', id: number } | null } };

export type ReadContactsQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type ReadContactsQuery = { __typename?: 'Query', readContacts: Array<{ __typename?: 'OrderingPhysician', id: number, uuid: string, firstName: string, lastName: string, profession: string, organization: string }> };

export type ReadOrdersQueryVariables = Exact<{
  uuid: Scalars['String'];
  profession: Scalars['String'];
}>;


export type ReadOrdersQuery = { __typename?: 'Query', readOrders: Array<{ __typename?: 'Order', id: number, date: string, priority: string, status: string }> };

export type ReadUserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ReadUserQuery = { __typename?: 'Query', readUser: { __typename?: 'UserQuery', user: { __typename?: 'User', id: number, uuid: string, email: string, profession: string }, doctor?: { __typename?: 'Radiologist', id: number, uuid: string, firstName: string, lastName: string, organization: string, phone: string, orders?: Array<{ __typename?: 'Order', id: number, date: string, priority: string, status: string }> | null, contacts?: Array<{ __typename?: 'OrderingPhysician', id: number, firstName: string, lastName: string, profession: string, organization: string }> | null } | null } };


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    error {
      field
      message
    }
    user {
      id
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $firstName: String!, $lastName: String!, $profession: String!, $organization: String!, $phone: String!) {
  register(
    email: $email
    password: $password
    firstName: $firstName
    lastName: $lastName
    profession: $profession
    organization: $organization
    phone: $phone
  ) {
    error {
      field
      message
    }
    user {
      id
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const ReadContactsDocument = gql`
    query ReadContacts($uuid: String!) {
  readContacts(uuid: $uuid) {
    id
    uuid
    firstName
    lastName
    profession
    organization
  }
}
    `;

export function useReadContactsQuery(options: Omit<Urql.UseQueryArgs<ReadContactsQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadContactsQuery, ReadContactsQueryVariables>({ query: ReadContactsDocument, ...options });
};
export const ReadOrdersDocument = gql`
    query ReadOrders($uuid: String!, $profession: String!) {
  readOrders(uuid: $uuid, profession: $profession) {
    id
    date
    priority
    status
  }
}
    `;

export function useReadOrdersQuery(options: Omit<Urql.UseQueryArgs<ReadOrdersQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadOrdersQuery, ReadOrdersQueryVariables>({ query: ReadOrdersDocument, ...options });
};
export const ReadUserDocument = gql`
    query ReadUser($id: Int!) {
  readUser(id: $id) {
    user {
      id
      uuid
      email
      profession
    }
    doctor {
      id
      uuid
      firstName
      lastName
      organization
      phone
      orders {
        id
        date
        priority
        status
      }
      contacts {
        id
        firstName
        lastName
        profession
        organization
      }
    }
  }
}
    `;

export function useReadUserQuery(options: Omit<Urql.UseQueryArgs<ReadUserQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadUserQuery, ReadUserQueryVariables>({ query: ReadUserDocument, ...options });
};