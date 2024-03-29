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

export type ContactResponse = {
  __typename?: 'ContactResponse';
  id: Scalars['Int'];
  orderingPhysician: User;
  orderingPhysicianId: Scalars['Int'];
  radiologist: User;
  radiologistId: Scalars['Int'];
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
  createRecentContact: Scalars['Boolean'];
  deleteOrder: Scalars['Boolean'];
  login: UserResponse;
  readContact: User;
  readOrder: OrderResponse;
  register: UserResponse;
  updateOrder: Scalars['Boolean'];
  updateOrderStatus: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
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


export type MutationCreateRecentContactArgs = {
  orderingPhysicianId: Scalars['Int'];
  radiologistId: Scalars['Int'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationReadContactArgs = {
  id: Scalars['Int'];
};


export type MutationReadOrderArgs = {
  id: Scalars['Int'];
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


export type MutationUpdateOrderArgs = {
  id: Scalars['Int'];
  message: Scalars['String'];
  mrn: Scalars['String'];
  orderingPhysicianId: Scalars['Int'];
  priority: Scalars['String'];
};


export type MutationUpdateOrderStatusArgs = {
  id: Scalars['Int'];
  status: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  organization: Scalars['String'];
  phone: Scalars['String'];
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['Float'];
  message: Scalars['String'];
  orderId: Scalars['Int'];
  recipientId: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['Float'];
  message: Scalars['String'];
  mrn: Scalars['String'];
  orderingPhysicianId: Scalars['Int'];
  priority: Scalars['Int'];
  radiologistId: Scalars['Int'];
  status: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  date: Scalars['String'];
  id: Scalars['Float'];
  message: Scalars['String'];
  mrn: Scalars['String'];
  orderingPhysician: User;
  orderingPhysicianId: Scalars['Int'];
  priority: Scalars['Int'];
  radiologist: User;
  radiologistId: Scalars['Int'];
  status: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  readAllContacts: Array<Contact>;
  readAllOrders: Array<Order>;
  readContacts: Array<ContactResponse>;
  readNotifications: Array<Notification>;
  readOrders: Array<Order>;
  readRecentContacts: Array<ContactResponse>;
  readUser: User;
  readUsers: Array<User>;
};


export type QueryReadContactsArgs = {
  id: Scalars['Int'];
};


export type QueryReadNotificationsArgs = {
  id: Scalars['Int'];
};


export type QueryReadOrdersArgs = {
  id: Scalars['Int'];
  profession: Scalars['String'];
};


export type QueryReadRecentContactsArgs = {
  id: Scalars['Int'];
  profession: Scalars['String'];
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

export type CreateRecentContactMutationVariables = Exact<{
  radiologistId: Scalars['Int'];
  orderingPhysicianId: Scalars['Int'];
}>;


export type CreateRecentContactMutation = { __typename?: 'Mutation', createRecentContact: boolean };

export type DeleteOrderMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteOrderMutation = { __typename?: 'Mutation', deleteOrder: boolean };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', error?: { __typename?: 'Error', field: string, message: string } | null, user?: { __typename?: 'User', id: number, email: string, firstName: string, lastName: string, profession: string, organization: string, phone: string } | null } };

export type ReadContactMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ReadContactMutation = { __typename?: 'Mutation', readContact: { __typename?: 'User', id: number, firstName: string, lastName: string, profession: string } };

export type ReadOrderMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ReadOrderMutation = { __typename?: 'Mutation', readOrder: { __typename?: 'OrderResponse', id: number, mrn: string, date: string, priority: number, status: number, message: string, radiologistId: number, orderingPhysicianId: number, radiologist: { __typename?: 'User', id: number, firstName: string, lastName: string, profession: string, organization: string }, orderingPhysician: { __typename?: 'User', id: number, firstName: string, lastName: string, profession: string, organization: string } } };

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

export type UpdateOrderMutationVariables = Exact<{
  id: Scalars['Int'];
  mrn: Scalars['String'];
  priority: Scalars['String'];
  message: Scalars['String'];
  orderingPhysicianId: Scalars['Int'];
}>;


export type UpdateOrderMutation = { __typename?: 'Mutation', updateOrder: boolean };

export type UpdateOrderStatusMutationVariables = Exact<{
  id: Scalars['Int'];
  status: Scalars['String'];
}>;


export type UpdateOrderStatusMutation = { __typename?: 'Mutation', updateOrderStatus: boolean };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  organization: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: boolean };

export type ReadContactsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ReadContactsQuery = { __typename?: 'Query', readContacts: Array<{ __typename?: 'ContactResponse', id: number, radiologistId: number, orderingPhysicianId: number, radiologist: { __typename?: 'User', id: number, email: string, firstName: string, lastName: string, profession: string, organization: string, phone: string }, orderingPhysician: { __typename?: 'User', id: number, email: string, firstName: string, lastName: string, profession: string, organization: string, phone: string } }> };

export type ReadNotificationsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ReadNotificationsQuery = { __typename?: 'Query', readNotifications: Array<{ __typename?: 'Notification', id: number, date: string, message: string, recipientId: number, orderId: number }> };

export type ReadOrdersQueryVariables = Exact<{
  id: Scalars['Int'];
  profession: Scalars['String'];
}>;


export type ReadOrdersQuery = { __typename?: 'Query', readOrders: Array<{ __typename?: 'Order', id: number, date: string, priority: number, status: number, createdAt: string }> };

export type ReadRecentContactsQueryVariables = Exact<{
  id: Scalars['Int'];
  profession: Scalars['String'];
}>;


export type ReadRecentContactsQuery = { __typename?: 'Query', readRecentContacts: Array<{ __typename?: 'ContactResponse', id: number, radiologistId: number, orderingPhysicianId: number, radiologist: { __typename?: 'User', id: number, email: string, firstName: string, lastName: string, profession: string, organization: string, phone: string }, orderingPhysician: { __typename?: 'User', id: number, email: string, firstName: string, lastName: string, profession: string, organization: string, phone: string } }> };

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
export const CreateRecentContactDocument = gql`
    mutation CreateRecentContact($radiologistId: Int!, $orderingPhysicianId: Int!) {
  createRecentContact(
    radiologistId: $radiologistId
    orderingPhysicianId: $orderingPhysicianId
  )
}
    `;

export function useCreateRecentContactMutation() {
  return Urql.useMutation<CreateRecentContactMutation, CreateRecentContactMutationVariables>(CreateRecentContactDocument);
};
export const DeleteOrderDocument = gql`
    mutation DeleteOrder($id: Int!) {
  deleteOrder(id: $id)
}
    `;

export function useDeleteOrderMutation() {
  return Urql.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(DeleteOrderDocument);
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
export const ReadContactDocument = gql`
    mutation ReadContact($id: Int!) {
  readContact(id: $id) {
    id
    firstName
    lastName
    profession
  }
}
    `;

export function useReadContactMutation() {
  return Urql.useMutation<ReadContactMutation, ReadContactMutationVariables>(ReadContactDocument);
};
export const ReadOrderDocument = gql`
    mutation ReadOrder($id: Int!) {
  readOrder(id: $id) {
    id
    mrn
    date
    priority
    status
    message
    radiologistId
    orderingPhysicianId
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

export function useReadOrderMutation() {
  return Urql.useMutation<ReadOrderMutation, ReadOrderMutationVariables>(ReadOrderDocument);
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
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($id: Int!, $mrn: String!, $priority: String!, $message: String!, $orderingPhysicianId: Int!) {
  updateOrder(
    id: $id
    mrn: $mrn
    priority: $priority
    message: $message
    orderingPhysicianId: $orderingPhysicianId
  )
}
    `;

export function useUpdateOrderMutation() {
  return Urql.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument);
};
export const UpdateOrderStatusDocument = gql`
    mutation UpdateOrderStatus($id: Int!, $status: String!) {
  updateOrderStatus(id: $id, status: $status)
}
    `;

export function useUpdateOrderStatusMutation() {
  return Urql.useMutation<UpdateOrderStatusMutation, UpdateOrderStatusMutationVariables>(UpdateOrderStatusDocument);
};
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: Int!, $firstName: String!, $lastName: String!, $organization: String!, $email: String!, $phone: String!) {
  updateUser(
    id: $id
    firstName: $firstName
    lastName: $lastName
    organization: $organization
    email: $email
    phone: $phone
  )
}
    `;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument);
};
export const ReadContactsDocument = gql`
    query ReadContacts($id: Int!) {
  readContacts(id: $id) {
    id
    radiologistId
    orderingPhysicianId
    radiologist {
      id
      email
      firstName
      lastName
      profession
      organization
      phone
    }
    orderingPhysician {
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

export function useReadContactsQuery(options: Omit<Urql.UseQueryArgs<ReadContactsQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadContactsQuery, ReadContactsQueryVariables>({ query: ReadContactsDocument, ...options });
};
export const ReadNotificationsDocument = gql`
    query ReadNotifications($id: Int!) {
  readNotifications(id: $id) {
    id
    date
    message
    recipientId
    orderId
  }
}
    `;

export function useReadNotificationsQuery(options: Omit<Urql.UseQueryArgs<ReadNotificationsQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadNotificationsQuery, ReadNotificationsQueryVariables>({ query: ReadNotificationsDocument, ...options });
};
export const ReadOrdersDocument = gql`
    query ReadOrders($id: Int!, $profession: String!) {
  readOrders(id: $id, profession: $profession) {
    id
    date
    priority
    status
    createdAt
  }
}
    `;

export function useReadOrdersQuery(options: Omit<Urql.UseQueryArgs<ReadOrdersQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadOrdersQuery, ReadOrdersQueryVariables>({ query: ReadOrdersDocument, ...options });
};
export const ReadRecentContactsDocument = gql`
    query ReadRecentContacts($id: Int!, $profession: String!) {
  readRecentContacts(id: $id, profession: $profession) {
    id
    radiologistId
    orderingPhysicianId
    radiologist {
      id
      email
      firstName
      lastName
      profession
      organization
      phone
    }
    orderingPhysician {
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

export function useReadRecentContactsQuery(options: Omit<Urql.UseQueryArgs<ReadRecentContactsQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadRecentContactsQuery, ReadRecentContactsQueryVariables>({ query: ReadRecentContactsDocument, ...options });
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