import { TypeUser, TypeUserAuthResponse } from '@/shared/types/user.types';

import { AuthConfig } from '@/config/auth.config';

import { removeToken, saveToken } from './token.utils';

export const getUserLocalStorage = (name: string): TypeUser | null => {
  if (typeof localStorage === 'undefined') return null;

  const user = localStorage.getItem(name);
  return user ? JSON.parse(user) : null;
};

export const setUserLocalStorage = (data: TypeUserAuthResponse) => {
  saveToken(data);
  localStorage.setItem(AuthConfig.User, JSON.stringify(data.user));
};

export const removeUserLocalStorage = () => {
  removeToken();
  localStorage.removeItem(AuthConfig.User);
};
