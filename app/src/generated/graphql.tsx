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
  firstName: Scalars['String'];
  id: Scalars['Float'];
  lastName: Scalars['String'];
  organization: Scalars['String'];
  primaryUuid: Scalars['String'];
  profession: Scalars['String'];
  secondaryUuid: Scalars['String'];
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
  deleteAllOrders: Scalars['Boolean'];
  login: UserResponse;
  readContact: UserQuery;
  register: UserResponse;
};


export type MutationCreateContactArgs = {
  contactUuid: Scalars['String'];
  uuid: Scalars['String'];
};


export type MutationCreateOrderArgs = {
  message: Scalars['String'];
  mrn: Scalars['String'];
  orderingPhysicianUuid: Scalars['String'];
  priority: Scalars['String'];
  radiologistUuid: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationReadContactArgs = {
  uuid: Scalars['String'];
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
  orderingPhysicianUuid: Scalars['String'];
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
  notifications: Array<Notification>;
  orders: Array<Order>;
  organization: Scalars['String'];
  phone: Scalars['String'];
  profession: Scalars['String'];
  updatedAt: Scalars['String'];
  uuid: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  readAllContacts: Array<Contact>;
  readAllOrders: Array<Order>;
  readContacts: Array<Contact>;
  readOrder: Order;
  readOrders: Array<Order>;
  readUser: UserQuery;
  readUsers: Array<User>;
};


export type QueryReadContactsArgs = {
  uuid: Scalars['String'];
};


export type QueryReadOrderArgs = {
  id: Scalars['Int'];
};


export type QueryReadOrdersArgs = {
  profession: Scalars['String'];
  uuid: Scalars['String'];
};


export type QueryReadUserArgs = {
  uuid: Scalars['String'];
};

export type Radiologist = {
  __typename?: 'Radiologist';
  createdAt: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Float'];
  lastName: Scalars['String'];
  notifications: Array<Notification>;
  orders: Array<Order>;
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

export type CreateContactMutationVariables = Exact<{
  uuid: Scalars['String'];
  contactUuid: Scalars['String'];
}>;


export type CreateContactMutation = { __typename?: 'Mutation', createContact: { __typename?: 'CreateContactResponse', success: boolean, error?: { __typename?: 'Error', field: string, message: string } | null } };

export type CreateOrderMutationVariables = Exact<{
  mrn: Scalars['String'];
  priority: Scalars['String'];
  message: Scalars['String'];
  radiologistUuid: Scalars['String'];
  orderingPhysicianUuid: Scalars['String'];
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: number } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', error?: { __typename?: 'Error', field: string, message: string } | null, user?: { __typename?: 'User', id: number, uuid: string } | null } };

export type ReadContactMutationVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type ReadContactMutation = { __typename?: 'Mutation', readContact: { __typename?: 'UserQuery', user: { __typename?: 'User', id: number, uuid: string, profession: string }, doctor?: { __typename?: 'Radiologist', id: number, firstName: string, lastName: string } | null } };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  profession: Scalars['String'];
  organization: Scalars['String'];
  phone: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', error?: { __typename?: 'Error', field: string, message: string } | null, user?: { __typename?: 'User', id: number, uuid: string } | null } };

export type ReadContactsQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type ReadContactsQuery = { __typename?: 'Query', readContacts: Array<{ __typename?: 'Contact', id: number, primaryUuid: string, secondaryUuid: string, firstName: string, lastName: string, organization: string, profession: string }> };

export type ReadOrderQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ReadOrderQuery = { __typename?: 'Query', readOrder: { __typename?: 'Order', id: number, mrn: string, date: string, priority: string, status: string, message: string, radiologistUuid: string, orderingPhysicianUuid: string, radiologist: { __typename?: 'Radiologist', id: number, uuid: string, firstName: string, lastName: string, profession: string }, orderingPhysician: { __typename?: 'OrderingPhysician', id: number, uuid: string, firstName: string, lastName: string, profession: string } } };

export type ReadOrdersQueryVariables = Exact<{
  uuid: Scalars['String'];
  profession: Scalars['String'];
}>;


export type ReadOrdersQuery = { __typename?: 'Query', readOrders: Array<{ __typename?: 'Order', id: number, date: string, priority: string, status: string }> };

export type ReadUserQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type ReadUserQuery = { __typename?: 'Query', readUser: { __typename?: 'UserQuery', user: { __typename?: 'User', id: number, uuid: string, email: string, profession: string }, doctor?: { __typename?: 'Radiologist', id: number, uuid: string, firstName: string, lastName: string, organization: string, phone: string, orders: Array<{ __typename?: 'Order', id: number, date: string, priority: string, status: string }> } | null } };


export const CreateContactDocument = gql`
    mutation CreateContact($uuid: String!, $contactUuid: String!) {
  createContact(uuid: $uuid, contactUuid: $contactUuid) {
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
    mutation CreateOrder($mrn: String!, $priority: String!, $message: String!, $radiologistUuid: String!, $orderingPhysicianUuid: String!) {
  createOrder(
    mrn: $mrn
    priority: $priority
    message: $message
    radiologistUuid: $radiologistUuid
    orderingPhysicianUuid: $orderingPhysicianUuid
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
      uuid
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const ReadContactDocument = gql`
    mutation ReadContact($uuid: String!) {
  readContact(uuid: $uuid) {
    user {
      id
      uuid
      profession
    }
    doctor {
      id
      firstName
      lastName
    }
  }
}
    `;

export function useReadContactMutation() {
  return Urql.useMutation<ReadContactMutation, ReadContactMutationVariables>(ReadContactDocument);
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
      uuid
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
    primaryUuid
    secondaryUuid
    firstName
    lastName
    organization
    profession
  }
}
    `;

export function useReadContactsQuery(options: Omit<Urql.UseQueryArgs<ReadContactsQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadContactsQuery, ReadContactsQueryVariables>({ query: ReadContactsDocument, ...options });
};
export const ReadOrderDocument = gql`
    query ReadOrder($id: Int!) {
  readOrder(id: $id) {
    id
    mrn
    date
    priority
    status
    message
    radiologistUuid
    radiologist {
      id
      uuid
      firstName
      lastName
      profession
    }
    orderingPhysicianUuid
    orderingPhysician {
      id
      uuid
      firstName
      lastName
      profession
    }
  }
}
    `;

export function useReadOrderQuery(options: Omit<Urql.UseQueryArgs<ReadOrderQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadOrderQuery, ReadOrderQueryVariables>({ query: ReadOrderDocument, ...options });
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
    query ReadUser($uuid: String!) {
  readUser(uuid: $uuid) {
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
    }
  }
}
    `;

export function useReadUserQuery(options: Omit<Urql.UseQueryArgs<ReadUserQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadUserQuery, ReadUserQueryVariables>({ query: ReadUserDocument, ...options });
};