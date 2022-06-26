import { createAsyncThunk } from '@reduxjs/toolkit';
import { errCatch } from 'api/api.helpers';
import { toast } from 'react-toastify';

import { TypeUserAuth, TypeUserAuthResponse } from '@/shared/types/user.types';

import { AuthService } from '@/services/auth/auth.service';

import { toastError } from '@/utils/toast-error.utils';

import { AuthConfig } from '@/config/auth.config';
import { AsyncThunk } from '@/config/store.config';
import { ToastMessages } from '@/config/toast.config';

export const registration = createAsyncThunk<TypeUserAuthResponse, TypeUserAuth>(
  AsyncThunk.Registration,
  async ({ email, password }, thunkApi) => {
    try {
      const data = await AuthService.registration(email, password);
      toast.success(ToastMessages.Registration);
      return data;
    } catch (error) {
      toastError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk<TypeUserAuthResponse, TypeUserAuth>(
  AsyncThunk.Login,
  async ({ email, password }, thunkApi) => {
    try {
      const data = await AuthService.login(email, password);
      toast.success(ToastMessages.Login);
      return data;
    } catch (error) {
      toastError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(AsyncThunk.Logout, async () => {
  AuthService.logout();
});

export const checkAuth = createAsyncThunk<TypeUserAuthResponse>(
  AsyncThunk.CheckAuthStatus,
  async (_, thunkApi) => {
    try {
      const data = await AuthService.getNewTokens();
      return data;
    } catch (error) {
      const errorMessage = errCatch(error);

      if (errorMessage === AuthConfig.JwtExpired) {
        toastError(error, ToastMessages.JWT);
        thunkApi.dispatch(logout());
      } else {
        toastError(error);
      }
      return thunkApi.rejectWithValue(error);
    }
  }
);
