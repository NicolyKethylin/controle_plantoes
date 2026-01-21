import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

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

/** Generated Node Admin SDK operation action function for the 'CreateUser' Mutation. Allow users to execute without passing in DataConnect. */
export function createUser(dc: DataConnect, vars: CreateUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateUserData>>;
/** Generated Node Admin SDK operation action function for the 'CreateUser' Mutation. Allow users to pass in custom DataConnect instances. */
export function createUser(vars: CreateUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateUserData>>;

/** Generated Node Admin SDK operation action function for the 'GetUser' Query. Allow users to execute without passing in DataConnect. */
export function getUser(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetUserData>>;
/** Generated Node Admin SDK operation action function for the 'GetUser' Query. Allow users to pass in custom DataConnect instances. */
export function getUser(options?: OperationOptions): Promise<ExecuteOperationResponse<GetUserData>>;

/** Generated Node Admin SDK operation action function for the 'ListHospitals' Query. Allow users to execute without passing in DataConnect. */
export function listHospitals(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListHospitalsData>>;
/** Generated Node Admin SDK operation action function for the 'ListHospitals' Query. Allow users to pass in custom DataConnect instances. */
export function listHospitals(options?: OperationOptions): Promise<ExecuteOperationResponse<ListHospitalsData>>;

/** Generated Node Admin SDK operation action function for the 'CreateShift' Mutation. Allow users to execute without passing in DataConnect. */
export function createShift(dc: DataConnect, vars: CreateShiftVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateShiftData>>;
/** Generated Node Admin SDK operation action function for the 'CreateShift' Mutation. Allow users to pass in custom DataConnect instances. */
export function createShift(vars: CreateShiftVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateShiftData>>;

