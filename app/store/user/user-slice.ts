import { createSlice } from '@reduxjs/toolkit';

import { TypeUserInitialState } from '@/shared/types/state.types';

import { getUserLocalStorage } from '@/utils/local-storage.utils';

import { AuthConfig } from '@/config/auth.config';
import { Slice } from '@/config/store.config';

import { checkAuth, login, logout, registration } from './user-thunk-actions';

const initialState: TypeUserInitialState = {
  user: getUserLocalStorage(AuthConfig.User),
  isLoading: false,
};

export const userSlice = createSlice({
  name: Slice.AppUser,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(registration.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })

      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })

      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      });
  },
});

export const { reducer: userReducer } = userSlice;
