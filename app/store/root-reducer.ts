import { combineReducers } from '@reduxjs/toolkit';

import { Reducer } from '@/config/store.config';

import { userReducer } from './user/user-slice';

export const RootReducer = combineReducers({
  [Reducer.User]: userReducer,
});

export type TypeRootState = ReturnType<typeof RootReducer>;
