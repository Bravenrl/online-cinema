import { createSlice } from '@reduxjs/toolkit';

import { TypeUserInitialState } from '@/shared/types/state.types';

import { getUserLocalStorage } from '@/utils/local-storage.utils';

import { Slice } from '@/config/store.config';
import { AuthConfig } from '@/config/auth.config';

const initialState: TypeUserInitialState = {
  user: getUserLocalStorage(AuthConfig.User),
  isLoading: false,
};

export const userSlice = createSlice({
  name: Slice.AppUser,
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export const { reducer: userReducer } = userSlice;
