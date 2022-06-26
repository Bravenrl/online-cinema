import { axiosFree } from 'api/api';
import { getContentType } from 'api/api.helpers';
import Cookies from 'js-cookie';

import { TypeUserAuthResponse } from '@/shared/types/user.types';

import {
  removeUserLocalStorage,
  setUserLocalStorage,
} from '@/utils/local-storage.utils';

import { ApiRoute } from '@/config/api.config';
import { AuthConfig } from '@/config/auth.config';

export const AuthService = {
  async registration(email: string, password: string) {
    const { data } = await axiosFree.post<TypeUserAuthResponse>(
      ApiRoute.Auth + ApiRoute.Registration,
      { email, password }
    );

    if (data.accessToken) {
      setUserLocalStorage(data);
    }
    return data;
  },

  async login(email: string, password: string) {
    const { data } = await axiosFree.post<TypeUserAuthResponse>(
      ApiRoute.Auth + ApiRoute.Login,
      { email, password }
    );

    if (data.accessToken) {
      setUserLocalStorage(data);
    }
    return data;
  },

  async getNewTokens() {
    const refreshToken = Cookies.get(AuthConfig.RefreshToken);
    const { data } = await axiosFree.post<TypeUserAuthResponse>(
      ApiRoute.Auth + ApiRoute.Login + ApiRoute.RefreshToken,
      refreshToken,
      { headers: getContentType() }
    );

    if (data.accessToken) {
      setUserLocalStorage(data);
    }
    return data;
  },

  logout() {
    removeUserLocalStorage();
  },
};
