import axios from 'api/api';

import { TypeMovie } from '@/shared/types/movie.types';
import {
  TypeUserProfile,
  TypeUserProfileEdit,
  TypeUserProfileResponse,
} from '@/shared/types/user.types';

import { getUrl } from '@/utils/api.utils';

import { ApiRoute } from '@/config/api.config';

export const UserService = {
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

  async getProfile() {
    return axios.get<TypeUserProfileResponse>(
      ApiRoute.Users + ApiRoute.Profile
    );
  },

  async updateProfile(data: TypeUserProfile) {
    return axios.put<string>(ApiRoute.Users + ApiRoute.Profile, data);
  },

  async getById(_id: string) {
    return axios.get<TypeUserProfileResponse>(getUrl(ApiRoute.Users, _id));
  },

  async update(_id: string, data: TypeUserProfileEdit) {
    return axios.put<string>(getUrl(ApiRoute.Users, _id), data);
  },

  async deleteUser(_id: string) {
    return axios.delete<string>(getUrl(ApiRoute.Users, _id));
  },

  async getFavorites() {
    return axios.get<TypeMovie[]>(
      ApiRoute.Users + ApiRoute.Profile + ApiRoute.Favorites
    );
  },

  async toggleFavorites(movieId: string) {
    return axios.post(ApiRoute.Users + ApiRoute.Profile + ApiRoute.Favorites, {
      movieId,
    });
  },
};
