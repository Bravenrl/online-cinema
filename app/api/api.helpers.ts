import { AxiosError } from 'axios';

export const getContentType = () => ({
  'Content-Type': 'application/json',
});

export const errCatch = (error: any): string =>
  error.response && error.response.data
    ? typeof error.response.data.message === 'object'
      ? error.response.data.message[0]
      : error.response.data.message
    : error.message;
