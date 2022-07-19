import axios from 'api/api';

import { ApiRoute } from '@/config/api.config';

export const FileService = {
  async upload(file: FormData, folder?: string) {
    return axios.post<{ url: string; name: string }[]>(ApiRoute.Files, file, {
      params: { folder },
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};
