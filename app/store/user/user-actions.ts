import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { TypeUserAuth, TypeUserAuthResponse } from '@/shared/types/user.types';

import { AuthService } from '@/services/auth/auth.service';

import { toastError } from '@/utils/toast-error.utils';

import { AsyncThunk } from '@/config/store.config';
import { ToastMessages } from '@/config/toast.config';


export const register = createAsyncThunk<TypeUserAuthResponse, TypeUserAuth>(
  AsyncThunk.Register,
  async ({ email, password }, thunkApi) => {
    try {
      const data = await AuthService.register(email, password);
      toast.success(ToastMessages.Register);
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
      toast.success(ToastMessages.Register);
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
  AsyncThunk.Login,
  async (_, thunkApi) => {
    try {
      const data = await AuthService.getNewTokens();
      return data;
    } catch (error) {
      toastError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);
