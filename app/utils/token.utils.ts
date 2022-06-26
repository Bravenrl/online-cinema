import Cookies from 'js-cookie';

import { TypeUserAuthResponse } from '@/shared/types/user.types';

import { AuthConfig } from '@/config/auth.config';

export const saveToken = ({
  accessToken,
  refreshToken,
}: TypeUserAuthResponse) => {
  Cookies.set(AuthConfig.AccessToken, accessToken);
  Cookies.set(AuthConfig.RefreshToken, refreshToken);
};


export const removeToken = () => {
    Cookies.remove(AuthConfig.AccessToken);
    Cookies.remove(AuthConfig.RefreshToken);
  };