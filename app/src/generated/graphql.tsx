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

export type Contact = {
  __typename?: 'Contact';
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  orderingPhysicianId: Scalars['Int'];
  radiologistId: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type CreateContactResponse = {
  __typename?: 'CreateContactResponse';
  error?: Maybe<Error>;
  success: Scalars['Boolean'];
};

export type Error = {
  __typename?: 'Error';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createContact: CreateContactResponse;
  createOrder: Order;
  login: UserResponse;
  register: UserResponse;
};


export type MutationCreateContactArgs = {
  orderingPhysicianId: Scalars['Int'];
  radiologistId: Scalars['Int'];
};


export type MutationCreateOrderArgs = {
  message: Scalars['String'];
  mrn: Scalars['String'];
  orderingPhysicianId: Scalars['Int'];
  priority: Scalars['String'];
  radiologistId: Scalars['Int'];
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

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['Float'];
  message: Scalars['String'];
  mrn: Scalars['String'];
  orderingPhysicianId: Scalars['Int'];
  priority: Scalars['String'];
  radiologistId: Scalars['Int'];
  status: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  order: Order;
  orderingPhysician: User;
  radiologist: User;
};

export type Query = {
  __typename?: 'Query';
  readAllContacts: Array<Contact>;
  readAllOrders: Array<Order>;
  readContacts: Array<Contact>;
  readOrder: OrderResponse;
  readOrders: Array<Order>;
  readUser: User;
  readUsers: Array<User>;
};


export type QueryReadContactsArgs = {
  id: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryReadOrderArgs = {
  id: Scalars['Int'];
};


export type QueryReadOrdersArgs = {
  id: Scalars['Int'];
  profession: Scalars['String'];
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryReadUserArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Float'];
  lastName: Scalars['String'];
  organization: Scalars['String'];
  phone: Scalars['String'];
  profession: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  error?: Maybe<Error>;
  user?: Maybe<User>;
};

export type CreateContactMutationVariables = Exact<{
  radiologistId: Scalars['Int'];
  orderingPhysicianId: Scalars['Int'];
}>;


export type CreateContactMutation = { __typename?: 'Mutation', createContact: { __typename?: 'CreateContactResponse', success: boolean, error?: { __typename?: 'Error', field: string, message: string } | null } };

export type CreateOrderMutationVariables = Exact<{
  mrn: Scalars['String'];
  priority: Scalars['String'];
  message: Scalars['String'];
  radiologistId: Scalars['Int'];
  orderingPhysicianId: Scalars['Int'];
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: number } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', error?: { __typename?: 'Error', field: string, message: string } | null, user?: { __typename?: 'User', id: number, email: string, firstName: string, lastName: string, profession: string, organization: string, phone: string } | null } };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  profession: Scalars['String'];
  organization: Scalars['String'];
  phone: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', error?: { __typename?: 'Error', field: string, message: string } | null, user?: { __typename?: 'User', id: number, email: string, firstName: string, lastName: string, profession: string, organization: string, phone: string } | null } };

export type ReadContactsQueryVariables = Exact<{
  id: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
}>;


export type ReadContactsQuery = { __typename?: 'Query', readContacts: Array<{ __typename?: 'Contact', id: number, radiologistId: number, orderingPhysicianId: number }> };

export type ReadOrderQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ReadOrderQuery = { __typename?: 'Query', readOrder: { __typename?: 'OrderResponse', order: { __typename?: 'Order', id: number, mrn: string, date: string, priority: string, status: string, message: string, radiologistId: number, orderingPhysicianId: number }, radiologist: { __typename?: 'User', id: number, firstName: string, lastName: string, profession: string, organization: string }, orderingPhysician: { __typename?: 'User', id: number, firstName: string, lastName: string, profession: string, organization: string } } };

export type ReadOrdersQueryVariables = Exact<{
  id: Scalars['Int'];
  profession: Scalars['String'];
  take?: InputMaybe<Scalars['Int']>;
}>;


export type ReadOrdersQuery = { __typename?: 'Query', readOrders: Array<{ __typename?: 'Order', id: number, date: string, priority: string, status: string }> };

export type ReadUserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ReadUserQuery = { __typename?: 'Query', readUser: { __typename?: 'User', id: number, email: string, firstName: string, lastName: string, profession: string, organization: string, phone: string } };


export const CreateContactDocument = gql`
    mutation CreateContact($radiologistId: Int!, $orderingPhysicianId: Int!) {
  createContact(
    radiologistId: $radiologistId
    orderingPhysicianId: $orderingPhysicianId
  ) {
    error {
      field
      message
    }
    success
  }
}
    `;

export function useCreateContactMutation() {
  return Urql.useMutation<CreateContactMutation, CreateContactMutationVariables>(CreateContactDocument);
};
export const CreateOrderDocument = gql`
    mutation CreateOrder($mrn: String!, $priority: String!, $message: String!, $radiologistId: Int!, $orderingPhysicianId: Int!) {
  createOrder(
    mrn: $mrn
    priority: $priority
    message: $message
    radiologistId: $radiologistId
    orderingPhysicianId: $orderingPhysicianId
  ) {
    id
  }
}
    `;

export function useCreateOrderMutation() {
  return Urql.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument);
};
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    error {
      field
      message
    }
    user {
      id
      email
      firstName
      lastName
      profession
      organization
      phone
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
      email
      firstName
      lastName
      profession
      organization
      phone
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const ReadContactsDocument = gql`
    query ReadContacts($id: Int!, $take: Int) {
  readContacts(id: $id, take: $take) {
    id
    radiologistId
    orderingPhysicianId
  }
}
    `;

export function useReadContactsQuery(options: Omit<Urql.UseQueryArgs<ReadContactsQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadContactsQuery, ReadContactsQueryVariables>({ query: ReadContactsDocument, ...options });
};
export const ReadOrderDocument = gql`
    query ReadOrder($id: Int!) {
  readOrder(id: $id) {
    order {
      id
      mrn
      date
      priority
      status
      message
      radiologistId
      orderingPhysicianId
    }
    radiologist {
      id
      firstName
      lastName
      profession
      organization
    }
    orderingPhysician {
      id
      firstName
      lastName
      profession
      organization
    }
  }
}
    `;

export function useReadOrderQuery(options: Omit<Urql.UseQueryArgs<ReadOrderQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadOrderQuery, ReadOrderQueryVariables>({ query: ReadOrderDocument, ...options });
};
export const ReadOrdersDocument = gql`
    query ReadOrders($id: Int!, $profession: String!, $take: Int) {
  readOrders(id: $id, profession: $profession, take: $take) {
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
    id
    email
    firstName
    lastName
    profession
    organization
    phone
  }
}
    `;

export function useReadUserQuery(options: Omit<Urql.UseQueryArgs<ReadUserQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadUserQuery, ReadUserQueryVariables>({ query: ReadUserDocument, ...options });
};