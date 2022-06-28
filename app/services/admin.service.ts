import axios from 'api/api';

import { TypeUserProfileResponse } from '@/shared/types/user.types';

import { getUrl } from '@/utils/api.utils';

import { ApiRoute } from '@/config/api.config';

export const AdminService = {
  async getCountUsers() {
    return axios.get<number>(ApiRoute.Users + ApiRoute.Count);
  },

  async getAllUsers(searchTerm?: string) {
    return axios.get<TypeUserProfileResponse[]>(ApiRoute.Users, {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });
  },

  async deleteUser(_id: string) {
    return axios.delete<string>(getUrl(ApiRoute.Users, _id));
  },
};
