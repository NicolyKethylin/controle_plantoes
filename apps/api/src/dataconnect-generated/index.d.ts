import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateShiftData {
  shift_insert: Shift_Key;
}

export interface CreateShiftVariables {
  hospitalId: UUIDString;
  shiftTypeId: UUIDString;
  userId: UUIDString;
  date: DateString;
  durationInMinutes: number;
  startTime: TimestampString;
  endTime: TimestampString;
  notes?: string | null;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  displayName: string;
  email?: string | null;
}

export interface GetUserData {
  user?: {
    id: UUIDString;
    displayName: string;
    email?: string | null;
    createdAt: TimestampString;
  } & User_Key;
}

export interface Hospital_Key {
  id: UUIDString;
  __typename?: 'Hospital_Key';
}

export interface ListHospitalsData {
  hospitals: ({
    id: UUIDString;
    name: string;
    address: string;
    phoneNumber?: string | null;
  } & Hospital_Key)[];
}

export interface ShiftGroup_Key {
  id: UUIDString;
  __typename?: 'ShiftGroup_Key';
}

export interface ShiftType_Key {
  id: UUIDString;
  __typename?: 'ShiftType_Key';
}

export interface Shift_Key {
  id: UUIDString;
  __typename?: 'Shift_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect): QueryPromise<GetUserData, undefined>;

interface ListHospitalsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHospitalsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListHospitalsData, undefined>;
  operationName: string;
}
export const listHospitalsRef: ListHospitalsRef;

export function listHospitals(): QueryPromise<ListHospitalsData, undefined>;
export function listHospitals(dc: DataConnect): QueryPromise<ListHospitalsData, undefined>;

interface CreateShiftRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateShiftVariables): MutationRef<CreateShiftData, CreateShiftVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateShiftVariables): MutationRef<CreateShiftData, CreateShiftVariables>;
  operationName: string;
}
export const createShiftRef: CreateShiftRef;

export function createShift(vars: CreateShiftVariables): MutationPromise<CreateShiftData, CreateShiftVariables>;
export function createShift(dc: DataConnect, vars: CreateShiftVariables): MutationPromise<CreateShiftData, CreateShiftVariables>;

