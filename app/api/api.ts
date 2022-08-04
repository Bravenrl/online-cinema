import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

import { AuthService } from '@/services/auth.service';

import { removeToken } from '@/utils/token.utils';

import { API_URL, HttpCode } from '@/config/api.config';
import { AuthConfig } from '@/config/auth.config';

import { errCatch, getContentType } from './api.helpers';

export const axiosFree = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
});

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const accessToken = Cookies.get(AuthConfig.AccessToken);
  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError & { config: { _isRetry: boolean } }) => {
    const { config, response } = error;

    if (
      (response?.status === HttpCode.Unauthorized ||
        errCatch(error) === AuthConfig.JwtExpired ||
        errCatch(error) === AuthConfig.JwtProvided) &&
      config &&
      !config?._isRetry
    ) {
      config._isRetry = true;
      try {
        await AuthService.getNewTokens();
        return axiosInstance.request(config);
      } catch (error) {
        if (errCatch(error) === AuthConfig.JwtExpired) {
          removeToken();
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
